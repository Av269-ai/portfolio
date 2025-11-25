import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-dark-900/95 backdrop-blur-sm border-b border-dark-700' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-primary-400"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#projects" className="text-gray-300 hover:text-primary-400 transition-colors">Projects</a>
            <a href="#skills" className="text-gray-300 hover:text-primary-400 transition-colors">Skills</a>
            <a href="#labs" className="text-gray-300 hover:text-primary-400 transition-colors">Labs</a>
            <a href="#contact" className="text-gray-300 hover:text-primary-400 transition-colors">Contact</a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-800 border-t border-dark-700">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a href="#projects" className="block py-2 text-gray-300 hover:text-primary-400" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#skills" className="block py-2 text-gray-300 hover:text-primary-400" onClick={() => setIsOpen(false)}>Skills</a>
            <a href="#labs" className="block py-2 text-gray-300 hover:text-primary-400" onClick={() => setIsOpen(false)}>Labs</a>
            <a href="#contact" className="block py-2 text-gray-300 hover:text-primary-400" onClick={() => setIsOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  )
}

