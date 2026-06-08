import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import ERPLogin from './pages/ERPLogin';
import AdminDashboard from './pages/AdminDashboard';
import StaffDashboard from './pages/StaffDashboard';
import StudentDashboard from './pages/StudentDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

// Import newly added college information pages
import Departments from './pages/Departments';
import Faculty from './pages/Faculty';
import COE from './pages/COE';
import Hostel from './pages/Hostel';
import FAQ from './pages/FAQ';
import Leadership from './pages/Leadership';
import CareerDevelopment from './pages/CareerDevelopment';
import CampusTour from './pages/CampusTour';
import Library from './pages/Library';
import Sports from './pages/Sports';
import Clubs from './pages/Clubs';

// Reusable hook to handle scroll actions during route transitions
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

function AppContent() {
  const location = useLocation();
  const isDashboard = location.pathname.endsWith('-dashboard');
  const isERPLogin = location.pathname === '/erp-login';
  const showNavAndFooter = !isERPLogin && !isDashboard;

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-secondary-blue overflow-x-hidden font-sans">
      {/* Sticky Header - Hidden on ERP Login and Dashboards */}
      {showNavAndFooter && <Navbar />}

      {/* Dynamic Pages */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/erp-login" element={<ERPLogin />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/coe" element={<COE />} />
          <Route path="/hostel" element={<Hostel />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/career-development" element={<CareerDevelopment />} />
          <Route path="/campus-tour" element={<CampusTour />} />
          <Route path="/library" element={<Library />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/clubs" element={<Clubs />} />
          
          <Route 
            path="/admin-dashboard" 
            element={
              <ProtectedRoute allowedRole="admin">
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/staff-dashboard" 
            element={
              <ProtectedRoute allowedRole="staff">
                <StaffDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/student-dashboard" 
            element={
              <ProtectedRoute allowedRole="student">
                <StudentDashboard />
              </ProtectedRoute>
            } 
          />

          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* Global Footer - Hidden on ERP Login and Dashboards */}
      {showNavAndFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;
