import { useState } from 'react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
}

const LoginModal = ({ isOpen, onClose, onNavigate }: LoginModalProps) => {
  const [loginType, setLoginType] = useState<'developer' | 'client'>('developer');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
    onNavigate('dashboard');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative z-10 w-full max-w-md mx-4 animate-fade-in">
        <div className="glass-card p-8 relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
            </div>
            <h2 className="text-3xl font-black text-white mb-2 neon-glow">Welcome Back</h2>
            <p className="text-gray-300">Sign in to your account</p>
          </div>

          {/* Login Type Toggle */}
          <div className="flex bg-gray-800/50 rounded-2xl p-1 mb-8">
            <button
              onClick={() => setLoginType('developer')}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                loginType === 'developer'
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              👨‍💻 Developer
            </button>
            <button
              onClick={() => setLoginType('client')}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                loginType === 'client'
                  ? 'bg-gradient-to-r from-purple-400 to-pink-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              🏢 Client
            </button>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-white font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-white font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="••••••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full btn-primary py-4 text-lg font-bold"
            >
              🚀 Sign In
            </button>
          </form>

          {/* Google Login */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-600" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-transparent text-gray-400 font-medium">Or continue with</span>
              </div>
            </div>

            <button className="w-full mt-4 btn-secondary py-4 text-lg font-semibold flex items-center justify-center space-x-3">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>Continue with Google</span>
            </button>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center space-y-3">
            <p className="text-gray-400">
              Don't have an account?{' '}
              <button 
                onClick={() => {
                  onClose();
                  onNavigate('select-user-type');
                }}
                className="text-gradient font-bold hover:underline"
              >
                Sign up here
              </button>
            </p>
            <button 
              onClick={() => {
                onClose();
                onNavigate('forgot-password');
              }}
              className="text-gray-500 hover:text-gray-300 transition-colors text-sm"
            >
              Forgot your password?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;