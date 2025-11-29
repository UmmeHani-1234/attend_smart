import React, { useState } from 'react';
import './i18n';
import { ThemeProvider } from './components/ThemeContext';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import TeacherDashboard from './components/teacher/TeacherDashboard';
import SimplifiedStudentDashboard from './components/teacher/SimplifiedStudentDashboard';
import AdminDashboard from './components/admin/AdminDashboard';
import GovernmentDashboard from './components/government/GovernmentDashboard';
import ClassDetailsPage from './components/ClassDetailsPage';
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
            <LoginPage onLogin={handleLogin} />
          </div>
        ) : (
          <Routes>
            <Route path="/" element={renderDashboard()} />
            <Route path="/class/:classId" element={<ClassDetailsPage />} />
          </Routes>
        )}
      </div>
    </ThemeProvider>
  );
}