import React, { useState } from 'react';
import './i18n';
import { ThemeProvider } from './components/ThemeContext';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import TeacherDashboard from './components/teacher/TeacherDashboard';
import SimplifiedStudentDashboard from './components/teacher/SimplifiedStudentDashboard';
import AdminDashboard from './components/admin/AdminDashboard';
import GovernmentDashboard from './components/government/GovernmentDashboard';
import ClassDetailsPage from './components/ClassDetailsPage';
import AttendSmartLogo from './components/AttendSmartLogo';
// Import Google OAuth provider
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function App() {
  const [userType, setUserType] = useState('');

  const handleLogin = (type) => {
    setUserType(type);
  };

  const handleLogout = () => {
    setUserType('');
  };

  return (
    <Router>
      <GoogleOAuthProvider clientId="590317163674-rrj6uvnklsehhuubnkhho19tno9uff20.apps.googleusercontent.com">
        <ThemeProvider>
          <div className="w-full">
            <Routes>
              <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
              <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
              <Route path="/teacher/*" element={<TeacherDashboard onLogout={handleLogout} />} />
              <Route path="/student/*" element={<SimplifiedStudentDashboard onLogout={handleLogout} />} />
              <Route path="/admin/*" element={<AdminDashboard onLogout={handleLogout} />} />
              <Route path="/government/*" element={<GovernmentDashboard onLogout={handleLogout} />} />
              <Route path="/class/:classId" element={<ClassDetailsPage />} />
            </Routes>
          </div>
        </ThemeProvider>
      </GoogleOAuthProvider>
    </Router>
  );
}