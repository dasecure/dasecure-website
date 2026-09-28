#!/bin/bash
# Post-deploy check: canonical host, AI crawler access, served robots/llms/analytics, JSON-LD present.
SITE=https://dasecure.com
echo "-- host"
curl -s -o /dev/null -w '%{http_code} %{redirect_url}  dasecure.com\n' -m 20 $SITE/
curl -s -o /dev/null -w '%{http_code} %{redirect_url}  www.dasecure.com\n' -m 20 https://www.dasecure.com/
echo "-- AI user-agents (all should be 200)"
for ua in "OAI-SearchBot/1.0" "GPTBot/1.1" "ChatGPT-User/1.0" "ClaudeBot/1.0" "Claude-SearchBot/1.0" "PerplexityBot/1.0" "Google-Extended" "bingbot/2.0"; do
  echo "$(curl -s -o /dev/null -w '%{http_code}' -m 20 -A "Mozilla/5.0 (compatible; $ua)" $SITE/)  $ua"
done
echo "-- files"
for p in robots.txt sitemap.xml llms.txt llms-full.txt analytics.js 0b58e6ca981ee79f6a1dd41099dab894.txt support privacy voice-cloner; do
  echo "$(curl -s -o /dev/null -w '%{http_code}' -m 20 $SITE/$p)  /$p"
done
echo "-- home"
body=$(curl -s -m 20 $SITE/)
echo "$body" | grep -q '/analytics.js' && echo "analytics.js linked" || echo "MISSING analytics.js"
echo "$body" | grep -q '"FAQPage"' && echo "FAQPage JSON-LD present" || echo "MISSING FAQPage"
echo "$body" | grep -q 'rel="canonical" href="https://dasecure.com"' && echo "canonical ok" || echo "check canonical"
echo "-- CSP"
curl -sI -m 20 $SITE/ | grep -i content-security-policy | grep -q googletagmanager && echo "CSP allows GA" || echo "CSP blocks GA"
