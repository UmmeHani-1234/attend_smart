import React, { useState } from 'react';
import './i18n';
import LoginPage from './components/LoginPage';
import TeacherDashboard from './components/teacher/TeacherDashboard';
import StudentDashboard from './components/teacher/StudentDashboard';
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
        return <StudentDashboard />;
      case 'admin':
        return <AdminDashboard onLogout={handleLogout} />;
      case 'government':
        return <GovernmentDashboard onLogout={handleLogout} />;
      default:
        return <LoginPage onLogin={handleLogin} />;
    }
  };

  return (
    <div>
      {isLoggedIn ? renderDashboard() : <LoginPage onLogin={handleLogin} />}
    </div>
  );
}