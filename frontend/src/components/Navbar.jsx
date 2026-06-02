import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Watch for scrolling to apply glassmorphism effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/', isHash: false },
    { name: 'About', path: '/about', isHash: false },
    { name: 'Academics', path: '/#academics', isHash: true },
    { name: 'Career Development', path: '/#careers', isHash: true },
    { name: 'Admissions', path: '/#admissions', isHash: true },
    { name: 'Contact', path: '/#contact', isHash: true },
  ];

  const handleNavClick = (link) => {
    if (link.isHash) {
      if (location.pathname !== '/') {
        // If not on Home page, navigate to Home first with the hash
        navigate(link.path);
      } else {
        // Scroll directly to element
        const targetId = link.path.split('#')[1];
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    } else {
      if (location.pathname !== link.path) {
        navigate(link.path);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/' && !location.hash;
    }
    return location.pathname + location.hash === path;
  };

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
            {/* Logo on Left */}
            <Link 
              to="/" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center space-x-3 group"
            >
              <img 
                src={logo} 
                alt="Vertex Logo" 
                className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold font-display text-primary-navy tracking-tight leading-none group-hover:text-secondary-blue transition-colors">
                  VERTEX
                </span>
                <span className="text-[10px] text-slate-500 font-semibold tracking-widest uppercase">
                  College of Engineering
                </span>
              </div>
            </Link>

            {/* Navigation links (Desktop) */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link)}
                  className={`text-sm font-medium font-sans cursor-pointer transition-colors relative py-1 ${
                    isActive(link.path)
                      ? 'text-secondary-blue'
                      : 'text-primary-navy/80 hover:text-secondary-blue'
                  }`}
                >
                  {link.name}
                  {/* Underline animation */}
                  <span 
                    className={`absolute bottom-0 left-0 w-full h-[2px] bg-secondary-blue rounded-full transition-transform duration-300 origin-left ${
                      isActive(link.path) ? 'scale-x-100' : 'scale-x-0 hover:scale-x-100'
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Portal Login (Desktop) */}
            <div className="hidden lg:block">
              <Link 
                to="/erp-login" 
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-secondary-blue to-primary-navy hover:from-blue-600 hover:to-indigo-800 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 hover:scale-105 cursor-pointer"
              >
                <GraduationCap className="h-5 w-5" />
                <span>ERP Portal</span>
              </Link>
            </div>

            {/* Hamburger Button (Mobile) */}
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

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-b border-slate-200 bg-white shadow-xl overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => {
                      handleNavClick(link);
                      setIsOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-3 rounded-xl text-base font-semibold font-sans transition-colors ${
                      isActive(link.path)
                        ? 'text-secondary-blue bg-blue-50'
                        : 'text-primary-navy/80 hover:text-secondary-blue hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
                <div className="pt-4 px-4">
                  <Link
                    to="/erp-login"
                    onClick={() => setIsOpen(false)}
                    className="flex justify-center items-center space-x-2 w-full px-5 py-3 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-secondary-blue to-primary-navy hover:from-blue-600 hover:to-indigo-800 transition-all duration-300 text-center shadow-md hover:shadow-lg active:scale-98 cursor-pointer"
                  >
                    <GraduationCap className="h-5 w-5" />
                    <span>ERP Portal</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
