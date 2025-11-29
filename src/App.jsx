import React, { useState } from 'react';
import './i18n';
import { ThemeProvider } from './components/ThemeContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import TeacherDashboard from './components/teacher/TeacherDashboard';
import SimplifiedStudentDashboard from './components/teacher/SimplifiedStudentDashboard';
import AdminDashboard from './components/admin/AdminDashboard';
import GovernmentDashboard from './components/government/GovernmentDashboard';
import ClassDetailsPage from './components/ClassDetailsPage';
import AttendSmartLogo from './components/AttendSmartLogo';

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
      <ThemeProvider>
        <div>
          <Routes>
            <Route path="/" element={
              userType === '' ? 
                <LoginPage onLogin={handleLogin} /> : 
                userType === 'teacher' ? 
                  <TeacherDashboard onLogout={handleLogout} /> : 
                userType === 'student' ? 
                  <SimplifiedStudentDashboard onLogout={handleLogout} /> : 
                userType === 'admin' ? 
                  <AdminDashboard onLogout={handleLogout} /> : 
                userType === 'government' ? 
                  <GovernmentDashboard onLogout={handleLogout} /> : 
                  <LoginPage onLogin={handleLogin} />
            } />
            <Route path="/class/:classId" element={<ClassDetailsPage />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}