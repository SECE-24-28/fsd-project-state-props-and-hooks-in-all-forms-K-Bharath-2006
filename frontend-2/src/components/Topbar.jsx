import { Menu, LogOut } from 'lucide-react';

const Topbar = ({ title, user, role, setIsMobileOpen, onLogout }) => {
  return (
    <header className="bg-white border-b border-slate-200/60 h-20 px-6 flex items-center justify-between sticky top-0 z-20 font-sans">
      {/* Mobile Menu Button & Title */}
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setIsMobileOpen(true)}
          className="p-2 rounded-lg text-slate-600 hover:bg-slate-50 md:hidden focus:outline-none transition-colors cursor-pointer"
        >
          <Menu className="h-6 w-6" />
        </button>
        <div className="text-left">
          <h2 className="text-xl font-bold text-primary-navy font-display tracking-tight">
            {title}
          </h2>
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider md:hidden block mt-0.5">
            {role} Portal
          </span>
        </div>
      </div>

      {/* Right User Bar */}
      <div className="flex items-center space-x-4">
        {/* User Info */}
        <div className="flex items-center space-x-3 text-right">
          <div className="hidden sm:flex flex-col text-right">
            <span className="text-sm font-semibold text-primary-navy leading-none">
              {user?.name || 'User'}
            </span>
            <span className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase mt-1">
              {role === 'admin' ? 'Administrator' : role === 'staff' ? 'Faculty Staff' : 'Student Scholar'}
            </span>
          </div>

          <div className="w-10 h-10 rounded-xl bg-blue-50 text-secondary-blue border border-blue-100 flex items-center justify-center font-bold">
            {user?.name ? user.name.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase() : 'US'}
          </div>
        </div>

        {/* Quick Logout (Desktop icon-only, since sidebar already has logout) */}
        <button
          onClick={onLogout}
          className="p-2.5 rounded-xl text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all duration-200 cursor-pointer hidden md:block"
          title="Logout of Session"
        >
          <LogOut className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
};

export default Topbar;
