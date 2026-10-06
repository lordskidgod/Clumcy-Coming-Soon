# Deploying Clumcy Landing Page to Vercel (clumcy.com)

You have a **100% self-contained single `index.html` file** ready. It requires **zero build commands**, **zero npm install**, and deploys instantly.

---

### Option 1: Using GitHub & Vercel (Recommended)

1. **Create a GitHub repo** (e.g. `clumcy-landing` or in your existing repo).
2. Upload or commit [index.html](file:///c:/Users/User/Downloads/Clumcy%20-%20Enterprise%20Orchestration%20Platform/clumcy-coming-soon/index.html) into the root of the repo.
3. Go to [vercel.com](https://vercel.com) and click **"Add New..."** → **"Project"**.
4. Import your GitHub repository.
5. In **Framework Preset**, select **"Other"** (Root directory: `./` - no build command needed).
6. Click **Deploy**. (Deployment completes in ~5 seconds!)
7. Go to **Settings** → **Domains** on Vercel:
   - Add `clumcy.com` and `www.clumcy.com`
   - Copy the DNS records (Vercel provides an `A` record `76.76.21.21` or `CNAME` for `www`) into your domain registrar (GoDaddy / Namecheap / Cloudflare / Google Domains).
8. Done! Within 2–5 minutes your domain `clumcy.com` will be live with SSL.

---

### Option 2: Instant Vercel CLI (No GitHub needed)

If you have Node.js or `vercel` installed:
```powershell
cd "c:\Users\User\Downloads\Clumcy - Enterprise Orchestration Platform\clumcy-coming-soon"
npx vercel --prod
```
Then assign your domain in the Vercel dashboard.

---

### What's included in this page:
- **Branding**: Official Clumcy Logo, typography (`Instrument Serif` & `Plus Jakarta Sans`), and violet/purple enterprise mesh glow.
- **Copy**: Exact enterprise orchestration value proposition (SAP, Oracle, NetSuite, Salesforce, Workday, etc.).
- **Interactive VIP Waitlist**: Working email capture with validation, persistent reservation counter, and celebration confetti animation.
- **Direct Founder Link**: `contact@clumcy.com` demo inquiries button.
- **Status Indicator**: Live `clumcy.com` verification badge and countdown tracker.
