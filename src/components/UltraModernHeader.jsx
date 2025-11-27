import React, { useState, useEffect, useRef, useReducer } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, Calendar, User, Bell, ChevronDown, Menu, X, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const UltraModernHeader = ({ 
  dashboardTitle, 
  userType, 
  userName, 
  userRole, 
  onLogout,
  onMenuToggle,
  isMenuOpen,
  showMenuButton = false
}) => {
  const { t, i18n } = useTranslation();
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('Class 10-A');
  const [particles, setParticles] = useState([]);
  const headerRef = useRef(null);
  const [currentDate] = useState(new Date().toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  }));

  // Force re-render when language changes
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  
  // Add effect to handle language changes
  useEffect(() => {
    const handleLanguageChange = () => {
      // Force re-render when language changes
      forceUpdate();
    };
    
    i18n.on('languageChanged', handleLanguageChange);
    
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  // Initialize particles
  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < 15; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        speed: Math.random() * 0.5 + 0.1
      });
    }
    setParticles(newParticles);
  }, []);

  // Sample classes for dropdown
  const classes = ['Class 10-A', 'Class 11-B', 'Class 12-C', 'All Classes'];

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };

  const handleSearchBlur = () => {
    setIsSearchFocused(false);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const getAvatarColor = (name) => {
    const colors = [
      'from-blue-500 to-indigo-600',
      'from-purple-500 to-pink-600',
      'from-amber-500 to-orange-600',
      'from-emerald-500 to-teal-600',
      'from-rose-500 to-red-600',
      'from-cyan-500 to-blue-600'
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  const getAvatarInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  // Animate particles
  useEffect(() => {
    if (particles.length === 0) return;
    
    const interval = setInterval(() => {
      setParticles(prev => 
        prev.map(particle => ({
          ...particle,
          y: particle.y <= -10 ? 110 : particle.y - particle.speed,
          x: particle.x + Math.sin(particle.y * 0.05) * 0.3
        }))
      );
    }, 50);
    
    return () => clearInterval(interval);
  }, [particles]);

  return (
    <div className="relative" ref={headerRef}>
      {/* Glassmorphism Header with enhanced effects */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/80 backdrop-blur-lg border-b border-white/20 shadow-lg shadow-blue-500/5 rounded-b-xl relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)'
        }}
      >
        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-10"
          animate={{
            background: [
              'radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 20%)',
              'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 20%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.3) 0%, transparent 20%)',
              'radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 20%)'
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
        
        {/* Floating particles */}
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-blue-400"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: particle.id * 0.1
            }}
          />
        ))}
        <div className="px-6 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Left side - Dashboard title and search */}
            <div className="flex items-center gap-4 flex-1">
              {/* Menu button for mobile */}
              {showMenuButton && (
                <button 
                  onClick={onMenuToggle}
                  className="md:hidden p-2 rounded-xl bg-white/50 backdrop-blur-sm border border-white/30 text-gray-700 hover:bg-white/70 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              )}
              
              {/* Dashboard title with enhanced gradient animation */}
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent hidden md:block relative"
              >
                {dashboardTitle}
                {/* Animated underline */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ 
                    duration: 1,
                    delay: 0.5,
                    ease: "easeOut"
                  }}
                />
              </motion.h1>
              
              {/* Floating search bar with enhanced effects */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="relative flex-1 max-w-md"
              >
                <div className={`relative transition-all duration-300 ${
                  isSearchFocused 
                    ? 'scale-[1.02] shadow-lg shadow-blue-500/20' 
                    : 'hover:scale-[1.01] hover:shadow-md'
                }`}>
                  {/* Animated background gradient */}
                  <motion.div 
                    className="absolute inset-0 rounded-2xl opacity-70"
                    animate={{
                      background: [
                        'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(79, 70, 229, 0.2) 100%)',
                        'linear-gradient(135deg, rgba(79, 70, 229, 0.2) 0%, rgba(124, 58, 237, 0.2) 100%)',
                        'linear-gradient(135deg, rgba(124, 58, 237, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)',
                        'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(79, 70, 229, 0.2) 100%)'
                      ]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl blur-sm"></div>
                  <div className="relative flex items-center">
                    <div className="absolute left-3 z-10">
                      <motion.div
                        animate={isSearchFocused ? { 
                          scale: 1.1,
                          rotate: 360,
                          filter: "drop-shadow(0 0 4px rgba(59, 130, 246, 0.5))"
                        } : { 
                          scale: 1,
                          rotate: 0,
                          filter: "none"
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <Search className="w-5 h-5 text-blue-500" />
                      </motion.div>
                    </div>
                    <input
                      type="text"
                      placeholder={t('header.search_placeholder', { dashboardTitle: dashboardTitle.toLowerCase() })}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      onFocus={handleSearchFocus}
                      onBlur={handleSearchBlur}
                      className="w-full pl-10 pr-3 py-2 bg-white/80 backdrop-blur-sm border border-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-300/50 transition-all duration-300 shadow-sm placeholder:text-gray-400 text-gray-800 text-sm font-medium"
                    />
                    {/* Shimmer effect when focused */}
                    {isSearchFocused && (
                      <motion.div
                        className="absolute inset-0 rounded-2xl pointer-events-none"
                        initial={{ backgroundPosition: '-100% 0' }}
                        animate={{ backgroundPosition: '200% 0' }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        style={{
                          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
                        }}
                      />
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Right side - Date, class dropdown, notifications, profile */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4"
            >
              {/* Date display with enhanced animation */}
              <motion.div 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="hidden md:flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-xl px-3 py-2 border border-white/40 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    filter: ["none", "drop-shadow(0 0 4px rgba(99, 102, 241, 0.5))", "none"]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <Calendar className="w-5 h-5 text-indigo-500" />
                </motion.div>
                <span className="text-xs font-semibold text-gray-700">{currentDate}</span>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                />
              </motion.div>
              
              {/* Class dropdown */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative"
              >
                <motion.select
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                  whileFocus={{ scale: 1.02 }}
                  className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-xl px-3 py-2 text-xs font-semibold text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 shadow-sm hover:shadow-md transition-all duration-300 appearance-none cursor-pointer"
                >
                  {classes.map((classItem) => (
                    <motion.option 
                      key={classItem} 
                      value={classItem}
                      whileHover={{ backgroundColor: "rgba(99, 102, 241, 0.1)" }}
                    >
                      {classItem}
                    </motion.option>
                  ))}
                </motion.select>
                <motion.div
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                >
                  <ChevronDown className="w-4 h-4 text-purple-500" />
                </motion.div>
              </motion.div>
              
              {/* Quick Help */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-1.5 rounded-xl bg-white/60 backdrop-blur-sm border border-white/40 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group"
              >
                <HelpCircle className="w-4 h-4 text-gray-600 group-hover:text-blue-500 transition-colors duration-300" />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs rounded-full flex items-center justify-center font-bold"
                >
                  ?
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute right-0 top-full mt-2 w-48 bg-white/90 backdrop-blur-xl rounded-xl shadow-lg border border-white/30 p-3 z-50 hidden group-hover:block"
                >
                  <div className="text-xs text-gray-600">Quick Help</div>
                  <div className="text-xs text-gray-500 mt-1">Need assistance? Click here for help documentation.</div>
                </motion.div>
              </motion.div>
              
              {/* Notifications */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-1.5 rounded-xl bg-white/60 backdrop-blur-sm border border-white/40 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <Bell className="w-4 h-4 text-gray-600" />
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs rounded-full flex items-center justify-center font-bold"
                >
                  3
                </motion.span>
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                  animate={{ scale: isSearchFocused ? 1.2 : 1 }}
                />
              </motion.div>
              
              {/* Profile avatar with dropdown */}
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleProfileMenu}
                  className="flex items-center gap-3 focus:outline-none relative"
                >
                  {/* Pulsing ring animation */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 opacity-0"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0, 0.3, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity
                    }}
                  />
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${getAvatarColor(userName)} flex items-center justify-center text-white font-bold text-base shadow-md border border-white/30 transition-all duration-300 hover:shadow-lg relative z-10`}>
                    {getAvatarInitials(userName)}
                  </div>
                  {/* Online status indicator */}
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white z-10"></div>
                </motion.button>
                
                {/* Profile dropdown menu with enhanced effects */}
                <AnimatePresence>
                  {isProfileMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 25 
                      }}
                      className="absolute right-0 mt-2 w-64 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 z-50 overflow-hidden"
                    >
                      {/* Glowing border effect */}
                      <div className="absolute inset-0 rounded-2xl pointer-events-none border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.3)]"></div>
                      
                      <div className="p-5 border-b border-white/30 relative">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getAvatarColor(userName)} flex items-center justify-center text-white font-bold text-lg relative`}>
                            {getAvatarInitials(userName)}
                            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border border-white"></div>
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 text-sm">{userName}</p>
                            <p className="text-xs text-gray-600">{userRole}</p>
                            <p className="text-xs text-gray-500 mt-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full px-2 py-0.5 inline-block">
                              {userType}
                            </p>
                          </div>
                        </div>
                        
                        {/* Decorative element */}
                        <motion.div
                          className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity
                          }}
                        />
                      </div>
                      
                      <div className="py-2">
                        <motion.button 
                          whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full px-4 py-2 text-left text-gray-700 transition-colors duration-200 flex items-center gap-2 text-sm"
                        >
                          <span>Profile Settings</span>
                        </motion.button>
                        
                        <motion.button 
                          whileHover={{ backgroundColor: "rgba(239, 68, 68, 0.1)" }}
                          whileTap={{ scale: 0.98 }}
                          onClick={onLogout}
                          className="w-full px-4 py-2 text-left text-gray-700 transition-colors duration-200 flex items-center gap-2 text-sm"
                        >
                          <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                          </svg>
                          <span>Logout</span>
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      {/* Enhanced floating animation for the header */}
      <motion.div
        animate={{ 
          y: [0, -3, 0],
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-blue-300/30 to-transparent"
      />
      <motion.div
        animate={{ 
          y: [0, -1, 0],
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-indigo-300/40 to-transparent"
      />
    </div>
  );
};

export default UltraModernHeader;