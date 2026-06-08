import { motion } from 'framer-motion';
import { 
  FileText, 
  Globe, 
  Award, 
  UserCheck, 
  Slash, 
  ShieldAlert, 
  RefreshCw, 
  Scale, 
  Mail,
  Clock
} from 'lucide-react';

const TermsAndConditions = () => {
  const sections = [
    {
      id: 'acceptance',
      title: '1. Acceptance of Terms',
      icon: FileText,
      content: 'Vertex College of Engineering ("we", "us", "our", "Vertex") provides this website, our digital portals, and related administrative services to you subject to these Terms & Conditions. By accessing, browsing, or logging into our institutional database system, you acknowledge that you have read, understood, and agreed to be legally bound by these terms. If you do not agree to these terms, you must refrain from using our digital assets and campus networks immediately.'
    },
    {
      id: 'use',
      title: '2. Use of Website',
      icon: Globe,
      content: 'Access to this platform is provided on a temporary and non-exclusive basis for academic, prospective, and administrative purposes. Users must register using authorized institutional credentials and ensure their login details remain secure. Any unauthorized entry, session hijacking, brute-forcing attempts, or network sniffing of institutional communication lines is strictly prohibited. We reserve the right to revoke user access at our sole discretion.'
    },
    {
      id: 'intellectual',
      title: '3. Intellectual Property',
      icon: Award,
      content: 'All content, branding, logos, graphics, course material, syllabus PDFs, source code of portal, and intellectual assets displayed on this domain are the exclusive property of Vertex College of Engineering or its licensors. You may download reference materials solely for personal, non-commercial educational purposes. Any unauthorized copying, distribution, modification, or commercial exploitation is strictly prohibited without prior written consent.'
    },
    {
      id: 'responsibilities',
      title: '4. Student Responsibilities',
      icon: UserCheck,
      content: 'Students are expected to maintain the highest levels of academic integrity and digital etiquette when uploading assignments, submitting grades, or using collaborative forums. You are solely responsible for ensuring that all files uploaded to our database systems are free from malicious code, trojans, or ransomware payloads, and conform to the university student code of conduct.'
    },
    {
      id: 'prohibited',
      title: '5. Prohibited Activities',
      icon: Slash,
      content: 'You are explicitly prohibited from using this website or our servers to: attempt to bypass firewall and security walls, scrap student/faculty databases, host third-party services on campus networks without explicit permission, post defamatory or harassing material on community forums, or perform actions that trigger server downtime or compromise structural server integrity.'
    },
    {
      id: 'liability',
      title: '6. Limitation of Liability',
      icon: ShieldAlert,
      content: 'Under no circumstances shall Vertex College of Engineering, its trustees, faculty, or technical staff be liable for any direct, indirect, incidental, or consequential damages resulting from system downtime, database loss, delayed grade publications, fee gateway failures, or network interruptions. The institution strives for 99.9% ERP portal uptime but provides no active guarantee of error-free operations.'
    },
    {
      id: 'modifications',
      title: '7. Modifications to Services',
      icon: RefreshCw,
      content: 'The institution reserves the right to modify, suspend, or terminate website accessibility, portal widgets, fee payment gateways, or student dashboard parameters at any time without prior announcement. Maintenance windows are typically scheduled during off-peak hours (12:00 AM - 4:00 AM PST) to minimize student learning disruptions.'
    },
    {
      id: 'governing',
      title: '8. Governing Law',
      icon: Scale,
      content: 'These terms are compiled and governed in compliance with state education regulations and the jurisdictional statutes of the State of California. Any formal dispute, litigation, or regulatory appeal arising from these terms will be settled exclusively within the state courts of California, and you consent to the personal jurisdiction of such courts.'
    },
    {
      id: 'contact',
      title: '9. Contact Information',
      icon: Mail,
      content: 'For legal queries, official clarifications, or reporting server vulnerabilities, please contact our Legal and Information Compliance Office. Email: compliance@vertex.edu | Mailing Address: 100 Innovation Boulevard, Tech District, Silicon Valley, CA 94025 | Phone: +1 (800) 555-VERT Ext. 905 | Office Hours: Monday - Friday, 9:00 AM - 5:00 PM PST.'
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
            <span className="text-xs font-semibold uppercase tracking-wider font-sans">Last Updated: May 28, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary-navy font-display">
            Terms & Conditions
          </h1>
          <p className="text-sm text-slate-500 leading-relaxed max-w-2xl font-sans font-light">
            Review the terms of service governing the use of the Vertex website, ERP portals, student networks, and electronic interfaces.
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
                Terms Document Index
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
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-blue-50 text-secondary-blue rounded-xl">
                        <Icon className="h-5 w-5" />
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

export default TermsAndConditions;
