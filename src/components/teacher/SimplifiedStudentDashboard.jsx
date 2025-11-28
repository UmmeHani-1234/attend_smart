import React, { useState } from 'react';
import { Home, FileText, Award, AlertCircle, Settings, User, LogOut } from 'lucide-react';

const SimplifiedStudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('home');

  // Sample data
  const studentData = {
    name: "Sarah Johnson",
    class: "Class 10-A",
    rollNumber: "24"
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f0f9ff' }}>
      {/* Sidebar */}
      <div style={{ width: '200px', backgroundColor: 'white', boxShadow: '2px 0 5px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '20px', borderBottom: '1px solid #eee' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#3b82f6' }}>Student Dashboard</h2>
          <p style={{ fontSize: '14px', color: '#666' }}>{studentData.name}</p>
          <p style={{ fontSize: '12px', color: '#999' }}>{studentData.class} • #{studentData.rollNumber}</p>
        </div>

        <nav style={{ flex: 1, padding: '10px' }}>
          {[
            { id: 'home', icon: Home, label: 'Dashboard' },
            { id: 'assignments', icon: FileText, label: 'Assignments' },
            { id: 'grades', icon: Award, label: 'Grades' },
            { id: 'notices', icon: AlertCircle, label: 'Notices' },
            { id: 'settings', icon: Settings, label: 'Settings' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                width: '100%',
                padding: '12px',
                textAlign: 'left',
                backgroundColor: activeTab === tab.id ? '#3b82f6' : 'transparent',
                color: activeTab === tab.id ? 'white' : '#333',
                border: 'none',
                borderRadius: '4px',
                marginBottom: '5px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <tab.icon size={16} />
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>

        <div style={{ padding: '10px', borderTop: '1px solid #eee' }}>
          <button style={{ width: '100%', padding: '12px', textAlign: 'left', backgroundColor: 'transparent', color: '#333', border: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <User size={16} />
            <span>Profile</span>
          </button>
          <button style={{ width: '100%', padding: '12px', textAlign: 'left', backgroundColor: 'transparent', color: '#333', border: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <LogOut size={16} />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <div style={{ padding: '20px', backgroundColor: 'white', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>Welcome, {studentData.name}!</h1>
          <p style={{ color: '#666' }}>{studentData.class} • Roll #{studentData.rollNumber}</p>
        </div>

        {/* Dashboard Content */}
        <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
          {activeTab === 'home' && (
            <div>
              <h2 style={{ fontSize: '20px', marginBottom: '20px' }}>Dashboard Overview</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                  <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Attendance</h3>
                  <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#3b82f6' }}>92%</p>
                </div>
                <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                  <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Current Grade</h3>
                  <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#3b82f6' }}>A-</p>
                </div>
                <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                  <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>GPA</h3>
                  <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#3b82f6' }}>3.8</p>
                </div>
                <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                  <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Pending Assignments</h3>
                  <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#3b82f6' }}>3</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'assignments' && (
            <div>
              <h2 style={{ fontSize: '20px', marginBottom: '20px' }}>My Assignments</h2>
              <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                <p>You have 3 pending assignments.</p>
              </div>
            </div>
          )}

          {activeTab === 'grades' && (
            <div>
              <h2 style={{ fontSize: '20px', marginBottom: '20px' }}>Academic Performance</h2>
              <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                <p>Your grades will appear here.</p>
              </div>
            </div>
          )}

          {activeTab === 'notices' && (
            <div>
              <h2 style={{ fontSize: '20px', marginBottom: '20px' }}>Important Notices</h2>
              <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                <p>Important notices will appear here.</p>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <h2 style={{ fontSize: '20px', marginBottom: '20px' }}>Account Settings</h2>
              <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                <p>Manage your account settings here.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SimplifiedStudentDashboard;