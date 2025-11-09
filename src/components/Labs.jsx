import { Award, Trophy, Target, BookOpen } from 'lucide-react'

export default function Labs() {
  const achievements = [
    {
      title: 'TryHackMe',
      description: 'Completed rooms on web vulnerabilities, network security, and penetration testing',
      icon: BookOpen,
      status: 'Active',
      color: 'text-green-400'
    },
    {
      title: 'Hack The Box',
      description: 'Rooted multiple machines, focusing on web app exploitation and privilege escalation',
      icon: Target,
      status: 'Active',
      color: 'text-blue-400'
    },
    {
      title: 'OSCP',
      description: 'Target certification - building skills through hands-on labs and practice',
      icon: Award,
      status: 'In Progress',
      color: 'text-yellow-400'
    },
    {
      title: 'CTF Competitions',
      description: 'Participated in multiple CTFs, focusing on web exploitation and forensics',
      icon: Trophy,
      status: 'Active',
      color: 'text-purple-400'
    }
  ]

  return (
    <section id="labs" className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Labs & <span className="text-primary-400">Certificates</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Continuous learning through hands-on practice and real-world scenarios
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((achievement) => {
          const Icon = achievement.icon
          return (
            <div key={achievement.title} className="card text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary-500/10 rounded-full border border-primary-500/20">
                  <Icon className={`w-8 h-8 ${achievement.color}`} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{achievement.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{achievement.description}</p>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                achievement.status === 'Active' 
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                  : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
              }`}>
                {achievement.status}
              </span>
            </div>
          )
        })}
      </div>
    </section>
  )
}

