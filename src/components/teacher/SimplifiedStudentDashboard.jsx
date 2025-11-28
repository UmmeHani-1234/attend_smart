import React, { useState } from 'react';
import { Home, FileText, Award, AlertCircle, Settings, User, LogOut, Users, CheckCircle, Clock, TrendingUp, X, BookOpen, Calculator, FlaskConical, PenTool, Globe, Music, Palette } from 'lucide-react';
import UltraModernHeader from '../UltraModernHeader';

const SimplifiedStudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [showAvatarModal, setShowAvatarModal] = useState(false);

  // Sample data
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
    { id: 4, subject: "Geography", title: "World Climate Patterns", due: "2024-04-22", dueDisplay: "Apr 22, 2024", status: "pending", priority: "medium" },
    { id: 5, subject: "Music", title: "Instrument Research Paper", due: "2024-04-25", dueDisplay: "Apr 25, 2024", status: "pending", priority: "low" },
    { id: 6, subject: "Art", title: "Abstract Painting Project", due: "2024-04-28", dueDisplay: "Apr 28, 2024", status: "submitted", priority: "high" }
  ];

  const summaryStats = [
    { label: 'Attendance', value: `${studentData.attendancePercentage}%`, icon: CheckCircle, color: 'from-green-500 to-emerald-600', change: '+2.1%' },
    { label: 'Current Grade', value: studentData.currentGrade, icon: Award, color: 'from-blue-500 to-indigo-600', change: '+0.3' },
    { label: 'GPA', value: studentData.gpa, icon: TrendingUp, color: 'from-purple-500 to-indigo-600', change: '+0.1' },
    { label: 'Assignments', value: assignments.filter(a => a.status === 'pending').length, icon: FileText, color: 'from-amber-500 to-orange-600', change: '-1' },
  ];

  // Sample avatars
  const sampleAvatars = [
    `https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=4f46e5&radius=50`,
    `https://api.dicebear.com/7.x/avataaars/svg?seed=Emma&backgroundColor=10b981&radius=50`,
    `https://api.dicebear.com/7.x/avataaars/svg?seed=John&backgroundColor=ef4444&radius=50`,
    `https://api.dicebear.com/7.x/avataaars/svg?seed=Mia&backgroundColor=f59e0b&radius=50`,
    `https://api.dicebear.com/7.x/avataaars/svg?seed=David&backgroundColor=8b5cf6&radius=50`,
    `https://api.dicebear.com/7.x/avataaars/svg?seed=Alex&backgroundColor=ec4899&radius=50`
  ];

  const [studentAvatar, setStudentAvatar] = useState(sampleAvatars[0]);

  return (
    <div className="flex min-h-screen max-h-screen overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Sidebar - Reduced size by 1 unit */}
      <div className="w-52 bg-white shadow-lg flex flex-col h-screen">
        <div className="p-2.5 border-b border-gray-100">
          <div className="flex items-center gap-1.5">
            <div className="relative">
              <img 
                src={studentAvatar} 
                alt="Student Avatar" 
                className="w-7 h-7 rounded-md object-cover shadow-md cursor-pointer"
                onClick={() => setShowAvatarModal(true)}
              />
              <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-green-500 rounded-full border border-white"></div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1">
                <span className="text-[11px] font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent truncate block">
                  {studentData.name}
                </span>
              </div>
              <p className="text-[10px] text-gray-500 truncate">{studentData.class}</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-2 pt-0 space-y-0.5 overflow-y-auto">
          {[
            { id: 'home', icon: Home, label: 'Dashboard Home' },
            { id: 'assignments', icon: FileText, label: 'Assignments' },
            { id: 'grades', icon: Award, label: 'Grades' },
            { id: 'notices', icon: AlertCircle, label: 'Important Notices' },
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
            </button>
          ))}
        </nav>

        <div className="p-2 border-t border-gray-100 space-y-1">
          <button 
            onClick={() => setShowAvatarModal(true)}
            className="w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all"
          >
            <User className="w-3 h-3" />
            <span className="font-medium text-[11px]">Change Avatar</span>
          </button>
          <button 
            className="w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all"
          >
            <LogOut className="w-3 h-3" />
            <span className="font-medium text-[11px]">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto overscroll-contain flex flex-col h-screen">
        {/* Ultra Modern Header - Matching teacher dashboard exactly */}
        <div className="flex-shrink-0">
          <UltraModernHeader 
            dashboardTitle="Student Dashboard"
            userType="Student"
            userName={studentData.name}
            userRole={`${studentData.class} • Roll #${studentData.rollNumber}`}
            onLogout={() => console.log('Logout clicked')}
          />
        </div>

        {/* Dashboard Content */}
        <div className="p-5 flex-grow overflow-y-auto overscroll-contain">
          {/* Home Tab */}
          {activeTab === 'home' && (
            <div>
              {/* Welcome Banner - Reduced size by 1 unit */}
              <div className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 rounded-lg p-4 mb-4 shadow-md backdrop-blur-sm border border-white/20 relative overflow-hidden">
                <div className="relative z-10 flex items-center gap-2.5">
                  <div className="relative">
                    <img 
                      src={studentAvatar} 
                      alt="Student Avatar" 
                      className="w-12 h-12 rounded-full object-cover shadow-md border-2 border-white/30 cursor-pointer"
                      onClick={() => setShowAvatarModal(true)}
                    />
                  </div>
                  <div>
                    <h2 className="text-[13px] font-bold text-white mb-1">
                      Welcome back, {studentData.name.split(' ')[0]}! 👋
                    </h2>
                    <p className="text-blue-100 text-[11px] mb-1">
                      {studentData.class} • Roll #{studentData.rollNumber}
                    </p>
                    <p className="text-blue-100 text-[11px]">
                      Current GPA: {studentData.gpa} • Attendance: {studentData.attendancePercentage}%
                    </p>
                  </div>
                </div>
              </div>

              {/* Summary Stats - Reduced card sizes by 1 unit and added geometric designs */}
              <div className="flex gap-2.5 mb-6">
                {summaryStats.map((stat, index) => (
                  <div key={index} className={`flex-grow bg-gradient-to-br ${stat.color} rounded-lg p-3 shadow-sm border border-white/30 backdrop-blur-sm text-white relative overflow-hidden`}>
                    {/* Geometric design elements */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full"></div>
                    <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-white/10 rounded-full"></div>
                    <div className="absolute top-2 right-2 w-6 h-6 bg-white/10 rotate-45"></div>
                    <div className="flex items-center justify-between relative z-10">
                      <div>
                        <p className="text-blue-100 text-[11px]">{stat.label}</p>
                        <p className="text-lg font-bold mt-0.5">{stat.value}</p>
                        <p className="text-blue-100 text-[9px] mt-0.5">{stat.change} from last week</p>
                      </div>
                      <stat.icon className="w-6 h-6 text-blue-200 relative z-10" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Upcoming Assignments - Reduced size by 5 units total (3 + 2 more) and modernized design */}
              <div className="bg-white rounded-md p-2.5 shadow-sm border border-gray-100 mb-4 relative overflow-hidden">
                {/* Geometric background elements */}
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-blue-500/5 rounded-full"></div>
                <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-indigo-500/5 rounded-full"></div>
                <div className="absolute top-2 right-2 w-4 h-4 bg-purple-500/10 rotate-45"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-2.5">
                    <div className="flex items-center gap-1">
                      <div className="p-1 bg-gradient-to-br from-blue-500 to-indigo-600 rounded">
                        <FileText className="w-3.5 h-3.5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xs font-bold text-gray-900">Upcoming Assignments</h3>
                        <p className="text-[9px] text-gray-500">Tasks due in the next 7 days</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => setActiveTab('assignments')}
                      className="text-[9px] text-blue-600 hover:text-blue-700 font-medium bg-blue-50 hover:bg-blue-100 px-1.5 py-0.5 rounded transition-all"
                    >
                      View All
                    </button>
                  </div>
                  
                  <div className="space-y-1.5">
                    {assignments.map((assignment) => (
                      <div key={assignment.id} className="flex items-center gap-1.5 p-1.5 rounded-md hover:bg-gray-50 transition-all border border-gray-100 hover:border-blue-200 group">
                        <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-500 group-hover:animate-pulse"></div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between">
                            <h4 className="text-[10px] font-semibold text-gray-900 truncate">{assignment.title}</h4>
                            <span className="text-[8px] px-1 py-0.5 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 rounded-full font-medium">
                              {assignment.dueDisplay}
                            </span>
                          </div>
                          <div className="flex items-center justify-between mt-0.5">
                            <p className="text-[9px] text-gray-600">{assignment.subject}</p>
                            <div className="flex items-center gap-0.5">
                              <span className="text-[7px] px-0.5 py-0.5 bg-blue-100 text-blue-800 rounded-full font-medium">
                                {assignment.priority}
                              </span>
                              <span className="text-[7px] px-0.5 py-0.5 bg-yellow-100 text-yellow-800 rounded-full font-medium">
                                Pending
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-2 pt-1.5 border-t border-gray-100">
                    <div className="flex items-center justify-between text-[9px]">
                      <span className="text-gray-500">You have {assignments.filter(a => a.status === 'pending').length} pending assignments</span>
                      <div className="flex items-center gap-0.5 text-blue-600">
                        <span>See details</span>
                        <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'assignments' && (
            <div>
              {/* Banner for Assignments Section */}
              <div className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 rounded-lg p-4 mb-5 shadow-md backdrop-blur-sm border border-white/20 relative overflow-hidden">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-white/10 rounded-full"></div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 rotate-45"></div>
                
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <h2 className="text-sm font-bold text-white mb-1">My Assignments</h2>
                    <p className="text-blue-100 text-xs">Manage your tasks and track progress</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-white/20 rounded-lg p-2">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Assignment Status Cards in Single Row */}
              <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-3 shadow-sm border border-blue-200/30 backdrop-blur-sm text-white relative overflow-hidden">
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-white/10 rounded-full"></div>
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <p className="text-blue-100 text-xs">Total Assignments</p>
                      <p className="text-lg font-bold mt-1">{assignments.length}</p>
                    </div>
                    <FileText className="w-6 h-6 text-blue-200 relative z-10" />
                  </div>
                </div>
                
                <div className="flex-1 bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-3 shadow-sm border border-green-200/30 backdrop-blur-sm text-white relative overflow-hidden">
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-white/10 rounded-full"></div>
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <p className="text-green-100 text-xs">Completed</p>
                      <p className="text-lg font-bold mt-1">{assignments.filter(a => a.status === 'submitted').length}</p>
                    </div>
                    <CheckCircle className="w-6 h-6 text-green-200 relative z-10" />
                  </div>
                </div>
                
                <div className="flex-1 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg p-3 shadow-sm border border-amber-200/30 backdrop-blur-sm text-white relative overflow-hidden">
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-white/10 rounded-full"></div>
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <p className="text-amber-100 text-xs">Pending</p>
                      <p className="text-lg font-bold mt-1">{assignments.filter(a => a.status === 'pending').length}</p>
                    </div>
                    <Clock className="w-6 h-6 text-amber-200 relative z-10" />
                  </div>
                </div>
                
                <div className="flex-1 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg p-3 shadow-sm border border-purple-200/30 backdrop-blur-sm text-white relative overflow-hidden">
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-white/10 rounded-full"></div>
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <p className="text-purple-100 text-xs">High Priority</p>
                      <p className="text-lg font-bold mt-1">{assignments.filter(a => a.priority === 'high').length}</p>
                    </div>
                    <AlertCircle className="w-6 h-6 text-purple-200 relative z-10" />
                  </div>
                </div>
              </div>
              
              {/* Assignments Table - Reduced size by 4 units, text size reduced by 2 more units */}
              <div className="bg-white rounded-md shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-2.5 py-1.5 text-left text-[9px] font-medium text-gray-500 uppercase tracking-wider">Assignment</th>
                        <th scope="col" className="px-2.5 py-1.5 text-left text-[9px] font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                        <th scope="col" className="px-2.5 py-1.5 text-left text-[9px] font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                        <th scope="col" className="px-2.5 py-1.5 text-left text-[9px] font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                        <th scope="col" className="px-2.5 py-1.5 text-left text-[9px] font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th scope="col" className="px-2.5 py-1.5 text-left text-[9px] font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {assignments.map((assignment) => {
                        // Map subjects to icons
                        const subjectIcons = {
                          'Mathematics': Calculator,
                          'Science': FlaskConical,
                          'English': PenTool,
                          'Geography': Globe,
                          'Music': Music,
                          'Art': Palette
                        };
                        
                        const SubjectIcon = subjectIcons[assignment.subject] || BookOpen;
                        
                        return (
                          <tr key={assignment.id} className="hover:bg-gray-50">
                            <td className="px-2.5 py-1.5 whitespace-nowrap">
                              <div className="text-[9px] font-medium text-gray-900">{assignment.title}</div>
                            </td>
                            <td className="px-2.5 py-1.5 whitespace-nowrap">
                              <div className="flex items-center text-[9px] text-gray-500">
                                <SubjectIcon className="w-2.5 h-2.5 mr-1 text-gray-400" />
                                {assignment.subject}
                              </div>
                            </td>
                            <td className="px-2.5 py-1.5 whitespace-nowrap">
                              <div className="text-[9px] text-gray-500">{assignment.dueDisplay}</div>
                            </td>
                            <td className="px-2.5 py-1.5 whitespace-nowrap">
                              <span className={`px-1 inline-flex text-[8px] leading-3 font-semibold rounded-full ${
                                assignment.priority === 'high' ? 'bg-red-100 text-red-800' : 
                                assignment.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' : 
                                'bg-green-100 text-green-800'
                              }`}>
                                {assignment.priority}
                              </span>
                            </td>
                            <td className="px-2.5 py-1.5 whitespace-nowrap">
                              <span className={`px-1 inline-flex text-[8px] leading-3 font-semibold rounded-full ${
                                assignment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                                'bg-green-100 text-green-800'
                              }`}>
                                {assignment.status}
                              </span>
                            </td>
                            <td className="px-2.5 py-1.5 whitespace-nowrap text-[9px] font-medium">
                              <button className="text-blue-600 hover:text-blue-900 mr-1.5">View</button>
                              {assignment.status === 'pending' && (
                                <button className="text-green-600 hover:text-green-900">Complete</button>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'grades' && (
            <div>
              {/* Banner for Grades Section - Matched dashboard size */}
              <div className="bg-gradient-to-r from-green-500 via-emerald-600 to-teal-700 rounded-md p-3 mb-4 shadow-sm backdrop-blur-sm border border-white/20 relative overflow-hidden">
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-white/10 rounded-full"></div>
                <div className="absolute top-3 right-3 w-6 h-6 bg-white/10 rotate-45"></div>
                
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <h2 className="text-xs font-bold text-white mb-1">Academic Performance</h2>
                    <p className="text-[9px] text-green-100">Track your grades and academic progress</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="bg-white/20 rounded-md p-1.5">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Grade Status Cards in Single Row - Matched dashboard size */}
              <div className="flex gap-3 mb-5">
                <div className="flex-1 bg-gradient-to-br from-green-500 to-emerald-600 rounded-md p-2.5 shadow-sm border border-green-200/30 backdrop-blur-sm text-white relative overflow-hidden">
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-white/10 rounded-full"></div>
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <p className="text-[9px] text-green-100">Current GPA</p>
                      <p className="text-base font-bold mt-1">{studentData.gpa}</p>
                    </div>
                    <TrendingUp className="w-5 h-5 text-green-200 relative z-10" />
                  </div>
                </div>
                
                <div className="flex-1 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-md p-2.5 shadow-sm border border-blue-200/30 backdrop-blur-sm text-white relative overflow-hidden">
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-white/10 rounded-full"></div>
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <p className="text-[9px] text-blue-100">Average Score</p>
                      <p className="text-base font-bold mt-1">87.5%</p>
                    </div>
                    <Award className="w-5 h-5 text-blue-200 relative z-10" />
                  </div>
                </div>
                
                <div className="flex-1 bg-gradient-to-br from-amber-500 to-orange-600 rounded-md p-2.5 shadow-sm border border-amber-200/30 backdrop-blur-sm text-white relative overflow-hidden">
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-white/10 rounded-full"></div>
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <p className="text-[9px] text-amber-100">Class Rank</p>
                      <p className="text-base font-bold mt-1">5th</p>
                    </div>
                    <Users className="w-5 h-5 text-amber-200 relative z-10" />
                  </div>
                </div>
                
                <div className="flex-1 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-md p-2.5 shadow-sm border border-purple-200/30 backdrop-blur-sm text-white relative overflow-hidden">
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-white/10 rounded-full"></div>
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <p className="text-[9px] text-purple-100">Total Subjects</p>
                      <p className="text-base font-bold mt-1">4</p>
                    </div>
                    <BookOpen className="w-5 h-5 text-purple-200 relative z-10" />
                  </div>
                </div>
              </div>
              
              {/* Grades Table - Matched dashboard size */}
              <div className="bg-white rounded-md shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-2.5 py-1.5 text-left text-[9px] font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                        <th scope="col" className="px-2.5 py-1.5 text-left text-[9px] font-medium text-gray-500 uppercase tracking-wider">Score</th>
                        <th scope="col" className="px-2.5 py-1.5 text-left text-[9px] font-medium text-gray-500 uppercase tracking-wider">Grade</th>
                        <th scope="col" className="px-2.5 py-1.5 text-left text-[9px] font-medium text-gray-500 uppercase tracking-wider">Performance</th>
                        <th scope="col" className="px-2.5 py-1.5 text-left text-[9px] font-medium text-gray-500 uppercase tracking-wider">Teacher</th>
                        <th scope="col" className="px-2.5 py-1.5 text-left text-[9px] font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {[
                        { id: 1, subject: 'Mathematics', score: 92, grade: 'A', teacher: 'Mr. Johnson' },
                        { id: 2, subject: 'Science', score: 88, grade: 'A-', teacher: 'Dr. Smith' },
                        { id: 3, subject: 'English', score: 85, grade: 'B+', teacher: 'Ms. Williams' },
                        { id: 4, subject: 'History', score: 95, grade: 'A', teacher: 'Mr. Brown' }
                      ].map((subject) => (
                        <tr key={subject.id} className="hover:bg-gray-50">
                          <td className="px-2.5 py-1.5 whitespace-nowrap">
                            <div className="text-[10px] font-medium text-gray-900">{subject.subject}</div>
                          </td>
                          <td className="px-2.5 py-1.5 whitespace-nowrap">
                            <div className="text-[10px] text-gray-500">{subject.score}%</div>
                          </td>
                          <td className="px-2.5 py-1.5 whitespace-nowrap">
                            <span className={`px-1 inline-flex text-[8px] leading-3 font-semibold rounded-full ${
                              subject.grade.startsWith('A') ? 'bg-green-100 text-green-800' : 
                              subject.grade.startsWith('B') ? 'bg-blue-100 text-blue-800' : 
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {subject.grade}
                            </span>
                          </td>
                          <td className="px-2.5 py-1.5 whitespace-nowrap">
                            <div className="w-16 bg-gray-200 rounded-full h-1">
                              <div 
                                className={`h-1 rounded-full ${
                                  subject.score >= 90 ? 'bg-green-500' : 
                                  subject.score >= 80 ? 'bg-blue-500' : 
                                  'bg-yellow-500'
                                }`} 
                                style={{ width: `${subject.score}%` }}
                              ></div>
                            </div>
                          </td>
                          <td className="px-2.5 py-1.5 whitespace-nowrap">
                            <div className="text-[10px] text-gray-500">{subject.teacher}</div>
                          </td>
                          <td className="px-2.5 py-1.5 whitespace-nowrap text-[10px] font-medium">
                            <button className="text-blue-600 hover:text-blue-900 mr-1.5">Details</button>
                            <button className="text-green-600 hover:text-green-900">Report</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notices' && (
            <div>
              <h2 className="text-[15px] font-bold text-gray-900 mb-5">Important Notices</h2>
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-4 border-b border-gray-100">
                  <h3 className="font-bold text-gray-900 text-[13px] mb-1.5">Science Fair Registration</h3>
                  <p className="text-gray-600 text-[11px] mb-2.5">Registration for the annual Science Fair is now open. All students from grades 9-12 are encouraged to participate.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-[10px]">Ms. Williams • Apr 10, 2024</span>
                    <div className="flex gap-1">
                      <span className="px-1.5 py-0.5 bg-green-100 text-green-800 text-[10px] font-medium rounded-full">Opportunity</span>
                      <span className="px-1.5 py-0.5 bg-blue-100 text-blue-800 text-[10px] font-medium rounded-full">Grades 9-12</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border-b border-gray-100">
                  <h3 className="font-bold text-gray-900 text-[13px] mb-1.5">Mathematics Olympiad Results</h3>
                  <p className="text-gray-600 text-[11px] mb-2.5">Congratulations to our students who participated in the State Mathematics Olympiad. Outstanding results were achieved.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-[10px]">Dr. Sharma • Apr 12, 2024</span>
                    <div className="flex gap-1">
                      <span className="px-1.5 py-0.5 bg-blue-100 text-blue-800 text-[10px] font-medium rounded-full">Achievement</span>
                      <span className="px-1.5 py-0.5 bg-purple-100 text-purple-800 text-[10px] font-medium rounded-full">Mathematics</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 text-[13px] mb-1.5">Summer Sports Camp Registration</h3>
                  <p className="text-gray-600 text-[11px] mb-2.5">Registration for the annual Summer Sports Camp is now open for all students. Various sports activities will be offered.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-[10px]">Coach Rajiv • Apr 8, 2024</span>
                    <div className="flex gap-1">
                      <span className="px-1.5 py-0.5 bg-amber-100 text-amber-800 text-[10px] font-medium rounded-full">Sports</span>
                      <span className="px-1.5 py-0.5 bg-blue-100 text-blue-800 text-[10px] font-medium rounded-full">Summer Program</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <h2 className="text-[15px] font-bold text-gray-900 mb-5">Account Settings</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="relative">
                      <img 
                        src={studentAvatar} 
                        alt="Student Avatar" 
                        className="w-14 h-14 rounded-lg object-cover shadow-md border-3 border-blue-100"
                      />
                      <button 
                        onClick={() => setShowAvatarModal(true)}
                        className="absolute bottom-0 right-0 bg-blue-500 text-white p-1 rounded-full hover:bg-blue-600 transition-all shadow-md"
                      >
                        <User className="w-2.5 h-2.5" />
                      </button>
                    </div>
                    <div>
                      <h3 className="text-[15px] font-bold text-gray-900">{studentData.name}</h3>
                      <p className="text-gray-600 text-[11px]">{studentData.class} • Roll #{studentData.rollNumber}</p>
                      <button 
                        onClick={() => setShowAvatarModal(true)}
                        className="text-blue-600 hover:text-blue-700 text-[11px] font-medium mt-1"
                      >
                        Change Avatar
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-3.5">
                    <div>
                      <label className="block text-[12px] font-medium text-gray-700 mb-1.5">Full Name</label>
                      <input 
                        type="text" 
                        defaultValue={studentData.name}
                        className="w-full px-2.5 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-[11px]"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-[12px] font-medium text-gray-700 mb-1.5">Email Address</label>
                      <input 
                        type="email" 
                        defaultValue="sarah.johnson@student.school.edu"
                        className="w-full px-2.5 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-[11px]"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-[12px] font-medium text-gray-700 mb-1.5">Class</label>
                        <input 
                          type="text" 
                          defaultValue={studentData.class}
                          className="w-full px-2.5 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-[11px]"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-[12px] font-medium text-gray-700 mb-1.5">Roll Number</label>
                        <input 
                          type="text" 
                          defaultValue={studentData.rollNumber}
                          className="w-full px-2.5 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-[11px]"
                        />
                      </div>
                    </div>
                    
                    <div className="flex gap-2.5 pt-1.5">
                      <button className="px-3 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-md hover:from-blue-600 hover:to-indigo-700 transition-all text-[12px] font-medium">
                        Save Changes
                      </button>
                      <button className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-200 border border-gray-200 text-gray-700 rounded-md hover:from-gray-200 hover:to-gray-300 transition-all text-[12px] font-medium">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                    <h3 className="text-[13px] font-bold text-gray-900 mb-3">Security</h3>
                    <div className="space-y-2.5">
                      <button className="w-full text-left px-2.5 py-1.5 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
                        <div className="flex items-center gap-1.5">
                          <div className="w-4 h-4 text-gray-600">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                          </div>
                          <span className="text-[12px] font-medium text-gray-900">Change Password</span>
                        </div>
                        <p className="text-[10px] text-gray-500 ml-5.5 mt-1">Update your account password</p>
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                    <h3 className="text-[13px] font-bold text-gray-900 mb-3">Preferences</h3>
                    <div className="space-y-3.5">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[12px] font-medium text-gray-900">Email Notifications</p>
                          <p className="text-[10px] text-gray-500">Receive email updates</p>
                        </div>
                        <div className="relative inline-block w-9 h-4.5">
                          <input type="checkbox" className="opacity-0 w-0 h-0 peer" defaultChecked />
                          <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 rounded-full transition peer-checked:bg-blue-500"></span>
                          <span className="absolute h-3.5 w-3.5 bg-white rounded-full left-0.5 top-0.5 transition peer-checked:transform peer-checked:translate-x-4.5"></span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[12px] font-medium text-gray-900">Push Notifications</p>
                          <p className="text-[10px] text-gray-500">Mobile app notifications</p>
                        </div>
                        <div className="relative inline-block w-9 h-4.5">
                          <input type="checkbox" className="opacity-0 w-0 h-0 peer" defaultChecked />
                          <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 rounded-full transition peer-checked:bg-blue-500"></span>
                          <span className="absolute h-3.5 w-3.5 bg-white rounded-full left-0.5 top-0.5 transition peer-checked:transform peer-checked:translate-x-4.5"></span>
                        </div>
                      </div>
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
          <div className="bg-white rounded-2xl p-5 max-w-md w-full max-h-[90vh] overflow-auto">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-[15px] font-bold text-gray-900">Change Avatar</h3>
              <button 
                onClick={() => setShowAvatarModal(false)}
                className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-4.5 h-4.5 text-gray-500" />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-3.5">
              {sampleAvatars.map((avatar, index) => (
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
                    className="w-14 h-14 rounded-full object-cover mx-auto"
                  />
                </div>
              ))}
            </div>
            <div className="mt-5 text-center">
              <p className="text-[12px] text-gray-500">Click on any avatar to select it</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SimplifiedStudentDashboard;