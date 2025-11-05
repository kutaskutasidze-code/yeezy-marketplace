#!/bin/bash

# 🚀 Automated Deployment Script for Yeezy Marketplace
# This script automates deployment to multiple platforms

set -e  # Exit on error

echo "🎨 Yeezy Marketplace - Automated Deployment"
echo "==========================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if platform is specified
PLATFORM=${1:-"netlify"}

echo -e "${BLUE}Selected platform: $PLATFORM${NC}"
echo ""

# Function to deploy to Netlify
deploy_netlify() {
    echo -e "${GREEN}📦 Deploying to Netlify...${NC}"
    
    # Check if Netlify CLI is installed
    if ! command -v netlify &> /dev/null; then
        echo "Installing Netlify CLI..."
        npm install -g netlify-cli
    fi
    
    # Build the project
    echo "Building project..."
    npm run build
    
    # Deploy
    echo "Deploying to Netlify..."
    netlify deploy --prod
    
    echo -e "${GREEN}✅ Deployed to Netlify successfully!${NC}"
}

# Function to deploy to Render
deploy_render() {
    echo -e "${GREEN}📦 Deploying to Render...${NC}"
    
    # Push to GitHub (Render auto-deploys from GitHub)
    git add -A
    git commit -m "Deploy to Render - $(date '+%Y-%m-%d %H:%M:%S')" || true
    git push origin main
    
    echo -e "${GREEN}✅ Pushed to GitHub. Render will auto-deploy!${NC}"
    echo "Check status at: https://dashboard.render.com"
}

# Function to deploy to Railway
deploy_railway() {
    echo -e "${GREEN}📦 Deploying to Railway...${NC}"
    
    # Check if Railway CLI is installed
    if ! command -v railway &> /dev/null; then
        echo "Installing Railway CLI..."
        npm install -g @railway/cli
    fi
    
    # Deploy
    echo "Deploying to Railway..."
    railway up
    
    echo -e "${GREEN}✅ Deployed to Railway successfully!${NC}"
}

# Function to push to GitHub
push_to_github() {
    echo -e "${GREEN}📤 Pushing to GitHub...${NC}"
    
    git add -A
    git commit -m "Update: $(date '+%Y-%m-%d %H:%M:%S')" || true
    git push origin main
    
    echo -e "${GREEN}✅ Pushed to GitHub successfully!${NC}"
}

# Main deployment logic
case $PLATFORM in
    "netlify")
        deploy_netlify
        ;;
    "render")
        deploy_render
        ;;
    "railway")
        deploy_railway
        ;;
    "github")
        push_to_github
        ;;
    "all")
        push_to_github
        echo ""
        echo "GitHub push complete. Auto-deploys will trigger on connected platforms."
        ;;
    *)
        echo -e "${RED}❌ Unknown platform: $PLATFORM${NC}"
        echo ""
        echo "Usage: ./deploy.sh [platform]"
        echo "Platforms: netlify, render, railway, github, all"
        exit 1
        ;;
esac

echo ""
echo -e "${GREEN}🎉 Deployment complete!${NC}"
