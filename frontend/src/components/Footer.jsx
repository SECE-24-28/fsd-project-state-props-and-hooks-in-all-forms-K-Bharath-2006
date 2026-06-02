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

  const handleHashLinkClick = (id) => {
    if (window.location.pathname !== '/') {
      navigate('/' + id);
    } else {
      const element = document.getElementById(id.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const quickLinks = [
    { name: 'Home', action: () => navigate('/') },
    { name: 'About Us', action: () => navigate('/about') },
    { name: 'Admissions', action: () => handleHashLinkClick('#admissions') },
    { name: 'Academics', action: () => handleHashLinkClick('#academics') },
    { name: 'Privacy Policy', action: () => navigate('/privacy') },
  ];

  const resourcesLinks = [
    { name: 'ERP Portal', action: () => navigate('/erp-login') },
    { name: 'Library & E-Resources', href: '#library' },
    { name: 'Career Development', action: () => handleHashLinkClick('#careers') },
    { name: 'Research Lab', href: '#research' },
    { name: 'Campus Safety', href: '#safety' },
  ];

  return (
    <footer className="bg-primary-navy text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        {/* Brand Column */}
        <div className="space-y-4">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center space-x-3 group">
            <img 
              src={logo} 
              alt="Vertex Logo" 
              className="h-10 w-auto object-contain brightness-0 invert" 
            />
            <div className="flex flex-col">
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
        <div>
          <h3 className="text-white font-semibold text-base mb-6 font-display uppercase tracking-wider relative inline-block">
            Quick Navigation
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
                  className="text-sm text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer flex items-center group"
                >
                  <span className="mr-1.5 transform scale-0 group-hover:scale-100 transition-all duration-200 text-secondary-blue">›</span>
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources & Support */}
        <div>
          <h3 className="text-white font-semibold text-base mb-6 font-display uppercase tracking-wider relative inline-block">
            Resources & Support
            <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-secondary-blue rounded-full"></span>
          </h3>
          <ul className="space-y-3.5">
            {resourcesLinks.map((link) => (
              <li key={link.name}>
                {link.action ? (
                  <button
                    onClick={() => {
                      link.action();
                    }}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer flex items-center group"
                  >
                    <span className="mr-1.5 transform scale-0 group-hover:scale-100 transition-all duration-200 text-secondary-blue">›</span>
                    {link.name}
                  </button>
                ) : (
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="mr-1.5 transform scale-0 group-hover:scale-100 transition-all duration-200 text-secondary-blue">›</span>
                    {link.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info Column */}
        <div>
          <h3 className="text-white font-semibold text-base mb-6 font-display uppercase tracking-wider relative inline-block">
            Get in Touch
            <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-secondary-blue rounded-full"></span>
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3.5">
              <MapPin className="h-5 w-5 text-secondary-blue shrink-0 mt-0.5" />
              <span className="text-sm text-slate-400 leading-relaxed">
                100 Innovation Boulevard, Tech District, Silicon Valley, CA 94025
              </span>
            </li>
            <li className="flex items-center space-x-3.5">
              <Phone className="h-5 w-5 text-secondary-blue shrink-0" />
              <a href="tel:+18005558378" className="text-sm text-slate-400 hover:text-white transition-colors">
                +1 (800) 555-VERT
              </a>
            </li>
            <li className="flex items-center space-x-3.5">
              <Mail className="h-5 w-5 text-secondary-blue shrink-0" />
              <a href="mailto:admissions@vertex.edu" className="text-sm text-slate-400 hover:text-white transition-colors">
                admissions@vertex.edu
              </a>
            </li>
          </ul>
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
