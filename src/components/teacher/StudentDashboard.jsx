import React, { useState } from 'react';
import { Calendar, BookOpen, Award, TrendingUp, AlertCircle, Clock, Bell, User, MessageSquare, CheckCircle, FileText, Target, LogOut, Home, Search, ChevronDown, Eye, Download, Printer, Filter, Plus, X, BarChart as BarChartIcon, PieChart as PieChartIcon, LineChart as LineChartIcon, Star, Settings, Edit, RefreshCw } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';
import AttendSmartLogo from '../AttendSmartLogo';
import UltraModernHeader from '../UltraModernHeader';

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [showAssignmentModal, setShowAssignmentModal] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [showTestDetailDrawer, setShowTestDetailDrawer] = useState(false);
  const [selectedTest, setSelectedTest] = useState(null);
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

  const weeklyReport = {
    attendance: { present: 5, absent: 0, late: 0 },
    assignments: { completed: 4, pending: 2 },
    average: "91%"
  };



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

  const getSubjectIcon = (subject) => {
    switch (subject) {
      case 'Mathematics':
        return (
          <svg className="w-3 h-3 text-white transform transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        );
      case 'Science':
        return (
          <svg className="w-3 h-3 text-white transform transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        );
      case 'English':
        return (
          <svg className="w-3 h-3 text-white transform transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case 'History':
        return (
          <svg className="w-3 h-3 text-white transform transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return (
          <svg className="w-3 h-3 text-white transform transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          </svg>
        );
    }
  };

  const getAssignmentIcon = (assignment) => {
    if (assignment.includes('Test') || assignment.includes('Exam')) {
      return (
        <svg className="w-5 h-5 text-white transform transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 00-2-2V5a2 2 0 002-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      );
    } else if (assignment.includes('Essay') || assignment.includes('Report')) {
      return (
        <svg className="w-5 h-5 text-white transform transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      );
    } else if (assignment.includes('Quiz')) {
      return (
        <svg className="w-5 h-5 text-white transform transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    } else {
      return (
        <svg className="w-5 h-5 text-white transform transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      );
    }
  };

  const getStudentAvatar = (name) => {
    // Generate a consistent avatar based on student name
    const seed = name.replace(/\s+/g, '').toLowerCase();
    return `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`;
  };

  const getGradeBadge = (grade) => {
    const isHighGrade = grade.startsWith('A');
    const isTopGrade = grade === 'A+';
    
    return (
      <div className={`relative inline-flex items-center justify-center ${isHighGrade ? 'animate-pulse' : ''}`}>
        <span className={`px-2 py-1 rounded-full text-xs font-medium transform transition-all duration-300 hover:scale-105 ${
          grade.startsWith('A') ? 'bg-gradient-to-r from-green-400 to-green-600 text-white shadow-sm' :
          grade.startsWith('B') ? 'bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-sm' :
          grade.startsWith('C') ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white shadow-sm' :
          'bg-gradient-to-r from-red-400 to-red-600 text-white shadow-sm'
        }`}>
          {grade}
        </span>
        {isTopGrade && (
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full flex items-center justify-center">
            <Star className="w-2 h-2 text-yellow-800 fill-current" />
          </div>
        )}
      </div>
    );
  };

  const getSubjectBgColor = (color) => {
    switch (color) {
      case 'blue': return 'bg-blue-50';
      case 'green': return 'bg-green-50';
      case 'purple': return 'bg-purple-50';
      case 'amber': return 'bg-amber-50';
      case 'pink': return 'bg-pink-50';
      default: return 'bg-gray-50';
    }
  };

  const getSubjectBorderColor = (color) => {
    switch (color) {
      case 'blue': return 'border-blue-500';
      case 'green': return 'border-green-500';
      case 'purple': return 'border-purple-500';
      case 'amber': return 'border-amber-500';
      case 'pink': return 'border-pink-500';
      default: return 'border-gray-500';
    }
  };

  // Summary stats for the dashboard
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
            { id: 'classes', icon: BookOpen, label: 'My Classes' },
            { id: 'assignments', icon: FileText, label: 'Assignments' },
            { id: 'grades', icon: Award, label: 'Grades' },
            { id: 'notices', icon: AlertCircle, label: 'Important Notices' },
            { id: 'avatar', icon: User, label: 'Change Avatar' },
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
                {/* Animated background elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                  <div className="absolute top-6 left-6 w-48 h-48 bg-white rounded-full mix-blend-overlay"></div>
                  <div className="absolute bottom-6 right-6 w-32 h-32 bg-white rounded-full mix-blend-overlay"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-sm rotate-45 mix-blend-overlay"></div>
                </div>
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
                      {/* Geometric elements */}
                      <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-full -mt-8 -mr-8"></div>
                      <div className="absolute bottom-0 left-0 w-12 h-12 bg-white/10 rounded-full -mb-6 -ml-6"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white/5 rounded-sm rotate-45"></div>
                      <div className="flex items-center justify-between mb-1 relative z-10">
                        <div className="w-6 h-6 bg-white/20 rounded-md flex items-center justify-center border border-white/20">
                          <IconComponent className="w-3 h-3 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-white">{stat.value}</div>
                          <div className="text-[8px] text-white/70">{stat.label}</div>
                        </div>
                      </div>
                      <div className="text-[8px] text-white/60 font-medium relative z-10">{stat.change} from last month</div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Upcoming Tests and Recent Assignments */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Upcoming Tests */}
                <div className="bg-white rounded-lg p-3 shadow-xs border border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-[10px] font-bold text-gray-900">Upcoming Tests</h2>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {upcomingTests.slice(0, 3).map((test) => (
                      <motion.div
                        key={test.id}
                        whileHover={{ x: 2 }}
                        className="p-2 rounded-md border border-gray-200 hover:border-blue-300 transition-all duration-300 cursor-pointer relative overflow-hidden"
                        onClick={() => {
                          setSelectedTest(test);
                          setShowTestDetailDrawer(true);
                        }}
                      >
                        {/* Geometric background elements */}
                        <div className="absolute top-0 right-0 w-12 h-12 bg-blue-500/5 rounded-full -mt-6 -mr-6"></div>
                        <div className="absolute bottom-0 left-0 w-8 h-8 bg-indigo-500/5 rounded-full -mb-4 -ml-4"></div>
                        <div className="relative z-10">
                          <div className="flex items-start justify-between">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-1.5 mb-1.5">
                                <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(test.subject)}`}>
                                  {getSubjectIcon(test.subject)}
                                </div>
                                <div>
                                  <h3 className="font-medium text-gray-900 text-[10px]">{test.subject}</h3>
                                  <p className="text-[10px] text-gray-500">{test.topic}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-1.5 text-[9px] text-gray-500">
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-2.5 h-2.5" />
                                  <span>{test.dateDisplay}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="w-2.5 h-2.5" />
                                  <span>{test.time}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <FileText className="w-2.5 h-2.5" />
                                  <span>{test.duration}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-end">
                              <span className="px-1.5 py-0.5 bg-blue-100 text-blue-800 text-[10px] font-medium rounded-full">
                                {test.type}
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Recent Assignments */}
                <div className="bg-white rounded-lg p-3 shadow-xs border border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-[10px] font-bold text-gray-900">Recent Assignments</h2>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {assignments.slice(0, 3).map((assignment) => (
                      <motion.div
                        key={assignment.id}
                        whileHover={{ x: 2 }}
                        className="p-2 rounded-md border border-gray-200 hover:border-blue-300 transition-all duration-300 cursor-pointer group relative overflow-hidden"
                        onClick={() => {
                          setSelectedAssignment(assignment);
                          setShowAssignmentModal(true);
                        }}
                      >
                        {/* Geometric background elements */}
                        <div className="absolute top-0 right-0 w-12 h-12 bg-purple-500/5 rounded-full -mt-6 -mr-6"></div>
                        <div className="absolute bottom-0 left-0 w-8 h-8 bg-indigo-500/5 rounded-full -mb-4 -ml-4"></div>
                        <div className="relative z-10">
                          <div className="flex items-start justify-between">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-1.5 mb-1.5">
                                <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(assignment.subject)}`}>
                                  {getAssignmentIcon(assignment.title)}
                                </div>
                                <div>
                                  <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors text-[10px]">{assignment.subject}</h3>
                                  <p className="text-[10px] text-gray-500">{assignment.title}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-1.5 text-[9px] text-gray-500">
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-2.5 h-2.5" />
                                  <span>Due: {assignment.dueDisplay}</span>
                                </div>
                                <div className={`px-1.5 py-0.5 rounded-full text-[9px] font-medium ${getStatusColor(assignment.status)}`}>
                                  {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-end">
                              <div className={`w-1.5 h-1.5 rounded-full ${getPriorityColor(assignment.priority)}`}></div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Assignments Tab */}
          {activeTab === 'assignments' && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-sm font-bold text-gray-900">My Assignments</h2>
              </div>

              {/* Assignment Status Summary */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-3 shadow-sm border border-blue-200/30 backdrop-blur-sm text-white relative overflow-hidden">
                  {/* Geometric elements */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -mt-8 -mr-8"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 bg-white/15 rounded-full -mb-6 -ml-6"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white/10 rounded-sm rotate-45"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-blue-100 text-[10px]">Total Assignments</p>
                        <p className="text-lg font-bold mt-1">{assignments.length}</p>
                      </div>
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                        <FileText className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg p-3 shadow-sm border border-amber-200/30 backdrop-blur-sm text-white relative overflow-hidden">
                  {/* Geometric elements */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -mt-8 -mr-8"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 bg-white/15 rounded-full -mb-6 -ml-6"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white/10 rounded-sm rotate-45"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-amber-100 text-[10px]">Pending</p>
                        <p className="text-lg font-bold mt-1">{assignments.filter(a => a.status === 'pending').length}</p>
                      </div>
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg p-3 shadow-sm border border-green-200/30 backdrop-blur-sm text-white relative overflow-hidden">
                  {/* Geometric elements */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -mt-8 -mr-8"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 bg-white/15 rounded-full -mb-6 -ml-6"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white/10 rounded-sm rotate-45"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-green-100 text-[10px]">Submitted</p>
                        <p className="text-lg font-bold mt-1">{assignments.filter(a => a.status === 'submitted').length}</p>
                      </div>
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg p-3 shadow-sm border border-purple-200/30 backdrop-blur-sm text-white relative overflow-hidden">
                  {/* Geometric elements */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -mt-8 -mr-8"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 bg-white/15 rounded-full -mb-6 -ml-6"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white/10 rounded-sm rotate-45"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-purple-100 text-[10px]">Graded</p>
                        <p className="text-lg font-bold mt-1">{recentGrades.length}</p>
                      </div>
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Assignments List */}
              <div className="bg-white rounded-xl p-4 shadow-xs border border-gray-100">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 px-3 font-medium text-gray-500 text-[10px]">Assignment</th>
                        <th className="text-left py-2 px-3 font-medium text-gray-500 text-[10px]">Subject</th>
                        <th className="text-left py-2 px-3 font-medium text-gray-500 text-[10px]">Due Date</th>
                        <th className="text-left py-2 px-3 font-medium text-gray-500 text-[10px]">Status</th>
                        <th className="text-left py-2 px-3 font-medium text-gray-500 text-[10px]">Priority</th>
                        <th className="text-left py-2 px-3 font-medium text-gray-500 text-[10px]">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {assignments.map((assignment) => (
                        <tr key={assignment.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-3">
                            <div className="flex items-center gap-2">
                              <div className={`w-8 h-8 rounded-md flex items-center justify-center ${getSubjectGradient(assignment.subject)}`}>
                                {getAssignmentIcon(assignment.title)}
                              </div>
                              <div>
                                <p className="font-medium text-gray-900 text-[10px]">{assignment.title}</p>
                                <p className="text-[10px] text-gray-500">{assignment.subject}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-3 text-gray-600 text-[10px]">{assignment.subject}</td>
                          <td className="py-3 px-3 text-gray-600 text-[10px]">{assignment.dueDisplay}</td>
                          <td className="py-3 px-3">
                            <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-medium ${getStatusColor(assignment.status)}`}>
                              {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                            </span>
                          </td>
                          <td className="py-3 px-3">
                            <div className="flex items-center gap-1">
                              <div className={`w-1.5 h-1.5 rounded-full ${getPriorityColor(assignment.priority)}`}></div>
                              <span className="text-[10px] text-gray-600 capitalize">{assignment.priority}</span>
                            </div>
                          </td>
                          <td className="py-3 px-3">
                            <div className="flex items-center gap-1">
                              <button 
                                className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                                onClick={() => {
                                  setSelectedAssignment(assignment);
                                  setShowAssignmentModal(true);
                                }}
                              >
                                <Eye className="w-3 h-3" />
                              </button>
                              <button className="p-1.5 text-gray-500 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors">
                                <Download className="w-3 h-3" />
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

          {/* Grades Tab */}
          {activeTab === 'grades' && (
            <div>
              <div className="flex justify-between items-center mb-1">
                <h2 className="text-sm font-bold text-gray-900">My Grades</h2>
              </div>

              {/* Overall Performance */}
              <div className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 rounded-md p-2 mb-4 shadow-xs backdrop-blur-sm border border-white/20 text-white">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-[10px] font-bold mb-1">Overall Performance</h3>
                    <p className="text-blue-100 mb-2 text-[10px]">Your academic progress this semester</p>
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="text-[10px] text-blue-200">Current GPA</p>
                        <p className="text-lg font-bold mt-1">{studentData.gpa}</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-blue-200">Attendance</p>
                        <p className="text-lg font-bold mt-1">{studentData.attendancePercentage}%</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-blue-200">Grade Level</p>
                        <p className="text-lg font-bold mt-1">{studentData.currentGrade}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative w-24 h-24">
                      <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="8" />
                        <circle 
                          cx="50" 
                          cy="50" 
                          r="45" 
                          fill="none" 
                          stroke="white" 
                          strokeWidth="8" 
                          strokeDasharray={`${studentData.attendancePercentage} 100`}
                          strokeDashoffset="25"
                        />
                      </svg>
                    </div>
                    <p className="text-[10px] text-blue-200 mt-2">Attendance</p>
                  </div>
                </div>
              </div>

              {/* Subject-wise Performance */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {subjectPerformance.map((subject) => (
                  <div key={subject.subject} className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 relative overflow-hidden">
                    {/* Geometric elements */}
                    <div className="absolute top-0 right-0 w-8 h-8 bg-blue-500/5 rounded-full -mt-4 -mr-4"></div>
                    <div className="absolute bottom-0 left-0 w-6 h-6 bg-indigo-500/5 rounded-full -mb-3 -ml-3"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-1.5">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(subject.subject)}`}>
                            {getSubjectIcon(subject.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{subject.subject}</h3>
                          </div>
                        </div>
                        <div className="text-[10px] text-gray-500">
                          {subject.score}%
                        </div>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500" style={{ width: `${subject.score}%` }}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent Grades */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-purple-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white/5 rounded-sm rotate-45"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-[10px] font-bold">Recent Grades</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-2">
                    {recentGrades.map((grade) => (
                      <div key={grade.subject} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(grade.subject)}`}>
                            {getSubjectIcon(grade.subject)}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 text-[10px]">{grade.subject}</p>
                            <p className="text-[10px] text-gray-500">{grade.assignment}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{grade.score}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{grade.date}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-purple-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Recent Grades</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {recentGrades.map((grade) => (
                      <div key={grade.subject} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(grade.subject)}`}>
                            {getSubjectIcon(grade.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{grade.subject}</h3>
                            <p className="text-[10px] text-gray-500">{grade.assignment}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{grade.score}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{grade.date}</span>
                          </div>
                        </div>
                      </div>
                    ))}
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
                      <input type="checkbox" value="" className="sr-only peer" />
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

              {/* Data Privacy Settings */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[10px] font-bold text-gray-900">Data Privacy Settings</h3>
                  <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">Edit</button>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center">
                        <Shield className="w-2.5 h-2.5 text-gray-500" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-[10px]">Data Sharing</p>
                        <p className="text-[10px] text-gray-500">Control who can see your data</p>
                      </div>
                    </div>
                    <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                      <Edit className="w-3 h-3" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center">
                        <Shield className="w-2.5 h-2.5 text-gray-500" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-[10px]">Data Deletion</p>
                        <p className="text-[10px] text-gray-500">Request to delete your data</p>
                      </div>
                    </div>
                    <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                      <Edit className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Account Settings */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[10px] font-bold text-gray-900">Account Settings</h3>
                  <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">Edit</button>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center">
                        <User className="w-2.5 h-2.5 text-gray-500" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-[10px]">Account Type</p>
                        <p className="text-[10px] text-gray-500">Change your account type</p>
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
                        <p className="font-medium text-gray-900 text-[10px]">Account Deletion</p>
                        <p className="text-[10px] text-gray-500">Request to delete your account</p>
                      </div>
                    </div>
                    <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                      <Edit className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>
      </div>
      
      {/* Avatar Modal */}
      <AnimatePresence>
        {showAvatarModal && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            onClick={() => setShowAvatarModal(false)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg p-4 shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Change Avatar</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowAvatarModal(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Assignment Modal */}
      <AnimatePresence>
        {showAssignmentModal && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            onClick={() => setShowAssignmentModal(false)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg p-4 shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Assignment Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowAssignmentModal(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Detail Drawer */}
      <AnimatePresence>
        {showTestDetailDrawer && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white rounded-l-lg shadow-lg w-full max-w-md"
            onClick={() => setShowTestDetailDrawer(false)}
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-900">Test Details</h2>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setShowTestDetailDrawer(false)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={studentAvatar} 
                  alt="Student Avatar" 
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white/30"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                  <Edit className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                  <CheckCircle className="w-3 h-3" />
                </button>
              </div>
              {/* Teacher Feedback */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mt-4 relative overflow-hidden">
                {/* Geometric elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-500/5 rounded-full -mb-6 -ml-6"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[10px] font-bold text-gray-900">Teacher Feedback</h3>
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
                  </div>
                  <div className="space-y-3">
                    {teacherFeedback.map((feedback) => (
                      <div key={feedback.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${getSubjectGradient(feedback.subject)}`}>
                            {getSubjectIcon(feedback.subject)}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-[10px]">{feedback.teacher}</h3>
                            <p className="text-[10px] text-gray-500">{feedback.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            <span className="text-[9px]">{feedback.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <span className="text-[9px]">{feedback.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
                <div className="grid grid-cols-1 lg:grid-cols-3 h-[500px]">
                  {/* Left Panel - Notices List */}
                  <div className="lg:col-span-1 border-r border-gray-200 flex flex-col">
                    {/* Notices List */}
                    <div className="flex-1 overflow-y-auto">
                      <div className="p-1 space-y-1">
                        {/* Notice Item 1 - Selected */}
                        <div className="p-2.5 rounded-md border border-blue-300 bg-blue-50 cursor-pointer hover:bg-blue-100 transition-colors relative overflow-hidden">
                          {/* Geometric elements */}
                          <div className="absolute top-0 right-0 w-10 h-10 bg-blue-500/10 rounded-full -mt-5 -mr-5"></div>
                          <div className="absolute bottom-0 left-0 w-8 h-8 bg-indigo-500/10 rounded-full -mb-4 -ml-4"></div>
                          <div className="relative z-10">
                            <h3 className="font-bold text-gray-900 text-[10.5px] mb-1">School Closure - Annual Maintenance</h3>
                            <p className="text-[9.5px] text-gray-600 mb-1 truncate">The school will be closed on April 22-24, 2024 for annual maintenance work...</p>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-[9.5px] text-gray-500">Dr. Smith • Apr 18, 2024</span>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              <span className="px-1.5 py-0.5 bg-red-100 text-red-800 text-[9.5px] font-medium rounded-full">Urgent</span>
                              <span className="px-1.5 py-0.5 bg-blue-100 text-blue-800 text-[9.5px] font-medium rounded-full">All Students</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Notice Item 2 */}
                        <div className="p-2.5 rounded-md border border-gray-200 bg-white cursor-pointer hover:bg-gray-50 transition-colors relative overflow-hidden">
                          {/* Geometric elements */}
                          <div className="absolute top-0 right-0 w-10 h-10 bg-amber-500/10 rounded-full -mt-5 -mr-5"></div>
                          <div className="absolute bottom-0 left-0 w-8 h-8 bg-orange-500/10 rounded-full -mb-4 -ml-4"></div>
                          <div className="relative z-10">
                            <h3 className="font-bold text-gray-900 text-[10.5px] mb-1">Parent-Teacher Meeting Schedule</h3>
                            <p className="text-[9.5px] text-gray-600 mb-1 truncate">Parent-Teacher meetings will be held on April 25-26, 2024...</p>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-[9.5px] text-gray-500">Mr. Johnson • Apr 15, 2024</span>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              <span className="px-1.5 py-0.5 bg-amber-100 text-amber-800 text-[9.5px] font-medium rounded-full">Important</span>
                              <span className="px-1.5 py-0.5 bg-blue-100 text-blue-800 text-[9.5px] font-medium rounded-full">Parents</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Notice Item 3 */}
                        <div className="p-2.5 rounded-md border border-gray-200 bg-white cursor-pointer hover:bg-gray-50 transition-colors relative overflow-hidden">
                          {/* Geometric elements */}
                          <div className="absolute top-0 right-0 w-10 h-10 bg-green-500/10 rounded-full -mt-5 -mr-5"></div>
                          <div className="absolute bottom-0 left-0 w-8 h-8 bg-emerald-500/10 rounded-full -mb-4 -ml-4"></div>
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
                        
                        {/* Notice Item 4 */}
                        <div className="p-2.5 rounded-md border border-gray-200 bg-white cursor-pointer hover:bg-gray-50 transition-colors relative overflow-hidden">
                          {/* Geometric elements */}
                          <div className="absolute top-0 right-0 w-10 h-10 bg-blue-500/10 rounded-full -mt-5 -mr-5"></div>
                          <div className="absolute bottom-0 left-0 w-8 h-8 bg-indigo-500/10 rounded-full -mb-4 -ml-4"></div>
                          <div className="relative z-10">
                            <h3 className="font-bold text-gray-900 text-[10.5px] mb-1">New Library Hours</h3>
                            <p className="text-[9.5px] text-gray-600 mb-1 truncate">The school library will extend its hours starting April 15, 2024...</p>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-[9.5px] text-gray-500">Mrs. Brown • Apr 5, 2024</span>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              <span className="px-1.5 py-0.5 bg-blue-100 text-blue-800 text-[9.5px] font-medium rounded-full">Information</span>
                              <span className="px-1.5 py-0.5 bg-blue-100 text-blue-800 text-[9.5px] font-medium rounded-full">All Students</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Notice Item 5 */}
                        <div className="p-2.5 rounded-md border border-gray-200 bg-white cursor-pointer hover:bg-gray-50 transition-colors relative overflow-hidden">
                          {/* Geometric elements */}
                          <div className="absolute top-0 right-0 w-10 h-10 bg-purple-500/10 rounded-full -mt-5 -mr-5"></div>
                          <div className="absolute bottom-0 left-0 w-8 h-8 bg-violet-500/10 rounded-full -mb-4 -ml-4"></div>
                          <div className="relative z-10">
                            <h3 className="font-bold text-gray-900 text-[10.5px] mb-1">Sports Day Event</h3>
                            <p className="text-[9.5px] text-gray-600 mb-1 truncate">Annual Sports Day will be held on May 15, 2024...</p>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-[9.5px] text-gray-500">Coach Davis • Apr 1, 2024</span>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              <span className="px-1.5 py-0.5 bg-purple-100 text-purple-800 text-[9.5px] font-medium rounded-full">Event</span>
                              <span className="px-1.5 py-0.5 bg-blue-100 text-blue-800 text-[9.5px] font-medium rounded-full">All Students</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Panel - Notice Details */}
                  <div className="lg:col-span-2 flex flex-col">
                    {/* Notice Details */}
                    <div className="flex-1 overflow-y-auto p-5 relative overflow-hidden">
                      {/* Geometric background elements */}
                      <div className="absolute top-0 left-0 w-full h-full opacity-5">
                        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500 rounded-full mix-blend-overlay"></div>
                        <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-500 rounded-full mix-blend-overlay"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-indigo-500 rounded-sm rotate-45 mix-blend-overlay"></div>
                      </div>
                      <div className="relative z-10 mb-5">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-lg font-bold text-gray-900">School Closure - Annual Maintenance</h3>
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
                            <span className="text-[0.75rem]">Dr. Smith (Principal)</span>
                          </div>
                          <span>•</span>
                          <span className="text-[0.75rem]">April 18, 2024</span>
                          <span>•</span>
                          <span className="px-1.5 py-0.5 bg-red-100 text-red-800 text-[9.5px] font-medium rounded-full">Urgent</span>
                          <span className="px-1.5 py-0.5 bg-blue-100 text-blue-800 text-[9.5px] font-medium rounded-full">All Students</span>
                        </div>
                        
                        <div className="prose max-w-none text-gray-700 mb-6">
                          <p className="mb-3 text-[0.875rem]">Dear Students, Parents, and Staff,</p>
                          <p className="mb-3 text-[0.875rem]">This is to inform you that the school will be closed for annual maintenance work from April 22nd to April 24th, 2024. During this period, all classes and school activities will be suspended.</p>
                          <p className="mb-3 text-[0.875rem]">The maintenance work includes:</p>
                          <ul className="list-disc pl-4 mb-3 space-y-1.5 text-[0.875rem]">
                            <li>Repainting of classrooms and common areas</li>
                            <li>Repair and maintenance of laboratory equipment</li>
                            <li>Upgrading of electrical systems</li>
                            <li>Landscaping and garden maintenance</li>
                            <li>Cleaning and sanitization of all facilities</li>
                          </ul>
                          <p className="mb-3 text-[0.875rem]">We apologize for any inconvenience this may cause and appreciate your understanding as we work to improve our facilities for a better learning environment.</p>
                          <p className="mb-3 text-[0.875rem]">Regular classes will resume on April 25th, 2024.</p>
                          <p className="text-[0.875rem]">Thank you for your cooperation.</p>
                        </div>
                      </div>
                      
                      {/* Comments Section */}
                      <div className="border-t border-gray-200 pt-5">
                        <h4 className="text-lg font-bold text-gray-900 mb-3">Comments (3)</h4>
                        
                        <div className="space-y-3 mb-5">
                          {/* Comment 1 */}
                          <div className="flex gap-2.5 relative">
                            {/* Geometric elements */}
                            <div className="absolute top-0 right-0 w-8 h-8 bg-green-500/10 rounded-full -mt-4 -mr-4"></div>
                            <div className="relative z-10">
                              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold text-[9.5px] flex-shrink-0">
                                JS
                              </div>
                              <div className="flex-1">
                                <div className="bg-gray-100 rounded-md p-2.5">
                                  <div className="flex items-center justify-between mb-1">
                                    <h5 className="font-medium text-gray-900 text-[0.75rem]">John Smith</h5>
                                    <span className="text-[9.5px] text-gray-500">Apr 18, 2024 • 10:30 AM</span>
                                  </div>
                                  <p className="text-[0.75rem] text-gray-700">Thank you for the advance notice. Will the library be accessible during this period for essential research work?</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Comment 2 */}
                          <div className="flex gap-2.5 relative">
                            {/* Geometric elements */}
                            <div className="absolute top-0 right-0 w-8 h-8 bg-purple-500/10 rounded-full -mt-4 -mr-4"></div>
                            <div className="relative z-10">
                              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center text-white font-bold text-[9.5px] flex-shrink-0">
                                MP
                              </div>
                              <div className="flex-1">
                                <div className="bg-gray-100 rounded-md p-2.5">
                                  <div className="flex items-center justify-between mb-1">
                                    <h5 className="font-medium text-gray-900 text-[0.75rem]">Mary Parker</h5>
                                    <span className="text-[9.5px] text-gray-500">Apr 18, 2024 • 11:15 AM</span>
                                  </div>
                                  <p className="text-[0.75rem] text-gray-700">Will the after-school programs be rescheduled or adjusted accordingly?</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Comment 3 */}
                          <div className="flex gap-2.5 relative">
                            {/* Geometric elements */}
                            <div className="absolute top-0 right-0 w-8 h-8 bg-blue-500/10 rounded-full -mt-4 -mr-4"></div>
                            <div className="relative z-10">
                              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-[9.5px] flex-shrink-0">
                                DS
                              </div>
                              <div className="flex-1">
                                <div className="bg-blue-50 rounded-md p-2.5 border border-blue-200">
                                  <div className="flex items-center justify-between mb-1">
                                    <h5 className="font-medium text-gray-900 text-[0.75rem]">Dr. Smith</h5>
                                    <span className="text-[9.5px] text-gray-500">Apr 18, 2024 • 2:45 PM</span>
                                  </div>
                                  <p className="text-[0.75rem] text-gray-700">@John Smith: The library will be closed during the maintenance period. However, we will arrange for essential research materials to be available online. @Mary Parker: After-school programs will be rescheduled and details will be shared next week.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Add Comment */}
                        <div className="flex gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                            SJ
                          </div>
                          <div className="flex-1">
                            <div className="border border-gray-300 rounded-lg p-3">
                              <textarea 
                                className="w-full h-16 text-[0.875rem] border-none focus:ring-0 p-0 resize-none" 
                                placeholder="Add a comment..."
                              ></textarea>
                              <div className="flex justify-between items-center mt-2">
                                <div className="text-[0.75rem] text-gray-500">Press Enter to send</div>
                                <button className="px-3 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all text-[0.875rem] font-medium">
                                  Post Comment
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Messages Tab */}
          {activeTab === 'messages' && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-sm font-bold text-gray-900">Messages</h2>
              </div>

              {/* Messages List */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-sm font-bold text-gray-900 mb-4">Conversations</h3>
                  <div className="space-y-3">
                    {messages.map((message) => (
                      <div 
                        key={message.id} 
                        className="p-3 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 cursor-pointer bg-gray-50"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                            {message.from.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="font-medium text-gray-900 truncate">{message.from}</h4>
                              {message.unread && (
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              )}
                            </div>
                            <p className="text-sm text-gray-600 truncate">{message.title}</p>
                            <p className="text-xs text-gray-500 mt-1">{message.date}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                      MD
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Mr. James Dean</h3>
                      <p className="text-sm text-gray-500">Mathematics Teacher</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-start">
                      <div className="max-w-xs lg:max-w-md bg-gray-100 rounded-2xl rounded-bl-none p-4">
                        <p className="text-gray-800">Hi Sarah, I wanted to discuss your progress in mathematics. You're doing great!</p>
                        <p className="text-xs text-gray-500 mt-2">10:30 AM</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <div className="max-w-xs lg:max-w-md bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl rounded-br-none p-4">
                        <p>Thank you, Mr. Dean! I'm really enjoying the calculus topics we're covering.</p>
                        <p className="text-xs text-blue-100 mt-2">10:32 AM</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-start">
                      <div className="max-w-xs lg:max-w-md bg-gray-100 rounded-2xl rounded-bl-none p-4">
                        <p className="text-gray-800">That's wonderful to hear! Keep up the excellent work. Let me know if you need any additional resources.</p>
                        <p className="text-xs text-gray-500 mt-2">10:35 AM</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all">
                      Send
                    </button>
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
  );
}

export default StudentDashboard;