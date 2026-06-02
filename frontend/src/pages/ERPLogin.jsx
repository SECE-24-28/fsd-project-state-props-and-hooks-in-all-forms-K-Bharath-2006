import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowLeft, 
  Loader2, 
  CheckCircle,
  GraduationCap,
  ShieldCheck,
  Calendar,
  BookOpen
} from 'lucide-react';
import logo from '../assets/logo.png';

const ERPLogin = () => {
  const navigate = useNavigate();

  // Navigation between 'login' and 'forgot'
  const [view, setView] = useState('login'); // 'login' | 'forgot' | 'reset-success'

  // Form Fields
  const [role, setRole] = useState('student'); // 'admin' | 'staff' | 'student'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Forgot Password Fields
  const [forgotEmail, setForgotEmail] = useState('');

  // Validation Errors
  const [errors, setErrors] = useState({});

  // Loading States
  const [isLoading, setIsLoading] = useState(false);
  const [isResetLoading, setIsResetLoading] = useState(false);

  // Seed default databases in localStorage
  useEffect(() => {
    // Seed default admin accounts
    if (!localStorage.getItem('admin')) {
      localStorage.setItem('admin', JSON.stringify([
        { email: 'admin@vertex.edu', password: 'admin123', name: 'Admin Director' }
      ]));
    }
    // Seed default staffs
    if (!localStorage.getItem('staffs')) {
      localStorage.setItem('staffs', JSON.stringify([
        { id: 'staff-1', email: 'staff@vertex.edu', password: 'staff123', name: 'Dr. Evelyn Sterling', department: 'Computer Science & Engineering', subject: 'Computer Science' }
      ]));
    }
    // Seed default students
    if (!localStorage.getItem('students')) {
      localStorage.setItem('students', JSON.stringify([
        { id: 'stud-1', email: 'student@vertex.edu', password: 'student123', name: 'K. Bharath', rollNumber: 'V1202601', department: 'Computer Science & Engineering', year: '3', attendance: 82, marks: 94, remarks: 'Excellent programming skills and regular participation in tech bootcamps.' }
      ]));
    }
    // Seed subjects
    if (!localStorage.getItem('subjects')) {
      localStorage.setItem('subjects', JSON.stringify(['Computer Science', 'Electronics', 'Robotics', 'Data Science']));
    }
    // Seed marks & attendance mapping
    if (!localStorage.getItem('marks')) {
      localStorage.setItem('marks', JSON.stringify({ 'stud-1': 94 }));
    }
    if (!localStorage.getItem('attendance')) {
      localStorage.setItem('attendance', JSON.stringify({ 'stud-1': 82 }));
    }
  }, []);

  // Redirect if user is already logged in
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      if (currentUser.role === 'admin') navigate('/admin-dashboard');
      else if (currentUser.role === 'staff') navigate('/staff-dashboard');
      else if (currentUser.role === 'student') navigate('/student-dashboard');
    }
  }, [navigate]);

  // Form Validation Handlers
  const validateLoginForm = () => {
    const newErrors = {};
    
    // Email validation
    if (!email.trim()) {
      newErrors.email = 'Email Address is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    // Password validation
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateForgotForm = () => {
    const newErrors = {};

    if (!forgotEmail.trim()) {
      newErrors.forgotEmail = 'Email Address is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(forgotEmail)) {
        newErrors.forgotEmail = 'Please enter a valid email address';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit Handlers
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!validateLoginForm()) return;

    setIsLoading(true);
    setErrors({});

    // Simulate Server Authentication with localStorage queries
    setTimeout(() => {
      let matchedUser = null;

      if (role === 'admin') {
        const admins = JSON.parse(localStorage.getItem('admin') || '[]');
        matchedUser = admins.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
      } else if (role === 'staff') {
        const staffs = JSON.parse(localStorage.getItem('staffs') || '[]');
        matchedUser = staffs.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
      } else if (role === 'student') {
        const students = JSON.parse(localStorage.getItem('students') || '[]');
        matchedUser = students.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
      }

      setIsLoading(false);

      if (matchedUser) {
        // Save session
        const sessionUser = {
          id: matchedUser.id || 'admin-id',
          name: matchedUser.name,
          email: matchedUser.email,
          role: role,
          department: matchedUser.department || '',
          rollNumber: matchedUser.rollNumber || '',
          year: matchedUser.year || '',
          subject: matchedUser.subject || ''
        };
        localStorage.setItem('currentUser', JSON.stringify(sessionUser));
        
        // Redirect
        if (role === 'admin') navigate('/admin-dashboard');
        else if (role === 'staff') navigate('/staff-dashboard');
        else if (role === 'student') navigate('/student-dashboard');
      } else {
        setErrors({ login: 'Invalid email, password or role selection. Please check your credentials.' });
      }
    }, 1200);
  };

  const handleForgotSubmit = (e) => {
    e.preventDefault();
    if (!validateForgotForm()) return;

    setIsResetLoading(true);
    setErrors({});

    // Simulate Server Send
    setTimeout(() => {
      setIsResetLoading(false);
      setView('reset-success');
    }, 1200);
  };

  // Abstract Background Circles Motion Settings
  const floatingCircleVariants = {
    animate1: {
      y: [0, 40, 0],
      x: [0, 20, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    animate2: {
      y: [0, -50, 0],
      x: [0, -30, 0],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }
    },
    animate3: {
      y: [0, 30, 0],
      x: [0, -20, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 9,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-stretch font-sans">
      
      {/* LEFT SIDE: Brand & Aesthetic Display (Desktop Only) */}
      <div className="relative hidden lg:flex lg:w-1/2 bg-primary-navy overflow-hidden flex-col justify-between p-16 select-none text-left">
        
        {/* Floating gradient blur circles */}
        <motion.div 
          variants={floatingCircleVariants}
          animate="animate1"
          className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"
        />
        <motion.div 
          variants={floatingCircleVariants}
          animate="animate2"
          className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-indigo-500/15 blur-3xl"
        />
        <motion.div 
          variants={floatingCircleVariants}
          animate="animate3"
          className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-secondary-blue/10 blur-3xl"
        />

        {/* Abstract vector shape lines overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e40af_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

        {/* Top Section: Logo */}
        <div className="relative z-10">
          <div className="flex items-center space-x-3 group">
            <img 
              src={logo} 
              alt="Vertex Logo" 
              className="h-12 w-auto object-contain brightness-0 invert"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-display text-white tracking-tight leading-none">
                VERTEX
              </span>
              <span className="text-[10px] text-slate-400 font-semibold tracking-widest uppercase mt-1">
                College of Engineering
              </span>
            </div>
          </div>
        </div>

        {/* Middle Section: Marketing / Welcoming message */}
        <div className="relative z-10 my-auto max-w-lg space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/20">
              Vertex Administrative Suite
            </span>
            <h1 className="text-4xl xl:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
              Welcome Back to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-white">
                Vertex ERP Portal
              </span>
            </h1>
            <p className="text-base text-slate-300 leading-relaxed font-light">
              Access academic records, attendance, schedules, and campus services securely. Manage student profiles, view courses, and stay connected with our integrated management hub.
            </p>
          </motion.div>

          {/* Micro features on left side */}
          <div className="grid grid-cols-2 gap-4 pt-6 text-xs text-slate-300">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="h-5 w-5 text-blue-400 shrink-0" />
              <span>Secure Authentication</span>
            </div>
            <div className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5 text-blue-400 shrink-0" />
              <span>Academic Records</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-blue-400 shrink-0" />
              <span>Live Attendance & Schedules</span>
            </div>
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-5 w-5 text-blue-400 shrink-0" />
              <span>Integrated Campus Portal</span>
            </div>
          </div>
        </div>

        {/* Bottom Section: Footer Credits */}
        <div className="relative z-10 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Vertex College of Engineering. Information Systems & Security.</p>
        </div>

      </div>

      {/* RIGHT SIDE: Authentication Card Layout */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 py-12 sm:px-16 lg:w-1/2 bg-slate-50 relative overflow-hidden">
        
        {/* Back to Homepage Link for Desktop */}
        <Link 
          to="/" 
          className="absolute top-6 right-8 text-xs font-bold text-slate-400 hover:text-secondary-blue transition-colors flex items-center space-x-1.5 cursor-pointer hidden sm:flex"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to Homepage</span>
        </Link>

        {/* Mobile-only background blur shapes */}
        <div className="absolute top-10 left-10 w-48 h-48 rounded-full bg-blue-100 blur-3xl lg:hidden opacity-60" />
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-indigo-100 blur-3xl lg:hidden opacity-60" />

        {/* Mobile Header Logo */}
        <div className="lg:hidden mb-6 flex flex-col items-center">
          <img src={logo} alt="Vertex Logo" className="h-12 w-auto mb-2" />
          <h2 className="text-xl font-bold text-primary-navy font-display">VERTEX ERP</h2>
          <span className="text-[9px] text-slate-400 uppercase tracking-widest font-semibold">College of Engineering</span>
        </div>

        {/* Main Interface Wrapper */}
        <div className="w-full max-w-md relative z-10">
          <AnimatePresence mode="wait">
            
            {/* VIEW 1: LOGIN FORM */}
            {view === 'login' && (
              <motion.div
                key="login-form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white/80 backdrop-blur-md border border-slate-200/50 p-8 sm:p-10 rounded-3xl shadow-xl space-y-6 text-left"
              >
                <div className="space-y-2">
                  <h2 className="text-2xl font-extrabold text-primary-navy font-display">
                    Sign In
                  </h2>
                  <p className="text-xs text-slate-500">
                    Use your official college credentials to access the ERP panel.
                  </p>
                </div>

                {errors.login && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-100 text-xs text-red-600 font-semibold leading-normal">
                    {errors.login}
                  </div>
                )}

                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  {/* Role Dropdown */}
                  <div className="space-y-1.5">
                    <label htmlFor="role" className="text-xs font-bold text-slate-700 tracking-wide uppercase">
                      Select Portal Role
                    </label>
                    <select
                      id="role"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="block w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-sans bg-white focus:outline-none focus:border-secondary-blue focus:ring-4 focus:ring-blue-100/60 transition-all duration-300"
                    >
                      <option value="student">Student Dashboard</option>
                      <option value="staff">Faculty / Staff Dashboard</option>
                      <option value="admin">Administrator Dashboard</option>
                    </select>
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-bold text-slate-700 tracking-wide uppercase">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <Mail className="h-5 w-5" />
                      </div>
                      <input
                        id="email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="student@vertex.edu, staff@vertex.edu"
                        className={`block w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-sans bg-white focus:outline-none transition-all duration-300 ${
                          errors.email 
                            ? 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100' 
                            : 'border-slate-200 focus:border-secondary-blue focus:ring-4 focus:ring-blue-100/60'
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-xs text-red-500 font-semibold mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Password Input */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <label htmlFor="password" className="text-xs font-bold text-slate-700 tracking-wide uppercase">
                        Password
                      </label>
                      <button
                        type="button"
                        onClick={() => {
                          setView('forgot');
                          setErrors({});
                        }}
                        className="text-xs font-bold text-secondary-blue hover:text-blue-700 transition-colors bg-transparent border-none cursor-pointer"
                      >
                        Forgot Password?
                      </button>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <Lock className="h-5 w-5" />
                      </div>
                      <input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className={`block w-full pl-11 pr-10 py-3 rounded-xl border text-sm font-sans bg-white focus:outline-none transition-all duration-300 ${
                          errors.password 
                            ? 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100' 
                            : 'border-slate-200 focus:border-secondary-blue focus:ring-4 focus:ring-blue-100/60'
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 transition-colors bg-transparent border-none cursor-pointer"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="text-xs text-red-500 font-semibold mt-1">{errors.password}</p>
                    )}
                  </div>

                  {/* Remember Me Box */}
                  <div className="flex items-center space-x-2 pt-1">
                    <input
                      id="remember-me"
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="h-5 w-5 rounded border-slate-300 text-secondary-blue focus:ring-secondary-blue accent-secondary-blue cursor-pointer"
                    />
                    <label htmlFor="remember-me" className="text-xs font-semibold text-slate-600 cursor-pointer select-none">
                      Remember this device
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full flex justify-center items-center space-x-2 px-5 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-secondary-blue to-primary-navy hover:from-blue-600 hover:to-indigo-900 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-95 disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          <span>Verifying Credentials...</span>
                        </>
                      ) : (
                        <span>Sign In to ERP</span>
                      )}
                    </button>
                  </div>
                </form>

                {/* Back Link on Mobile Only */}
                <div className="flex justify-center pt-2 sm:hidden">
                  <Link to="/" className="text-xs font-bold text-slate-500 hover:text-secondary-blue transition-colors flex items-center space-x-1">
                    <ArrowLeft className="h-3.5 w-3.5" />
                    <span>Back to Homepage</span>
                  </Link>
                </div>

                {/* Secure notice info */}
                <div className="pt-4 border-t border-slate-100 flex items-center space-x-2 text-[10px] text-slate-400">
                  <ShieldCheck className="h-5 w-5 text-slate-400 shrink-0" />
                  <span>Encrypted SSL session governed by Vertex administrative firewall protocols.</span>
                </div>

              </motion.div>
            )}

            {/* VIEW 2: FORGOT PASSWORD FORM */}
            {view === 'forgot' && (
              <motion.div
                key="forgot-form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white/80 backdrop-blur-md border border-slate-200/50 p-8 sm:p-10 rounded-3xl shadow-xl space-y-6 text-left"
              >
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      setView('login');
                      setErrors({});
                    }}
                    className="flex items-center space-x-1.5 text-xs font-bold text-slate-500 hover:text-secondary-blue transition-colors bg-transparent border-none cursor-pointer mb-2"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    <span>Back to Sign In</span>
                  </button>
                  <h2 className="text-2xl font-extrabold text-primary-navy font-display">
                    Reset Password
                  </h2>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Provide the official institutional email address connected to your profile. We will forward a secure credentials recovery link.
                  </p>
                </div>

                <form onSubmit={handleForgotSubmit} className="space-y-4">
                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="forgot-email" className="text-xs font-bold text-slate-700 tracking-wide uppercase">
                      Official Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <Mail className="h-5 w-5" />
                      </div>
                      <input
                        id="forgot-email"
                        type="text"
                        value={forgotEmail}
                        onChange={(e) => setForgotEmail(e.target.value)}
                        placeholder="student@vertex.edu or staff@vertex.edu"
                        className={`block w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-sans bg-white focus:outline-none transition-all duration-300 ${
                          errors.forgotEmail 
                            ? 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100' 
                            : 'border-slate-200 focus:border-secondary-blue focus:ring-4 focus:ring-blue-100/60'
                        }`}
                      />
                    </div>
                    {errors.forgotEmail && (
                      <p className="text-xs text-red-500 font-semibold mt-1">{errors.forgotEmail}</p>
                    )}
                  </div>

                  {/* Send Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isResetLoading}
                      className="w-full flex justify-center items-center space-x-2 px-5 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-secondary-blue to-primary-navy hover:from-blue-600 hover:to-indigo-900 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-95 disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isResetLoading ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          <span>Generating Safe Token...</span>
                        </>
                      ) : (
                        <span>Send Reset Link</span>
                      )}
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* VIEW 3: RESET LINK SUCCESS */}
            {view === 'reset-success' && (
              <motion.div
                key="reset-success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white/80 backdrop-blur-md border border-slate-200/50 p-8 sm:p-10 rounded-3xl shadow-xl text-center space-y-6"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="p-3.5 bg-emerald-50 text-emerald-500 rounded-full">
                    <CheckCircle className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-extrabold text-primary-navy font-display">
                    Secure Token Transmitted
                  </h3>
                  <p className="text-xs text-emerald-800 bg-emerald-50 border border-emerald-100 p-3 rounded-xl font-semibold leading-relaxed max-w-sm">
                    Password reset link has been sent to your email.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl text-left space-y-1.5 text-xs text-slate-500 leading-normal">
                  <span className="font-bold text-primary-navy block">Security Recommendation:</span>
                  The transmitted token will expire in exactly **15 minutes**. Secure credentials reset can only be initiated once per hourly request.
                </div>

                <button
                  onClick={() => {
                    setView('login');
                    setForgotEmail('');
                  }}
                  className="w-full py-3.5 rounded-xl text-sm font-bold text-white bg-primary-navy hover:bg-secondary-blue transition-colors cursor-pointer shadow-sm"
                >
                  Return to Sign In
                </button>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>

    </div>
  );
};

export default ERPLogin;
