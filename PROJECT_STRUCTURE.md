# Portfolio Project Structure

## Complete Repository Layout

```
portfolio/
│
├── 📄 .gitignore                    # Git ignore rules
├── 📄 index.html                    # HTML entry point
├── 📄 package.json                  # Dependencies and scripts
├── 📄 postcss.config.js             # PostCSS configuration for Tailwind
├── 📄 README.md                     # Project documentation
├── 📄 tailwind.config.js            # Tailwind CSS configuration
├── 📄 vite.config.js                # Vite build configuration
│
├── 📁 public/                       # Static assets (favicon, images, etc.)
│
└── 📁 src/                          # Source code
    │
    ├── 📄 App.jsx                   # Main app component with routing
    ├── 📄 index.css                 # Global styles and Tailwind imports
    ├── 📄 main.jsx                  # React entry point
    │
    └── 📁 components/               # React components
        │
        ├── 📄 Navigation.jsx        # Top navigation bar
        ├── 📄 Hero.jsx              # Hero section with bio
        ├── 📄 FeaturedProjects.jsx  # Projects showcase cards
        ├── 📄 Skills.jsx            # Skills section (Web Dev & Security)
        ├── 📄 Labs.jsx              # Labs & Certificates section
        ├── 📄 Contact.jsx           # Contact section with social links
        └── 📄 ProjectDetail.jsx     # Detailed project case study pages
```

## File Descriptions

### Root Configuration Files

- **`.gitignore`** - Excludes node_modules, dist, and editor files from Git
- **`index.html`** - HTML template with meta tags and root div
- **`package.json`** - Project dependencies (React, Vite, Tailwind, React Router, Lucide icons)
- **`vite.config.js`** - Vite configuration with React plugin
- **`tailwind.config.js`** - Tailwind theme customization (colors, spacing)
- **`postcss.config.js`** - PostCSS setup for Tailwind processing
- **`README.md`** - Complete setup and deployment instructions

### Source Files

#### `src/main.jsx`
- React DOM root rendering
- Imports App component and global CSS

#### `src/index.css`
- Tailwind directives (@tailwind base/components/utilities)
- Custom CSS classes (section-container, card, btn-primary, etc.)
- Global styles (smooth scrolling, body background)

#### `src/App.jsx`
- React Router setup
- Route definitions:
  - `/` - Home page with all sections
  - `/project/phishing-detector` - Phishing Detector case study
  - `/project/threat-hunting` - Threat Hunting Dashboard case study

### Components

#### `src/components/Navigation.jsx`
- Fixed navigation bar with smooth scroll links
- Mobile-responsive hamburger menu
- Transparent background that becomes solid on scroll

#### `src/components/Hero.jsx`
- Full-screen hero section
- Animated background grid
- Bio text and call-to-action buttons
- Scroll indicator

#### `src/components/FeaturedProjects.jsx`
- Two main project cards (Phishing Detector & Threat Hunting)
- Links to detailed case study pages
- Tech stack badges
- Hover effects and animations

#### `src/components/Skills.jsx`
- Two-column layout (Web Dev & Security)
- Icon-based skill cards
- Organized by category

#### `src/components/Labs.jsx`
- Grid of achievement cards
- TryHackMe, HTB, OSCP, CTF sections
- Status badges (Active/In Progress)

#### `src/components/Contact.jsx`
- Social media links (GitHub, LinkedIn, Email)
- Footer with portfolio credits

#### `src/components/ProjectDetail.jsx`
- Comprehensive case study pages
- Sections include:
  - Problem Statement
  - Approach
  - Tech Stack
  - Architecture flow
  - How to Run (commands)
  - Security Findings & PoCs
  - Outcome & Next Steps
  - Repository and Demo links

## Key Features

✅ **Modern Tech Stack**: React 18, Vite, Tailwind CSS, React Router  
✅ **Fully Responsive**: Mobile, tablet, and desktop optimized  
✅ **Dark Theme**: Professional dark color scheme  
✅ **Smooth Animations**: Hover effects, transitions, scroll animations  
✅ **SEO Ready**: Meta tags, semantic HTML  
✅ **Accessible**: Proper ARIA labels, keyboard navigation  
✅ **Production Ready**: Build configuration, deployment guides  

## Dependencies

### Production
- `react` & `react-dom` - UI framework
- `react-router-dom` - Client-side routing
- `lucide-react` - Icon library

### Development
- `vite` - Build tool and dev server
- `@vitejs/plugin-react` - Vite React plugin
- `tailwindcss` - CSS framework
- `autoprefixer` & `postcss` - CSS processing

## Scripts

- `npm run dev` - Start development server (localhost:5173)
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run preview` - Preview production build locally

## Deployment

The project is ready to deploy to:
- **Vercel** (recommended) - Automatic deployments from Git
- **Netlify** - Drag & drop or Git integration
- **GitHub Pages** - Static hosting
- Any static hosting service

## Next Steps

1. **Customize Content**: Update personal info, links, and project details
2. **Add Assets**: Add favicon, project screenshots, demo videos
3. **Deploy**: Connect to Vercel/Netlify and deploy
4. **Update Links**: Replace placeholder GitHub/LinkedIn URLs
5. **Add Projects**: Expand with more case studies as needed

