import { Code, Shield, Database, Zap, Globe, Lock, Brain, Search } from 'lucide-react'

export default function Skills() {
  const webDevSkills = [
    { name: 'JavaScript (ES6+)', icon: Code },
    { name: 'Node.js', icon: Zap },
    { name: 'React.js', icon: Globe },
    { name: 'Tailwind CSS', icon: Code },
    { name: 'RESTful APIs', icon: Database },
    { name: 'MongoDB', icon: Database },
    { name: 'TensorFlow', icon: Brain },
    { name: 'Vite', icon: Zap },
  ]

  const securitySkills = [
    { name: 'Burp Suite', icon: Shield },
    { name: 'XSS Testing', icon: Lock },
    { name: 'SQL Injection', icon: Database },
    { name: 'CSRF', icon: Lock },
    { name: 'Authentication Flaws', icon: Shield },
    { name: 'Threat Hunting', icon: Search },
    { name: 'Log Analysis', icon: Database },
    { name: 'CTF / Pentesting', icon: Shield },
  ]

  const SkillCard = ({ skill }) => {
    const Icon = skill.icon
    return (
      <div className="flex items-center space-x-3 p-4 bg-dark-800 rounded-lg border border-dark-700 hover:border-primary-500 transition-colors">
        <div className="p-2 bg-primary-500/10 rounded-lg">
          <Icon className="w-5 h-5 text-primary-400" />
        </div>
        <span className="text-gray-300">{skill.name}</span>
      </div>
    )
  }

  return (
    <section id="skills" className="section-container bg-dark-800/50">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Core <span className="text-primary-400">Strengths</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Combining web engineering with offensive security expertise
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Web Development */}
        <div>
          <div className="flex items-center mb-6">
            <Code className="w-8 h-8 text-primary-400 mr-3" />
            <h3 className="text-2xl font-bold text-white">Web Development</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {webDevSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        {/* Cybersecurity */}
        <div>
          <div className="flex items-center mb-6">
            <Shield className="w-8 h-8 text-primary-400 mr-3" />
            <h3 className="text-2xl font-bold text-white">Cybersecurity & Pentesting</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {securitySkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

