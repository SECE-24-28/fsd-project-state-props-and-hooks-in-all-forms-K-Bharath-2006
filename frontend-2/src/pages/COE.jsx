import { motion } from 'framer-motion';
import { 
  FileText, 
  Calendar, 
  Award, 
  UserCheck, 
  FileCheck, 
  Mail, 
  Phone 
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const procedures = [
  {
    step: '01',
    title: 'Exam Regulations & Eligibility',
    desc: 'Students must maintain a minimum of 75% attendance overall to be eligible for terminal exams. Dues and library fines must be fully settled with the admin registry.',
    icon: UserCheck,
    color: 'border-blue-200 bg-blue-50/50 text-blue-600'
  },
  {
    step: '02',
    title: 'Semester Examination Process',
    desc: 'Examinations are conducted twice a year (Odd Semester in Nov/Dec, Even Semester in Apr/May). Evaluation contains Internal Assesments (40%) and End-Semester Written Papers (60%).',
    icon: Calendar,
    color: 'border-indigo-200 bg-indigo-50/50 text-indigo-600'
  },
  {
    step: '03',
    title: 'Hall Ticket Allocation Process',
    desc: 'Hall tickets are released digitally via the student ERP panel 10 days before exam schedules. Students must verify their photo, roll numbers, and download the print copies.',
    icon: FileText,
    color: 'border-cyan-200 bg-cyan-50/50 text-cyan-600'
  },
  {
    step: '04',
    title: 'Result Publication Process',
    desc: 'Double valuation is enforced by external and internal faculty members. Consolidated grade cards are published on the ERP panel within 25 working days from the final exam date.',
    icon: Award,
    color: 'border-emerald-200 bg-emerald-50/50 text-emerald-600'
  },
  {
    step: '05',
    title: 'Revaluation & Retotalling Procedures',
    desc: 'Students unsatisfied with results can apply for Photocopying (within 7 days) and Revaluation (within 15 days) of grade cards upon paying the mandated evaluation cell fees.',
    icon: FileCheck,
    color: 'border-purple-200 bg-purple-50/50 text-purple-600'
  }
];

const COE = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-primary-navy to-secondary-blue py-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-3 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-300">Examination Cell</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display">Controller of Examinations (COE)</h1>
          <p className="text-sm text-slate-200 max-w-xl font-light leading-relaxed">
            Monitor exam schedules, review academic regulations, download hall cards, and examine result publication timelines.
          </p>
        </div>
      </section>

      {/* Main Sections */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Side: COE Profile Card & Contact Info */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white border border-slate-200/60 p-8 rounded-3xl shadow-sm text-left space-y-6">
            <h3 className="text-lg font-bold text-primary-navy font-display border-b border-slate-100 pb-3">COE Leadership</h3>
            
            {/* Portrait profile */}
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-2xl overflow-hidden bg-slate-100 shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
                  alt="Dr. Richard Feynman"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-primary-navy text-base">Dr. Richard Feynman</h4>
                <p className="text-xs text-slate-400 font-semibold uppercase mt-0.5">COE Director</p>
              </div>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed font-sans font-light">
              "The examination cell at Vertex College ensures highly secure, transparent, and objective evaluation processes leveraging modern cloud computing to declare results on schedule."
            </p>

            <div className="border-t border-slate-100 pt-5 space-y-3.5 text-xs text-slate-600 font-sans">
              <div className="flex items-center space-x-3">
                <Phone className="h-4.5 w-4.5 text-secondary-blue shrink-0" />
                <span>+91 98765 43219</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4.5 w-4.5 text-secondary-blue shrink-0" />
                <a href="mailto:coe@vertexcollege.edu" className="hover:underline">coe@vertexcollege.edu</a>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-navy to-secondary-blue p-8 rounded-3xl text-white text-left space-y-4 shadow-md">
            <h4 className="font-bold text-base font-display">Need Immediate Help?</h4>
            <p className="text-xs text-slate-200 leading-relaxed font-light">
              For errors on hall tickets, exam clashes, or revaluation query forms, contact the main examination office desk during working hours (9 AM - 5 PM).
            </p>
            <div className="pt-2">
              <a href="mailto:coe@vertexcollege.edu" className="inline-block px-5 py-2.5 bg-white text-primary-navy text-xs font-bold rounded-xl shadow hover:bg-slate-50 transition-colors">
                Email Enquiry Cell
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Timeline Procedures Cards */}
        <div className="lg:col-span-8 text-left space-y-8">
          <SectionTitle 
            subtitle="Operational Workflows" 
            title="Overview of Examination Procedures" 
          />

          <div className="space-y-6 relative border-l border-slate-200/80 pl-6 ml-4">
            {procedures.map((proc, index) => {
              const Icon = proc.icon;
              return (
                <motion.div
                  key={proc.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative bg-white border border-slate-200/50 p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Circle number tag on timeline */}
                  <div className={`absolute left-[-39px] top-7 w-6 h-6 rounded-full border-2 border-white font-bold text-[10px] text-white bg-secondary-blue flex items-center justify-center shadow`}>
                    {proc.step}
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-2xl border shrink-0 ${proc.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-base font-bold text-primary-navy font-display">
                        {proc.title}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-sans">
                        {proc.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </main>
    </div>
  );
};

export default COE;
