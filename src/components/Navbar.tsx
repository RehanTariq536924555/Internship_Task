import { useState } from 'react';
import Logo from './Logo';
import AuthModal from './AuthModal';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar = ({ onNavigate, currentPage }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  const navItems = [
    { id: 'landing', label: 'Home', icon: '🏠' },
    { id: 'select-user-type', label: 'Join', icon: '🚀' },
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
  ];

  return (
    <>
      <nav className="glass-card mx-6 mt-6 sticky top-6 z-40">
        <div className="container mx-auto px-8">
          <div className="flex justify-between items-center py-6">
            <div className="cursor-pointer" onClick={() => onNavigate('landing')}>
              <Logo />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center space-x-2 font-semibold text-lg transition-all duration-300 px-4 py-2 rounded-xl ${
                    currentPage === item.id
                      ? 'text-cyan-400 bg-cyan-400/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
              
              <div className="flex items-center space-x-4 ml-8">
                <button
                  onClick={() => {
                    setAuthMode('login');
                    setIsAuthModalOpen(true);
                  }}
                  className="btn-secondary px-8 py-3 text-lg font-semibold flex items-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  <span>Login</span>
                </button>
                <button
                  onClick={() => {
                    setAuthMode('signup');
                    setIsAuthModalOpen(true);
                  }}
                  className="btn-primary px-8 py-3 text-lg font-semibold"
                >
                  Get Started
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-6 border-t border-gray-700/50 animate-fade-in">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center space-x-3 text-left font-semibold text-lg transition-all duration-300 px-4 py-3 rounded-xl ${
                      currentPage === item.id
                        ? 'text-cyan-400 bg-cyan-400/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
                
                <div className="pt-4 space-y-3">
                  <button
                    onClick={() => {
                      setAuthMode('login');
                      setIsAuthModalOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className="btn-secondary w-full py-4 text-lg font-semibold flex items-center justify-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    <span>Login</span>
                  </button>
                  <button
                    onClick={() => {
                      setAuthMode('signup');
                      setIsAuthModalOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className="btn-primary w-full py-4 text-lg font-semibold"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onNavigate={onNavigate}
        initialMode={authMode}
      />
    </>
  );
};

export default Navbar;