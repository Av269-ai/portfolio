import { Link } from 'react-router-dom'
import { ExternalLink, Brain, Search } from 'lucide-react'

export default function FeaturedProjects() {
  const projects = [
    {
      id: 'phishing-detector',
      title: 'Phishing Email Detector',
      description: 'A hands-on project combining machine learning and practical engineering to flag phishing attempts. Analyzes email content, URLs, and header heuristics to return a risk score with explanations.',
      tech: ['Python', 'Flask', 'TensorFlow', 'React', 'scikit-learn'],
      icon: Brain,
      gradient: 'from-purple-500 to-pink-500',
      route: '/project/phishing-detector'
    },
    {
      id: 'threat-hunting',
      title: 'Threat Hunting Dashboard',
      description: 'A demonstrable threat-hunting tool to ingest logs, visualize IOC matches, and speed up triage. Parses logs, surfaces suspicious timelines and IOC hits, and provides context for analysts.',
      tech: ['Node.js', 'React', 'Elasticsearch', 'Kibana'],
      icon: Search,
      gradient: 'from-blue-500 to-cyan-500',
      route: '/project/threat-hunting'
    }
  ]

  return (
    <section id="projects" className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Featured <span className="text-primary-400">Projects</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Lab-driven, reproducible projects demonstrating technical depth and practical impact
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => {
          const Icon = project.icon
          return (
            <Link
              key={project.id}
              to={project.route}
              className="card group hover:scale-105 transition-transform duration-300"
            >
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-dark-700 text-gray-300 text-sm rounded-full border border-dark-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center text-primary-400 group-hover:text-primary-300 transition-colors">
                <span className="mr-2">View Case Study</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

