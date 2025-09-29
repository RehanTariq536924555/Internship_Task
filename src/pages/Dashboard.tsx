import { useState } from 'react';
import Logo from '../components/Logo';
import DeveloperProfileCard from '../components/DeveloperProfileCard';
import ThemeToggle from '../components/ThemeToggle';

interface DashboardProps {
  onNavigate: (page: string) => void;
}

const Dashboard = ({ onNavigate }: DashboardProps) => {
  const [activeTab, setActiveTab] = useState('overview');

  const handleLogout = () => {
    onNavigate('landing');
  };

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: '📊', color: 'from-cyan-400 to-blue-500' },
    { id: 'projects', label: 'Projects', icon: '💼', color: 'from-purple-400 to-pink-500' },
    { id: 'profile', label: 'Profile', icon: '👤', color: 'from-green-400 to-teal-500' },
    { id: 'messages', label: 'Messages', icon: '💬', color: 'from-yellow-400 to-orange-500' },
    { id: 'earnings', label: 'Earnings', icon: '💰', color: 'from-emerald-400 to-cyan-500' },
    { id: 'settings', label: 'Settings', icon: '⚙️', color: 'from-gray-400 to-slate-500' },
  ];

  const mockProjects = [
    { id: 1, title: 'AI-Powered E-commerce Platform', status: 'In Progress', budget: '$15,000', client: 'TechCorp', progress: 75, dueDate: '2024-02-15' },
    { id: 2, title: 'Blockchain Voting System', status: 'Completed', budget: '$25,000', client: 'GovTech', progress: 100, dueDate: '2024-01-30' },
    { id: 3, title: 'Real-time Chat Application', status: 'Review', budget: '$8,500', client: 'StartupXYZ', progress: 90, dueDate: '2024-02-20' },
    { id: 4, title: 'Machine Learning Dashboard', status: 'Planning', budget: '$12,000', client: 'DataFlow Inc', progress: 25, dueDate: '2024-03-10' },
  ];

  const mockStats = [
    { label: 'Total Earnings', value: '$127,450', change: '+12.5%', icon: '💰', color: 'from-green-400 to-emerald-500' },
    { label: 'Active Projects', value: '8', change: '+3', icon: '🚀', color: 'from-blue-400 to-cyan-500' },
    { label: 'Client Rating', value: '4.9★', change: '+0.2', icon: '⭐', color: 'from-yellow-400 to-orange-500' },
    { label: 'Completed', value: '47', change: '+5', icon: '✅', color: 'from-purple-400 to-pink-500' },
  ];

  const mockDevelopers = [
    {
      name: 'Sarah Chen',
      title: 'Full Stack Developer',
      avatar: 'SC',
      rating: 4.9,
      completedProjects: 67,
      hourlyRate: 95,
      skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'GraphQL'],
      location: 'San Francisco, CA',
      availability: 'Available'
    },
    {
      name: 'Marcus Rodriguez',
      title: 'AI/ML Engineer',
      avatar: 'MR',
      rating: 4.8,
      completedProjects: 43,
      hourlyRate: 110,
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Docker', 'Kubernetes'],
      location: 'Austin, TX',
      availability: 'Busy'
    }
  ];

  return (
    <div className="min-h-screen hero-bg">
      {/* Glowing Orbs */}
      <div className="glow-orb glow-orb-1"></div>
      <div className="glow-orb glow-orb-2"></div>
      <div className="glow-orb glow-orb-3"></div>

      {/* Header */}
      <header className="relative z-10 glass-card mx-6 mt-6 p-6">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center space-x-6">
            <ThemeToggle />
            <div className="text-right">
              <div className="text-white font-bold text-lg">John Developer</div>
              <div className="text-gray-400 text-sm">Elite Member</div>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
              JD
            </div>
            <button
              onClick={handleLogout}
              className="btn-primary px-6 py-3"
            >
              🚪 Logout
            </button>
          </div>
        </div>
      </header>

      <div className="flex relative z-10">
        {/* Sidebar */}
        <aside className="w-80 p-6">
          <div className="glass-card p-6">
            <nav className="space-y-3">
              {sidebarItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-4 px-6 py-4 rounded-2xl text-left transition-all duration-300 ${
                    activeTab === item.id
                      ? 'bg-gradient-to-r ' + item.color + ' text-white shadow-lg transform scale-105'
                      : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-semibold text-lg">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div className="animate-fade-in">
                <h1 className="text-5xl font-black text-white mb-4 neon-glow">
                  Welcome Back, <span className="text-gradient">John</span>
                </h1>
                <p className="text-xl text-gray-300">Ready to build something amazing today?</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in stagger-1">
                {mockStats.map((stat, index) => (
                  <div key={index} className="card hover-lift">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center text-2xl`}>
                        {stat.icon}
                      </div>
                      <span className="text-green-400 font-bold text-sm">{stat.change}</span>
                    </div>
                    <div className="text-3xl font-black text-white mb-2">{stat.value}</div>
                    <div className="text-gray-400 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Projects and Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Active Projects */}
                <div className="card animate-fade-in stagger-2">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-white">Active Projects</h3>
                    <button className="btn-secondary px-4 py-2 text-sm">View All</button>
                  </div>
                  <div className="space-y-4">
                    {mockProjects.map((project) => (
                      <div key={project.id} className="bg-gray-800/50 rounded-2xl p-6 hover:bg-gray-700/50 transition-all duration-300">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="font-bold text-white text-lg">{project.title}</h4>
                            <p className="text-gray-400">{project.client}</p>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-white">{project.budget}</div>
                            <span className={`text-xs px-3 py-1 rounded-full ${
                              project.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                              project.status === 'In Progress' ? 'bg-blue-500/20 text-blue-400' :
                              project.status === 'Review' ? 'bg-yellow-500/20 text-yellow-400' :
                              'bg-gray-500/20 text-gray-400'
                            }`}>
                              {project.status}
                            </span>
                          </div>
                        </div>
                        <div className="mb-2">
                          <div className="flex justify-between text-sm text-gray-400 mb-1">
                            <span>Progress</span>
                            <span>{project.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${project.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className="text-sm text-gray-400">Due: {project.dueDate}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="card animate-fade-in stagger-3">
                  <h3 className="text-2xl font-bold text-white mb-6">Recent Activity</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-2xl">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                        ✅
                      </div>
                      <div>
                        <div className="text-white font-semibold">Project Completed</div>
                        <div className="text-gray-400 text-sm">Blockchain Voting System - $25,000</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-2xl">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center">
                        💬
                      </div>
                      <div>
                        <div className="text-white font-semibold">New Message</div>
                        <div className="text-gray-400 text-sm">Client feedback on AI Platform</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-2xl">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                        🎯
                      </div>
                      <div>
                        <div className="text-white font-semibold">Milestone Reached</div>
                        <div className="text-gray-400 text-sm">75% progress on E-commerce Platform</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Featured Developers */}
              <div className="card animate-fade-in stagger-4">
                <h3 className="text-2xl font-bold text-white mb-6">Network Spotlight</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {mockDevelopers.map((developer, index) => (
                    <DeveloperProfileCard key={index} developer={developer} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="animate-fade-in">
              <h1 className="text-4xl font-black text-white mb-8 neon-glow">My Projects</h1>
              <div className="card">
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Project Management</h3>
                  <p className="text-gray-400 mb-8">Manage all your projects in one place</p>
                  <button className="btn-primary">Create New Project</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="animate-fade-in">
              <h1 className="text-4xl font-black text-white mb-8 neon-glow">Profile Settings</h1>
              <div className="card">
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">👤</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Profile Management</h3>
                  <p className="text-gray-400 mb-8">Update your professional profile</p>
                  <button className="btn-primary">Edit Profile</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'messages' && (
            <div className="animate-fade-in">
              <h1 className="text-4xl font-black text-white mb-8 neon-glow">Messages</h1>
              <div className="card">
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">💬</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Communication Hub</h3>
                  <p className="text-gray-400 mb-8">Stay connected with your clients</p>
                  <button className="btn-primary">New Message</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'earnings' && (
            <div className="animate-fade-in">
              <h1 className="text-4xl font-black text-white mb-8 neon-glow">Earnings</h1>
              <div className="card">
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">💰</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Financial Overview</h3>
                  <p className="text-gray-400 mb-8">Track your income and payments</p>
                  <button className="btn-primary">View Details</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="animate-fade-in">
              <h1 className="text-4xl font-black text-white mb-8 neon-glow">Settings</h1>
              <div className="card">
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">⚙️</div>
                  <h3 className="text-2xl font-bold text-white mb-4">System Settings</h3>
                  <p className="text-gray-400 mb-8">Customize your experience</p>
                  <button className="btn-primary">Configure</button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;