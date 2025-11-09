import { ArrowDown, Code, Shield } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-dark-900 to-dark-900"></div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="section-container relative z-10 text-center">
        <div className="flex justify-center mb-6">
          <div className="flex space-x-4">
            <div className="p-3 bg-primary-500/10 rounded-lg border border-primary-500/20">
              <Code className="w-8 h-8 text-primary-400" />
            </div>
            <div className="p-3 bg-primary-500/10 rounded-lg border border-primary-500/20">
              <Shield className="w-8 h-8 text-primary-400" />
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500 bg-clip-text text-transparent">
          I build cybersecurity tools<br />and web apps
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
          Phishing detection & Threat hunting demos
        </p>

        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
          I'm Avi — a cybersecurity and web development practitioner who builds reproducible tools for detection and testing. 
          I combine practical pentesting techniques (Burp Suite, XSS, SQLi) with web engineering (Node.js, React, Tailwind, TensorFlow) 
          to create demos, dashboards, and clear technical writeups. I learn by doing — labs, CTFs, and real projects — 
          and my current focus is OSCP-level skills and bug bounty readiness.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" className="btn-primary inline-flex items-center justify-center">
            View Projects
          </a>
          <a href="#contact" className="btn-secondary inline-flex items-center justify-center">
            Get in Touch
          </a>
        </div>

        <div className="mt-16 animate-bounce">
          <a href="#projects" className="text-gray-500 hover:text-primary-400 transition-colors">
            <ArrowDown className="w-6 h-6 mx-auto" />
          </a>
        </div>
      </div>
    </section>
  )
}

