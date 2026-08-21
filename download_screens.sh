#!/bin/bash

# Project: Heritage Saree Showcase
# ID: 1660823399022141692

PROJECT_ID="1660823399022141692"

# Note: The exact base URL depends on your Stitch environment (e.g., stitch.withgoogle.com/api/export, storage.googleapis.com/stitch-artifacts, etc.)
# Replace STITCH_BASE_URL with the appropriate hosted URL prefix for your workspace.
STITCH_BASE_URL="https://storage.googleapis.com/stitch-artifacts/projects"

echo "Downloading Stitch screens..."

# 1. Banarasi Silk Saree | Wholesale Details
curl -L "$STITCH_BASE_URL/$PROJECT_ID/screens/1a87180a7d114d9fa6318c7353289f6a" -o "banarasi_silk_saree.html"

# 2. Heritage Silks | Wholesale Landing Page
curl -L "$STITCH_BASE_URL/$PROJECT_ID/screens/6908b0f1c20c45e7bc9d77b062830982" -o "heritage_silks.html"

# 3. Design System
curl -L "$STITCH_BASE_URL/$PROJECT_ID/screens/asset-stub-assets_fcf39c5431234d0196367f3c43a4d819" -o "design_system.html"

# 4. Saree Collections | B2B Catalogue
curl -L "$STITCH_BASE_URL/$PROJECT_ID/screens/bd22180ce60546438e7e42569406ca79" -o "saree_collections.html"

echo "Done."
