import React, { useState } from 'react';
import { Users, School, Utensils, TrendingUp, AlertTriangle, FileText, Settings, LogOut, Home, Search, Filter, Download, Plus, Eye, Edit, Trash2, Printer, BarChart, PieChart, LineChart, Calendar, Clock, Shield, MapPin, CheckCircle, XCircle, RefreshCw, Bell, Menu, X, Building, Activity, User, Book, Target, Award, Camera, Mail, Save } from 'lucide-react';
import { BarChart as RechartsBarChart, Bar, LineChart as RechartsLineChart, Line, PieChart as RechartsPieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';
import UltraModernHeader from '../UltraModernHeader';

const GovernmentDashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('home');
  const [activeSettingsTab, setActiveSettingsTab] = useState('profile');
  const [selectedDistrict, setSelectedDistrict] = useState('All Districts');
  const [reportPeriod, setReportPeriod] = useState('monthly'); // weekly, monthly, yearly

  // Sample data for the dashboard
  const districtData = {
    name: "Central District",
    totalStudents: 12547,
    totalSchools: 42,
    mealsPerStudent: 1,
    totalMeals: 12547,
    attendanceRate: 92.5,
    schoolsNeedingSupport: 8,
    averageClassSize: 30
  };

  // Sample attendance trend data
  const attendanceTrendData = [
    { month: 'Jan', attendance: 89.2, schools: 38 },
    { month: 'Feb', attendance: 90.5, schools: 39 },
    { month: 'Mar', attendance: 91.8, schools: 40 },
    { month: 'Apr', attendance: 92.1, schools: 40 },
    { month: 'May', attendance: 92.5, schools: 42 },
    { month: 'Jun', attendance: 92.3, schools: 41 },
  ];

  // Sample alerts data
  const alerts = [
    { id: 1, type: 'safety', message: 'Unauthorized entry detected at Riverside High', time: '10 mins ago', severity: 'high', status: 'new' },
    { id: 2, type: 'performance', message: 'Lincoln Elementary showing significant improvement', time: '25 mins ago', severity: 'positive', status: 'new' },
    { id: 3, type: 'resource', message: 'Budget allocation for Jefferson Middle School', time: '1 hour ago', severity: 'medium', status: 'acknowledged' },
  ];

  // Sample schools data
  const schools = [
    { id: 1, name: 'Riverside High School', students: 1250, attendance: 94.2, performance: 'A', alerts: 2 },
    { id: 2, name: 'Lincoln Elementary', students: 850, attendance: 96.8, performance: 'A+', alerts: 0 },
    { id: 3, name: 'Jefferson Middle School', students: 920, attendance: 89.5, performance: 'B', alerts: 3 },
    { id: 4, name: 'Washington High School', students: 1100, attendance: 91.7, performance: 'B+', alerts: 1 },
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'bg-red-50 border-red-200 text-red-800';
      case 'high': return 'bg-orange-50 border-orange-200 text-orange-800';
      case 'medium': return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'positive': return 'bg-green-50 border-green-200 text-green-800';
      default: return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  const getSeverityColorSolid = (severity) => {
    switch (severity) {
      case 'critical': return 'bg-red-500 text-white';
      case 'high': return 'bg-orange-500 text-white';
      case 'medium': return 'bg-yellow-500 text-white';
      case 'positive': return 'bg-green-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getAlertIcon = (type) => {
    switch (type) {
      case 'safety': return <Shield className="w-5 h-5" />;
      case 'performance': return <TrendingUp className="w-5 h-5" />;
      case 'resource': return <Utensils className="w-5 h-5" />;
      default: return <Bell className="w-5 h-5" />;
    }
  };

  const getBarColor = (value) => {
    if (value >= 95) return '#10B981'; // green
    if (value >= 90) return '#3B82F6'; // blue
    if (value >= 85) return '#F59E0B'; // amber
    return '#EF4444'; // red
  };

  const summaryStats = [
    { label: 'Total Students', value: districtData.totalStudents.toLocaleString(), icon: Users, color: 'from-blue-500 to-blue-600', change: '+150' },
    { label: 'Total Schools', value: districtData.totalSchools, icon: School, color: 'from-blue-400 to-indigo-500', change: '+2' },
    { label: 'Daily Meals', value: districtData.totalMeals.toLocaleString(), icon: Utensils, color: 'from-indigo-400 to-indigo-500', change: '+150' },
    { label: 'Attendance Rate', value: `${districtData.attendanceRate}%`, icon: TrendingUp, color: 'from-indigo-500 to-purple-600', change: '+0.8%' },
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
                GD
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-green-500 rounded-full border border-white"></div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1">
                <span className="text-[11px] font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent truncate block">
                  Smart Attendance
                </span>
              </div>
              <p className="text-[10px] text-gray-500 truncate">Government</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-2 pt-0 space-y-0.5 overflow-y-auto">
          {[
            { id: 'home', icon: Home, label: 'Dashboard Home' },
            { id: 'schools', icon: School, label: 'Schools' },
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
            dashboardTitle="Government Official Dashboard"
            userType="Government"
            userName="Government Official"
            userRole="Education Oversight"
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
                    <h2 className="text-base font-bold text-white mb-1.5">Good Morning, Official! 👋</h2>
                    <p className="text-[10px] text-blue-100 mb-2">Monitor educational statistics and policy implementation across districts</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <div className="flex items-center bg-white/10 rounded-full px-2.5 py-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-1.5"></div>
                        <span className="text-[10px] text-white font-medium">{districtData.totalSchools} active schools</span>
                      </div>
                      <div className="flex items-center bg-white/10 rounded-full px-2.5 py-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-1.5"></div>
                        <span className="text-[10px] text-white font-medium">{alerts.filter(a => a.status === 'new').length} new alerts</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-white/20 rounded-md p-2">
                      <Building className="w-5 h-5 text-white" />
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
                          <div className="text-base font-bold text-white">{stat.value}</div>
                          <div className="text-[10px] text-white/80">{stat.label}</div>
                        </div>
                      </div>
                      <div className="text-[10px] text-white/90 font-medium">+{stat.change} from last period</div>
                    </div>
                  );
                })}
              </div>

              {/* Charts and Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Attendance Trends Chart */}
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-md p-4 shadow-sm border border-blue-200/30 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-white/10 rounded-full"></div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-sm font-bold text-white">Attendance Trends</h2>
                    <div className="flex gap-1">
                      <button 
                        onClick={() => setReportPeriod('weekly')}
                        className={`px-2 py-1 text-[10px] rounded-md ${reportPeriod === 'weekly' ? 'bg-white text-blue-600' : 'bg-white/20 text-white'}`}
                      >
                        Weekly
                      </button>
                      <button 
                        onClick={() => setReportPeriod('monthly')}
                        className={`px-2 py-1 text-[10px] rounded-md ${reportPeriod === 'monthly' ? 'bg-white text-blue-600' : 'bg-white/20 text-white'}`}
                      >
                        Monthly
                      </button>
                      <button 
                        onClick={() => setReportPeriod('yearly')}
                        className={`px-2 py-1 text-[10px] rounded-md ${reportPeriod === 'yearly' ? 'bg-white text-blue-600' : 'bg-white/20 text-white'}`}
                      >
                        Yearly
                      </button>
                    </div>
                  </div>
                  <div className="h-48 bg-white rounded-md p-3 border border-gray-200">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsLineChart data={attendanceTrendData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(229, 231, 235, 1)" />
                        <XAxis 
                          dataKey="month" 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fill: 'rgba(107, 114, 128, 1)', fontSize: 10 }}
                        />
                        <YAxis 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fill: 'rgba(107, 114, 128, 1)', fontSize: 10 }}
                        />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'rgba(255,255,255,0.9)', 
                            borderRadius: '8px',
                            border: '1px solid #e5e7eb',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                            fontSize: '11px'
                          }} 
                        />
                        <Line 
                          type="monotone" 
                          dataKey="attendance" 
                          stroke="#1e40af" 
                          strokeWidth={2}
                          dot={{ r: 6, fill: '#fff', strokeWidth: 2, stroke: '#1e40af' }}
                          activeDot={{ r: 8, fill: '#fff', strokeWidth: 2, stroke: '#1e3a8a' }}
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
                    <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">View All</button>
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

              {/* Schools Overview */}
              <div className="bg-white rounded-md shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-4 border-b border-gray-100">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <h3 className="text-sm font-bold text-gray-900">Schools Overview</h3>
                    <div className="flex flex-wrap gap-2">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Search schools..."
                          className="pl-8 pr-3 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                        />
                        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      </div>
                      <select 
                        value={selectedDistrict}
                        onChange={(e) => setSelectedDistrict(e.target.value)}
                        className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="All Districts">All Districts</option>
                        <option value="Central">Central District</option>
                        <option value="North">North District</option>
                        <option value="South">South District</option>
                      </select>
                      <button className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-md hover:from-blue-600 hover:to-indigo-700 transition-all text-[10px] shadow-sm hover:shadow-md font-medium">
                        <Plus className="w-3 h-3" />
                        Add School
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                      <tr>
                        <th className="px-3 py-2 text-left text-[10px] font-semibold text-indigo-700 uppercase tracking-wider">School Name</th>
                        <th className="px-3 py-2 text-left text-[10px] font-semibold text-indigo-700 uppercase tracking-wider">Students</th>
                        <th className="px-3 py-2 text-left text-[10px] font-semibold text-indigo-700 uppercase tracking-wider">Attendance</th>
                        <th className="px-3 py-2 text-left text-[10px] font-semibold text-indigo-700 uppercase tracking-wider">Performance</th>
                        <th className="px-3 py-2 text-left text-[10px] font-semibold text-indigo-700 uppercase tracking-wider">Alerts</th>
                        <th className="px-3 py-2 text-left text-[10px] font-semibold text-indigo-700 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-50">
                      {schools.map((school) => (
                        <tr key={school.id} className="hover:bg-indigo-50/50 transition-colors duration-150">
                          <td className="px-3 py-2 whitespace-nowrap text-[10px] font-medium text-gray-900">{school.name}</td>
                          <td className="px-3 py-2 whitespace-nowrap text-[10px] text-gray-600">{school.students.toLocaleString()}</td>
                          <td className="px-3 py-2 whitespace-nowrap text-[10px] font-medium text-gray-900">{school.attendance}%</td>
                          <td className="px-3 py-2 whitespace-nowrap">
                            <span className="px-2 py-1 text-[8px] font-semibold rounded-full bg-green-100 text-green-800">
                              {school.performance}
                            </span>
                          </td>
                          <td className="px-3 py-2 whitespace-nowrap text-[10px] font-medium text-gray-900">{school.alerts}</td>
                          <td className="px-3 py-2 whitespace-nowrap text-[10px]">
                            <div className="flex items-center gap-1">
                              <button className="p-1 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                                <Eye className="w-3 h-3" />
                              </button>
                              <button className="p-1 text-gray-500 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors">
                                <Edit className="w-3 h-3" />
                              </button>
                              <button className="p-1 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors">
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

          {/* Schools Tab */}
          {activeTab === 'schools' && (
            <div>
              {/* Welcome Banner */}
              <div className="bg-gradient-to-r from-blue-600 via-indigo-500 to-indigo-600 rounded-md p-4 mb-5 shadow-sm backdrop-blur-sm border border-white/20 relative overflow-hidden">
                <div className="absolute -top-5 -right-5 w-20 h-20 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-white/10 rounded-full"></div>
                <div className="absolute top-4 right-4 w-7 h-7 bg-white/10 rotate-45"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div>
                    <h2 className="text-base font-bold text-white mb-1.5">School Management Dashboard</h2>
                    <p className="text-[10px] text-blue-100 mb-2">Manage and monitor all schools under your jurisdiction</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <div className="flex items-center bg-white/10 rounded-full px-2.5 py-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-1.5"></div>
                        <span className="text-[10px] text-white font-medium">{districtData.totalSchools} active schools</span>
                      </div>
                      <div className="flex items-center bg-white/10 rounded-full px-2.5 py-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-1.5"></div>
                        <span className="text-[10px] text-white font-medium">{districtData.totalStudents.toLocaleString()} total students</span>
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

              <div className="flex justify-between items-center mb-4">
                <h2 className="text-base font-bold text-gray-900">School Management</h2>
                <button className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all shadow-sm hover:shadow-md text-[10px] font-medium">
                  <Plus className="w-3 h-3" />
                  Add School
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* School Statistics */}
                <div className="space-y-6">
                  <div className="bg-white rounded-md p-4 shadow-sm border border-gray-100">
                    <h3 className="text-sm font-bold text-gray-900 mb-4">District Statistics</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                        <span className="text-[10px] text-gray-600">Total Schools</span>
                        <span className="font-bold text-gray-900 text-[10px]">{districtData.totalSchools}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                        <span className="text-[10px] text-gray-600">Total Students</span>
                        <span className="font-bold text-gray-900 text-[10px]">{districtData.totalStudents.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                        <span className="text-[10px] text-gray-600">Average Class Size</span>
                        <span className="font-bold text-gray-900 text-[10px]">{districtData.averageClassSize}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                        <span className="text-[10px] text-gray-600">Schools Needing Support</span>
                        <span className="font-bold text-red-600 text-[10px]">{districtData.schoolsNeedingSupport}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Schools List */}
                <div className="lg:col-span-2 bg-white rounded-md p-4 shadow-sm border border-gray-100">
                  <h3 className="text-sm font-bold text-gray-900 mb-4">All Schools</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 font-medium text-gray-500 text-[10px]">School</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-500 text-[10px]">Students</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-500 text-[10px]">Attendance</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-500 text-[10px]">Performance</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-500 text-[10px]">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {schools.map((school) => (
                          <tr key={school.id} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-3 px-4">
                              <div className="font-medium text-gray-900 text-[10px]">{school.name}</div>
                            </td>
                            <td className="py-3 px-4 text-gray-600 text-[10px]">{school.students.toLocaleString()}</td>
                            <td className="py-3 px-4 text-gray-600 text-[10px]">{school.attendance}%</td>
                            <td className="py-3 px-4">
                              <span className="px-2 py-1 text-[8px] font-semibold rounded-full bg-green-100 text-green-800">
                                {school.performance}
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex items-center gap-1">
                                <button className="p-1 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                                  <Eye className="w-3 h-3" />
                                </button>
                                <button className="p-1 text-gray-500 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors">
                                  <Edit className="w-3 h-3" />
                                </button>
                                <button className="p-1 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors">
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
            </div>
          )}

          {/* Reports Tab */}
          {activeTab === 'reports' && (
            <div>
              {/* Welcome Banner */}
              <div className="bg-gradient-to-r from-blue-600 via-indigo-500 to-indigo-600 rounded-md p-4 mb-5 shadow-sm backdrop-blur-sm border border-white/20 relative overflow-hidden">
                <div className="absolute -top-5 -right-5 w-20 h-20 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-white/10 rounded-full"></div>
                <div className="absolute top-4 right-4 w-7 h-7 bg-white/10 rotate-45"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div>
                    <h2 className="text-base font-bold text-white mb-1.5">Reports & Analytics Dashboard</h2>
                    <p className="text-[10px] text-blue-100 mb-2">Comprehensive insights and analytics for data-driven decisions</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <div className="flex items-center bg-white/10 rounded-full px-2.5 py-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-1.5"></div>
                        <span className="text-[10px] text-white font-medium">{attendanceTrendData.length} months data</span>
                      </div>
                      <div className="flex items-center bg-white/10 rounded-full px-2.5 py-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-1.5"></div>
                        <span className="text-[10px] text-white font-medium">Real-time analytics</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-white/20 rounded-md p-2">
                      <BarChart className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mb-4">
                <h2 className="text-base font-bold text-gray-900">Reports & Analytics</h2>
                <div className="flex gap-3">
                  <button className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all text-[10px] font-medium">
                    <Filter className="w-3 h-3" />
                    Filter
                  </button>
                  <button className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all shadow-sm hover:shadow-md text-[10px] font-medium">
                    <Download className="w-3 h-3" />
                    Export Report
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 mb-6">
                {/* Attendance Analytics */}
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-5 shadow-lg border border-blue-200/30 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/10 rounded-full"></div>
                  
                  <h3 className="text-sm font-bold text-white mb-4">Attendance Analytics</h3>
                  <div className="h-48 bg-white/20 rounded-lg p-4 backdrop-blur-sm border border-white/30">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsBarChart data={attendanceTrendData}>
                        <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="rgba(255,255,255,0.4)" />
                        <XAxis 
                          dataKey="month" 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fill: 'rgba(255,255,255,0.9)', fontSize: 9, fontWeight: 500 }}
                        />
                        <YAxis 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fill: 'rgba(255,255,255,0.9)', fontSize: 9, fontWeight: 500 }}
                          domain={[0, 100]}
                        />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'rgba(255,255,255,0.95)', 
                            borderRadius: '10px',
                            border: '1px solid rgba(255,255,255,0.4)',
                            boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
                            backdropFilter: 'blur(12px)',
                            fontSize: '11px',
                            padding: '10px'
                          }}
                          labelStyle={{ color: '#1e40af', fontWeight: 600 }}
                          formatter={(value) => [`${value}%`, 'Attendance Rate']}
                        />
                        <Legend 
                          wrapperStyle={{ paddingTop: '10px' }}
                          formatter={(value) => <span className="text-white font-medium">{value}</span>}
                        />
                        <Bar 
                          dataKey="attendance" 
                          name="Attendance Rate (%)" 
                          fill="rgba(255,255,255,0.95)" 
                          radius={[6, 6, 0, 0]} 
                          barSize={30}
                          animationDuration={800}
                        >
                          {attendanceTrendData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={getBarColor(entry.attendance)} />
                          ))}
                        </Bar>
                      </RechartsBarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Detailed Reports */}
              <div className="mt-6 bg-white rounded-md p-4 shadow-sm border border-gray-100">
                <h3 className="text-sm font-bold text-gray-900 mb-4">Detailed Reports</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                  {[
                    { title: 'Monthly Attendance Report', description: 'Comprehensive attendance analysis', icon: FileText },
                    { title: 'School Performance Index', description: 'Performance metrics across schools', icon: Target },
                    { title: 'Resource Allocation Report', description: 'Budget and resource distribution', icon: Utensils },
                    { title: 'Policy Impact Analysis', description: 'Effectiveness of educational policies', icon: Award },
                  ].map((report, index) => {
                    const IconComponent = report.icon;
                    return (
                      <div key={index} className="p-3 border border-gray-200 rounded-md hover:border-blue-300 transition-colors cursor-pointer">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center">
                            <IconComponent className="w-4 h-4 text-blue-600" />
                          </div>
                          <h4 className="font-medium text-gray-900 text-[10px]">{report.title}</h4>
                        </div>
                        <p className="text-[9px] text-gray-500 mb-2">{report.description}</p>
                        <button className="text-[10px] text-blue-600 font-medium hover:text-blue-700">
                          Generate Report
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Alerts Tab */}
          {activeTab === 'alerts' && (
            <div>
              {/* Welcome Banner */}
              <div className="bg-gradient-to-r from-blue-600 via-indigo-500 to-indigo-600 rounded-md p-4 mb-5 shadow-sm backdrop-blur-sm border border-white/20 relative overflow-hidden">
                <div className="absolute -top-5 -right-5 w-20 h-20 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-white/10 rounded-full"></div>
                <div className="absolute top-4 right-4 w-7 h-7 bg-white/10 rotate-45"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div>
                    <h2 className="text-base font-bold text-white mb-1.5">Alert Management Dashboard</h2>
                    <p className="text-[10px] text-blue-100 mb-2">Monitor and respond to critical system alerts and notifications</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <div className="flex items-center bg-white/10 rounded-full px-2.5 py-1">
                        <div className="w-2 h-2 bg-red-400 rounded-full mr-1.5"></div>
                        <span className="text-[10px] text-white font-medium">{alerts.length} active alerts</span>
                      </div>
                      <div className="flex items-center bg-white/10 rounded-full px-2.5 py-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-1.5"></div>
                        <span className="text-[10px] text-white font-medium">Real-time monitoring</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-white/20 rounded-md p-2">
                      <Bell className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mb-4">
                <h2 className="text-base font-bold text-gray-900">Alert Management</h2>
                <div className="flex gap-3">
                  <select className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-[10px]">
                    <option>All Statuses</option>
                    <option>New</option>
                    <option>Acknowledged</option>
                    <option>Resolved</option>
                  </select>
                  <button className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all text-[10px] font-medium">
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
                <div className="divide-y divide-gray-100">
                  {alerts.map((alert) => (
                    <div key={alert.id} className="p-4 hover:bg-gray-50 transition-colors">
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
                          <div className="flex gap-2">
                            <button className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-[10px] font-medium hover:bg-blue-200 transition-colors">
                              Acknowledge
                            </button>
                            <button className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-[10px] font-medium hover:bg-gray-200 transition-colors">
                              Snooze
                            </button>
                            <button className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-[10px] font-medium hover:bg-gray-200 transition-colors">
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
              {/* Welcome Banner */}
              <div className="bg-gradient-to-r from-blue-600 via-indigo-500 to-indigo-600 rounded-md p-4 mb-5 shadow-sm backdrop-blur-sm border border-white/20 relative overflow-hidden">
                <div className="absolute -top-5 -right-5 w-20 h-20 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-white/10 rounded-full"></div>
                <div className="absolute top-4 right-4 w-7 h-7 bg-white/10 rotate-45"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div>
                    <h2 className="text-base font-bold text-white mb-1.5">System Settings Dashboard</h2>
                    <p className="text-[10px] text-blue-100 mb-2">Configure and customize your dashboard experience</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <div className="flex items-center bg-white/10 rounded-full px-2.5 py-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-1.5"></div>
                        <span className="text-[10px] text-white font-medium">{Object.keys({ profile: 1, notifications: 1, security: 1, appearance: 1 }).length} setting categories</span>
                      </div>
                      <div className="flex items-center bg-white/10 rounded-full px-2.5 py-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-1.5"></div>
                        <span className="text-[10px] text-white font-medium">Personalized experience</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-white/20 rounded-md p-2">
                      <Settings className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-base font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">System Settings</h2>
                  <p className="text-gray-600 text-xs mt-1">Manage your account preferences and system settings</p>
                </div>
                <div className="flex gap-2">
                  <button className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all shadow-sm hover:shadow-md text-[10px] font-medium">
                    <RefreshCw className="w-3 h-3" />
                    Refresh
                  </button>
                  <button className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all shadow-sm hover:shadow-md text-xs font-medium">
                    <Settings className="w-3 h-3" />
                    Reset
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                {/* Settings Navigation */}
                <div className="lg:col-span-1">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md border border-gray-200/30 backdrop-blur-sm p-1.5 sticky top-4">
                    <div className="p-3 border-b border-gray-200">
                      <h3 className="font-semibold text-gray-900 flex items-center gap-1.5 text-[10px]">
                        <Settings className="w-4 h-4 text-blue-500" />
                        Settings
                      </h3>
                    </div>
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
                          onClick={() => setActiveSettingsTab(tab.id)}
                          className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left transition-all ${
                            activeSettingsTab === tab.id
                              ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-sm'
                              : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600 text-xs'
                          }`}
                        >
                          <IconComponent className="w-4 h-4" />
                          <span className="font-medium text-[10px]">{tab.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
                
                {/* Settings Content */}
                <div className="lg:col-span-3">
                  {activeSettingsTab === 'profile' && (
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md border border-gray-200/30 backdrop-blur-sm p-4">
                      <div className="mb-4 pb-3 border-b border-gray-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <h2 className="text-sm font-bold text-gray-900 flex items-center gap-1.5">
                              <User className="w-4 h-4 text-blue-500" />
                              Profile Information
                            </h2>
                            <p className="text-gray-600 text-xs mt-1">Update your personal and professional details</p>
                          </div>
                          <div className="flex gap-1">
                            <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all">
                              <Edit className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                        <div className="flex flex-col items-center md:col-span-2">
                          <div className="relative mb-3 group">
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md transform transition-all group-hover:scale-105">
                              GO
                            </div>
                            <button className="absolute bottom-1 right-1 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-all shadow-md transform hover:scale-110 flex items-center justify-center">
                              <Edit className="w-3 h-3" />
                            </button>
                          </div>
                          <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 transition-all hover:underline text-xs">
                            <Camera className="w-3 h-3" />
                            Change Picture
                          </button>
                        </div>
                        
                        <div className="space-y-1.5">
                          <label className="block text-[10px] font-medium text-gray-700">Full Name</label>
                          <div className="relative">
                            <User className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input 
                              type="text" 
                              defaultValue="Government Official"
                              className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-xs hover:shadow-sm text-xs"
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-1.5">
                          <label className="block text-[10px] font-medium text-gray-700">Email Address</label>
                          <div className="relative">
                            <Mail className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input 
                              type="email" 
                              defaultValue="official@education.gov"
                              className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-xs hover:shadow-sm text-xs"
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-1.5">
                          <label className="block text-[10px] font-medium text-gray-700">Department</label>
                          <div className="relative">
                            <Building className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input 
                              type="text" 
                              defaultValue="Education Oversight"
                              className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-xs hover:shadow-sm text-xs"
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-1.5">
                          <label className="block text-[10px] font-medium text-gray-700">District</label>
                          <div className="relative">
                            <MapPin className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input 
                              type="text" 
                              defaultValue="Central District"
                              className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-xs hover:shadow-sm text-xs"
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-end gap-2 pt-4 border-t border-gray-200">
                        <button className="px-4 py-2 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all shadow-sm hover:shadow-md font-medium flex items-center gap-1.5 text-xs">
                          <X className="w-3 h-3" />
                          Cancel
                        </button>
                        <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all shadow-sm hover:shadow-md font-medium flex items-center gap-1.5 text-xs">
                          <Save className="w-3 h-3" />
                          Save
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {activeSettingsTab === 'notifications' && (
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md border border-gray-200/30 backdrop-blur-sm p-4">
                      <div className="mb-4 pb-3 border-b border-gray-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <h2 className="text-sm font-bold text-gray-900 flex items-center gap-1.5">
                              <Bell className="w-4 h-4 text-blue-500" />
                              Notification Preferences
                            </h2>
                            <p className="text-gray-600 text-xs mt-1">Customize how and when you receive alerts and updates</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <h3 className="font-medium text-gray-900 text-xs">Email Notifications</h3>
                            <p className="text-gray-600 text-[10px] mt-1">Receive alerts via email</p>
                          </div>
                          <div className="relative inline-block w-10 h-5 rounded-full bg-gray-300">
                            <input type="checkbox" className="absolute opacity-0 w-0 h-0" defaultChecked />
                            <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 rounded-full transition-all duration-300 before:absolute before:h-4 before:w-4 before:left-0.5 before:bottom-0.5 before:bg-white before:rounded-full before:transition-all before:duration-300 checked:bg-blue-500 checked:before:transform checked:before:translate-x-5"></span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <h3 className="font-medium text-gray-900 text-xs">Push Notifications</h3>
                            <p className="text-gray-600 text-[10px] mt-1">Receive alerts on your device</p>
                          </div>
                          <div className="relative inline-block w-10 h-5 rounded-full bg-gray-300">
                            <input type="checkbox" className="absolute opacity-0 w-0 h-0" defaultChecked />
                            <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 rounded-full transition-all duration-300 before:absolute before:h-4 before:w-4 before:left-0.5 before:bottom-0.5 before:bg-white before:rounded-full before:transition-all before:duration-300 checked:bg-blue-500 checked:before:transform checked:before:translate-x-5"></span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <h3 className="font-medium text-gray-900 text-xs">SMS Notifications</h3>
                            <p className="text-gray-600 text-[10px] mt-1">Receive alerts via text message</p>
                          </div>
                          <div className="relative inline-block w-10 h-5 rounded-full bg-gray-300">
                            <input type="checkbox" className="absolute opacity-0 w-0 h-0" />
                            <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 rounded-full transition-all duration-300 before:absolute before:h-4 before:w-4 before:left-0.5 before:bottom-0.5 before:bg-white before:rounded-full before:transition-all before:duration-300 checked:bg-blue-500 checked:before:transform checked:before:translate-x-5"></span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <h3 className="font-medium text-gray-900 text-xs">Critical Alerts</h3>
                            <p className="text-gray-600 text-[10px] mt-1">Immediate notifications for critical issues</p>
                          </div>
                          <div className="relative inline-block w-10 h-5 rounded-full bg-gray-300">
                            <input type="checkbox" className="absolute opacity-0 w-0 h-0" defaultChecked />
                            <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 rounded-full transition-all duration-300 before:absolute before:h-4 before:w-4 before:left-0.5 before:bottom-0.5 before:bg-white before:rounded-full before:transition-all before:duration-300 checked:bg-blue-500 checked:before:transform checked:before:translate-x-5"></span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-end gap-2 pt-4 border-t border-gray-200 mt-4">
                        <button className="px-4 py-2 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all shadow-sm hover:shadow-md font-medium flex items-center gap-1.5 text-xs">
                          <X className="w-3 h-3" />
                          Cancel
                        </button>
                        <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all shadow-sm hover:shadow-md font-medium flex items-center gap-1.5 text-xs">
                          <Save className="w-3 h-3" />
                          Save
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {activeSettingsTab === 'security' && (
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md border border-gray-200/30 backdrop-blur-sm p-4">
                      <div className="mb-4 pb-3 border-b border-gray-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <h2 className="text-base font-bold text-gray-900 flex items-center gap-1.5">
                              <Shield className="w-4 h-4 text-blue-500" />
                              Security Settings
                            </h2>
                            <p className="text-gray-600 text-xs mt-1">Manage your account security and authentication preferences</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <h3 className="font-medium text-gray-900 text-xs mb-2">Password</h3>
                          <button className="px-3 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-md hover:from-blue-600 hover:to-indigo-700 transition-all text-[10px] font-medium">
                            Change Password
                          </button>
                        </div>
                        
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <h3 className="font-medium text-gray-900 text-xs mb-2">Two-Factor Authentication</h3>
                          <p className="text-gray-600 text-[10px] mb-2">Add an extra layer of security to your account</p>
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] text-gray-600">Currently disabled</span>
                            <button className="px-3 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-md hover:from-blue-600 hover:to-indigo-700 transition-all text-[10px] font-medium">
                              Enable
                            </button>
                          </div>
                        </div>
                        
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <h3 className="font-medium text-gray-900 text-xs mb-2">Login History</h3>
                          <p className="text-gray-600 text-[10px] mb-2">View recent login attempts</p>
                          <button className="px-3 py-1.5 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-md hover:from-gray-600 hover:to-gray-700 transition-all text-[10px] font-medium">
                            View History
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex justify-end gap-2 pt-4 border-t border-gray-200 mt-4">
                        <button className="px-4 py-2 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all shadow-sm hover:shadow-md font-medium flex items-center gap-1.5 text-xs">
                          <X className="w-3 h-3" />
                          Cancel
                        </button>
                        <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all shadow-sm hover:shadow-md font-medium flex items-center gap-1.5 text-xs">
                          <Save className="w-3 h-3" />
                          Save
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {activeSettingsTab === 'appearance' && (
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md border border-gray-200/30 backdrop-blur-sm p-4">
                      <div className="mb-4 pb-3 border-b border-gray-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <h2 className="text-sm font-bold text-gray-900 flex items-center gap-1.5">
                              <Settings className="w-4 h-4 text-blue-500" />
                              Appearance Settings
                            </h2>
                            <p className="text-gray-600 text-xs mt-1">Customize the look and feel of your dashboard</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <h3 className="font-medium text-gray-900 text-xs mb-2">Theme</h3>
                          <div className="grid grid-cols-3 gap-2">
                            <button className="p-3 bg-white border-2 border-blue-500 rounded-lg flex flex-col items-center">
                              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-md mb-1"></div>
                              <span className="text-[10px] font-medium">Default</span>
                            </button>
                            <button className="p-3 bg-white border border-gray-200 rounded-lg flex flex-col items-center hover:border-blue-300">
                              <div className="w-8 h-8 bg-gradient-to-br from-gray-700 to-gray-900 rounded-md mb-1"></div>
                              <span className="text-[10px] font-medium">Dark</span>
                            </button>
                            <button className="p-3 bg-white border border-gray-200 rounded-lg flex flex-col items-center hover:border-blue-300">
                              <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-md mb-1"></div>
                              <span className="text-[10px] font-medium">Sunset</span>
                            </button>
                          </div>
                        </div>
                        
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <h3 className="font-medium text-gray-900 text-xs mb-2">Language</h3>
                          <select className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs">
                            <option>English</option>
                            <option>Spanish</option>
                            <option>French</option>
                            <option>German</option>
                          </select>
                        </div>
                        
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <h3 className="font-medium text-gray-900 text-xs mb-2">Layout Preferences</h3>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] text-gray-600">Compact View</span>
                              <div className="relative inline-block w-10 h-5 rounded-full bg-gray-300">
                                <input type="checkbox" className="absolute opacity-0 w-0 h-0" />
                                <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 rounded-full transition-all duration-300 before:absolute before:h-4 before:w-4 before:left-0.5 before:bottom-0.5 before:bg-white before:rounded-full before:transition-all before:duration-300 checked:bg-blue-500 checked:before:transform checked:before:translate-x-5"></span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] text-gray-600">Auto-refresh Data</span>
                              <div className="relative inline-block w-10 h-5 rounded-full bg-gray-300">
                                <input type="checkbox" className="absolute opacity-0 w-0 h-0" defaultChecked />
                                <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 rounded-full transition-all duration-300 before:absolute before:h-4 before:w-4 before:left-0.5 before:bottom-0.5 before:bg-white before:rounded-full before:transition-all before:duration-300 checked:bg-blue-500 checked:before:transform checked:before:translate-x-5"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-end gap-2 pt-4 border-t border-gray-200 mt-4">
                        <button className="px-4 py-2 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all shadow-sm hover:shadow-md font-medium flex items-center gap-1.5 text-xs">
                          <X className="w-3 h-3" />
                          Cancel
                        </button>
                        <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all shadow-sm hover:shadow-md font-medium flex items-center gap-1.5 text-xs">
                          <Save className="w-3 h-3" />
                          Save
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                

              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GovernmentDashboard;