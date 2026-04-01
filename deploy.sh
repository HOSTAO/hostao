#!/bin/bash
# deploy.sh — Build locally, deploy prebuilt to Vercel (saves build credits)
# Usage: ./deploy.sh "commit message"

set -e

MSG="${1:-update}"

echo "📦 Building locally..."
npm run build

echo "✅ Build done. Committing..."
git add -A
git commit -m "$MSG" 2>/dev/null || echo "Nothing to commit, deploying anyway"

echo "🚀 Deploying prebuilt output (no Vercel build = no credits used)..."
vercel deploy --prebuilt --prod

echo "✅ Done!"
