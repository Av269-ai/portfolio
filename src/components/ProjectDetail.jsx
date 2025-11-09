import { Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Code, Shield, Database, Zap, Brain, Search, Github } from 'lucide-react'

export default function ProjectDetail({ project }) {
  const projects = {
    phishing: {
      title: 'Phishing Email Detector',
      summary: 'A hands-on project combining machine learning and practical engineering to flag phishing attempts. Analyzes email content, URLs, and header heuristics to return a risk score with explanations.',
      problem: 'Phishing attacks continue to evolve, making it critical to have automated detection systems that can analyze multiple email attributes and provide actionable risk assessments.',
      approach: 'Developed a multi-layered detection system using TF-IDF vectorization and lightweight machine learning classifiers. The system analyzes email content, URL patterns, and header metadata to generate comprehensive risk scores.',
      techStack: [
        { name: 'Python', category: 'Backend', icon: Code },
        { name: 'Flask', category: 'API', icon: Zap },
        { name: 'TensorFlow', category: 'ML', icon: Brain },
        { name: 'scikit-learn', category: 'ML', icon: Brain },
        { name: 'React', category: 'Frontend', icon: Code },
        { name: 'Tailwind CSS', category: 'Frontend', icon: Code }
      ],
      architecture: [
        'Email Ingestion → Content parsing and URL extraction',
        'Feature Extraction → TF-IDF vectorization + header heuristics',
        'Model Inference → Lightweight classifier (TensorFlow/scikit-learn)',
        'Risk Scoring → Multi-factor analysis with explanations',
        'API Response → JSON with risk score and detailed breakdown',
        'Frontend Demo → React interface for real-time analysis'
      ],
      howToRun: [
        'git clone https://github.com/yourusername/phishing-detector',
        'cd phishing-detector',
        'python -m venv venv',
        'source venv/bin/activate  # On Windows: venv\\Scripts\\activate',
        'pip install -r requirements.txt',
        'python train_model.py  # Train the model',
        'python app.py  # Start Flask API',
        'cd frontend && npm install && npm run dev  # Start React frontend'
      ],
      securityFindings: [
        {
          type: 'Detection Accuracy',
          finding: 'Model achieves 94% accuracy on test dataset with low false positive rate',
          remediation: 'Continuous retraining with new phishing patterns, feature engineering improvements'
        },
        {
          type: 'Performance',
          finding: 'Average inference time: 120ms per email',
          remediation: 'Model optimization, caching strategies for common patterns'
        }
      ],
      outcome: 'Successfully built a production-ready phishing detection system with clear API documentation and frontend demo. The project demonstrates practical ML engineering skills combined with security domain knowledge.',
      nextSteps: [
        'Deploy to production with Docker containerization',
        'Integrate with email systems (SMTP/IMAP)',
        'Add real-time learning from user feedback',
        'Expand to detect advanced phishing techniques (homograph attacks, etc.)'
      ],
      repoLink: 'https://github.com/yourusername/phishing-detector',
      demoLink: 'https://phishing-detector-demo.vercel.app'
    },
    'threat-hunting': {
      title: 'Threat Hunting Dashboard',
      summary: 'A demonstrable threat-hunting tool to ingest logs, visualize IOC matches, and speed up triage. Parses logs, surfaces suspicious timelines and IOC hits, and provides context for analysts.',
      problem: 'Security analysts need efficient tools to process large volumes of logs, identify Indicators of Compromise (IOCs), and visualize threat patterns for faster incident response.',
      approach: 'Built a full-stack threat hunting platform with log ingestion, IOC matching, timeline visualization, and interactive dashboards. Integrated with Elasticsearch for scalable log storage and Kibana-style visualizations.',
      techStack: [
        { name: 'Node.js', category: 'Backend', icon: Code },
        { name: 'React', category: 'Frontend', icon: Code },
        { name: 'Elasticsearch', category: 'Database', icon: Database },
        { name: 'Kibana', category: 'Visualization', icon: Search },
        { name: 'Tailwind CSS', category: 'Frontend', icon: Code }
      ],
      architecture: [
        'Log Ingestion → Node.js scripts parse and normalize logs',
        'IOC Matching → Rule engine matches against threat intelligence feeds',
        'Data Storage → Elasticsearch for indexed log storage',
        'API Layer → RESTful API for querying and filtering',
        'Visualization → React dashboard with charts and timelines',
        'Alerting → Real-time notifications for high-severity matches'
      ],
      howToRun: [
        'git clone https://github.com/yourusername/threat-hunting-dashboard',
        'cd threat-hunting-dashboard',
        'npm install',
        'docker-compose up -d  # Start Elasticsearch and Kibana',
        'npm run ingest  # Ingest sample logs',
        'npm run dev  # Start Node.js API server',
        'cd frontend && npm install && npm run dev  # Start React dashboard'
      ],
      securityFindings: [
        {
          type: 'IOC Detection',
          finding: 'Successfully identified 15+ IOCs across sample log dataset including suspicious IPs, domains, and file hashes',
          remediation: 'Regular IOC feed updates, custom rule creation for organization-specific threats'
        },
        {
          type: 'Performance',
          finding: 'Processes 10,000+ log entries per second with sub-second query response times',
          remediation: 'Horizontal scaling, query optimization, caching frequently accessed data'
        }
      ],
      outcome: 'Created a comprehensive threat hunting platform that significantly reduces triage time and improves analyst productivity. The dashboard provides clear visualizations and actionable insights.',
      nextSteps: [
        'Integrate with SIEM systems (Splunk, QRadar)',
        'Add machine learning for anomaly detection',
        'Implement automated playbook execution',
        'Create mobile app for on-the-go threat monitoring'
      ],
      repoLink: 'https://github.com/yourusername/threat-hunting-dashboard',
      demoLink: 'https://threat-hunting-demo.vercel.app'
    }
  }

  const projectData = projects[project] || projects.phishing

  return (
    <div className="min-h-screen pt-16">
      <div className="section-container max-w-4xl">
        <Link
          to="/"
          className="inline-flex items-center text-primary-400 hover:text-primary-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Portfolio
        </Link>

        <div className="card mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {projectData.title}
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            {projectData.summary}
          </p>
        </div>

        {/* Problem Statement */}
        <div className="card mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
            <Shield className="w-6 h-6 mr-2 text-primary-400" />
            Problem Statement
          </h2>
          <p className="text-gray-400 leading-relaxed">
            {projectData.problem}
          </p>
        </div>

        {/* Approach */}
        <div className="card mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
            <Code className="w-6 h-6 mr-2 text-primary-400" />
            Approach
          </h2>
          <p className="text-gray-400 leading-relaxed">
            {projectData.approach}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="card mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {projectData.techStack.map((tech) => {
              const Icon = tech.icon
              return (
                <div key={tech.name} className="flex items-center space-x-2 p-3 bg-dark-700 rounded-lg">
                  <Icon className="w-5 h-5 text-primary-400" />
                  <div>
                    <div className="text-white font-semibold">{tech.name}</div>
                    <div className="text-xs text-gray-500">{tech.category}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Architecture */}
        <div className="card mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">Architecture</h2>
          <div className="space-y-3">
            {projectData.architecture.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-primary-400 font-semibold text-sm">{index + 1}</span>
                </div>
                <p className="text-gray-400 flex-1">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How to Run */}
        <div className="card mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">How to Run</h2>
          <div className="bg-dark-900 rounded-lg p-4 border border-dark-700">
            <pre className="text-sm text-gray-300 overflow-x-auto">
              {projectData.howToRun.map((cmd, index) => (
                <div key={index} className="mb-1">
                  <span className="text-gray-500">$</span> {cmd}
                </div>
              ))}
            </pre>
          </div>
        </div>

        {/* Security Findings / PoCs */}
        <div className="card mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">Security Findings & Results</h2>
          <div className="space-y-4">
            {projectData.securityFindings.map((finding, index) => (
              <div key={index} className="p-4 bg-dark-700 rounded-lg border-l-4 border-primary-500">
                <h3 className="font-semibold text-white mb-2">{finding.type}</h3>
                <p className="text-gray-400 text-sm mb-2">{finding.finding}</p>
                <div className="mt-2">
                  <span className="text-xs text-gray-500">Remediation: </span>
                  <span className="text-xs text-gray-400">{finding.remediation}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Outcome */}
        <div className="card mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">Outcome & Next Steps</h2>
          <p className="text-gray-400 mb-4 leading-relaxed">
            {projectData.outcome}
          </p>
          <div className="mt-4">
            <h3 className="font-semibold text-white mb-3">Planned Improvements:</h3>
            <ul className="space-y-2">
              {projectData.nextSteps.map((step, index) => (
                <li key={index} className="flex items-start text-gray-400">
                  <span className="text-primary-400 mr-2">•</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Links */}
        <div className="card">
          <h2 className="text-2xl font-bold mb-4 text-white">Links</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={projectData.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center"
            >
              <Github className="w-5 h-5 mr-2" />
              View Repository
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
            <a
              href={projectData.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center"
            >
              Live Demo
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

