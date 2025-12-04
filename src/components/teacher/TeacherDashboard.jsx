import React, { useState, useEffect } from 'react';
import { Users, User, UserCheck, UserX, Bell, AlertTriangle, Download, Calendar, Clock, Activity, Shield, MapPin, TrendingUp, FileText, Settings, LogOut, Menu, X, Home, BookOpen, ClipboardList, MessageSquare, Search, Eye, Edit, Printer, Filter, Plus, Save, RefreshCw } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, PieChart as RechartsPieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import AttendSmartLogo from '../AttendSmartLogo';
import UltraModernHeader from '../UltraModernHeader';
import ClassroomCard from '../ClassroomCard';
import EnhancedClassroomCard from '../EnhancedClassroomCard';
import LanguageSelector from '../LanguageSelector';
import ParticleBackground from '../ParticleBackground';

const TeacherDashboard = ({ onLogout }) => {
  // Educational SVG components
  const EducationIllustration = () => (
    <svg 
      viewBox="0 0 200 200" 
      className="absolute inset-0 w-full h-full opacity-10"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Books */}
      <g transform="translate(30, 30)">
        <path d="M10 0 L50 0 L55 5 L55 40 L50 45 L10 45 L5 40 L5 5 Z" fill="white" />
        <path d="M15 5 L45 5 L48 8 L48 37 L45 40 L15 40 L12 37 L12 8 Z" fill="none" stroke="#3b82f6" strokeWidth="0.5" />
        <line x1="15" y1="10" x2="45" y2="10" stroke="#3b82f6" strokeWidth="0.5" />
        <line x1="15" y1="15" x2="45" y2="15" stroke="#3b82f6" strokeWidth="0.5" />
        <line x1="15" y1="20" x2="45" y2="20" stroke="#3b82f6" strokeWidth="0.5" />
        <line x1="15" y1="25" x2="45" y2="25" stroke="#3b82f6" strokeWidth="0.5" />
        <line x1="15" y1="30" x2="45" y2="30" stroke="#3b82f6" strokeWidth="0.5" />
        <line x1="15" y1="35" x2="45" y2="35" stroke="#3b82f6" strokeWidth="0.5" />
      </g>
      
      {/* Graduation Cap */}
      <g transform="translate(120, 20)">
        <path d="M0 15 L25 0 L50 15 L25 30 Z" fill="white" />
        <rect x="20" y="30" width="10" height="15" fill="white" />
        <circle cx="25" cy="5" r="2" fill="#3b82f6" />
      </g>
      
      {/* Pencil */}
      <g transform="translate(40, 100)">
        <path d="M0 10 L20 0 L30 10 L10 20 Z" fill="white" />
        <path d="M10 20 L30 10 L35 15 L15 25 Z" fill="#3b82f6" />
        <path d="M0 10 L5 5 L20 0" fill="none" stroke="#3b82f6" strokeWidth="1" />
      </g>
      
      {/* Notebook */}
      <g transform="translate(100, 90)">
        <rect x="0" y="0" width="40" height="50" rx="2" fill="white" />
        <line x1="5" y1="10" x2="35" y2="10" stroke="#3b82f6" strokeWidth="0.5" />
        <line x1="5" y1="20" x2="35" y2="20" stroke="#3b82f6" strokeWidth="0.5" />
        <line x1="5" y1="30" x2="35" y2="30" stroke="#3b82f6" strokeWidth="0.5" />
        <line x1="5" y1="40" x2="35" y2="40" stroke="#3b82f6" strokeWidth="0.5" />
        <circle cx="35" cy="5" r="2" fill="#3b82f6" />
      </g>
      
      {/* Ruler */}
      <g transform="translate(20, 160)">
        <rect x="0" y="0" width="50" height="10" rx="2" fill="white" />
        <line x1="5" y1="2" x2="5" y2="8" stroke="#3b82f6" strokeWidth="0.5" />
        <line x1="10" y1="2" x2="10" y2="8" stroke="#3b82f6" strokeWidth="0.5" />
        <line x1="15" y1="2" x2="15" y2="8" stroke="#3b82f6" strokeWidth="0.5" />
        <line x1="20" y1="2" x2="20" y2="8" stroke="#3b82f6" strokeWidth="0.5" />
        <line x1="25" y1="2" x2="25" y2="8" stroke="#3b82f6" strokeWidth="0.5" />
        <line x1="30" y1="2" x2="30" y2="8" stroke="#3b82f6" strokeWidth="0.5" />
        <line x1="35" y1="2" x2="35" y2="8" stroke="#3b82f6" strokeWidth="0.5" />
        <line x1="40" y1="2" x2="40" y2="8" stroke="#3b82f6" strokeWidth="0.5" />
        <line x1="45" y1="2" x2="45" y2="8" stroke="#3b82f6" strokeWidth="0.5" />
      </g>
      
      {/* Palette */}
      <g transform="translate(80, 160)">
        <path d="M0 10 Q 10 0 20 10 Q 30 0 40 10 L 40 25 Q 30 35 20 25 Q 10 35 0 25 Z" fill="white" />
        <circle cx="10" cy="15" r="4" fill="#93c5fd" />
        <circle cx="20" cy="18" r="4" fill="#dbeafe" />
        <circle cx="30" cy="15" r="4" fill="#3b82f6" />
        <rect x="15" y="25" width="10" height="8" rx="2" fill="white" />
        <rect x="18" y="22" width="4" height="6" fill="#3b82f6" />
      </g>
      
      {/* Additional scattered elements */}
      <g transform="translate(150, 70)">
        <circle cx="5" cy="5" r="3" fill="white" />
        <circle cx="15" cy="2" r="2" fill="white" />
        <circle cx="10" cy="12" r="2.5" fill="white" />
      </g>
      
      <g transform="translate(60, 50)">
        <rect x="0" y="0" width="8" height="8" rx="1" fill="white" />
        <rect x="12" y="3" width="6" height="6" rx="1" fill="white" />
      </g>
      
      <g transform="translate(170, 140)">
        <path d="M0 0 L6 0 L6 6 L0 6 Z" fill="white" />
        <path d="M8 2 L14 2 L14 8 L8 8 Z" fill="white" />
      </g>
    </svg>
  );
  
  // Enhanced educational SVG with even more scattered elements
  const EnhancedEducationIllustration = () => (
    <svg 
      viewBox="0 0 200 200" 
      className="absolute inset-0 w-full h-full opacity-10"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Existing elements from EducationIllustration */}
      {/* Books */}
      <g transform="translate(30, 30)">
        <path d="M10 0 L50 0 L55 5 L55 40 L50 45 L10 45 L5 40 L5 5 Z" fill="white" />
        <path d="M15 5 L45 5 L48 8 L48 37 L45 40 L15 40 L12 37 L12 8 Z" fill="none" stroke="#3b82f6" strokeWidth="0.5" />
        <line x1="15" y1="10" x2="45" y2="10" stroke="#3b82f6" strokeWidth="0.5" />
        <line x1="15" y1="15" x2="45" y2="15" stroke="#3b82f6" strokeWidth="0.5" />
        <line x1="15" y1="20" x2="45" y2="20" stroke="#3b82f6" strokeWidth="0.5" />
        <line x1="15" y1="25" x2="45" y2="25" stroke="#3b82f6" strokeWidth="0.5" />
        <line x1="15" y1="30" x2="45" y2="30" stroke="#3b82f6" strokeWidth="0.5" />
        <line x1="15" y1="35" x2="45" y2="35" stroke="#3b82f6" strokeWidth="0.5" />
      </g>
      
      {/* Graduation Cap */}
      <g transform="translate(120, 20)">
        <path d="M0 15 L25 0 L50 15 L25 30 Z" fill="white" />
        <rect x="20" y="30" width="10" height="15" fill="white" />
        <circle cx="25" cy="5" r="2" fill="#3b82f6" />
      </g>
      
      {/* Pencil */}
      <g transform="translate(40, 100)">
        <path d="M0 10 L20 0 L30 10 L10 20 Z" fill="white" />
        <path d="M10 20 L30 10 L35 15 L15 25 Z" fill="#3b82f6" />
        <path d="M0 10 L5 5 L20 0" fill="none" stroke="#3b82f6" strokeWidth="1" />
      </g>
      
      {/* Notebook */}
      <g transform="translate(100, 90)">
        <rect x="0" y="0" width="40" height="50" rx="2" fill="white" />
        <line x1="5" y1="10" x2="35" y2="10" stroke="#3b82f6" strokeWidth="0.5" />
        <line x1="5" y1="20" x2="35" y2="20" stroke="#3b82f6" strokeWidth="0.5" />
        <line x1="5" y1="30" x2="35" y2="30" stroke="#3b82f6" strokeWidth="0.5" />
        <line x1="5" y1="40" x2="35" y2="40" stroke="#3b82f6" strokeWidth="0.5" />
        <circle cx="35" cy="5" r="2" fill="#3b82f6" />
      </g>
      
      {/* Ruler */}
      <g transform="translate(20, 160)">
        <rect x="0" y="0" width="50" height="10" rx="2" fill="white" />
        <line x1="5" y1="2" x2="5" y2="8" stroke="#3b82f6" strokeWidth="0.5" />
        <line x1="10" y1="2" x2="10" y2="8" stroke="#3b82f6" strokeWidth="0.5" />
        <line x1="15" y1="2" x2="15" y2="8" stroke="#3b82f6" strokeWidth="0.5" />
        <line x1="20" y1="2" x2="20" y2="8" stroke="#3b82f6" strokeWidth="0.5" />
        <line x1="25" y1="2" x2="25" y2="8" stroke="#3b82f6" strokeWidth="0.5" />
        <line x1="30" y1="2" x2="30" y2="8" stroke="#3b82f6" strokeWidth="0.5" />
        <line x1="35" y1="2" x2="35" y2="8" stroke="#3b82f6" strokeWidth="0.5" />
        <line x1="40" y1="2" x2="40" y2="8" stroke="#3b82f6" strokeWidth="0.5" />
        <line x1="45" y1="2" x2="45" y2="8" stroke="#3b82f6" strokeWidth="0.5" />
      </g>
      
      {/* Palette */}
      <g transform="translate(80, 160)">
        <path d="M0 10 Q 10 0 20 10 Q 30 0 40 10 L 40 25 Q 30 35 20 25 Q 10 35 0 25 Z" fill="white" />
        <circle cx="10" cy="15" r="4" fill="#93c5fd" />
        <circle cx="20" cy="18" r="4" fill="#dbeafe" />
        <circle cx="30" cy="15" r="4" fill="#3b82f6" />
        <rect x="15" y="25" width="10" height="8" rx="2" fill="white" />
        <rect x="18" y="22" width="4" height="6" fill="#3b82f6" />
      </g>
      
      {/* Additional scattered elements */}
      <g transform="translate(150, 70)">
        <circle cx="5" cy="5" r="3" fill="white" />
        <circle cx="15" cy="2" r="2" fill="white" />
        <circle cx="10" cy="12" r="2.5" fill="white" />
      </g>
      
      <g transform="translate(60, 50)">
        <rect x="0" y="0" width="8" height="8" rx="1" fill="white" />
        <rect x="12" y="3" width="6" height="6" rx="1" fill="white" />
      </g>
      
      <g transform="translate(170, 140)">
        <path d="M0 0 L6 0 L6 6 L0 6 Z" fill="white" />
        <path d="M8 2 L14 2 L14 8 L8 8 Z" fill="white" />
      </g>
      
      {/* Even more scattered elements for enhanced visual effect */}
      <g transform="translate(5, 5)">
        <circle cx="2" cy="2" r="1" fill="white" />
        <circle cx="6" cy="4" r="1.5" fill="white" />
      </g>
      
      <g transform="translate(180, 10)">
        <rect x="0" y="0" width="4" height="4" rx="1" fill="white" />
      </g>
      
      <g transform="translate(100, 10)">
        <path d="M0 0 L3 0 L1.5 3 Z" fill="white" />
      </g>
      
      <g transform="translate(20, 70)">
        <circle cx="3" cy="3" r="2" fill="white" />
      </g>
      
      <g transform="translate(160, 110)">
        <rect x="0" y="0" width="5" height="5" rx="1" fill="white" />
        <rect x="7" y="2" width="4" height="4" rx="1" fill="white" />
      </g>
      
      <g transform="translate(75, 140)">
        <circle cx="2" cy="2" r="1.5" fill="white" />
        <circle cx="7" cy="1" r="1" fill="white" />
        <circle cx="5" cy="6" r="1.2" fill="white" />
      </g>
    </svg>
  );
  
  // Educational card illustrations
  const EducationCardIllustration = () => (
    <svg 
      viewBox="0 0 100 100" 
      className="absolute inset-0 w-full h-full opacity-5"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Simplified book */}
      <path d="M20 20 L60 20 L65 25 L65 60 L60 65 L20 65 L15 60 L15 25 Z" fill="white" />
      <path d="M25 25 L55 25 L58 28 L58 57 L55 60 L25 60 L22 57 L22 28 Z" fill="none" stroke="#3b82f6" strokeWidth="0.5" />
      
      {/* Simplified graduation cap */}
      <g transform="translate(50, 10)">
        <path d="M-15 10 L0 0 L15 10 L0 20 Z" fill="white" />
        <rect x="-5" y="20" width="10" height="8" fill="white" />
        <circle cx="0" cy="3" r="1" fill="#3b82f6" />
      </g>
      
      {/* Simplified pencil */}
      <g transform="translate(30, 50)">
        <path d="M-10 5 L5 -5 L10 0 L-5 10 Z" fill="white" />
        <path d="M-5 10 L10 0 L12 2 L-3 12 Z" fill="#3b82f6" />
      </g>
      
      {/* Simplified notebook */}
      <g transform="translate(60, 50)">
        <rect x="-10" y="-15" width="20" height="25" rx="1" fill="white" />
        <line x1="-8" y1="-10" x2="8" y2="-10" stroke="#3b82f6" strokeWidth="0.5" />
        <line x1="-8" y1="-5" x2="8" y2="-5" stroke="#3b82f6" strokeWidth="0.5" />
        <line x1="-8" y1="0" x2="8" y2="0" stroke="#3b82f6" strokeWidth="0.5" />
        <circle cx="8" cy="-13" r="1" fill="#3b82f6" />
      </g>
    </svg>
  );
  const navigate = useNavigate();
  const location = useLocation();
  
  // Set active tab based on current route
  const getActiveTabFromRoute = () => {
    const path = location.pathname;
    if (path.includes('/classes')) return 'classes';
    if (path.includes('/attendance')) return 'attendance';
    if (path.includes('/assignments')) return 'assignments';
    if (path.includes('/notices')) return 'notices';
    if (path.includes('/reports')) return 'reports';
    if (path.includes('/alerts')) return 'alerts';
    if (path.includes('/settings')) return 'settings';
    return 'home';
  };
  
  const [activeTab, setActiveTab] = useState(getActiveTabFromRoute());
  
  // Update active tab when route changes
  useEffect(() => {
    setActiveTab(getActiveTabFromRoute());
  }, [location]);
  
  // Handle tab navigation
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    navigate(`/teacher/${tab}`);
  };
  const [selectedClass, setSelectedClass] = useState('Class 10-A');
  
  // Teacher-specific data
  const [teacherData, setTeacherData] = useState({
    name: 'Dr. James Wilson',
    subject: 'Mathematics',
    classes: [
      { name: 'Class 10-A', subject: 'History', color: 'blue' },
      { name: 'Class 11-B', subject: 'Geography', color: 'green' },
      { name: 'Class 12-C', subject: 'Science', color: 'purple' },
      { name: 'Class 9-D', subject: 'English', color: 'indigo' },
      { name: 'Class 8-E', subject: 'Art', color: 'cyan' },
      { name: 'Class 7-F', subject: 'Music', color: 'amber' }
    ],
    school: 'Saboo Siddik Degree'
  });
  

  
  const [teacherAvatar, setTeacherAvatar] = useState('https://api.dicebear.com/7.x/avataaars/svg?seed=James');
  const [showAvatarModal, setShowAvatarModal] = useState(false);
  const [settingsTab, setSettingsTab] = useState('profile');
  const [profileData, setProfileData] = useState({
    name: 'Dr. James Wilson',
    email: 'james.wilson@school.edu',
    subject: 'Mathematics',
    school: 'Saboo Siddik Degree'
  });
  
  // State for managing attendance data
  const [studentAttendanceData, setStudentAttendanceData] = useState([
    { id: 1, name: 'Rahul Sharma', class: '10A', roll: 15, status: { present: false, absent: true, late: false }, method: 'Manual', lastUpdated: 'N/A' },
    { id: 2, name: 'Priya Patel', class: '10A', roll: 22, status: { present: false, absent: true, late: false }, method: 'Manual', lastUpdated: 'N/A' },
    { id: 3, name: 'Amit Kumar', class: '10A', roll: 5, status: { present: false, absent: true, late: false }, method: 'Manual', lastUpdated: 'N/A' },
    { id: 5, name: 'Vikram Singh', class: '10A', roll: 12, status: { present: false, absent: true, late: false }, method: 'Manual', lastUpdated: 'N/A' },
    { id: 6, name: 'Anjali Mehta', class: '10A', roll: 8, status: { present: false, absent: true, late: false }, method: 'Manual', lastUpdated: 'N/A' },
    { id: 7, name: 'Rohit Verma', class: '10A', roll: 25, status: { present: false, absent: true, late: false }, method: 'Manual', lastUpdated: 'N/A' },
    { id: 8, name: 'Pooja Desai', class: '10A', roll: 30, status: { present: false, absent: true, late: false }, method: 'Manual', lastUpdated: 'N/A' },
  ]);
  
  // State for new student form
  const [showAddStudentForm, setShowAddStudentForm] = useState(false);
  const [showAddClassForm, setShowAddClassForm] = useState(false);
  const [newStudent, setNewStudent] = useState({
    name: '',
    class: '10A',
    roll: '',
    method: 'Manual'
  });
  const [newClass, setNewClass] = useState({
    name: '',
    subject: teacherData.subject,
    color: 'blue'
  });
  
  // State for editing student
  const [editingStudentId, setEditingStudentId] = useState(null);
  const [editingMethod, setEditingMethod] = useState('');
  const [showStudentAttendanceModal, setShowStudentAttendanceModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showClassDetailsModal, setShowClassDetailsModal] = useState(false);
  const [selectedClassDetails, setSelectedClassDetails] = useState(null);
  
  // Alerts data
  const [alerts] = useState([
    { id: 1, type: 'lowAttendance', message: 'Low attendance in Class 10-A', time: '2 hours ago', severity: 'high', status: 'new' },
    { id: 2, type: 'device', message: 'RFID reader malfunctioning', time: '5 hours ago', severity: 'medium', status: 'acknowledged' },
    { id: 3, type: 'safety', message: 'Unauthorized access attempt', time: '1 day ago', severity: 'critical', status: 'resolved' },
  ]);
  
  // State for assignments
  const [assignments, setAssignments] = useState([
    { 
      id: 1, 
      title: "Chapter 5 Exercises", 
      subject: "Mathematics", 
      class: "10A", 
      dueDate: "2024-04-25",
      description: "Complete all exercises from Chapter 5",
      students: [
        { id: 1, name: "Rahul Sharma", submitted: true, grade: "A" },
        { id: 2, name: "Priya Patel", submitted: true, grade: "B+" },
        { id: 3, name: "Amit Kumar", submitted: false, grade: "-" },
        { id: 4, name: "Sneha Gupta", submitted: true, grade: "A-" },
        { id: 5, name: "Vikram Singh", submitted: false, grade: "-" },
        { id: 6, name: "Anjali Mehta", submitted: false, grade: "-" },
        { id: 7, name: "Rohit Verma", submitted: true, grade: "B" },
        { id: 8, name: "Pooja Desai", submitted: true, grade: "A" },
      ]
    },
    { 
      id: 2, 
      title: "Lab Report - Photosynthesis", 
      subject: "Science", 
      class: "10A", 
      dueDate: "2024-04-28",
      description: "Write a detailed lab report on photosynthesis experiment",
      students: [
        { id: 1, name: "Rahul Sharma", submitted: true, grade: "A" },
        { id: 2, name: "Priya Patel", submitted: true, grade: "B+" },
        { id: 3, name: "Amit Kumar", submitted: false, grade: "-" },
        { id: 4, name: "Sneha Gupta", submitted: true, grade: "A-" },
        { id: 5, name: "Vikram Singh", submitted: false, grade: "-" },
        { id: 6, name: "Anjali Mehta", submitted: false, grade: "-" },
        { id: 7, name: "Rohit Verma", submitted: true, grade: "B" },
        { id: 8, name: "Pooja Desai", submitted: true, grade: "A" },
      ]
    }
  ]);
  const [showAddAssignmentForm, setShowAddAssignmentForm] = useState(false);
  const [newAssignment, setNewAssignment] = useState({
    title: "",
    subject: teacherData.subject,
    class: "10A",
    dueDate: "",
    description: ""
  });
  
  // State for notices
  const [notices, setNotices] = useState([
    { 
      id: 1, 
      title: "Annual Sports Day Event", 
      content: "Annual sports day will be held on April 25th, 2024. All students are requested to participate...",
      audience: "All Classes",
      priority: "Important",
      date: "2024-04-15",
      time: "10:30 AM"
    },
    { 
      id: 2, 
      title: "Parent-Teacher Meeting", 
      content: "Parent-teacher meeting scheduled for April 30th, 2024 from 3:00 PM to 5:00 PM in the school auditorium.",
      audience: "Class 10-A",
      priority: "Normal",
      date: "2024-04-14",
      time: "2:15 PM"
    },
    { 
      id: 3, 
      title: "Library Closure Notice", 
      content: "The school library will be closed for maintenance from May 1st to May 3rd, 2024. We apologize for any inconvenience.",
      audience: "All Students",
      priority: "Urgent",
      date: "2024-04-13",
      time: "9:45 AM"
    }
  ]);
  const [newNotice, setNewNotice] = useState({
    title: "",
    content: "",
    audience: "All Classes",
    priority: "Normal",
    attachments: []
  });
  
  // State for notice attachments
  const [noticeAttachments, setNoticeAttachments] = useState([]);
  
  // State for class notes
  const [classNotes, setClassNotes] = useState([]);
  const [showAddNoteModal, setShowAddNoteModal] = useState(false);
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
    class: ""
  });
  
  // State for file uploads
  const [showFileUploadModal, setShowFileUploadModal] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [fileUploads, setFileUploads] = useState([]);
  
  // Effect to update notice audience when selectedClassDetails changes
  useEffect(() => {
    if (selectedClassDetails && activeTab === 'notices') {
      setNewNotice(prev => ({
        ...prev,
        audience: selectedClassDetails.name
      }));
    }
  }, [selectedClassDetails, activeTab]);
  
  // State for assignment filtering
  const [showAssignmentFilter, setShowAssignmentFilter] = useState(false);
  const [assignmentFilter, setAssignmentFilter] = useState({
    class: "",
    subject: "",
    status: "all"
  });
  
  // State for reports filtering
  const [showReportsFilter, setShowReportsFilter] = useState(false);
  const [reportsFilter, setReportsFilter] = useState({
    class: "",
    dateRange: "last7days"
  });
  
  // State for attendance filtering
  const [showAttendanceFilter, setShowAttendanceFilter] = useState(false);
  const [attendanceFilter, setAttendanceFilter] = useState({
    class: "",
    status: "all"
  });
  
  // Function to add a new student
  const addNewStudent = () => {
    if (newStudent.name && newStudent.roll) {
      const newStudentObj = {
        id: studentAttendanceData.length + 1,
        name: newStudent.name,
        class: newStudent.class,
        roll: parseInt(newStudent.roll),
        status: { present: false, absent: true, late: false },
        method: 'Manual',
        lastUpdated: 'N/A'
      };
      
      setStudentAttendanceData([...studentAttendanceData, newStudentObj]);
      setNewStudent({ name: '', class: 'Class 10-A', roll: '', method: 'Manual' });
      setShowAddStudentForm(false);
    }
  };
  
  // Function to add a new class
  const addNewClass = () => {
    if (newClass.name) {
      const updatedClasses = [...teacherData.classes, { name: newClass.name, subject: newClass.subject, color: newClass.color || 'blue' }];
      setTeacherData({
        ...teacherData,
        classes: updatedClasses
      });
      setNewClass({ name: '', subject: teacherData.subject, color: 'blue' });
      setShowAddClassForm(false);
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
          method: 'Manual',
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
  
  // Function to handle new class form input changes
  const handleNewClassChange = (e) => {
    const { name, value } = e.target;
    setNewClass({ ...newClass, [name]: value });
  };
  
  // Function to close the add student form
  const closeAddStudentForm = () => {
    setShowAddStudentForm(false);
    setNewStudent({ name: '', class: '10A', roll: '', method: 'Manual' });
  };
  
  // Function to delete a student
  const deleteStudent = (studentId) => {
    setStudentAttendanceData(studentAttendanceData.filter(student => student.id !== studentId));
  };
  
  // Function to reset all attendance
  const resetAttendance = () => {
    setStudentAttendanceData(studentAttendanceData.map(student => ({
      ...student,
      status: { present: false, absent: true, late: false },
      method: 'Manual',
      lastUpdated: 'N/A'
    })));
  };
  
  // Function to export attendance report as CSV
  const exportAttendanceReport = () => {
    // Create CSV content
    const headers = ['Student Name', 'Class', 'Roll Number', 'Status', 'Attendance Method', 'Last Updated'];
    const csvContent = [
      headers.join(','),
      ...studentAttendanceData.map(student => {
        const status = student.status.present ? 'Present' : student.status.absent ? 'Absent' : 'Late';
        return [
          `"${student.name}"`,
          `"${student.class}"`,
          student.roll,
          `"${status}"`,
          `"${student.method}"`,
          `"${student.lastUpdated}"`
        ].join(',');
      })
    ].join('\n');
    
    // Create download link
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `attendance_report_${new Date().toISOString().slice(0, 10)}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  // Function to handle reports filter changes
  const handleReportsFilterChange = (e) => {
    const { name, value } = e.target;
    setReportsFilter({ ...reportsFilter, [name]: value });
  };
  
  // Function to apply reports filters
  const applyReportsFilters = () => {
    // In a real application, this would filter the data
    // For now, we'll just close the modal
    setShowReportsFilter(false);
    console.log('Reports filters applied:', reportsFilter);
  };
  
  // Function to reset reports filters
  const resetReportsFilters = () => {
    setReportsFilter({
      class: "",
      dateRange: "last7days"
    });
  };
  
  // Get unique classes for reports filter
  const getUniqueClassesForReports = () => {
    const classes = studentAttendanceData.map(student => student.class);
    return [...new Set(classes)];
  };
  
  // Get unique classes for attendance filter
  const getUniqueClassesForAttendance = () => {
    const classes = studentAttendanceData.map(student => student.class);
    return [...new Set(classes)];
  };
  
  // Function to handle attendance filter changes
  const handleAttendanceFilterChange = (e) => {
    const { name, value } = e.target;
    setAttendanceFilter({ ...attendanceFilter, [name]: value });
  };
  
  // Function to apply attendance filters
  const applyAttendanceFilters = () => {
    // In a real application, this would filter the data
    // For now, we'll just close the modal
    setShowAttendanceFilter(false);
    console.log('Attendance filters applied:', attendanceFilter);
  };
  
  // Function to reset attendance filters
  const resetAttendanceFilters = () => {
    setAttendanceFilter({
      class: "",
      status: "all"
    });
  };
  
  // Function to get filtered student data based on attendance filter
  const getFilteredStudentData = () => {
    return studentAttendanceData.filter(student => {
      // If no filters are applied, return all students
      if (!attendanceFilter.class && attendanceFilter.status === "all") {
        return true;
      }
      
      // Filter by class if selected
      if (attendanceFilter.class && student.class !== attendanceFilter.class) {
        return false;
      }
      
      // Filter by status if selected
      if (attendanceFilter.status !== "all") {
        if (attendanceFilter.status === "present" && !student.status.present) {
          return false;
        }
        if (attendanceFilter.status === "absent" && !student.status.absent) {
          return false;
        }
        if (attendanceFilter.status === "late" && !student.status.late) {
          return false;
        }
      }
      
      return true;
    });
  };
  
  // Function to mark all present
  const markAllPresent = () => {
    setStudentAttendanceData(studentAttendanceData.map(student => ({
      ...student,
      status: { present: true, absent: false, late: false },
      method: 'Manual',
      lastUpdated: new Date().toLocaleString()
    })));
  };
  
  // Function to add a new assignment
  const addNewAssignment = () => {
    if (newAssignment.title && newAssignment.dueDate) {
      // Get students for the selected class
      const classStudents = studentAttendanceData
        .filter(student => student.class === newAssignment.class)
        .map(student => ({
          id: student.id,
          name: student.name,
          submitted: false,
          grade: "-"
        }));
      
      const assignmentObj = {
        id: assignments.length + 1,
        title: newAssignment.title,
        subject: newAssignment.subject,
        class: newAssignment.class,
        dueDate: newAssignment.dueDate,
        description: newAssignment.description,
        students: classStudents
      };
      
      setAssignments([...assignments, assignmentObj]);
      setNewAssignment({
        title: "",
        subject: teacherData.subject,
        class: "10A",
        dueDate: "",
        description: ""
      });
      setShowAddAssignmentForm(false);
    }
  };
  
  // Function to update student submission status
  const updateStudentSubmission = (assignmentId, studentId, submitted) => {
    setAssignments(assignments.map(assignment => {
      if (assignment.id === assignmentId) {
        const updatedStudents = assignment.students.map(student => {
          if (student.id === studentId) {
            return { ...student, submitted };
          }
          return student;
        });
        return { ...assignment, students: updatedStudents };
      }
      return assignment;
    }));
  };
  
  // Function to update student grade
  const updateStudentGrade = (assignmentId, studentId, grade) => {
    setAssignments(assignments.map(assignment => {
      if (assignment.id === assignmentId) {
        const updatedStudents = assignment.students.map(student => {
          if (student.id === studentId) {
            return { ...student, grade };
          }
          return student;
        });
        return { ...assignment, students: updatedStudents };
      }
      return assignment;
    }));
  };
  
  // Function to handle new assignment form input changes
  const handleNewAssignmentChange = (e) => {
    const { name, value } = e.target;
    setNewAssignment({ ...newAssignment, [name]: value });
  };
  
  // Function to handle new notice form input changes
  const handleNewNoticeChange = (e) => {
    const { name, value } = e.target;
    setNewNotice({ ...newNotice, [name]: value });
  };
  
  // Function to add a new notice
  const addNewNotice = () => {
    if (newNotice.title && newNotice.content) {
      const noticeObj = {
        id: notices.length + 1,
        title: newNotice.title,
        content: newNotice.content,
        audience: newNotice.audience,
        priority: newNotice.priority,
        date: new Date().toISOString().split('T')[0],
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        author: teacherData.name,
        attachments: noticeAttachments.map(file => ({
          name: file.name,
          size: file.size,
          type: file.type
        }))
      };
      
      setNotices([noticeObj, ...notices]);
      setNewNotice({
        title: "",
        content: "",
        audience: "All Classes",
        priority: "Normal",
        attachments: []
      });
      setNoticeAttachments([]);
    }
  };
  
  // Function to clear the new notice form
  const clearNoticeForm = () => {
    setNewNotice({
      title: "",
      content: "",
      audience: "All Classes",
      priority: "Normal"
    });
    setNoticeAttachments([]);
  };
  
  // Function to handle notice attachment selection
  const handleNoticeAttachment = (e) => {
    const files = Array.from(e.target.files);
    setNoticeAttachments(prev => [...prev, ...files]);
  };
  
  // Function to remove a notice attachment
  const removeNoticeAttachment = (index) => {
    setNoticeAttachments(prev => prev.filter((_, i) => i !== index));
  };
  
  // Function to add a new note
  const addNewNote = () => {
    if (newNote.title && newNote.content) {
      const noteObj = {
        id: classNotes.length + 1,
        title: newNote.title,
        content: newNote.content,
        class: newNote.class,
        date: new Date().toISOString().split('T')[0],
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setClassNotes([noteObj, ...classNotes]);
      setNewNote({
        title: "",
        content: "",
        class: ""
      });
      setShowAddNoteModal(false);
    }
  };
  
  // Function to handle new note form input changes
  const handleNewNoteChange = (e) => {
    const { name, value } = e.target;
    setNewNote({ ...newNote, [name]: value });
  };
  
  // Function to clear the new note form
  const clearNoteForm = () => {
    setNewNote({
      title: "",
      content: "",
      class: ""
    });
  };
  
  // Function to get notes for a specific class
  const getNotesForClass = (className) => {
    return classNotes.filter(note => note.class === className);
  };
  
  // Function to delete a note
  const deleteNote = (noteId) => {
    setClassNotes(classNotes.filter(note => note.id !== noteId));
  };
  
  // Function to edit a note
  const editNote = (noteId, updatedNote) => {
    setClassNotes(classNotes.map(note => 
      note.id === noteId ? { ...note, ...updatedNote } : note
    ));
  };
  
  // Function to handle file selection
  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    const newFiles = files.map(file => ({
      id: Date.now() + Math.random(),
      file: file,
      name: file.name,
      size: file.size,
      type: file.type,
      class: selectedClassDetails?.name || newNote.class,
      preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : null
    }));
    
    setFileUploads([...fileUploads, ...newFiles]);
  };
  
  // Function to remove a file from upload list
  const removeFile = (fileId) => {
    setFileUploads(fileUploads.filter(file => file.id !== fileId));
  };
  
  // Function to upload files
  const uploadFiles = () => {
    // In a real application, this would send the files to a server
    // For now, we'll just add them to the uploaded files list
    const newUploads = fileUploads.map(file => ({
      ...file,
      id: Date.now() + Math.random(),
      uploadDate: new Date().toISOString().split('T')[0],
      uploadTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }));
    
    setUploadedFiles([...uploadedFiles, ...newUploads]);
    setFileUploads([]);
    setShowFileUploadModal(false);
    
    // Show success message
    alert(`${newUploads.length} file(s) uploaded successfully!`);
  };
  
  // Initialize fileUploads with class information when opening the modal
  useEffect(() => {
    if (showFileUploadModal && selectedClassDetails) {
      // Ensure all file uploads have the correct class information
      setFileUploads(prevUploads => prevUploads.map(file => ({
        ...file,
        class: selectedClassDetails.name
      })));
    }
  }, [showFileUploadModal, selectedClassDetails]);
  
  // Function to format file size
  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };
  
  // Function to get file icon based on file type
  const getFileIcon = (fileType) => {
    if (fileType.startsWith('image/')) {
      return '🖼️';
    } else if (fileType.includes('pdf')) {
      return '📄';
    } else if (fileType.includes('word')) {
      return '📝';
    } else if (fileType.includes('excel') || fileType.includes('spreadsheet')) {
      return '📊';
    } else if (fileType.includes('powerpoint') || fileType.includes('presentation')) {
      return '📽️';
    } else {
      return '📁';
    }
  };
  
  // Function to get files for a specific class
  const getFilesForClass = (className) => {
    return uploadedFiles.filter(file => file.class === className);
  };
  
  // Function to delete an uploaded file
  const deleteUploadedFile = (fileId) => {
    setUploadedFiles(uploadedFiles.filter(file => file.id !== fileId));
  };
  
  // Function to get priority badge class
  const getPriorityBadgeClass = (priority) => {
    switch (priority) {
      case 'Urgent':
        return 'bg-red-100 text-red-800';
      case 'Important':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-green-100 text-green-800';
    }
  };
  
  // Function to get time ago
  const getTimeAgo = (date, time) => {
    // For simplicity, returning static values
    // In a real application, you would calculate the actual time difference
    return '2 hours ago';
  };
  
  // Function to handle assignment filter changes
  const handleAssignmentFilterChange = (e) => {
    const { name, value } = e.target;
    setAssignmentFilter({ ...assignmentFilter, [name]: value });
  };
  
  // Function to apply assignment filters
  const applyAssignmentFilters = () => {
    // Filtering is handled by the render logic, so we just close the modal
    setShowAssignmentFilter(false);
  };
  
  // Function to reset assignment filters
  const resetAssignmentFilters = () => {
    setAssignmentFilter({
      class: "",
      subject: "",
      status: "all"
    });
  };
  
  // Function to get filtered assignments
  const getFilteredAssignments = () => {
    return assignments.filter(assignment => {
      // Filter by class
      if (assignmentFilter.class && assignment.class !== assignmentFilter.class) {
        return false;
      }
      
      // Filter by subject
      if (assignmentFilter.subject && assignment.subject !== assignmentFilter.subject) {
        return false;
      }
      
      // Filter by status
      if (assignmentFilter.status !== "all") {
        const submittedCount = assignment.students.filter(s => s.submitted).length;
        const totalCount = assignment.students.length;
        const completionRate = totalCount > 0 ? submittedCount / totalCount : 0;
        
        if (assignmentFilter.status === "completed" && completionRate < 1) {
          return false;
        } else if (assignmentFilter.status === "pending" && completionRate >= 1) {
          return false;
        }
      }
      
      return true;
    });
  };
  
  // Get unique classes and subjects for filter options
  const getUniqueClasses = () => {
    const classes = assignments.map(a => a.class);
    return [...new Set(classes)];
  };
  
  const getUniqueSubjects = () => {
    const subjects = assignments.map(a => a.subject);
    return [...new Set(subjects)];
  };
  
  // Get filtered assignments for display
  const filteredAssignments = getFilteredAssignments();

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
  
  // State for chart time range
  const [chartTimeRange, setChartTimeRange] = useState('Last 7 Days');
  
  // Generate mock attendance data for different time ranges
  const weeklyAttendanceData = [
    { day: 'Mon', present: 32, absent: 3, late: 5 },
    { day: 'Tue', present: 30, absent: 4, late: 6 },
    { day: 'Wed', present: 35, absent: 2, late: 3 },
    { day: 'Thu', present: 33, absent: 3, late: 4 },
    { day: 'Fri', present: 36, absent: 1, late: 3 },
  ];
  
  const monthlyAttendanceData = [
    { day: 'Week 1', present: 150, absent: 20, late: 30 },
    { day: 'Week 2', present: 145, absent: 25, late: 30 },
    { day: 'Week 3', present: 160, absent: 15, late: 25 },
    { day: 'Week 4', present: 155, absent: 18, late: 27 },
  ];
  
  const quarterlyAttendanceData = [
    { day: 'Month 1', present: 620, absent: 85, late: 95 },
    { day: 'Month 2', present: 600, absent: 90, late: 110 },
    { day: 'Month 3', present: 650, absent: 60, late: 90 },
  ];

  // Function to get chart data based on selected time range
  const getChartData = () => {
    // Get the total number of students in the class
    const totalStudents = studentAttendanceData.length;
    
    // Get the raw data based on time range
    let rawData;
    switch (chartTimeRange) {
      case 'Last 30 Days':
        rawData = monthlyAttendanceData;
        break;
      case 'Last 90 Days':
        rawData = quarterlyAttendanceData;
        break;
      case 'Last 7 Days':
      default:
        rawData = weeklyAttendanceData;
        break;
    }
    
    // Convert absolute numbers to percentages
    return rawData.map(item => ({
      ...item,
      present: Math.round((item.present / totalStudents) * 100),
      absent: Math.round((item.absent / totalStudents) * 100),
      late: Math.round((item.late / totalStudents) * 100)
    }));
  };
  
  const summaryStats = [
    { label: 'Total Students', value: studentAttendanceData.length, icon: Users, color: 'from-blue-500 to-blue-600' },
    { label: 'Present Today', value: presentCount, icon: UserCheck, color: 'from-green-500 to-green-600' },
    { label: 'Absent Today', value: absentCount, icon: UserX, color: 'from-red-500 to-red-600' },
    { label: 'Late Today', value: lateCount, icon: Clock, color: 'from-yellow-500 to-orange-500' },
  ];

  return (
    <div className="flex min-h-screen h-screen w-full overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
      <ParticleBackground />
      
      {/* Sidebar */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-56 bg-white shadow-lg flex flex-col h-full"
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
                <span className="text-[11px] font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent truncate block">
                  {teacherData.name}
                </span>
              </div>
              <p className="text-[11px] text-gray-500 truncate">{teacherData.subject} Teacher</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-2.5 pt-0 space-y-0.5 overflow-y-auto">
          {[
            { id: 'home', icon: Home, label: 'Dashboard Home' },
            { id: 'classes', icon: BookOpen, label: 'Classes' },
            { id: 'attendance', icon: UserCheck, label: 'Attendance' },
            { id: 'assignments', icon: ClipboardList, label: 'Assignments' },
            { id: 'notices', icon: MessageSquare, label: 'Post Notices', 'data-tab': 'notices' },
            { id: 'reports', icon: FileText, label: 'Reports' },
            { id: 'alerts', icon: Bell, label: 'Alerts' },
            { id: 'settings', icon: Settings, label: 'Settings' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`w-full flex items-center gap-2 px-2.5 py-2 rounded-md transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md shadow-blue-500/20'
                  : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              <tab.icon className="w-3.5 h-3.5" />
              <span className="font-medium text-[11px]">{tab.label}</span>
              {tab.id === 'alerts' && (
                <span className="ml-auto bg-red-500 text-white text-[11px] font-bold rounded-full w-3.5 h-3.5 flex items-center justify-center">
                  {alerts.filter(a => a.status === 'new').length}
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
            <span className="font-medium text-[11px]">Change Avatar</span>
          </button>
          <button 
            onClick={onLogout}
            className="w-full flex items-center gap-2 px-2.5 py-2 rounded-md text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="font-medium text-[11px]">Logout</span>
          </button>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto overscroll-contain flex flex-col h-full">
        {/* Ultra Modern Header */}
        <div className="flex-shrink-0">
          <UltraModernHeader 
            dashboardTitle="Teacher Dashboard"
            userType="Teacher"
            userName={teacherData.name}
            userRole={`${teacherData.subject} Teacher`}
            onLogout={onLogout}
            onAlertsClick={() => handleTabChange('alerts')}
          />
        </div>

        {/* Dashboard Content */}
        <div className="p-6 flex-grow min-h-[500px]">
          {/* Home Tab */}
          {activeTab === 'home' && (
            <div>
              {/* Welcome Banner - Matching student dashboard style */}
              <div className="bg-gradient-to-r from-blue-600 via-indigo-500 to-indigo-600 rounded-md p-4 mb-4 shadow-sm backdrop-blur-sm border border-white/20 relative overflow-hidden drop-shadow-sm -mt-5">
                {/* Educational background elements */}
                <EnhancedEducationIllustration />
                <div className="absolute -top-5 -right-5 w-20 h-20 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-white/10 rounded-full"></div>
                <div className="absolute top-3 right-3 w-6 h-6 bg-white/10 rotate-45"></div>
                <div className="absolute bottom-3 left-3 w-5 h-5 bg-white/20 rounded-full"></div>
                <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-white/5 rounded-full"></div>
                <div className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-white/10 rotate-12"></div>
                
                <div className="relative z-10 flex items-center gap-2.5">
                  <div className="relative">
                    <img 
                      src={teacherAvatar} 
                      alt="Teacher Avatar" 
                      className="w-12 h-12 rounded-full object-cover shadow-md border-2 border-white/30 cursor-pointer"
                      onClick={() => setShowAvatarModal(true)}
                    />
                  </div>
                  <div>
                    <h2 className="text-[13px] font-bold text-white mb-1">
                      Welcome back, {teacherData.name.split(' ')[1]}! 👋
                    </h2>
                    <p className="text-blue-100 text-[11px] mb-1">
                      {teacherData.subject} Teacher at {teacherData.school}
                    </p>
                    <p className="text-blue-100 text-[11px]">
                      You have {teacherData.classes.length} classes today
                    </p>
                  </div>
                </div>
              </div>

              {/* Summary Stats */}
              <div className="flex gap-2 mb-3">
                <div className="flex-grow bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg p-3 shadow-sm border border-white/30 backdrop-blur-sm text-white relative overflow-hidden">
                  {/* Educational design elements */}
                  <EducationCardIllustration />
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-white/10 rounded-full"></div>
                  <div className="absolute top-2 right-2 w-6 h-6 bg-white/10 rotate-45"></div>
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <p className="text-blue-100 text-[11px]">Total Students</p>
                      <p className="text-lg font-bold mt-0.5">{studentAttendanceData.length}</p>
                      <p className="text-blue-100 text-[9px] mt-0.5">Across all classes</p>
                    </div>
                    <Users className="w-6 h-6 text-blue-200 relative z-10" />
                  </div>
                </div>
                
                <div className="flex-grow bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg p-3 shadow-sm border border-white/30 backdrop-blur-sm text-white relative overflow-hidden">
                  {/* Educational design elements */}
                  <EducationCardIllustration />
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-white/10 rounded-full"></div>
                  <div className="absolute top-2 right-2 w-6 h-6 bg-white/10 rotate-45"></div>
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <p className="text-indigo-100 text-[11px]">Present Today</p>
                      <p className="text-lg font-bold mt-0.5">{presentCount}</p>
                      <p className="text-indigo-100 text-[9px] mt-0.5">Currently marked</p>
                    </div>
                    <UserCheck className="w-6 h-6 text-indigo-200 relative z-10" />
                  </div>
                </div>
                
                <div className="flex-grow bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg p-3 shadow-sm border border-white/30 backdrop-blur-sm text-white relative overflow-hidden">
                  {/* Educational design elements */}
                  <EducationCardIllustration />
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-white/10 rounded-full"></div>
                  <div className="absolute top-2 right-2 w-6 h-6 bg-white/10 rotate-45"></div>
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <p className="text-purple-100 text-[11px]">Absent Today</p>
                      <p className="text-lg font-bold mt-0.5">{absentCount}</p>
                      <p className="text-purple-100 text-[9px] mt-0.5">Needs attention</p>
                    </div>
                    <UserX className="w-6 h-6 text-purple-200 relative z-10" />
                  </div>
                </div>
                
                <div className="flex-grow bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg p-3 shadow-sm border border-white/30 backdrop-blur-sm text-white relative overflow-hidden">
                  {/* Educational design elements */}
                  <EducationCardIllustration />
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-white/10 rounded-full"></div>
                  <div className="absolute top-2 right-2 w-6 h-6 bg-white/10 rotate-45"></div>
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <p className="text-blue-100 text-[11px]">Late Arrivals</p>
                      <p className="text-lg font-bold mt-0.5">{lateCount}</p>
                      <p className="text-blue-100 text-[9px] mt-0.5">Arrived after start</p>
                    </div>
                    <Clock className="w-6 h-6 text-blue-200 relative z-10" />
                  </div>
                </div>
              </div>

              {/* Charts and Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Attendance Chart */}
                <div className="flex-grow bg-gradient-to-br from-[#F3F4FF] to-[#E0F2FE] rounded-lg p-4 shadow-md border border-gray-300">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xs font-bold text-gray-900">Weekly Attendance Trend Analysis</h3>
                    <select 
                      className="text-[10px] border border-gray-300 rounded-full px-3 py-1.5 bg-white"
                      value={chartTimeRange}
                      onChange={(e) => setChartTimeRange(e.target.value)}
                    >
                      <option value="Last 7 Days">Last 7 Days</option>
                      <option value="Last 30 Days">Last 30 Days</option>
                      <option value="Last 90 Days">Last 90 Days</option>
                    </select>
                  </div>
                  <div className="h-44">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={getChartData()}>
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
                          domain={[0, 100]}
                          ticks={[0, 20, 40, 60, 80, 100]}
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
                          formatter={(value) => [`${value}%`, 'Percentage']}
                        />
                        <Legend 
                          wrapperStyle={{ fontSize: '8px' }}
                          formatter={(value) => `${value} (%)`}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="present" 
                          name="Present Students" 
                          stroke="#8B5CF6" 
                          strokeWidth={2}
                          dot={{ r: 3, fill: '#A78BFA' }}
                          activeDot={{ r: 5, fill: '#A78BFA' }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="absent" 
                          name="Absent Students" 
                          stroke="#3B82F6" 
                          strokeWidth={2}
                          dot={{ r: 3, fill: '#60A5FA' }}
                          activeDot={{ r: 5, fill: '#60A5FA' }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="late" 
                          name="Late Arrivals" 
                          stroke="#1D4ED8" 
                          strokeWidth={2}
                          dot={{ r: 3, fill: '#3B82F6' }}
                          activeDot={{ r: 5, fill: '#3B82F6' }}
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
              {/* Welcome Banner */}
              <div className="bg-gradient-to-r from-blue-600 via-indigo-500 to-indigo-600 rounded-md p-4 mb-1 shadow-sm backdrop-blur-sm border border-white/20 relative overflow-hidden">
                <EnhancedEducationIllustration />
                <div className="absolute -top-5 -right-5 w-20 h-20 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-white/10 rounded-full"></div>
                <div className="absolute top-4 right-4 w-7 h-7 bg-white/10 rotate-45"></div>
                <div className="absolute top-1/4 left-1/3 w-6 h-6 bg-white/5 rounded-full"></div>
                <div className="absolute bottom-1/4 right-1/4 w-8 h-8 bg-white/10 rotate-6"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div>
                    <h2 className="text-base font-bold text-white mb-1.5">Class Management Dashboard</h2>
                    <p className="text-[10px] text-blue-100 mb-2">Organize and manage all your classes and subjects</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <div className="flex items-center bg-white/10 rounded-full px-2.5 py-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-1.5"></div>
                        <span className="text-[10px] text-white font-medium">{teacherData.school}</span>
                      </div>
                      <div className="flex items-center bg-white/10 rounded-full px-2.5 py-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-1.5"></div>
                        <span className="text-[10px] text-white font-medium">{teacherData.classes.length} Classes</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-white/20 rounded-md p-2">
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-sm font-bold text-blue-700">Class Management</h2>
                  <p className="text-[10px] text-gray-600 mt-1">Organize and manage all your classes and subjects</p>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setShowAddClassForm(true)}
                    className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded hover:from-blue-600 hover:to-indigo-700 transition-all shadow-sm hover:shadow text-xs"
                  >
                    <Plus className="w-2.5 h-2.5" />
                    Add Class
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-6">
                {teacherData.classes.slice(0, 3).map((classObj, index) => (
                  <div key={index}>
                    <EnhancedClassroomCard 
                      title={classObj.subject}
                      subtitle={classObj.name}
                      teacher={teacherData.name}
                      theme={classObj.color}
                      onClick={() => {
                        setSelectedClassDetails(classObj);
                        setShowClassDetailsModal(true);
                      }}
                      onMenuClick={() => console.log(`${classObj.name} menu clicked`)}
                    />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-6 mt-6">
                {teacherData.classes.slice(3).map((classObj, index) => (
                  <div key={index + 3}>
                    <EnhancedClassroomCard 
                      title={classObj.subject}
                      subtitle={classObj.name}
                      teacher={teacherData.name}
                      theme={classObj.color}
                      onClick={() => {
                        setSelectedClassDetails(classObj);
                        setShowClassDetailsModal(true);
                      }}
                      onMenuClick={() => console.log(`${classObj.name} menu clicked`)}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Attendance Tab */}
          {activeTab === 'attendance' && (
            <div>
              {/* Welcome Banner */}
              <div className="bg-gradient-to-r from-blue-600 via-indigo-500 to-indigo-600 rounded-md p-4 mb-4 shadow-sm backdrop-blur-sm border border-white/20 relative overflow-hidden -mt-5">
                <EnhancedEducationIllustration />
                <div className="absolute -top-5 -right-5 w-20 h-20 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-white/10 rounded-full"></div>
                <div className="absolute top-4 right-4 w-7 h-7 bg-white/10 rotate-45"></div>
                <div className="absolute top-1/3 left-1/4 w-7 h-7 bg-white/5 rounded-full"></div>
                <div className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-white/10 rotate-12"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div>
                    <h2 className="text-base font-bold text-white mb-1.5">Attendance Management Dashboard</h2>
                    <p className="text-[10px] text-blue-100 mb-2">Track and manage student attendance records</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <div className="flex items-center bg-white/10 rounded-full px-2.5 py-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-1.5"></div>
                        <span className="text-[10px] text-white font-medium">{teacherData.school}</span>
                      </div>
                      <div className="flex items-center bg-white/10 rounded-full px-2.5 py-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-1.5"></div>
                        <span className="text-[10px] text-white font-medium">{studentAttendanceData.length} Students</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-white/20 rounded-md p-2">
                      <UserCheck className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-sm font-bold text-blue-700">Attendance Management</h2>
                  <p className="text-[10px] text-gray-600 mt-1">Track and manage student attendance records</p>
                </div>
                <div className="flex gap-3">
                  <button 
                    onClick={() => setShowAddStudentForm(true)}
                    className="flex items-center gap-1 px-2 py-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded hover:from-blue-600 hover:to-indigo-700 transition-all shadow-sm hover:shadow text-xs"
                  >
                    <Plus className="w-2.5 h-2.5" />
                    Add Student
                  </button>
                  <button 
                    onClick={() => setShowAttendanceFilter(true)}
                    className="flex items-center gap-1 px-2 py-0.5 bg-gradient-to-r from-gray-100 to-gray-200 border border-gray-200 text-gray-700 rounded hover:from-gray-200 hover:to-gray-300 transition-all shadow-sm hover:shadow text-xs"
                  >
                    <Filter className="w-2.5 h-2.5" />
                    Filter
                  </button>
                  <button 
                    onClick={exportAttendanceReport}
                    className="flex items-center gap-1 px-2 py-0.5 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded hover:from-purple-600 hover:to-pink-700 transition-all shadow-sm hover:shadow text-xs"
                  >
                    <Download className="w-2.5 h-2.5" />
                    Export Report
                  </button>
                </div>
              </div>

              {/* Attendance Table */}
              <div className="bg-white rounded-md p-2.5 shadow-sm">
                {/* Bulk Actions */}
                <div className="flex gap-1 mb-2.5">
                  <button 
                    onClick={markAllPresent}
                    className="px-2 py-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full text-[9px] font-medium hover:from-blue-600 hover:to-indigo-700 transition-all shadow-sm hover:shadow"
                  >
                    Mark All Present
                  </button>
                  <button 
                    onClick={resetAttendance}
                    className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full text-[9px] font-medium hover:bg-gray-200 transition-all"
                  >
                    Reset Attendance
                  </button>
                </div>
                <div className="overflow-hidden rounded-sm border border-gray-200">
                  <table className="w-full text-[9px]">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="text-left py-1 px-1.5 font-medium text-gray-500 text-[9px]">Student</th>
                        <th className="text-left py-1 px-1.5 font-medium text-gray-500 text-[9px]">Class</th>
                        <th className="text-left py-1 px-1.5 font-medium text-gray-500 text-[9px]">Roll</th>
                        <th className="text-left py-1 px-1.5 font-medium text-gray-500 text-[9px]">Status</th>
                        <th className="text-left py-1 px-1.5 font-medium text-gray-500 text-[9px]">Method</th>
                        <th className="text-left py-1 px-1.5 font-medium text-gray-500 text-[9px]">View</th>
                      </tr>
                    </thead>
                    <tbody>
                      {getFilteredStudentData().map((student) => (
                        <tr key={student.id} className="border-b border-gray-100 hover:bg-blue-50 transition-colors duration-150">
                          <td className="py-1 px-1.5">
                            <div className="flex items-center gap-1">
                              <div className="relative">
                                <img 
                                  src={getStudentAvatar(student.name)}
                                  alt="Student Avatar" 
                                  className="w-6 h-6 rounded-full object-cover shadow-sm border-2 border-indigo-200"
                                />
                                <div className="absolute bottom-0 right-0 w-1 h-1 bg-green-400 rounded-full border border-white"></div>
                              </div>
                              <span className="font-medium text-gray-900 text-[10px]">{student.name}</span>
                            </div>
                          </td>
                          <td className="py-1 px-1.5 text-gray-600 text-[10px]">{student.class}</td>
                          <td className="py-1 px-1.5 text-gray-600 text-[10px]">{student.roll}</td>
                          <td className="py-1 px-1.5">
                            <div className="flex gap-0.5">
                              <button 
                                onClick={() => editStudentStatus(student.id, 'present')}
                                className={`px-1 py-0.5 rounded-full text-[9px] font-medium transition-all duration-200 ${student.status.present ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                              >
                                Present
                              </button>
                              <button 
                                onClick={() => editStudentStatus(student.id, 'absent')}
                                className={`px-1 py-0.5 rounded-full text-[9px] font-medium transition-all duration-200 ${student.status.absent ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                              >
                                Absent
                              </button>
                              <button 
                                onClick={() => editStudentStatus(student.id, 'late')}
                                className={`px-1 py-0.5 rounded-full text-[9px] font-medium transition-all duration-200 ${student.status.late ? 'bg-amber-100 text-amber-800' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                              >
                                Late
                              </button>
                            </div>
                          </td>
                          <td className="py-1 px-1.5 text-gray-600 text-[10px]">
                            <span>{student.method}</span>
                          </td>
                          <td className="py-1 px-1.5">
                            <div className="flex items-center gap-0.5">
                              <button 
                                className="p-0.5 text-gray-500 hover:text-blue-600 hover:bg-blue-100 rounded-full transition-colors duration-200"
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

          {/* Assignments Tab */}
          {activeTab === 'assignments' && (
            <div>
              {/* Welcome Banner */}
              <div className="bg-gradient-to-r from-blue-600 via-indigo-500 to-indigo-600 rounded-md p-4 mb-4 shadow-sm backdrop-blur-sm border border-white/20 relative overflow-hidden -mt-5">
                <EducationIllustration />
                <div className="absolute -top-5 -right-5 w-20 h-20 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-white/10 rounded-full"></div>
                <div className="absolute top-4 right-4 w-7 h-7 bg-white/10 rotate-45"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div>
                    <h2 className="text-base font-bold text-white mb-1.5">Assignment Management Dashboard</h2>
                    <p className="text-[10px] text-blue-100 mb-2">Create and manage student assignments and track submissions</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <div className="flex items-center bg-white/10 rounded-full px-2.5 py-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-1.5"></div>
                        <span className="text-[10px] text-white font-medium">{teacherData.school}</span>
                      </div>
                      <div className="flex items-center bg-white/10 rounded-full px-2.5 py-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-1.5"></div>
                        <span className="text-[10px] text-white font-medium">{assignments.length} Assignments</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-white/20 rounded-md p-2">
                      <ClipboardList className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-sm font-bold text-blue-700">Assignment Management</h2>
                  <p className="text-[10px] text-gray-600 mt-1">Create and manage student assignments and track submissions</p>
                </div>
                <div className="flex gap-3">
                  <button 
                    onClick={() => setShowAddAssignmentForm(true)}
                    className="flex items-center gap-1 px-2 py-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded hover:from-blue-600 hover:to-indigo-700 transition-all shadow-sm hover:shadow text-xs"
                  >
                    <Plus className="w-2.5 h-2.5" />
                    Post Assignment
                  </button>
                  <button 
                    onClick={() => setShowAssignmentFilter(true)}
                    className="flex items-center gap-1 px-2 py-0.5 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-all shadow-sm hover:shadow text-xs"
                  >
                    <Filter className="w-2.5 h-2.5" />
                    Filter
                  </button>
                </div>
              </div>

              {/* Assignments List */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {filteredAssignments.map((assignment) => (
                  <div key={assignment.id} className="bg-blue-50 rounded-md p-3 shadow-sm border border-blue-100">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-gray-900 text-sm">{assignment.title}</h3>
                      <span className="text-[10px] bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded-full">
                        {assignment.subject}
                      </span>
                    </div>
                    <p className="text-gray-600 text-[10px] mb-2">{assignment.description}</p>
                    <div className="flex justify-between items-center text-[10px] text-gray-500 mb-3">
                      <span>Class: {assignment.class}</span>
                      <span>Due: {new Date(assignment.dueDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-[10px]">
                        <span className="text-gray-600">Submissions: </span>
                        <span className="font-medium">
                          {assignment.students.filter(s => s.submitted).length}/{assignment.students.length}
                        </span>
                      </div>
                      <button 
                        onClick={() => console.log('View assignment details')}
                        className="text-blue-600 hover:text-blue-800 text-[10px] font-medium"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Assignment Submission Tracking */}
              <div className="bg-blue-50 rounded-md p-2.5 shadow-sm border border-blue-100">
                <h3 className="font-bold text-gray-900 text-sm mb-3">Track Student Submissions</h3>
                <div className="overflow-hidden rounded-sm border border-gray-200">
                  <table className="w-full text-[9px]">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="text-left py-1 px-1.5 font-medium text-gray-500 text-[9px]">Assignment</th>
                        <th className="text-left py-1 px-1.5 font-medium text-gray-500 text-[9px]">Student</th>
                        <th className="text-left py-1 px-1.5 font-medium text-gray-500 text-[9px]">Status</th>
                        <th className="text-left py-1 px-1.5 font-medium text-gray-500 text-[9px]">Grade</th>
                        <th className="text-left py-1 px-1.5 font-medium text-gray-500 text-[9px]">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredAssignments.flatMap(assignment => 
                        assignment.students.map(student => {
                          // Find the full student object from studentAttendanceData
                          const fullStudent = studentAttendanceData.find(s => s.id === student.id);
                          return (
                            <tr key={`${assignment.id}-${student.id}`} className="border-b border-gray-100 hover:bg-blue-50 transition-colors duration-150">
                              <td className="py-1 px-1.5">
                                <div className="font-medium text-gray-900 text-[10px]">{assignment.title}</div>
                                <div className="text-gray-500 text-[9px]">{assignment.class}</div>
                              </td>
                              <td className="py-1 px-1.5">
                                <div className="flex items-center gap-1">
                                  {fullStudent && (
                                    <div className="relative">
                                      <img 
                                        src={getStudentAvatar(fullStudent.name)}
                                        alt="Student Avatar" 
                                        className="w-6 h-6 rounded-full object-cover shadow-sm border-2 border-indigo-200"
                                      />
                                      <div className="absolute bottom-0 right-0 w-1 h-1 bg-green-400 rounded-full border border-white"></div>
                                    </div>
                                  )}
                                  <span className="font-medium text-gray-900 text-[10px]">{student.name}</span>
                                </div>
                              </td>
                              <td className="py-1 px-1.5">
                                <div className="flex gap-0.5">
                                  <button 
                                    onClick={() => updateStudentSubmission(assignment.id, student.id, !student.submitted)}
                                    className={`px-1 py-0.5 rounded-full text-[9px] font-medium transition-all duration-200 ${student.submitted ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                                  >
                                    {student.submitted ? 'Submitted' : 'Pending'}
                                  </button>
                                </div>
                              </td>
                              <td className="py-1 px-1.5 text-gray-600 text-[10px]">
                                <span>{student.grade}</span>
                              </td>
                              <td className="py-1 px-1.5">
                                <div className="flex gap-0.5">
                                  <input
                                    type="text"
                                    value={student.grade}
                                    onChange={(e) => updateStudentGrade(assignment.id, student.id, e.target.value)}
                                    className="w-12 px-1 py-0.5 border border-gray-300 rounded text-[9px]"
                                    placeholder="Grade"
                                  />
                                </div>
                              </td>
                            </tr>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Reports Tab */}
          {activeTab === 'reports' && (
            <div className="pt-2">
              {/* Welcome Banner */}
              <div className="bg-gradient-to-r from-blue-600 via-indigo-500 to-indigo-600 rounded-md p-4 mb-4 shadow-sm backdrop-blur-sm border border-white/20 relative overflow-hidden -mt-5">
                <EnhancedEducationIllustration />
                <div className="absolute -top-5 -right-5 w-20 h-20 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-white/10 rounded-full"></div>
                <div className="absolute top-4 right-4 w-7 h-7 bg-white/10 rotate-45"></div>
                <div className="absolute top-1/4 left-1/3 w-6 h-6 bg-white/5 rounded-full"></div>
                <div className="absolute bottom-1/4 right-1/4 w-8 h-8 bg-white/10 rotate-6"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div>
                    <h2 className="text-base font-bold text-white mb-1.5">Reports & Analytics Dashboard</h2>
                    <p className="text-[10px] text-blue-100 mb-2">Comprehensive analytics and reporting for student performance</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <div className="flex items-center bg-white/10 rounded-full px-2.5 py-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-1.5"></div>
                        <span className="text-[10px] text-white font-medium">{teacherData.school}</span>
                      </div>
                      <div className="flex items-center bg-white/10 rounded-full px-2.5 py-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-1.5"></div>
                        <span className="text-[10px] text-white font-medium">Performance Insights</span>
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
                <div>
                  <h2 className="text-sm font-bold text-blue-700">Attendance Reports & Analytics</h2>
                  <p className="text-[10px] text-gray-600 mt-1">Comprehensive analytics and reporting for student performance</p>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setShowReportsFilter(true)}
                    className="flex items-center gap-1 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-all text-xs font-medium"
                  >
                    <Filter className="w-3 h-3" />
                    Filter Data
                  </button>
                  <button 
                    onClick={exportAttendanceReport}
                    className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full hover:from-blue-600 hover:to-indigo-700 transition-all shadow-sm hover:shadow text-xs font-medium"
                  >
                    <Download className="w-3 h-3" />
                    Export Report
                  </button>
                </div>
              </div>
              
              {/* Summary Stats */}
              <div className="flex gap-3 mb-4">
                {/* Total Students: Purple to indigo gradient */}
                <div className="flex-grow bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg p-4 shadow-sm border border-purple-200/30 backdrop-blur-sm text-white relative overflow-hidden">
                  <div className="absolute -top-5 -right-5 w-20 h-20 bg-purple-300/10 rounded-full"></div>
                  <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-purple-700/10 rounded-full"></div>
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <p className="text-purple-100 text-xs">Total Students</p>
                      <p className="text-xl font-bold mt-1">{studentAttendanceData.length}</p>
                    </div>
                    <Users className="w-7 h-7 text-purple-200 relative z-10" />
                  </div>
                </div>
                
                {/* Present Today: Purple to indigo gradient */}
                <div className="flex-grow bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg p-4 shadow-sm border border-purple-200/30 backdrop-blur-sm text-white relative overflow-hidden">
                  <div className="absolute -top-5 -right-5 w-20 h-20 bg-purple-300/10 rounded-full"></div>
                  <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-purple-700/10 rounded-full"></div>
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <p className="text-purple-100 text-xs">Present Today</p>
                      <p className="text-xl font-bold mt-1">{presentCount}</p>
                    </div>
                    <UserCheck className="w-7 h-7 text-purple-200 relative z-10" />
                  </div>
                </div>
                
                {/* Absent Today: Purple to indigo gradient */}
                <div className="flex-grow bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg p-4 shadow-sm border border-purple-200/30 backdrop-blur-sm text-white relative overflow-hidden">
                  <div className="absolute -top-5 -right-5 w-20 h-20 bg-purple-300/10 rounded-full"></div>
                  <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-purple-700/10 rounded-full"></div>
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <p className="text-purple-100 text-xs">Absent Today</p>
                      <p className="text-xl font-bold mt-1">{absentCount}</p>
                    </div>
                    <UserX className="w-7 h-7 text-purple-200 relative z-10" />
                  </div>
                </div>
                
                {/* Late Arrivals: Purple to indigo gradient */}
                <div className="flex-grow bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg p-4 shadow-sm border border-purple-200/30 backdrop-blur-sm text-white relative overflow-hidden">
                  <div className="absolute -top-5 -right-5 w-20 h-20 bg-purple-300/10 rounded-full"></div>
                  <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-purple-700/10 rounded-full"></div>
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <p className="text-purple-100 text-xs">Late Arrivals</p>
                      <p className="text-xl font-bold mt-1">{lateCount}</p>
                    </div>
                    <Clock className="w-7 h-7 text-purple-200 relative z-10" />
                  </div>
                </div>
              </div>
              
              {/* Charts Section */}
              <div className="flex gap-3 mb-4">
                {/* Weekly Attendance Chart */}
                <div className="flex-grow bg-gradient-to-br from-[#F3F4FF] to-[#E0F2FE] rounded-lg p-4 shadow-md border border-gray-300">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xs font-bold text-gray-900">Weekly Attendance Trend Analysis</h3>
                    <select 
                      className="text-[10px] border border-gray-300 rounded-full px-3 py-1.5 bg-white"
                      value={chartTimeRange}
                      onChange={(e) => setChartTimeRange(e.target.value)}
                    >
                      <option value="Last 7 Days">Last 7 Days</option>
                      <option value="Last 30 Days">Last 30 Days</option>
                      <option value="Last 90 Days">Last 90 Days</option>
                    </select>
                  </div>
                  <div className="h-44">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={getChartData()}>
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
                          domain={[0, 100]}
                          ticks={[0, 20, 40, 60, 80, 100]}
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
                          formatter={(value) => [`${value}%`, 'Percentage']}
                        />
                        <Legend 
                          wrapperStyle={{ fontSize: '8px' }}
                          formatter={(value) => `${value} (%)`}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="present" 
                          name="Present Students" 
                          stroke="#3B82F6" 
                          strokeWidth={2}
                          dot={{ r: 3, fill: '#3B82F6' }}
                          activeDot={{ r: 5, fill: '#3B82F6' }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="absent" 
                          name="Absent Students" 
                          stroke="#6366F1" 
                          strokeWidth={2}
                          dot={{ r: 3, fill: '#6366F1' }}
                          activeDot={{ r: 5, fill: '#6366F1' }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="late" 
                          name="Late Arrivals" 
                          stroke="#8B5CF6" 
                          strokeWidth={2}
                          dot={{ r: 3, fill: '#8B5CF6' }}
                          activeDot={{ r: 5, fill: '#8B5CF6' }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
              
              {/* Additional Reports Section */}
              <div className="mt-6 flex gap-4">
                <div className="flex-grow bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg p-3 shadow-sm border border-indigo-200/30 backdrop-blur-sm text-white">
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="font-bold text-sm">Monthly Attendance Report</h3>
                    <Calendar className="w-4 h-4 text-indigo-200" />
                  </div>
                  <p className="text-indigo-100 text-[9px] mb-2.5">Comprehensive attendance analysis for the current month</p>
                  <button 
                    onClick={() => console.log('View Monthly Report clicked')}
                    className="px-2 py-0.5 bg-white text-indigo-600 rounded-md hover:bg-gray-100 transition-all text-[9px] font-medium"
                  >
                    View Detailed Report
                  </button>
                </div>
                
                <div className="flex-grow bg-gradient-to-br from-cyan-500 to-teal-600 rounded-lg p-3 shadow-sm border border-cyan-200/30 backdrop-blur-sm text-white">
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="font-bold text-sm">Class Performance Comparison</h3>
                    <TrendingUp className="w-4 h-4 text-cyan-200" />
                  </div>
                  <p className="text-cyan-100 text-[9px] mb-2.5">Compare attendance performance across different classes</p>
                  <button 
                    onClick={() => console.log('View Class Performance clicked')}
                    className="px-2 py-0.5 bg-white text-cyan-600 rounded-md hover:bg-gray-100 transition-all text-[9px] font-medium"
                  >
                    Compare Performance
                  </button>
                </div>
                
                <div className="flex-grow bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg p-3 shadow-sm border border-amber-200/30 backdrop-blur-sm text-white">
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="font-bold text-sm">Individual Student Records</h3>
                    <Users className="w-4 h-4 text-amber-200" />
                  </div>
                  <p className="text-amber-100 text-[9px] mb-2.5">Detailed attendance history for each student</p>
                  <button 
                    onClick={() => console.log('View Student Details clicked')}
                    className="px-2 py-0.5 bg-white text-amber-600 rounded-md hover:bg-gray-100 transition-all text-[9px] font-medium"
                  >
                    View Student Records
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Alerts Tab */}
          {activeTab === 'alerts' && (
            <div style={{padding: '16px'}}>
              {/* Welcome Banner */}
              <div className="bg-gradient-to-r from-blue-600 via-indigo-500 to-indigo-600 rounded-md p-4 mb-2 shadow-sm backdrop-blur-sm border border-white/20 relative overflow-hidden -mt-8">
                <EnhancedEducationIllustration />
                <div className="absolute -top-5 -right-5 w-20 h-20 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-white/10 rounded-full"></div>
                <div className="absolute top-4 right-4 w-7 h-7 bg-white/10 rotate-45"></div>
                <div className="absolute top-1/3 left-1/4 w-7 h-7 bg-white/5 rounded-full"></div>
                <div className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-white/10 rotate-12"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div>
                    <h2 className="text-base font-bold text-white mb-1.5">Alert Management Dashboard</h2>
                    <p className="text-[10px] text-blue-100 mb-2">Monitor and manage all system alerts and notifications</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <div className="flex items-center bg-white/10 rounded-full px-2.5 py-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-1.5"></div>
                        <span className="text-[10px] text-white font-medium">{teacherData.school}</span>
                      </div>
                      <div className="flex items-center bg-white/10 rounded-full px-2.5 py-1">
                        <div className="w-2 h-2 bg-red-400 rounded-full mr-1.5"></div>
                        <span className="text-[10px] text-white font-medium">{alerts.length} Active Alerts</span>
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

              <h2 style={{fontSize: '16px', fontWeight: 'bold', marginTop: '21px', marginBottom: '21px', color: '#1d4ed8'}}>Alert Management & Notifications</h2>
              
              {/* Alert Summary Cards */}
              <div style={{display: 'flex', gap: '12px', marginBottom: '15px'}}>
                <div style={{background: 'linear-gradient(to bottom right, #f87171, #ef4444)', padding: '14px', borderRadius: '7px', border: '1px solid rgba(248, 113, 113, 0.3)', textAlign: 'center', flex: '1', position: 'relative', overflow: 'hidden', color: 'white', boxShadow: '0 4px 6px rgba(0,0,0,0.15)'}}>
                  <div style={{position: 'absolute', top: '-29px', right: '-29px', width: '95px', height: '95px', backgroundColor: 'rgba(254, 202, 202, 0.15)', borderRadius: '50%', zIndex: '0'}}></div>
                  <div style={{position: 'absolute', bottom: '-19px', left: '-19px', width: '75px', height: '75px', backgroundColor: 'rgba(252, 165, 165, 0.2)', borderRadius: '50%', zIndex: '0'}}></div>
                  <div style={{position: 'relative', zIndex: '1'}}>
                    <h3 style={{fontSize: '21px', fontWeight: 'bold', marginBottom: '4px'}}>3</h3>
                    <p style={{fontSize: '11px', opacity: '0.9'}}>Critical Alerts</p>
                  </div>
                </div>
                
                <div style={{background: 'linear-gradient(to bottom right, #fbbf24, #f59e0b)', padding: '14px', borderRadius: '7px', border: '1px solid rgba(251, 191, 36, 0.3)', textAlign: 'center', flex: '1', position: 'relative', overflow: 'hidden', color: 'white', boxShadow: '0 4px 6px rgba(0,0,0,0.15)'}}>
                  <div style={{position: 'absolute', top: '-29px', right: '-29px', width: '95px', height: '95px', backgroundColor: 'rgba(251, 191, 36, 0.15)', borderRadius: '50%', zIndex: '0'}}></div>
                  <div style={{position: 'absolute', bottom: '-19px', left: '-19px', width: '75px', height: '75px', backgroundColor: 'rgba(245, 158, 11, 0.2)', borderRadius: '50%', zIndex: '0'}}></div>
                  <div style={{position: 'relative', zIndex: '1'}}>
                    <h3 style={{fontSize: '21px', fontWeight: 'bold', marginBottom: '4px'}}>7</h3>
                    <p style={{fontSize: '11px', opacity: '0.9'}}>Warnings</p>
                  </div>
                </div>
                
                <div style={{background: 'linear-gradient(to bottom right, #60a5fa, #3b82f6)', padding: '14px', borderRadius: '7px', border: '1px solid rgba(96, 165, 250, 0.3)', textAlign: 'center', flex: '1', position: 'relative', overflow: 'hidden', color: 'white', boxShadow: '0 4px 6px rgba(0,0,0,0.15)'}}>
                  <div style={{position: 'absolute', top: '-29px', right: '-29px', width: '95px', height: '95px', backgroundColor: 'rgba(191, 219, 254, 0.15)', borderRadius: '50%', zIndex: '0'}}></div>
                  <div style={{position: 'absolute', bottom: '-19px', left: '-19px', width: '75px', height: '75px', backgroundColor: 'rgba(96, 165, 250, 0.2)', borderRadius: '50%', zIndex: '0'}}></div>
                  <div style={{position: 'relative', zIndex: '1'}}>
                    <h3 style={{fontSize: '21px', fontWeight: 'bold', marginBottom: '4px'}}>12</h3>
                    <p style={{fontSize: '11px', opacity: '0.9'}}>Informational Notices</p>
                  </div>
                </div>
                
                <div style={{background: 'linear-gradient(to bottom right, #a78bfa, #8b5cf6)', padding: '14px', borderRadius: '7px', border: '1px solid rgba(167, 139, 250, 0.3)', textAlign: 'center', flex: '1', position: 'relative', overflow: 'hidden', color: 'white', boxShadow: '0 4px 6px rgba(0,0,0,0.15)'}}>
                  <div style={{position: 'absolute', top: '-29px', right: '-29px', width: '95px', height: '95px', backgroundColor: 'rgba(221, 214, 254, 0.15)', borderRadius: '50%', zIndex: '0'}}></div>
                  <div style={{position: 'absolute', bottom: '-19px', left: '-19px', width: '75px', height: '75px', backgroundColor: 'rgba(192, 132, 252, 0.2)', borderRadius: '50%', zIndex: '0'}}></div>
                  <div style={{position: 'relative', zIndex: '1'}}>
                    <h3 style={{fontSize: '21px', fontWeight: 'bold', marginBottom: '4px'}}>5</h3>
                    <p style={{fontSize: '11px', opacity: '0.9'}}>General Info</p>
                  </div>
                </div>
              </div>
              
              {/* Alerts List */}
              <div style={{backgroundColor: 'white', padding: '12px', borderRadius: '4px', border: '1px solid #e5e7eb'}}>
                <h3 style={{fontSize: '10px', fontWeight: 'bold', marginBottom: '10px'}}>Recent Alerts & Notifications</h3>
                <div style={{display: 'flex', flexDirection: 'column', gap: '11px'}}>
                  <div style={{display: 'flex', alignItems: 'flex-start', gap: '6px', padding: '11px', backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '4px'}}>
                    <div style={{color: '#dc2626', marginTop: '1px'}}>⚠️</div>
                    <div style={{flex: 1}}>
                      <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1px'}}>
                        <h4 style={{fontWeight: '600', color: '#111827', fontSize: '12px'}}>High Absenteeism Detected</h4>
                        <span style={{fontSize: '6px', color: '#6b7280'}}>2 hours ago</span>
                      </div>
                      <p style={{fontSize: '8px', color: '#6b7280', marginBottom: '6px'}}>Multiple students in Class 10-A have been absent for more than 3 consecutive days. Immediate attention required.</p>
                      <div style={{display: 'flex', gap: '6px', marginBottom: '6px'}}>
                        <span style={{backgroundColor: '#fee2e2', color: '#b91c1c', padding: '2px 4px', borderRadius: '9999px', fontSize: '6px'}}>Critical</span>
                        <span style={{fontSize: '6px', color: '#6b7280'}}>Class 10-A</span>
                      </div>
                      <div style={{display: 'flex', gap: '6px'}}>
                        <button style={{padding: '2px 8px', backgroundColor: '#dc2626', color: 'white', border: 'none', borderRadius: '2px', cursor: 'pointer', fontWeight: '500', fontSize: '8px'}}>Take Action</button>
                        <button style={{padding: '2px 8px', backgroundColor: '#ffffff', color: '#dc2626', border: '1px solid #dc2626', borderRadius: '2px', cursor: 'pointer', fontWeight: '500', fontSize: '8px'}}>View Details</button>
                      </div>
                    </div>
                    <button style={{color: '#9ca3af', cursor: 'pointer'}}>✕</button>
                  </div>
                  
                  <div style={{display: 'flex', alignItems: 'flex-start', gap: '6px', padding: '11px', backgroundColor: '#fffbeb', border: '1px solid #fde68a', borderRadius: '4px'}}>
                    <div style={{color: '#d97706', marginTop: '1px'}}>⚠️</div>
                    <div style={{flex: 1}}>
                      <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1px'}}>
                        <h4 style={{fontWeight: '600', color: '#111827', fontSize: '12px'}}>Late Arrival Trend</h4>
                        <span style={{fontSize: '6px', color: '#6b7280'}}>1 day ago</span>
                      </div>
                      <p style={{fontSize: '8px', color: '#6b7280', marginBottom: '6px'}}>Increased number of late arrivals detected in Class 11-B this week compared to previous weeks.</p>
                      <div style={{display: 'flex', gap: '6px', marginBottom: '6px'}}>
                        <span style={{backgroundColor: '#fef3c7', color: '#d97706', padding: '2px 4px', borderRadius: '9999px', fontSize: '6px'}}>Warning</span>
                        <span style={{fontSize: '6px', color: '#6b7280'}}>Class 11-B</span>
                      </div>
                      <div style={{display: 'flex', gap: '6px'}}>
                        <button style={{padding: '2px 8px', backgroundColor: '#d97706', color: 'white', border: 'none', borderRadius: '2px', cursor: 'pointer', fontWeight: '500', fontSize: '8px'}}>Review Policy</button>
                        <button style={{padding: '2px 8px', backgroundColor: '#ffffff', color: '#d97706', border: '1px solid #d97706', borderRadius: '2px', cursor: 'pointer', fontWeight: '500', fontSize: '8px'}}>View Details</button>
                      </div>
                    </div>
                    <button style={{color: '#9ca3af', cursor: 'pointer'}}>✕</button>
                  </div>
                  
                  <div style={{display: 'flex', alignItems: 'flex-start', gap: '6px', padding: '11px', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '4px'}}>
                    <div style={{color: '#2563eb', marginTop: '1px'}}>🔔</div>
                    <div style={{flex: 1}}>
                      <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1px'}}>
                        <h4 style={{fontWeight: '600', color: '#111827', fontSize: '12px'}}>System Maintenance Scheduled</h4>
                        <span style={{fontSize: '6px', color: '#6b7280'}}>3 days ago</span>
                      </div>
                      <p style={{fontSize: '8px', color: '#6b7280', marginBottom: '6px'}}>Planned system maintenance on April 20, 2024 from 10:00 PM to 2:00 AM. Service may be temporarily unavailable.</p>
                      <div style={{display: 'flex', gap: '6px', marginBottom: '6px'}}>
                        <span style={{backgroundColor: '#dbeafe', color: '#1d4ed8', padding: '2px 4px', borderRadius: '9999px', fontSize: '6px'}}>Notice</span>
                        <span style={{fontSize: '6px', color: '#6b7280'}}>System Admin</span>
                      </div>
                      <div style={{display: 'flex', gap: '6px'}}>
                        <button style={{padding: '2px 8px', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '2px', cursor: 'pointer', fontWeight: '500', fontSize: '8px'}}>Acknowledge</button>
                        <button style={{padding: '2px 8px', backgroundColor: '#ffffff', color: '#2563eb', border: '1px solid #2563eb', borderRadius: '2px', cursor: 'pointer', fontWeight: '500', fontSize: '8px'}}>More Info</button>
                      </div>
                    </div>
                    <button style={{color: '#9ca3af', cursor: 'pointer'}}>✕</button>
                  </div>
                </div>
                
              </div>
            </div>
          )}

          {/* Post Notices Tab */}
          {activeTab === 'notices' && (
            <div>
              {/* Welcome Banner */}
              <div className="bg-gradient-to-r from-blue-600 via-indigo-500 to-indigo-600 rounded-md p-4 mb-4 shadow-sm backdrop-blur-sm border border-white/20 relative overflow-hidden -mt-5">
                <EnhancedEducationIllustration />
                <div className="absolute -top-5 -right-5 w-20 h-20 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-white/10 rounded-full"></div>
                <div className="absolute top-4 right-4 w-7 h-7 bg-white/10 rotate-45"></div>
                <div className="absolute top-1/3 left-1/4 w-7 h-7 bg-white/5 rounded-full"></div>
                <div className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-white/10 rotate-12"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div>
                    <h2 className="text-[13px] font-bold text-white mb-1.5">Notice Management Dashboard</h2>
                    <p className="text-[10px] text-blue-100 mb-2">Create and manage important notices for students and staff</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <div className="flex items-center bg-white/10 rounded-full px-2.5 py-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-1.5"></div>
                        <span className="text-[10px] text-white font-medium">{teacherData.school}</span>
                      </div>
                      <div className="flex items-center bg-white/10 rounded-full px-2.5 py-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-1.5"></div>
                        <span className="text-[10px] text-white font-medium">Notice Board</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-white/20 rounded-md p-2">
                      <MessageSquare className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-[14px] font-bold text-blue-700">Post New Notice</h2>
                  <p className="text-[10px] text-gray-600 mt-1">Create and manage important notices for students and staff</p>
                </div>
                <div className="flex gap-3">
                  <button 
                    className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded hover:from-blue-600 hover:to-indigo-700 transition-all shadow-sm hover:shadow text-[10px] font-medium"
                  >
                    <Plus className="w-3 h-3" />
                    Create Notice
                  </button>
                </div>
              </div>
              
              {/* Notice Creation Form */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
                <h3 className="text-[10px] font-bold text-gray-900 mb-3">Compose Notice</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-medium text-gray-700 mb-1.5">Notice Title</label>
                    <input 
                      type="text" 
                      name="title"
                      value={newNotice.title}
                      onChange={handleNewNoticeChange}
                      className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-[10px]"
                      placeholder="Enter notice title"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-[10px] font-medium text-gray-700 mb-1.5">Notice Content</label>
                    <textarea 
                      name="content"
                      value={newNotice.content}
                      onChange={handleNewNoticeChange}
                      className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-[10px]"
                      placeholder="Enter notice content"
                      rows="4"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-[10px] font-medium text-gray-700 mb-1.5">Target Audience</label>
                    <select 
                      name="audience"
                      value={newNotice.audience}
                      onChange={handleNewNoticeChange}
                      className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-[10px]"
                    >
                      <option value="All Classes">All Classes</option>
                      {teacherData.classes.map((cls, index) => (
                        <option key={index} value={cls.name}>{cls.name}</option>
                      ))}
                      <option value="Staff Only">Staff Only</option>
                      <option value="Parents">Parents</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-[10px] font-medium text-gray-700 mb-1.5">Priority Level</label>
                    <div className="flex gap-3">
                      <label className="flex items-center">
                        <input 
                          type="radio" 
                          name="priority" 
                          value="Normal"
                          checked={newNotice.priority === "Normal"}
                          onChange={handleNewNoticeChange}
                          className="h-3 w-3 text-blue-600" 
                        />
                        <span className="ml-1.5 text-[10px] text-gray-700">Normal</span>
                      </label>
                      <label className="flex items-center">
                        <input 
                          type="radio" 
                          name="priority" 
                          value="Important"
                          checked={newNotice.priority === "Important"}
                          onChange={handleNewNoticeChange}
                          className="h-3 w-3 text-blue-600" 
                        />
                        <span className="ml-1.5 text-[10px] text-gray-700">Important</span>
                      </label>
                      <label className="flex items-center">
                        <input 
                          type="radio" 
                          name="priority" 
                          value="Urgent"
                          checked={newNotice.priority === "Urgent"}
                          onChange={handleNewNoticeChange}
                          className="h-3 w-3 text-blue-600" 
                        />
                        <span className="ml-1.5 text-[10px] text-gray-700">Urgent</span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    <button 
                      onClick={clearNoticeForm}
                      className="px-3 py-1.5 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-all text-[10px]"
                    >
                      Clear
                    </button>
                    <button 
                      onClick={addNewNotice}
                      className="px-3 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded hover:from-blue-600 hover:to-indigo-700 transition-all shadow-sm hover:shadow text-[10px]"
                    >
                      Post Notice
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Recent Notices */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-[10px] font-bold text-gray-900">Recent Notices</h3>
                  <button className="text-blue-600 hover:text-blue-800 text-[10px] font-medium">View All</button>
                </div>
                
                <div className="space-y-4">
                  {notices.map((notice) => (
                    <div key={notice.id} className="border border-gray-200 rounded-md p-3 hover:bg-blue-50 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-gray-900 text-[12px]">{notice.title}</h4>
                        <span className={`text-[8px] ${getPriorityBadgeClass(notice.priority)} px-1.5 py-0.5 rounded-full`}>
                          {notice.priority}
                        </span>
                      </div>
                      <p className="text-gray-600 text-[10px] mb-2">{notice.content}</p>
                      <div className="flex justify-between items-center text-[10px] text-gray-500">
                        <span>Posted {getTimeAgo(notice.date, notice.time)}</span>
                        <span>To: {notice.audience}</span>
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
              <div className="bg-gradient-to-r from-blue-600 via-indigo-500 to-indigo-600 rounded-md p-4 mb-4 shadow-sm backdrop-blur-sm border border-white/20 relative overflow-hidden -mt-5">
                <EnhancedEducationIllustration />
                <div className="absolute -top-5 -right-5 w-20 h-20 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-white/10 rounded-full"></div>
                <div className="absolute top-4 right-4 w-7 h-7 bg-white/10 rotate-45"></div>
                <div className="absolute top-1/3 left-1/4 w-7 h-7 bg-white/5 rounded-full"></div>
                <div className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-white/10 rotate-12"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div>
                    <h2 className="text-base font-bold text-white mb-1.5">System Settings Dashboard</h2>
                    <p className="text-[10px] text-blue-100 mb-2">Configure and customize your account preferences</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <div className="flex items-center bg-white/10 rounded-full px-2.5 py-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-1.5"></div>
                        <span className="text-[10px] text-white font-medium">{teacherData.school}</span>
                      </div>
                      <div className="flex items-center bg-white/10 rounded-full px-2.5 py-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-1.5"></div>
                        <span className="text-[10px] text-white font-medium">Account Management</span>
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

              <div className="flex justify-between items-center mb-5">
                <div>
                  <h2 className="text-xs font-bold text-blue-700">Account Settings</h2>
                  <p className="text-gray-600 text-[10px]">Configure and customize your account preferences</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {/* Profile Card */}
                <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-100 p-5">
                  {settingsTab === 'profile' && (
                    <>
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
                    </>
                  )}
                  
                  {settingsTab === 'security' && (
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-bold text-gray-900 mb-3">Security Settings</h3>
                        <p className="text-gray-600 text-[10px] mb-4">Manage your account security preferences</p>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                          <div>
                            <h4 className="text-[10px] font-medium text-gray-900">Two-Factor Authentication</h4>
                            <p className="text-[9px] text-gray-600">Add an extra layer of security to your account</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-8 h-4 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-4 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                          <div>
                            <h4 className="text-[10px] font-medium text-gray-900">Login Alerts</h4>
                            <p className="text-[9px] text-gray-600">Receive notifications for new sign-in attempts</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-8 h-4 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-4 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                          <div>
                            <h4 className="text-[10px] font-medium text-gray-900">Session Timeout</h4>
                            <p className="text-[9px] text-gray-600">Automatically log out after inactivity</p>
                          </div>
                          <select className="text-[10px] border border-gray-300 rounded-md px-2 py-1">
                            <option>15 minutes</option>
                            <option>30 minutes</option>
                            <option selected>1 hour</option>
                            <option>2 hours</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="pt-3">
                        <button className="px-3 py-1.5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded hover:from-red-600 hover:to-red-700 transition-all shadow-sm hover:shadow text-[10px]">
                          Change Password
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {settingsTab === 'notifications' && (
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-bold text-gray-900 mb-3">Notification Preferences</h3>
                        <p className="text-gray-600 text-[10px] mb-4">Choose how you want to be notified</p>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                          <div>
                            <h4 className="text-[10px] font-medium text-gray-900">Email Notifications</h4>
                            <p className="text-[9px] text-gray-600">Receive updates via email</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-8 h-4 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-4 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                          <div>
                            <h4 className="text-[10px] font-medium text-gray-900">Push Notifications</h4>
                            <p className="text-[9px] text-gray-600">Receive notifications on your device</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-8 h-4 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-4 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                          <div>
                            <h4 className="text-[10px] font-medium text-gray-900">SMS Notifications</h4>
                            <p className="text-[9px] text-gray-600">Receive text messages for important updates</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-8 h-4 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-4 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                      </div>
                      
                      <div className="pt-3">
                        <button className="px-3 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded hover:from-blue-600 hover:to-indigo-700 transition-all shadow-sm hover:shadow text-[10px]">
                          Save Notification Settings
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {settingsTab === 'appearance' && (
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-bold text-gray-900 mb-3">Appearance Settings</h3>
                        <p className="text-gray-600 text-[10px] mb-4">Customize the look and feel of your dashboard</p>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <h4 className="text-[10px] font-medium text-gray-900 mb-2">Theme</h4>
                          <div className="grid grid-cols-2 gap-2">
                            <button className="p-2 border-2 border-blue-500 rounded-md bg-blue-50">
                              <div className="w-full h-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded mb-1"></div>
                              <p className="text-[9px] font-medium text-gray-900">Default</p>
                            </button>
                            <button className="p-2 border border-gray-200 rounded-md hover:border-gray-300">
                              <div className="w-full h-6 bg-gradient-to-r from-gray-700 to-gray-900 rounded mb-1"></div>
                              <p className="text-[9px] font-medium text-gray-900">Dark</p>
                            </button>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-[10px] font-medium text-gray-900 mb-2">Language</h4>
                          <select className="w-full text-[10px] border border-gray-300 rounded-md px-3 py-1.5">
                            <option>English</option>
                            <option>Hindi</option>
                            <option>Spanish</option>
                            <option>French</option>
                          </select>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                          <div>
                            <h4 className="text-[10px] font-medium text-gray-900">Compact View</h4>
                            <p className="text-[9px] text-gray-600">Enable compact layout for more content</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-8 h-4 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-4 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                      </div>
                      
                      <div className="pt-3">
                        <button className="px-3 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded hover:from-blue-600 hover:to-indigo-700 transition-all shadow-sm hover:shadow text-[10px]">
                          Save Appearance Settings
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Settings Navigation */}
                <div className="space-y-3">
                  <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5">
                    <h3 className="text-xs font-bold text-gray-900 mb-3">Settings</h3>
                    <div className="space-y-1.5">
                      <button 
                        onClick={() => setSettingsTab('profile')}
                        className={`w-full text-left px-1.5 py-0.5 rounded font-medium text-[10px] ${
                          settingsTab === 'profile' 
                            ? 'bg-blue-50 text-blue-600' 
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        Account
                      </button>
                      <button 
                        onClick={() => setSettingsTab('security')}
                        className={`w-full text-left px-1.5 py-0.5 rounded font-medium text-[10px] ${
                          settingsTab === 'security' 
                            ? 'bg-blue-50 text-blue-600' 
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        Security
                      </button>
                      <button 
                        onClick={() => setSettingsTab('notifications')}
                        className={`w-full text-left px-1.5 py-0.5 rounded font-medium text-[10px] ${
                          settingsTab === 'notifications' 
                            ? 'bg-blue-50 text-blue-600' 
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        Notifications
                      </button>
                      <button 
                        onClick={() => setSettingsTab('appearance')}
                        className={`w-full text-left px-1.5 py-0.5 rounded font-medium text-[10px] ${
                          settingsTab === 'appearance' 
                            ? 'bg-blue-50 text-blue-600' 
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
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
                name: 'James',
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James'
              }, {
                name: 'Sarah',
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
              }, {
                name: 'Michael',
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael'
              }, {
                name: 'Emma',
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma'
              }, {
                name: 'David',
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David'
              }, {
                name: 'Sophia',
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia'
              }, {
                name: 'Olivia',
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Olivia'
              }, {
                name: 'William',
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=William'
              }, {
                name: 'Ava',
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ava'
              }, {
                name: 'Alexander',
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alexander'
              }, {
                name: 'Mia',
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mia'
              }, {
                name: 'Ethan',
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ethan'
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
                  {teacherData.classes.map((classObj, index) => (
                    <option key={index} value={classObj.name}>{classObj.name}</option>
                  ))}
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
      
      {/* Add Class Form Modal */}
      {showAddClassForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">Add New Class</h3>
              <button 
                onClick={() => setShowAddClassForm(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Class Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={newClass.name}
                  onChange={handleNewClassChange}
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs"
                  placeholder="Enter class name (e.g., Class 9-D)"
                />
              </div>
              
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={newClass.subject}
                  onChange={handleNewClassChange}
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs"
                  placeholder="Enter subject name"
                />
              </div>
              
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Color</label>
                <select 
                  name="color"
                  value={newClass.color || 'blue'}
                  onChange={handleNewClassChange}
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs"
                >
                  <option value="blue">Blue</option>
                  <option value="green">Green</option>
                  <option value="purple">Purple</option>
                  <option value="indigo">Indigo</option>
                  <option value="cyan">Cyan</option>
                  <option value="amber">Amber</option>
                  <option value="teal">Teal</option>
                  <option value="rose">Rose</option>
                </select>
              </div>
              
              <div className="flex gap-3 pt-4">
                <button 
                  onClick={() => setShowAddClassForm(false)}
                  className="flex-1 px-3 py-1.5 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-all text-xs"
                >
                  Cancel
                </button>
                <button 
                  onClick={addNewClass}
                  className="flex-1 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded hover:from-blue-600 hover:to-indigo-700 transition-all shadow-sm hover:shadow text-xs"
                >
                  Add Class
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
              <h3 className="text-xs font-bold text-gray-900">Weekly Attendance for {selectedStudent.name}</h3>
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
                <h4 className="font-bold text-gray-900 text-xs">{selectedStudent.name}</h4>
                <p className="text-gray-600 text-[10px]">{selectedStudent.class} • Roll #{selectedStudent.roll}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h5 className="font-medium text-gray-900 text-xs mb-3">This Week's Attendance</h5>
                <div className="grid grid-cols-5 gap-2">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, index) => (
                    <div key={day} className="text-center">
                      <div className="text-[8px] text-gray-500 mb-1">{day}</div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto text-[8px] font-medium ${index === 0 ? 'bg-green-100 text-green-800' : index === 1 ? 'bg-green-100 text-green-800' : index === 2 ? 'bg-yellow-100 text-yellow-800' : index === 3 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {index === 0 ? 'P' : index === 1 ? 'P' : index === 2 ? 'L' : index === 3 ? 'P' : 'A'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-blue-600 text-[10px] mb-1">Attendance Rate</div>
                  <div className="text-xl font-bold text-blue-800">80%</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="text-green-600 text-[10px] mb-1">Present Days</div>
                  <div className="text-xl font-bold text-green-800">4</div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h5 className="font-medium text-gray-900 text-xs mb-3">Attendance History</h5>
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
                        <div className="font-medium text-gray-900 text-[10px]">{record.date}</div>
                        <div className="text-gray-500 text-[8px]">{record.time}</div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-[10px] font-medium 
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
      
      {/* Add Assignment Form Modal */}
      {showAddAssignmentForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">Post New Assignment</h3>
              <button 
                onClick={() => setShowAddAssignmentForm(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Assignment Title</label>
                <input 
                  type="text" 
                  name="title"
                  value={newAssignment.title}
                  onChange={handleNewAssignmentChange}
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs"
                  placeholder="Enter assignment title"
                />
              </div>
              
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={newAssignment.subject}
                  onChange={handleNewAssignmentChange}
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs"
                  placeholder="Enter subject"
                />
              </div>
              
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Class</label>
                <select 
                  name="class"
                  value={newAssignment.class}
                  onChange={handleNewAssignmentChange}
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs"
                >
                  {teacherData.classes.map((classObj, index) => (
                    <option key={index} value={classObj.name}>{classObj.name}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Due Date</label>
                <input 
                  type="date" 
                  name="dueDate"
                  value={newAssignment.dueDate}
                  onChange={handleNewAssignmentChange}
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs"
                />
              </div>
              
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Description</label>
                <textarea 
                  name="description"
                  value={newAssignment.description}
                  onChange={handleNewAssignmentChange}
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs"
                  placeholder="Enter assignment description"
                  rows="3"
                />
              </div>
              
              <div className="flex gap-3 pt-4">
                <button 
                  onClick={() => setShowAddAssignmentForm(false)}
                  className="flex-1 px-3 py-1.5 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-all text-xs"
                >
                  Cancel
                </button>
                <button 
                  onClick={addNewAssignment}
                  className="flex-1 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded hover:from-blue-600 hover:to-indigo-700 transition-all shadow-sm hover:shadow text-xs"
                >
                  Post Assignment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Assignment Filter Modal */}
      {showAssignmentFilter && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-4 max-w-md w-full max-h-[80vh] overflow-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-gray-900">Filter Assignments</h3>
              <button 
                onClick={() => setShowAssignmentFilter(false)}
                className="p-1 hover:bg-gray-100 rounded transition-colors"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
            </div>
            
            <div className="space-y-3">
              <div>
                <label className="block text-[10px] font-medium text-gray-700 mb-1">Class</label>
                <select 
                  name="class"
                  value={assignmentFilter.class}
                  onChange={handleAssignmentFilterChange}
                  className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[10px]"
                >
                  <option value="">All Classes</option>
                  {getUniqueClasses().map((className, index) => (
                    <option key={index} value={className}>{className}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-[10px] font-medium text-gray-700 mb-1">Subject</label>
                <select 
                  name="subject"
                  value={assignmentFilter.subject}
                  onChange={handleAssignmentFilterChange}
                  className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[10px]"
                >
                  <option value="">All Subjects</option>
                  {getUniqueSubjects().map((subjectName, index) => (
                    <option key={index} value={subjectName}>{subjectName}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-[10px] font-medium text-gray-700 mb-1">Status</label>
                <select 
                  name="status"
                  value={assignmentFilter.status}
                  onChange={handleAssignmentFilterChange}
                  className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[10px]"
                >
                  <option value="all">All Assignments</option>
                  <option value="completed">Completed</option>
                  <option value="pending">Pending</option>
                </select>
              </div>
              
              <div className="flex gap-2 pt-3">
                <button 
                  onClick={resetAssignmentFilters}
                  className="flex-1 px-2 py-1 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-all text-[10px]"
                >
                  Reset
                </button>
                <button 
                  onClick={applyAssignmentFilters}
                  className="flex-1 px-2 py-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded hover:from-blue-600 hover:to-indigo-700 transition-all shadow-sm hover:shadow text-[10px]"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Reports Filter Modal */}
      {showReportsFilter && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-4 max-w-md w-full max-h-[80vh] overflow-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-gray-900">Filter Reports</h3>
              <button 
                onClick={() => setShowReportsFilter(false)}
                className="p-1 hover:bg-gray-100 rounded transition-colors"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
            </div>
            
            <div className="space-y-3">
              <div>
                <label className="block text-[10px] font-medium text-gray-700 mb-1">Class</label>
                <select 
                  name="class"
                  value={reportsFilter.class}
                  onChange={handleReportsFilterChange}
                  className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[10px]"
                >
                  <option value="">All Classes</option>
                  {getUniqueClassesForReports().map((className, index) => (
                    <option key={index} value={className}>{className}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-[10px] font-medium text-gray-700 mb-1">Date Range</label>
                <select 
                  name="dateRange"
                  value={reportsFilter.dateRange}
                  onChange={handleReportsFilterChange}
                  className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[10px]"
                >
                  <option value="last7days">Last 7 Days</option>
                  <option value="last30days">Last 30 Days</option>
                  <option value="last90days">Last 90 Days</option>
                  <option value="thismonth">This Month</option>
                  <option value="lastmonth">Last Month</option>
                </select>
              </div>
              
              <div className="flex gap-2 pt-3">
                <button 
                  onClick={resetReportsFilters}
                  className="flex-1 px-2 py-1 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-all text-[10px]"
                >
                  Reset
                </button>
                <button 
                  onClick={applyReportsFilters}
                  className="flex-1 px-2 py-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded hover:from-blue-600 hover:to-indigo-700 transition-all shadow-sm hover:shadow text-[10px]"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Class Details Modal */}
      {showClassDetailsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-0">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[80vh] overflow-y-auto">
            <div className="p-2">
              <div className="flex justify-between items-center mb-0">
                <h3 className="text-[14px] font-bold text-gray-900">Class Details</h3>
                <button 
                  onClick={() => setShowClassDetailsModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              {selectedClassDetails && (
                <div className="space-y-1">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-1 text-white">
                    <h4 className="text-[12px] font-bold">{selectedClassDetails.subject}</h4>
                    <p className="text-[10px] text-blue-100">{selectedClassDetails.name}</p>
                    <p className="text-[10px] mt-0.5">Teacher: {teacherData.name}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-1">
                    <div className="bg-gray-50 p-1 rounded-lg">
                      <p className="text-[10px] text-gray-500">Subject</p>
                      <p className="text-[10px] font-medium">{selectedClassDetails.subject}</p>
                    </div>
                    <div className="bg-gray-50 p-1 rounded-lg">
                      <p className="text-[10px] text-gray-500">Class Name</p>
                      <p className="text-[10px] font-medium">{selectedClassDetails.name}</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-1 rounded-lg">
                    <p className="text-[10px] text-gray-500">Students</p>
                    <p className="text-[10px] font-medium">{studentAttendanceData.filter(s => s.class === selectedClassDetails.name.replace('Class ', '')).length} enrolled</p>
                  </div>
                  
                  {/* Class Notes Section */}
                  <div className="bg-gray-50 p-1 rounded-lg">
                    <div className="flex justify-between items-center mb-0.5">
                      <p className="text-[10px] text-gray-500">Class Notes</p>
                      <span className="text-[8px] bg-green-100 text-green-800 px-1 py-0.5 rounded-full">
                        {getNotesForClass(selectedClassDetails.name).length} notes
                      </span>
                    </div>
                    {getNotesForClass(selectedClassDetails.name).length > 0 ? (
                      <div className="max-h-20 overflow-y-auto">
                        {getNotesForClass(selectedClassDetails.name).slice(0, 3).map(note => (
                          <div key={note.id} className="mb-0.5 last:mb-0 text-[8px]">
                            <p className="font-medium truncate">{note.title}</p>
                            <p className="text-gray-600 truncate">{note.content}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-[8px] text-gray-600">No notes yet</p>
                    )}
                  </div>
                  
                  {/* Class Files Section */}
                  <div className="bg-gray-50 p-1 rounded-lg">
                    <div className="flex justify-between items-center mb-0.5">
                      <p className="text-[10px] text-gray-500">Class Files</p>
                      <span className="text-[8px] bg-purple-100 text-purple-800 px-1 py-0.5 rounded-full">
                        {getFilesForClass(selectedClassDetails.name).length} files
                      </span>
                    </div>
                    {getFilesForClass(selectedClassDetails.name).length > 0 ? (
                      <div className="max-h-20 overflow-y-auto">
                        {getFilesForClass(selectedClassDetails.name).slice(0, 3).map(file => (
                          <div key={file.id} className="mb-0.5 last:mb-0 text-[8px]">
                            <div className="flex items-center gap-1">
                              <span className="text-base">{getFileIcon(file.type)}</span>
                              <div className="min-w-0 flex-1">
                                <p className="font-medium truncate">{file.name}</p>
                                <p className="text-gray-600">{formatFileSize(file.size)}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-[8px] text-gray-600">No files uploaded yet</p>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-1 pt-0.5">
                    <button 
                      className="flex items-center justify-center gap-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-1 px-2 rounded-md hover:from-blue-600 hover:to-blue-700 transition-all"
                      onClick={() => {
                        // Set the class for the new student form
                        setNewStudent({...newStudent, class: selectedClassDetails.name.replace('Class ', '')});
                        setShowAddStudentForm(true);
                        setShowClassDetailsModal(false);
                      }}
                    >
                      <User className="w-3 h-3" />
                      <span className="text-[8px]">Add Student</span>
                    </button>
                    <button 
                      className="flex items-center justify-center gap-1 bg-gradient-to-r from-blue-400 to-blue-500 text-white py-1 px-2 rounded-md hover:from-blue-500 hover:to-blue-600 transition-all"
                      onClick={() => {
                        // Set the class for the new note form
                        setNewNote({...newNote, class: selectedClassDetails.name});
                        setShowAddNoteModal(true);
                        setShowClassDetailsModal(false);
                      }}
                    >
                      <FileText className="w-3 h-3" />
                      <span className="text-[8px]">Add Notes</span>
                    </button>
                    <button 
                      className="flex items-center justify-center gap-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-1 px-2 rounded-md hover:from-blue-700 hover:to-blue-800 transition-all"
                      onClick={() => {
                        // Set the audience for the new notice form
                        setNewNotice({...newNotice, audience: selectedClassDetails.name});
                        setShowClassDetailsModal(false);
                        // Switch to the notices tab
                        setActiveTab('notices');
                      }}
                    >
                      <Bell className="w-3 h-3" />
                      <span className="text-[8px]">Add Notice</span>
                    </button>
                    <button 
                      className="flex items-center justify-center gap-1 bg-gradient-to-r from-blue-700 to-blue-800 text-white py-1 px-2 rounded-md hover:from-blue-800 hover:to-blue-900 transition-all"
                      onClick={() => {
                        setShowFileUploadModal(true);
                        setShowClassDetailsModal(false);
                      }}
                    >
                      <FileText className="w-3 h-3" />
                      <span className="text-[8px]">Upload Files</span>
                    </button>
                  </div>
                  
                  {/* Close Button */}
                  <div className="pt-0.5">
                    <button 
                      className="w-full flex items-center justify-center gap-1 bg-gradient-to-r from-blue-300 to-blue-400 text-white py-1 px-2 rounded-md hover:from-blue-400 hover:to-blue-500 transition-all"
                      onClick={() => setShowClassDetailsModal(false)}
                    >
                      <X className="w-3 h-3" />
                      <span className="text-[8px]">Close</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      
      {/* Add Note Modal */}
      {showAddNoteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-0">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[80vh] overflow-y-auto">
            <div className="p-2">
              <div className="flex justify-between items-center mb-0">
                <h3 className="text-[14px] font-bold text-gray-900">Add Class Note</h3>
                <button 
                  onClick={() => setShowAddNoteModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-2">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg p-1 text-white">
                  <h4 className="text-[12px] font-bold">{newNote.class}</h4>
                  <p className="text-[10px] text-green-100">Add a note for this class</p>
                </div>
                
                <div>
                  <label className="block text-[10px] font-medium text-gray-700 mb-0.5">Note Title</label>
                  <input 
                    type="text" 
                    name="title"
                    value={newNote.title}
                    onChange={handleNewNoteChange}
                    className="w-full px-1.5 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-[10px]"
                    placeholder="Enter note title"
                  />
                </div>
                
                <div>
                  <label className="block text-[10px] font-medium text-gray-700 mb-0.5">Note Content</label>
                  <textarea 
                    name="content"
                    value={newNote.content}
                    onChange={handleNewNoteChange}
                    className="w-full px-1.5 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-[10px]"
                    placeholder="Enter note content"
                    rows="2"
                  />
                </div>
                
                <div className="flex gap-1 pt-0.5">
                  <button 
                    onClick={clearNoteForm}
                    className="px-2 py-1 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-all text-[10px]"
                  >
                    Clear
                  </button>
                  <button 
                    onClick={addNewNote}
                    className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-1 px-2 rounded hover:from-green-600 hover:to-emerald-700 transition-all text-[10px]"
                  >
                    Add Note
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* File Upload Modal */}
      {showFileUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-0">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[80vh] overflow-y-auto">
            <div className="p-2">
              <div className="flex justify-between items-center mb-0">
                <h3 className="text-[14px] font-bold text-gray-900">Upload Files</h3>
                <button 
                  onClick={() => setShowFileUploadModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-2">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg p-1 text-white">
                  <h4 className="text-[12px] font-bold">{selectedClassDetails?.name || newNote.class}</h4>
                  <p className="text-[10px] text-purple-100">Upload files for this class</p>
                </div>
                
                {/* File selection area */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-2 text-center cursor-pointer hover:border-purple-400 transition-colors"
                  onClick={() => document.getElementById('fileInput').click()}
                >
                  <div className="flex flex-col items-center justify-center gap-1">
                    <FileText className="w-4 h-4 text-gray-400" />
                    <p className="text-[10px] text-gray-600">Click to select files or drag and drop</p>
                    <p className="text-[8px] text-gray-500">Supports images, documents, and other files</p>
                    <input 
                      id="fileInput"
                      type="file" 
                      multiple
                      onChange={handleFileSelect}
                      className="hidden"
                    />
                  </div>
                </div>
                
                {/* Selected files list */}
                {fileUploads.length > 0 && (
                  <div className="bg-gray-50 rounded-lg p-1">
                    <h4 className="text-[10px] font-medium text-gray-700 mb-0.5">Selected Files ({fileUploads.length})</h4>
                    <div className="space-y-1 max-h-24 overflow-y-auto">
                      {fileUploads.map((file) => (
                        <div key={file.id} className="flex items-center justify-between bg-white p-1 rounded border">
                          <div className="flex items-center gap-1">
                            <span className="text-base">{getFileIcon(file.type)}</span>
                            <div className="min-w-0">
                              <p className="text-[8px] font-medium truncate">{file.name}</p>
                              <p className="text-[7px] text-gray-500">{formatFileSize(file.size)}</p>
                            </div>
                          </div>
                          <button 
                            onClick={() => removeFile(file.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex gap-1 pt-0.5">
                  <button 
                    onClick={() => {
                      setFileUploads([]);
                      setShowFileUploadModal(false);
                    }}
                    className="px-2 py-1 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-all text-[10px]"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={uploadFiles}
                    disabled={fileUploads.length === 0}
                    className={`flex-1 py-1 px-2 rounded transition-all text-[10px] ${fileUploads.length === 0 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'}`}
                  >
                    Upload Files
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Attendance Filter Modal */}
      {showAttendanceFilter && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">Filter Attendance</h3>
              <button 
                onClick={() => setShowAttendanceFilter(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Filter by Class</label>
                <select 
                  name="class"
                  value={attendanceFilter.class}
                  onChange={handleAttendanceFilterChange}
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs"
                >
                  <option value="">All Classes</option>
                  {getUniqueClassesForAttendance().map((className, index) => (
                    <option key={index} value={className}>{className}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Filter by Status</label>
                <select 
                  name="status"
                  value={attendanceFilter.status}
                  onChange={handleAttendanceFilterChange}
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs"
                >
                  <option value="all">All Statuses</option>
                  <option value="present">Present</option>
                  <option value="absent">Absent</option>
                  <option value="late">Late</option>
                </select>
              </div>
              
              <div className="flex gap-3 pt-4">
                <button 
                  onClick={resetAttendanceFilters}
                  className="flex-1 px-3 py-1.5 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-all text-xs"
                >
                  Reset Filters
                </button>
                <button 
                  onClick={applyAttendanceFilters}
                  className="flex-1 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded hover:from-blue-600 hover:to-indigo-700 transition-all shadow-sm hover:shadow text-xs"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherDashboard;