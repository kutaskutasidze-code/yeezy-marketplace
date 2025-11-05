#!/bin/bash

# Yeezy Marketplace - Quick Setup Script
# This script helps automate the initial setup

echo "🎨 Welcome to Yeezy Marketplace Setup"
echo "======================================"
echo ""

# Check if .env.local exists
if [ -f ".env.local" ]; then
    echo "✅ .env.local already exists"
else
    echo "📝 Creating .env.local from template..."
    cp .env.local.example .env.local
    echo "⚠️  Please edit .env.local and add your Supabase credentials"
    echo "   - NEXT_PUBLIC_SUPABASE_URL"
    echo "   - NEXT_PUBLIC_SUPABASE_ANON_KEY"
    echo ""
fi

# Check if node_modules exists
if [ -d "node_modules" ]; then
    echo "✅ Dependencies already installed"
else
    echo "📦 Installing dependencies..."
    npm install
    echo "✅ Dependencies installed"
fi

echo ""
echo "🚀 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit .env.local with your Supabase credentials"
echo "2. Run the SQL migration in your Supabase dashboard (supabase/schema.sql)"
echo "3. Run 'npm run dev' to start the development server"
echo ""
echo "For deployment:"
echo "- Push to GitHub (already done if you cloned)"
echo "- Connect to Vercel and add environment variables"
echo "- Auto-deploy on every push to main!"
echo ""