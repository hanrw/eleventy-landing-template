# Eleventy Landing Page Template

A modern, customizable landing page template built with **Eleventy (11ty)** and **Tailwind CSS**. Perfect for mobile apps, SaaS products, and web applications.

## ✨ Features

- **🚀 Fast & Lightweight**: Built with Eleventy's static site generation
- **🎨 Modern UI/UX**: Clean design with Tailwind CSS
- **🌗 Dark Mode**: Built-in theme switcher with persistent storage
- **📱 Fully Responsive**: Looks great on all devices
- **🔧 Easy Configuration**: Centralized config files for quick customization
- **🎯 SEO Optimized**: Meta tags and semantic HTML structure
- **♿ Accessible**: WCAG compliant with proper ARIA labels
- **⚡ Zero JavaScript Framework**: Pure HTML + minimal JS for theme toggle

## 📋 Prerequisites

- **Node.js** 18+ or 20+
- **npm**, **yarn**, or **pnpm**

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Your landing page will be running at `http://localhost:8080`

## 🎨 Customization

### 1️⃣ **App Information** (`src/config/appInfo.js`)

Update your app's basic information:

```javascript
export const appInfo = {
  title: "Your App Name",
  description: "Your compelling app description",
  logo: {
    src: "favicon-512.svg"
  },
  storeLinks: {
    apple: "https://apps.apple.com/app/your-app",
    google: "https://play.google.com/store/apps/details?id=your.app"
  }
};
```

### 2️⃣ **Features Section** (`src/config/features.js`)

Add or modify your app's features:

```javascript
export const features = [
  {
    title: "Smart Analytics",
    description: "Get detailed insights into your app usage",
    icon: "📊"  // Use emoji or replace with icon component
  },
  // Add more features...
];
```

### 3️⃣ **User Reviews** (`src/config/reviews.js`)

Showcase user testimonials:

```javascript
export const reviews = [
  {
    author: "Sarah Johnson",
    rating: 5,
    text: "This app completely transformed how I work!",
    avatar: "avatars/sarah.jpg"  // Optional
  },
  // Add more reviews...
];
```

### 4️⃣ **FAQ Section** (`src/config/faq.js`)

Add frequently asked questions:

```javascript
export const faq = [
  {
    question: "Is the app free to use?",
    answer: "Yes! The app is completely free with optional premium features."
  },
  // Add more FAQs...
];
```

### 5️⃣ **Social Media Links** (`src/config/socialLinks.js`)

Add your social media profiles:

```javascript
export const socialLinks = [
  {
    url: "https://instagram.com/yourapp",
    platform: "Instagram",
    label: "Follow us on Instagram"
  },
  // Add more social links...
];
```

### 6️⃣ **Screenshots** (`src/config/screenshots.js`)

Configure your app screenshots:

```javascript
export const screenshots = {
  count: 5,
  path: '/assets/screenshots',
  formats: ['avif', 'webp', 'png'],
  iphone: [
    "screenshots/iphone/1.png",
    // Add more...
  ],
  ipad: [
    "screenshots/ipad/1.png",
    // Add more...
  ]
};
```

## 📁 Project Structure

```
eleventy-landing-template/
├── src/
│   ├── config/              # Centralized configuration
│   │   ├── appInfo.js       # App information
│   │   ├── features.js      # Features list
│   │   ├── reviews.js       # User reviews
│   │   ├── faq.js          # FAQ items
│   │   ├── socialLinks.js   # Social media links
│   │   ├── screenshots.js   # Screenshot config
│   │   └── index.js        # Config aggregator
│   ├── 11ty/               # Eleventy source files
│   │   ├── _data/          # Eleventy data files
│   │   ├── _includes/      # Component templates
│   │   ├── _layouts/       # Page layouts
│   │   └── index.njk       # Homepage
│   └── style.css           # Main stylesheet
├── public/                 # Static assets
│   ├── js/
│   │   └── theme.js       # Theme toggle script
│   └── favicon-512.svg    # App icon
├── assets/                # Images, fonts, etc.
├── eleventy.config.js     # Eleventy configuration
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
└── package.json           # Dependencies
```

## 🎭 Sections Included

- **Hero Section**: Eye-catching header with app name and CTA buttons
- **Features Section**: Grid layout showcasing app features
- **Reviews Section**: User testimonials with ratings
- **FAQ Section**: Frequently asked questions
- **Header**: Sticky navigation with theme toggle
- **Footer**: Company info and social links

## 🎨 Customizing Styles

The template uses **Tailwind CSS** for styling. You can customize:

1. **Colors**: Edit `tailwind.config.js` to change the color scheme
2. **Fonts**: Add custom fonts in `tailwind.config.js` theme.extend.fontFamily
3. **Animations**: Modify animations in `src/style.css` or `tailwind.config.js`
4. **Dark Mode**: Styles automatically adapt using Tailwind's dark mode classes

## 🌐 Deployment

### **Netlify** (Recommended)

```bash
# Build command
npm run build

# Publish directory
_site
```

### **Vercel**

```bash
npm install -g vercel
vercel --prod
```

### **GitHub Pages**

```bash
npm run build
# Upload _site/ folder to your GitHub Pages repository
```

### **Custom Server**

```bash
npm run build
# Upload _site/ folder to your server
```

## 🔧 Configuration Files

### Eleventy Config (`eleventy.config.js`)

- Configure input/output directories
- Add plugins (i18n included)
- Define filters and global data

### Tailwind Config (`tailwind.config.js`)

- Content paths for purging unused CSS
- Dark mode configuration
- Custom theme extensions
- Plugin configuration

## 📝 Adding New Sections

1. Create a new include file in `src/11ty/_includes/your-section.njk`
2. Add the section data to `src/config/` if needed
3. Include it in `src/11ty/index.njk`:

```njk
{% include "your-section.njk" %}
```

## 🌍 Multi-language Support

The template includes Eleventy's i18n plugin. To add multiple languages:

1. Create language directories: `src/11ty/en/`, `src/11ty/es/`, etc.
2. Add language-specific content
3. Update `eleventy.config.js` with language configuration

## 🐛 Troubleshooting

**Build fails:**
- Ensure Node.js 18+ is installed
- Delete `node_modules` and run `npm install` again

**Styles not loading:**
- Run `npm run build:css` manually
- Check that Tailwind is watching the correct content paths

**Dark mode not working:**
- Clear browser localStorage
- Check that `theme.js` is being loaded

## 📄 License

MIT License - feel free to use this template for personal or commercial projects.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 💡 Inspiration

This template was inspired by modern mobile app landing pages and combines the best practices from:
- Mobile Landing Template (Astro-based)
- LinguaSnap Landing Page
- Modern web design patterns

---

**Made with ❤️ using Eleventy and Tailwind CSS**

If you find this template helpful, please consider giving it a ⭐!
