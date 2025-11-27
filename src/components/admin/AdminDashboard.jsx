import React, { useState } from 'react';
import { Users, UserCheck, UserX, BookOpen, TrendingUp, FileText, Settings, LogOut, Home, Search, Filter, Download, Plus, Eye, Edit, Trash2, Printer, BarChart, PieChart, LineChart, Calendar, Clock, Shield, MapPin, AlertTriangle, CheckCircle, XCircle, RefreshCw, Bell, Menu, X, School, Activity, User, Book } from 'lucide-react';
import { BarChart as RechartsBarChart, Bar, LineChart as RechartsLineChart, Line, PieChart as RechartsPieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';
import UltraModernHeader from '../UltraModernHeader';

const AdminDashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedClass, setSelectedClass] = useState('All Classes');
  const [showAddTeacherModal, setShowAddTeacherModal] = useState(false);
  const [showAddStudentModal, setShowAddStudentModal] = useState(false);
  const [reportPeriod, setReportPeriod] = useState('weekly'); // weekly, monthly, yearly
  const [teacherAvatarPreview, setTeacherAvatarPreview] = useState(null);
  const [studentAvatarPreview, setStudentAvatarPreview] = useState(null);
  const [showAvatarOptions, setShowAvatarOptions] = useState(false);
  const [avatarType, setAvatarType] = useState(''); // 'teacher' or 'student'

  // Predefined avatars
  const predefinedAvatars = [
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Bob',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Diana',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Eve',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Frank',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Grace',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Henry'
  ];

  // School-specific data
  const schoolData = {
    name: 'Greenwood High School',
    location: 'New York, NY',
    principal: 'Dr. James Wilson',
    contact: 'info@greenwoodhs.edu',
    established: '1985',
    totalStudents: 350,
    totalTeachers: 15,
    currentAttendance: 92
  };

  // Teachers data for this school
  const teachers = [
    { id: 1, name: 'James Wilson', email: 'j.wilson@school.edu', subject: 'Mathematics', classes: ['10A', '11B', '12C'], students: 90, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James' },
    { id: 2, name: 'Sarah Johnson', email: 's.johnson@school.edu', subject: 'Science', classes: ['9A', '9B'], students: 65, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' },
    { id: 3, name: 'Michael Brown', email: 'm.brown@school.edu', subject: 'English', classes: ['8A', '8B', '7A', '7B'], students: 120, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael' },
    { id: 4, name: 'Emily Davis', email: 'e.davis@school.edu', subject: 'History', classes: ['6A', '6B'], students: 55, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily' },
  ];

  // Students data for this school
  const students = [
    { id: 1, name: 'Robert Chen', roll: '10A-15', class: '10A', attendance: 95, grade: 'A', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Robert' },
    { id: 2, name: 'Priya Patel', roll: '9B-22', class: '9B', attendance: 88, grade: 'B+', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya' },
    { id: 3, name: 'Alex Turner', roll: '11C-08', class: '11C', attendance: 92, grade: 'A-', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex' },
    { id: 4, name: 'Maria Garcia', roll: '8D-30', class: '8D', attendance: 87, grade: 'B', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria' },
    { id: 5, name: 'David Kim', roll: '10A-12', class: '10A', attendance: 91, grade: 'A-', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David' },
    { id: 6, name: 'Sophia Williams', roll: '9B-05', class: '9B', attendance: 93, grade: 'A', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia' },
  ];

  // Classes data for this school
  const classes = [
    { id: 1, name: '10A', teacher: 'James Wilson', students: 35, subject: 'Mathematics' },
    { id: 2, name: '9B', teacher: 'Sarah Johnson', students: 30, subject: 'Science' },
    { id: 3, name: '11C', teacher: 'James Wilson', students: 40, subject: 'Mathematics' },
    { id: 4, name: '8D', teacher: 'Emily Davis', students: 25, subject: 'History' },
    { id: 5, name: '7A', teacher: 'Michael Brown', students: 35, subject: 'English' },
    { id: 6, name: '6A', teacher: 'Emily Davis', students: 30, subject: 'History' },
  ];

  // Enhanced attendance data for different periods
  const weeklyAttendanceData = [
    { day: 'Mon', attendance: 92 },
    { day: 'Tue', attendance: 89 },
    { day: 'Wed', attendance: 91 },
    { day: 'Thu', attendance: 93 },
    { day: 'Fri', attendance: 90 },
  ];

  const monthlyAttendanceData = [
    { week: 'Week 1', attendance: 89 },
    { week: 'Week 2', attendance: 91 },
    { week: 'Week 3', attendance: 93 },
    { week: 'Week 4', attendance: 92 },
  ];

  const yearlyAttendanceData = [
    { month: 'Jan', attendance: 89 },
    { month: 'Feb', attendance: 91 },
    { month: 'Mar', attendance: 93 },
    { month: 'Apr', attendance: 92 },
    { month: 'May', attendance: 94 },
    { month: 'Jun', attendance: 90 },
    { month: 'Jul', attendance: 91 },
    { month: 'Aug', attendance: 93 },
    { month: 'Sep', attendance: 92 },
    { month: 'Oct', attendance: 90 },
    { month: 'Nov', attendance: 91 },
    { month: 'Dec', attendance: 92 },
  ];

  const alerts = [
    { id: 1, type: 'lowAttendance', message: 'Overall attendance dropped below 90%', time: '2 hours ago', severity: 'high', status: 'new' },
    { id: 2, type: 'device', message: 'RFID readers malfunctioning', time: '5 hours ago', severity: 'medium', status: 'acknowledged' },
    { id: 3, type: 'safety', message: 'Unauthorized access attempt', time: '1 day ago', severity: 'critical', status: 'resolved' },
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'bg-red-50 border-red-200 text-red-800';
      case 'high': return 'bg-orange-50 border-orange-200 text-orange-800';
      case 'medium': return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      default: return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  const getSeverityColorSolid = (severity) => {
    switch (severity) {
      case 'critical': return 'bg-red-500 text-white';
      case 'high': return 'bg-orange-500 text-white';
      case 'medium': return 'bg-yellow-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-red-100 text-red-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getAlertIcon = (type) => {
    switch (type) {
      case 'lowAttendance': return <UserX className="w-5 h-5" />;
      case 'device': return <Activity className="w-5 h-5" />;
      case 'safety': return <Shield className="w-5 h-5" />;
      default: return <Bell className="w-5 h-5" />;
    }
  };

  const handleAddTeacher = () => {
    // In a real app, this would make an API call to add a teacher
    console.log('Adding new teacher with avatar:', teacherAvatarPreview);
    setShowAddTeacherModal(false);
    setTeacherAvatarPreview(null);
  };

  const handleAddStudent = () => {
    // In a real app, this would make an API call to add a student
    console.log('Adding new student with avatar:', studentAvatarPreview);
    setShowAddStudentModal(false);
    setStudentAvatarPreview(null);
  };

  const handleTeacherAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setTeacherAvatarPreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleStudentAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setStudentAvatarPreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePredefinedAvatarSelect = (avatarUrl) => {
    if (avatarType === 'teacher') {
      setTeacherAvatarPreview(avatarUrl);
    } else if (avatarType === 'student') {
      setStudentAvatarPreview(avatarUrl);
    }
    setShowAvatarOptions(false);
  };

  const openAvatarOptions = (type) => {
    setAvatarType(type);
    setShowAvatarOptions(true);
  };

  const closeAvatarOptions = () => {
    setShowAvatarOptions(false);
    setAvatarType('');
  };

  // Get current attendance data based on selected period
  const getCurrentAttendanceData = () => {
    switch (reportPeriod) {
      case 'weekly':
        return weeklyAttendanceData;
      case 'monthly':
        return monthlyAttendanceData;
      case 'yearly':
        return yearlyAttendanceData;
      default:
        return weeklyAttendanceData;
    }
  };

  // Get current attendance data key based on selected period
  const getDataKey = () => {
    switch (reportPeriod) {
      case 'weekly':
        return 'day';
      case 'monthly':
        return 'week';
      case 'yearly':
        return 'month';
      default:
        return 'day';
    }
  };

  const summaryStats = [
    { label: 'Total Students', value: schoolData.totalStudents, icon: Users, color: 'from-blue-500 to-blue-600', change: '+15' },
    { label: 'Total Teachers', value: schoolData.totalTeachers, icon: User, color: 'from-green-500 to-emerald-600', change: '+2' },
    { label: 'Present Today', value: Math.round(schoolData.totalStudents * schoolData.currentAttendance / 100), icon: UserCheck, color: 'from-green-500 to-green-600', change: '+42' },
    { label: 'Attendance Rate', value: `${schoolData.currentAttendance}%`, icon: TrendingUp, color: 'from-purple-500 to-purple-600', change: '+1.2%' },
  ];

  return (
    <div className="flex min-h-screen max-h-screen overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Sidebar */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-64 md:w-72 bg-white shadow-xl flex flex-col h-screen"
      >
        <div className="p-5 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                AD
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent truncate block">
                  Smart Attendance System
                </span>
              </div>
              <p className="text-xs text-gray-500 truncate">School Admin Dashboard</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 pt-0 space-y-1 overflow-y-auto">
          {[
            { id: 'home', icon: Home, label: 'Dashboard Home' },
            { id: 'teachers', icon: User, label: 'Teachers' },
            { id: 'students', icon: Users, label: 'Students' },
            { id: 'classes', icon: BookOpen, label: 'Classes' },
            { id: 'reports', icon: FileText, label: 'Reports' },
            { id: 'alerts', icon: Bell, label: 'Alerts' },
            { id: 'settings', icon: Settings, label: 'Settings' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/30'
                  : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span className="font-medium">{tab.label}</span>
              {tab.id === 'alerts' && (
                <span className="ml-auto bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-100 space-y-1">
          <button 
            onClick={onLogout}
            className="w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-gray-600 hover:bg-gray-50 transition-all"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto overscroll-contain flex flex-col h-screen">
        {/* Ultra Modern Header */}
        <div className="flex-shrink-0">
          <UltraModernHeader 
            dashboardTitle="School Admin Dashboard"
            userType="Admin"
            userName="Admin User"
            userRole="School Administrator"
            onLogout={onLogout}
          />
        </div>

        {/* Dashboard Content */}
        <div className="p-8 flex-grow overflow-y-auto overscroll-contain">
          {/* Home Tab */}
          {activeTab === 'home' && (
            <div>
              {/* Welcome Banner */}
              <div className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 rounded-3xl p-8 mb-8 shadow-xl backdrop-blur-sm border border-white/20 relative overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                  <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full mix-blend-overlay"></div>
                  <div className="absolute bottom-10 right-10 w-48 h-48 bg-white rounded-full mix-blend-overlay"></div>
                </div>
                <div className="relative z-10">
                  <h2 className="text-4xl font-bold text-white mb-2">
                    Good Morning, Admin! 👋
                  </h2>
                  <p className="text-blue-100 text-lg mb-6">
                    Manage school-wide attendance and oversee academic performance
                  </p>
                  <div className="flex items-center gap-4 text-white">
                    <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm border border-white/20">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm">{schoolData.totalStudents} total students</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm border border-white/20">
                      <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                      <span className="text-sm">{alerts.filter(a => a.status === 'new').length} new alerts</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {summaryStats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <motion.div 
                      key={index}
                      whileHover={{ y: -5 }}
                      className={`bg-gradient-to-br ${stat.color} rounded-2xl p-6 shadow-lg border border-white/20 backdrop-blur-sm`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center border border-white/30">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-white">{stat.value}</div>
                          <div className="text-xs text-white/80">{stat.label}</div>
                        </div>
                      </div>
                      <div className="text-sm text-white/90 font-medium">+{stat.change} from last period</div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Charts and Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Attendance Trends Chart */}
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 shadow-lg border border-blue-200/30 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-bold text-white">Attendance Trends</h2>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => setReportPeriod('weekly')}
                        className={`px-3 py-1.5 text-sm rounded-lg ${reportPeriod === 'weekly' ? 'bg-white text-blue-600' : 'bg-white/20 text-white'}`}
                      >
                        Weekly
                      </button>
                      <button 
                        onClick={() => setReportPeriod('monthly')}
                        className={`px-3 py-1.5 text-sm rounded-lg ${reportPeriod === 'monthly' ? 'bg-white text-blue-600' : 'bg-white/20 text-white'}`}
                      >
                        Monthly
                      </button>
                      <button 
                        onClick={() => setReportPeriod('yearly')}
                        className={`px-3 py-1.5 text-sm rounded-lg ${reportPeriod === 'yearly' ? 'bg-white text-blue-600' : 'bg-white/20 text-white'}`}
                      >
                        Yearly
                      </button>
                    </div>
                  </div>
                  <div className="h-64 bg-white/20 rounded-xl p-4 backdrop-blur-sm border border-white/30">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsLineChart data={getCurrentAttendanceData()}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.3)" />
                        <XAxis 
                          dataKey={getDataKey()} 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fill: 'rgba(255,255,255,0.8)', fontSize: 12 }}
                        />
                        <YAxis 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fill: 'rgba(255,255,255,0.8)', fontSize: 12 }}
                        />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'rgba(255,255,255,0.9)', 
                            borderRadius: '12px',
                            border: 'none',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                          }} 
                        />
                        <Line 
                          type="monotone" 
                          dataKey="attendance" 
                          stroke="#fff" 
                          strokeWidth={4}
                          dot={{ r: 8, fill: '#fff', strokeWidth: 2, stroke: '#3b82f6' }}
                          activeDot={{ r: 10, fill: '#fff', strokeWidth: 2, stroke: '#2563eb' }}
                        />
                      </RechartsLineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Recent Alerts */}
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-200/30 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-bold text-gray-900">Recent Alerts</h2>
                    <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-4">
                    {alerts.slice(0, 3).map((alert) => (
                      <motion.div
                        key={alert.id}
                        whileHover={{ x: 5 }}
                        className={`p-4 rounded-xl border ${getSeverityColor(alert.severity)} transition-all duration-300`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`p-2 rounded-lg ${getSeverityColorSolid(alert.severity)}`}>
                            {getAlertIcon(alert.type)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-gray-900 mb-1">{alert.message}</p>
                            <p className="text-sm text-gray-500">{alert.time}</p>
                          </div>
                          <div className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(alert.severity)}`}>
                            {alert.status.charAt(0).toUpperCase() + alert.status.slice(1)}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* School Info */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-blue-200/30 mb-8 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{schoolData.name}</h2>
                    <p className="text-gray-600 mt-1">{schoolData.location}</p>
                    <div className="flex flex-wrap gap-4 mt-4">
                      <div className="flex items-center gap-2">
                        <UserCheck className="w-5 h-5 text-blue-500" />
                        <span className="text-gray-600">{schoolData.totalStudents} Students</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-5 h-5 text-green-500" />
                        <span className="text-gray-600">{schoolData.totalTeachers} Teachers</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-purple-500" />
                        <span className="text-gray-600">{schoolData.currentAttendance}% Attendance</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <p className="text-sm text-gray-500">Principal</p>
                    <p className="font-medium text-gray-900">{schoolData.principal}</p>
                    <p className="text-sm text-gray-500 mt-2">Contact</p>
                    <p className="font-medium text-gray-900">{schoolData.contact}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Teachers Tab */}
          {activeTab === 'teachers' && (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Teacher Management</h2>
                <button 
                  onClick={() => setShowAddTeacherModal(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-400 to-indigo-500 text-white rounded-xl hover:from-blue-500 hover:to-indigo-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border border-blue-300/50 hover:border-blue-200/80 backdrop-blur-sm hover:backdrop-blur-md hover:shadow-blue-500/30 glow-on-hover"
                >
                  <Plus className="w-4 h-4" />
                  Add Teacher
                </button>
              </div>

              {/* Teachers Filters */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-blue-200/30 mb-8 hover:shadow-lg transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <select className="w-full px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>All Subjects</option>
                      <option>Mathematics</option>
                      <option>Science</option>
                      <option>English</option>
                      <option>History</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Classes</label>
                    <select className="w-full px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>All Classes</option>
                      <option>6th Grade</option>
                      <option>7th Grade</option>
                      <option>8th Grade</option>
                      <option>9th Grade</option>
                      <option>10th Grade</option>
                      <option>11th Grade</option>
                      <option>12th Grade</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                    <select className="w-full px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>All Statuses</option>
                      <option>Active</option>
                      <option>Inactive</option>
                    </select>
                  </div>
                  <div className="flex items-end">
                    <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all">
                      Apply Filters
                    </button>
                  </div>
                </div>
              </div>

              {/* Teachers Table */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Avatar</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Teacher</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Email</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Subject</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Classes</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Students</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {teachers.map((teacher) => (
                        <tr key={teacher.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-4">
                            {teacher.avatar ? (
                              <img 
                                src={teacher.avatar} 
                                alt={teacher.name} 
                                className="w-10 h-10 rounded-full object-cover"
                              />
                            ) : (
                              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                                <User className="w-6 h-6 text-gray-400" />
                              </div>
                            )}
                          </td>
                          <td className="py-4 px-4 font-medium text-gray-900">{teacher.name}</td>
                          <td className="py-4 px-4 text-gray-600">{teacher.email}</td>
                          <td className="py-4 px-4 text-gray-600">{teacher.subject}</td>
                          <td className="py-4 px-4 text-gray-600">{teacher.classes.join(', ')}</td>
                          <td className="py-4 px-4 text-gray-600">{teacher.students}</td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-2">
                              <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                <Eye className="w-4 h-4" />
                              </button>
                              <button className="p-2 text-gray-500 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors">
                                <Edit className="w-4 h-4" />
                              </button>
                              <button className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                <Trash2 className="w-4 h-4" />
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

          {/* Students Tab */}
          {activeTab === 'students' && (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Student Management</h2>
                <button 
                  onClick={() => setShowAddStudentModal(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-400 to-indigo-500 text-white rounded-xl hover:from-blue-500 hover:to-indigo-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border border-blue-300/50 hover:border-blue-200/80 backdrop-blur-sm hover:backdrop-blur-md hover:shadow-blue-500/30 glow-on-hover"
                >
                  <Plus className="w-4 h-4" />
                  Add Student
                </button>
              </div>

              {/* Students Filters */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
                    <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>All Classes</option>
                      <option>6th Grade</option>
                      <option>7th Grade</option>
                      <option>8th Grade</option>
                      <option>9th Grade</option>
                      <option>10th Grade</option>
                      <option>11th Grade</option>
                      <option>12th Grade</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Grade</label>
                    <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>All Grades</option>
                      <option>A+</option>
                      <option>A</option>
                      <option>B+</option>
                      <option>B</option>
                      <option>C+</option>
                      <option>C</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Attendance</label>
                    <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>All</option>
                      <option>Above 90%</option>
                      <option>80-90%</option>
                      <option>Below 80%</option>
                    </select>
                  </div>
                  <div className="flex items-end">
                    <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all">
                      Apply Filters
                    </button>
                  </div>
                </div>
              </div>

              {/* Students Table */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Avatar</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Student</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Roll Number</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Class</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Attendance</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Grade</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {students.map((student) => (
                        <tr key={student.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-4">
                            {student.avatar ? (
                              <img 
                                src={student.avatar} 
                                alt={student.name} 
                                className="w-10 h-10 rounded-full object-cover"
                              />
                            ) : (
                              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                                <User className="w-6 h-6 text-gray-400" />
                              </div>
                            )}
                          </td>
                          <td className="py-4 px-4 font-medium text-gray-900">{student.name}</td>
                          <td className="py-4 px-4 text-gray-600">{student.roll}</td>
                          <td className="py-4 px-4 text-gray-600">{student.class}</td>
                          <td className="py-4 px-4">
                            <span className="text-gray-900 font-medium">{student.attendance}%</span>
                          </td>
                          <td className="py-4 px-4">
                            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                              {student.grade}
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-2">
                              <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                <Eye className="w-4 h-4" />
                              </button>
                              <button className="p-2 text-gray-500 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors">
                                <Edit className="w-4 h-4" />
                              </button>
                              <button className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                <Trash2 className="w-4 h-4" />
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

          {/* Classes Tab */}
          {activeTab === 'classes' && (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Class Management</h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-400 to-indigo-500 text-white rounded-xl hover:from-blue-500 hover:to-indigo-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border border-blue-300/50 hover:border-blue-200/80 backdrop-blur-sm hover:backdrop-blur-md hover:shadow-blue-500/30 glow-on-hover">
                  <Plus className="w-4 h-4" />
                  Add Class
                </button>
              </div>

              {/* Classes Filters */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>All Subjects</option>
                      <option>Mathematics</option>
                      <option>Science</option>
                      <option>English</option>
                      <option>History</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Grade</label>
                    <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>All Grades</option>
                      <option>6th Grade</option>
                      <option>7th Grade</option>
                      <option>8th Grade</option>
                      <option>9th Grade</option>
                      <option>10th Grade</option>
                      <option>11th Grade</option>
                      <option>12th Grade</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Students</label>
                    <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>All</option>
                      <option>0-25</option>
                      <option>26-35</option>
                      <option>36-50</option>
                    </select>
                  </div>
                  <div className="flex items-end">
                    <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all">
                      Apply Filters
                    </button>
                  </div>
                </div>
              </div>

              {/* Classes Table */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Class</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Subject</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Teacher</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Students</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {classes.map((classItem) => (
                        <tr key={classItem.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-4 font-medium text-gray-900">{classItem.name}</td>
                          <td className="py-4 px-4 text-gray-600">{classItem.subject}</td>
                          <td className="py-4 px-4 text-gray-600">{classItem.teacher}</td>
                          <td className="py-4 px-4 text-gray-600">{classItem.students}</td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-2">
                              <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                <Eye className="w-4 h-4" />
                              </button>
                              <button className="p-2 text-gray-500 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors">
                                <Edit className="w-4 h-4" />
                              </button>
                              <button className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                <Trash2 className="w-4 h-4" />
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
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Reports & Analytics</h2>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all">
                    <Filter className="w-4 h-4" />
                    Filter
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg">
                    <Download className="w-4 h-4" />
                    Export Report
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Attendance Analytics */}
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 shadow-lg border-2 border-blue-300/50 backdrop-blur-sm">
                  <h3 className="text-lg font-bold text-white mb-6">Attendance Analytics</h3>
                  <div className="h-80 bg-white/20 rounded-xl p-4 backdrop-blur-sm border border-white/30">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsBarChart data={classes}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.3)" />
                        <XAxis 
                          dataKey="name" 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fill: 'rgba(255,255,255,0.8)', fontSize: 12 }}
                        />
                        <YAxis 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fill: 'rgba(255,255,255,0.8)', fontSize: 12 }}
                        />
                        <Tooltip 
                          formatter={(value) => [`${value}`, 'Students']}
                          contentStyle={{ 
                            backgroundColor: 'rgba(255,255,255,0.9)', 
                            borderRadius: '12px',
                            border: '1px solid rgba(255,255,255,0.3)',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                            backdropFilter: 'blur(10px)'
                          }}
                          labelStyle={{ color: '#1e40af' }}
                        />
                        <Legend />
                        <Bar 
                          dataKey="students" 
                          name="Students" 
                          fill="rgba(255,255,255,0.9)" 
                          radius={[6, 6, 0, 0]} 
                          barSize={32}
                        />
                      </RechartsBarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Student Distribution */}
                <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-6 shadow-lg border-2 border-purple-300/50 backdrop-blur-sm">
                  <h3 className="text-lg font-bold text-white mb-6">Student Distribution</h3>
                  <div className="h-80 bg-white/20 rounded-xl p-4 backdrop-blur-sm border border-white/30">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsPieChart>
                        <Pie
                          data={[
                            { name: '6th Grade', value: 50 },
                            { name: '7th Grade', value: 55 },
                            { name: '8th Grade', value: 60 },
                            { name: '9th Grade', value: 65 },
                            { name: '10th Grade', value: 60 },
                            { name: '11th Grade', value: 35 },
                            { name: '12th Grade', value: 25 },
                          ]}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={2}
                          dataKey="value"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {[
                            { name: '6th Grade', value: 50, color: '#3b82f6' },
                            { name: '7th Grade', value: 55, color: '#60a5fa' },
                            { name: '8th Grade', value: 60, color: '#93c5fd' },
                            { name: '9th Grade', value: 65, color: '#bfdbfe' },
                            { name: '10th Grade', value: 60, color: '#dbeafe' },
                            { name: '11th Grade', value: 35, color: '#eff6ff' },
                            { name: '12th Grade', value: 25, color: '#f3f4f6' },
                          ].map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </RechartsPieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Alerts Tab */}
          {activeTab === 'alerts' && (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Alert Management</h2>
                <div className="flex gap-3">
                  <select className="px-4 py-2 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>All Statuses</option>
                    <option>New</option>
                    <option>Acknowledged</option>
                    <option>Resolved</option>
                  </select>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all">
                    <RefreshCw className="w-4 h-4" />
                    Refresh
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl p-6 text-white shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold">Critical Alerts</h3>
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold mb-2">12</div>
                  <div className="text-red-100">Require immediate attention</div>
                </div>
                
                <div className="bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl p-6 text-white shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold">High Priority</h3>
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Bell className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold mb-2">24</div>
                  <div className="text-amber-100">Should be addressed soon</div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl p-6 text-white shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold">Medium Priority</h3>
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Bell className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold mb-2">36</div>
                  <div className="text-blue-100">Monitor regularly</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900">All Alerts</h3>
                </div>
                <div className="divide-y divide-gray-100">
                  {alerts.map((alert) => (
                    <div key={alert.id} className="p-6 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl ${getSeverityColorSolid(alert.severity)}`}>
                          {getAlertIcon(alert.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <h4 className="font-medium text-gray-900">{alert.message}</h4>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(alert.severity)}`}>
                              {alert.status.charAt(0).toUpperCase() + alert.status.slice(1)}
                            </span>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColorSolid(alert.severity)} text-white`}>
                              {alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500 mb-3">{alert.time}</p>
                          <div className="flex gap-2">
                            <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors">
                              Acknowledge
                            </button>
                            <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                              Snooze
                            </button>
                            <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                              Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">System Settings</h2>
                  <p className="text-gray-600 text-sm mt-1">Manage your account preferences and system settings</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                {/* Settings Navigation */}
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-1.5 sticky top-4">
                    {[
                      { id: 'profile', icon: User, label: 'Profile' },
                      { id: 'notifications', icon: Bell, label: 'Notifications' },
                      { id: 'security', icon: Shield, label: 'Security' },
                      { id: 'appearance', icon: Settings, label: 'Appearance' },
                    ].map((tab) => {
                      const IconComponent = tab.icon;
                      return (
                        <button
                          key={tab.id}
                          className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-left transition-all text-sm ${
                            activeTab === tab.id
                              ? 'bg-blue-50 text-blue-600 font-medium'
                              : 'text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          <IconComponent className="w-4 h-4" />
                          <span>{tab.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
                
                {/* Settings Content */}
                <div className="lg:col-span-3">
                  <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                    <div className="mb-4">
                      <h2 className="text-lg font-bold text-gray-900 mb-1">Profile Information</h2>
                      <p className="text-gray-600 text-sm">Update your personal and professional details</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                      <div className="flex flex-col items-center md:col-span-2">
                        <div className="relative mb-3">
                          <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                            AD
                          </div>
                          <button className="absolute bottom-0 right-0 bg-blue-500 text-white p-1.5 rounded-full hover:bg-blue-600 transition-colors shadow-md">
                            <Edit className="w-3 h-3" />
                          </button>
                        </div>
                        <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                          Change Picture
                        </button>
                      </div>
                      
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1.5">Full Name</label>
                        <input 
                          type="text" 
                          defaultValue="Admin User"
                          className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1.5">Email Address</label>
                        <input 
                          type="email" 
                          defaultValue="admin@school.edu"
                          className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1.5">School</label>
                        <input 
                          type="text" 
                          defaultValue={schoolData.name}
                          className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1.5">Position</label>
                        <input 
                          type="text" 
                          defaultValue="School Administrator"
                          className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <button className="px-4 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all shadow-sm hover:shadow-md font-medium text-sm">
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Add Teacher Modal */}
      {showAddTeacherModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md max-h-96 overflow-y-auto">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900">Add New Teacher</h3>
                <button 
                  onClick={() => setShowAddTeacherModal(false)}
                  className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex flex-col items-center mb-6">
                <div className="relative mb-4">
                  {teacherAvatarPreview ? (
                    <img 
                      src={teacherAvatarPreview} 
                      alt="Teacher preview" 
                      className="w-24 h-24 rounded-full object-cover border-4 border-blue-100"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center border-4 border-blue-100">
                      <User className="w-12 h-12 text-gray-400" />
                    </div>
                  )}
                  <div className="absolute bottom-0 right-0 flex gap-1">
                    <label className="bg-blue-500 rounded-full p-2 cursor-pointer hover:bg-blue-600 transition-colors">
                      <input 
                        type="file" 
                        className="hidden" 
                        accept="image/*"
                        onChange={handleTeacherAvatarChange}
                      />
                      <Edit className="w-4 h-4 text-white" />
                    </label>
                    <button 
                      className="bg-green-500 rounded-full p-2 cursor-pointer hover:bg-green-600 transition-colors"
                      onClick={() => openAvatarOptions('teacher')}
                    >
                      <User className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
                <p className="text-sm text-gray-500">Upload or choose avatar</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter teacher's name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter teacher's email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Select subject</option>
                    <option>Mathematics</option>
                    <option>Science</option>
                    <option>English</option>
                    <option>History</option>
                  </select>
                </div>
              </div>
              
              <div className="flex gap-3 mt-6">
                <button 
                  onClick={() => setShowAddTeacherModal(false)}
                  className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddTeacher}
                  className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all"
                >
                  Add Teacher
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Student Modal */}
      {showAddStudentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md max-h-96 overflow-y-auto">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900">Add New Student</h3>
                <button 
                  onClick={() => setShowAddStudentModal(false)}
                  className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex flex-col items-center mb-6">
                <div className="relative mb-4">
                  {studentAvatarPreview ? (
                    <img 
                      src={studentAvatarPreview} 
                      alt="Student preview" 
                      className="w-24 h-24 rounded-full object-cover border-4 border-blue-100"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center border-4 border-blue-100">
                      <User className="w-12 h-12 text-gray-400" />
                    </div>
                  )}
                  <div className="absolute bottom-0 right-0 flex gap-1">
                    <label className="bg-blue-500 rounded-full p-2 cursor-pointer hover:bg-blue-600 transition-colors">
                      <input 
                        type="file" 
                        className="hidden" 
                        accept="image/*"
                        onChange={handleStudentAvatarChange}
                      />
                      <Edit className="w-4 h-4 text-white" />
                    </label>
                    <button 
                      className="bg-green-500 rounded-full p-2 cursor-pointer hover:bg-green-600 transition-colors"
                      onClick={() => openAvatarOptions('student')}
                    >
                      <User className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
                <p className="text-sm text-gray-500">Upload or choose avatar</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter student's name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Roll Number</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter roll number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
                  <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Select class</option>
                    <option>6A</option>
                    <option>6B</option>
                    <option>7A</option>
                    <option>7B</option>
                    <option>8A</option>
                    <option>8B</option>
                    <option>9A</option>
                    <option>9B</option>
                    <option>10A</option>
                    <option>10B</option>
                    <option>11A</option>
                    <option>11B</option>
                    <option>12A</option>
                    <option>12B</option>
                  </select>
                </div>
              </div>
              
              <div className="flex gap-3 mt-6">
                <button 
                  onClick={() => setShowAddStudentModal(false)}
                  className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddStudent}
                  className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all"
                >
                  Add Student
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Avatar Options Modal */}
      {showAvatarOptions && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md max-h-96 overflow-y-auto">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900">Choose Avatar</h3>
                <button 
                  onClick={closeAvatarOptions}
                  className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-4 gap-4">
                {predefinedAvatars.map((avatar, index) => (
                  <button
                    key={index}
                    onClick={() => handlePredefinedAvatarSelect(avatar)}
                    className="p-2 rounded-xl border-2 border-gray-200 hover:border-blue-500 transition-all"
                  >
                    <img 
                      src={avatar} 
                      alt={`Avatar ${index + 1}`} 
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </button>
                ))}
              </div>
              
              <div className="flex gap-3 mt-6">
                <button 
                  onClick={closeAvatarOptions}
                  className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
