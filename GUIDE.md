# 🌟 Imen Jlassi - Professional Portfolio

A modern, responsive, and professional portfolio website built with React. Features smooth animations, multiple sections, and a sleek design perfect for showcasing your skills and projects.

## 📸 Features

### ✨ Sections Included
- **Navbar** - Sticky navigation with smooth scroll and mobile hamburger menu
- **Hero Section** - Eye-catching introduction with call-to-action buttons and social links
- **About** - Personal bio with highlights about education, experience, and focus
- **Skills** - Organized skill categories with proficiency progress bars
- **Projects** - Filterable project portfolio with tags and descriptions
- **Contact** - Contact form with multiple contact methods and social media links
- **Footer** - Professional footer with quick links and social connections

### 🎨 Design Features
- **Modern Gradient Design** - Beautiful purple gradient color scheme
- **Responsive Layout** - Mobile-first design that works on all devices
- **Smooth Animations** - Fade-in, slide-in, float, and hover animations
- **Interactive Elements** - Hover effects, button transitions, and smooth scrolling
- **Professional Typography** - Clean, readable fonts with proper hierarchy
- **Dark Mode Friendly** - Accessible color contrast throughout

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project folder
```bash
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── index.html          # Main HTML file with Font Awesome CDN
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Navbar.js       # Navigation bar component
│   │   ├── Hero.js         # Hero/header section
│   │   ├── About.js        # About me section
│   │   ├── Skills.js       # Skills with progress bars
│   │   ├── Projects.js     # Portfolio projects grid
│   │   ├── Contact.js      # Contact form section
│   │   └── Footer.js       # Footer component
│   ├── styles/
│   │   ├── Navbar.css      # Navigation styles
│   │   ├── Hero.css        # Hero section styles
│   │   ├── About.css       # About section styles
│   │   ├── Skills.css      # Skills section styles
│   │   ├── Projects.css    # Projects section styles
│   │   ├── Contact.css     # Contact section styles
│   │   └── Footer.css      # Footer styles
│   ├── App.js              # Main App component
│   ├── App.css             # Global styles
│   └── index.js            # React entry point
├── package.json
└── README.md
```

## 🎯 Customization

### Update Your Information

1. **Navbar** (`src/components/Navbar.js`)
   - Change the name in `navbar-brand`
   - Update navigation links as needed

2. **Hero Section** (`src/components/Hero.js`)
   - Update title, subtitle, and description
   - Add your social media links
   - Modify the technology cards

3. **About Section** (`src/components/About.js`)
   - Replace placeholder text with your bio
   - Update education, experience, and focus areas
   - Add your profile image (replace image-placeholder)

4. **Skills Section** (`src/components/Skills.js`)
   - Modify skill categories and skills
   - Update proficiency levels (0-100)

5. **Projects Section** (`src/components/Projects.js`)
   - Update project titles, descriptions, and images
   - Add your actual project links
   - Modify project categories and tags

6. **Contact Section** (`src/components/Contact.js`)
   - Update email address
   - Add your phone number
   - Update location
   - Customize social media links

### Customize Colors

Edit the CSS variables in `src/App.css`:

```css
:root {
  --primary-color: #667eea;      /* Main purple color */
  --secondary-color: #764ba2;    /* Secondary purple */
  --text-dark: #2d3748;          /* Dark text */
  --text-light: #718096;         /* Light text */
  --bg-light: #f9fafb;           /* Light background */
  --bg-white: #ffffff;           /* White background */
  --border-color: #e2e8f0;       /* Border color */
}
```

### Add Images

Replace the image placeholders:
- Update the `image-placeholder` in `About.js` with your profile image
- Replace emoji icons in `Projects.js` with actual images or icons
- Update social media icons with Font Awesome classes

## 🛠️ Technologies Used

- **React 19.2.3** - UI library
- **CSS3** - Styling with animations and gradients
- **Font Awesome** - Icon library
- **Responsive Design** - Mobile-first approach
- **Smooth Scroll** - Native browser API

## 📱 Responsive Breakpoints

- **Desktop** - 1024px and above
- **Tablet** - 768px to 1024px
- **Mobile** - Below 768px

## 🎬 Animations

- Fade-in transitions on page load
- Hover effects on buttons and cards
- Smooth scrolling to sections
- Progress bar animations
- Float animations on hero section
- Slide-in animations on skill items

## 📧 Contact Form

The contact form includes:
- Name field
- Email field
- Subject field
- Message textarea
- Success message on submission

**Note:** Currently, the form logs data to console. To make it functional, connect it to a backend service like:
- Emailjs
- Formspree
- Your own backend API

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Vercel** - Recommended for React apps
- **Netlify** - Easy integration with Git
- **GitHub Pages** - Free hosting
- **AWS** - More control and scalability

### Example: Deploy to Vercel
```bash
npm install -g vercel
vercel
```

## 🔍 SEO Optimization

- Semantic HTML structure
- Meta descriptions
- Proper heading hierarchy
- Fast loading times
- Mobile responsive design

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance
- Focus indicators

## 🐛 Troubleshooting

### Build Warnings
- If you see accessibility warnings about anchors, ensure they have `href` attributes or use buttons instead

### Social Icons Not Showing
- Make sure Font Awesome CDN is loaded in `public/index.html`
- Check that Font Awesome class names are correct

### Scrolling Not Working
- Ensure section IDs match the navigation links
- Check that smooth scroll is enabled in browser

## 📄 License

This portfolio template is free to use and modify for personal use.

## 🤝 Support

For questions or issues, you can:
- Check the React documentation: https://react.dev
- Review CSS animations: https://developer.mozilla.org/en-US/docs/Web/CSS/animation
- Explore Font Awesome icons: https://fontawesome.com/icons

## 💡 Tips for Success

1. **Keep Content Updated** - Regularly update projects and skills
2. **Add Real Projects** - Replace placeholder projects with your actual work
3. **Professional Photos** - Use a high-quality profile picture
4. **Mobile Testing** - Test on various devices and screen sizes
5. **Performance** - Optimize images and monitor page load times
6. **Analytics** - Add Google Analytics to track visitors
7. **Backup** - Keep your portfolio code in a Git repository

---

**Made with ❤️ by Your Developers**
