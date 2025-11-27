import React, { useState } from 'react';
import { Calendar, BookOpen, Award, TrendingUp, AlertCircle, Clock, Bell, User, MessageSquare, CheckCircle, FileText, Target, LogOut, Home, Search, ChevronDown, Eye, Download, Printer, Filter, Plus, X, PieChart as PieChartIcon, LineChart as LineChartIcon, Star, Settings, Edit, RefreshCw, School } from 'lucide-react';
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import AttendSmartLogo from '../AttendSmartLogo';
import UltraModernHeader from '../UltraModernHeader';

const NewStudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [studentAvatar, setStudentAvatar] = useState('https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah');
  const [showAvatarModal, setShowAvatarModal] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Sarah Johnson",
    email: "sarah.johnson@student.school.edu",
    class: "Class 10-A",
    rollNumber: "24",
    school: "Greenwood High School"
  });

  // Sample data for the dashboard
  const studentData = {
    name: "Sarah Johnson",
    class: "Class 10-A",
    rollNumber: "24",
    attendancePercentage: 92,
    presentDays: 42,
    absentDays: 3,
    lateDays: 1,
    currentGrade: "A-",
    gpa: "3.8"
  };

  const assignments = [
    { id: 1, subject: "Mathematics", title: "Chapter 5 Exercises", due: "2024-04-17", dueDisplay: "Apr 17, 2024", status: "pending", priority: "high" },
    { id: 2, subject: "Science", title: "Lab Report - Photosynthesis", due: "2024-04-18", dueDisplay: "Apr 18, 2024", status: "pending", priority: "medium" },
    { id: 3, subject: "English", title: "Essay on Shakespeare", due: "2024-04-20", dueDisplay: "Apr 20, 2024", status: "submitted", priority: "low" },
    { id: 4, subject: "History", title: "World War II Timeline", due: "2024-04-22", dueDisplay: "Apr 22, 2024", status: "pending", priority: "high" }
  ];

  const messages = [
    { id: 1, title: "Parent-Teacher Meeting", date: "Apr 18, 2024", from: "Mr. James Dean", priority: "high", unread: true },
    { id: 2, title: "Field Trip Permission", date: "Apr 16, 2024", from: "Ms. Sarah Wilson", priority: "medium", unread: false },
    { id: 3, title: "Science Fair Registration", date: "Apr 15, 2024", from: "Dr. Michael Brown", priority: "low", unread: true }
  ];

  const upcomingTests = [
    { id: 1, subject: "Mathematics", topic: "Algebra & Trigonometry", date: "2024-04-22", dateDisplay: "Apr 22, 2024", time: "10:00 AM", duration: "90 mins", type: "Mid-term" },
    { id: 2, subject: "Science", topic: "Chemical Reactions", date: "2024-04-25", dateDisplay: "Apr 25, 2024", time: "2:00 PM", duration: "60 mins", type: "Quiz" },
    { id: 3, subject: "English", topic: "Literature Analysis", date: "2024-04-28", dateDisplay: "Apr 28, 2024", time: "9:30 AM", duration: "120 mins", type: "Final" }
  ];

  const recentGrades = [
    { subject: "Mathematics", assignment: "Mid-term Exam", grade: "A", score: "92/100", date: "2024-04-12" },
    { subject: "Science", assignment: "Lab Test", grade: "A-", score: "88/100", date: "2024-04-10" },
    { subject: "English", assignment: "Essay", grade: "B+", score: "85/100", date: "2024-04-08" },
    { subject: "History", assignment: "Quiz", grade: "A", score: "95/100", date: "2024-04-05" }
  ];

  const teacherFeedback = [
    { id: 1, teacher: "Mr. James Dean", subject: "Mathematics", feedback: "Excellent progress in problem-solving! Keep up the great work.", date: "Apr 12, 2024", type: "positive" },
    { id: 2, teacher: "Ms. Sarah Wilson", subject: "Science", feedback: "Shows strong understanding of concepts. Participate more in class discussions.", date: "Apr 10, 2024", type: "constructive" },
    { id: 3, teacher: "Dr. Emily Clark", subject: "English", feedback: "Creative writing skills are improving. Focus on grammar.", date: "Apr 08, 2024", type: "constructive" }
  ];

  const attendanceData = [
    { day: 'Mon', present: 1, absent: 0 },
    { day: 'Tue', present: 1, absent: 0 },
    { day: 'Wed', present: 1, absent: 0 },
    { day: 'Thu', present: 1, absent: 0 },
    { day: 'Fri', present: 1, absent: 0 },
    { day: 'Sat', present: 0, absent: 0 },
  ];

  const subjectPerformance = [
    { subject: 'Mathematics', score: 92 },
    { subject: 'Science', score: 88 },
    { subject: 'English', score: 85 },
    { subject: 'History', score: 95 },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'submitted': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'overdue': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-orange-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getSubjectGradient = (subject) => {
    switch (subject) {
      case 'Mathematics': return 'bg-gradient-to-br from-blue-500 to-blue-600';
      case 'Science': return 'bg-gradient-to-br from-green-500 to-emerald-600';
      case 'English': return 'bg-gradient-to-br from-purple-500 to-indigo-600';
      case 'History': return 'bg-gradient-to-br from-amber-500 to-orange-600';
      case 'Art': return 'bg-gradient-to-br from-pink-500 to-rose-600';
      case 'Music': return 'bg-gradient-to-br from-cyan-500 to-teal-600';
      case 'PE': return 'bg-gradient-to-br from-lime-500 to-green-600';
      default: return 'bg-gradient-to-br from-gray-500 to-gray-600';
    }
  };

  const summaryStats = [
    { label: 'Attendance', value: `${studentData.attendancePercentage}%`, icon: CheckCircle, color: 'from-green-500 to-emerald-600', change: '+2.1%' },
    { label: 'Current Grade', value: studentData.currentGrade, icon: Award, color: 'from-blue-500 to-indigo-600', change: '+0.3' },
    { label: 'GPA', value: studentData.gpa, icon: TrendingUp, color: 'from-purple-500 to-indigo-600', change: '+0.1' },
    { label: 'Assignments', value: assignments.filter(a => a.status === 'pending').length, icon: FileText, color: 'from-amber-500 to-orange-600', change: '-1' },
  ];

  return (
    <div className="flex min-h-screen max-h-screen overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Sidebar */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-48 bg-white shadow-lg flex flex-col h-screen"
      >
        <div className="p-3 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="relative">
              <img 
                src={studentAvatar} 
                alt="Student Avatar" 
                className="w-8 h-8 rounded-md object-cover shadow-md cursor-pointer"
                onClick={() => setShowAvatarModal(true)}
              />
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border border-white"></div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1">
                <AttendSmartLogo size="xs" />
                <span className="text-xs font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent truncate block">
                  Smart Attendance
                </span>
              </div>
              <p className="text-xs text-gray-500 truncate">{studentData.class}</p>
              <p className="text-xs font-medium text-gray-700 truncate">{studentData.name}</p>
              <p className="text-xs text-gray-500 truncate">Roll #{studentData.rollNumber}</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-3 pt-0 space-y-0.5 overflow-y-auto">
          {[
            { id: 'home', icon: Home, label: 'Dashboard Home' },
            { id: 'assignments', icon: FileText, label: 'Assignments' },
            { id: 'grades', icon: Award, label: 'Grades' },
            { id: 'notices', icon: AlertCircle, label: 'Important Notices' },
            { id: 'settings', icon: Settings, label: 'Settings' },
          ].map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-2 px-2.5 py-2 rounded-md transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md shadow-blue-500/20'
                  : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              <tab.icon className="w-3.5 h-3.5" />
              <span className="font-medium text-xs">{tab.label}</span>
            </motion.button>
          ))}
        </nav>

        <div className="p-3 border-t border-gray-100 space-y-1">
          <button 
            onClick={() => setShowAvatarModal(true)}
            className="w-full flex items-center gap-2 px-2.5 py-2 rounded-md text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all"
          >
            <User className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="font-medium text-xs whitespace-nowrap overflow-hidden text-ellipsis">Change Avatar</span>
          </button>
          <button className="w-full flex items-center gap-2 px-2.5 py-2 rounded-md text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all">
            <LogOut className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="font-medium text-xs whitespace-nowrap overflow-hidden text-ellipsis">Logout</span>
          </button>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto overscroll-contain flex flex-col h-screen">
        {/* Ultra Modern Header */}
        <div className="flex-shrink-0">
          <UltraModernHeader 
            dashboardTitle="Student Dashboard"
            userType="Student"
            userName={studentData.name}
            userRole={`${studentData.class} - Roll #${studentData.rollNumber}`}
            onLogout={() => console.log('Logout clicked')}
          />
        </div>

        {/* Dashboard Content */}
        <div className="p-4 flex-grow overflow-y-auto overscroll-contain">
          {/* Home Tab */}
          {activeTab === 'home' && (
            <div>
              {/* Welcome Banner */}
              <div className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 rounded-lg p-3 mb-3 shadow-sm backdrop-blur-sm border border-white/20 relative overflow-hidden">
                <div className="relative z-10 flex items-center gap-3">
                  <div className="relative">
                    <img 
                      src={studentAvatar} 
                      alt="Student Avatar" 
                      className="w-14 h-14 rounded-full object-cover shadow-md border-2 border-white/30 cursor-pointer"
                      onClick={() => setShowAvatarModal(true)}
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white mb-1">
                      Welcome back, {studentData.name.split(' ')[0]}! 👋
                    </h2>
                    <p className="text-blue-100 text-[10px] mb-2">
                      You have {assignments.filter(a => a.status === 'pending').length} pending assignments and {messages.filter(m => m.unread).length} unread messages
                    </p>
                    <div className="flex items-center gap-1.5 text-white">
                      <div className="flex items-center gap-1 bg-white/10 rounded-full px-2 py-0.5 backdrop-blur-sm border border-white/20">
                        <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                        <span className="text-[9px]">{studentData.presentDays} days present</span>
                      </div>
                      <div className="flex items-center gap-1 bg-white/10 rounded-full px-2 py-0.5 backdrop-blur-sm border border-white/20">
                        <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                        <span className="text-[9px]">{studentData.attendancePercentage}% attendance</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 mb-4">
                {summaryStats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  
                  return (
                    <motion.div 
                      key={index}
                      whileHover={{ y: -1 }}
                      className={`bg-gradient-to-br ${stat.color} rounded-lg p-2 shadow-sm border border-white/10 backdrop-blur-sm hover:shadow-md transition-all duration-300 relative overflow-hidden`}
                    >
                      <div className="flex items-center justify-between mb-1 relative z-10">
                        <div className="w-6 h-6 bg-white/20 rounded-md flex items-center justify-center border border-white/20">
                          <IconComponent className="w-3 h-3 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-white">{stat.value}</div>
                          <div className="text-[8px] text-white/70">{stat.label}</div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-3">
                {/* Upcoming Assignments */}
                <div className="bg-white rounded-md p-3 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-[10px] font-bold text-gray-900">Upcoming Assignments</h3>
                    <button className="text-[9px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-2">
                    {assignments.slice(0, 3).map((assignment) => (
                      <div key={assignment.id} className="flex items-center gap-2 p-2 rounded-md border border-gray-100 hover:bg-gray-50 transition-colors">
                        <div className={`w-2 h-2 rounded-full ${getPriorityColor(assignment.priority)}`}></div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-[9.5px] font-medium text-gray-900 truncate">{assignment.title}</h4>
                          <p className="text-[9px] text-gray-500">{assignment.subject} • Due {assignment.dueDisplay}</p>
                        </div>
                        <span className={`text-[8px] px-1.5 py-0.5 rounded-full ${getStatusColor(assignment.status)}`}>
                          {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Upcoming Tests */}
                <div className="bg-white rounded-md p-3 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-[10px] font-bold text-gray-900">Upcoming Tests</h3>
                    <button className="text-[9px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-2">
                    {upcomingTests.slice(0, 3).map((test) => (
                      <div key={test.id} className="flex items-center gap-2 p-2 rounded-md border border-gray-100 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center justify-center w-6 h-6 rounded-md bg-gradient-to-br from-amber-500 to-orange-500 text-white">
                          <BookOpen className="w-3 h-3" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-[9.5px] font-medium text-gray-900 truncate">{test.topic}</h4>
                          <p className="text-[9px] text-gray-500">{test.subject} • {test.dateDisplay} at {test.time}</p>
                        </div>
                        <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-800">
                          {test.type}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Upcoming Assignments and Tests */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                {/* Upcoming Assignments */}
                <div className="bg-white rounded-md p-3 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-[10px] font-bold text-gray-900">Upcoming Assignments</h3>
                    <button className="text-[9px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-2">
                    {assignments.slice(0, 3).map((assignment) => (
                      <div key={assignment.id} className="flex items-center gap-2 p-2 rounded-md border border-gray-100 hover:bg-gray-50 transition-colors">
                        <div className={`w-2 h-2 rounded-full ${getPriorityColor(assignment.priority)}`}></div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-[9.5px] font-medium text-gray-900 truncate">{assignment.title}</h4>
                          <p className="text-[9px] text-gray-500">{assignment.subject} • Due {assignment.dueDisplay}</p>
                        </div>
                        <span className={`text-[8px] px-1.5 py-0.5 rounded-full ${getStatusColor(assignment.status)}`}>
                          {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Upcoming Tests */}
                <div className="bg-white rounded-md p-3 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-[10px] font-bold text-gray-900">Upcoming Tests</h3>
                    <button className="text-[9px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-2">
                    {upcomingTests.slice(0, 3).map((test) => (
                      <div key={test.id} className="flex items-center gap-2 p-2 rounded-md border border-gray-100 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center justify-center w-6 h-6 rounded-md bg-gradient-to-br from-amber-500 to-orange-500 text-white">
                          <BookOpen className="w-3 h-3" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-[9.5px] font-medium text-gray-900 truncate">{test.topic}</h4>
                          <p className="text-[9px] text-gray-500">{test.subject} • {test.dateDisplay} at {test.time}</p>
                        </div>
                        <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-800">
                          {test.type}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Assignments Tab */}
          {activeTab === 'assignments' && (
            <div>
              {/* Header Row Above Assignment Cards */}
              <div className="flex items-center justify-between mb-3 p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-md">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-white" />
                  <div>
                    <h3 className="text-sm font-bold text-white">Assignment Overview</h3>
                    <p className="text-xs text-blue-100">Summary of your assignment status</p>
                  </div>
                </div>
                {/* Performance Circle */}
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12">
                    <svg className="w-12 h-12" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#ffffff20"
                        strokeWidth="2"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="2"
                        strokeDasharray="85, 100"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-bold text-white">85%</span>
                    </div>
                  </div>
                  <div className="text-xs text-blue-100">On Track</div>
                </div>
                <div className="text-xs text-blue-100">Last updated: Today</div>
              </div>
              
              {/* Single Horizontal Row with All Assignment Information */}
              <div className="grid grid-cols-4 gap-2 mb-3">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-md p-3 shadow-sm border border-white/10 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-12 h-12 bg-white/5 rounded-full -mt-6 -mr-6"></div>
                  <div className="absolute bottom-0 left-0 w-10 h-10 bg-white/10 rounded-full -mb-5 -ml-5"></div>
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-white/20 rounded-md flex items-center justify-center border border-white/20">
                        <FileText className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <div className="text-[8px] text-white/80">Total Assignments</div>
                        <div className="text-lg font-bold text-white">{assignments.length}</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-md p-3 shadow-sm border border-white/10 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-12 h-12 bg-white/5 rounded-full -mt-6 -mr-6"></div>
                  <div className="absolute bottom-0 left-0 w-10 h-10 bg-white/10 rounded-full -mb-5 -ml-5"></div>
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-white/20 rounded-md flex items-center justify-center border border-white/20">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <div className="text-[8px] text-white/80">Submitted</div>
                        <div className="text-lg font-bold text-white">{assignments.filter(a => a.status === 'submitted').length}</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-md p-3 shadow-sm border border-white/10 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-12 h-12 bg-white/5 rounded-full -mt-6 -mr-6"></div>
                  <div className="absolute bottom-0 left-0 w-10 h-10 bg-white/10 rounded-full -mb-5 -ml-5"></div>
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-white/20 rounded-md flex items-center justify-center border border-white/20">
                        <Clock className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <div className="text-[8px] text-white/80">Pending</div>
                        <div className="text-lg font-bold text-white">{assignments.filter(a => a.status === 'pending').length}</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-red-500 to-rose-600 rounded-md p-3 shadow-sm border border-white/10 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-12 h-12 bg-white/5 rounded-full -mt-6 -mr-6"></div>
                  <div className="absolute bottom-0 left-0 w-10 h-10 bg-white/10 rounded-full -mb-5 -ml-5"></div>
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-white/20 rounded-md flex items-center justify-center border border-white/20">
                        <AlertCircle className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <div className="text-[8px] text-white/80">Overdue</div>
                        <div className="text-lg font-bold text-white">{assignments.filter(a => a.due < new Date().toISOString().split('T')[0]).length}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-[11.5px] font-bold text-gray-900">My Assignments</h2>
                <div className="flex gap-1.5">
                  <button className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-gray-100 to-gray-200 border border-gray-200 text-gray-700 rounded hover:from-gray-200 hover:to-gray-300 transition-all shadow-sm hover:shadow text-[9px]">
                    <Filter className="w-2.5 h-2.5" />
                    Filter
                  </button>
                  <button className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded hover:from-purple-600 hover:to-pink-700 transition-all shadow-sm hover:shadow text-[9px]">
                    <Download className="w-2.5 h-2.5" />
                    Export
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-md p-2 shadow-sm border border-gray-100">
                <div className="overflow-x-auto">
                  <table className="w-full text-[9px]">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-1.5 px-2 font-medium text-gray-500">Assignment</th>
                        <th className="text-left py-1.5 px-2 font-medium text-gray-500">Subject</th>
                        <th className="text-left py-1.5 px-2 font-medium text-gray-500">Due Date</th>
                        <th className="text-left py-1.5 px-2 font-medium text-gray-500">Status</th>
                        <th className="text-left py-1.5 px-2 font-medium text-gray-500">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {assignments.map((assignment) => (
                        <tr key={assignment.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-1.5 px-2 font-medium text-gray-900">{assignment.title}</td>
                          <td className="py-1.5 px-2 text-gray-600">{assignment.subject}</td>
                          <td className="py-1.5 px-2 text-gray-600">{assignment.dueDisplay}</td>
                          <td className="py-1.5 px-2">
                            <span className={`text-[8px] px-1.5 py-0.5 rounded-full ${getStatusColor(assignment.status)}`}>
                              {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                            </span>
                          </td>
                          <td className="py-1.5 px-2">
                            <button className="text-[9px] text-blue-600 hover:text-blue-700 font-medium">
                              View Details
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Grades Tab */}
          {activeTab === 'grades' && (
            <div>
              {/* Single Performance Row Above Cards */}
              <div className="flex items-center justify-between mb-3 p-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-md">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-white" />
                  <div>
                    <h3 className="text-sm font-bold text-white">Grade Performance Overview</h3>
                    <p className="text-xs text-purple-100">Comprehensive academic performance metrics</p>
                  </div>
                </div>
                {/* Performance Circle */}
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12">
                    <svg className="w-12 h-12" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#ffffff20"
                        strokeWidth="2"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="2"
                        strokeDasharray="75, 100"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-bold text-white">75%</span>
                    </div>
                  </div>
                  <div className="text-xs text-purple-100">Performance</div>
                </div>
                <div className="text-xs text-purple-100">Last updated: Today</div>
              </div>
              
              {/* All 4 Cards in One Row */}
              <div className="grid grid-cols-4 gap-3 mb-3">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-md p-4 shadow-sm border border-white/10 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-full -mt-8 -mr-8"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 bg-white/10 rounded-full -mb-6 -ml-6"></div>
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-md flex items-center justify-center border border-white/20">
                        <BookOpen className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-[10px] text-white/80 font-medium">Total Subjects</div>
                        <div className="text-xl font-bold text-white">{recentGrades.length}</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-md p-4 shadow-sm border border-white/10 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-full -mt-8 -mr-8"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 bg-white/10 rounded-full -mb-6 -ml-6"></div>
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-md flex items-center justify-center border border-white/20">
                        <TrendingUp className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-[10px] text-white/80 font-medium">Average GPA</div>
                        <div className="text-xl font-bold text-white">{studentData.gpa}</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-md p-4 shadow-sm border border-white/10 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-full -mt-8 -mr-8"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 bg-white/10 rounded-full -mb-6 -ml-6"></div>
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-md flex items-center justify-center border border-white/20">
                        <Award className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-[10px] text-white/80 font-medium">Current Grade</div>
                        <div className="text-xl font-bold text-white">{studentData.currentGrade}</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-md p-4 shadow-sm border border-white/10 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-full -mt-8 -mr-8"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 bg-white/10 rounded-full -mb-6 -ml-6"></div>
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-md flex items-center justify-center border border-white/20">
                        <Target className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-[10px] text-white/80 font-medium">Average Score</div>
                        <div className="text-xl font-bold text-white">{Math.round((recentGrades.reduce((acc, grade) => {
                          const [score, total] = grade.score.split('/').map(Number);
                          return acc + (score / total) * 100;
                        }, 0) / recentGrades.length))}%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-[11.5px] font-bold text-gray-900">My Grades</h2>
                <div className="flex gap-1.5">
                  <button className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-gray-100 to-gray-200 border border-gray-200 text-gray-700 rounded hover:from-gray-200 hover:to-gray-300 transition-all shadow-sm hover:shadow text-[9px]">
                    <Filter className="w-2.5 h-2.5" />
                    Filter
                  </button>
                  <button className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded hover:from-purple-600 hover:to-pink-700 transition-all shadow-sm hover:shadow text-[9px]">
                    <Download className="w-2.5 h-2.5" />
                    Export
                  </button>
                </div>
              </div>



              {/* Subject-wise Grades with More Details */}
              <div className="bg-white rounded-md p-3 shadow-sm border border-gray-100 mb-3">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[10px] font-bold text-gray-900">Subject-wise Performance</h3>
                  <button className="text-[9px] text-blue-600 hover:text-blue-700 font-medium">View Analytics</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {recentGrades.map((grade, index) => {
                    // Calculate percentage from score
                    const [score, total] = grade.score.split('/').map(Number);
                    const percentage = Math.round((score / total) * 100);
                    
                    // Determine color based on grade
                    const getGradeColor = (gradeLetter) => {
                      if (gradeLetter === 'A' || gradeLetter === 'A+') return 'from-green-400 to-green-600';
                      if (gradeLetter === 'A-' || gradeLetter === 'B+') return 'from-blue-400 to-blue-600';
                      if (gradeLetter === 'B' || gradeLetter === 'B-') return 'from-yellow-400 to-yellow-600';
                      return 'from-red-400 to-red-600';
                    };
                    
                    return (
                      <div key={index} className="border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="text-[10px] font-bold text-gray-900">{grade.subject}</h4>
                            <p className="text-[9px] text-gray-500 truncate max-w-[120px]">{grade.assignment}</p>
                          </div>
                          <div className={`px-2 py-1 rounded-full text-[9px] font-bold text-white bg-gradient-to-r ${getGradeColor(grade.grade)}`}>
                            {grade.grade}
                          </div>
                        </div>
                        
                        <div className="mb-2">
                          <div className="flex justify-between text-[9px] mb-1">
                            <span className="text-gray-600">Score</span>
                            <span className="font-medium text-gray-900">{grade.score} ({percentage}%)</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div 
                              className={`h-1.5 rounded-full ${
                                percentage >= 90 ? 'bg-gradient-to-r from-green-400 to-green-600' : 
                                percentage >= 80 ? 'bg-gradient-to-r from-blue-400 to-blue-600' : 
                                percentage >= 70 ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' : 
                                'bg-gradient-to-r from-red-400 to-red-600'
                              }`} 
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                        </div>
                        
                        <div className="flex justify-between text-[9px] text-gray-500">
                          <span>{grade.date}</span>
                          <span>{percentage >= 80 ? 'Excellent' : percentage >= 70 ? 'Good' : 'Needs Improvement'}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Detailed Grade Report */}
              <div className="bg-white rounded-md p-3 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[10px] font-bold text-gray-900">Detailed Grade Report</h3>
                  <button className="text-[9px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-[9px]">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 px-2 font-medium text-gray-500">Subject</th>
                        <th className="text-left py-2 px-2 font-medium text-gray-500">Assignment/Test</th>
                        <th className="text-left py-2 px-2 font-medium text-gray-500">Date</th>
                        <th className="text-left py-2 px-2 font-medium text-gray-500">Score</th>
                        <th className="text-left py-2 px-2 font-medium text-gray-500">Grade</th>
                        <th className="text-left py-2 px-2 font-medium text-gray-500">Class Avg</th>
                        <th className="text-left py-2 px-2 font-medium text-gray-500">Rank</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentGrades.map((grade, index) => (
                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-2 px-2 font-medium text-gray-900">{grade.subject}</td>
                          <td className="py-2 px-2 text-gray-600">{grade.assignment}</td>
                          <td className="py-2 px-2 text-gray-600">{grade.date}</td>
                          <td className="py-2 px-2 text-gray-600">{grade.score}</td>
                          <td className="py-2 px-2">
                            <span className={`text-[8px] px-1.5 py-0.5 rounded-full font-medium ${
                              grade.grade.startsWith('A') ? 'bg-green-100 text-green-800' : 
                              grade.grade.startsWith('B') ? 'bg-blue-100 text-blue-800' : 
                              grade.grade.startsWith('C') ? 'bg-yellow-100 text-yellow-800' : 
                              'bg-red-100 text-red-800'
                            }`}>
                              {grade.grade}
                            </span>
                          </td>
                          <td className="py-2 px-2 text-gray-600">{Math.round(Math.random() * 20 + 75)}/{grade.score.split('/')[1]}</td>
                          <td className="py-2 px-2 text-gray-600">{Math.floor(Math.random() * 5) + 1}/{Math.floor(Math.random() * 10) + 15}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Important Notices Tab */}
          {activeTab === 'notices' && (
            <div>
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-[11.5px] font-bold text-gray-900">Notice Board</h2>
              </div>

              {/* Notice Board - Two Panel Layout */}
              <div className="bg-white rounded-lg shadow-xs border border-gray-100 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 h-[400px]">
                  {/* Left Panel - Notices List */}
                  <div className="lg:col-span-1 border-r border-gray-200 flex flex-col">
                    {/* Notices List */}
                    <div className="flex-1 overflow-y-auto">
                      {/* Notice Item 1 - Selected */}
                      <div className="p-2.5 rounded-md border border-blue-300 bg-blue-50 cursor-pointer hover:bg-blue-100 transition-colors relative overflow-hidden">
                        <div className="relative z-10">
                          <h3 className="font-bold text-gray-900 text-[10.5px] mb-1">Science Fair Registration</h3>
                          <p className="text-[9.5px] text-gray-600 mb-1 truncate">Registration for the annual Science Fair is now open...</p>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[9.5px] text-gray-500">Ms. Williams • Apr 10, 2024</span>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            <span className="px-1.5 py-0.5 bg-green-100 text-green-800 text-[9.5px] font-medium rounded-full">Opportunity</span>
                            <span className="px-1.5 py-0.5 bg-blue-100 text-blue-800 text-[9.5px] font-medium rounded-full">Grades 9-12</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Notice Item 2 */}
                      <div className="p-2.5 rounded-md border border-gray-200 bg-white cursor-pointer hover:bg-gray-50 transition-colors relative overflow-hidden">
                        <div className="relative z-10">
                          <h3 className="font-bold text-gray-900 text-[10.5px] mb-1">Mathematics Olympiad Results</h3>
                          <p className="text-[9.5px] text-gray-600 mb-1 truncate">Congratulations to our students who participated in the State Mathematics Olympiad...</p>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[9.5px] text-gray-500">Dr. Sharma • Apr 12, 2024</span>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            <span className="px-1.5 py-0.5 bg-blue-100 text-blue-800 text-[9.5px] font-medium rounded-full">Achievement</span>
                            <span className="px-1.5 py-0.5 bg-purple-100 text-purple-800 text-[9.5px] font-medium rounded-full">Mathematics</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Notice Item 3 */}
                      <div className="p-2.5 rounded-md border border-gray-200 bg-white cursor-pointer hover:bg-gray-50 transition-colors relative overflow-hidden">
                        <div className="relative z-10">
                          <h3 className="font-bold text-gray-900 text-[10.5px] mb-1">Summer Sports Camp Registration</h3>
                          <p className="text-[9.5px] text-gray-600 mb-1 truncate">Registration for the annual Summer Sports Camp is now open for all students...</p>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[9.5px] text-gray-500">Coach Rajiv • Apr 8, 2024</span>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            <span className="px-1.5 py-0.5 bg-amber-100 text-amber-800 text-[9.5px] font-medium rounded-full">Sports</span>
                            <span className="px-1.5 py-0.5 bg-blue-100 text-blue-800 text-[9.5px] font-medium rounded-full">Summer Program</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Notice Item 4 */}
                      <div className="p-2.5 rounded-md border border-gray-200 bg-white cursor-pointer hover:bg-gray-50 transition-colors relative overflow-hidden">
                        <div className="relative z-10">
                          <h3 className="font-bold text-gray-900 text-[10.5px] mb-1">Library Extended Hours</h3>
                          <p className="text-[9.5px] text-gray-600 mb-1 truncate">The school library will have extended hours during exam week...</p>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[9.5px] text-gray-500">Mrs. Brown • Apr 15, 2024</span>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            <span className="px-1.5 py-0.5 bg-indigo-100 text-indigo-800 text-[9.5px] font-medium rounded-full">Library</span>
                            <span className="px-1.5 py-0.5 bg-blue-100 text-blue-800 text-[9.5px] font-medium rounded-full">Exam Week</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Panel - Notice Details */}
                  <div className="lg:col-span-2 flex flex-col">
                    {/* Notice Details */}
                    <div className="flex-1 overflow-y-auto p-5 relative overflow-hidden">
                      <div className="relative z-10 mb-5">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-lg font-bold text-gray-900">Mathematics Olympiad Results</h3>
                          <div className="flex gap-1.5">
                            <button className="p-1.5 rounded-md border border-gray-300 hover:bg-gray-100 transition-colors">
                              <Printer className="w-3.5 h-3.5 text-gray-600" />
                            </button>
                            <button className="p-1.5 rounded-md border border-gray-300 hover:bg-gray-100 transition-colors">
                              <Download className="w-3.5 h-3.5 text-gray-600" />
                            </button>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3 mb-5 text-xs text-gray-600">
                          <div className="flex items-center gap-1.5">
                            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-[9.5px]">
                              DS
                            </div>
                            <span className="text-[0.75rem]">Dr. Sharma (Mathematics Department)</span>
                          </div>
                          <span>•</span>
                          <span className="text-[0.75rem]">April 12, 2024</span>
                          <span>•</span>
                          <span className="px-1.5 py-0.5 bg-blue-100 text-blue-800 text-[9.5px] font-medium rounded-full">Achievement</span>
                          <span className="px-1.5 py-0.5 bg-purple-100 text-purple-800 text-[9.5px] font-medium rounded-full">Mathematics</span>
                        </div>
                        
                        <div className="prose max-w-none text-gray-700 mb-6">
                          <p className="mb-3 text-[0.875rem]">Dear Students, Parents, and Faculty,</p>
                          <p className="mb-3 text-[0.875rem]">We are proud to announce the outstanding results of our students in the State Mathematics Olympiad 2024. Our talented mathematicians have brought laurels to the school through their exceptional performance.</p>
                          
                          <h4 className="font-bold text-gray-900 mb-2 text-[0.875rem]">Top Performers:</h4>
                          <ul className="list-disc pl-4 mb-3 space-y-1.5 text-[0.875rem]">
                            <li>Rohan Mehta (Class 12-A) - Rank 1 (State Level)</li>
                            <li>Priya Patel (Class 11-B) - Rank 3 (State Level)</li>
                            <li>Amit Kumar (Class 10-A) - Rank 5 (State Level)</li>
                            <li>Sneha Gupta (Class 9-B) - Merit Certificate</li>
                          </ul>
                          
                          <h4 className="font-bold text-gray-900 mb-2 text-[0.875rem]">Achievements:</h4>
                          <ul className="list-disc pl-4 mb-3 space-y-1.5 text-[0.875rem]">
                            <li>School awarded "Best Performing Institution" Trophy</li>
                            <li>All participants received certificates of participation</li>
                            <li>Top 3 rank holders qualify for National Mathematics Olympiad</li>
                          </ul>
                          
                          <p className="mb-3 text-[0.875rem]">We congratulate all the participants for their dedication and hard work. Special appreciation goes to our Mathematics faculty who guided and mentored these students throughout their preparation.</p>
                          
                          <p className="mb-3 text-[0.875rem]">The top performers will represent our school at the National Mathematics Olympiad scheduled for June 2024. We wish them the very best for their future endeavors.</p>
                          
                          <p className="text-[0.875rem]">For more information about the results or the upcoming National Olympiad, please contact Dr. Sharma in the Mathematics Department.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-sm font-bold text-gray-900">Settings</h2>
              </div>

              {/* Profile Settings */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[10px] font-bold text-gray-900">Profile Settings</h3>
                  <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">Edit</button>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <img 
                          src={studentAvatar} 
                          alt="Student Avatar" 
                          className="w-10 h-10 rounded-full object-cover shadow-md border-2 border-white/30 cursor-pointer"
                          onClick={() => setShowAvatarModal(true)}
                        />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-[10px]">{profileData.name}</p>
                        <p className="text-[10px] text-gray-500">{profileData.email}</p>
                      </div>
                    </div>
                    <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                      <Edit className="w-3 h-3" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center">
                        <User className="w-2.5 h-2.5 text-gray-500" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-[10px]">Class</p>
                        <p className="text-[10px] text-gray-500">{profileData.class}</p>
                      </div>
                    </div>
                    <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                      <Edit className="w-3 h-3" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center">
                        <BookOpen className="w-2.5 h-2.5 text-gray-500" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-[10px]">Roll Number</p>
                        <p className="text-[10px] text-gray-500">{profileData.rollNumber}</p>
                      </div>
                    </div>
                    <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                      <Edit className="w-3 h-3" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center">
                        <School className="w-2.5 h-2.5 text-gray-500" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-[10px]">School</p>
                        <p className="text-[10px] text-gray-500">{profileData.school}</p>
                      </div>
                    </div>
                    <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                      <Edit className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Notifications Settings */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[10px] font-bold text-gray-900">Notifications Settings</h3>
                  <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">Edit</button>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center">
                        <Bell className="w-2.5 h-2.5 text-gray-500" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-[10px]">Email Notifications</p>
                        <p className="text-[10px] text-gray-500">Receive email notifications for important updates</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center">
                        <Bell className="w-2.5 h-2.5 text-gray-500" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-[10px]">SMS Notifications</p>
                        <p className="text-[10px] text-gray-500">Receive SMS notifications for important updates</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" className="sr-only peer" />
                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center">
                        <Bell className="w-2.5 h-2.5 text-gray-500" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-[10px]">Push Notifications</p>
                        <p className="text-[10px] text-gray-500">Receive push notifications for important updates</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Security Settings */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[10px] font-bold text-gray-900">Security Settings</h3>
                  <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">Edit</button>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center">
                        <Lock className="w-2.5 h-2.5 text-gray-500" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-[10px]">Password</p>
                        <p className="text-[10px] text-gray-500">Change your account password</p>
                      </div>
                    </div>
                    <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                      <Edit className="w-3 h-3" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center">
                        <Lock className="w-2.5 h-2.5 text-gray-500" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-[10px]">Two-Factor Authentication</p>
                        <p className="text-[10px] text-gray-500">Enable two-factor authentication for added security</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" className="sr-only peer" />
                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
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
              <h3 className="text-xl font-bold text-gray-900">Change Avatar</h3>
              <button 
                onClick={() => setShowAvatarModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
                'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
                'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
                'https://api.dicebear.com/7.x/avataaars/svg?seed=Mia',
                'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
                'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex'
              ].map((avatar, index) => (
                <div 
                  key={index} 
                  className="cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => {
                    setStudentAvatar(avatar);
                    setShowAvatarModal(false);
                  }}
                >
                  <img 
                    src={avatar} 
                    alt={`Avatar ${index + 1}`} 
                    className="w-16 h-16 rounded-full object-cover mx-auto"
                  />
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">Click on any avatar to select it</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewStudentDashboard;