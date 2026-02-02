# 📋 Portfolio File Reference

Quick reference for what's in each file and where to make changes.

## Component Files

### `src/components/Navbar.js`
**Purpose:** Navigation bar with smooth scrolling  
**Update:**
- Line 7: Brand name
- Lines 21-25: Navigation links
- Used in: Top of every page (sticky)

### `src/components/Hero.js`
**Purpose:** Hero/welcome section  
**Update:**
- Line 11: Main title
- Line 14: Subtitle
- Line 17: Description
- Lines 20-25: Call-to-action buttons
- Lines 27-35: Social media links
- Lines 39-45: Technology cards

### `src/components/About.js`
**Purpose:** About me section with bio  
**Update:**
- Lines 13-25: About text paragraphs
- Lines 28-35: Highlight items (Education, Experience, Focus)
- Lines 40-45: Profile image placeholder

### `src/components/Skills.js`
**Purpose:** Skills with proficiency bars  
**Update:**
- Lines 5-35: Skill categories and proficiency levels
- Each skill has a 0-100 level

### `src/components/Projects.js`
**Purpose:** Portfolio projects with filtering  
**Update:**
- Lines 10-60: Project objects in projects array
  - title, description, image, tags, category, link
- Lines 7-10: Filter categories
- Lines 68-80: Filter button rendering

### `src/components/Contact.js`
**Purpose:** Contact form section  
**Update:**
- Line 41: Email address
- Line 45: Phone number
- Line 49: Location
- Lines 53-58: Social media links
- Lines 62-92: Form fields
- Line 72: Email to send

### `src/components/Footer.js`
**Purpose:** Footer with links and copyright  
**Update:**
- Line 9: Your name
- Line 10: Your title
- Lines 16-18: Quick links
- Lines 23-27: Social media links
- Line 32: Current year (auto-updates)

## Style Files

### `src/styles/Navbar.css`
**Purpose:** Navigation bar styling  
**Customize:**
- `.navbar` - Background gradient
- `.nav-menu li a` - Link styling
- `.hamburger` - Mobile menu button

### `src/styles/Hero.css`
**Purpose:** Hero section styling  
**Customize:**
- `.hero` - Background gradient
- `.hero-title` - Main title styling
- `.btn-primary` / `.btn-secondary` - Button styles
- `.floating-card` - Animation effects

### `src/styles/About.css`
**Purpose:** About section styling  
**Customize:**
- `.about` - Section background
- `.about-content` - Layout grid
- `.highlight-item` - Card styling
- `.image-placeholder` - Image styling

### `src/styles/Skills.css`
**Purpose:** Skills section styling  
**Customize:**
- `.skill-category` - Category card
- `.skill-bar` - Progress bar styling
- `.skill-progress` - Progress color and gradient

### `src/styles/Projects.css`
**Purpose:** Projects section styling  
**Customize:**
- `.project-card` - Project card styling
- `.filter-btn` - Filter button styling
- `.tag` - Technology tag styling

### `src/styles/Contact.css`
**Purpose:** Contact section styling  
**Customize:**
- `.contact-form` - Form background
- `input`, `textarea` - Form field styling
- `.success-message` - Success message animation

### `src/styles/Footer.css`
**Purpose:** Footer styling  
**Customize:**
- `.footer` - Background color
- `.footer-content` - Grid layout
- `.heart` - Heartbeat animation

### `src/App.css`
**Purpose:** Global styles and variables  
**Customize:**
- `:root` - Color variables
- `body` - Global font and background
- `.App` - Main container

## Main Files

### `src/App.js`
**Purpose:** Main component that combines all sections  
**Content:** Imports and renders all components
**Modify:** Only if you want to reorder sections

### `src/index.js`
**Purpose:** React entry point  
**Modify:** Rarely needed

## Configuration Files

### `package.json`
**Purpose:** Project dependencies and scripts  
**Key sections:**
- `"dependencies"` - Libraries used
- `"scripts"` - npm commands
- `"homepage"` - Deployment URL

### `public/index.html`
**Purpose:** Base HTML file  
**Update:**
- Line 6: Meta description
- Line 9: Page title
- Line 11: Font Awesome CDN
- Root div for React mounting

## Quick Navigation

**Need to change your name?**
→ Navbar.js + Hero.js + Footer.js

**Need to add projects?**
→ Projects.js

**Need to update skills?**
→ Skills.js

**Need to change colors?**
→ App.css (:root variables)

**Need to add images?**
→ public/ folder + component files

**Need to change animations?**
→ Component CSS files (check transition/animation properties)

**Need to update contact info?**
→ Contact.js

## File Size Reference

- App.js: ~1 KB
- Each component: 2-4 KB
- CSS files: 2-6 KB each
- Total gzipped: ~67 KB (optimized)

## Import Paths

All imports are relative to `src/`:

```javascript
// Component imports
import Navbar from './components/Navbar';

// Style imports
import '../styles/Navbar.css';

// React imports
import React, { useState } from 'react';
```

## CSS Class Naming

Consistent naming convention:

- `.component-name` - Main component
- `.component-name--element` - Element within component
- `.component-name__modifier` - Modified state

Example:
```css
.hero { }
.hero-content { }
.hero-buttons { }
.btn-primary { }
.btn-primary:hover { }
```

## Responsive Breakpoints

All files use these breakpoints:

```css
/* Mobile first approach */
/* Default styles apply to mobile */

@media (max-width: 768px) {
  /* Tablet adjustments */
}

@media (max-width: 1024px) {
  /* Desktop adjustments */
}
```

## Performance Tips

1. **Images:** Compress before adding
2. **Components:** Keep them focused and single-purpose
3. **CSS:** Use variables for consistent styling
4. **Build:** Run `npm run build` before deploying

## Version Info

- React: 19.2.3
- Node: 16+ recommended
- Browser support: Modern browsers (Chrome, Firefox, Safari, Edge)

---

**Last Updated:** December 2025
