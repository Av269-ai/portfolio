# Avi's Portfolio

A modern, responsive portfolio website showcasing cybersecurity and web development projects. Built with React, Vite, and Tailwind CSS.

## Features

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Project Showcases**: Detailed case studies for Phishing Email Detector and Threat Hunting Dashboard
- **Skills Display**: Organized sections for Web Development and Cybersecurity expertise
- **Labs & Certificates**: Showcase of learning achievements and certifications
- **Contact Section**: Easy access to GitHub, LinkedIn, and email

## Tech Stack

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **Lucide React**: Beautiful icon library

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory. You can preview it with:

```bash
npm run preview
```

## Deployment

This portfolio can be easily deployed to:

- **Vercel**: Connect your GitHub repo and deploy automatically
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use the `gh-pages` package or GitHub Actions

### Deploy to Vercel

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Vite and configure the build settings
4. Deploy!

## Customization

### Update Personal Information

1. **Hero Section**: Edit `src/components/Hero.jsx` to update the bio
2. **Contact Links**: Update URLs in `src/components/Contact.jsx`
3. **Project Details**: Modify project data in `src/components/ProjectDetail.jsx`
4. **Skills**: Update skills lists in `src/components/Skills.jsx`

### Styling

- Tailwind configuration: `tailwind.config.js`
- Global styles: `src/index.css`
- Color scheme: Modify the `primary` and `dark` color palettes in `tailwind.config.js`

## Project Structure

```
portfolio/
├── public/          # Static assets
├── src/
│   ├── components/  # React components
│   │   ├── Hero.jsx
│   │   ├── Navigation.jsx
│   │   ├── FeaturedProjects.jsx
│   │   ├── Skills.jsx
│   │   ├── Labs.jsx
│   │   ├── Contact.jsx
│   │   └── ProjectDetail.jsx
│   ├── App.jsx     # Main app component with routing
│   ├── main.jsx    # Entry point
│   └── index.css   # Global styles
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## License

This project is open source and available under the MIT License.

## Contact

For questions or collaboration opportunities, reach out via:
- GitHub: [yourusername](https://github.com/yourusername)
- LinkedIn: [yourusername](https://linkedin.com/in/yourusername)
- Email: your.email@example.com

