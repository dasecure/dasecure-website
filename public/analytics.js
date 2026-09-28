/* Site analytics — GA4 + click, section, scroll, FAQ and form tracking. Drop-in for static sites.
 * Load on every page: <script src="/analytics.js" defer></script>. Set GA_ID; placeholder = console-only.
 * ?ga_debug=1 → DebugView + console. Name unnamed sections with data-ga-section="…".
 * Custom events without JS: <button data-ga-event="pricing_toggle" data-ga-plan="pro">…
 * Events: page_view, store_click, cta_click, nav_click, outbound_click, internal_click, ui_click,
 * faq_toggle, section_view, section_time, scroll_depth, email_click, tel_click, file_download,
 * form_submit, page_not_found (body data-ga-404), plus any data-ga-event.
 */
(function () {
  'use strict';

  var GA_ID = 'G-R9LHW0V9VC'; // ← GA4 measurement ID

  var LIVE = /^G-[A-Z0-9]{6,}$/.test(GA_ID) && GA_ID !== 'G-XXXXXXXXXX';
  var qs = location.search || '';
  var DEBUG = /[?&]ga_debug=1\b/.test(qs) || !LIVE;
  var HOST = location.hostname.replace(/^www\./, '');

  /* ---------- gtag bootstrap ---------- */
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;

  // Privacy defaults: no ads features, no Google signals. Visitors in the EEA, UK and
  // Switzerland get analytics_storage denied (no cookies; GA models them from
  // cookieless pings). Everyone else is measured normally.
  gtag('consent', 'default', {
    ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied',
    analytics_storage: 'granted'
  });
  gtag('consent', 'default', {
    analytics_storage: 'denied',
    region: ['AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IE','IT','LV','LT',
             'LU','MT','NL','PL','PT','RO','SK','SI','ES','SE','IS','LI','NO','GB','CH']
  });

  gtag('js', new Date());
  gtag('config', GA_ID, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    debug_mode: DEBUG && LIVE ? true : undefined
  });

  if (LIVE) {
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_ID);
    document.head.appendChild(s);
  }

  /* ---------- helpers ---------- */
  function send(name, params) {
    params = params || {};
    params.page_path = params.page_path || location.pathname;
    if (DEBUG && window.console) console.log('[analytics]', name, params);
    try { gtag('event', name, params); } catch (e) {}
  }
  window.siteTrack = send; // for ad-hoc events from other scripts

  function clean(t, n) {
    return (t || '').replace(/\s+/g, ' ').trim().slice(0, n || 80);
  }
  function labelOf(el) {
    return clean(el.getAttribute('data-ga-label') || el.getAttribute('aria-label') ||
      el.innerText || el.textContent || el.getAttribute('title') || el.id || el.tagName);
  }
  function sectionOf(el) {
    var s = el.closest('[data-ga-section],section,header,footer,nav');
    if (!s) return 'page';
    return s.getAttribute('data-ga-section') || s.id ||
      (s.tagName === 'NAV' ? 'nav' : s.tagName === 'FOOTER' ? 'footer' : s.tagName === 'HEADER' ? 'header' : 'section');
  }
  function navArea(el) {
    if (el.closest('footer')) return 'footer';
    if (el.closest('.mobile-nav,#mobileNav,[data-ga-nav="mobile"]')) return 'mobile_nav';
    if (el.closest('nav')) return 'header';
    return '';
  }
  function storeOf(href) {
    if (/play\.google\.com/.test(href)) return 'google_play';
    if (/apps\.apple\.com/.test(href)) return /[?&]mt=12\b/.test(href) ? 'mac_app_store' : 'app_store';
    return '';
  }

  /* ---------- clicks (one delegated listener) ---------- */
  document.addEventListener('click', function (ev) {
    var el = ev.target.closest && ev.target.closest('a[href],button,[role="button"],summary,[data-ga-click]');
    if (!el || el.hasAttribute('data-ga-ignore')) return;

    var section = sectionOf(el);
    var label = labelOf(el);

    if (el.tagName === 'SUMMARY') {
      // <details> FAQs: which questions people open is the best signal for what to rewrite.
      var d = el.parentElement;
      send('faq_toggle', { question: label, action: d && d.open ? 'close' : 'open', section: section });
      return;
    }

    if (el.tagName !== 'A') {
      // Elements carrying data-ga-event are reported by initCustom() instead.
      if (el.hasAttribute('data-ga-event')) return;
      send('ui_click', { label: label, control: el.id || el.className || el.tagName.toLowerCase(), section: section });
      return;
    }

    var href = el.getAttribute('href') || '';
    var url;
    try { url = new URL(href, location.href); } catch (e) { return; }

    if (el.hasAttribute('data-ga-event')) return;
    if (url.protocol === 'mailto:') { send('email_click', { label: url.pathname, section: section }); return; }
    if (url.protocol === 'tel:') { send('tel_click', { label: url.pathname, section: section }); return; }
    if (/\.(pdf|zip|dmg|pkg|exe|msi|apk|docx?|xlsx?|pptx?|csv)$/i.test(url.pathname)) {
      send('file_download', { file: url.pathname.split('/').pop(), link_url: url.href, section: section }); return;
    }

    var store = storeOf(url.href);
    if (store) {
      send('store_click', {
        store: store,
        placement: el.classList.contains('appr') ? 'approval_card' : section,
        section: section,
        link_url: url.href
      });
      return;
    }

    var area = navArea(el);
    var sameSite = url.hostname.replace(/^www\./, '') === HOST;
    var target = sameSite ? (url.pathname + url.hash) : url.href;

    if (el.classList.contains('btn')) {
      send('cta_click', { label: label, target: target, section: section, nav_area: area || undefined });
    } else if (area) {
      send('nav_click', { label: label, target: target, nav_area: area });
    } else if (!sameSite) {
      send('outbound_click', { label: label, target: target, section: section });
    } else {
      send('internal_click', { label: label, target: target, section: section });
    }
  }, true);

  /* ---------- section views + time on section ---------- */
  function initSections() {
    var secs = Array.prototype.slice.call(document.querySelectorAll('main section, body section, footer'));
    if (!secs.length || !('IntersectionObserver' in window)) return;
    var seen = {}, since = {}, total = {};

    function nameOf(s) { return s.getAttribute('data-ga-section') || s.id || (s.tagName === 'FOOTER' ? 'footer' : 'section'); }

    var io = new IntersectionObserver(function (entries) {
      var now = Date.now();
      entries.forEach(function (e) {
        var n = nameOf(e.target);
        if (e.isIntersecting && (e.intersectionRatio >= 0.4 || e.intersectionRect.height >= window.innerHeight * 0.5)) {
          if (!seen[n]) {
            seen[n] = 1;
            send('section_view', { section: n, section_index: secs.indexOf(e.target) + 1 });
          }
          if (!since[n]) since[n] = now;
        } else if (since[n]) {
          total[n] = (total[n] || 0) + (now - since[n]);
          since[n] = 0;
        }
      });
    }, { threshold: [0, 0.1, 0.25, 0.4, 0.6, 0.8] });
    secs.forEach(function (s) { io.observe(s); });

    var flushed = false;
    function flush() {
      if (flushed) return;
      flushed = true;
      var now = Date.now();
      Object.keys(since).forEach(function (n) {
        if (since[n]) { total[n] = (total[n] || 0) + (now - since[n]); since[n] = 0; }
      });
      Object.keys(total).forEach(function (n) {
        var secsOn = Math.round(total[n] / 1000);
        if (secsOn >= 2) send('section_time', { section: n, seconds: secsOn, value: secsOn, transport_type: 'beacon' });
      });
    }
    document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'hidden') flush(); });
    window.addEventListener('pagehide', flush);
  }

  /* ---------- scroll depth ---------- */
  function initScroll() {
    var marks = [25, 50, 75, 100], hit = {}, ticking = false;
    function check() {
      ticking = false;
      var d = document.documentElement;
      var max = Math.max(d.scrollHeight - window.innerHeight, 1);
      var pct = Math.min(100, Math.round((window.scrollY || d.scrollTop) / max * 100));
      marks.forEach(function (m) {
        if (pct >= m - (m === 100 ? 2 : 0) && !hit[m]) { hit[m] = 1; send('scroll_depth', { percent: m }); }
      });
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(check); }
    }, { passive: true });
  }

  /* ---------- declarative events + forms ---------- */
  function initCustom() {
    function params(el) {
      var p = { section: sectionOf(el) };
      Array.prototype.forEach.call(el.attributes, function (a) {
        if (a.name.indexOf('data-ga-') === 0 && a.name !== 'data-ga-event' && a.name !== 'data-ga-section')
          p[a.name.slice(8).replace(/-/g, '_')] = a.value;
      });
      return p;
    }
    document.addEventListener('click', function (ev) {
      var el = ev.target.closest && ev.target.closest('[data-ga-event]');
      if (el && el.tagName !== 'INPUT' && el.tagName !== 'SELECT') send(el.getAttribute('data-ga-event'), params(el));
    }, true);
    document.addEventListener('change', function (ev) {
      var el = ev.target;
      if (el.matches && el.matches('input[data-ga-event],select[data-ga-event]')) {
        var p = params(el); p.value = el.type === 'checkbox' ? String(el.checked) : clean(el.value, 40);
        send(el.getAttribute('data-ga-event'), p);
      }
    }, true);
    document.addEventListener('submit', function (ev) {
      var f = ev.target;
      send('form_submit', { form: f.id || f.getAttribute('name') || f.getAttribute('action') || 'form', section: sectionOf(f) });
    }, true);
  }

  /* ---------- 404 ---------- */
  function init404() {
    if (document.documentElement.hasAttribute('data-ga-404') || document.body.hasAttribute('data-ga-404')) {
      send('page_not_found', { page_path: location.pathname, referrer: document.referrer || '(direct)' });
    }
  }

  function start() { initSections(); initScroll(); initCustom(); init404(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
