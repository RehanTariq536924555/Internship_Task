import { useState } from 'react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
  initialMode?: 'login' | 'signup';
}

const AuthModal = ({ isOpen, onClose, onNavigate, initialMode = 'login' }: AuthModalProps) => {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [userType, setUserType] = useState<'developer' | 'client'>('developer');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    company: '',
    techStack: '',
    linkedinUrl: '',
    githubUrl: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (mode === 'signup') {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
      if (userType === 'developer' && !formData.techStack.trim()) {
        newErrors.techStack = 'Tech stack is required';
      }
    }

    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onClose();
      onNavigate('dashboard');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative z-10 w-full max-w-2xl mx-auto animate-fade-in">
        <div className="glass-card p-8 relative max-h-[90vh] overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mode === 'login' ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                )}
              </svg>
            </div>
            <h2 className="text-4xl font-black text-white mb-3 neon-glow">
              {mode === 'login' ? 'Welcome Back' : 'Join DevConnect'}
            </h2>
            <p className="text-gray-300 text-lg">
              {mode === 'login' ? 'Sign in to your account' : 'Create your account and start building'}
            </p>
          </div>

          {/* Mode Toggle */}
          <div className="flex bg-gray-800/50 rounded-2xl p-1 mb-8">
            <button
              onClick={() => setMode('login')}
              className={`flex-1 py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
                mode === 'login'
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              🔑 Sign In
            </button>
            <button
              onClick={() => setMode('signup')}
              className={`flex-1 py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
                mode === 'signup'
                  ? 'bg-gradient-to-r from-purple-400 to-pink-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              ✨ Sign Up
            </button>
          </div>

          {/* User Type Toggle (for signup) */}
          {mode === 'signup' && (
            <div className="flex bg-gray-800/50 rounded-2xl p-1 mb-8">
              <button
                onClick={() => setUserType('developer')}
                className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                  userType === 'developer'
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                👨‍💻 Developer
              </button>
              <button
                onClick={() => setUserType('client')}
                className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                  userType === 'client'
                    ? 'bg-gradient-to-r from-purple-400 to-pink-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                🏢 Client
              </button>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {mode === 'signup' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-white font-semibold mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`input-field ${errors.firstName ? 'border-red-500' : ''}`}
                    placeholder="John"
                  />
                  {errors.firstName && <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>}
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-white font-semibold mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`input-field ${errors.lastName ? 'border-red-500' : ''}`}
                    placeholder="Doe"
                  />
                  {errors.lastName && <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>}
                </div>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-white font-semibold mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                placeholder="your@email.com"
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>

            {mode === 'signup' && userType === 'client' && (
              <div>
                <label htmlFor="company" className="block text-white font-semibold mb-2">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Your Company"
                />
              </div>
            )}

            <div className={mode === 'signup' ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : ''}>
              <div>
                <label htmlFor="password" className="block text-white font-semibold mb-2">
                  Password *
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`input-field ${errors.password ? 'border-red-500' : ''}`}
                  placeholder="••••••••••••"
                />
                {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
              </div>

              {mode === 'signup' && (
                <div>
                  <label htmlFor="confirmPassword" className="block text-white font-semibold mb-2">
                    Confirm Password *
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`input-field ${errors.confirmPassword ? 'border-red-500' : ''}`}
                    placeholder="••••••••••••"
                  />
                  {errors.confirmPassword && <p className="text-red-400 text-sm mt-1">{errors.confirmPassword}</p>}
                </div>
              )}
            </div>

            {mode === 'signup' && userType === 'developer' && (
              <>
                <div>
                  <label htmlFor="techStack" className="block text-white font-semibold mb-2">
                    Tech Stack *
                  </label>
                  <textarea
                    id="techStack"
                    name="techStack"
                    value={formData.techStack}
                    onChange={handleChange}
                    rows={3}
                    className={`input-field resize-none ${errors.techStack ? 'border-red-500' : ''}`}
                    placeholder="e.g., React, Node.js, Python, AWS, MongoDB..."
                  />
                  {errors.techStack && <p className="text-red-400 text-sm mt-1">{errors.techStack}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="linkedinUrl" className="block text-white font-semibold mb-2">
                      LinkedIn URL
                    </label>
                    <input
                      type="url"
                      id="linkedinUrl"
                      name="linkedinUrl"
                      value={formData.linkedinUrl}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                  </div>

                  <div>
                    <label htmlFor="githubUrl" className="block text-white font-semibold mb-2">
                      GitHub URL
                    </label>
                    <input
                      type="url"
                      id="githubUrl"
                      name="githubUrl"
                      value={formData.githubUrl}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="https://github.com/yourusername"
                    />
                  </div>
                </div>
              </>
            )}

            <button
              type="submit"
              className="w-full btn-primary py-4 text-xl font-bold"
            >
              {mode === 'login' ? '🚀 Sign In' : '✨ Create Account'}
            </button>
          </form>

          {/* Google Login */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-600" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-transparent text-gray-400 font-medium">Or continue with</span>
              </div>
            </div>

            <button className="w-full mt-6 btn-secondary py-4 text-lg font-semibold flex items-center justify-center space-x-3">
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
          <div className="mt-8 text-center space-y-3">
            {mode === 'login' ? (
              <p className="text-gray-400">
                Don't have an account?{' '}
                <button 
                  onClick={() => setMode('signup')}
                  className="text-gradient font-bold hover:underline"
                >
                  Sign up here
                </button>
              </p>
            ) : (
              <p className="text-gray-400">
                Already have an account?{' '}
                <button 
                  onClick={() => setMode('login')}
                  className="text-gradient font-bold hover:underline"
                >
                  Sign in here
                </button>
              </p>
            )}
            
            {mode === 'login' && (
              <button 
                onClick={() => {
                  onClose();
                  onNavigate('forgot-password');
                }}
                className="text-gray-500 hover:text-gray-300 transition-colors text-sm"
              >
                Forgot your password?
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;