import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Users, UserCheck, UserX, Bell, AlertTriangle, Download, Calendar, Clock, Activity, Shield, MapPin, TrendingUp, FileText, Settings, LogOut, Menu, X, Home, BookOpen, ClipboardList, MessageSquare, Search, ChevronDown, CheckCircle2 } from 'lucide-react';

const Dashboardai = () => {
  const [selectedRole, setSelectedRole] = useState('teacher');
  const [selectedClass, setSelectedClass] = useState('Class 10-A');
  const [activeTab, setActiveTab] = useState('home');

  // Sample data
  const attendanceData = [
    { day: 'Mon', present: 85, absent: 15 },
    { day: 'Tue', present: 88, absent: 12 },
    { day: 'Wed', present: 82, absent: 18 },
    { day: 'Thu', present: 90, absent: 10 },
    { day: 'Fri', present: 87, absent: 13 },
    { day: 'Sat', present: 75, absent: 25 },
  ];

  const classWiseData = [
    { class: '10-A', present: 42, absent: 3 },
    { class: '10-B', present: 38, absent: 7 },
    { class: '9-A', present: 45, absent: 2 },
    { class: '9-B', present: 40, absent: 5 },
  ];

  const pieData = [
    { name: 'Present', value: 87, color: '#3b82f6' },
    { name: 'Absent', value: 10, color: '#ef4444' },
    { name: 'Late', value: 3, color: '#f59e0b' },
  ];

  const alerts = [
    { id: 1, type: 'absence', message: '5 students absent for 3+ consecutive days', time: '10 mins ago', severity: 'high' },
    { id: 2, type: 'safety', message: 'Fire sensor alert - Building B', time: '25 mins ago', severity: 'critical' },
    { id: 3, type: 'device', message: 'RFID reader malfunction - Gate 2', time: '1 hour ago', severity: 'medium' },
    { id: 4, type: 'unauthorized', message: 'Unrecognized face detected - Main entrance', time: '2 hours ago', severity: 'high' },
  ];

  const recentActivity = [
    { student: 'Rahul Sharma', action: 'Marked present', time: '09:15 AM', method: 'RFID' },
    { student: 'Priya Patel', action: 'Marked present', time: '09:14 AM', method: 'Face Recognition' },
    { student: 'Amit Kumar', action: 'Manual override', time: '09:10 AM', method: 'Teacher' },
    { student: 'Sneha Singh', action: 'Marked present', time: '09:08 AM', method: 'RFID' },
  ];

  const timetableData = [
    { time: '08:00', subject: 'Mathematics', class: 'Class 10-A', teacher: 'Mr. Verma', room: 'Room 201' },
    { time: '09:00', subject: 'Physics', class: 'Class 10-B', teacher: 'Mrs. Sharma', room: 'Lab 1' },
    { time: '10:00', subject: 'Break', class: '', teacher: '', room: '' },
    { time: '10:30', subject: 'Chemistry', class: 'Class 9-A', teacher: 'Dr. Kumar', room: 'Lab 2' },
    { time: '11:30', subject: 'English', class: 'Class 10-A', teacher: 'Ms. Patel', room: 'Room 105' },
  ];

  const upcomingEvents = [
    { title: 'Parent-Teacher Meeting', date: '15 Apr, 2024', time: '10:00 AM', type: 'meeting' },
    { title: 'Science Exhibition', date: '20 Apr, 2024', time: '09:00 AM', type: 'event' },
    { title: 'Annual Sports Day', date: '25 Apr, 2024', time: '08:00 AM', type: 'event' },
  ];

  const todoItems = [
    { title: 'Review Class 10-A assignments', deadline: '30 Mar, 2024', status: 'pending' },
    { title: 'Prepare next week lesson plan', deadline: '29 Mar, 2024', status: 'pending' },
    { title: 'Update student progress reports', deadline: '03 Apr, 2024', status: 'pending' },
  ];

  const completedItems = [
    { title: 'Grade mid-term exams', deadline: '25 Mar, 2024', status: 'completed' },
    { title: 'Submit attendance report', deadline: '24 Mar, 2024', status: 'completed' },
  ];

  const stats = {
    teacher: [
      { label: 'Total Students', value: '45', change: '+2', icon: Users, color: 'from-blue-500 to-blue-600' },
      { label: 'Present Today', value: '42', change: '+5', icon: UserCheck, color: 'from-green-500 to-green-600' },
      { label: 'Absent Today', value: '3', change: '-2', icon: UserX, color: 'from-red-500 to-red-600' },
      { label: 'Attendance Rate', value: '93%', change: '+1.2%', icon: TrendingUp, color: 'from-purple-500 to-purple-600' },
    ],
    admin: [
      { label: 'Total Students', value: '1,245', change: '+15', icon: Users, color: 'from-blue-500 to-blue-600' },
      { label: 'Present Today', value: '1,180', change: '+42', icon: UserCheck, color: 'from-green-500 to-green-600' },
      { label: 'Attendance Rate', value: '94.8%', change: '+1.2%', icon: TrendingUp, color: 'from-purple-500 to-purple-600' },
      { label: 'Active Devices', value: '28', change: '0', icon: Activity, color: 'from-indigo-500 to-indigo-600' },
    ],
    government: [
      { label: 'Total Schools', value: '156', change: '+3', icon: MapPin, color: 'from-blue-500 to-blue-600' },
      { label: 'District Attendance', value: '92.3%', change: '+0.8%', icon: TrendingUp, color: 'from-green-500 to-green-600' },
      { label: 'Mid-Day Meals', value: '45,678', change: '+234', icon: Users, color: 'from-orange-500 to-orange-600' },
      { label: 'Critical Alerts', value: '12', change: '-5', icon: AlertTriangle, color: 'from-red-500 to-red-600' },
    ],
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'bg-red-50 border-red-200 text-red-800';
      case 'high': return 'bg-orange-50 border-orange-200 text-orange-800';
      case 'medium': return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      default: return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  return (
    <div className="flex min-h-screen max-h-screen overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-xl flex flex-col h-screen">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              AttendSmart
            </span>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {[
            { id: 'home', icon: Home, label: 'Home' },
            { id: 'attendance', icon: UserCheck, label: 'Attendance' },
            { id: 'lessons', icon: BookOpen, label: 'Lessons' },
            { id: 'timetable', icon: Calendar, label: 'Timetable' },
            { id: 'homework', icon: ClipboardList, label: 'Homework' },
            { id: 'messages', icon: MessageSquare, label: 'Messages' },
            { id: 'assessments', icon: FileText, label: 'Assessments' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === tab.id
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span className="font-medium">{tab.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-100 space-y-1">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50 transition-all">
            <Settings className="w-5 h-5" />
            <span className="font-medium">Settings</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50 transition-all">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto overscroll-contain flex flex-col h-screen">
        {/* Header */}
        <div className="flex-shrink-0 bg-white border-b border-gray-100 px-8 py-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="teacher">Teacher View</option>
                <option value="admin">School Admin</option>
                <option value="government">Government Official</option>
              </select>
              <button className="relative p-2 text-gray-600 hover:bg-gray-50 rounded-xl transition-all">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-900">James Dean</p>
                  <p className="text-xs text-gray-500">@james_dean</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-semibold">
                  JD
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 flex-grow overflow-y-auto overscroll-contain">
          {/* Welcome Banner */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl p-8 mb-8 text-white shadow-xl">
            <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
              Welcome back, James 👋
            </h1>
            <p className="text-blue-100 text-lg">
              You've monitored <span className="font-bold text-white">93%</span> attendance this week!
            </p>
            <p className="text-blue-100">Keep tracking and improve student engagement.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats[selectedRole].map((stat, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border-2 border-blue-200/30">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-gray-500 text-sm font-medium mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
                <p className="text-sm text-gray-500">
                  <span className={stat.change.startsWith('+') ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
                    {stat.change}
                  </span> from yesterday
                </p>
              </div>
            ))}
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Left Column - Charts */}
            <div className="lg:col-span-2 space-y-6">
              {/* Attendance Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-blue-200/30">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">Attendance</h3>
                  <span className="text-2xl font-bold text-gray-900">19/20</span>
                </div>
                <p className="text-sm text-gray-500 mb-4">Well done! You're attending all lessons. Keep going!</p>
              </div>

              {/* Homework Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-green-200/30">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">Homework</h3>
                  <span className="text-2xl font-bold text-gray-900">53/56</span>
                </div>
                <p className="text-sm text-gray-500 mb-4">Don't forget about your next homework</p>
              </div>

              {/* Rating Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-purple-200/30">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">Rating</h3>
                  <span className="text-2xl font-bold text-gray-900">89/100</span>
                </div>
                <button className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors">
                  Go to report →
                </button>
              </div>

              {/* Timetable */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-amber-200/30">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-blue-500" />
                    Timetable
                  </h3>
                  <span className="text-sm text-gray-500">Mar 28, 2024</span>
                </div>

                <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => (
                    <button
                      key={day}
                      className={`flex flex-col items-center justify-center min-w-[60px] py-3 rounded-xl transition-all ${
                        idx === 3
                          ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                          : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <span className="text-xs font-medium mb-1">{day}</span>
                      <span className="text-lg font-bold">{25 + idx}</span>
                    </button>
                  ))}
                </div>

                <div className="space-y-3">
                  {timetableData.slice(0, 3).map((item, idx) => (
                    <div key={idx} className={`flex items-center gap-4 p-4 rounded-xl ${item.subject === 'Break' ? 'bg-blue-50 border-2 border-blue-200' : 'bg-gray-50'}`}>
                      <div className="text-sm font-medium text-gray-500 min-w-[60px]">{item.time}</div>
                      {item.subject === 'Break' ? (
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-blue-600">Break</div>
                          <div className="text-xs text-blue-500">10:00 - 10:30</div>
                        </div>
                      ) : (
                        <>
                          <div className="flex-1">
                            <div className="text-sm font-semibold text-gray-900">{item.subject}</div>
                            <div className="text-xs text-gray-500">{item.time} - {parseInt(item.time.split(':')[0]) + 1}:00</div>
                          </div>
                          <div className="flex items-center gap-2">
                            {[1, 2, 3].map((i) => (
                              <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500"></div>
                            ))}
                          </div>
                          <span className="px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">
                            {item.subject}
                          </span>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Events */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-blue-200/30">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Upcoming events</h3>
                <div className="space-y-3">
                  {upcomingEvents.slice(0, 3).map((event, idx) => (
                    <div key={idx} className="relative rounded-xl overflow-hidden h-32 group cursor-pointer">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-90 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute inset-0 p-4 flex flex-col justify-between text-white">
                        <div>
                          <p className="font-semibold text-sm">{event.title}</p>
                          <p className="text-xs opacity-90">{event.date}, {event.time}</p>
                        </div>
                        <button className="self-end px-3 py-1 bg-white bg-opacity-20 rounded-lg text-xs font-semibold hover:bg-opacity-30 transition-all">
                          More details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Tasks */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-green-200/30">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-gray-900">Homework progress</h3>
                  <button className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900">
                    All <ChevronDown className="w-4 h-4" />
                  </button>
                </div>

                {/* To do */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 mb-3">To do</h4>
                  <div className="space-y-3">
                    {todoItems.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all cursor-pointer">
                        <div className="w-5 h-5 rounded-full border-2 border-gray-300 mt-0.5 flex-shrink-0"></div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 mb-1">{item.title}</p>
                          <p className="text-xs text-gray-500 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            Deadline
                          </p>
                        </div>
                        <span className="text-xs text-gray-500 whitespace-nowrap">{item.deadline}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* On review */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 mb-3">On review</h4>
                  <div className="space-y-3">
                    {todoItems.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all cursor-pointer">
                        <div className="w-5 h-5 rounded-full border-2 border-gray-300 mt-0.5 flex-shrink-0"></div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 mb-1">{item.title}</p>
                          <p className="text-xs text-gray-500 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            Deadline
                          </p>
                        </div>
                        <span className="text-xs text-gray-500 whitespace-nowrap">{item.deadline}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Completed */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 mb-3">Completed</h4>
                  <div className="space-y-3">
                    {completedItems.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all cursor-pointer">
                        <div className="w-5 h-5 rounded-full bg-blue-500 mt-0.5 flex-shrink-0 flex items-center justify-center">
                          <CheckCircle2 className="w-3 h-3 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 mb-1">{item.title}</p>
                          <p className="text-xs text-gray-500 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            Deadline
                          </p>
                        </div>
                        <span className="text-xs text-gray-500 whitespace-nowrap">{item.deadline}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboardai;