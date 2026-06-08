import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, GraduationCap, ChevronDown, BookOpen, Home as HomeIcon, Library, Trophy, Users, Map } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const [campusLifeOpen, setCampusLifeOpen] = useState(false);
  const [mobileAcademicsOpen, setMobileAcademicsOpen] = useState(false);
  const [mobileCampusLifeOpen, setMobileCampusLifeOpen] = useState(false);
  const academicsRef = useRef(null);
  const campusLifeRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, role, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
      setAcademicsOpen(false);
      setCampusLifeOpen(false);
      setMobileAcademicsOpen(false);
      setMobileCampusLifeOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [location]);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (academicsRef.current && !academicsRef.current.contains(e.target)) {
        setAcademicsOpen(false);
      }
      if (campusLifeRef.current && !campusLifeRef.current.contains(e.target)) {
        setCampusLifeOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path;
  };

  const isAcademicsActive = () =>
    location.pathname === '/departments';

  const isCampusLifeActive = () =>
    ['/campus-tour', '/library', '/sports', '/clubs', '/hostel'].includes(location.pathname);

  const handleNavClick = (path) => {
    if (location.pathname !== path) {
      navigate(path);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setAcademicsOpen(false);
    setCampusLifeOpen(false);
  };

  const academicsSubLinks = [
    { name: 'Departments', path: '/departments', icon: BookOpen, desc: 'Explore our 10 engineering branches' },
  ];

  const campusLifeSubLinks = [
    { name: 'Campus Tour', path: '/campus-tour', icon: Map, desc: 'Virtual tour of our 150-acre campus' },
    { name: 'Hostel', path: '/hostel', icon: HomeIcon, desc: 'On-campus accommodation & facilities' },
    { name: 'Library', path: '/library', icon: Library, desc: '1 lakh+ books & 24×7 digital access' },
    { name: 'Sports', path: '/sports', icon: Trophy, desc: 'World-class sports & fitness facilities' },
    { name: 'Clubs & Activities', path: '/clubs', icon: Users, desc: '11 clubs across tech, culture & leadership' },
  ];

  // Shared dropdown render helper
  const DesktopDropdown = ({ subLinks, isOpen: ddOpen }) => (
    <AnimatePresence>
      {ddOpen && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.97 }}
          transition={{ duration: 0.18 }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-white border border-slate-200/60 rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="p-2">
            {subLinks.map((sub) => {
              const Icon = sub.icon;
              return (
                <button
                  key={sub.name}
                  onClick={() => handleNavClick(sub.path)}
                  className={`w-full flex items-start space-x-3 px-3 py-3 rounded-xl text-left transition-colors group ${
                    isActive(sub.path)
                      ? 'bg-blue-50 text-secondary-blue'
                      : 'hover:bg-slate-50 text-primary-navy'
                  }`}
                >
                  <div className={`p-1.5 rounded-lg ${isActive(sub.path) ? 'bg-blue-100 text-secondary-blue' : 'bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-secondary-blue'} transition-colors`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{sub.name}</p>
                    <p className="text-[11px] text-slate-400 leading-snug">{sub.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-effect shadow-md py-3 border-b border-slate-200/50'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">

            {/* Logo */}
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center space-x-3 group"
            >
              <div className="h-10 w-10 flex items-center justify-center bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden p-0.5">
                <img src={logo} alt="Vertex Logo" className="h-full w-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold font-display text-primary-navy tracking-tight leading-none group-hover:text-secondary-blue transition-colors">
                  VERTEX
                </span>
                <span className="text-[10px] text-slate-500 font-semibold tracking-widest uppercase">
                  College of Engineering
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-6">

              {/* Home */}
              <button
                onClick={() => handleNavClick('/')}
                className={`group text-sm font-medium font-sans cursor-pointer transition-colors relative py-1 ${
                  isActive('/') ? 'text-secondary-blue' : 'text-primary-navy/80 hover:text-secondary-blue'
                }`}
              >
                Home
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-secondary-blue rounded-full transition-transform duration-300 origin-left ${isActive('/') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </button>

              {/* About */}
              <button
                onClick={() => handleNavClick('/about')}
                className={`group text-sm font-medium font-sans cursor-pointer transition-colors relative py-1 ${
                  isActive('/about') ? 'text-secondary-blue' : 'text-primary-navy/80 hover:text-secondary-blue'
                }`}
              >
                About
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-secondary-blue rounded-full transition-transform duration-300 origin-left ${isActive('/about') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </button>

              {/* Academics Dropdown */}
              <div className="relative" ref={academicsRef}>
                <button
                  onClick={() => { setAcademicsOpen(!academicsOpen); setCampusLifeOpen(false); }}
                  className={`group text-sm font-medium font-sans cursor-pointer transition-colors relative py-1 flex items-center space-x-1 ${
                    isAcademicsActive() ? 'text-secondary-blue' : 'text-primary-navy/80 hover:text-secondary-blue'
                  }`}
                >
                  <span>Academics</span>
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${academicsOpen ? 'rotate-180' : ''}`} />
                  <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-secondary-blue rounded-full transition-transform duration-300 origin-left ${isAcademicsActive() ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                </button>
                <DesktopDropdown subLinks={academicsSubLinks} isOpen={academicsOpen} />
              </div>

              {/* Campus Life Dropdown */}
              <div className="relative" ref={campusLifeRef}>
                <button
                  onClick={() => { setCampusLifeOpen(!campusLifeOpen); setAcademicsOpen(false); }}
                  className={`group text-sm font-medium font-sans cursor-pointer transition-colors relative py-1 flex items-center space-x-1 ${
                    isCampusLifeActive() ? 'text-secondary-blue' : 'text-primary-navy/80 hover:text-secondary-blue'
                  }`}
                >
                  <span>Campus Life</span>
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${campusLifeOpen ? 'rotate-180' : ''}`} />
                  <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-secondary-blue rounded-full transition-transform duration-300 origin-left ${isCampusLifeActive() ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                </button>
                <DesktopDropdown subLinks={campusLifeSubLinks} isOpen={campusLifeOpen} />
              </div>

              {/* Career Development */}
              <button
                onClick={() => handleNavClick('/career-development')}
                className={`group text-sm font-medium font-sans cursor-pointer transition-colors relative py-1 ${
                  isActive('/career-development') ? 'text-secondary-blue' : 'text-primary-navy/80 hover:text-secondary-blue'
                }`}
              >
                Career
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-secondary-blue rounded-full transition-transform duration-300 origin-left ${isActive('/career-development') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </button>

              {/* Admissions */}
              <button
                onClick={() => navigate('/#admissions')}
                className="group text-sm font-medium font-sans cursor-pointer transition-colors relative py-1 text-primary-navy/80 hover:text-secondary-blue"
              >
                Admissions
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary-blue rounded-full transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100" />
              </button>

              {/* Contact */}
              <button
                onClick={() => navigate('/#contact')}
                className="group text-sm font-medium font-sans cursor-pointer transition-colors relative py-1 text-primary-navy/80 hover:text-secondary-blue"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary-blue rounded-full transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100" />
              </button>

            </div>

            {/* ERP Portal / User (Desktop) */}
            {user ? (
              <div className="hidden lg:flex items-center space-x-6">
                <Link to={`/${role}-dashboard`} className="flex flex-col items-end hover:opacity-85 transition-opacity">
                  <span className="text-sm font-bold text-primary-navy">{user.name}</span>
                  <span className="text-[10px] font-bold text-secondary-blue uppercase tracking-wider">{role}</span>
                </Link>
                <button
                  onClick={() => { logout(); navigate('/erp-login'); }}
                  className="px-5 py-2 rounded-full text-xs font-bold text-white bg-red-600 hover:bg-red-700 transition-colors shadow cursor-pointer"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="hidden lg:block">
                <Link
                  to="/erp-login"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-secondary-blue to-primary-navy hover:from-blue-600 hover:to-indigo-800 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105 cursor-pointer"
                >
                  <GraduationCap className="h-5 w-5" />
                  <span>ERP Portal</span>
                </Link>
              </div>
            )}

            {/* Hamburger (Mobile) */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-primary-navy hover:bg-slate-100 focus:outline-none transition-colors"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-b border-slate-200 bg-white shadow-xl overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">

                <button onClick={() => { navigate('/'); setIsOpen(false); }}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-base font-semibold font-sans transition-colors ${isActive('/') ? 'text-secondary-blue bg-blue-50' : 'text-primary-navy/80 hover:text-secondary-blue hover:bg-slate-50'}`}>
                  Home
                </button>

                <button onClick={() => { navigate('/about'); setIsOpen(false); }}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-base font-semibold font-sans transition-colors ${isActive('/about') ? 'text-secondary-blue bg-blue-50' : 'text-primary-navy/80 hover:text-secondary-blue hover:bg-slate-50'}`}>
                  About
                </button>

                {/* Academics accordion */}
                <div>
                  <button
                    onClick={() => setMobileAcademicsOpen(!mobileAcademicsOpen)}
                    className={`flex items-center justify-between w-full text-left px-4 py-3 rounded-xl text-base font-semibold font-sans transition-colors ${isAcademicsActive() ? 'text-secondary-blue bg-blue-50' : 'text-primary-navy/80 hover:text-secondary-blue hover:bg-slate-50'}`}
                  >
                    <span>Academics</span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileAcademicsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileAcademicsOpen && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden pl-4 space-y-1 mt-1">
                        {academicsSubLinks.map((sub) => {
                          const Icon = sub.icon;
                          return (
                            <button key={sub.name} onClick={() => { navigate(sub.path); setIsOpen(false); }}
                              className={`flex items-center space-x-3 w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${isActive(sub.path) ? 'text-secondary-blue bg-blue-50' : 'text-primary-navy/70 hover:text-secondary-blue hover:bg-slate-50'}`}>
                              <Icon className="h-4 w-4 shrink-0" /><span>{sub.name}</span>
                            </button>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Campus Life accordion */}
                <div>
                  <button
                    onClick={() => setMobileCampusLifeOpen(!mobileCampusLifeOpen)}
                    className={`flex items-center justify-between w-full text-left px-4 py-3 rounded-xl text-base font-semibold font-sans transition-colors ${isCampusLifeActive() ? 'text-secondary-blue bg-blue-50' : 'text-primary-navy/80 hover:text-secondary-blue hover:bg-slate-50'}`}
                  >
                    <span>Campus Life</span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileCampusLifeOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileCampusLifeOpen && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden pl-4 space-y-1 mt-1">
                        {campusLifeSubLinks.map((sub) => {
                          const Icon = sub.icon;
                          return (
                            <button key={sub.name} onClick={() => { navigate(sub.path); setIsOpen(false); }}
                              className={`flex items-center space-x-3 w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${isActive(sub.path) ? 'text-secondary-blue bg-blue-50' : 'text-primary-navy/70 hover:text-secondary-blue hover:bg-slate-50'}`}>
                              <Icon className="h-4 w-4 shrink-0" /><span>{sub.name}</span>
                            </button>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button onClick={() => { navigate('/career-development'); setIsOpen(false); }}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-base font-semibold font-sans transition-colors ${isActive('/career-development') ? 'text-secondary-blue bg-blue-50' : 'text-primary-navy/80 hover:text-secondary-blue hover:bg-slate-50'}`}>
                  Career Development
                </button>

                <button onClick={() => { navigate('/#admissions'); setIsOpen(false); }}
                  className="block w-full text-left px-4 py-3 rounded-xl text-base font-semibold font-sans transition-colors text-primary-navy/80 hover:text-secondary-blue hover:bg-slate-50">
                  Admissions
                </button>

                <button onClick={() => { navigate('/#contact'); setIsOpen(false); }}
                  className="block w-full text-left px-4 py-3 rounded-xl text-base font-semibold font-sans transition-colors text-primary-navy/80 hover:text-secondary-blue hover:bg-slate-50">
                  Contact
                </button>

                {user ? (
                  <div className="pt-4 px-4 border-t border-slate-100 mt-4 space-y-3 text-left">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-primary-navy">{user.name}</span>
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest mt-0.5">{role}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <Link to={`/${role}-dashboard`} onClick={() => setIsOpen(false)}
                        className="flex justify-center items-center px-4 py-2.5 rounded-xl text-xs font-bold text-primary-navy border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors text-center">
                        Dashboard
                      </Link>
                      <button onClick={() => { setIsOpen(false); logout(); navigate('/erp-login'); }}
                        className="flex justify-center items-center px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-red-600 hover:bg-red-700 transition-colors cursor-pointer text-center">
                        Logout
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="pt-4 px-4">
                    <Link to="/erp-login" onClick={() => setIsOpen(false)}
                      className="flex justify-center items-center space-x-2 w-full px-5 py-3 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-secondary-blue to-primary-navy hover:from-blue-600 hover:to-indigo-800 transition-all duration-300 text-center shadow-md hover:shadow-lg cursor-pointer">
                      <GraduationCap className="h-5 w-5" />
                      <span>ERP Portal</span>
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
