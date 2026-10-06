# Clumcy Coming Soon - React TSX Landing Page for clumcy.com

A modern, high-converting, enterprise-grade React TSX single-page landing page created specifically for **clumcy.com**.

## Features
- **True / False Toggle Button**: Seamlessly toggle between **Coming Soon (Waitlist Mode)** and **Live Platform Preview Mode** with an on-screen switch and a code boolean flag.
- **Official Domain Badge**: Displays `clumcy.com` secured badge with pulsating green status indicator.
- **VIP Early Access Form**: Enterprise email capture with role selection and instant feedback state.
- **Live Countdown**: Animated launch countdown clock.
- **Enterprise Ecosystem**: Integration chips for SAP S/4HANA, Oracle Cloud, NetSuite, Salesforce, Workday, and HubSpot.
- **Zero Linter Warnings**: Fully standards-compliant CSS (`background-clip: text` alongside `-webkit-background-clip`).

---

## True / False Configuration

In `src/App.tsx`:
```tsx
// Set to true to show Coming Soon mode by default
// Set to false to show the Live Platform showcase
export const DEFAULT_COMING_SOON = true;
```
You can also flip the **Coming Soon / Live Platform** button at any time right on the page.

---

## Deploying to Vercel & Connecting `clumcy.com`

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "feat: initial clumcy coming soon landing page"
git branch -M main
git remote add origin https://github.com/<your-username>/clumcy-coming-soon.git
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Open [vercel.com/new](https://vercel.com/new) and select the repository.
2. Framework Preset will automatically detect **Vite**.
3. Click **Deploy**.

### Step 3: Connect Domain `clumcy.com`
1. Go to your project on Vercel -> **Settings** -> **Domains**.
2. Enter `clumcy.com` and `www.clumcy.com`.
3. Add the two DNS records shown by Vercel (A Record `76.76.21.21` and CNAME for `www`) in your domain registrar (Namecheap, GoDaddy, Cloudflare, etc.).
4. Your site will be live at `https://clumcy.com` in seconds!
