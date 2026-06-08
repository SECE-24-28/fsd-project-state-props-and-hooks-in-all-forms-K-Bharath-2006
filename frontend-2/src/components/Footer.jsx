import { Link, useNavigate } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  const navigate = useNavigate();



  const quickLinks = [
    { name: 'Home', action: () => navigate('/') },
    { name: 'About Us', action: () => navigate('/about') },
    { name: 'Departments', action: () => navigate('/departments') },
    { name: 'Campus Tour', action: () => navigate('/campus-tour') },
    { name: 'Career Development', action: () => navigate('/career-development') },
    { name: 'Hostel', action: () => navigate('/hostel') },
  ];

  const resourcesLinks = [
    { name: 'Library', action: () => navigate('/library') },
    { name: 'Sports', action: () => navigate('/sports') },
    { name: 'Clubs & Activities', action: () => navigate('/clubs') },
    { name: 'FAQ Center', action: () => navigate('/faq') },
    { name: 'Privacy Policy', action: () => navigate('/privacy') },
    { name: 'ERP Portal', action: () => navigate('/erp-login') },
  ];

  return (
    <footer className="bg-primary-navy text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
        
        {/* Brand Column */}
        <div className="space-y-4 lg:col-span-3 text-left">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center space-x-3 group">
            <div className="h-11 w-11 flex items-center justify-center bg-white rounded-xl shadow border border-slate-200/20 overflow-hidden p-0.5 shrink-0">
              <img
                src={logo}
                alt="Vertex Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xl font-bold font-display text-white tracking-tight leading-none">
                VERTEX
              </span>
              <span className="text-[10px] text-slate-400 font-semibold tracking-widest uppercase">
                College of Engineering
              </span>
            </div>
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed pt-2">
            Vertex College of Engineering is dedicated to academic excellence, innovation, and shaping the tech leaders of tomorrow through industry-integrated pedagogy.
          </p>
          <div className="flex space-x-4 pt-4">
            <a href="#facebook" className="p-2 rounded-full bg-slate-800/80 hover:bg-secondary-blue text-slate-300 hover:text-white transition-all duration-300" aria-label="Facebook">
              <Facebook className="h-4.5 w-4.5" />
            </a>
            <a href="#twitter" className="p-2 rounded-full bg-slate-800/80 hover:bg-secondary-blue text-slate-300 hover:text-white transition-all duration-300" aria-label="Twitter">
              <Twitter className="h-4.5 w-4.5" />
            </a>
            <a href="#instagram" className="p-2 rounded-full bg-slate-800/80 hover:bg-secondary-blue text-slate-300 hover:text-white transition-all duration-300" aria-label="Instagram">
              <Instagram className="h-4.5 w-4.5" />
            </a>
            <a href="#linkedin" className="p-2 rounded-full bg-slate-800/80 hover:bg-secondary-blue text-slate-300 hover:text-white transition-all duration-300" aria-label="Linkedin">
              <Linkedin className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="lg:col-span-2 text-left">
          <h3 className="text-white font-semibold text-base mb-6 font-display uppercase tracking-wider relative inline-block">
            Quick Nav
            <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-secondary-blue rounded-full"></span>
          </h3>
          <ul className="space-y-3.5">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => {
                    link.action();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-sm text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer flex items-center group cursor-pointer"
                >
                  <span className="mr-1.5 transform scale-0 group-hover:scale-100 transition-all duration-200 text-secondary-blue">›</span>
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources & Support */}
        <div className="lg:col-span-2 text-left">
          <h3 className="text-white font-semibold text-base mb-6 font-display uppercase tracking-wider relative inline-block">
            Resources
            <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-secondary-blue rounded-full"></span>
          </h3>
          <ul className="space-y-3.5">
            {resourcesLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => {
                    link.action();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-sm text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer flex items-center group cursor-pointer"
                >
                  <span className="mr-1.5 transform scale-0 group-hover:scale-100 transition-all duration-200 text-secondary-blue">›</span>
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="lg:col-span-2 text-left">
          <h3 className="text-white font-semibold text-base mb-6 font-display uppercase tracking-wider relative inline-block">
            Contact Us
            <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-secondary-blue rounded-full"></span>
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3.5">
              <MapPin className="h-5 w-5 text-secondary-blue shrink-0 mt-0.5" />
              <span className="text-sm text-slate-400 leading-relaxed">
                100 Innovation Avenue, Technology Park, Coimbatore, Tamil Nadu, India
              </span>
            </li>
            <li className="flex items-center space-x-3.5">
              <Phone className="h-5 w-5 text-secondary-blue shrink-0" />
              <a href="tel:+919876543210" className="text-sm text-slate-400 hover:text-white transition-colors">
                +91 98765 43210
              </a>
            </li>
            <li className="flex items-center space-x-3.5">
              <Mail className="h-5 w-5 text-secondary-blue shrink-0" />
              <a href="mailto:info@vertexcollege.edu" className="text-sm text-slate-400 hover:text-white transition-colors">
                info@vertexcollege.edu
              </a>
            </li>
          </ul>
        </div>

        {/* Google Map Column */}
        <div className="lg:col-span-3 text-left">
          <h3 className="text-white font-semibold text-base mb-6 font-display uppercase tracking-wider relative inline-block">
            Our Location
            <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-secondary-blue rounded-full"></span>
          </h3>
          {/* Two-finger scroll: pointer-events overlay removed on two-finger touch */}
          <div
            className="w-full h-40 rounded-2xl overflow-hidden border border-slate-800 shadow relative group"
            onTouchStart={(e) => {
              if (e.touches.length >= 2) {
                e.currentTarget.querySelector('iframe').style.pointerEvents = 'auto';
              }
            }}
            onTouchEnd={(e) => {
              e.currentTarget.querySelector('iframe').style.pointerEvents = 'none';
            }}
            onMouseEnter={(e) => {
              e.currentTarget.querySelector('iframe').style.pointerEvents = 'auto';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.querySelector('iframe').style.pointerEvents = 'none';
            }}
          >
            {/* Hint overlay (hidden on hover/touch) */}
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/30 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none rounded-2xl">
              <span className="text-white text-xs font-semibold bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
                Use two fingers to scroll map
              </span>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15665.432657416385!2d76.9587!3d11.0186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f973b7f%3A0x6fb8a715db150cf8!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, pointerEvents: 'none' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vertex Coimbatore Campus Map"
              className="opacity-80 group-hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 mt-8 border-t border-slate-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Vertex College of Engineering. All rights reserved. 
        </p>
        <div className="flex space-x-6 text-xs text-slate-500">
          <Link to="/privacy" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
          <Link to="/terms" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-slate-400 transition-colors">Terms & Conditions</Link>
          <a href="#sitemap" className="hover:text-slate-400 transition-colors">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
