import Hero from './components/Hero'
import FeaturedProjects from './components/FeaturedProjects'
import Skills from './components/Skills'
import Labs from './components/Labs'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import ProjectDetail from './components/ProjectDetail'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-900">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/phishing-detector" element={<ProjectDetail project="phishing" />} />
          <Route path="/project/threat-hunting" element={<ProjectDetail project="threat-hunting" />} />
        </Routes>
      </div>
    </Router>
  )
}

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Skills />
      <Labs />
      <Contact />
    </>
  )
}

export default App

