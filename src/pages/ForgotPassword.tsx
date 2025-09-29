import { useState } from 'react';
import Logo from '../components/Logo';

interface ForgotPasswordProps {
  onNavigate: (page: string) => void;
}

const ForgotPassword = ({ onNavigate }: ForgotPasswordProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <header className="container mx-auto px-6 py-8">
          <Logo />
        </header>
        <main className="container mx-auto px-6 py-8">
          <div className="max-w-md mx-auto">
            <div className="card text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-800 mb-4">Check Your Email</h1>
              <p className="text-gray-600 mb-6">
                We've sent a password reset link to <strong>{email}</strong>
              </p>
              <button
                onClick={() => onNavigate('landing')}
                className="btn-primary"
              >
                Back to Home
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="container mx-auto px-6 py-8">
        <Logo />
      </header>
      <main className="container mx-auto px-6 py-8">
        <div className="max-w-md mx-auto">
          <div className="card">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Forgot Password</h1>
              <p className="text-gray-600">Enter your email to reset your password</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter your email"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary py-3 text-lg"
              >
                Send Reset Link
              </button>
            </form>

            <div className="mt-6 text-center">
              <button 
                onClick={() => onNavigate('select-user-type')} 
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                ← Back to Login
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ForgotPassword;