#!/bin/bash
# Ping IndexNow (Bing, and through it Copilot/ChatGPT search, DuckDuckGo, Yandex)
# with every URL in the live sitemap. Run after each production deploy.
set -e
HOST=dasecure.com
KEY=0b58e6ca981ee79f6a1dd41099dab894
URLS=$(curl -s "https://$HOST/sitemap.xml" | grep -o '<loc>[^<]*' | sed 's/<loc>//' | sed 's/.*/"&"/' | paste -sd, -)
curl -s -o /dev/null -w 'IndexNow: HTTP %{http_code}\n' -m 20 -X POST https://api.indexnow.org/indexnow \
  -H 'Content-Type: application/json; charset=utf-8' \
  -d "{\"host\":\"$HOST\",\"key\":\"$KEY\",\"keyLocation\":\"https://$HOST/$KEY.txt\",\"urlList\":[${URLS}]}"
