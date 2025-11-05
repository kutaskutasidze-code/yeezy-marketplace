# 🤖 Automation Setup Guide - Yeezy Marketplace

## 🎯 Goal
Set up automated deployment and database management with minimal manual work.

---

## 🚀 Deployment Options (Vercel Alternatives)

### Option 1: Netlify (Recommended)
**Pros:**
- Better API access for automation
- Free tier with auto-deploy
- Built-in Next.js support
- Simple CLI

**Setup:**
1. Go to [netlify.com](https://netlify.com) and sign in with GitHub
2. Click "Add new site" → "Import an existing project"
3. Select your repo: `kutaskutasidze-code/yeezy-marketplace`
4. Build settings (auto-detected):
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Add environment variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL
   NEXT_PUBLIC_SUPABASE_ANON_KEY
   ```
6. Deploy!

**Get API Token (for Claude automation):**
1. User settings → Applications → New access token
2. Name: `Claude Automation`
3. Copy token → Share with Claude securely

**Get Site ID:**
1. Site settings → General → Site details
2. Copy "API ID"

---

### Option 2: Railway
**Pros:**
- $5 free credit monthly
- Supports databases
- One-click deploy
- Great for fullstack apps

**Setup:**
1. Go to [railway.app](https://railway.app)
2. Sign in with GitHub
3. "New Project" → "Deploy from GitHub repo"
4. Select `yeezy-marketplace`
5. Add environment variables
6. Deploy!

**Configuration included:** `railway.json` ✅

---

### Option 3: Render
**Pros:**
- Free tier (slower builds)
- PostgreSQL database included
- Auto-deploy from GitHub

**Setup:**
1. Go to [render.com](https://render.com)
2. New → Web Service
3. Connect GitHub repo
4. Select `yeezy-marketplace`
5. Use configuration: `render.yaml` ✅
6. Add environment variables
7. Create Web Service

---

## 🗄️ Supabase Automation

### Current Setup (Manual)
You're currently creating tables and configuring RLS policies manually.

### Automated Setup (Migration-Based)

**1. Database Migrations (Already Created)**
File: `supabase/schema.sql`

This includes:
- All table schemas
- RLS policies
- Sample data
- Functions and triggers

**2. Supabase CLI Setup (For Claude)**

```bash
# Install Supabase CLI
npm install -g supabase

# Login to Supabase
supabase login

# Link to your project
supabase link --project-ref YOUR_PROJECT_ID

# Push migrations
supabase db push
```

**3. Get Supabase API Credentials**

For Claude to manage your database:

1. Go to Supabase Dashboard → Settings → API
2. Copy these:
   - Project URL
   - `anon` key (public)
   - `service_role` key (admin - KEEP PRIVATE!)

3. Store in `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

---

## 🔄 Automated Workflow

### What Claude Can Do Now:

1. **Make code changes** (filesystem tools)
2. **Create branches** (github tools)
3. **Commit and push** (terminal + github tools)
4. **Create PRs** (github:create_pull_request)
5. **Merge PRs** (github:merge_pull_request)
6. **Auto-deploy** (via GitHub Actions)

### What's Still Manual:

1. ❌ Supabase table creation (needs service key)
2. ❌ Environment variable updates on platform
3. ❌ Domain configuration

---

## 🛠️ Files Created for Automation

### Deployment Configs
- ✅ `netlify.toml` - Netlify configuration
- ✅ `render.yaml` - Render configuration
- ✅ `railway.json` - Railway configuration
- ✅ `deploy.sh` - Manual deployment script
- ✅ `.github/workflows/deploy.yml` - GitHub Actions

### Usage

**Deploy via script:**
```bash
./deploy.sh netlify    # Deploy to Netlify
./deploy.sh railway    # Deploy to Railway
./deploy.sh render     # Deploy to Render (via GitHub)
./deploy.sh github     # Just push to GitHub
```

**Deploy via GitHub Actions:**
- Push to `main` branch → Auto-deploys
- Or manually trigger from GitHub Actions tab

---

## 🔐 Secrets Configuration

### For GitHub Actions (Netlify):

Go to GitHub repo → Settings → Secrets → Actions:

Add these secrets:
```
NEXT_PUBLIC_SUPABASE_URL = https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = your-anon-key
NETLIFY_AUTH_TOKEN = your-netlify-token
NETLIFY_SITE_ID = your-site-id
```

### For Railway:

Railway reads from `railway.json` and GitHub repo. Add env vars in Railway dashboard.

### For Render:

Render reads from `render.yaml`. Add env vars in Render dashboard.

---

## 🎯 Recommended Setup

### 1. Choose Netlify (Best for this project)

**Why:**
- Next.js optimized
- Fast builds
- Good free tier
- Easy CLI

### 2. Set up GitHub Actions

Already created in `.github/workflows/deploy.yml`

**What it does:**
- Runs on every push to `main`
- Builds project
- Deploys to Netlify
- Adds deployment status to commits

### 3. Enable Claude Automation

**Share with Claude:**
1. Netlify Auth Token
2. Netlify Site ID
3. Supabase Service Role Key (for database management)

**Then Claude can:**
- Make code changes
- Push to GitHub
- Auto-deploy via GitHub Actions
- Manage database migrations

---

## 🚀 Next Steps

1. **Choose deployment platform** (recommend Netlify)
2. **Set up GitHub Actions secrets**
3. **Share API tokens with Claude securely**
4. **Test the workflow:**
   ```bash
   # Claude will be able to do this:
   git checkout -b feature/new-button
   # make changes
   git commit -m "Add new button"
   git push origin feature/new-button
   # GitHub Actions auto-deploys preview
   # Merge PR → deploys to production
   ```

---

## 📊 Workflow Comparison

| Feature | Manual (Current) | Automated (New) |
|---------|-----------------|-----------------|
| Code changes | ✅ You edit | ✅ Claude edits |
| Git operations | ✅ You commit/push | ✅ Claude commits/push |
| Deployment | ✅ You trigger | ✅ Auto on push |
| Database setup | ❌ Manual SQL | ✅ Migration files |
| Env var updates | ❌ Manual in UI | ❌ Still manual* |
| Domain config | ❌ Manual | ❌ Manual |

*Env vars need manual update in platform UI (security feature)

---

## 🔧 Troubleshooting

### GitHub Actions fails
- Check secrets are added correctly
- Verify build works locally: `npm run build`
- Check Actions tab for error logs

### Deployment platform fails
- Verify environment variables are set
- Check build logs in platform dashboard
- Ensure `netlify.toml` / `railway.json` / `render.yaml` is in root

### Database migrations fail
- Run locally first: `supabase db push`
- Check SQL syntax in `supabase/schema.sql`
- Verify Supabase CLI is linked to correct project

---

## 📝 Quick Commands Reference

```bash
# Manual deploy
./deploy.sh netlify

# Check GitHub Actions status
gh run list

# Check Netlify status
netlify status

# Push database migrations
supabase db push

# Reset database (CAUTION!)
supabase db reset
```

---

## 🎉 Ready!

You now have:
- ✅ Multiple deployment options configured
- ✅ GitHub Actions for auto-deploy
- ✅ Deployment scripts
- ✅ Migration-based database management
- ✅ Modular workflow for Claude

Choose your platform and let's deploy! 🚀
