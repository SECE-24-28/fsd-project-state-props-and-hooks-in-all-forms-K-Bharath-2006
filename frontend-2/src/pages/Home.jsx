import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  BookOpen, 
  Briefcase, 
  Users, 
  Cpu, 
  ChevronRight, 
  TrendingUp, 
  CheckCircle, 
  ShieldCheck,
  Send,
  Zap,
  Star,
  DollarSign
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import homeImg from '../assets/home.png';

const Home = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    program: 'Computer Science',
    message: ''
  });

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setInquiryForm({ name: '', email: '', phone: '', program: 'Computer Science', message: '' });
    }, 4000);
  };

  const features = [
    {
      title: 'Innovation',
      description: 'Encouraging creativity and innovation through cutting-edge labs, incubation centers, and advanced research facilities.',
      icon: Cpu,
      color: 'bg-blue-50 text-secondary-blue'
    },
    {
      title: 'Placements',
      description: 'Strong industry connections and robust pre-placement training ensuring top placement records every single year.',
      icon: Briefcase,
      color: 'bg-indigo-50 text-indigo-600'
    },
    {
      title: 'Research',
      description: 'Promoting impactful research and development to address complex, real-world engineering and environmental challenges.',
      icon: Award,
      color: 'bg-cyan-50 text-cyan-600'
    },
    {
      title: 'Student Life',
      description: 'A vibrant campus ecosystem enriched with student-led clubs, cultural events, hackathons, and leadership academies.',
      icon: Users,
      color: 'bg-emerald-50 text-emerald-600'
    }
  ];

  const statistics = [
    { value: '10,000+', label: 'Active Students', icon: Users },
    { value: '500+', label: 'Expert Faculty', icon: BookOpen },
    { value: '10', label: 'Departments', icon: Cpu },
    { value: '150+', label: 'Global Recruiters', icon: Briefcase },
    { value: '95%', label: 'Placement Rate', icon: TrendingUp },
    { value: '1,200+', label: 'Research Papers', icon: Award },
    { value: '2,100+', label: 'Hostel Capacity', icon: Star }
  ];

  const recruiters = [
    { name: 'TechNova', desc: 'Software Solutions', logoColor: 'from-blue-600 to-indigo-600' },
    { name: 'InnovaSoft', desc: 'Consulting & Tech', logoColor: 'from-cyan-500 to-blue-600' },
    { name: 'NextGen Technologies', desc: 'Robotics & AI', logoColor: 'from-purple-600 to-indigo-500' },
    { name: 'Future Labs', desc: 'R&D Pioneers', logoColor: 'from-emerald-500 to-teal-600' },
    { name: 'Skyline Systems', desc: 'Cloud Architectures', logoColor: 'from-slate-600 to-slate-800' },
    { name: 'Global Tech', desc: 'Enterprise Systems', logoColor: 'from-blue-700 to-cyan-600' }
  ];

  const academics = [
    { dept: 'Computer Science & Engineering', code: 'CSE', desc: 'Focus on Artificial Intelligence, Software Engineering, and Cyber Security.', icon: Cpu },
    { dept: 'Electronics & Communication', code: 'ECE', desc: 'Embedded systems, VLSI design, and next-generation telecommunication grids.', icon: Zap },
    { dept: 'Robotics & Automation', code: 'RA', desc: 'Mechatronics design, machine vision systems, and autonomous controllers.', icon: Award },
    { dept: 'Data Science & Analytics', code: 'DSA', desc: 'Big data processing architectures, predictive modeling, and deep learning analytics.', icon: TrendingUp }
  ];

  return (
    <div className="pt-20">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50/30 py-20 lg:py-28">
        {/* Floating gradient circles */}
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Side: Content */}
            <div className="lg:col-span-6 space-y-8 text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full mb-4">
                  <Star className="h-4 w-4 text-secondary-blue fill-secondary-blue" />
                  <span className="text-xs font-semibold text-secondary-blue tracking-wide uppercase">Ranked #1 Engineering Institute</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary-navy leading-tight font-display">
                  Shape Your Future at <br />
                  <span className="bg-gradient-to-r from-secondary-blue to-blue-700 bg-clip-text text-transparent">
                    Vertex College
                  </span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans"
              >
                Empowering students with pioneering innovation, strategic leadership training, structured career development, and real-world experiential learning.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <button 
                  onClick={() => document.getElementById('academics').scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-3.5 rounded-full font-semibold text-primary-navy border border-slate-300 hover:border-secondary-blue bg-white hover:bg-slate-50 shadow-sm transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  Explore Campus
                </button>
                <button 
                  onClick={() => document.getElementById('admissions').scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-3.5 rounded-full font-semibold text-white bg-primary-navy hover:bg-secondary-blue shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  Apply Now
                </button>
              </motion.div>
            </div>

            {/* Right Side: Large Cinematic Image + Floating Badges */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-full max-w-lg aspect-square lg:max-w-none lg:h-[480px] rounded-3xl overflow-hidden border border-slate-200/50 shadow-2xl bg-white p-2"
              >
                <img
                  src={homeImg}
                  alt="Student facing university path and city skyline"
                  className="w-full h-full object-cover rounded-2xl"
                />
                {/* Backdrop modern glass panels */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/40 via-transparent to-transparent pointer-events-none rounded-2xl" />
              </motion.div>

              {/* Floating milestone tags */}
              <div className="absolute inset-0 pointer-events-none">
                {/* 1. Learn */}
                <motion.div 
                  initial={{ opacity: 0, x: -30, y: 30 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="absolute left-[-10px] top-[15%] bg-white/95 backdrop-blur px-4 py-2 rounded-xl shadow-lg border border-slate-100 flex items-center space-x-2 pointer-events-auto hover:scale-105 transition-transform"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-xs font-semibold text-primary-navy">Learn</span>
                </motion.div>

                {/* 2. Build Skills */}
                <motion.div 
                  initial={{ opacity: 0, x: 30, y: -20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="absolute right-[-10px] top-[25%] bg-white/95 backdrop-blur px-4 py-2 rounded-xl shadow-lg border border-slate-100 flex items-center space-x-2 pointer-events-auto hover:scale-105 transition-transform"
                >
                  <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                  <span className="text-xs font-semibold text-primary-navy">Build Skills</span>
                </motion.div>

                {/* 3. Career Development */}
                <motion.div 
                  initial={{ opacity: 0, x: -40, y: 10 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.6 }}
                  className="absolute left-[-20px] bottom-[35%] bg-white/95 backdrop-blur px-4 py-2 rounded-xl shadow-lg border border-slate-100 flex items-center space-x-2 pointer-events-auto hover:scale-105 transition-transform"
                >
                  <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                  <span className="text-xs font-semibold text-primary-navy">Career Development</span>
                </motion.div>

                {/* 4. Interview Prep */}
                <motion.div 
                  initial={{ opacity: 0, x: 40, y: 20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 1.3, duration: 0.6 }}
                  className="absolute right-[-15px] bottom-[20%] bg-white/95 backdrop-blur px-4 py-2 rounded-xl shadow-lg border border-slate-100 flex items-center space-x-2 pointer-events-auto hover:scale-105 transition-transform"
                >
                  <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                  <span className="text-xs font-semibold text-primary-navy">Interview Prep</span>
                </motion.div>

                {/* 5. Get Hired */}
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6, duration: 0.6 }}
                  className="absolute bottom-[-15px] left-1/4 bg-gradient-to-r from-primary-navy to-secondary-blue text-white px-5 py-2.5 rounded-full shadow-xl flex items-center space-x-2 pointer-events-auto hover:scale-105 transition-transform border border-blue-400/20"
                >
                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                  <span className="text-xs font-bold uppercase tracking-wider">Get Hired</span>
                </motion.div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURES SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            subtitle="Core Pillars" 
            title="Designed for Academic and Professional Excellence" 
            center={true} 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feat, index) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-start text-left group hover:-translate-y-1.5"
                >
                  <div className={`p-3.5 rounded-xl ${feat.color} mb-6 transition-transform group-hover:scale-110 duration-300`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-primary-navy mb-3 font-display">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-sans">
                    {feat.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. STATISTICS SECTION */}
      <section className="py-20 bg-section-bg border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6">
            {statistics.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-slate-200/50 p-6 rounded-2xl shadow-sm text-center flex flex-col items-center justify-center relative overflow-hidden group hover:border-secondary-blue/30 transition-colors"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full translate-x-8 -translate-y-8" />
                  <div className="p-3 rounded-xl bg-slate-50 text-secondary-blue mb-4 group-hover:bg-blue-50 transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-3xl md:text-4xl font-extrabold text-primary-navy font-display mb-1 block">
                    {stat.value}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                    {stat.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. ACADEMICS SECTION (Anchor route from Navbar) */}
      <section id="academics" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            subtitle="Academics" 
            title="World-Class Engineering Programs" 
            center={true} 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {academics.map((academic, index) => {
              const Icon = academic.icon;
              return (
                <motion.div
                  key={academic.code}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="border border-slate-100 hover:border-secondary-blue/30 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 text-left bg-white"
                >
                  <div className="flex justify-between items-center mb-6">
                    <div className="p-3 bg-blue-50 text-secondary-blue rounded-xl">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 bg-slate-100 rounded-md text-slate-500 uppercase">
                      {academic.code}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-primary-navy mb-2 font-display">
                    {academic.dept}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans mb-4">
                    {academic.desc}
                  </p>
                  <a href="#syllabus" className="inline-flex items-center text-xs font-bold text-secondary-blue hover:text-primary-navy transition-colors">
                    <span>Syllabus & Core Info</span>
                    <ChevronRight className="h-3 w-3 ml-1" />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CAREERS SECTION (Anchor route from Navbar) */}
      <section id="careers" className="py-24 bg-section-bg border-y border-slate-200/40 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side: content details */}
            <div className="lg:col-span-5 text-left space-y-6">
              <SectionTitle 
                subtitle="Career Development" 
                title="Your Gateway to Top Global Tech Giants" 
              />
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                Our Corporate Relations and Placement Cell works relentlessly to bridge the gap between engineering pedagogy and industrial demand. We prepare students through:
              </p>
              
              <ul className="space-y-3.5">
                {[
                  'Pre-placement technical assessments and coding bootcamps',
                  'Fictional simulated hackathons and mock board interviews',
                  'Strategic industry projects and mandatory internship schedules',
                  'Soft skills training and corporate etiquette workshops'
                ].map((item) => (
                  <li key={item} className="flex items-start space-x-3 text-sm text-slate-600">
                    <CheckCircle className="h-5 w-5 text-secondary-blue shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-2">
                <a 
                  href="#placement-report" 
                  className="inline-flex items-center space-x-2 px-5 py-3 rounded-full text-xs font-bold text-white bg-secondary-blue hover:bg-primary-navy shadow transition-all duration-300"
                >
                  <span>Download Placement Report</span>
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right side: 3 Placement Highlight Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-left">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl w-fit mb-4">
                  <DollarSign className="h-5 w-5" />
                </div>
                <h4 className="text-base font-bold text-primary-navy mb-1 font-display">42.5 LPA</h4>
                <p className="text-xs text-slate-400 font-medium mb-3 uppercase tracking-wider">Highest Package Offered</p>
                <p className="text-xs text-slate-500 leading-relaxed font-sans">
                  Bagged by CSE student at a tier-1 multinational product development firm.
                </p>
              </div>

              <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-left">
                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl w-fit mb-4">
                  <Briefcase className="h-5 w-5" />
                </div>
                <h4 className="text-base font-bold text-primary-navy mb-1 font-display">250+ Bids</h4>
                <p className="text-xs text-slate-400 font-medium mb-3 uppercase tracking-wider">Placement Offers</p>
                <p className="text-xs text-slate-500 leading-relaxed font-sans">
                  Total offers issued by corporate partners during the annual recruitment drive.
                </p>
              </div>

              <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-left sm:col-span-2">
                <div className="p-3 bg-cyan-50 text-cyan-600 rounded-xl w-fit mb-4">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h4 className="text-base font-bold text-primary-navy mb-1 font-display">95% Success Rate</h4>
                <p className="text-xs text-slate-400 font-medium mb-3 uppercase tracking-wider">Placement Assurance</p>
                <p className="text-xs text-slate-500 leading-relaxed font-sans">
                  Our comprehensive pre-placement curriculum guarantees that students satisfy hiring standards globally.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 6. TOP RECRUITERS SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            subtitle="Recruitment Partners" 
            title="Our Graduates Work at the Best Companies" 
            center={true} 
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {recruiters.map((recruiter, index) => (
              <motion.div
                key={recruiter.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative bg-white border border-slate-200/60 p-5 rounded-2xl text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:border-secondary-blue/30 cursor-pointer flex flex-col justify-center items-center h-32"
              >
                {/* Logo design */}
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${recruiter.logoColor} mb-3 flex items-center justify-center text-white font-extrabold text-sm tracking-tighter opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`}>
                  {recruiter.name.substring(0, 2).toUpperCase()}
                </div>
                <span className="text-sm font-bold text-primary-navy font-display group-hover:text-secondary-blue transition-colors">
                  {recruiter.name}
                </span>
                <span className="text-[10px] text-slate-400 mt-1 uppercase font-semibold font-sans tracking-wide">
                  {recruiter.desc}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ADMISSIONS SECTION (Anchor route from Navbar) */}
      <section id="admissions" className="py-24 bg-section-bg border-t border-slate-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side: Checklist */}
            <div className="lg:col-span-6 text-left space-y-6">
              <SectionTitle 
                subtitle="Admissions Open" 
                title="Build Your Engineering Career With Us" 
              />
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                Vertex College of Engineering welcomes applicants who show academic excellence, potential for analytical thinking, and a drive to build technologies that impact society. 
              </p>

              <div className="space-y-4 pt-2">
                {[
                  { step: '01', title: 'Fill Online Application', desc: 'Register online and fill out the detailed application form before the deadline.' },
                  { step: '02', title: 'Submit Credentials', desc: 'Provide academic transcripts, letters of recommendation, and standard test records.' },
                  { step: '03', title: 'Interactive Interview', desc: 'Participate in a dynamic panel discussion with faculty to evaluate analytical abilities.' },
                  { step: '04', title: 'Confirmation & Enrollment', desc: 'Receive offer letters, secure scholarship allocation, and finalize enrollment details.' }
                ].map((item) => (
                  <div key={item.step} className="flex space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-secondary-blue border border-blue-100 font-bold flex items-center justify-center text-sm shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-primary-navy font-display">{item.title}</h4>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed font-sans">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: Mini-Form */}
            <div id="portal" className="lg:col-span-6 bg-white border border-slate-200/60 p-8 rounded-3xl shadow-xl text-left relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-secondary-blue to-blue-700" />
              
              <h3 className="text-lg font-bold text-primary-navy mb-2 font-display">Inquire About Admission</h3>
              <p className="text-xs text-slate-500 mb-6 font-sans">Submit this quick enquiry form and our Academic Relations specialist will reach out to you within 24 hours.</p>
              
              {formSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl text-center space-y-3"
                >
                  <CheckCircle className="h-10 w-10 text-emerald-500 mx-auto" />
                  <h4 className="text-sm font-bold">Inquiry Submitted Successfully!</h4>
                  <p className="text-xs leading-relaxed">Thank you for your interest in Vertex College of Engineering. An academic coordinator will review your inquiry details shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={inquiryForm.name}
                      onChange={(e) => setInquiryForm({...inquiryForm, name: e.target.value})}
                      placeholder="John Doe"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-secondary-blue transition-colors font-sans"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">Email Address</label>
                      <input 
                        type="email" 
                        required
                        value={inquiryForm.email}
                        onChange={(e) => setInquiryForm({...inquiryForm, email: e.target.value})}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-secondary-blue transition-colors font-sans"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">Phone Number</label>
                      <input 
                        type="tel" 
                        required
                        value={inquiryForm.phone}
                        onChange={(e) => setInquiryForm({...inquiryForm, phone: e.target.value})}
                        placeholder="(123) 456-7890"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-secondary-blue transition-colors font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">Program of Interest</label>
                    <select 
                      value={inquiryForm.program}
                      onChange={(e) => setInquiryForm({...inquiryForm, program: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-secondary-blue transition-colors font-sans"
                    >
                      <option>Computer Science & Engineering</option>
                      <option>Electronics & Communication</option>
                      <option>Robotics & Automation</option>
                      <option>Data Science & Analytics</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">Short Message</label>
                    <textarea 
                      rows="3"
                      value={inquiryForm.message}
                      onChange={(e) => setInquiryForm({...inquiryForm, message: e.target.value})}
                      placeholder="Tell us about your academic background or achievements..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-secondary-blue transition-colors font-sans resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-3 rounded-xl font-semibold text-white bg-primary-navy hover:bg-secondary-blue transition-colors shadow flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>Submit Inquiry</span>
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}

            </div>
          </div>
        </div>
      </section>


      {/* 8. CONTACT SECTION (Anchor route from Navbar) */}
      <section id="contact" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            subtitle="Connect with Us" 
            title="Have Questions? We are Here to Help" 
            center={true} 
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl text-left space-y-4">
              <div className="p-3 bg-blue-100 text-secondary-blue rounded-xl w-fit">
                <BookOpen className="h-5 w-5" />
              </div>
              <h4 className="text-base font-bold text-primary-navy font-display">Admissions Office</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-sans">
                For questions concerning application guidelines, dates, requirements, or scholarship requests.
              </p>
              <div className="text-xs font-semibold text-primary-navy">
                <p>Email: admissions@vertex.edu</p>
                <p className="mt-1">Phone: +1 (800) 555-8378 Ext. 101</p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl text-left space-y-4">
              <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl w-fit">
                <Briefcase className="h-5 w-5" />
              </div>
              <h4 className="text-base font-bold text-primary-navy font-display">Corporate Relations & Career</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-sans">
                For partners looking to hire our graduates or host campus selection initiatives and recruitment bootcamps.
              </p>
              <div className="text-xs font-semibold text-primary-navy">
                <p>Email: placements@vertex.edu</p>
                <p className="mt-1">Phone: +1 (800) 555-8378 Ext. 204</p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl text-left space-y-4">
              <div className="p-3 bg-cyan-100 text-cyan-600 rounded-xl w-fit">
                <Award className="h-5 w-5" />
              </div>
              <h4 className="text-base font-bold text-primary-navy font-display">Research & Academic Alliances</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-sans">
                For university partnerships, exchange programs, joint research projects, and journal submissions.
              </p>
              <div className="text-xs font-semibold text-primary-navy">
                <p>Email: research@vertex.edu</p>
                <p className="mt-1">Phone: +1 (800) 555-8378 Ext. 302</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
