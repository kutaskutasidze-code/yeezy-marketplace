# 🎨 Yeezy Marketplace

Minimalist e-commerce marketplace inspired by Yeezy aesthetic. Built with Next.js 14, Supabase, and auto-deploys to Vercel.

## 🚀 Live Demo

Coming soon after deployment!

## ✨ Features

✅ **Pre-built Authentication**
- Sign up / Sign in with email
- Password reset flow
- Protected routes with middleware
- Session management

✅ **Database Integration**
- Supabase PostgreSQL
- Row Level Security (RLS)
- Auto-updating timestamps
- Sample product data

✅ **Yeezy-Inspired Design**
- Minimalist color palette (Sand, Stone, Earth, Carbon)
- Clean typography
- Smooth transitions
- Mobile-responsive

✅ **E-Commerce Features**
- Product listings
- Shopping cart
- User dashboard
- Order management

## 📦 Tech Stack

- **Frontend**: Next.js 14 (App Router), React 18, TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Auth**: Supabase Auth
- **Deployment**: Vercel (auto-deploy on push)

---

## 🛠️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/kutaskutasidze-code/yeezy-marketplace.git
cd yeezy-marketplace
npm install
```

### 2️⃣ Set Up Supabase

#### Create a Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Click **"New Project"**
3. Fill in:
   - Project name: `yeezy-marketplace`
   - Database password: (save this!)
   - Region: Choose closest to you
4. Click **"Create new project"** and wait ~2 minutes

#### Get Your API Keys
1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy:
   - `Project URL` → This is your `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` key → This is your `NEXT_PUBLIC_SUPABASE_ANON_KEY`

#### Run Database Migration
1. In Supabase dashboard, go to **SQL Editor**
2. Click **"New Query"**
3. Copy **ALL** the content from `supabase/schema.sql` in this repo
4. Paste into the editor and click **"Run"**
5. You should see: ✅ Success messages

This creates:
- Users table with profiles
- Products table with sample items
- Orders and cart tables
- Row Level Security policies

### 3️⃣ Configure Environment Variables

Create `.env.local` in the root directory:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### 4️⃣ Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🚀 Deploy to Vercel (Auto-Deploy Setup)

### Option 1: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/kutaskutasidze-code/yeezy-marketplace&env=NEXT_PUBLIC_SUPABASE_URL,NEXT_PUBLIC_SUPABASE_ANON_KEY)

1. Click the button above
2. Connect your GitHub account
3. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Click **"Deploy"**

### Option 2: Manual Vercel Setup

#### Step 1: Install Vercel CLI (Optional)
```bash
npm i -g vercel
```

#### Step 2: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New..." → "Project"**
3. Import your GitHub repository: `kutaskutasidze-code/yeezy-marketplace`
4. Configure:
   - **Framework Preset**: Next.js
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Output Directory**: .next
5. Add **Environment Variables**:
   ```
   NEXT_PUBLIC_SUPABASE_URL = https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY = your-anon-key
   ```
6. Click **"Deploy"**

#### Step 3: Enable Auto-Deploy

✅ **Automatic!** Any push to `main` branch will auto-deploy.

To deploy a specific branch:
1. In Vercel dashboard → Settings → Git
2. Add branch to **"Production Branch"** or **"Preview Branches"**

---

## 🔄 Workflow: Making Changes

### Quick Change Example

```bash
# 1. Create a branch
git checkout -b feature/update-colors

# 2. Make changes (e.g., edit src/app/globals.css)
# Change yeezy-sand: '#E8E3D9' to '#F0EBE1'

# 3. Commit and push
git add .
git commit -m "Update sand color tone"
git push origin feature/update-colors

# 4. Vercel auto-creates preview deployment
# 5. Merge PR to main → auto-deploys to production
```

### Using the Modular Approach

For larger changes:
1. Use filesystem tools to edit specific files
2. Test locally with `npm run dev`
3. Push to GitHub
4. Vercel deploys automatically

---

## 📁 Project Structure

```
yeezy-marketplace/
├── src/
│   ├── app/                      # Next.js 14 App Router
│   │   ├── auth/                 # Auth pages (signin, signup)
│   │   │   ├── signin/page.tsx
│   │   │   └── signup/page.tsx
│   │   ├── dashboard/            # Protected user dashboard
│   │   ├── globals.css           # Global styles
│   │   ├── layout.tsx            # Root layout
│   │   └── page.tsx              # Homepage
│   ├── components/               # Reusable components
│   │   ├── ui/                   # UI components
│   │   └── auth/                 # Auth components
│   ├── lib/                      # Utilities
│   │   └── supabase/             # Supabase clients
│   │       ├── client.ts         # Browser client
│   │       └── server.ts         # Server client
│   └── middleware.ts             # Auth middleware
├── supabase/
│   └── schema.sql                # Database schema
├── .env.local.example            # Environment template
├── next.config.js
├── tailwind.config.ts
└── package.json
```

---

## 🎨 Color Palette

```css
yeezy-sand: #E8E3D9   /* Light background */
yeezy-stone: #D4CFC5  /* Borders, secondary */
yeezy-earth: #9B9384  /* Text muted */
yeezy-carbon: #1A1A1A /* Primary text, buttons */
yeezy-cream: #F5F3EE  /* Cards, surfaces */
```

---

## 🔐 Environment Variables Reference

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | ✅ | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | ✅ | Supabase anonymous/public key |
| `SUPABASE_SERVICE_ROLE_KEY` | ❌ | For admin operations (optional) |

---

## 📊 Database Schema

The `supabase/schema.sql` file creates:

### Tables
- **profiles** - User profiles (extends auth.users)
- **products** - Product catalog
- **orders** - Customer orders
- **order_items** - Order line items
- **cart_items** - Persistent shopping cart

### Security
- Row Level Security (RLS) enabled on all tables
- Users can only see/modify their own data
- Public read access for products
- Admin role for product management

---

## 🚨 Troubleshooting

### "Invalid API Key" Error
- Double-check your `.env.local` file
- Make sure keys are from Supabase → Settings → API
- Restart dev server: `npm run dev`

### Database Errors
- Verify you ran the SQL migration in Supabase
- Check Supabase logs: Dashboard → Logs

### Vercel Deploy Fails
- Ensure environment variables are set in Vercel dashboard
- Check build logs in Vercel deployment

### Auth Not Working
- Verify email confirmation settings in Supabase
- Check middleware.ts is running

---

## 🎯 Next Steps

After deployment, you can:

1. **Add More Products**
   - Go to Supabase → Table Editor → products
   - Or create admin panel for product management

2. **Customize Design**
   - Edit colors in `tailwind.config.ts`
   - Update styles in `src/app/globals.css`

3. **Add Payment Processing**
   - Integrate Stripe or PayPal
   - Create checkout API routes

4. **Build Admin Dashboard**
   - Product management
   - Order fulfillment
   - User management

---

## 📝 License

MIT License - feel free to use for your own projects!

## 🤝 Contributing

Pull requests welcome! For major changes, please open an issue first.

---

## 📞 Support

If you need help:
1. Check [Supabase Docs](https://supabase.com/docs)
2. Check [Next.js Docs](https://nextjs.org/docs)
3. Check [Vercel Docs](https://vercel.com/docs)

---

Built with ❤️ using Next.js, Supabase, and Vercel