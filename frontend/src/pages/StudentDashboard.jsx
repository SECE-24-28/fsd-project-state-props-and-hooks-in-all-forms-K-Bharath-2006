import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Award, 
  Calendar, 
  Bell, 
  GraduationCap, 
  CheckCircle, 
  Info,
  TrendingUp,
  MessageSquare
} from 'lucide-react';

import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import DashboardCard from '../components/DashboardCard';
import Table from '../components/Table';

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [currentUser] = useState(() => {
    return JSON.parse(localStorage.getItem('currentUser')) || null;
  });
  
  // Real-time record fetched from students database
  const [studentRecord] = useState(() => {
    const userObj = JSON.parse(localStorage.getItem('currentUser'));
    if (!userObj) return null;
    const studentsDb = JSON.parse(localStorage.getItem('students') || '[]');
    return studentsDb.find(s => s.id === userObj.id || s.email.toLowerCase() === userObj.email.toLowerCase()) || userObj;
  });

  // Responsive Layout States
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Active Menu Tab
  const [activeTab, setActiveTab] = useState('Dashboard');

  // Load user session check
  useEffect(() => {
    if (!currentUser || currentUser.role !== 'student') {
      navigate('/erp-login');
    }
  }, [currentUser, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/erp-login');
  };

  const attendanceVal = Number(studentRecord?.attendance) || 0;
  const marksVal = Number(studentRecord?.marks) || 0;

  // Mock notifications
  const notifications = [
    {
      id: 1,
      title: 'Hall Ticket Notice',
      body: 'Odd Semester Hall Tickets will be released shortly. Ensure you have cleared dues and maintain minimum 75% attendance.',
      date: 'June 01, 2026',
      type: 'warning'
    },
    {
      id: 2,
      title: 'Tech Coliseum Hackathon 2026',
      body: 'Registrations are open for Vertex Tech Arena Hackathon. Submit team proposals before June 15.',
      date: 'May 30, 2026',
      type: 'info'
    },
    {
      id: 3,
      title: 'Fee Payment Deadline Extended',
      body: 'The terminal enrollment fee payment gateway remains active without late penalties until June 10.',
      date: 'May 28, 2026',
      type: 'success'
    }
  ];

  // Attendance Circular Progress Ring calculations
  const radius = 55;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (attendanceVal / 100) * circumference;

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
      
      {/* Collapsible Sidebar */}
      <Sidebar 
        role="student" 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={setIsSidebarCollapsed}
        isMobileOpen={isMobileSidebarOpen}
        setIsMobileOpen={setIsMobileSidebarOpen}
        onLogout={handleLogout}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        <Topbar 
          title={`My Portal — ${activeTab}`} 
          user={studentRecord || currentUser} 
          role="student"
          setIsMobileOpen={setIsMobileSidebarOpen}
          onLogout={handleLogout}
        />

        {/* Scrollable details */}
        <main className="flex-grow p-6 overflow-y-auto">
          
          {/* TAB 1: DASHBOARD OVERVIEW */}
          {activeTab === 'Dashboard' && (
            <div className="space-y-8 animate-fade-in text-left">
              {/* Welcoming Banner */}
              <div className="bg-gradient-to-r from-primary-navy to-secondary-blue text-white p-8 rounded-3xl shadow-lg relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />
                <div className="space-y-2 z-10">
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-300">Welcome Back Student</span>
                  <h2 className="text-2xl font-extrabold font-display leading-tight">{studentRecord?.name || 'Scholar'}</h2>
                  <p className="text-sm text-slate-200 leading-relaxed max-w-xl font-light">
                    Track your current academic progress, view scores submitted by advisors, download reports, and inspect institutional notifications.
                  </p>
                </div>
                <div className="p-4 bg-white/10 rounded-2xl border border-white/10 shrink-0 text-center z-10">
                  <span className="text-xs font-semibold text-blue-200 uppercase block tracking-wider">Year/Sem</span>
                  <span className="text-xl font-bold font-display mt-0.5 block">Year {studentRecord?.year || '3'} / Sem 5</span>
                </div>
              </div>

              {/* Statistics Overview Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <DashboardCard 
                  title="Marks Score Avg" 
                  value={`${marksVal}/100`} 
                  icon={Award} 
                  colorClass="bg-blue-50 text-secondary-blue" 
                  detail="Standard term evaluations"
                />
                <DashboardCard 
                  title="Lecture Attendance" 
                  value={`${attendanceVal}%`} 
                  icon={Calendar} 
                  colorClass="bg-emerald-50 text-emerald-600" 
                  detail={attendanceVal >= 75 ? 'Safe / Eligible' : 'Attendance Shortage'}
                />
                <div className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm flex items-center justify-between">
                  <div className="space-y-1.5">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Course Program</span>
                    <span className="text-base font-bold text-primary-navy font-display block leading-tight">{studentRecord?.department}</span>
                    <span className="text-[10px] text-slate-400 font-mono block">Roll: {studentRecord?.rollNumber}</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-indigo-50 text-indigo-600 shrink-0">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Faculty Remarks Card */}
                <div className="lg:col-span-7 bg-white border border-slate-200/60 p-6 rounded-3xl shadow-sm space-y-4">
                  <div className="flex items-center space-x-2 text-secondary-blue pb-2 border-b border-slate-100">
                    <MessageSquare className="h-5 w-5" />
                    <h3 className="text-base font-bold text-primary-navy font-display">Faculty Advisory Comments</h3>
                  </div>
                  {studentRecord?.remarks ? (
                    <div className="p-4.5 bg-blue-50/50 border border-blue-100/50 rounded-2xl relative">
                      <div className="text-sm text-slate-600 italic leading-relaxed">
                        "{studentRecord.remarks}"
                      </div>
                      <div className="mt-3 text-xs font-bold text-primary-navy">
                        — Academic Coordinator Advisory Panel
                      </div>
                    </div>
                  ) : (
                    <div className="p-8 text-center text-slate-400">
                      <p className="text-sm font-semibold">No comments submitted by faculty advisors yet.</p>
                    </div>
                  )}
                </div>

                {/* Quick Academic Indicators */}
                <div className="lg:col-span-5 bg-white border border-slate-200/60 p-6 rounded-3xl shadow-sm flex flex-col justify-between">
                  <div className="flex items-center space-x-2 text-secondary-blue pb-2 border-b border-slate-100 mb-4">
                    <TrendingUp className="h-5 w-5" />
                    <h3 className="text-base font-bold text-primary-navy font-display">Academic Status</h3>
                  </div>

                  <div className="space-y-4 flex-1 flex flex-col justify-center">
                    <div className="flex justify-between items-center text-sm font-semibold">
                      <span className="text-slate-500">Attendance Status:</span>
                      <span className={`font-bold ${attendanceVal >= 75 ? 'text-green-600' : 'text-red-600'}`}>
                        {attendanceVal >= 75 ? 'Eligible for Exams' : 'Shortage Alert'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm font-semibold">
                      <span className="text-slate-500">Grade Assessment:</span>
                      <span className="font-bold text-primary-navy">
                        {marksVal >= 90 ? 'Grade A+' : marksVal >= 80 ? 'Grade A' : marksVal >= 70 ? 'Grade B' : marksVal >= 50 ? 'Grade C' : 'Grade F'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm font-semibold">
                      <span className="text-slate-500">Academic Standing:</span>
                      <span className="text-emerald-600 font-bold flex items-center">
                        <CheckCircle className="h-4 w-4 mr-1 text-emerald-500" /> Active Scholar
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: MY MARKS */}
          {activeTab === 'My Marks' && (
            <div className="space-y-6 animate-fade-in text-left">
              <div className="bg-white border border-slate-200/60 p-6 rounded-3xl shadow-sm">
                <h3 className="text-lg font-bold text-primary-navy font-display mb-1">Marks Gradecard</h3>
                <p className="text-xs text-slate-400">View final evaluations published by subject instructors for the active term.</p>
              </div>

              <Table headers={['Subject Program', 'Evaluation Type', 'Max Marks', 'Marks Scored', 'Performance Indicator']}>
                <tr className="hover:bg-slate-50/60 transition-colors font-sans">
                  <td className="px-6 py-4 font-semibold text-primary-navy">Computer Science / Core Syllabus</td>
                  <td className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">End Semester Exam</td>
                  <td className="px-6 py-4 text-slate-600 font-semibold">100</td>
                  <td className="px-6 py-4 text-slate-800 font-bold text-base">{marksVal}/100</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3 max-w-[200px]">
                      <div className="flex-1 bg-slate-100 h-2 rounded-full">
                        <div 
                          className={`h-2 rounded-full ${marksVal >= 80 ? 'bg-green-500' : marksVal >= 50 ? 'bg-blue-500' : 'bg-red-500'}`}
                          style={{ width: `${marksVal}%` }}
                        />
                      </div>
                      <span className="text-xs font-bold text-primary-navy">{marksVal >= 80 ? 'Outstanding' : marksVal >= 50 ? 'Pass' : 'Failed'}</span>
                    </div>
                  </td>
                </tr>
              </Table>
            </div>
          )}

          {/* TAB 3: ATTENDANCE RATIOS */}
          {activeTab === 'Attendance' && (
            <div className="space-y-6 animate-fade-in text-left">
              <div className="bg-white border border-slate-200/60 p-6 rounded-3xl shadow-sm">
                <h3 className="text-lg font-bold text-primary-navy font-display mb-1">Attendance Percentage Dashboard</h3>
                <p className="text-xs text-slate-400">Monitor active classroom attendance metrics to satisfy academic thresholds.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Circular Progress Ring Card */}
                <div className="md:col-span-5 bg-white border border-slate-200/60 p-8 rounded-3xl shadow-sm flex flex-col items-center justify-center text-center space-y-5">
                  <h4 className="text-sm font-bold text-primary-navy uppercase tracking-wider font-display">Overall attendance</h4>
                  
                  {/* SVG Circular Meter */}
                  <div className="relative w-36 h-36">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                      {/* Gray Background circle */}
                      <circle
                        cx="60"
                        cy="60"
                        r={radius}
                        className="text-slate-100"
                        strokeWidth={strokeWidth}
                        stroke="currentColor"
                        fill="transparent"
                      />
                      {/* Active Color Progress circle */}
                      <motion.circle
                        cx="60"
                        cy="60"
                        r={radius}
                        className={`${attendanceVal >= 75 ? 'text-green-500' : attendanceVal >= 60 ? 'text-amber-500' : 'text-red-500'}`}
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        stroke="currentColor"
                        fill="transparent"
                        strokeLinecap="round"
                      />
                    </svg>
                    {/* Text Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <span className="text-3xl font-extrabold text-primary-navy font-display">{attendanceVal}%</span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Attendance</span>
                    </div>
                  </div>

                  <span className={`px-4 py-1.5 rounded-full border text-xs font-bold ${
                    attendanceVal >= 75 
                      ? 'bg-green-50 border-green-200 text-green-700' 
                      : attendanceVal >= 60 
                        ? 'bg-amber-50 border-amber-200 text-amber-700' 
                        : 'bg-red-50 border-red-200 text-red-700'
                  }`}>
                    {attendanceVal >= 75 ? 'Safe Standings' : attendanceVal >= 60 ? 'Warning: Low Ratio' : 'Shortage Restriction'}
                  </span>
                </div>

                {/* Details Breakdown */}
                <div className="md:col-span-7 space-y-4">
                  <div className="bg-white border border-slate-200/60 p-6 rounded-3xl shadow-sm space-y-4">
                    <h4 className="text-sm font-bold text-primary-navy font-display border-b border-slate-100 pb-2">Academic Audit Log</h4>
                    
                    <div className="space-y-3.5 text-sm">
                      <div className="flex justify-between font-semibold">
                        <span className="text-slate-500">Minimum Mandated Ratio:</span>
                        <span className="text-primary-navy font-bold">75%</span>
                      </div>
                      <div className="flex justify-between font-semibold">
                        <span className="text-slate-500">Your Current Ratio:</span>
                        <span className="text-primary-navy font-bold">{attendanceVal}%</span>
                      </div>
                      <div className="flex justify-between font-semibold">
                        <span className="text-slate-500">Status Check:</span>
                        <span className={`font-bold ${attendanceVal >= 75 ? 'text-green-600' : 'text-red-600'}`}>
                          {attendanceVal >= 75 ? 'Academic Eligibility Confirmed' : 'Action Required'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: PROFILE CARD */}
          {activeTab === 'Profile' && (
            <div className="max-w-2xl bg-white border border-slate-200/60 rounded-3xl p-8 shadow-sm text-left space-y-6 animate-fade-in font-sans">
              <div className="flex items-center space-x-4 border-b border-slate-100 pb-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-navy to-secondary-blue text-white flex items-center justify-center font-bold text-lg font-display">
                  {studentRecord?.name ? studentRecord.name.split(' ').map(w => w[0]).join('').substring(0,2).toUpperCase() : 'US'}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-navy font-display">{studentRecord?.name}</h3>
                  <p className="text-xs font-semibold text-secondary-blue uppercase tracking-wider mt-0.5">Student Scholar</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                <div className="space-y-1">
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Roll Number</span>
                  <p className="font-mono font-bold text-primary-navy text-sm bg-slate-50 px-3 py-2 rounded-xl border border-slate-100">{studentRecord?.rollNumber}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Official Email</span>
                  <p className="font-medium text-slate-700 bg-slate-50 px-3 py-2 rounded-xl border border-slate-100">{studentRecord?.email}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Department</span>
                  <p className="font-medium text-slate-700 bg-slate-50 px-3 py-2 rounded-xl border border-slate-100">{studentRecord?.department}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Current Year</span>
                  <p className="font-semibold text-slate-700 bg-slate-50 px-3 py-2 rounded-xl border border-slate-100">Year {studentRecord?.year}</p>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-6 space-y-4">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Office Coordinates</h4>
                <div className="p-4 bg-slate-50 border rounded-xl flex items-center space-x-3 text-xs text-slate-500">
                  <Info className="h-5 w-5 text-secondary-blue shrink-0" />
                  <p className="leading-relaxed">
                    If you observe discrepancies in your name, roll, or department details, please contact the academic registry coordinator for databases database modifications.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* NOTIFICATIONS BAR */}
          <div className="mt-12 bg-white border border-slate-200/60 rounded-3xl p-6 shadow-sm text-left">
            <div className="flex items-center space-x-2 text-secondary-blue border-b border-slate-100 pb-3 mb-5">
              <Bell className="h-5 w-5" />
              <h3 className="text-base font-bold text-primary-navy font-display">Administrative Bulletin Board</h3>
            </div>

            <div className="space-y-4">
              {notifications.map((notif) => (
                <div key={notif.id} className="p-4 bg-slate-50 border border-slate-200/50 rounded-2xl flex items-start space-x-3 hover:bg-slate-100/50 transition-colors">
                  <div className={`w-2.5 h-2.5 rounded-full shrink-0 mt-1.5 ${
                    notif.type === 'warning' ? 'bg-amber-500' : notif.type === 'success' ? 'bg-green-500' : 'bg-blue-500'
                  }`} />
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-primary-navy leading-none">{notif.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed pt-1">{notif.body}</p>
                    <span className="text-[9px] text-slate-400 block pt-1.5 font-semibold font-mono uppercase tracking-wider">{notif.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </main>
      </div>

    </div>
  );
};

export default StudentDashboard;
