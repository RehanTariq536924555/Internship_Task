import { useState } from 'react';
import AuthModal from '../components/AuthModal';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

const LandingPage = ({ onNavigate }: LandingPageProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('signup');

  const handleGetStarted = () => {
    setAuthMode('signup');
    setIsAuthModalOpen(true);
  };

  const handleLogin = () => {
    setAuthMode('login');
    setIsAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen hero-bg relative overflow-hidden">
      {/* Glowing Orbs */}
      <div className="glow-orb glow-orb-1"></div>
      <div className="glow-orb glow-orb-2"></div>
      <div className="glow-orb glow-orb-3"></div>
      
      {/* Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl floating"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl floating" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl floating" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-3xl floating" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 w-full px-6 py-20">
        <div className="container mx-auto text-center">
          {/* Hero Section */}
          <div className="mb-20">
            <div className="animate-fade-in stagger-1">
              <h1 className="text-7xl md:text-9xl font-black mb-8 leading-none">
                <span className="text-white">BUILD THE</span>
                <br />
                <span className="text-gradient neon-glow">FUTURE</span>
                <br />
                <span className="text-4xl md:text-6xl text-gray-400 font-light">together</span>
              </h1>
            </div>
            
            <div className="animate-fade-in stagger-2">
              <p className="text-xl md:text-3xl text-gray-300 mb-16 max-w-5xl mx-auto leading-relaxed font-light">
                Connect with <span className="text-gradient font-bold">elite developers</span> and <span className="text-gradient-alt font-bold">visionary clients</span>.
                <br />
                Where innovation meets execution in the digital age.
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto mb-16 animate-fade-in stagger-3">
            <div className="glass-card p-6">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Search for developers, skills, or revolutionary projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input-field text-xl py-6 pl-8 pr-24"
                />
                <button className="absolute right-3 top-3 btn-primary py-4 px-8 text-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-24 animate-fade-in stagger-4">
            <button
              onClick={handleGetStarted}
              className="btn-primary text-2xl px-16 py-6 pulse-ring relative"
            >
              <span className="relative z-10">🚀 Launch Your Career</span>
            </button>
            <button 
              onClick={handleLogin}
              className="btn-secondary text-2xl px-16 py-6"
            >
              <span className="flex items-center space-x-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                <span>Login</span>
              </span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 animate-fade-in stagger-5">
            <div className="card text-center hover-lift">
              <div className="text-6xl font-black text-gradient mb-4 neon-glow">100K+</div>
              <div className="text-gray-300 font-semibold text-xl">Elite Developers</div>
              <div className="text-gray-500 text-sm mt-2">Worldwide Network</div>
            </div>
            <div className="card text-center hover-lift">
              <div className="text-6xl font-black text-gradient mb-4 neon-glow">$50M+</div>
              <div className="text-gray-300 font-semibold text-xl">Total Earnings</div>
              <div className="text-gray-500 text-sm mt-2">This Year</div>
            </div>
            <div className="card text-center hover-lift">
              <div className="text-6xl font-black text-gradient mb-4 neon-glow">99.9%</div>
              <div className="text-gray-300 font-semibold text-xl">Success Rate</div>
              <div className="text-gray-500 text-sm mt-2">Project Delivery</div>
            </div>
            <div className="card text-center hover-lift">
              <div className="text-6xl font-black text-gradient mb-4 neon-glow">24/7</div>
              <div className="text-gray-300 font-semibold text-xl">Global Support</div>
              <div className="text-gray-500 text-sm mt-2">Always Available</div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-32 animate-fade-in">
            <h2 className="text-5xl font-black text-white mb-16 neon-glow">
              Why Choose <span className="text-gradient">DevConnect</span>?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card hover-lift">
                <div className="text-6xl mb-6">⚡</div>
                <h3 className="text-2xl font-bold text-white mb-4">Lightning Speed</h3>
                <p className="text-gray-400">Get matched with perfect developers in under 60 seconds using our AI-powered system.</p>
              </div>
              <div className="card hover-lift">
                <div className="text-6xl mb-6">🛡️</div>
                <h3 className="text-2xl font-bold text-white mb-4">Bank-Level Security</h3>
                <p className="text-gray-400">Military-grade encryption protects your data and payments with 100% guarantee.</p>
              </div>
              <div className="card hover-lift">
                <div className="text-6xl mb-6">🎯</div>
                <h3 className="text-2xl font-bold text-white mb-4">Perfect Matches</h3>
                <p className="text-gray-400">Advanced algorithms ensure you find the exact talent for your specific needs.</p>
              </div>
              <div className="card hover-lift">
                <div className="text-6xl mb-6">📈</div>
                <h3 className="text-2xl font-bold text-white mb-4">Scale Infinitely</h3>
                <p className="text-gray-400">From startup MVPs to enterprise solutions - we scale with your ambitions.</p>
              </div>
              <div className="card hover-lift">
                <div className="text-6xl mb-6">🌍</div>
                <h3 className="text-2xl font-bold text-white mb-4">Global Reach</h3>
                <p className="text-gray-400">Access talent from 150+ countries, working across all time zones.</p>
              </div>
              <div className="card hover-lift">
                <div className="text-6xl mb-6">💎</div>
                <h3 className="text-2xl font-bold text-white mb-4">Premium Quality</h3>
                <p className="text-gray-400">Only the top 3% of developers make it through our rigorous vetting process.</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-32 animate-fade-in">
            <div className="card p-16 text-center">
              <h3 className="text-4xl font-black text-white mb-6">
                Ready to <span className="text-gradient">Transform</span> Your Ideas?
              </h3>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Join thousands of successful projects and start building the future today.
              </p>
              <button
                onClick={handleGetStarted}
                className="btn-primary text-2xl px-12 py-6"
              >
                Start Your Journey Now →
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onNavigate={onNavigate}
        initialMode={authMode}
      />
    </div>
  );
};

export default LandingPage;