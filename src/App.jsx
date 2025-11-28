import React, { useState } from 'react';
import './i18n';
import { ThemeProvider } from './components/ThemeContext';
import LoginPage from './components/LoginPage';
import TeacherDashboard from './components/teacher/TeacherDashboard';
import SimplifiedStudentDashboard from './components/teacher/SimplifiedStudentDashboard';
import AdminDashboard from './components/admin/AdminDashboard';
import GovernmentDashboard from './components/government/GovernmentDashboard';
import AttendSmartLogo from './components/AttendSmartLogo';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState('');

  const handleLogin = (type) => {
    setIsLoggedIn(true);
    setUserType(type);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserType('');
  };

  const renderDashboard = () => {
    switch (userType) {
      case 'teacher':
        return <TeacherDashboard />;
      case 'student':
        return <SimplifiedStudentDashboard />;
      case 'admin':
        return <AdminDashboard onLogout={handleLogout} />;
      case 'government':
        return <GovernmentDashboard onLogout={handleLogout} />;
      default:
        return <LoginPage onLogin={handleLogin} />;
    }
  };

  // For testing purposes - direct access to student dashboard
  const directStudentAccess = () => {
    setIsLoggedIn(true);
    setUserType('student');
  };

  return (
    <ThemeProvider>
      <div>
        {!isLoggedIn ? (
          <div>
            <div style={{ position: 'fixed', top: '10px', right: '10px', zIndex: 1000 }}>
              <button 
                onClick={directStudentAccess}
                style={{
                  padding: '10px 15px',
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 'bold'
                }}
              >
                Quick Student Access
              </button>
            </div>
            <LoginPage onLogin={handleLogin} />
          </div>
        ) : (
          renderDashboard()
        )}
      </div>
    </ThemeProvider>
  );
}