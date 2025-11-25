import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

export default function Contact() {
  const links = [
    {
      name: 'GitHub',
      url: 'https://github.com/Av269-ai',
      icon: Github,
      color: 'hover:text-gray-100'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/avi-sachdeva-142a4928b/',
      icon: Linkedin,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      url: 'https://mail.google.com/mail/u/0/#inbox',
      icon: Mail,
      color: 'hover:text-primary-400'
    }
  ]

  return (
    <section id="contact" className="section-container bg-dark-800/50">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Get in <span className="text-primary-400">Touch</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
          Interested in collaborating or discussing security research? Let's connect.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {links.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.name}
                href={link.url}
                target={link.name === 'Email' ? '_self' : '_blank'}
                rel={link.name === 'Email' ? '' : 'noopener noreferrer'}
                className={`group flex items-center space-x-3 px-6 py-4 bg-dark-800 rounded-lg border border-dark-700 hover:border-primary-500 transition-all duration-300 ${link.color}`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-semibold">{link.name}</span>
                {link.name !== 'Email' && (
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </a>
            )
          })}
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-sm">
            Portfolio built with React, Vite, and Tailwind CSS
          </p>
          <p className="text-gray-600 text-xs mt-2">
            View source code and live demos on GitHub
          </p>
        </div>
      </div>
    </section>
  )
}

