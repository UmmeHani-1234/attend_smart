import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Users, User, UserCheck, UserX, Bell, AlertTriangle, Download, Calendar, Clock, Activity, Shield, MapPin, TrendingUp, FileText, Settings, LogOut, Menu, X, Home, BookOpen, ClipboardList, MessageSquare, Search, ChevronDown, CheckCircle2, Eye, Edit, Printer, Filter, Plus, Save, XCircle, RefreshCw, PieChart, Palette } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, PieChart as RechartsPieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import AttendSmartLogo from '../AttendSmartLogo';
import UltraModernHeader from '../UltraModernHeader';
import ClassroomCard from '../ClassroomCard';
import LanguageSelector from '../LanguageSelector';
import ParticleBackground from '../ParticleBackground';

const TeacherDashboard = () => {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState('home');
  const [selectedClass, setSelectedClass] = useState('Class 10-A');
  
  // Teacher-specific data
  const [teacherData, setTeacherData] = useState({
    name: 'Dr. James Wilson',
    subject: 'Mathematics',
    classes: ['Class 10-A', 'Class 11-B', 'Class 12-C'],
    school: 'Greenwood High School'
  });
  
  const [teacherAvatar, setTeacherAvatar] = useState('https://api.dicebear.com/7.x/avataaars/svg?seed=James');
  const [showAvatarModal, setShowAvatarModal] = useState(false);
  const [settingsTab, setSettingsTab] = useState('profile');
  const [profileData, setProfileData] = useState({
    name: 'Dr. James Wilson',
    email: 'james.wilson@school.edu',
    subject: 'Mathematics',
    school: 'Greenwood High School'
  });
  
  // State for managing attendance data
  const [studentAttendanceData, setStudentAttendanceData] = useState([
    { id: 1, name: 'Rahul Sharma', class: 'Class 10-A', roll: 15, status: { present: true, absent: false, late: false }, method: 'RFID', lastUpdated: '2024-04-15 09:15:22' },
    { id: 2, name: 'Priya Patel', class: 'Class 10-A', roll: 22, status: { present: true, absent: false, late: false }, method: 'Face Recognition', lastUpdated: '2024-04-15 09:14:45' },
    { id: 3, name: 'Amit Kumar', class: 'Class 10-A', roll: 5, status: { present: false, absent: true, late: false }, method: 'Pending', lastUpdated: 'N/A' },
    { id: 4, name: 'Sneha Gupta', class: 'Class 10-A', roll: 18, status: { present: false, absent: false, late: true }, method: 'QR Code', lastUpdated: '2024-04-15 09:25:30' },
    { id: 5, name: 'Vikram Singh', class: 'Class 11-B', roll: 12, status: { present: true, absent: false, late: false }, method: 'RFID', lastUpdated: '2024-04-15 09:10:15' },
    { id: 6, name: 'Anjali Mehta', class: 'Class 11-B', roll: 8, status: { present: false, absent: true, late: false }, method: 'Manual', lastUpdated: 'N/A' },
    { id: 7, name: 'Rohit Verma', class: 'Class 12-C', roll: 25, status: { present: true, absent: false, late: false }, method: 'Face Recognition', lastUpdated: '2024-04-15 09:05:40' },
    { id: 8, name: 'Pooja Desai', class: 'Class 12-C', roll: 30, status: { present: false, absent: false, late: true }, method: 'RFID', lastUpdated: '2024-04-15 09:20:10' },
  ]);
  
  // State for new student form
  const [showAddStudentForm, setShowAddStudentForm] = useState(false);
  const [newStudent, setNewStudent] = useState({
    name: '',
    class: 'Class 10-A',
    roll: '',
    method: 'Manual'
  });
  
  // State for editing student
  const [editingStudentId, setEditingStudentId] = useState(null);
  const [editingMethod, setEditingMethod] = useState('');
  const [showStudentAttendanceModal, setShowStudentAttendanceModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  
  // Function to add a new student
  const addNewStudent = () => {
    if (newStudent.name && newStudent.roll) {
      const newStudentObj = {
        id: studentAttendanceData.length + 1,
        name: newStudent.name,
        class: newStudent.class,
        roll: parseInt(newStudent.roll),
        status: { present: false, absent: false, late: false },
        method: newStudent.method,
        lastUpdated: 'N/A'
      };
      
      setStudentAttendanceData([...studentAttendanceData, newStudentObj]);
      setNewStudent({ name: '', class: 'Class 10-A', roll: '', method: 'Manual' });
      setShowAddStudentForm(false);
    }
  };
  
  // Function to update student attendance method
  const updateStudentMethod = (studentId, newMethod) => {
    setStudentAttendanceData(studentAttendanceData.map(student => 
      student.id === studentId 
        ? { ...student, method: newMethod, lastUpdated: new Date().toLocaleString() } 
        : student
    ));
    setEditingStudentId(null);
    setEditingMethod('');
  };
  
  // Function to edit student status
  const editStudentStatus = (studentId, statusType) => {
    setStudentAttendanceData(studentAttendanceData.map(student => {
      if (student.id === studentId) {
        // Reset all statuses
        const updatedStatus = { present: false, absent: false, late: false };
        // Set the selected status to true
        updatedStatus[statusType] = true;
        
        return { 
          ...student, 
          status: updatedStatus,
          lastUpdated: new Date().toLocaleString()
        };
      }
      return student;
    }));
  };
  
  // Function to generate unique avatar for student (different from teacher)
  const getStudentAvatar = (studentName) => {
    // Use a different seed for students to ensure different avatars
    const seed = `${studentName}_student`;
    return `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&backgroundColor=4f46e5&radius=50`;
  };
  
  // Function to handle edit button click
  const handleEditClick = (studentId, currentMethod) => {
    setEditingStudentId(studentId);
    setEditingMethod(currentMethod);
  };
  
  // Function to cancel editing
  const cancelEdit = () => {
    setEditingStudentId(null);
    setEditingMethod('');
  };
  
  // Function to save edited method
  const saveEditedMethod = (studentId) => {
    updateStudentMethod(studentId, editingMethod);
  };
  
  // Function to handle form input changes
  const handleNewStudentChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };
  
  // Function to close the add student form
  const closeAddStudentForm = () => {
    setShowAddStudentForm(false);
    setNewStudent({ name: '', class: 'Class 10-A', roll: '', method: 'Manual' });
  };
  
  // Function to delete a student
  const deleteStudent = (studentId) => {
    setStudentAttendanceData(studentAttendanceData.filter(student => student.id !== studentId));
  };
  
  // Function to reset all attendance
  const resetAttendance = () => {
    setStudentAttendanceData(studentAttendanceData.map(student => ({
      ...student,
      status: { present: false, absent: false, late: false },
      lastUpdated: 'N/A'
    })));
  };
  
  // Function to mark all present
  const markAllPresent = () => {
    setStudentAttendanceData(studentAttendanceData.map(student => ({
      ...student,
      status: { present: true, absent: false, late: false },
      lastUpdated: new Date().toLocaleString()
    })));
  };

  // Sync profileData with teacherData when teacherData changes
  useEffect(() => {
    setProfileData({
      name: teacherData.name,
      email: profileData.email, // Keep email as it's not in teacherData
      subject: teacherData.subject,
      school: teacherData.school
    });
  }, [teacherData]);

  // Calculate attendance counts
  const presentCount = studentAttendanceData.filter(student => student.status.present).length;
  const absentCount = studentAttendanceData.filter(student => student.status.absent).length;
  const lateCount = studentAttendanceData.filter(student => student.status.late).length;
  
  // Generate mock weekly attendance data for 40 students
  const weeklyAttendanceData = [
    { day: 'Mon', present: 32, absent: 3, late: 5 },
    { day: 'Tue', present: 30, absent: 4, late: 6 },
    { day: 'Wed', present: 35, absent: 2, late: 3 },
    { day: 'Thu', present: 33, absent: 3, late: 4 },
    { day: 'Fri', present: 36, absent: 1, late: 3 },
  ];

  const summaryStats = [
    { label: 'Total Students', value: studentAttendanceData.length, icon: Users, color: 'from-blue-500 to-blue-600' },
    { label: 'Present Today', value: presentCount, icon: UserCheck, color: 'from-green-500 to-green-600' },
    { label: 'Absent Today', value: absentCount, icon: UserX, color: 'from-red-500 to-red-600' },
    { label: 'Late Today', value: lateCount, icon: Clock, color: 'from-yellow-500 to-orange-500' },
  ];

  return (
    <div className="flex min-h-screen max-h-screen overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
      <ParticleBackground />
      
      {/* Sidebar */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-56 bg-white shadow-lg flex flex-col h-screen"
      >
        <div className="p-3 border-b border-gray-100">
          <div className="flex items-center gap-1.5">
            <div className="relative">
              <img 
                src={teacherAvatar} 
                alt="Teacher Avatar" 
                className="w-8 h-8 rounded-md object-cover shadow-sm"
              />
              <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border border-white"></div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1">
                <span className="text-xs font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent truncate block">
                  {teacherData.name}
                </span>
              </div>
              <p className="text-xs text-gray-500 truncate">{teacherData.subject} Teacher</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-2.5 pt-0 space-y-0.5 overflow-y-auto">
          {[
            { id: 'home', icon: Home, label: 'Dashboard Home' },
            { id: 'classes', icon: BookOpen, label: 'Classes' },
            { id: 'attendance', icon: UserCheck, label: 'Attendance' },
            { id: 'reports', icon: FileText, label: 'Reports' },
            { id: 'alerts', icon: Bell, label: 'Alerts' },
            { id: 'settings', icon: Settings, label: 'Settings' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-2 px-2.5 py-2 rounded-md transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md shadow-blue-500/20'
                  : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              <tab.icon className="w-3.5 h-3.5" />
              <span className="font-medium text-xs">{tab.label}</span>
              {tab.id === 'alerts' && (
                <span className="ml-auto bg-red-500 text-white text-xs font-bold rounded-full w-3.5 h-3.5 flex items-center justify-center">
                  3
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="p-2.5 border-t border-gray-100 space-y-1">
          <button 
            onClick={() => setShowAvatarModal(true)}
            className="w-full flex items-center gap-2 px-2.5 py-2 rounded-md text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all"
          >
            <User className="w-3.5 h-3.5" />
            <span className="font-medium text-xs">Change Avatar</span>
          </button>
          <button 
            onClick={() => console.log('Logout clicked')}
            className="w-full flex items-center gap-2 px-2.5 py-2 rounded-md text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="font-medium text-xs">Logout</span>
          </button>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto overscroll-contain flex flex-col h-screen">
        {/* Ultra Modern Header */}
        <div className="flex-shrink-0">
          <UltraModernHeader 
            dashboardTitle="Teacher Dashboard"
            userType="Teacher"
            userName={teacherData.name}
            userRole={`${teacherData.subject} Teacher`}
            onLogout={() => console.log('Logout clicked')}
          />
        </div>

        {/* Dashboard Content */}
        <div className="p-6 flex-grow overflow-y-auto overscroll-contain">
          {/* Home Tab */}
          {activeTab === 'home' && (
            <div>
              {/* Welcome Banner */}
              <div className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 rounded-lg p-5 mb-5 shadow-md backdrop-blur-sm border border-white/20 relative overflow-hidden">
                <div className="relative z-10 flex items-center gap-3">
                  <div className="relative">
                    <img 
                      src={teacherAvatar} 
                      alt="Teacher Avatar" 
                      className="w-14 h-14 rounded-full object-cover shadow-md border-2 border-white/30 cursor-pointer"
                      onClick={() => setShowAvatarModal(true)}
                    />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white mb-1.5">
                      Welcome back, {teacherData.name.split(' ')[1]}! 👋
                    </h2>
                    <p className="text-blue-100 text-xs mb-1">
                      {teacherData.subject} Teacher at {teacherData.school}
                    </p>
                    <p className="text-blue-100 text-xs">
                      You have {teacherData.classes.length} classes today
                    </p>
                  </div>
                </div>
              </div>

              {/* Summary Stats */}
              <div className="flex gap-3 mb-7">
                <div className="flex-grow bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-4 shadow-sm border border-blue-200/30 backdrop-blur-sm text-white relative overflow-hidden">
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-300/10 rounded-full"></div>
                  <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-blue-700/10 rounded-full"></div>
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <p className="text-blue-100 text-xs">Total Students</p>
                      <p className="text-xl font-bold mt-1">{studentAttendanceData.length}</p>
                    </div>
                    <Users className="w-8 h-8 text-blue-200 relative z-10" />
                  </div>
                </div>
                
                <div className="flex-grow bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-4 shadow-sm border border-green-200/30 backdrop-blur-sm text-white relative overflow-hidden">
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-green-300/10 rounded-full"></div>
                  <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-green-700/10 rounded-full"></div>
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <p className="text-green-100 text-xs">Present Today</p>
                      <p className="text-xl font-bold mt-1">{presentCount}</p>
                    </div>
                    <UserCheck className="w-8 h-8 text-green-200 relative z-10" />
                  </div>
                </div>
                
                <div className="flex-grow bg-gradient-to-br from-red-500 to-red-600 rounded-lg p-4 shadow-sm border border-red-200/30 backdrop-blur-sm text-white relative overflow-hidden">
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-red-300/10 rounded-full"></div>
                  <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-red-700/10 rounded-full"></div>
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <p className="text-red-100 text-xs">Absent Today</p>
                      <p className="text-xl font-bold mt-1">{absentCount}</p>
                    </div>
                    <UserX className="w-8 h-8 text-red-200 relative z-10" />
                  </div>
                </div>
                
                <div className="flex-grow bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg p-4 shadow-sm border border-yellow-200/30 backdrop-blur-sm text-white relative overflow-hidden">
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-300/10 rounded-full"></div>
                  <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-yellow-700/10 rounded-full"></div>
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <p className="text-yellow-100 text-xs">Late Arrivals</p>
                      <p className="text-xl font-bold mt-1">{lateCount}</p>
                    </div>
                    <Clock className="w-8 h-8 text-yellow-200 relative z-10" />
                  </div>
                </div>
              </div>

              {/* Charts and Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Attendance Chart */}
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 shadow-sm border border-blue-200/30 backdrop-blur-sm">
                  <h3 className="text-sm font-bold text-white mb-3">Weekly Attendance</h3>
                  <div className="h-40 bg-white/20 rounded-lg p-2 backdrop-blur-sm border border-white/30">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={weeklyAttendanceData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.3)" />
                        <XAxis 
                          dataKey="day" 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fill: 'rgba(255,255,255,0.8)', fontSize: 9 }}
                        />
                        <YAxis 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fill: 'rgba(255,255,255,0.8)', fontSize: 9 }}
                        />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'rgba(255,255,255,0.9)', 
                            borderRadius: '12px',
                            border: '1px solid rgba(255,255,255,0.3)',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                            backdropFilter: 'blur(10px)',
                            fontSize: '12px'
                          }}
                          labelStyle={{ color: '#ef4444' }}
                        />
                        <Legend />
                        <Line 
                          type="monotone" 
                          dataKey="present" 
                          name="Present" 
                          stroke="#8b5cf6" 
                          strokeWidth={2}
                          dot={{ r: 4, fill: '#8b5cf6', strokeWidth: 2, stroke: '#fff' }}
                          activeDot={{ r: 6, fill: '#8b5cf6', strokeWidth: 2, stroke: '#fff' }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="absent" 
                          name="Absent" 
                          stroke="#f59e0b" 
                          strokeWidth={2}
                          dot={{ r: 4, fill: '#f59e0b', strokeWidth: 2, stroke: '#fff' }}
                          activeDot={{ r: 6, fill: '#f59e0b', strokeWidth: 2, stroke: '#fff' }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Classes Tab */}
          {activeTab === 'classes' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-sm font-bold text-gray-900">Class Management</h2>
                <button className="flex items-center gap-1 px-2 py-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded hover:from-blue-600 hover:to-indigo-700 transition-all shadow-sm hover:shadow text-xs">
                  <Plus className="w-2.5 h-2.5" />
                  Add Class
                </button>
              </div>
              
              <div className="flex overflow-x-auto gap-6 pb-4">
                {teacherData.classes.map((className, index) => (
                  <div key={index} className="flex-shrink-0">
                    <ClassroomCard 
                      title={teacherData.subject}
                      subtitle={className}
                      teacher={teacherData.name}
                      theme={index % 3 === 0 ? 'blue' : index % 3 === 1 ? 'green' : 'purple'}
                      onClick={() => console.log(`${className} clicked`)}
                      onMenuClick={() => console.log(`${className} menu clicked`)}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Attendance Tab */}
          {activeTab === 'attendance' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-sm font-bold text-gray-900">Attendance Management</h2>
                <div className="flex gap-3">
                  <button 
                    onClick={() => setShowAddStudentForm(true)}
                    className="flex items-center gap-1 px-2 py-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded hover:from-blue-600 hover:to-indigo-700 transition-all shadow-sm hover:shadow text-xs"
                  >
                    <Plus className="w-2.5 h-2.5" />
                    Add Student
                  </button>
                  <button className="flex items-center gap-1 px-2 py-0.5 bg-gradient-to-r from-gray-100 to-gray-200 border border-gray-200 text-gray-700 rounded hover:from-gray-200 hover:to-gray-300 transition-all shadow-sm hover:shadow text-xs">
                    <Filter className="w-2.5 h-2.5" />
                    Filter
                  </button>
                  <button className="flex items-center gap-1 px-2 py-0.5 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded hover:from-purple-600 hover:to-pink-700 transition-all shadow-sm hover:shadow text-xs">
                    <Download className="w-2.5 h-2.5" />
                    Export Report
                  </button>
                </div>
              </div>

              {/* Attendance Table */}
              <div className="bg-white rounded-md p-2.5 shadow-sm border border-gray-100">
                {/* Bulk Actions */}
                <div className="flex gap-2 mb-3">
                  <button 
                    onClick={markAllPresent}
                    className="px-2 py-1 bg-gradient-to-r from-green-500 to-green-600 text-white rounded text-xs hover:from-green-600 hover:to-green-700 transition-all"
                  >
                    Mark All Present
                  </button>
                  <button 
                    onClick={resetAttendance}
                    className="px-2 py-1 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded text-xs hover:from-gray-600 hover:to-gray-700 transition-all"
                  >
                    Reset Attendance
                  </button>
                </div>
                <div className="overflow-hidden">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-1 px-1.5 font-medium text-gray-500 text-xs">Student</th>
                        <th className="text-left py-1 px-1.5 font-medium text-gray-500 text-xs">Class</th>
                        <th className="text-left py-1 px-1.5 font-medium text-gray-500 text-xs">Roll</th>
                        <th className="text-left py-1 px-1.5 font-medium text-gray-500 text-xs">Status</th>
                        <th className="text-left py-1 px-1.5 font-medium text-gray-500 text-xs">Method</th>
                        <th className="text-left py-1 px-1.5 font-medium text-gray-500 text-xs">View</th>
                      </tr>
                    </thead>
                    <tbody>
                      {studentAttendanceData.map((student) => (
                        <tr key={student.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-1 px-1.5">
                            <div className="flex items-center gap-2">
                              <div className="relative">
                                <img 
                                  src={getStudentAvatar(student.name)}
                                  alt="Student Avatar" 
                                  className="w-8 h-8 rounded-full object-cover shadow-sm border-2 border-indigo-200"
                                />
                                <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-400 rounded-full border border-white"></div>
                              </div>
                              <span className="font-medium text-gray-900 text-xs">{student.name}</span>
                            </div>
                          </td>
                          <td className="py-1 px-1.5 text-gray-600 text-xs">{student.class}</td>
                          <td className="py-1 px-1.5 text-gray-600 text-xs">{student.roll}</td>
                          <td className="py-1 px-1.5">
                            <div className="flex gap-1">
                              <button 
                                onClick={() => editStudentStatus(student.id, 'present')}
                                className={`px-0.5 py-0 rounded-full text-[10px] font-medium ${student.status.present ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                              >
                                Present
                              </button>
                              <button 
                                onClick={() => editStudentStatus(student.id, 'absent')}
                                className={`px-0.5 py-0 rounded-full text-[10px] font-medium ${student.status.absent ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                              >
                                Absent
                              </button>
                              <button 
                                onClick={() => editStudentStatus(student.id, 'late')}
                                className={`px-0.5 py-0 rounded-full text-[10px] font-medium ${student.status.late ? 'bg-yellow-500 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                              >
                                Late
                              </button>
                            </div>
                          </td>
                          <td className="py-1 px-1.5 text-gray-600 text-xs">
                            <span>{student.method}</span>
                          </td>
                          <td className="py-1 px-1.5">
                            <div className="flex items-center gap-0.5">
                              <button 
                                className="p-0.5 text-gray-500 hover:text-blue-600 hover:bg-gray-100 rounded transition-colors"
                                onClick={() => {
                                  setSelectedStudent(student);
                                  setShowStudentAttendanceModal(true);
                                }}
                              >
                                <Eye className="w-2.5 h-2.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Reports Tab */}
          {activeTab === 'reports' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-sm font-bold text-gray-900">Attendance Reports & Analytics</h2>
                <div className="flex gap-3">
                  <button 
                    onClick={() => console.log('Filter clicked')}
                    className="flex items-center gap-1 px-2 py-0.5 bg-gradient-to-r from-gray-100 to-gray-200 border border-gray-200 text-gray-700 rounded hover:from-gray-200 hover:to-gray-300 transition-all shadow-sm hover:shadow text-xs"
                  >
                    <Filter className="w-2.5 h-2.5" />
                    Filter Data
                  </button>
                  <button 
                    onClick={() => console.log('Export Report clicked')}
                    className="flex items-center gap-1 px-2 py-0.5 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded hover:from-purple-600 hover:to-pink-700 transition-all shadow-sm hover:shadow text-xs"
                  >
                    <Download className="w-2.5 h-2.5" />
                    Export Report
                  </button>
                </div>
              </div>
              
              {/* Summary Stats */}
              <div className="flex gap-3 mb-7">
                <div className="flex-grow bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-4 shadow-sm border border-blue-200/30 backdrop-blur-sm text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-300/10 rounded-full -translate-y-12 translate-x-12"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-blue-700/10 rounded-full translate-y-10 -translate-x-10"></div>
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <p className="text-blue-100 text-xs">Total Enrolled Students</p>
                      <p className="text-xl font-bold mt-1">{studentAttendanceData.length}</p>
                    </div>
                    <Users className="w-8 h-8 text-blue-200 relative z-10" />
                  </div>
                </div>
                
                <div className="flex-grow bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-4 shadow-sm border border-green-200/30 backdrop-blur-sm text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-green-300/10 rounded-full -translate-y-12 translate-x-12"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-green-700/10 rounded-full translate-y-10 -translate-x-10"></div>
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <p className="text-green-100 text-xs">Present Today</p>
                      <p className="text-xl font-bold mt-1">{presentCount}</p>
                    </div>
                    <UserCheck className="w-8 h-8 text-green-200 relative z-10" />
                  </div>
                </div>
                
                <div className="flex-grow bg-gradient-to-br from-red-500 to-red-600 rounded-lg p-4 shadow-sm border border-red-200/30 backdrop-blur-sm text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-red-300/10 rounded-full -translate-y-12 translate-x-12"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-red-700/10 rounded-full translate-y-10 -translate-x-10"></div>
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <p className="text-red-100 text-xs">Absent Today</p>
                      <p className="text-xl font-bold mt-1">{absentCount}</p>
                    </div>
                    <UserX className="w-8 h-8 text-red-200 relative z-10" />
                  </div>
                </div>
                
                <div className="flex-grow bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg p-4 shadow-sm border border-yellow-200/30 backdrop-blur-sm text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-300/10 rounded-full -translate-y-12 translate-x-12"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-yellow-700/10 rounded-full translate-y-10 -translate-x-10"></div>
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <p className="text-yellow-100 text-xs">Late Arrivals</p>
                      <p className="text-xl font-bold mt-1">{lateCount}</p>
                    </div>
                    <Clock className="w-8 h-8 text-yellow-200 relative z-10" />
                  </div>
                </div>
              </div>
              
              {/* Charts Section */}
              <div className="flex gap-5 mb-6">
                {/* Weekly Attendance Chart */}
                <div className="flex-grow bg-white rounded-md p-4 shadow-sm border border-gray-100">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-sm font-bold text-gray-900">Weekly Attendance Trend Analysis</h3>
                    <select 
                      className="text-xs border border-gray-300 rounded-md px-2 py-1"
                      onChange={(e) => console.log('Time range changed:', e.target.value)}
                    >
                      <option>Last 7 Days</option>
                      <option>Last 30 Days</option>
                      <option>Last 90 Days</option>
                    </select>
                  </div>
                  <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={weeklyAttendanceData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                        <XAxis 
                          dataKey="day" 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fill: '#666', fontSize: 8 }}
                        />
                        <YAxis 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fill: '#666', fontSize: 8 }}
                        />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'white', 
                            borderRadius: '6px',
                            border: '1px solid #eee',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                            fontSize: '8px',
                            color: '#333'
                          }}
                        />
                        <Legend />
                        <Line 
                          type="monotone" 
                          dataKey="present" 
                          name="Present Students" 
                          stroke="#10b981" 
                          strokeWidth={1.5}
                          dot={{ r: 3, fill: '#10b981' }}
                          activeDot={{ r: 5, fill: '#10b981' }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="absent" 
                          name="Absent Students" 
                          stroke="#ef4444" 
                          strokeWidth={1.5}
                          dot={{ r: 3, fill: '#ef4444' }}
                          activeDot={{ r: 5, fill: '#ef4444' }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="late" 
                          name="Late Arrivals" 
                          stroke="#f59e0b" 
                          strokeWidth={1.5}
                          dot={{ r: 3, fill: '#f59e0b' }}
                          activeDot={{ r: 5, fill: '#f59e0b' }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
              
              {/* Detailed Report Table */}
              <div className="bg-white rounded-md p-3 shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-sm font-bold text-gray-900">Detailed Class-wise Attendance Report</h3>
                  <div className="flex gap-1.5">
                    <button 
                      onClick={() => console.log('Print clicked')}
                      className="flex items-center gap-1 px-2.5 py-1 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-md hover:from-gray-600 hover:to-gray-700 transition-all shadow-sm hover:shadow text-xs"
                    >
                      <Printer className="w-3 h-3" />
                      Print Report
                    </button>
                    <button 
                      onClick={() => console.log('Export CSV clicked')}
                      className="flex items-center gap-1 px-2.5 py-1 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-md hover:from-purple-600 hover:to-pink-700 transition-all shadow-sm hover:shadow text-xs"
                    >
                      <Download className="w-3 h-3" />
                      Export to CSV
                    </button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-1.5 px-2 font-medium text-gray-500">Class Name</th>
                        <th className="text-left py-1.5 px-2 font-medium text-gray-500">Total Students</th>
                        <th className="text-left py-1.5 px-2 font-medium text-gray-500">Present Count</th>
                        <th className="text-left py-1.5 px-2 font-medium text-gray-500">Absent Count</th>
                        <th className="text-left py-1.5 px-2 font-medium text-gray-500">Late Arrivals</th>
                        <th className="text-left py-1.5 px-2 font-medium text-gray-500">Attendance Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-1.5 px-2 font-medium text-gray-900">Class 10-A</td>
                        <td className="py-1.5 px-2 text-gray-600">4</td>
                        <td className="py-1.5 px-2 text-green-600 font-medium">2</td>
                        <td className="py-1.5 px-2 text-red-600 font-medium">1</td>
                        <td className="py-1.5 px-2 text-yellow-600 font-medium">1</td>
                        <td className="py-1.5 px-2 text-gray-600">75%</td>
                      </tr>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-1.5 px-2 font-medium text-gray-900">Class 11-B</td>
                        <td className="py-1.5 px-2 text-gray-600">2</td>
                        <td className="py-1.5 px-2 text-green-600 font-medium">1</td>
                        <td className="py-1.5 px-2 text-red-600 font-medium">1</td>
                        <td className="py-1.5 px-2 text-yellow-600 font-medium">0</td>
                        <td className="py-1.5 px-2 text-gray-600">50%</td>
                      </tr>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-1.5 px-2 font-medium text-gray-900">Class 12-C</td>
                        <td className="py-1.5 px-2 text-gray-600">2</td>
                        <td className="py-1.5 px-2 text-green-600 font-medium">1</td>
                        <td className="py-1.5 px-2 text-red-600 font-medium">0</td>
                        <td className="py-1.5 px-2 text-yellow-600 font-medium">1</td>
                        <td className="py-1.5 px-2 text-gray-600">75%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              {/* Additional Reports Section */}
              <div className="mt-7 flex gap-5">
                <div className="flex-grow bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg p-4 shadow-sm border border-indigo-200/30 backdrop-blur-sm text-white">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-base">Monthly Attendance Report</h3>
                    <Calendar className="w-5 h-5 text-indigo-200" />
                  </div>
                  <p className="text-indigo-100 text-xs mb-3">Comprehensive attendance analysis for the current month</p>
                  <button 
                    onClick={() => console.log('View Monthly Report clicked')}
                    className="px-2.5 py-1 bg-white text-indigo-600 rounded-md hover:bg-gray-100 transition-all text-xs font-medium"
                  >
                    View Detailed Report
                  </button>
                </div>
                
                <div className="flex-grow bg-gradient-to-br from-cyan-500 to-teal-600 rounded-lg p-4 shadow-sm border border-cyan-200/30 backdrop-blur-sm text-white">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-base">Class Performance Comparison</h3>
                    <TrendingUp className="w-5 h-5 text-cyan-200" />
                  </div>
                  <p className="text-cyan-100 text-xs mb-3">Compare attendance performance across different classes</p>
                  <button 
                    onClick={() => console.log('View Class Performance clicked')}
                    className="px-2.5 py-1 bg-white text-cyan-600 rounded-md hover:bg-gray-100 transition-all text-xs font-medium"
                  >
                    Compare Performance
                  </button>
                </div>
                
                <div className="flex-grow bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg p-4 shadow-sm border border-amber-200/30 backdrop-blur-sm text-white">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-base">Individual Student Records</h3>
                    <Users className="w-5 h-5 text-amber-200" />
                  </div>
                  <p className="text-amber-100 text-xs mb-3">Detailed attendance history for each student</p>
                  <button 
                    onClick={() => console.log('View Student Details clicked')}
                    className="px-2.5 py-1 bg-white text-amber-600 rounded-md hover:bg-gray-100 transition-all text-xs font-medium"
                  >
                    View Student Records
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Alerts Tab */}
          {activeTab === 'alerts' && (
            <div style={{padding: '18px'}}>
              <h2 style={{fontSize: '14px', fontWeight: 'bold', marginBottom: '6px'}}>Alert Management & Notifications</h2>
              
              {/* Alert Summary Cards */}
              <div style={{display: 'flex', gap: '13px', marginBottom: '16px'}}>
                <div style={{background: 'linear-gradient(to bottom right, #f87171, #ef4444)', padding: '13px', borderRadius: '6px', border: '1px solid rgba(248, 113, 113, 0.3)', textAlign: 'center', flex: '1', position: 'relative', overflow: 'hidden', color: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
                  <div style={{position: 'absolute', top: '-30px', right: '-30px', width: '100px', height: '100px', backgroundColor: 'rgba(254, 202, 202, 0.15)', borderRadius: '50%', zIndex: '0'}}></div>
                  <div style={{position: 'absolute', bottom: '-20px', left: '-20px', width: '80px', height: '80px', backgroundColor: 'rgba(252, 165, 165, 0.2)', borderRadius: '50%', zIndex: '0'}}></div>
                  <div style={{position: 'relative', zIndex: '1'}}>
                    <h3 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '3px'}}>3</h3>
                    <p style={{fontSize: '10px', opacity: '0.9'}}>Critical Alerts</p>
                  </div>
                </div>
                
                <div style={{background: 'linear-gradient(to bottom right, #fbbf24, #f59e0b)', padding: '13px', borderRadius: '6px', border: '1px solid rgba(251, 191, 36, 0.3)', textAlign: 'center', flex: '1', position: 'relative', overflow: 'hidden', color: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
                  <div style={{position: 'absolute', top: '-30px', right: '-30px', width: '100px', height: '100px', backgroundColor: 'rgba(251, 191, 36, 0.15)', borderRadius: '50%', zIndex: '0'}}></div>
                  <div style={{position: 'absolute', bottom: '-20px', left: '-20px', width: '80px', height: '80px', backgroundColor: 'rgba(245, 158, 11, 0.2)', borderRadius: '50%', zIndex: '0'}}></div>
                  <div style={{position: 'relative', zIndex: '1'}}>
                    <h3 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '3px'}}>7</h3>
                    <p style={{fontSize: '10px', opacity: '0.9'}}>Warnings</p>
                  </div>
                </div>
                
                <div style={{background: 'linear-gradient(to bottom right, #60a5fa, #3b82f6)', padding: '13px', borderRadius: '6px', border: '1px solid rgba(96, 165, 250, 0.3)', textAlign: 'center', flex: '1', position: 'relative', overflow: 'hidden', color: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
                  <div style={{position: 'absolute', top: '-30px', right: '-30px', width: '100px', height: '100px', backgroundColor: 'rgba(191, 219, 254, 0.15)', borderRadius: '50%', zIndex: '0'}}></div>
                  <div style={{position: 'absolute', bottom: '-20px', left: '-20px', width: '80px', height: '80px', backgroundColor: 'rgba(96, 165, 250, 0.2)', borderRadius: '50%', zIndex: '0'}}></div>
                  <div style={{position: 'relative', zIndex: '1'}}>
                    <h3 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '3px'}}>12</h3>
                    <p style={{fontSize: '10px', opacity: '0.9'}}>Informational Notices</p>
                  </div>
                </div>
                
                <div style={{background: 'linear-gradient(to bottom right, #a78bfa, #8b5cf6)', padding: '13px', borderRadius: '6px', border: '1px solid rgba(167, 139, 250, 0.3)', textAlign: 'center', flex: '1', position: 'relative', overflow: 'hidden', color: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
                  <div style={{position: 'absolute', top: '-30px', right: '-30px', width: '100px', height: '100px', backgroundColor: 'rgba(221, 214, 254, 0.15)', borderRadius: '50%', zIndex: '0'}}></div>
                  <div style={{position: 'absolute', bottom: '-20px', left: '-20px', width: '80px', height: '80px', backgroundColor: 'rgba(192, 132, 252, 0.2)', borderRadius: '50%', zIndex: '0'}}></div>
                  <div style={{position: 'relative', zIndex: '1'}}>
                    <h3 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '3px'}}>5</h3>
                    <p style={{fontSize: '10px', opacity: '0.9'}}>General Info</p>
                  </div>
                </div>
              </div>
              
              {/* Alerts List */}
              <div style={{backgroundColor: 'white', padding: '14px', borderRadius: '6px', border: '1px solid #e5e7eb'}}>
                <h3 style={{fontSize: '12px', fontWeight: 'bold', marginBottom: '12px'}}>Recent Alerts & Notifications</h3>
                <div style={{display: 'flex', flexDirection: 'column', gap: '13px'}}>
                  <div style={{display: 'flex', alignItems: 'flex-start', gap: '8px', padding: '13px', backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '6px'}}>
                    <div style={{color: '#dc2626', marginTop: '3px'}}>⚠️</div>
                    <div style={{flex: 1}}>
                      <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '3px'}}>
                        <h4 style={{fontWeight: '600', color: '#111827', fontSize: '14px'}}>High Absenteeism Detected</h4>
                        <span style={{fontSize: '8px', color: '#6b7280'}}>2 hours ago</span>
                      </div>
                      <p style={{fontSize: '10px', color: '#6b7280', marginBottom: '8px'}}>Multiple students in Class 10-A have been absent for more than 3 consecutive days. Immediate attention required.</p>
                      <div style={{display: 'flex', gap: '8px', marginBottom: '8px'}}>
                        <span style={{backgroundColor: '#fee2e2', color: '#b91c1c', padding: '2px 6px', borderRadius: '9999px', fontSize: '8px'}}>Critical</span>
                        <span style={{fontSize: '8px', color: '#6b7280'}}>Class 10-A</span>
                      </div>
                      <div style={{display: 'flex', gap: '8px'}}>
                        <button style={{padding: '4px 10px', backgroundColor: '#dc2626', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: '500', fontSize: '10px'}}>Take Action</button>
                        <button style={{padding: '4px 10px', backgroundColor: '#ffffff', color: '#dc2626', border: '1px solid #dc2626', borderRadius: '4px', cursor: 'pointer', fontWeight: '500', fontSize: '10px'}}>View Details</button>
                      </div>
                    </div>
                    <button style={{color: '#9ca3af', cursor: 'pointer'}}>✕</button>
                  </div>
                  
                  <div style={{display: 'flex', alignItems: 'flex-start', gap: '8px', padding: '13px', backgroundColor: '#fffbeb', border: '1px solid #fde68a', borderRadius: '6px'}}>
                    <div style={{color: '#d97706', marginTop: '3px'}}>⚠️</div>
                    <div style={{flex: 1}}>
                      <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '3px'}}>
                        <h4 style={{fontWeight: '600', color: '#111827', fontSize: '14px'}}>Late Arrival Trend</h4>
                        <span style={{fontSize: '8px', color: '#6b7280'}}>1 day ago</span>
                      </div>
                      <p style={{fontSize: '10px', color: '#6b7280', marginBottom: '8px'}}>Increased number of late arrivals detected in Class 11-B this week compared to previous weeks.</p>
                      <div style={{display: 'flex', gap: '8px', marginBottom: '8px'}}>
                        <span style={{backgroundColor: '#fef3c7', color: '#d97706', padding: '2px 6px', borderRadius: '9999px', fontSize: '8px'}}>Warning</span>
                        <span style={{fontSize: '8px', color: '#6b7280'}}>Class 11-B</span>
                      </div>
                      <div style={{display: 'flex', gap: '8px'}}>
                        <button style={{padding: '4px 10px', backgroundColor: '#d97706', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: '500', fontSize: '10px'}}>Review Policy</button>
                        <button style={{padding: '4px 10px', backgroundColor: '#ffffff', color: '#d97706', border: '1px solid #d97706', borderRadius: '4px', cursor: 'pointer', fontWeight: '500', fontSize: '10px'}}>View Details</button>
                      </div>
                    </div>
                    <button style={{color: '#9ca3af', cursor: 'pointer'}}>✕</button>
                  </div>
                  
                  <div style={{display: 'flex', alignItems: 'flex-start', gap: '8px', padding: '13px', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '6px'}}>
                    <div style={{color: '#2563eb', marginTop: '3px'}}>🔔</div>
                    <div style={{flex: 1}}>
                      <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '3px'}}>
                        <h4 style={{fontWeight: '600', color: '#111827', fontSize: '14px'}}>System Maintenance Scheduled</h4>
                        <span style={{fontSize: '8px', color: '#6b7280'}}>3 days ago</span>
                      </div>
                      <p style={{fontSize: '10px', color: '#6b7280', marginBottom: '8px'}}>Planned system maintenance on April 20, 2024 from 10:00 PM to 2:00 AM. Service may be temporarily unavailable.</p>
                      <div style={{display: 'flex', gap: '8px', marginBottom: '8px'}}>
                        <span style={{backgroundColor: '#dbeafe', color: '#1d4ed8', padding: '2px 6px', borderRadius: '9999px', fontSize: '8px'}}>Notice</span>
                        <span style={{fontSize: '8px', color: '#6b7280'}}>System Admin</span>
                      </div>
                      <div style={{display: 'flex', gap: '8px'}}>
                        <button style={{padding: '4px 10px', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: '500', fontSize: '10px'}}>Acknowledge</button>
                        <button style={{padding: '4px 10px', backgroundColor: '#ffffff', color: '#2563eb', border: '1px solid #2563eb', borderRadius: '4px', cursor: 'pointer', fontWeight: '500', fontSize: '10px'}}>More Info</button>
                      </div>
                    </div>
                    <button style={{color: '#9ca3af', cursor: 'pointer'}}>✕</button>
                  </div>
                </div>
                

              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div>
              <div className="flex justify-between items-center mb-5">
                <div>
                  <h2 className="text-xs font-bold text-gray-900">Account Settings</h2>
                  <p className="text-gray-600 text-[10px]">Manage your profile and account preferences</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {/* Profile Card */}
                <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-100 p-5">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="relative">
                      <img 
                        src={teacherAvatar} 
                        alt="Teacher Avatar" 
                        className="w-14 h-14 rounded-lg object-cover shadow-md border-3 border-blue-100"
                      />
                      <button 
                        onClick={() => setShowAvatarModal(true)}
                        className="absolute bottom-0 right-0 bg-blue-500 text-white p-1 rounded-full hover:bg-blue-600 transition-all shadow-md"
                      >
                        <Edit className="w-2.5 h-2.5" />
                      </button>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900">{teacherData.name}</h3>
                      <p className="text-gray-600 text-[10px]">{teacherData.subject} Teacher</p>
                      <button 
                        onClick={() => setShowAvatarModal(true)}
                        className="text-blue-600 hover:text-blue-700 text-[10px] font-medium mt-1"
                      >
                        Change Avatar
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <label className="block text-[10px] font-medium text-gray-700 mb-1.5">Full Name</label>
                      <input 
                        type="text" 
                        value={profileData.name}
                        onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                        className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-[10px]"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-[10px] font-medium text-gray-700 mb-1.5">Email Address</label>
                      <input 
                        type="email" 
                        value={profileData.email}
                        onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                        className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-[10px]"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-[10px] font-medium text-gray-700 mb-1.5">Subject</label>
                      <input 
                        type="text" 
                        value={profileData.subject}
                        onChange={(e) => setProfileData({...profileData, subject: e.target.value})}
                        className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-[10px]"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-[10px] font-medium text-gray-700 mb-1.5">School</label>
                      <input 
                        type="text" 
                        value={profileData.school}
                        onChange={(e) => setProfileData({...profileData, school: e.target.value})}
                        className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-[10px]"
                      />
                    </div>
                    
                    <div className="flex gap-2 pt-3">
                      <button 
                        onClick={() => {
                          setProfileData({
                            name: teacherData.name,
                            email: 'james.wilson@school.edu',
                            subject: teacherData.subject,
                            school: teacherData.school
                          });
                        }}
                        className="px-1.5 py-0.5 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-all text-[10px]"
                      >
                        Cancel
                      </button>
                      <button 
                        onClick={() => {
                          setTeacherData({
                            ...teacherData,
                            name: profileData.name,
                            subject: profileData.subject,
                            school: profileData.school
                          });
                          alert('Profile updated successfully!');
                        }}
                        className="px-1.5 py-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded hover:from-blue-600 hover:to-indigo-700 transition-all shadow-sm hover:shadow text-[10px]"
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Settings Navigation */}
                <div className="space-y-3">
                  <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5">
                    <h3 className="text-xs font-bold text-gray-900 mb-3">Settings</h3>
                    <div className="space-y-1.5">
                      <button 
                        onClick={() => console.log('Account settings clicked')}
                        className="w-full text-left px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded font-medium text-[10px]"
                      >
                        Account
                      </button>
                      <button 
                        onClick={() => console.log('Security settings clicked')}
                        className="w-full text-left px-1.5 py-0.5 text-gray-600 hover:bg-gray-50 rounded text-[10px]"
                      >
                        Security
                      </button>
                      <button 
                        onClick={() => console.log('Notifications settings clicked')}
                        className="w-full text-left px-1.5 py-0.5 text-gray-600 hover:bg-gray-50 rounded text-[10px]"
                      >
                        Notifications
                      </button>
                      <button 
                        onClick={() => console.log('Appearance settings clicked')}
                        className="w-full text-left px-1.5 py-0.5 text-gray-600 hover:bg-gray-50 rounded text-[10px]"
                      >
                        Appearance
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5">
                    <h3 className="text-xs font-bold text-gray-900 mb-3">Actions</h3>
                    <div className="space-y-2">
                      <button 
                        onClick={() => window.location.reload()}
                        className="w-full flex items-center gap-1 px-1.5 py-0.5 text-gray-600 hover:bg-gray-50 rounded text-[10px]"
                      >
                        <RefreshCw className="w-2 h-2" />
                        Refresh Settings
                      </button>
                      <button 
                        onClick={() => {
                          setProfileData({
                            name: 'Dr. James Wilson',
                            email: 'james.wilson@school.edu',
                            subject: 'Mathematics',
                            school: 'Greenwood High School'
                          });
                          setTeacherData({
                            name: 'Dr. James Wilson',
                            subject: 'Mathematics',
                            classes: ['Class 10-A', 'Class 11-B', 'Class 12-C'],
                            school: 'Greenwood High School'
                          });
                        }}
                        className="w-full flex items-center gap-1 px-1.5 py-0.5 text-gray-600 hover:bg-gray-50 rounded text-[10px]"
                      >
                        <Settings className="w-2 h-2" />
                        Reset Settings
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Avatar Modal */}
      {showAvatarModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">Change Avatar</h3>
              <button 
                onClick={() => setShowAvatarModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[{
              
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James'
              }, {
                
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
              }, {
                
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael'
              }, {
               
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma'
              }, {
                
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David'
              }, {
                
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia'
              }].map((person, index) => (
                <div 
                  key={index} 
                  className="cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => {
                    setTeacherAvatar(person.avatar);
                    setShowAvatarModal(false);
                  }}
                >
                  <img 
                    src={person.avatar} 
                    alt={`${person.name} Avatar`} 
                    className="w-16 h-16 rounded-full object-cover mx-auto"
                  />
                  <p className="text-xs text-center mt-2 text-gray-600">{person.name}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">Click on any avatar to select it</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Add Student Form Modal */}
      {showAddStudentForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">Add New Student</h3>
              <button 
                onClick={closeAddStudentForm}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Student Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={newStudent.name}
                  onChange={handleNewStudentChange}
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs"
                  placeholder="Enter student name"
                />
              </div>
              
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Class</label>
                <select 
                  name="class"
                  value={newStudent.class}
                  onChange={handleNewStudentChange}
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs"
                >
                  <option value="Class 10-A">Class 10-A</option>
                  <option value="Class 11-B">Class 11-B</option>
                  <option value="Class 12-C">Class 12-C</option>
                </select>
              </div>
              
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Roll Number</label>
                <input 
                  type="number" 
                  name="roll"
                  value={newStudent.roll}
                  onChange={handleNewStudentChange}
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs"
                  placeholder="Enter roll number"
                />
              </div>
              
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Attendance Method</label>
                <select 
                  name="method"
                  value={newStudent.method}
                  onChange={handleNewStudentChange}
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs"
                >
                  <option value="Manual">Manual</option>
                  <option value="RFID">RFID</option>
                  <option value="Face Recognition">Face Recognition</option>
                  <option value="QR Code">QR Code</option>
                  <option value="Biometric">Biometric</option>
                </select>
              </div>
              
              <div className="flex gap-3 pt-4">
                <button 
                  onClick={closeAddStudentForm}
                  className="flex-1 px-3 py-1.5 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-all text-xs"
                >
                  Cancel
                </button>
                <button 
                  onClick={addNewStudent}
                  className="flex-1 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded hover:from-blue-600 hover:to-indigo-700 transition-all shadow-sm hover:shadow text-xs"
                >
                  Add Student
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Student Weekly Attendance Modal */}
      {showStudentAttendanceModal && selectedStudent && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-base font-bold text-gray-900">Weekly Attendance for {selectedStudent.name}</h3>
              <button 
                onClick={() => setShowStudentAttendanceModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={getStudentAvatar(selectedStudent.name)}
                alt="Student Avatar" 
                className="w-12 h-12 rounded-full object-cover shadow-sm border-2 border-indigo-200"
              />
              <div>
                <h4 className="font-bold text-gray-900 text-sm">{selectedStudent.name}</h4>
                <p className="text-gray-600 text-xs">{selectedStudent.class} • Roll #{selectedStudent.roll}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h5 className="font-medium text-gray-900 text-sm mb-3">This Week's Attendance</h5>
                <div className="grid grid-cols-5 gap-2">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, index) => (
                    <div key={day} className="text-center">
                      <div className="text-[10px] text-gray-500 mb-1">{day}</div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto text-[10px] font-medium ${index === 0 ? 'bg-green-100 text-green-800' : index === 1 ? 'bg-green-100 text-green-800' : index === 2 ? 'bg-yellow-100 text-yellow-800' : index === 3 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {index === 0 ? 'P' : index === 1 ? 'P' : index === 2 ? 'L' : index === 3 ? 'P' : 'A'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-blue-600 text-xs mb-1">Attendance Rate</div>
                  <div className="text-xl font-bold text-blue-800">80%</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="text-green-600 text-xs mb-1">Present Days</div>
                  <div className="text-xl font-bold text-green-800">4</div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h5 className="font-medium text-gray-900 text-sm mb-3">Attendance History</h5>
                <div className="space-y-3">
                  {[
                    { date: 'Apr 10, 2024', status: 'Present', time: '09:15 AM' },
                    { date: 'Apr 9, 2024', status: 'Present', time: '09:05 AM' },
                    { date: 'Apr 8, 2024', status: 'Late', time: '09:25 AM' },
                    { date: 'Apr 7, 2024', status: 'Absent', time: '-' },
                    { date: 'Apr 6, 2024', status: 'Present', time: '09:10 AM' },
                  ].map((record, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                      <div>
                        <div className="font-medium text-gray-900 text-xs">{record.date}</div>
                        <div className="text-gray-500 text-[10px]">{record.time}</div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium 
                        ${record.status === 'Present' ? 'bg-green-100 text-green-800' : 
                          record.status === 'Late' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                        {record.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherDashboard;