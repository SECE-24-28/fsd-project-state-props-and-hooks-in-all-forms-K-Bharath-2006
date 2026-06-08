import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  Users, 
  UserCheck, 
  Award, 
  Calendar, 
  User, 
  Settings, 
  ChevronLeft, 
  ChevronRight, 
  LogOut 
} from 'lucide-react';
import logo from '../assets/logo.png';

const iconMap = {
  'Dashboard': LayoutDashboard,
  'Students': Users,
  'Staffs': UserCheck,
  'Marks': Award,
  'My Marks': Award,
  'Attendance': Calendar,
  'Profile': User,
  'Settings': Settings
};

const Sidebar = ({ role, activeTab, setActiveTab, isCollapsed, setIsCollapsed, isMobileOpen, setIsMobileOpen, onLogout }) => {
  const getMenuItems = () => {
    switch (role) {
      case 'admin':
        return ['Dashboard', 'Students', 'Staffs', 'Attendance', 'Settings'];
      case 'staff':
        return ['Dashboard', 'Students', 'Marks', 'Attendance'];
      case 'student':
        return ['Dashboard', 'My Marks', 'Attendance', 'Profile'];
      default:
        return [];
    }
  };

  const menuItems = getMenuItems();

  const sidebarVariants = {
    expanded: { width: '260px' },
    collapsed: { width: '80px' }
  };

  const navContent = (
    <div className="flex flex-col h-full bg-primary-navy text-white relative">
      {/* Collapse Toggle Button (Desktop Only) */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="hidden md:flex absolute top-6 -right-3 bg-secondary-blue text-white rounded-full p-1 shadow-md border border-blue-400/20 hover:scale-105 active:scale-95 transition-transform z-50 cursor-pointer"
      >
        {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
      </button>

      {/* Header Logo */}
      <div className={`p-5 flex items-center ${isCollapsed ? 'justify-center' : 'space-x-3'} border-b border-slate-700/50`}>
        <div className="h-9 w-9 flex items-center justify-center bg-white rounded-xl shadow border border-slate-200/20 overflow-hidden p-0.5 shrink-0">
          <img src={logo} alt="Vertex Logo" className="h-full w-full object-contain" />
        </div>
        {!isCollapsed && (
          <div className="flex flex-col text-left">
            <span className="text-sm font-bold font-display tracking-wider">VERTEX ERP</span>
            <span className="text-[9px] text-slate-400 font-semibold tracking-widest uppercase">{role} Portal</span>
          </div>
        )}
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
        {menuItems.map((item) => {
          const IconComponent = iconMap[item] || LayoutDashboard;
          const isActive = activeTab === item;
          return (
            <button
              key={item}
              onClick={() => {
                setActiveTab(item);
                if (setIsMobileOpen) setIsMobileOpen(false);
              }}
              className={`w-full flex items-center py-3 rounded-xl transition-all duration-200 cursor-pointer text-left ${
                isCollapsed ? 'justify-center px-0' : 'px-4 space-x-3'
              } ${
                isActive 
                  ? 'bg-secondary-blue text-white shadow-md' 
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <IconComponent className="h-5 w-5 shrink-0" />
              {!isCollapsed && <span className="text-sm font-semibold font-sans">{item}</span>}
            </button>
          );
        })}
      </nav>

      {/* Footer / Logout */}
      <div className="p-4 border-t border-slate-700/50">
        <button
          onClick={onLogout}
          className={`w-full flex items-center py-3 rounded-xl text-red-400 hover:bg-red-950/20 hover:text-red-300 transition-all duration-200 cursor-pointer text-left ${
            isCollapsed ? 'justify-center px-0' : 'px-4 space-x-3'
          }`}
        >
          <LogOut className="h-5 w-5 shrink-0" />
          {!isCollapsed && <span className="text-sm font-semibold font-sans">Logout</span>}
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Drawer Backdrop */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Mobile Sidebar Panel */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed inset-y-0 left-0 w-[260px] bg-primary-navy z-50 md:hidden shadow-2xl"
          >
            {navContent}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar Panel */}
      <motion.div
        animate={isCollapsed ? 'collapsed' : 'expanded'}
        variants={sidebarVariants}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="hidden md:block h-screen bg-primary-navy shrink-0 border-r border-slate-700/50 z-30"
      >
        {navContent}
      </motion.div>
    </>
  );
};

export default Sidebar;
