import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const faqQuestions = [
  {
    q: 'How can I apply for admission?',
    a: 'You can apply online through our admissions portal or submit the physical form directly at our campus admissions cell.'
  },
  {
    q: 'What programs are offered?',
    a: 'We offer world-class B.E./B.Tech programs in 10 different disciplines including Computer Science, AI & Data Science, Robotics, Information Technology, and more.'
  },
  {
    q: 'Is hostel accommodation available?',
    a: 'Yes, modern on-campus hostels equipped with high-speed internet, athletic gyms, and hygienic dining halls are available for both boys (Newton Wing) and girls (Curie Wing).'
  },
  {
    q: 'What is the admission eligibility?',
    a: 'Eligibility requires a minimum aggregate of 50% in Physics, Chemistry, and Mathematics in Higher Secondary (10+2) examinations, along with competitive board test metrics.'
  },
  {
    q: 'How can I access ERP services?',
    a: 'Upon admission, students receive @vertex.edu institutional credentials to log in directly to our secure cloud ERP portal to view marks, schedules, and attendance records.'
  },
  {
    q: 'How does placement training work?',
    a: 'We structure training into pre-placement coding courses, mock panel interviews, simulated corporate workshops, and mandatory industry internships starting in the 3rd year.'
  },
  {
    q: 'Are scholarships available?',
    a: 'Yes, Vertex College offers academic merit scholarships, sports excellence awards, and need-based financial aid. Detailed criteria can be requested at our Registrar Office.'
  },
  {
    q: 'What documents are required for admission?',
    a: 'You will need class 10 & 12 mark sheets, transfer certificates, community/caste certificates (if applicable), identity proof (Aadhaar/Passport), and passport-size photographs.'
  },
  {
    q: 'How can I contact faculty members?',
    a: 'Detailed faculty emails are listed under our Faculty directory. Students can schedule direct advisory hours through the portal or meet them in their offices.'
  },
  {
    q: 'How are semester examinations conducted?',
    a: 'Examinations are conducted under double valuation standards (Odd semester in Nov/Dec, Even semester in Apr/May) containing 40% internal assessments and 60% end-semester exams.'
  },
  {
    q: 'How can I check attendance through ERP?',
    a: 'Log into your Student Dashboard on the ERP portal. The dashboard features live circular progress indicators showing attendance percentages, which are refreshed daily.'
  },
  {
    q: 'Are internships provided by the college?',
    a: 'Yes, our Corporate Relations Cell bridges alliances with top tech firms to mandate 6-8 weeks of industrial internship schedules during vacation terms.'
  },
  {
    q: 'Is transportation available?',
    a: 'Yes, the college runs a fleet of comfortable, modern institutional buses connecting all major residential neighborhoods in and around Coimbatore.'
  },
  {
    q: 'What extracurricular activities are available?',
    a: 'We host multiple student-led tech clubs (Coding, Robotics, AI), athletic teams, cultural clubs, literary groups, and annual hackathons like Tech Coliseum.'
  },
  {
    q: 'How can parents monitor academic performance?',
    a: 'Parents can view real-time statistics (attendance average, gradecards, remarks) by logging into the student ERP dashboard, and the institution issues monthly progress notifications.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="pt-24 min-h-screen bg-slate-50 text-left">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-primary-navy to-secondary-blue py-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-3 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-300">Support Center</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display">Frequently Asked Questions</h1>
          <p className="text-sm text-slate-200 max-w-xl font-light leading-relaxed">
            Find answers to commonly asked questions about admissions, academic policies, student life, hostels, and ERP portal guidelines.
          </p>
        </div>
      </section>

      {/* Accordion Questions List */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionTitle 
          subtitle="Help Desk" 
          title="Got Questions? We Have Answers" 
          center={true} 
        />
        
        <div className="space-y-4 mt-12">
          {faqQuestions.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="bg-white rounded-2xl border border-slate-200/60 shadow-sm overflow-hidden transition-all duration-300 hover:border-secondary-blue/30"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-semibold text-primary-navy hover:text-secondary-blue transition-colors cursor-pointer"
                >
                  <span className="text-base font-display">{faq.q}</span>
                  <div className="ml-4 p-1.5 rounded-full bg-slate-50 text-slate-500 transition-colors shrink-0">
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-1 text-sm text-slate-500 leading-relaxed font-sans border-t border-slate-100/60">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default FAQ;
