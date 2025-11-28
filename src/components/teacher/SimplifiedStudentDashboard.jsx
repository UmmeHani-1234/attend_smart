import React, { useState } from 'react';
import { Home, FileText, Award, AlertCircle, Settings, User, LogOut, Users, CheckCircle, Clock, TrendingUp, X, BookOpen, Calculator, FlaskConical, PenTool, Globe, Music, Palette, Edit, RefreshCw } from 'lucide-react';
import UltraModernHeader from '../UltraModernHeader';

const SimplifiedStudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [showAvatarModal, setShowAvatarModal] = useState(false);

  // Sample data
  const initialStudentData = {
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

  const [studentData, setStudentData] = useState(initialStudentData);
  const [profileData, setProfileData] = useState({
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    class: "Class 10-A",
    rollNumber: "24"
  });

  const assignments = [
    { id: 1, subject: "Mathematics", title: "Chapter 5 Exercises", due: "2024-04-17", dueDisplay: "Apr 17, 2024", status: "pending", priority: "high" },
    { id: 2, subject: "Science", title: "Lab Report - Photosynthesis", due: "2024-04-18", dueDisplay: "Apr 18, 2024", status: "pending", priority: "medium" },
    { id: 3, subject: "English", title: "Essay on Shakespeare", due: "2024-04-20", dueDisplay: "Apr 20, 2024", status: "submitted", priority: "low" },
    { id: 4, subject: "Geography", title: "World Climate Patterns", due: "2024-04-22", dueDisplay: "Apr 22, 2024", status: "pending", priority: "medium" },
    { id: 5, subject: "Music", title: "Instrument Research Paper", due: "2024-04-25", dueDisplay: "Apr 25, 2024", status: "pending", priority: "low" },
    { id: 6, subject: "Art", title: "Abstract Painting Project", due: "2024-04-28", dueDisplay: "Apr 28, 2024", status: "submitted", priority: "high" }
  ];

  const summaryStats = [
    { label: 'Attendance', value: `${studentData.attendancePercentage}%`, icon: CheckCircle, color: 'from-blue-600 to-indigo-500', change: '+2.1%' },
    { label: 'Current Grade', value: studentData.currentGrade, icon: Award, color: 'from-indigo-500 to-purple-600', change: '+0.3' },
    { label: 'GPA', value: studentData.gpa, icon: TrendingUp, color: 'from-violet-600 to-purple-500', change: '+0.1' },
    { label: 'Assignments', value: assignments.filter(a => a.status === 'pending').length, icon: FileText, color: 'from-indigo-600 to-indigo-500', change: '-1' },
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
            { id: 'classes', icon: BookOpen, label: 'My Classes' },
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
              {/* Welcome Banner - Matching teacher dashboard style with image avatar */}
              <div className="bg-gradient-to-r from-blue-600 via-indigo-500 to-indigo-600 rounded-md p-4 mb-5 shadow-sm backdrop-blur-sm border border-white/20 relative overflow-hidden">
                {/* Geometric background elements */}
                <div className="absolute -top-5 -right-5 w-20 h-20 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-white/10 rounded-full"></div>
                <div className="absolute top-3 right-3 w-6 h-6 bg-white/10 rotate-45"></div>
                <div className="absolute bottom-3 left-3 w-5 h-5 bg-white/20 rounded-full"></div>
                
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
                      Welcome back, {studentData.name.split(' ')[1]}! 👋
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
              <div className="flex gap-2 mb-5">
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
                <div className="absolute top-2 right-2 w-4 h-4 bg-indigo-500/10 rotate-45"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-2.5">
                    <div className="flex items-center gap-1">
                      <div className="p-1 bg-gradient-to-br from-blue-600 to-indigo-500 rounded">
                        <FileText className="w-3.5 h-3.5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xs font-bold text-gray-900">Upcoming Assignments</h3>
                        <p className="text-[9px] text-gray-500">Tasks due in the next 7 days</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => setActiveTab('assignments')}
                      className="text-[9px] text-indigo-600 hover:text-indigo-700 font-medium bg-indigo-50 hover:bg-indigo-100 px-1.5 py-0.5 rounded transition-all"
                    >
                      View All
                    </button>
                  </div>
                  
                  <div className="space-y-1.5">
                    {assignments.map((assignment) => (
                      <div key={assignment.id} className="flex items-center gap-1.5 p-1.5 rounded-md hover:bg-indigo-50/50 transition-all border border-gray-100 hover:border-indigo-200 group">
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
                              <span className="text-[7px] px-0.5 py-0.5 bg-indigo-100 text-indigo-800 rounded-full font-medium">
                                {assignment.priority}
                              </span>
                              <span className="text-[7px] px-0.5 py-0.5 bg-amber-100 text-amber-800 rounded-full font-medium">
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
                      <div className="flex items-center gap-0.5 text-indigo-600">
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
              
              {/* Assignment Status Cards in Single Row - Updated colors and geometric designs */}
              <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-gradient-to-br from-blue-600 to-indigo-500 rounded-md p-3 shadow-sm border border-blue-200/30 backdrop-blur-sm text-white relative overflow-hidden">
                  {/* Geometric design elements */}
                  <div className="absolute -top-4 -right-4 w-14 h-14 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/10 rounded-full"></div>
                  <div className="absolute top-3 right-3 w-5 h-5 bg-white/20 rotate-45"></div>
                  
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <p className="text-blue-100 text-[10px]">Total Assignments</p>
                      <p className="text-lg font-bold mt-2">{assignments.length}</p>
                    </div>
                    <FileText className="w-6 h-6 text-blue-200" />
                  </div>
                </div>
                
                <div className="flex-1 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-md p-3 shadow-sm border border-indigo-200/30 backdrop-blur-sm text-white relative overflow-hidden">
                  {/* Geometric design elements */}
                  <div className="absolute -top-4 -right-4 w-14 h-14 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/10 rounded-full"></div>
                  <div className="absolute top-3 right-3 w-5 h-5 bg-white/20 rotate-45"></div>
                  
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <p className="text-indigo-100 text-[10px]">Completed</p>
                      <p className="text-lg font-bold mt-2">{assignments.filter(a => a.status === 'submitted' || a.status === 'graded').length}</p>
                    </div>
                    <CheckCircle className="w-6 h-6 text-indigo-200" />
                  </div>
                </div>
                
                <div className="flex-1 bg-gradient-to-br from-violet-600 to-purple-500 rounded-md p-3 shadow-sm border border-violet-200/30 backdrop-blur-sm text-white relative overflow-hidden">
                  {/* Geometric design elements */}
                  <div className="absolute -top-4 -right-4 w-14 h-14 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/10 rounded-full"></div>
                  <div className="absolute top-3 right-3 w-5 h-5 bg-white/20 rotate-45"></div>
                  
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <p className="text-violet-100 text-[10px]">Pending</p>
                      <p className="text-lg font-bold mt-2">{assignments.filter(a => a.status === 'pending').length}</p>
                    </div>
                    <Clock className="w-6 h-6 text-violet-200" />
                  </div>
                </div>
                
                <div className="flex-1 bg-gradient-to-br from-indigo-600 to-indigo-500 rounded-md p-3 shadow-sm border border-indigo-200/30 backdrop-blur-sm text-white relative overflow-hidden">
                  {/* Geometric design elements */}
                  <div className="absolute -top-4 -right-4 w-14 h-14 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/10 rounded-full"></div>
                  <div className="absolute top-3 right-3 w-5 h-5 bg-white/20 rotate-45"></div>
                  
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <p className="text-indigo-100 text-[10px]">High Priority</p>
                      <p className="text-lg font-bold mt-2">{assignments.filter(a => a.priority === 'high').length}</p>
                    </div>
                    <AlertCircle className="w-6 h-6 text-indigo-200" />
                  </div>
                </div>
              </div>
              
              {/* Assignments Table - With new colors and geometric designs */}
              <div className="bg-white rounded-md shadow-sm border border-gray-100 overflow-hidden relative">
                {/* Geometric background elements */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-indigo-500"></div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-indigo-500/10 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/10 rounded-full"></div>
                <div className="absolute top-6 right-6 w-6 h-6 bg-indigo-500/20 rotate-45"></div>
                
                <div className="overflow-x-auto relative z-10">
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
                        
                        // Map assignment types to icons
                        const assignmentTypeIcons = {
                          'Exercises': FileText,
                          'Report': FileText,
                          'Essay': PenTool,
                          'Paper': FileText,
                          'Project': Palette,
                          'Patterns': Globe
                        };
                        
                        // Extract assignment type from title for icon mapping
                        const assignmentType = assignment.title.split(' - ')[0] || assignment.title.split(' ')[0];
                        const AssignmentIcon = assignmentTypeIcons[assignmentType] || FileText;
                        
                        return (
                          <tr key={assignment.id} className="hover:bg-indigo-50/50 transition-colors duration-150">
                            <td className="px-3 py-2 whitespace-nowrap">
                              <div className="flex items-center">
                                <AssignmentIcon className="w-2.5 h-2.5 text-indigo-400 mr-1" />
                                <div className="text-[9px] font-medium text-gray-900">{assignment.title}</div>
                              </div>
                            </td>
                            <td className="px-3 py-2 whitespace-nowrap">
                              <div className="flex items-center">
                                <SubjectIcon className="w-2.5 h-2.5 text-indigo-400 mr-1" />
                                <div className="text-[9px] text-gray-900">{assignment.subject}</div>
                              </div>
                            </td>
                            <td className="px-3 py-2 whitespace-nowrap text-[9px] text-gray-900">{assignment.dueDisplay}</td>
                            <td className="px-3 py-2 whitespace-nowrap">
                              <span className={`px-1.5 py-0.5 text-[8px] font-medium rounded-full ${
                                assignment.priority === 'high' ? 'bg-red-100 text-red-800' :
                                assignment.priority === 'medium' ? 'bg-amber-100 text-amber-800' :
                                'bg-green-100 text-green-800'
                              }`}>
                                {assignment.priority.charAt(0).toUpperCase() + assignment.priority.slice(1)}
                              </span>
                            </td>
                            <td className="px-3 py-2 whitespace-nowrap">
                              <span className={`px-1.5 py-0.5 text-[8px] font-medium rounded-full ${
                                assignment.status === 'submitted' ? 'bg-indigo-100 text-indigo-800' :
                                assignment.status === 'graded' ? 'bg-blue-100 text-blue-800' :
                                'bg-amber-100 text-amber-800'
                              }`}>
                                {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                              </span>
                            </td>
                            <td className="px-3 py-2 whitespace-nowrap text-[9px] text-gray-900">
                              
                               <button className="text-indigo-600 hover:text-indigo-900 mr-2">View</button>
                              <button className="text-indigo-600 hover:text-indigo-900">Submit</button>
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
              <div className="bg-gradient-to-r from-blue-600 via-indigo-500 to-indigo-600 rounded-md p-4 mb-5 shadow-sm backdrop-blur-sm border border-white/20 relative overflow-hidden">
                <div className="absolute -top-5 -right-5 w-20 h-20 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-white/10 rounded-full"></div>
                <div className="absolute top-4 right-4 w-7 h-7 bg-white/10 rotate-45"></div>
                
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <h2 className="text-sm font-bold text-white mb-1.5">Academic Performance</h2>
                    <p className="text-xs text-blue-100">Track your grades and academic progress</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-white/20 rounded-md p-2">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Grade Status Cards in Single Row - Matched dashboard size */}
              <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-gradient-to-br from-blue-600 to-indigo-500 rounded-md p-3 shadow-sm border border-blue-200/30 backdrop-blur-sm text-white relative overflow-hidden">
                  <div className="absolute -top-4 -right-4 w-14 h-14 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/10 rounded-full"></div>
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <p className="text-[10px] text-blue-100">Current GPA</p>
                      <p className="text-base font-bold mt-2">{studentData.gpa}</p>
                    </div>
                    <TrendingUp className="w-6 h-6 text-blue-200 relative z-10" />
                  </div>
                </div>
                
                <div className="flex-1 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-md p-3 shadow-sm border border-indigo-200/30 backdrop-blur-sm text-white relative overflow-hidden">
                  <div className="absolute -top-4 -right-4 w-14 h-14 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/10 rounded-full"></div>
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <p className="text-[10px] text-indigo-100">Average Score</p>
                      <p className="text-base font-bold mt-2">87.5%</p>
                    </div>
                    <Award className="w-6 h-6 text-indigo-200 relative z-10" />
                  </div>
                </div>
                
                <div className="flex-1 bg-gradient-to-br from-violet-600 to-purple-500 rounded-md p-3 shadow-sm border border-violet-200/30 backdrop-blur-sm text-white relative overflow-hidden">
                  <div className="absolute -top-4 -right-4 w-14 h-14 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/10 rounded-full"></div>
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <p className="text-[10px] text-violet-100">Class Rank</p>
                      <p className="text-base font-bold mt-2">5th</p>
                    </div>
                    <Users className="w-6 h-6 text-violet-200 relative z-10" />
                  </div>
                </div>
                
                <div className="flex-1 bg-gradient-to-br from-indigo-600 to-indigo-500 rounded-md p-3 shadow-sm border border-indigo-200/30 backdrop-blur-sm text-white relative overflow-hidden">
                  <div className="absolute -top-4 -right-4 w-14 h-14 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/10 rounded-full"></div>
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <p className="text-[10px] text-indigo-100">Total Subjects</p>
                      <p className="text-base font-bold mt-2">4</p>
                    </div>
                    <BookOpen className="w-6 h-6 text-indigo-200 relative z-10" />
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
                        { id: 4, subject: 'History', score: 95, grade: 'A', teacher: 'Mr. Brown' },
                        { id: 5, subject: 'Geography', score: 78, grade: 'B', teacher: 'Mrs. Davis' },
                        { id: 6, subject: 'Music', score: 90, grade: 'A-', teacher: 'Mr. Wilson' },
                        { id: 7, subject: 'Art', score: 87, grade: 'B+', teacher: 'Ms. Taylor' }
                      ].map((subject) => {
                        // Map subjects to icons
                        const subjectIcons = {
                          'Mathematics': Calculator,
                          'Science': FlaskConical,
                          'English': PenTool,
                          'History': BookOpen,
                          'Geography': Globe,
                          'Music': Music,
                          'Art': Palette
                        };
                        
                        const SubjectIcon = subjectIcons[subject.subject] || BookOpen;
                        
                        return (
                          <tr key={subject.id} className="hover:bg-indigo-50/50">
                            <td className="px-2.5 py-1.5 whitespace-nowrap">
                              <div className="flex items-center text-[10px] font-medium text-gray-900">
                                <SubjectIcon className="w-2.5 h-2.5 mr-1 text-indigo-400" />
                                {subject.subject}
                              </div>
                            </td>
                            <td className="px-2.5 py-1.5 whitespace-nowrap">
                              <div className="text-[10px] text-gray-500">{subject.score}%</div>
                            </td>
                            <td className="px-2.5 py-1.5 whitespace-nowrap">
                              <span className={`px-1 inline-flex text-[8px] leading-3 font-semibold rounded-full ${
                                subject.grade.startsWith('A') ? 'bg-indigo-100 text-indigo-800' : 
                                subject.grade.startsWith('B') ? 'bg-blue-100 text-blue-800' : 
                                'bg-purple-100 text-purple-800'
                              }`}>
                                {subject.grade}
                              </span>
                            </td>
                            <td className="px-2.5 py-1.5 whitespace-nowrap">
                              <div className="w-16 bg-gray-200 rounded-full h-1">
                                <div 
                                  className={`h-1 rounded-full ${
                                    subject.score >= 90 ? 'bg-indigo-500' : 
                                    subject.score >= 80 ? 'bg-blue-500' : 
                                    'bg-purple-500'
                                  }`} 
                                  style={{ width: `${subject.score}%` }}
                                ></div>
                              </div>
                            </td>
                            <td className="px-2.5 py-1.5 whitespace-nowrap">
                              <div className="text-[10px] text-gray-500">{subject.teacher}</div>
                            </td>
                            <td className="px-2.5 py-1.5 whitespace-nowrap text-[10px] font-medium">
                              <button className="text-indigo-600 hover:text-indigo-900 mr-1.5">Details</button>
                              <button className="text-indigo-600 hover:text-indigo-900">Report</button>
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

          {activeTab === 'notices' && (
            <div>
              <h2 className="text-[11px] font-bold text-gray-900 mb-3">Important Notices</h2>
              <div className="bg-white rounded-sm shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-2 border-b border-gray-100">
                  <h3 className="font-bold text-gray-900 text-[10px] mb-1">Science Fair Registration</h3>
                  <p className="text-gray-600 text-[9px] mb-1">Registration for the annual Science Fair is now open. All students from grades 9-12 are encouraged to participate.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-[9px]">Science Department • Mar 15, 2024</span>
                    <div className="flex gap-1">
                      <span className="px-1 py-0.5 bg-blue-100 text-blue-800 text-[9px] font-medium rounded-full">Event</span>
                      <span className="px-1 py-0.5 bg-green-100 text-green-800 text-[9px] font-medium rounded-full">Science</span>
                    </div>
                  </div>
                </div>
                <div className="p-2 border-b border-gray-100">
                  <h3 className="font-bold text-gray-900 text-[10px] mb-1">Library Closure Notice</h3>
                  <p className="text-gray-600 text-[9px] mb-1">The school library will be closed for maintenance from April 18th to April 20th. We apologize for any inconvenience.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-[9px]">Library Staff • Mar 12, 2024</span>
                    <div className="flex gap-1">
                      <span className="px-1 py-0.5 bg-yellow-100 text-yellow-800 text-[9px] font-medium rounded-full">Maintenance</span>
                      <span className="px-1 py-0.5 bg-purple-100 text-purple-800 text-[9px] font-medium rounded-full">Library</span>
                    </div>
                  </div>
                </div>
                <div className="p-2">
                  <h3 className="font-bold text-gray-900 text-[10px] mb-1">Art Exhibition Inauguration</h3>
                  <p className="text-gray-600 text-[9px] mb-1">Join us for the inauguration of our annual student art exhibition on April 22nd at 3 PM in the school gallery.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-[9px]">Art Department • Apr 11, 2024</span>
                    <div className="flex gap-1">
                      <span className="px-1 py-0.5 bg-pink-100 text-pink-800 text-[9px] font-medium rounded-full">Event</span>
                      <span className="px-1 py-0.5 bg-purple-100 text-purple-800 text-[9px] font-medium rounded-full">Art</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'classes' && (
            <div>
              {/* Banner for Classes Section */}
              <div className="bg-gradient-to-r from-blue-600 via-indigo-500 to-indigo-600 rounded-md p-4 mb-5 shadow-sm backdrop-blur-sm border border-white/20 relative overflow-hidden">
                <div className="absolute -top-5 -right-5 w-20 h-20 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-white/10 rounded-full"></div>
                <div className="absolute top-4 right-4 w-7 h-7 bg-white/10 rotate-45"></div>
                
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <h2 className="text-sm font-bold text-white mb-1.5">My Classes</h2>
                    <p className="text-xs text-blue-100">View all your enrolled classes and subjects</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-white/20 rounded-md p-2">
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Classes Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {/* Mathematics Class Card */}
                <div className="bg-white rounded-md shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500/10 rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-indigo-500/10 rounded-full"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=math&backgroundColor=3b82f6&radius=50" alt="Teacher" className="w-6 h-6 rounded-full" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-[11px]">Mathematics</h3>
                          <p className="text-gray-600 text-[10px]">Class 10-A</p>
                        </div>
                      </div>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-[9px] font-medium rounded-full">Active</span>
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-[10px] text-gray-600">
                        <span className="font-medium">Teacher:</span> Mr. Johnson
                      </div>
                      <div className="text-[10px] text-gray-600">
                        <span className="font-medium">Period:</span> 2nd
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-[10px] text-gray-600">
                        <span className="font-medium">Students:</span> 32
                      </div>
                      <div className="text-[10px] text-gray-600">
                        <span className="font-medium">Room:</span> 204
                      </div>
                    </div>
                    
                    <div className="pt-2 border-t border-gray-100">
                      <button 
                        onClick={() => alert('Opening Mathematics class details...')}
                        className="w-full py-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-[10px] font-medium rounded-md hover:from-blue-600 hover:to-indigo-700 transition-all"
                      >
                        View Class Details
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Science Class Card */}
                <div className="bg-white rounded-md shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-500/10 rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-emerald-500/10 rounded-full"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=science&backgroundColor=10b981&radius=50" alt="Teacher" className="w-6 h-6 rounded-full" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-[11px]">Science</h3>
                          <p className="text-gray-600 text-[10px]">Class 10-A</p>
                        </div>
                      </div>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-[9px] font-medium rounded-full">Active</span>
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-[10px] text-gray-600">
                        <span className="font-medium">Teacher:</span> Dr. Smith
                      </div>
                      <div className="text-[10px] text-gray-600">
                        <span className="font-medium">Period:</span> 3rd
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-[10px] text-gray-600">
                        <span className="font-medium">Students:</span> 30
                      </div>
                      <div className="text-[10px] text-gray-600">
                        <span className="font-medium">Room:</span> 301
                      </div>
                    </div>
                    
                    <div className="pt-2 border-t border-gray-100">
                      <button 
                        onClick={() => alert('Opening Science class details...')}
                        className="w-full py-1.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-[10px] font-medium rounded-md hover:from-green-600 hover:to-emerald-700 transition-all"
                      >
                        View Class Details
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* English Class Card */}
                <div className="bg-white rounded-md shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-purple-500/10 rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-violet-500/10 rounded-full"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center">
                          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=english&backgroundColor=8b5cf6&radius=50" alt="Teacher" className="w-6 h-6 rounded-full" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-[11px]">English</h3>
                          <p className="text-gray-600 text-[10px]">Class 10-A</p>
                        </div>
                      </div>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-[9px] font-medium rounded-full">Active</span>
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-[10px] text-gray-600">
                        <span className="font-medium">Teacher:</span> Ms. Williams
                      </div>
                      <div className="text-[10px] text-gray-600">
                        <span className="font-medium">Period:</span> 1st
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-[10px] text-gray-600">
                        <span className="font-medium">Students:</span> 31
                      </div>
                      <div className="text-[10px] text-gray-600">
                        <span className="font-medium">Room:</span> 105
                      </div>
                    </div>
                    
                    <div className="pt-2 border-t border-gray-100">
                      <button 
                        onClick={() => alert('Opening English class details...')}
                        className="w-full py-1.5 bg-gradient-to-r from-purple-500 to-violet-600 text-white text-[10px] font-medium rounded-md hover:from-purple-600 hover:to-violet-700 transition-all"
                      >
                        View Class Details
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* History Class Card */}
                <div className="bg-white rounded-md shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-amber-500/10 rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-orange-500/10 rounded-full"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=history&backgroundColor=f59e0b&radius=50" alt="Teacher" className="w-6 h-6 rounded-full" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-[11px]">History</h3>
                          <p className="text-gray-600 text-[10px]">Class 10-A</p>
                        </div>
                      </div>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-[9px] font-medium rounded-full">Active</span>
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-[10px] text-gray-600">
                        <span className="font-medium">Teacher:</span> Mr. Brown
                      </div>
                      <div className="text-[10px] text-gray-600">
                        <span className="font-medium">Period:</span> 4th
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-[10px] text-gray-600">
                        <span className="font-medium">Students:</span> 29
                      </div>
                      <div className="text-[10px] text-gray-600">
                        <span className="font-medium">Room:</span> 208
                      </div>
                    </div>
                    
                    <div className="pt-2 border-t border-gray-100">
                      <button 
                        onClick={() => alert('Opening History class details...')}
                        className="w-full py-1.5 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-[10px] font-medium rounded-md hover:from-amber-600 hover:to-orange-700 transition-all"
                      >
                        View Class Details
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Geography Class Card */}
                <div className="bg-white rounded-md shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-cyan-500/10 rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-teal-500/10 rounded-full"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center">
                          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=geography&backgroundColor=06b6d4&radius=50" alt="Teacher" className="w-6 h-6 rounded-full" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-[11px]">Geography</h3>
                          <p className="text-gray-600 text-[10px]">Class 10-A</p>
                        </div>
                      </div>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-[9px] font-medium rounded-full">Active</span>
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-[10px] text-gray-600">
                        <span className="font-medium">Teacher:</span> Mrs. Davis
                      </div>
                      <div className="text-[10px] text-gray-600">
                        <span className="font-medium">Period:</span> 5th
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-[10px] text-gray-600">
                        <span className="font-medium">Students:</span> 30
                      </div>
                      <div className="text-[10px] text-gray-600">
                        <span className="font-medium">Room:</span> 305
                      </div>
                    </div>
                    
                    <div className="pt-2 border-t border-gray-100">
                      <button 
                        onClick={() => alert('Opening Geography class details...')}
                        className="w-full py-1.5 bg-gradient-to-r from-cyan-500 to-teal-600 text-white text-[10px] font-medium rounded-md hover:from-cyan-600 hover:to-teal-700 transition-all"
                      >
                        View Class Details
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Art Class Card */}
                <div className="bg-white rounded-md shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-pink-500/10 rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-rose-500/10 rounded-full"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
                          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=art&backgroundColor=ec4899&radius=50" alt="Teacher" className="w-6 h-6 rounded-full" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-[11px]">Art</h3>
                          <p className="text-gray-600 text-[10px]">Class 10-A</p>
                        </div>
                      </div>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-[9px] font-medium rounded-full">Active</span>
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-[10px] text-gray-600">
                        <span className="font-medium">Teacher:</span> Ms. Taylor
                      </div>
                      <div className="text-[10px] text-gray-600">
                        <span className="font-medium">Period:</span> 6th
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-[10px] text-gray-600">
                        <span className="font-medium">Students:</span> 28
                      </div>
                      <div className="text-[10px] text-gray-600">
                        <span className="font-medium">Room:</span> Art Hall
                      </div>
                    </div>
                    
                    <div className="pt-2 border-t border-gray-100">
                      <button 
                        onClick={() => alert('Opening Art class details...')}
                        className="w-full py-1.5 bg-gradient-to-r from-pink-500 to-rose-600 text-white text-[10px] font-medium rounded-md hover:from-pink-600 hover:to-rose-700 transition-all"
                      >
                        View Class Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Class Schedule Summary */}
              <div className="bg-white rounded-md shadow-sm border border-gray-100 p-4">
                <h3 className="font-bold text-gray-900 text-[11px] mb-3">Weekly Class Schedule</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-3 py-2 text-left text-[10px] font-medium text-gray-500 uppercase">Period</th>
                        <th className="px-3 py-2 text-left text-[10px] font-medium text-gray-500 uppercase">Monday</th>
                        <th className="px-3 py-2 text-left text-[10px] font-medium text-gray-500 uppercase">Tuesday</th>
                        <th className="px-3 py-2 text-left text-[10px] font-medium text-gray-500 uppercase">Wednesday</th>
                        <th className="px-3 py-2 text-left text-[10px] font-medium text-gray-500 uppercase">Thursday</th>
                        <th className="px-3 py-2 text-left text-[10px] font-medium text-gray-500 uppercase">Friday</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {[
                        { period: '1st', mon: 'English', tue: 'Mathematics', wed: 'Science', thu: 'History', fri: 'Geography' },
                        { period: '2nd', mon: 'Mathematics', tue: 'Science', wed: 'English', thu: 'Geography', fri: 'Art' },
                        { period: '3rd', mon: 'Science', tue: 'History', wed: 'Mathematics', thu: 'English', fri: 'History' },
                        { period: '4th', mon: 'History', tue: 'Geography', wed: 'Art', thu: 'Mathematics', fri: 'English' },
                        { period: '5th', mon: 'Geography', tue: 'English', wed: 'History', thu: 'Art', fri: 'Mathematics' },
                        { period: '6th', mon: 'Art', tue: 'Art', wed: 'Geography', thu: 'Science', fri: 'Science' },
                      ].map((row, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-3 py-2 whitespace-nowrap text-[10px] font-medium text-gray-900">{row.period}</td>
                          <td className="px-3 py-2 whitespace-nowrap text-[10px] text-gray-700">{row.mon}</td>
                          <td className="px-3 py-2 whitespace-nowrap text-[10px] text-gray-700">{row.tue}</td>
                          <td className="px-3 py-2 whitespace-nowrap text-[10px] text-gray-700">{row.wed}</td>
                          <td className="px-3 py-2 whitespace-nowrap text-[10px] text-gray-700">{row.thu}</td>
                          <td className="px-3 py-2 whitespace-nowrap text-[10px] text-gray-700">{row.fri}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-[10px] font-bold text-gray-900">Account Settings</h2>
                  <p className="text-gray-600 text-[9px]">Manage your profile and account preferences</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Profile Card - Reduced by 2 units */}
                <div className="lg:col-span-2 bg-white rounded-md shadow-sm border border-gray-100 p-4">
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="relative">
                      <img 
                        src={studentAvatar} 
                        alt="Student Avatar" 
                        className="w-12 h-12 rounded-lg object-cover shadow-md border-2 border-indigo-100"
                      />
                      <button 
                        onClick={() => setShowAvatarModal(true)}
                        className="absolute bottom-0 right-0 bg-indigo-500 text-white p-1 rounded-full hover:bg-indigo-600 transition-all shadow-md"
                      >
                        <Edit className="w-2 h-2" />
                      </button>
                    </div>
                    <div>
                      <h3 className="text-[10px] font-bold text-gray-900">{profileData.name}</h3>
                      <p className="text-gray-600 text-[9px]">{profileData.class} • Roll #{profileData.rollNumber}</p>
                      <button 
                        onClick={() => setShowAvatarModal(true)}
                        className="text-indigo-600 hover:text-indigo-700 text-[9px] font-medium mt-1"
                      >
                        Change Avatar
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-2.5">
                    <div>
                      <label className="block text-[9px] font-medium text-gray-700 mb-1">Full Name</label>
                      <input 
                        type="text" 
                        value={profileData.name}
                        onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                        className="w-full px-2.5 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-300 text-[9px]"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-[9px] font-medium text-gray-700 mb-1">Email Address</label>
                      <input 
                        type="email" 
                        value={profileData.email}
                        onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                        className="w-full px-2.5 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-300 text-[9px]"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-[9px] font-medium text-gray-700 mb-1">Class</label>
                      <input 
                        type="text" 
                        value={profileData.class}
                        onChange={(e) => setProfileData({...profileData, class: e.target.value})}
                        className="w-full px-2.5 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-300 text-[9px]"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-[9px] font-medium text-gray-700 mb-1">Roll Number</label>
                      <input 
                        type="text" 
                        value={profileData.rollNumber}
                        onChange={(e) => setProfileData({...profileData, rollNumber: e.target.value})}
                        className="w-full px-2.5 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-300 text-[9px]"
                      />
                    </div>
                    
                    <div className="flex gap-1.5 pt-2.5">
                      <button 
                        onClick={() => {
                          setProfileData({
                            name: studentData.name,
                            email: 'sarah.johnson@example.com',
                            class: studentData.class,
                            rollNumber: studentData.rollNumber
                          });
                        }}
                        className="px-1.5 py-0.5 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-all text-[9px]"
                      >
                        Cancel
                      </button>
                      <button 
                        onClick={() => {
                          setStudentData({
                            ...studentData,
                            name: profileData.name,
                            class: profileData.class,
                            rollNumber: profileData.rollNumber
                          });
                          alert('Profile updated successfully!');
                        }}
                        className="px-1.5 py-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded hover:from-indigo-600 hover:to-purple-700 transition-all shadow-sm hover:shadow text-[9px]"
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Settings Navigation - Reduced by 2 units */}
                <div className="space-y-2.5">
                  <div className="bg-white rounded-md shadow-sm border border-gray-100 p-4">
                    <h3 className="text-[10px] font-bold text-gray-900 mb-2.5">Settings</h3>
                    <div className="space-y-1">
                      <button 
                        className="w-full text-left px-1.5 py-0.5 bg-indigo-50 text-indigo-600 rounded font-medium text-[9px]"
                      >
                        Account
                      </button>
                      <button 
                        className="w-full text-left px-1.5 py-0.5 text-gray-600 hover:bg-gray-50 rounded text-[9px]"
                      >
                        Security
                      </button>
                      <button 
                        className="w-full text-left px-1.5 py-0.5 text-gray-600 hover:bg-gray-50 rounded text-[9px]"
                      >
                        Notifications
                      </button>
                      <button 
                        className="w-full text-left px-1.5 py-0.5 text-gray-600 hover:bg-gray-50 rounded text-[9px]"
                      >
                        Appearance
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-md shadow-sm border border-gray-100 p-4">
                    <h3 className="text-[10px] font-bold text-gray-900 mb-2.5">Actions</h3>
                    <div className="space-y-1.5">
                      <button 
                        onClick={() => window.location.reload()}
                        className="w-full flex items-center gap-1 px-1.5 py-0.5 text-gray-600 hover:bg-gray-50 rounded text-[9px]"
                      >
                        <RefreshCw className="w-2 h-2" />
                        Refresh Settings
                      </button>
                      <button 
                        onClick={() => {
                          setProfileData({
                            name: 'Sarah Johnson',
                            email: 'sarah.johnson@example.com',
                            class: 'Class 10-A',
                            rollNumber: '24'
                          });
                          setStudentData(initialStudentData);
                        }}
                        className="w-full flex items-center gap-1 px-1.5 py-0.5 text-gray-600 hover:bg-gray-50 rounded text-[9px]"
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