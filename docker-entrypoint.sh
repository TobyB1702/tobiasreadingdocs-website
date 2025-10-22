#!/bin/sh
set -e

# If VITE_BACKEND_URL not provided, fallback to empty string (avoids 'undefined' in client)
: "${VITE_BACKEND_URL:=}"

# Replace placeholder __VITE_BACKEND_URL__ in built assets (html/js/json)
find /usr/share/nginx/html -type f \( -name '*.html' -o -name '*.js' -o -name '*.json' \) -print0 \
  | xargs -0 -r sed -i "s|__VITE_BACKEND_URL__|${VITE_BACKEND_URL}|g"

# Exec the CMD (nginx) so signals are forwarded
exec "$@"