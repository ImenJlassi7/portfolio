# ⚡ Quick Reference Card

## 🚀 Start Here
```bash
npm start
```
Portfolio opens at http://localhost:3000

## 📝 File Locations to Edit

### Personal Information
| What | Where | Line |
|------|-------|------|
| Your Name | `src/components/Navbar.js` | 7 |
| Your Name (Hero) | `src/components/Hero.js` | 11 |
| Your Title | `src/components/Hero.js` | 14 |
| Your Bio | `src/components/About.js` | 13-25 |
| Your Email | `src/components/Contact.js` | 41 |
| Your Phone | `src/components/Contact.js` | 45 |

### Skills
- **File:** `src/components/Skills.js`
- **What to edit:** Lines 5-35 (skillCategories array)
- **Change:** Category names, skill names, levels (0-100)

### Projects
- **File:** `src/components/Projects.js`
- **What to edit:** Lines 10-60 (projects array)
- **Add:** title, description, tags, link, category

### Colors
- **File:** `src/App.css`
- **What to edit:** `:root` section (lines 5-12)
- **Variables:** --primary-color, --secondary-color, etc.

### Social Media Links
- **Navbar:** `src/components/Navbar.js`
- **Hero:** `src/components/Hero.js`
- **Contact:** `src/components/Contact.js`
- **Footer:** `src/components/Footer.js`

## 🎨 Color Variables (Quick Reference)

```css
:root {
  --primary-color: #667eea;       /* Main purple */
  --secondary-color: #764ba2;     /* Accent purple */
  --text-dark: #2d3748;           /* Dark text */
  --text-light: #718096;          /* Light text */
  --bg-light: #f9fafb;            /* Light background */
  --bg-white: #ffffff;            /* White */
  --border-color: #e2e8f0;        /* Borders */
}
```

## 📦 Build & Deploy

```bash
# Test locally
npm start

# Build for production
npm run build

# Deploy to Vercel (easiest)
npm install -g vercel
vercel

# Deploy to Netlify
# 1. Push to GitHub
# 2. Connect repo to Netlify
# 3. Auto-deploys on push

# Deploy to GitHub Pages
npm run deploy
```

## 🔍 Component Purpose

| Component | Purpose | Edit For |
|-----------|---------|----------|
| Navbar | Navigation | Your name, links |
| Hero | Welcome | Title, subtitle, description |
| About | Bio | Your bio, highlights |
| Skills | Proficiency | Your skills, levels |
| Projects | Portfolio | Your projects |
| Contact | Contact | Email, phone, form |
| Footer | Copyright | Links, social |

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

Test with DevTools (F12) → Toggle Device Toolbar (Ctrl+Shift+M)

## ✏️ 10-Minute Customization

1. **Update Name** (Navbar.js, Hero.js) - 1 min
2. **Update Title/Bio** (Hero.js, About.js) - 2 min
3. **Update Email** (Contact.js) - 1 min
4. **Update Social Links** (All components) - 3 min
5. **Update Skills** (Skills.js) - 2 min
6. **Test** (`npm start`) - 1 min

## 🎯 Deployment Checklist

- [ ] `npm run build` succeeds
- [ ] No console errors
- [ ] Tested on mobile
- [ ] All links work
- [ ] Contact form tested
- [ ] Social links updated
- [ ] Spelling checked
- [ ] Ready to deploy!

## 💻 Useful Commands

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Check for errors
npm run build -- --verbose

# Clear npm cache if issues
npm cache clean --force
```

## 🎨 Popular Color Schemes

### Blue
```css
--primary-color: #0066cc;
--secondary-color: #0052a3;
```

### Green
```css
--primary-color: #10b981;
--secondary-color: #059669;
```

### Orange
```css
--primary-color: #f97316;
--secondary-color: #ea580c;
```

### Pink
```css
--primary-color: #ec4899;
--secondary-color: #be185d;
```

## 📚 Documentation Files

| File | Read For |
|------|----------|
| GETTING_STARTED.md | Quick orientation |
| CUSTOMIZATION.md | How to customize |
| FILE_REFERENCE.md | File explanations |
| DEPLOYMENT.md | Deployment guides |
| GUIDE.md | Detailed features |
| VISUAL_OVERVIEW.md | Layout diagrams |
| COMPLETION_SUMMARY.md | What's done |

## 🔗 Social Media URL Examples

```javascript
// GitHub
href="https://github.com/yourusername"

// LinkedIn
href="https://linkedin.com/in/yourprofile"

// Twitter
href="https://twitter.com/yourhandle"

// Instagram
href="https://instagram.com/yourprofile"

// Email
href="mailto:your.email@example.com"
```

## 🐛 Troubleshooting

**Build fails?**
→ Run `npm ci` then `npm run build`

**Icons not showing?**
→ Check Font Awesome CDN in index.html

**Scroll not working?**
→ Check section IDs match navigation

**Colors not changing?**
→ Clear cache (Ctrl+Shift+Del) and rebuild

**Images not loading?**
→ Check paths start with `/`

## 📞 Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Port 3000 in use | Run on different port: `PORT=3001 npm start` |
| "react not found" | Run `npm install` |
| Build warnings | These are fine, no errors! |
| CSS not updating | Hard refresh: Ctrl+F5 |
| Mobile menu stuck | Clear browser cache |

## ⏱️ Time Estimates

| Task | Time |
|------|------|
| Customize info | 10-15 min |
| Add projects | 20-30 min |
| Add profile photo | 5 min |
| Change colors | 5 min |
| Test responsiveness | 10 min |
| Deploy | 5-15 min |

## 🎊 You're All Set!

1. Run `npm start`
2. Edit your information
3. Deploy when ready!

---

**Need help?** Check the documentation files in your project folder!
