import { useState } from 'react';
import LandingPage from './pages/LandingPage.tsx';
import UserSelection from './pages/UserSelection.tsx';
import DeveloperLogin from './pages/DeveloperLogin.tsx';
import UserLogin from './pages/UserLogin.tsx';
import DeveloperSignup from './pages/DeveloperSignup.tsx';
import UserSignup from './pages/UserSignup.tsx';
import Dashboard from './pages/Dashboard.tsx';
import ForgotPassword from './pages/ForgotPassword.tsx';
import Navbar from './components/Navbar.tsx';

function App() {
    const [currentPage, setCurrentPage] = useState('landing');

    const renderPage = () => {
        switch (currentPage) {
            case 'landing':
                return <LandingPage onNavigate={setCurrentPage} />;
            case 'select-user-type':
                return <UserSelection onNavigate={setCurrentPage} />;
            case 'developer-login':
                return <DeveloperLogin onNavigate={setCurrentPage} />;
            case 'user-login':
                return <UserLogin onNavigate={setCurrentPage} />;
            case 'developer-signup':
                return <DeveloperSignup onNavigate={setCurrentPage} />;
            case 'user-signup':
                return <UserSignup onNavigate={setCurrentPage} />;
            case 'dashboard':
                return <Dashboard onNavigate={setCurrentPage} />;
            case 'forgot-password':
                return <ForgotPassword onNavigate={setCurrentPage} />;
            default:
                return <LandingPage onNavigate={setCurrentPage} />;
        }
    };

    const showNavbar = !['dashboard'].includes(currentPage);

    return (
        <div className="min-h-screen w-full">
            {showNavbar && <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />}
            <div className="w-full">
                {renderPage()}
            </div>
        </div>
    );
}

export default App;