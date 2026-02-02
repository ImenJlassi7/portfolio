# 🎨 Portfolio Customization Quick Guide

## Quick Start - What to Update First

### 1. Update Personal Information (5 minutes)

**Step 1: Update Navbar**
- Open: `src/components/Navbar.js`
- Find: `<h1>Imen Jlassi</h1>`
- Replace with your name

**Step 2: Update Hero Section**
- Open: `src/components/Hero.js`
- Update:
  - Title: "Hi, I'm [Your Name]"
  - Subtitle: "Your Title/Profession"
  - Description: Your professional tagline
  - Social links: Replace GitHub, LinkedIn, Twitter URLs

**Step 3: Update About Section**
- Open: `src/components/About.js`
- Replace placeholder paragraphs with your bio
- Update education, experience, and focus areas

### 2. Add Your Projects (10 minutes)

- Open: `src/components/Projects.js`
- Replace project objects in the `projects` array
- Each project needs:
  - `title`: Project name
  - `description`: What it does
  - `image`: Emoji or icon
  - `tags`: Technologies used
  - `category`: fullstack/mobile/iot (for filtering)
  - `link`: Project URL

### 3. Update Skills (5 minutes)

- Open: `src/components/Skills.js`
- Modify the `skillCategories` array
- Update:
  - Category names
  - Skill names
  - Proficiency levels (0-100)

### 4. Add Contact Information (5 minutes)

- Open: `src/components/Contact.js`
- Update:
  - Email address
  - Phone number
  - Location
  - Social media links

## 🎨 Change Color Scheme

1. Open: `src/App.css`
2. Find the `:root` section
3. Change color values:

```css
--primary-color: #667eea;      /* Your main color */
--secondary-color: #764ba2;    /* Accent color */
```

### Popular Color Combinations:

**Blue Theme**
```css
--primary-color: #0066cc;
--secondary-color: #0052a3;
```

**Green Theme**
```css
--primary-color: #10b981;
--secondary-color: #059669;
```

**Orange Theme**
```css
--primary-color: #f97316;
--secondary-color: #ea580c;
```

**Pink Theme**
```css
--primary-color: #ec4899;
--secondary-color: #be185d;
```

## 📸 Add Your Profile Photo

1. Place your image in `public/` folder
2. Open: `src/components/About.js`
3. Replace the placeholder div with an image tag:

```jsx
<div className="about-image">
  <img 
    src="/your-photo.jpg" 
    alt="Profile"
    className="profile-image"
  />
</div>
```

4. Add to `src/styles/About.css`:

```css
.profile-image {
  width: 100%;
  max-width: 400px;
  aspect-ratio: 1;
  border-radius: 20px;
  object-fit: cover;
  box-shadow: 0 10px 40px rgba(102, 126, 234, 0.3);
}
```

## 🔗 Update Social Media Links

Update in multiple components:

1. **Hero.js** - Hero section social icons
2. **Contact.js** - Contact section social links
3. **Footer.js** - Footer social links

Replace:
```jsx
href="https://github.com"  // with your GitHub
href="https://linkedin.com"  // with your LinkedIn
href="https://twitter.com"  // with your Twitter
```

## 📧 Make Contact Form Work

Currently logs to console. To make it functional:

### Option 1: EmailJS (Easiest)

1. Sign up at https://www.emailjs.com/
2. Install EmailJS: `npm install @emailjs/browser`
3. Update `src/components/Contact.js`:

```jsx
import emailjs from '@emailjs/browser';

// Initialize (add after imports)
emailjs.init("YOUR_PUBLIC_KEY");

// Update handleSubmit:
const handleSubmit = (e) => {
  e.preventDefault();
  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
    .then(() => {
      setSubmitted(true);
      // ... rest of code
    })
    .catch(error => console.error(error));
};
```

### Option 2: Formspree

1. Go to https://formspree.io/
2. Create new form
3. Update form action in Contact.js

### Option 3: Your Own Backend
Connect to your server endpoint

## 📱 Test Responsiveness

1. Run: `npm start`
2. Open DevTools (F12)
3. Toggle Device Toolbar (Ctrl+Shift+M)
4. Test on:
   - iPhone (375px)
   - Tablet (768px)
   - Desktop (1024px+)

## 🎬 Customize Animations

Edit animation properties in CSS files:

**Change animation speed:**
```css
transition: all 0.3s ease;  /* Change 0.3s to your preference */
animation: float 3s ease-in-out infinite;  /* Change 3s */
```

**Common animation values:**
- `0.3s` - Quick
- `0.5s` - Normal
- `0.8s` - Slow
- `1s` - Very slow

## 🚀 Before Deploying

Checklist:
- [ ] Updated all personal information
- [ ] Added your projects with real links
- [ ] Changed color scheme if desired
- [ ] Added profile photo
- [ ] Updated social media links
- [ ] Connected contact form
- [ ] Tested on mobile devices
- [ ] Checked spelling and grammar
- [ ] Built and tested: `npm run build`

## 📊 Add Analytics

Add Google Analytics to `public/index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Replace `GA_MEASUREMENT_ID` with your Google Analytics ID.

## 🎯 SEO Optimization

Update `public/index.html`:

```html
<meta name="description" content="Your professional summary">
<meta name="keywords" content="developer, portfolio, react">
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your professional summary">
```

## 🐛 Common Issues & Fixes

**Icons not showing?**
- Font Awesome CDN in index.html ✓

**Colors not updating?**
- Clear browser cache: Ctrl+Shift+Del
- Rebuild: `npm run build`

**Scroll not working?**
- Check section IDs match navigation
- Verify smooth scroll in CSS

**Form not submitting?**
- Connect backend service
- Check console for errors

## 📞 Need Help?

1. Check component comments
2. Review style files for CSS
3. Look at README.md for deployment
4. Check browser console for errors

---

**Happy customizing! 🎉**
