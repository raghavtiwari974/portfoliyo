# Neeraj Sharma - Modern Neon Portfolio

A futuristic, professionally designed portfolio website featuring dark theme with neon accents, smooth animations, and 3D-style character illustrations.

## 🚀 Features

- **Animated Intro**: Pentagon logo formation with NS initials reveal
- **Hero Section**: 3D-style animated character with data visualizations
- **Interactive Sections**: Smooth animations and hover effects throughout
- **Skills Grid**: Neon-bordered cards with technology icons
- **Project Showcase**: Detailed project cards with modal views
- **Education Timeline**: Vertical timeline with animated progress nodes
- **Certificates**: Floating and grid view modes for certifications
- **Contact Form**: Functional contact form with validation
- **Responsive Design**: Optimized for all device sizes
- **Accessibility**: WCAG compliant with keyboard navigation

## 🛠️ Technologies Used

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Custom CSS** for neon effects and animations
- **Vite** for build and development

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd neon-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Customization

### Color Scheme
The neon colors can be customized in `src/App.css`:
```css
:root {
  --neon-blue: #00d4ff;
  --neon-purple: #a855f7;
  --neon-teal: #06d6a0;
  --neon-pink: #f72585;
}
```

### Content Updates
- **Personal Info**: Update details in respective component files
- **Resume PDF**: Replace `public/resume-neeraj-sharma.pdf` with actual resume
- **Project Images**: Update image URLs in `ProjectsSection.tsx`
- **Contact Info**: Update contact details in `ContactSection.tsx`

### Form Integration
The contact form is configured to work with form handling services:

1. **Formspree**: Add your form endpoint
2. **Netlify Forms**: Add `netlify` attribute
3. **Custom Backend**: Update the submission logic in `ContactSection.tsx`

## 📱 Performance Optimizations

- **Lazy Loading**: Images load as they come into view
- **CSS Variables**: Easy theme customization
- **Optimized Animations**: Hardware-accelerated CSS transforms
- **Responsive Images**: Multiple breakpoints for different devices
- **Font Optimization**: Preloaded Google Fonts

## 🌐 Deployment

### Bolt Hosting (Recommended)
- Connect your repository
- Deploy automatically with optimized settings

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### Vercel
```bash
vercel --prod
```

### GitHub Pages
1. Update `vite.config.ts` with correct base path
2. Build and deploy to gh-pages branch

## 📄 File Structure

```
src/
├── components/
│   ├── IntroSection.tsx       # Animated logo intro
│   ├── HeroSection.tsx        # Main hero with 3D character
│   ├── WhatIDoSection.tsx     # Services and tools
│   ├── SkillsSection.tsx      # Skills grid
│   ├── ProjectsSection.tsx    # Project showcase
│   ├── EducationSection.tsx   # Timeline
│   ├── ExperienceSection.tsx  # Work experience
│   ├── CertificatesSection.tsx# Certificates display
│   ├── ContactSection.tsx     # Contact form
│   └── Navigation.tsx         # Header navigation
├── App.tsx                    # Main app component
├── App.css                    # Custom CSS and animations
├── index.css                  # Tailwind imports
└── main.tsx                   # React entry point
```

## 🎯 SEO & Meta Tags

The site includes comprehensive meta tags for:
- Search engines (title, description, keywords)
- Social media sharing (Open Graph)
- Mobile optimization (viewport)
- Performance (preload directives)

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators for interactive elements
- High contrast ratios for readability
- Screen reader friendly content

## 🔧 Browser Support

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

## 📝 License

MIT License - feel free to use this template for your own portfolio.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📞 Support

For questions or support, please contact:
- Email: neeraj.sharma@email.com
- LinkedIn: [Neeraj Sharma](https://linkedin.com/in/neeraj-sharma)

---

**Ready for production deployment** ✨

Built with ❤️ by Neeraj Sharma