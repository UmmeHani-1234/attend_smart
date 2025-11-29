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

  const getBarColor = (value) => {
    if (value >= 40) return '#10B981'; // green
    if (value >= 30) return '#3B82F6'; // blue
    if (value >= 20) return '#F59E0B'; // amber
    return '#EF4444'; // red
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
    { label: 'Total Teachers', value: schoolData.totalTeachers, icon: User, color: 'from-blue-400 to-indigo-500', change: '+2' },
    { label: 'Present Today', value: Math.round(schoolData.totalStudents * schoolData.currentAttendance / 100), icon: UserCheck, color: 'from-indigo-400 to-indigo-500', change: '+42' },
    { label: 'Attendance Rate', value: `${schoolData.currentAttendance}%`, icon: TrendingUp, color: 'from-indigo-500 to-purple-600', change: '+1.2%' },
  ];

  return (
    <div className="flex min-h-screen max-h-screen overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Sidebar */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-52 bg-white shadow-lg flex flex-col h-screen"
      >
        <div className="p-2.5 border-b border-gray-100">
          <div className="flex items-center gap-1.5">
            <div className="relative">
              <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-md flex items-center justify-center text-white font-bold text-[11px] shadow-md">
                AD
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-green-500 rounded-full border border-white"></div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1">
                <span className="text-[11px] font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent truncate block">
                  Smart Attendance
                </span>
              </div>
              <p className="text-[10px] text-gray-500 truncate">Admin</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-2 pt-0 space-y-0.5 overflow-y-auto">
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
              className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-md transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md shadow-blue-500/20'
                  : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              <tab.icon className="w-3 h-3" />
              <span className="font-medium text-[11px]">{tab.label}</span>
              {tab.id === 'alerts' && (
                <span className="ml-auto bg-red-500 text-white text-[8px] font-bold rounded-full w-3 h-3 flex items-center justify-center">
                  3
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="p-2 border-t border-gray-100 space-y-1">
          <button 
            onClick={onLogout}
            className="w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all"
          >
            <LogOut className="w-3 h-3" />
            <span className="font-medium text-[11px]">Logout</span>
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
        <div className="p-4 flex-grow overflow-y-auto overscroll-contain">
          {/* Home Tab */}
          {activeTab === 'home' && (
            <div>
              {/* Welcome Banner */}
              <div className="bg-gradient-to-r from-blue-600 via-indigo-500 to-indigo-600 rounded-md p-4 mb-5 shadow-sm backdrop-blur-sm border border-white/20 relative overflow-hidden">
                <div className="absolute -top-5 -right-5 w-20 h-20 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-white/10 rounded-full"></div>
                <div className="absolute top-4 right-4 w-7 h-7 bg-white/10 rotate-45"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div>
                    <h2 className="text-sm font-bold text-white mb-1.5">Good Morning, Admin! 👋</h2>
                    <p className="text-xs text-blue-100 mb-2">Manage school-wide attendance and oversee academic performance</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <div className="flex items-center bg-white/10 rounded-full px-2.5 py-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-1.5"></div>
                        <span className="text-[10px] text-white font-medium">{schoolData.totalStudents} total students</span>
                      </div>
                      <div className="flex items-center bg-white/10 rounded-full px-2.5 py-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-1.5"></div>
                        <span className="text-[10px] text-white font-medium">{alerts.filter(a => a.status === 'new').length} new alerts</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-white/20 rounded-md p-2">
                      <School className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Summary Cards */}
              <div className="flex gap-4 mb-6">
                {summaryStats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div 
                      key={index}
                      className={`flex-grow bg-gradient-to-br ${stat.color} rounded-md p-4 shadow-sm border border-white/20 backdrop-blur-sm relative overflow-hidden`}
                    >
                      <div className="absolute -top-2 -right-2 w-10 h-10 bg-white/10 rounded-full"></div>
                      <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-white/10 rounded-full"></div>
                      
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-8 h-8 bg-white/20 rounded-md flex items-center justify-center border border-white/30">
                          <IconComponent className="w-4 h-4 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-white">{stat.value}</div>
                          <div className="text-[9px] text-white/80">{stat.label}</div>
                        </div>
                      </div>
                      <div className="text-[9px] text-white/90 font-medium">+{stat.change} from last period</div>
                    </div>
                  );
                })}
              </div>

              {/* Charts and Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Attendance Trends Chart */}
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-5 shadow-lg border border-blue-200/30 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/10 rounded-full"></div>
                  
                  <div className="flex items-center justify-between mb-5">
                    <h2 className="text-base font-bold text-white">Attendance Trends</h2>
                    <div className="flex gap-1.5">
                      <button 
                        onClick={() => setReportPeriod('weekly')}
                        className={`px-2.5 py-1.5 text-[10px] rounded-md font-medium ${reportPeriod === 'weekly' ? 'bg-white text-blue-600 shadow-sm' : 'bg-white/20 text-white'}`}
                      >
                        Weekly
                      </button>
                      <button 
                        onClick={() => setReportPeriod('monthly')}
                        className={`px-2.5 py-1.5 text-[10px] rounded-md font-medium ${reportPeriod === 'monthly' ? 'bg-white text-blue-600 shadow-sm' : 'bg-white/20 text-white'}`}
                      >
                        Monthly
                      </button>
                      <button 
                        onClick={() => setReportPeriod('yearly')}
                        className={`px-2.5 py-1.5 text-[10px] rounded-md font-medium ${reportPeriod === 'yearly' ? 'bg-white text-blue-600 shadow-sm' : 'bg-white/20 text-white'}`}
                      >
                        Yearly
                      </button>
                    </div>
                  </div>
                  <div className="h-52 bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsLineChart data={getCurrentAttendanceData()}>
                        <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="rgba(229, 231, 235, 1)" />
                        <XAxis 
                          dataKey={getDataKey()} 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fill: 'rgba(107, 114, 128, 1)', fontSize: 11, fontWeight: 500 }}
                        />
                        <YAxis 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fill: 'rgba(107, 114, 128, 1)', fontSize: 11, fontWeight: 500 }}
                          domain={[80, 100]}
                        />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'rgba(255,255,255,0.95)', 
                            borderRadius: '10px',
                            border: '1px solid #e5e7eb',
                            boxShadow: '0 6px 16px rgba(0,0,0,0.12)',
                            fontSize: '13px',
                            padding: '10px'
                          }} 
                          formatter={(value) => [`${value}%`, 'Attendance']}
                          labelStyle={{ fontWeight: 600 }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="attendance" 
                          stroke="#1e40af" 
                          strokeWidth={3}
                          dot={{ r: 7, fill: '#fff', strokeWidth: 2, stroke: '#1e40af' }}
                          activeDot={{ r: 9, fill: '#fff', strokeWidth: 2, stroke: '#1e3a8a' }}
                          animationDuration={800}
                        />
                      </RechartsLineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Recent Alerts */}
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-md p-4 shadow-sm border border-gray-200/30 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500/10 rounded-full"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-500/10 rounded-full"></div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-sm font-bold text-gray-900">Recent Alerts</h2>
                    <button className="text-[9px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {alerts.slice(0, 3).map((alert) => (
                      <motion.div
                        key={alert.id}
                        whileHover={{ x: 5 }}
                        className={`p-3 rounded-md border ${getSeverityColor(alert.severity)} transition-all duration-300`}
                      >
                        <div className="flex items-start gap-2">
                          <div className={`p-1.5 rounded-md ${getSeverityColorSolid(alert.severity)}`}>
                            {getAlertIcon(alert.type)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-gray-900 text-[10px] mb-1">{alert.message}</p>
                            <p className="text-[9px] text-gray-500">{alert.time}</p>
                          </div>
                          <div className={`px-1.5 py-0.5 rounded-full text-[8px] font-medium ${getSeverityColor(alert.severity)}`}>
                            {alert.status.charAt(0).toUpperCase() + alert.status.slice(1)}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* School Info */}
              <div className="bg-white rounded-md p-4 shadow-sm border border-gray-100 mb-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-sm font-bold text-gray-900">{schoolData.name}</h2>
                    <p className="text-[10px] text-gray-600 mt-1">{schoolData.location}</p>
                    <div className="flex flex-wrap gap-3 mt-3">
                      <div className="flex items-center gap-1.5">
                        <UserCheck className="w-4 h-4 text-blue-500" />
                        <span className="text-[10px] text-gray-600">{schoolData.totalStudents} Students</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <User className="w-4 h-4 text-green-500" />
                        <span className="text-[10px] text-gray-600">{schoolData.totalTeachers} Teachers</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <TrendingUp className="w-4 h-4 text-purple-500" />
                        <span className="text-[10px] text-gray-600">{schoolData.currentAttendance}% Attendance</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <p className="text-[9px] text-gray-500">Principal</p>
                    <p className="font-medium text-gray-900 text-[10px]">{schoolData.principal}</p>
                    <p className="text-[9px] text-gray-500 mt-1">Contact</p>
                    <p className="font-medium text-gray-900 text-[10px]">{schoolData.contact}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Teachers Tab */}
          {activeTab === 'teachers' && (
            <div>
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-sm font-bold text-gray-900">Teacher Management</h2>
                <button 
                  onClick={() => setShowAddTeacherModal(true)}
                  className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-md hover:from-blue-600 hover:to-indigo-700 transition-all text-[10px] shadow-sm hover:shadow-md"
                >
                  <Plus className="w-3 h-3" />
                  Add Teacher
                </button>
              </div>

              {/* Teachers Filters */}
              <div className="bg-white rounded-md p-4 shadow-sm border border-gray-100 mb-5">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                  <div>
                    <label className="block text-[10px] font-medium text-gray-700 mb-1.5">Subject</label>
                    <select className="w-full px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>All Subjects</option>
                      <option>Mathematics</option>
                      <option>Science</option>
                      <option>English</option>
                      <option>History</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-medium text-gray-700 mb-1.5">Classes</label>
                    <select className="w-full px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500">
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
                    <label className="block text-[10px] font-medium text-gray-700 mb-1.5">Status</label>
                    <select className="w-full px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>All Statuses</option>
                      <option>Active</option>
                      <option>Inactive</option>
                    </select>
                  </div>
                  <div className="flex items-end">
                    <button className="w-full px-3 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-md hover:from-blue-600 hover:to-indigo-700 transition-all text-[10px] shadow-sm hover:shadow-md">
                      Apply Filters
                    </button>
                  </div>
                </div>
              </div>

              {/* Teachers Table */}
              <div className="bg-white rounded-md shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                      <tr>
                        <th className="px-3 py-2 text-left text-[9px] font-semibold text-indigo-700 uppercase tracking-wider">Avatar</th>
                        <th className="px-3 py-2 text-left text-[9px] font-semibold text-indigo-700 uppercase tracking-wider">Teacher</th>
                        <th className="px-3 py-2 text-left text-[9px] font-semibold text-indigo-700 uppercase tracking-wider">Email</th>
                        <th className="px-3 py-2 text-left text-[9px] font-semibold text-indigo-700 uppercase tracking-wider">Subject</th>
                        <th className="px-3 py-2 text-left text-[9px] font-semibold text-indigo-700 uppercase tracking-wider">Classes</th>
                        <th className="px-3 py-2 text-left text-[9px] font-semibold text-indigo-700 uppercase tracking-wider">Students</th>
                        <th className="px-3 py-2 text-left text-[9px] font-semibold text-indigo-700 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-50">
                      {teachers.map((teacher) => (
                        <tr key={teacher.id} className="hover:bg-indigo-50/50 transition-colors duration-150">
                          <td className="px-3 py-2">
                            {teacher.avatar ? (
                              <img 
                                src={teacher.avatar} 
                                alt={teacher.name} 
                                className="w-7 h-7 rounded-md object-cover"
                              />
                            ) : (
                              <div className="w-7 h-7 rounded-md bg-gray-200 flex items-center justify-center">
                                <User className="w-4 h-4 text-gray-400" />
                              </div>
                            )}
                          </td>
                          <td className="px-3 py-2 whitespace-nowrap text-[10px] font-medium text-gray-900">{teacher.name}</td>
                          <td className="px-3 py-2 whitespace-nowrap text-[10px] text-gray-600">{teacher.email}</td>
                          <td className="px-3 py-2 whitespace-nowrap text-[10px] text-gray-600">{teacher.subject}</td>
                          <td className="px-3 py-2 whitespace-nowrap text-[10px] text-gray-600">{teacher.classes.join(', ')}</td>
                          <td className="px-3 py-2 whitespace-nowrap text-[10px] text-gray-600">{teacher.students}</td>
                          <td className="px-3 py-2 whitespace-nowrap text-[10px]">
                            <div className="flex items-center gap-1">
                              <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                                <Eye className="w-3 h-3" />
                              </button>
                              <button className="p-1.5 text-gray-500 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors">
                                <Edit className="w-3 h-3" />
                              </button>
                              <button className="p-1.5 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors">
                                <Trash2 className="w-3 h-3" />
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
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-sm font-bold text-gray-900">Student Management</h2>
                <button 
                  onClick={() => setShowAddStudentModal(true)}
                  className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-md hover:from-blue-600 hover:to-indigo-700 transition-all text-[10px] shadow-sm hover:shadow-md"
                >
                  <Plus className="w-3 h-3" />
                  Add Student
                </button>
              </div>

              {/* Students Filters */}
              <div className="bg-white rounded-md p-4 shadow-sm border border-gray-100 mb-5">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                  <div>
                    <label className="block text-[10px] font-medium text-gray-700 mb-1.5">Class</label>
                    <select className="w-full px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500">
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
                    <label className="block text-[10px] font-medium text-gray-700 mb-1.5">Grade</label>
                    <select className="w-full px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500">
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
                    <label className="block text-[10px] font-medium text-gray-700 mb-1.5">Attendance</label>
                    <select className="w-full px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>All</option>
                      <option>Above 90%</option>
                      <option>80-90%</option>
                      <option>Below 80%</option>
                    </select>
                  </div>
                  <div className="flex items-end">
                    <button className="w-full px-3 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-md hover:from-blue-600 hover:to-indigo-700 transition-all text-[10px] shadow-sm hover:shadow-md">
                      Apply Filters
                    </button>
                  </div>
                </div>
              </div>

              {/* Students Table */}
              <div className="bg-white rounded-md shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                      <tr>
                        <th className="px-3 py-2 text-left text-[9px] font-semibold text-indigo-700 uppercase tracking-wider">Avatar</th>
                        <th className="px-3 py-2 text-left text-[9px] font-semibold text-indigo-700 uppercase tracking-wider">Student</th>
                        <th className="px-3 py-2 text-left text-[9px] font-semibold text-indigo-700 uppercase tracking-wider">Roll Number</th>
                        <th className="px-3 py-2 text-left text-[9px] font-semibold text-indigo-700 uppercase tracking-wider">Class</th>
                        <th className="px-3 py-2 text-left text-[9px] font-semibold text-indigo-700 uppercase tracking-wider">Attendance</th>
                        <th className="px-3 py-2 text-left text-[9px] font-semibold text-indigo-700 uppercase tracking-wider">Grade</th>
                        <th className="px-3 py-2 text-left text-[9px] font-semibold text-indigo-700 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-50">
                      {students.map((student) => (
                        <tr key={student.id} className="hover:bg-indigo-50/50 transition-colors duration-150">
                          <td className="px-3 py-2">
                            {student.avatar ? (
                              <img 
                                src={student.avatar} 
                                alt={student.name} 
                                className="w-7 h-7 rounded-md object-cover"
                              />
                            ) : (
                              <div className="w-7 h-7 rounded-md bg-gray-200 flex items-center justify-center">
                                <User className="w-4 h-4 text-gray-400" />
                              </div>
                            )}
                          </td>
                          <td className="px-3 py-2 whitespace-nowrap text-[10px] font-medium text-gray-900">{student.name}</td>
                          <td className="px-3 py-2 whitespace-nowrap text-[10px] text-gray-600">{student.roll}</td>
                          <td className="px-3 py-2 whitespace-nowrap text-[10px] text-gray-600">{student.class}</td>
                          <td className="px-3 py-2 whitespace-nowrap text-[10px] font-medium text-gray-900">{student.attendance}%</td>
                          <td className="px-3 py-2 whitespace-nowrap">
                            <span className="px-2 py-1 text-[8px] font-semibold rounded-full bg-green-100 text-green-800">
                              {student.grade}
                            </span>
                          </td>
                          <td className="px-3 py-2 whitespace-nowrap text-[10px]">
                            <div className="flex items-center gap-1">
                              <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                                <Eye className="w-3 h-3" />
                              </button>
                              <button className="p-1.5 text-gray-500 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors">
                                <Edit className="w-3 h-3" />
                              </button>
                              <button className="p-1.5 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors">
                                <Trash2 className="w-3 h-3" />
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
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-sm font-bold text-gray-900">Class Management</h2>
                <button className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-md hover:from-blue-600 hover:to-indigo-700 transition-all text-[10px] shadow-sm hover:shadow-md">
                  <Plus className="w-3 h-3" />
                  Add Class
                </button>
              </div>

              {/* Classes Filters */}
              <div className="bg-white rounded-md p-4 shadow-sm border border-gray-100 mb-5">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                  <div>
                    <label className="block text-[10px] font-medium text-gray-700 mb-1.5">Subject</label>
                    <select className="w-full px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>All Subjects</option>
                      <option>Mathematics</option>
                      <option>Science</option>
                      <option>English</option>
                      <option>History</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-medium text-gray-700 mb-1.5">Grade</label>
                    <select className="w-full px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500">
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
                    <label className="block text-[10px] font-medium text-gray-700 mb-1.5">Students</label>
                    <select className="w-full px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>All</option>
                      <option>0-25</option>
                      <option>26-35</option>
                      <option>36-50</option>
                    </select>
                  </div>
                  <div className="flex items-end">
                    <button className="w-full px-3 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-md hover:from-blue-600 hover:to-indigo-700 transition-all text-[10px] shadow-sm hover:shadow-md">
                      Apply Filters
                    </button>
                  </div>
                </div>
              </div>

              {/* Classes Table */}
              <div className="bg-white rounded-md shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                      <tr>
                        <th className="px-3 py-2 text-left text-[9px] font-semibold text-indigo-700 uppercase tracking-wider">Class</th>
                        <th className="px-3 py-2 text-left text-[9px] font-semibold text-indigo-700 uppercase tracking-wider">Subject</th>
                        <th className="px-3 py-2 text-left text-[9px] font-semibold text-indigo-700 uppercase tracking-wider">Teacher</th>
                        <th className="px-3 py-2 text-left text-[9px] font-semibold text-indigo-700 uppercase tracking-wider">Students</th>
                        <th className="px-3 py-2 text-left text-[9px] font-semibold text-indigo-700 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-50">
                      {classes.map((classItem) => (
                        <tr key={classItem.id} className="hover:bg-indigo-50/50 transition-colors duration-150">
                          <td className="px-3 py-2 whitespace-nowrap text-[10px] font-medium text-gray-900">{classItem.name}</td>
                          <td className="px-3 py-2 whitespace-nowrap text-[10px] text-gray-600">{classItem.subject}</td>
                          <td className="px-3 py-2 whitespace-nowrap text-[10px] text-gray-600">{classItem.teacher}</td>
                          <td className="px-3 py-2 whitespace-nowrap text-[10px] text-gray-600">{classItem.students}</td>
                          <td className="px-3 py-2 whitespace-nowrap text-[10px]">
                            <div className="flex items-center gap-1">
                              <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                                <Eye className="w-3 h-3" />
                              </button>
                              <button className="p-1.5 text-gray-500 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors">
                                <Edit className="w-3 h-3" />
                              </button>
                              <button className="p-1.5 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors">
                                <Trash2 className="w-3 h-3" />
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
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-sm font-bold text-gray-900">Reports & Analytics</h2>
                <div className="flex gap-2">
                  <button className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-all text-[10px]">
                    <Filter className="w-3 h-3" />
                    Filter
                  </button>
                  <button className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-md hover:from-blue-600 hover:to-indigo-700 transition-all text-[10px] shadow-sm hover:shadow-md">
                    <Download className="w-3 h-3" />
                    Export Report
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Attendance Analytics */}
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-5 shadow-lg border border-blue-200/30 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/10 rounded-full"></div>
                  
                  <h3 className="text-base font-bold text-white mb-5">Attendance Analytics</h3>
                  <div className="h-52 bg-white/20 rounded-lg p-4 backdrop-blur-sm border border-white/30">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsBarChart data={classes}>
                        <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="rgba(255,255,255,0.4)" />
                        <XAxis 
                          dataKey="name" 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fill: 'rgba(255,255,255,0.9)', fontSize: 11, fontWeight: 500 }}
                        />
                        <YAxis 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fill: 'rgba(255,255,255,0.9)', fontSize: 11, fontWeight: 500 }}
                        />
                        <Tooltip 
                          formatter={(value) => [`${value}`, 'Students']}
                          contentStyle={{ 
                            backgroundColor: 'rgba(255,255,255,0.95)', 
                            borderRadius: '10px',
                            border: '1px solid rgba(255,255,255,0.4)',
                            boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
                            backdropFilter: 'blur(12px)',
                            fontSize: '13px',
                            padding: '10px'
                          }}
                          labelStyle={{ color: '#1e40af', fontWeight: 600 }}
                        />
                        <Legend 
                          wrapperStyle={{ paddingTop: '10px' }}
                          formatter={(value) => <span className="text-white font-medium">{value}</span>}
                        />
                        <Bar 
                          dataKey="students" 
                          name="Students" 
                          fill="rgba(255,255,255,0.95)" 
                          radius={[6, 6, 0, 0]} 
                          barSize={30}
                          animationDuration={800}
                        >
                          {classes.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={getBarColor(entry.students)} />
                          ))}
                        </Bar>
                      </RechartsBarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Student Distribution */}
                <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl p-5 shadow-lg border border-purple-200/30 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/10 rounded-full"></div>
                  
                  <h3 className="text-base font-bold text-white mb-5">Student Distribution</h3>
                  <div className="h-52 bg-white/20 rounded-lg p-4 backdrop-blur-sm border border-white/30">
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
                          innerRadius={50}
                          outerRadius={70}
                          paddingAngle={3}
                          dataKey="value"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          labelLine={true}
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
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'rgba(255,255,255,0.95)', 
                            borderRadius: '10px',
                            border: '1px solid rgba(255,255,255,0.4)',
                            boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
                            backdropFilter: 'blur(12px)',
                            fontSize: '13px',
                            padding: '10px'
                          }}
                          formatter={(value) => [`${value} students`, 'Count']}
                        />
                        <Legend 
                          wrapperStyle={{ paddingTop: '10px' }}
                          formatter={(value) => <span className="text-white font-medium">{value}</span>}
                        />
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
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-sm font-bold text-gray-900">Alert Management</h2>
                <div className="flex gap-2">
                  <select className="px-3 py-1.5 bg-white border border-gray-200 rounded-md text-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>All Statuses</option>
                    <option>New</option>
                    <option>Acknowledged</option>
                    <option>Resolved</option>
                  </select>
                  <button className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-all text-[10px]">
                    <RefreshCw className="w-3 h-3" />
                    Refresh
                  </button>
                </div>
              </div>

              <div className="flex gap-4 mb-6">
                <div className="flex-grow bg-gradient-to-br from-red-500 to-orange-500 rounded-md p-4 text-white shadow-sm relative overflow-hidden">
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-white/10 rounded-full"></div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-bold">Critical Alerts</h3>
                    <div className="w-8 h-8 bg-white/20 rounded-md flex items-center justify-center">
                      <AlertTriangle className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-lg font-bold mb-1">12</div>
                  <div className="text-[9px] text-red-100">Require immediate attention</div>
                </div>
                
                <div className="flex-grow bg-gradient-to-br from-amber-500 to-yellow-500 rounded-md p-4 text-white shadow-sm relative overflow-hidden">
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-white/10 rounded-full"></div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-bold">High Priority</h3>
                    <div className="w-8 h-8 bg-white/20 rounded-md flex items-center justify-center">
                      <Bell className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-lg font-bold mb-1">24</div>
                  <div className="text-[9px] text-amber-100">Should be addressed soon</div>
                </div>
                
                <div className="flex-grow bg-gradient-to-br from-blue-500 to-indigo-600 rounded-md p-4 text-white shadow-sm relative overflow-hidden">
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-white/10 rounded-full"></div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-bold">Medium Priority</h3>
                    <div className="w-8 h-8 bg-white/20 rounded-md flex items-center justify-center">
                      <Bell className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-lg font-bold mb-1">36</div>
                  <div className="text-[9px] text-blue-100">Monitor regularly</div>
                </div>
              </div>

              <div className="bg-white rounded-md shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-4 border-b border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-900">All Alerts</h3>
                </div>
                <div className="divide-y divide-gray-50">
                  {alerts.map((alert) => (
                    <div key={alert.id} className="p-4 hover:bg-indigo-50/50 transition-colors duration-150">
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-md ${getSeverityColorSolid(alert.severity)}`}>
                          {getAlertIcon(alert.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <h4 className="font-medium text-gray-900 text-[10px]">{alert.message}</h4>
                            <span className={`px-1.5 py-0.5 rounded-full text-[8px] font-medium ${getSeverityColor(alert.severity)}`}>
                              {alert.status.charAt(0).toUpperCase() + alert.status.slice(1)}
                            </span>
                            <span className={`px-1.5 py-0.5 rounded-full text-[8px] font-medium ${getSeverityColorSolid(alert.severity)} text-white`}>
                              {alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)}
                            </span>
                          </div>
                          <p className="text-[9px] text-gray-500 mb-2">{alert.time}</p>
                          <div className="flex gap-1.5">
                            <button className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-[9px] font-medium hover:bg-blue-200 transition-colors">
                              Acknowledge
                            </button>
                            <button className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-[9px] font-medium hover:bg-gray-200 transition-colors">
                              Snooze
                            </button>
                            <button className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-[9px] font-medium hover:bg-gray-200 transition-colors">
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
                  <h2 className="text-sm font-bold text-gray-900">System Settings</h2>
                  <p className="text-gray-600 text-[10px] mt-1">Manage your account preferences and system settings</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                {/* Settings Navigation */}
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-md shadow-sm border border-gray-100 p-1 sticky top-4">
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
                          className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-md text-left transition-all text-[11px] ${
                            activeTab === tab.id
                              ? 'bg-blue-50 text-blue-600 font-medium'
                              : 'text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          <IconComponent className="w-3.5 h-3.5" />
                          <span>{tab.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
                
                {/* Settings Content */}
                <div className="lg:col-span-3">
                  <div className="bg-white rounded-md shadow-sm border border-gray-100 p-3">
                    <div className="mb-3">
                      <h2 className="text-sm font-bold text-gray-900 mb-1">Profile Information</h2>
                      <p className="text-gray-600 text-[10px]">Update your personal and professional details</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 mb-3">
                      <div className="flex flex-col items-center md:col-span-2">
                        <div className="relative mb-2">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-md flex items-center justify-center text-white font-bold text-base">
                            AD
                          </div>
                          <button className="absolute bottom-0 right-0 bg-blue-500 text-white p-1 rounded-full hover:bg-blue-600 transition-colors shadow-sm">
                            <Edit className="w-2.5 h-2.5" />
                          </button>
                        </div>
                        <button className="text-blue-600 hover:text-blue-700 font-medium text-[10px]">
                          Change Picture
                        </button>
                      </div>
                      
                      <div>
                        <label className="block text-[9px] font-medium text-gray-700 mb-1">Full Name</label>
                        <input 
                          type="text" 
                          defaultValue="Admin User"
                          className="w-full px-2.5 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-[10px]"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-[9px] font-medium text-gray-700 mb-1">Email Address</label>
                        <input 
                          type="email" 
                          defaultValue="admin@school.edu"
                          className="w-full px-2.5 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-[10px]"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-[9px] font-medium text-gray-700 mb-1">School</label>
                        <input 
                          type="text" 
                          defaultValue={schoolData.name}
                          className="w-full px-2.5 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-[10px]"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-[9px] font-medium text-gray-700 mb-1">Position</label>
                        <input 
                          type="text" 
                          defaultValue="School Administrator"
                          className="w-full px-2.5 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-[10px]"
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <button className="px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-md hover:from-blue-600 hover:to-indigo-700 transition-all shadow-sm hover:shadow-md font-medium text-[10px]">
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
          <div className="bg-white rounded-md w-full max-w-md max-h-80 overflow-y-auto">
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-gray-900">Add New Teacher</h3>
                <button 
                  onClick={() => setShowAddTeacherModal(false)}
                  className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex flex-col items-center mb-4">
                <div className="relative mb-3">
                  {teacherAvatarPreview ? (
                    <img 
                      src={teacherAvatarPreview} 
                      alt="Teacher preview" 
                      className="w-20 h-20 rounded-md object-cover border-2 border-blue-100"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-md bg-gray-200 flex items-center justify-center border-2 border-blue-100">
                      <User className="w-10 h-10 text-gray-400" />
                    </div>
                  )}
                  <div className="absolute bottom-0 right-0 flex gap-1">
                    <label className="bg-blue-500 rounded-md p-1.5 cursor-pointer hover:bg-blue-600 transition-colors">
                      <input 
                        type="file" 
                        className="hidden" 
                        accept="image/*"
                        onChange={handleTeacherAvatarChange}
                      />
                      <Edit className="w-3 h-3 text-white" />
                    </label>
                    <button 
                      className="bg-green-500 rounded-md p-1.5 cursor-pointer hover:bg-green-600 transition-colors"
                      onClick={() => openAvatarOptions('teacher')}
                    >
                      <User className="w-3 h-3 text-white" />
                    </button>
                  </div>
                </div>
                <p className="text-[10px] text-gray-500">Upload or choose avatar</p>
              </div>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-[10px] font-medium text-gray-700 mb-1.5">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter teacher's name"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-medium text-gray-700 mb-1.5">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter teacher's email"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-medium text-gray-700 mb-1.5">Subject</label>
                  <select className="w-full px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Select subject</option>
                    <option>Mathematics</option>
                    <option>Science</option>
                    <option>English</option>
                    <option>History</option>
                  </select>
                </div>
              </div>
              
              <div className="flex gap-2 mt-4">
                <button 
                  onClick={() => setShowAddTeacherModal(false)}
                  className="flex-1 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-all text-[10px]"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddTeacher}
                  className="flex-1 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-md hover:from-blue-600 hover:to-indigo-700 transition-all text-[10px] shadow-sm hover:shadow-md"
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
          <div className="bg-white rounded-md w-full max-w-md max-h-80 overflow-y-auto">
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-gray-900">Add New Student</h3>
                <button 
                  onClick={() => setShowAddStudentModal(false)}
                  className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex flex-col items-center mb-4">
                <div className="relative mb-3">
                  {studentAvatarPreview ? (
                    <img 
                      src={studentAvatarPreview} 
                      alt="Student preview" 
                      className="w-20 h-20 rounded-md object-cover border-2 border-blue-100"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-md bg-gray-200 flex items-center justify-center border-2 border-blue-100">
                      <User className="w-10 h-10 text-gray-400" />
                    </div>
                  )}
                  <div className="absolute bottom-0 right-0 flex gap-1">
                    <label className="bg-blue-500 rounded-md p-1.5 cursor-pointer hover:bg-blue-600 transition-colors">
                      <input 
                        type="file" 
                        className="hidden" 
                        accept="image/*"
                        onChange={handleStudentAvatarChange}
                      />
                      <Edit className="w-3 h-3 text-white" />
                    </label>
                    <button 
                      className="bg-green-500 rounded-md p-1.5 cursor-pointer hover:bg-green-600 transition-colors"
                      onClick={() => openAvatarOptions('student')}
                    >
                      <User className="w-3 h-3 text-white" />
                    </button>
                  </div>
                </div>
                <p className="text-[10px] text-gray-500">Upload or choose avatar</p>
              </div>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-[10px] font-medium text-gray-700 mb-1.5">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter student's name"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-medium text-gray-700 mb-1.5">Roll Number</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter roll number"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-medium text-gray-700 mb-1.5">Class</label>
                  <select className="w-full px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500">
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
              
              <div className="flex gap-2 mt-4">
                <button 
                  onClick={() => setShowAddStudentModal(false)}
                  className="flex-1 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-all text-[10px]"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddStudent}
                  className="flex-1 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-md hover:from-blue-600 hover:to-indigo-700 transition-all text-[10px] shadow-sm hover:shadow-md"
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
          <div className="bg-white rounded-md w-full max-w-md max-h-80 overflow-y-auto">
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-gray-900">Choose Avatar</h3>
                <button 
                  onClick={closeAvatarOptions}
                  className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="p-4">
              <div className="grid grid-cols-4 gap-3">
                {predefinedAvatars.map((avatar, index) => (
                  <button
                    key={index}
                    onClick={() => handlePredefinedAvatarSelect(avatar)}
                    className="p-1.5 rounded-md border border-gray-200 hover:border-blue-500 transition-all"
                  >
                    <img 
                      src={avatar} 
                      alt={`Avatar ${index + 1}`} 
                      className="w-14 h-14 rounded-md object-cover"
                    />
                  </button>
                ))}
              </div>
              
              <div className="flex gap-2 mt-4">
                <button 
                  onClick={closeAvatarOptions}
                  className="flex-1 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-all text-[10px]"
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
