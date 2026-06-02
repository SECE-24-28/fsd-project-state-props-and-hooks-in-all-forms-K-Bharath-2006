import { motion } from 'framer-motion';
import { 
  Shield, 
  Eye, 
  FileText, 
  Lock, 
  UserCheck, 
  HelpCircle,
  Clock
} from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      id: 'intro',
      title: '1. Introduction',
      icon: FileText,
      content: 'Vertex College of Engineering ("we", "us", "our") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, process, and safeguard your personal information when you visit our website, apply for admission, or use our digital student portal. By accessing our platform, you consent to the practices described in this document.'
    },
    {
      id: 'collection',
      title: '2. Data We Collect',
      icon: Eye,
      content: 'We collect several types of information from and about users of our website, including: Personal Identification details (Name, email address, telephone numbers, and mailing address) when you fill our inquiry and admission forms; Academic records, including transcripts, graduation years, and standard test results; Technical usage data (IP address, browser type, operating system, and search queries) collected automatically through device logs.'
    },
    {
      id: 'cookies',
      title: '3. Cookies & Tracking',
      icon: Shield,
      content: 'Our website uses cookies and similar tracking tools to distinguish you from other users. This helps us to provide you with a high-fidelity browsing experience, analyze site traffic, and optimize academic recommendations. You can configure your browser to reject all or some cookies, but please note that some components of the student portal may become inaccessible as a result.'
    },
    {
      id: 'security',
      title: '4. Information Security',
      icon: Lock,
      content: 'The security of your personal information is paramount to us. We have implemented robust technical and organizational security measures designed to prevent your data from being accidentally lost, altered, disclosed, or accessed in an unauthorized manner. Access to student databases is strictly governed by role-based access protocols and encrypted using SSL/TLS connections.'
    },
    {
      id: 'rights',
      title: '5. Your Legal Rights',
      icon: UserCheck,
      content: 'Under applicable privacy laws, you possess distinct rights regarding your personal records. These include the right to request access to and receive copies of the personal data we hold; request rectification of incomplete or incorrect databases; request erasure of your records when there is no legitimate academic reason for us to continue processing them; or withdraw consent at any time.'
    },
    {
      id: 'contact',
      title: '6. Contact Information',
      icon: HelpCircle,
      content: 'If you have questions regarding this privacy policy, wish to exercise any of your legal rights, or have inquiries concerning your data security, please contact our Institutional Data Protection officer. Email: privacy@vertex.edu | Mailing Address: 100 Innovation Boulevard, Tech District, Silicon Valley, CA 94025 | Phone: +1 (800) 555-VERT Ext. 402'
    }
  ];

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="pt-20 bg-section-bg min-h-screen pb-24">
      {/* Mini Title Section */}
      <section className="bg-white border-b border-slate-200/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-3">
          <div className="flex items-center space-x-2 text-slate-400">
            <Clock className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-wider font-sans">Last Updated: May 26, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary-navy font-display">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-500 leading-relaxed max-w-2xl font-sans font-light">
            Learn about how we collect, manage, protect, and govern personal credentials for prospective students, faculty, and website visitors.
          </p>
        </div>
      </section>

      {/* Main Documentation Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Sidebar Links (Desktop only) */}
          <div className="hidden lg:block lg:col-span-4 space-y-2 sticky top-28 self-start">
            <div className="bg-white border border-slate-200/60 p-6 rounded-3xl shadow-sm text-left">
              <h3 className="text-xs font-extrabold uppercase text-slate-400 tracking-wider mb-4 font-display">
                Policy Document Index
              </h3>
              <nav className="space-y-1">
                {sections.map((sect) => {
                  const Icon = sect.icon;
                  return (
                    <button
                      key={sect.id}
                      onClick={() => handleScrollTo(sect.id)}
                      className="flex items-center space-x-3 w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 hover:text-secondary-blue transition-colors cursor-pointer"
                    >
                      <Icon className="h-4 w-4 shrink-0 text-slate-400" />
                      <span>{sect.title}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Right Card Panel Sections */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white border border-slate-200/60 p-8 sm:p-10 rounded-3xl shadow-sm space-y-8 text-left">
              
              {sections.map((sect, index) => {
                const Icon = sect.icon;
                return (
                  <motion.div
                    key={sect.id}
                    id={sect.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`scroll-mt-28 ${index !== 0 ? 'border-t border-slate-100 pt-8' : ''}`}
                  >
                    <div className="flex items-center space-x-3.5 mb-4">
                      <div className="p-2 bg-blue-50 text-secondary-blue rounded-xl">
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-primary-navy font-display">
                        {sect.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans pl-1">
                      {sect.content}
                    </p>
                  </motion.div>
                );
              })}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
