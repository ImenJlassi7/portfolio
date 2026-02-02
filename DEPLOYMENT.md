# 🚀 Deployment Guide

Complete guide to deploy your portfolio to production.

## Quick Deployment Options

### ⚡ Easiest: Vercel (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow prompts** and you're live!
   - Your site will be available at a Vercel URL
   - Connect custom domain later if desired

**Pros:**
- Zero configuration
- Automatic deploys on Git push
- Fast global CDN
- Free tier available

### 🌐 Simple: Netlify

1. **Push to GitHub first:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Go to** https://app.netlify.com/
3. **Click** "New site from Git"
4. **Choose** your repository
5. **Configure build:**
   - Build command: `npm run build`
   - Publish directory: `build`
6. **Deploy!**

**Pros:**
- Free hosting
- Automatic deploys
- Easy custom domain setup
- Good performance

### 📦 Traditional: GitHub Pages

1. **Add to package.json:**
   ```json
   "homepage": "https://yourusername.github.io/portfolio"
   ```

2. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deploy scripts to package.json:**
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages** in repository settings

**Pros:**
- Free hosting
- Great for portfolios
- Easy version control

### ☁️ AWS Amplify

1. **Install Amplify CLI:**
   ```bash
   npm install -g @aws-amplify/cli
   ```

2. **Initialize:**
   ```bash
   amplify init
   ```

3. **Add hosting:**
   ```bash
   amplify add hosting
   ```

4. **Deploy:**
   ```bash
   amplify publish
   ```

**Pros:**
- Scalable
- AWS ecosystem integration
- Good for complex apps

## Pre-Deployment Checklist

- [ ] All personal information updated
- [ ] Projects links working
- [ ] No broken images or icons
- [ ] Contact form configured
- [ ] Social media links correct
- [ ] Mobile responsive tested
- [ ] No console errors
- [ ] Build succeeds: `npm run build`
- [ ] SEO meta tags updated
- [ ] Analytics configured (optional)

## Custom Domain Setup

### After Deploying with Vercel

1. **Buy domain** from:
   - Namecheap
   - GoDaddy
   - Google Domains
   - Any registrar

2. **In Vercel Dashboard:**
   - Go to your project settings
   - Find "Domains" section
   - Add your domain name

3. **Update DNS:**
   - Vercel will provide DNS records
   - Add them to your domain registrar
   - Wait 24-48 hours for propagation

### After Deploying with Netlify

1. **In Netlify Dashboard:**
   - Go to Site settings
   - Find Domain management
   - Click "Add custom domain"
   - Follow instructions

### After Deploying with GitHub Pages

1. **In Repository Settings:**
   - Scroll to "Pages"
   - Under "Custom domain", enter your domain
   - Update DNS records at registrar

## Environment Setup

### For Continuous Deployment

Create `.env` file (never commit sensitive data):

```
REACT_APP_EMAIL_SERVICE=emailjs
REACT_APP_EMAIL_SERVICE_ID=your_service_id
REACT_APP_EMAIL_TEMPLATE_ID=your_template_id
REACT_APP_EMAIL_PUBLIC_KEY=your_public_key
```

Use in components:
```javascript
const serviceId = process.env.REACT_APP_EMAIL_SERVICE_ID;
```

## Performance Optimization

### Before Deployment

1. **Optimize images:**
   ```bash
   # Install image optimizer
   npm install --save-dev imagemin
   ```

2. **Code splitting:**
   - React automatically does this

3. **Remove unused CSS:**
   - Purge unused styles

4. **Minification:**
   - `npm run build` does this automatically

5. **Check performance:**
   ```bash
   npm run build
   npm install -g serve
   serve -s build
   ```

### Monitor After Deployment

- Use Google Lighthouse
- Check Core Web Vitals
- Monitor page speed
- Use Chrome DevTools

## SEO Setup

### 1. Update Meta Tags

In `public/index.html`:
```html
<meta name="description" content="Your professional portfolio">
<meta name="keywords" content="developer, portfolio, react">
<meta name="author" content="Your Name">
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Professional portfolio">
<meta property="og:image" content="https://your-domain.com/preview.jpg">
<meta name="twitter:card" content="summary_large_image">
```

### 2. Create sitemap.xml

In `public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://your-domain.com</loc>
    <lastmod>2025-01-01</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

### 3. Create robots.txt

In `public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://your-domain.com/sitemap.xml
```

### 4. Add Google Analytics

In `public/index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXX');
</script>
```

## SSL/HTTPS

- ✅ Vercel: Automatic SSL
- ✅ Netlify: Automatic SSL
- ✅ GitHub Pages: Automatic SSL
- ℹ️ AWS: Configure in settings

## Monitoring & Analytics

### Google Analytics
1. Create account at google.com/analytics
2. Get measurement ID
3. Add to index.html (see above)

### Sentry (Error Tracking)
```bash
npm install --save @sentry/react
```

```javascript
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "your-sentry-dsn",
  environment: "production"
});
```

### Vercel Analytics (Built-in)
- Automatic if deployed to Vercel
- See analytics in dashboard

## Troubleshooting Deployment

### Build fails on deploy
1. Check build logs
2. Run `npm run build` locally
3. Check for missing env variables
4. Clear cache and rebuild

### Site doesn't update after deploy
1. Clear browser cache (Ctrl+Shift+Del)
2. Hard refresh (Ctrl+F5)
3. Wait for CDN cache clear (5-15 mins)

### 404 errors after deploy
1. Check homepage in package.json
2. Verify routing configuration
3. Check file paths

### Images not loading
1. Verify image paths are correct
2. Check public/ folder
3. Use absolute paths: `/image.jpg`

### Contact form not working
1. Check backend connection
2. Test form locally
3. Check console for errors
4. Verify API keys and credentials

## Post-Deployment

### Week 1
- [ ] Monitor for errors
- [ ] Check analytics
- [ ] Test all features
- [ ] Update resume with URL

### Week 2-4
- [ ] Share on social media
- [ ] Send to contacts
- [ ] Monitor analytics trends
- [ ] Make improvements

### Monthly
- [ ] Update projects
- [ ] Add new content
- [ ] Check for broken links
- [ ] Review analytics

## Cost Analysis

| Platform | Cost | Features |
|----------|------|----------|
| Vercel | Free | Great for React |
| Netlify | Free | Flexible, easy |
| GitHub Pages | Free | Limited, basic |
| AWS Amplify | Free tier | Scalable |
| Custom Domain | ~$10-15/year | Professional |

## Advanced Deployment

### CI/CD Pipeline

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run test -- --watchAll=false
      - uses: actions/upload-artifact@v3
        with:
          name: build
          path: build/
```

### Docker Deployment

Create `Dockerfile`:

```dockerfile
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## Domain Best Practices

1. **HTTPS:** Always use HTTPS
2. **www vs non-www:** Choose one consistently
3. **Email:** Set up professional email (firstname@your-domain.com)
4. **DNS:** Keep records organized
5. **Backups:** Keep backup of DNS records

## Security

- [ ] Enable HTTPS/SSL
- [ ] Set secure headers
- [ ] Hide environment variables
- [ ] Keep dependencies updated
- [ ] Use strong passwords
- [ ] Enable 2FA on accounts

## Getting Help

- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com
- **GitHub Pages:** https://pages.github.com
- **React Docs:** https://react.dev

---

**Congratulations! Your portfolio is live! 🎉**

Next steps:
1. Share your portfolio URL
2. Update LinkedIn, GitHub profiles
3. Send to potential employers
4. Continue building projects
