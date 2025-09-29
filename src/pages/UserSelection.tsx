import Logo from '../components/Logo';

interface UserSelectionProps {
  onNavigate: (page: string) => void;
}

const UserSelection = ({ onNavigate }: UserSelectionProps) => {

  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              How would you like to 
              <span className="text-gradient block">join?</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
              Choose your path to get started with DevConnect
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {/* Developer Card */}
            <div 
              onClick={() => onNavigate('developer-login')}
              className="card cursor-pointer hover-lift group border-2 hover:border-blue-500/50 animate-slide-up"
            >
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">I'm a Developer</h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Showcase your skills, find exciting projects, and build your freelance career.
                </p>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600">Create your professional profile</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600">Browse and bid on projects</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600">Build your reputation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* User/Client Card */}
            <div 
              onClick={() => onNavigate('user-login')}
              className="card cursor-pointer hover-lift group border-2 hover:border-green-500/50 animate-slide-up"
            >
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">I'm a Client</h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Find talented developers for your projects and bring your ideas to life.
                </p>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">Post your project requirements</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">Review developer proposals</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">Manage your projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center animate-fade-in">
            <button 
              onClick={() => onNavigate('landing')}
              className="text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors duration-200 flex items-center mx-auto space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back to Home</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserSelection;