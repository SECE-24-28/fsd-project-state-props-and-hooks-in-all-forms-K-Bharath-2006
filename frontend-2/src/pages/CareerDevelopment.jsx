import { motion } from 'framer-motion';
import {
  Briefcase,
  TrendingUp,
  Award,
  CheckCircle,
  ChevronRight,
  Users,
  Star,
  Building2,
  BookOpen,
  Code2,
  Mic,
  Globe,
  Target,
  DollarSign,
  BarChart3,
  Calendar,
  Trophy,
  MapPin,
  Cpu,
  Zap,
  Rocket,
  FlaskConical,
  Lightbulb
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const CareerDevelopment = () => {

  const placementProcess = [
    {
      step: '01',
      icon: BookOpen,
      title: 'Foundation Training',
      period: 'Semester 1 – 4',
      color: 'bg-blue-50 text-secondary-blue',
      border: 'border-blue-200',
      desc: 'Core technical curriculum covering Data Structures, Algorithms, DBMS, Operating Systems, and Computer Networks to build a strong conceptual base.',
      items: [
        'Daily coding challenges (LeetCode, HackerRank)',
        'Weekly competitive programming contests',
        'Structured MCQ-based aptitude modules',
        'Group project assignments on real datasets'
      ]
    },
    {
      step: '02',
      icon: Code2,
      title: 'Pre-Placement Bootcamps',
      period: 'Semester 5 – 6',
      color: 'bg-indigo-50 text-indigo-600',
      border: 'border-indigo-200',
      desc: 'Intensive bootcamps aligned with top-tier tech company hiring patterns. Students are grouped into domain tracks such as SDE, Data Analyst, and Product roles.',
      items: [
        'System Design workshops with industry architects',
        'Full-stack development sprints (MERN/Django)',
        'Machine Learning and AI integration labs',
        'Capstone project presentations to mentor panels'
      ]
    },
    {
      step: '03',
      icon: Mic,
      title: 'Soft Skills & Personality',
      period: 'Semester 5 – 7',
      color: 'bg-cyan-50 text-cyan-600',
      border: 'border-cyan-200',
      desc: 'Corporate communication, professional grooming, and behavioral interview preparation conducted by expert HR trainers and communication faculty.',
      items: [
        'Mock HR + Technical panel interviews',
        'Group discussion simulation rounds',
        'LinkedIn profile and resume crafting sessions',
        'Corporate etiquette and body language training'
      ]
    },
    {
      step: '04',
      icon: Globe,
      title: 'Industry Internships',
      period: 'Semester 6 (Summer)',
      color: 'bg-emerald-50 text-emerald-600',
      border: 'border-emerald-200',
      desc: 'Mandatory 2-month industrial internships with 150+ partner companies providing real-world project exposure and pre-placement offer opportunities.',
      items: [
        'Internships at MNCs, startups, and PSUs',
        'Industry mentor guidance throughout tenure',
        'Internship project report and viva evaluation',
        'Pre-Placement Offer (PPO) conversion tracking'
      ]
    },
    {
      step: '05',
      icon: Target,
      title: 'Final Placement Drive',
      period: 'Semester 7 – 8',
      color: 'bg-purple-50 text-purple-600',
      border: 'border-purple-200',
      desc: 'Structured company-specific placement drives with proctored aptitude tests, technical coding rounds, group discussions, and final HR negotiations.',
      items: [
        'Campus placement drives with 150+ companies',
        'Company-specific preparation modules',
        'On-campus offer letter and salary negotiation support',
        'Post-placement alumni mentoring program'
      ]
    }
  ];

  const placementRecords = [
    {
      year: '2024–25',
      highest: '₹42.5 LPA',
      average: '₹8.2 LPA',
      placed: '487',
      companies: '89',
      rate: '96%',
      highlight: 'Google (SWE Intern → FTE)',
      isCurrent: true
    },
    {
      year: '2023–24',
      highest: '₹36.8 LPA',
      average: '₹7.6 LPA',
      placed: '462',
      companies: '76',
      rate: '94%',
      highlight: 'Amazon, Infosys, Wipro',
      isCurrent: false
    },
    {
      year: '2022–23',
      highest: '₹28.5 LPA',
      average: '₹6.9 LPA',
      placed: '441',
      companies: '65',
      rate: '92%',
      highlight: 'Zoho, TCS Digital',
      isCurrent: false
    },
    {
      year: '2021–22',
      highest: '₹24.0 LPA',
      average: '₹6.1 LPA',
      placed: '398',
      companies: '58',
      rate: '90%',
      highlight: 'Cognizant, HCL Tech',
      isCurrent: false
    },
    {
      year: '2020–21',
      highest: '₹18.5 LPA',
      average: '₹5.4 LPA',
      placed: '345',
      companies: '44',
      rate: '87%',
      highlight: 'Infosys, TCS, Wipro',
      isCurrent: false
    }
  ];

  const topRecruiters = [
    { name: 'Google', sector: 'Tech Giant', gradient: 'from-blue-500 to-blue-700' },
    { name: 'Amazon', sector: 'E-Commerce & Cloud', gradient: 'from-orange-500 to-amber-600' },
    { name: 'Zoho Corp', sector: 'SaaS Enterprise', gradient: 'from-red-500 to-rose-600' },
    { name: 'Infosys', sector: 'IT Services', gradient: 'from-indigo-600 to-blue-700' },
    { name: 'TCS Digital', sector: 'Consulting & IT', gradient: 'from-cyan-600 to-blue-600' },
    { name: 'Wipro', sector: 'IT Services', gradient: 'from-slate-600 to-slate-800' },
    { name: 'Cognizant', sector: 'Digital Services', gradient: 'from-blue-700 to-indigo-700' },
    { name: 'HCL Tech', sector: 'IT Solutions', gradient: 'from-emerald-600 to-teal-700' },
    { name: 'Accenture', sector: 'Consulting', gradient: 'from-purple-600 to-indigo-600' },
    { name: 'Capgemini', sector: 'IT & Consulting', gradient: 'from-blue-400 to-sky-600' },
    { name: 'L&T Infotech', sector: 'Engineering IT', gradient: 'from-green-700 to-emerald-700' },
    { name: 'NTT Data', sector: 'IT Services', gradient: 'from-rose-700 to-red-700' }
  ];

  const stats = [
    { value: '96%', label: 'Placement Rate 2024', icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { value: '₹42.5L', label: 'Highest Package', icon: DollarSign, color: 'text-blue-600', bg: 'bg-blue-50' },
    { value: '150+', label: 'Recruiting Companies', icon: Building2, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { value: '2,300+', label: 'Alumni Placed (5 Yrs)', icon: Users, color: 'text-cyan-600', bg: 'bg-cyan-50' }
  ];

  return (
    <div className="pt-20">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-navy via-blue-900 to-indigo-900 py-24 lg:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-blue-400 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-indigo-400 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 border border-blue-400/30 px-4 py-1.5 rounded-full mb-6">
              <Trophy className="h-4 w-4 text-blue-300" />
              <span className="text-xs font-semibold text-blue-300 tracking-widest uppercase">Career & Placement Cell</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-display tracking-tight leading-tight mb-6">
              Launch Your Dream Career from
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-200">
                Vertex College
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed">
              Our dedicated Training & Placement Cell bridges the gap between academic excellence and industry readiness — with structured training, real internships, and direct hiring by top companies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="bg-white/10 backdrop-blur border border-white/10 rounded-2xl p-5 text-center">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-3">
                    <Icon className="h-5 w-5 text-blue-300" />
                  </div>
                  <span className="block text-3xl font-extrabold text-white font-display">{stat.value}</span>
                  <span className="block text-xs text-slate-400 mt-1 font-medium">{stat.label}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* PLACEMENT PROCEDURE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="5-Step Program"
            title="Our Structured Placement Process"
            center={true}
          />

          <div className="space-y-8 mt-12">
            {placementProcess.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col lg:flex-row items-start gap-6 bg-white border ${step.border} rounded-2xl p-6 hover:shadow-lg transition-all duration-300`}
                >
                  {/* Step Number + Icon */}
                  <div className="flex items-center space-x-4 lg:flex-col lg:items-center lg:space-x-0 lg:space-y-3 lg:w-28 shrink-0">
                    <div className={`w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="text-4xl font-extrabold text-slate-100 font-display">{step.step}</div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-left">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-primary-navy font-display">{step.title}</h3>
                      <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-500">
                        <Calendar className="h-3 w-3" />
                        <span>{step.period}</span>
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">{step.desc}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.items.map((item) => (
                        <li key={item} className="flex items-start space-x-2 text-xs text-slate-600">
                          <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* YEAR-WISE PLACEMENT RECORDS */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Track Record"
            title="Year-Wise Placement Statistics"
            center={true}
          />

          <div className="mt-12 overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full min-w-[700px] text-sm">
              <thead>
                <tr className="bg-primary-navy text-white">
                  <th className="text-left px-6 py-4 font-semibold text-xs uppercase tracking-widest">Batch Year</th>
                  <th className="text-center px-6 py-4 font-semibold text-xs uppercase tracking-widest">Highest Package</th>
                  <th className="text-center px-6 py-4 font-semibold text-xs uppercase tracking-widest">Avg. Package</th>
                  <th className="text-center px-6 py-4 font-semibold text-xs uppercase tracking-widest">Students Placed</th>
                  <th className="text-center px-6 py-4 font-semibold text-xs uppercase tracking-widest">Companies</th>
                  <th className="text-center px-6 py-4 font-semibold text-xs uppercase tracking-widest">Placement %</th>
                  <th className="text-left px-6 py-4 font-semibold text-xs uppercase tracking-widest">Top Recruiter</th>
                </tr>
              </thead>
              <tbody>
                {placementRecords.map((record, index) => (
                  <motion.tr
                    key={record.year}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className={`border-t border-slate-100 ${record.isCurrent ? 'bg-blue-50' : index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'} hover:bg-blue-50/60 transition-colors`}
                  >
                    <td className="px-6 py-4 font-bold text-primary-navy font-display">
                      {record.year}
                      {record.isCurrent && (
                        <span className="ml-2 inline-flex px-1.5 py-0.5 rounded text-[10px] font-bold bg-secondary-blue text-white uppercase tracking-wider">Latest</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="font-bold text-emerald-600">{record.highest}</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="font-semibold text-slate-700">{record.average}</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="font-semibold text-slate-700">{record.placed}</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="font-semibold text-slate-700">{record.companies}</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                        parseInt(record.rate) >= 95
                          ? 'bg-emerald-100 text-emerald-700'
                          : parseInt(record.rate) >= 90
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-amber-100 text-amber-700'
                      }`}>
                        {record.rate}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-500 text-xs">{record.highlight}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Trend Cards Below Table */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-emerald-200 rounded-2xl p-6 text-left shadow-sm"
            >
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl w-fit mb-4">
                <TrendingUp className="h-5 w-5" />
              </div>
              <h4 className="font-bold text-primary-navy font-display text-base mb-1">Consistent Growth</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Placement rates have improved every year from 87% in 2021 to 96% in 2024 — reflecting our commitment to training quality.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border border-blue-200 rounded-2xl p-6 text-left shadow-sm"
            >
              <div className="p-3 bg-blue-50 text-secondary-blue rounded-xl w-fit mb-4">
                <BarChart3 className="h-5 w-5" />
              </div>
              <h4 className="font-bold text-primary-navy font-display text-base mb-1">Rising Packages</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Average salary packages have grown by 52% in 5 years — from ₹5.4 LPA to ₹8.2 LPA — driven by tech sector demand.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white border border-indigo-200 rounded-2xl p-6 text-left shadow-sm"
            >
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl w-fit mb-4">
                <Building2 className="h-5 w-5" />
              </div>
              <h4 className="font-bold text-primary-navy font-display text-base mb-1">Expanding Network</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Recruiter count has doubled from 44 companies in 2021 to 89 in 2024, including Fortune 500 and FAANG-tier companies.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TOP RECRUITERS */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Our Partners"
            title="Top Companies That Hire Our Graduates"
            center={true}
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 mt-12">
            {topRecruiters.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-white border border-slate-200 rounded-2xl p-5 text-center hover:shadow-lg hover:border-secondary-blue/30 transition-all duration-300 cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${company.gradient} text-white font-extrabold text-base flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  {company.name.substring(0, 2).toUpperCase()}
                </div>
                <p className="text-sm font-bold text-primary-navy group-hover:text-secondary-blue transition-colors font-display leading-tight">{company.name}</p>
                <p className="text-[10px] text-slate-400 mt-0.5 uppercase tracking-wide font-medium">{company.sector}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Mark Your Calendar"
            title="Upcoming Events & Opportunities"
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-14">
            {[
              {
                icon: Zap,
                title: 'National Level Hackathon',
                date: '15 August 2026',
                location: 'Innovation Center',
                desc: '48-hour coding and innovation challenge open to all engineering students. Build solutions for real-world problems with prizes worth ₹5 Lakhs.',
                color: 'from-blue-600 to-indigo-700',
                lightColor: 'bg-blue-50 text-blue-600',
                tag: 'Hackathon'
              },
              {
                icon: Users,
                title: 'Industry Connect Workshop',
                date: '22 August 2026',
                location: 'Seminar Hall A',
                desc: 'One-on-one interaction with leading technology experts from Google, Zoho, and Infosys. Get career guidance and live Q&A sessions.',
                color: 'from-violet-600 to-purple-700',
                lightColor: 'bg-violet-50 text-violet-600',
                tag: 'Workshop'
              },
              {
                icon: Rocket,
                title: 'Placement Training Bootcamp',
                date: '01 September 2026',
                location: 'Career Development Cell',
                desc: 'Intensive 3-day technical and aptitude training exclusively for final-year students. Covers DSA, system design, and mock interviews.',
                color: 'from-emerald-600 to-teal-700',
                lightColor: 'bg-emerald-50 text-emerald-600',
                tag: 'Training'
              },
              {
                icon: FlaskConical,
                title: 'AI & Data Science Symposium',
                date: '10 September 2026',
                location: 'Research Auditorium',
                desc: 'Research paper presentations, industry guest talks, and live AI model demonstrations by faculty and student researchers.',
                color: 'from-amber-600 to-orange-700',
                lightColor: 'bg-amber-50 text-amber-600',
                tag: 'Symposium'
              },
              {
                icon: Briefcase,
                title: 'Internship Opportunity Drive',
                date: '18 September 2026',
                location: 'Placement Cell',
                desc: 'Internship recruitment drive from 30+ partner organizations. Roles in software development, data analysis, design, and management.',
                color: 'from-rose-600 to-pink-700',
                lightColor: 'bg-rose-50 text-rose-600',
                tag: 'Recruitment'
              },
            ].map((event, i) => {
              const Icon = event.icon;
              return (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 text-left flex flex-col"
                >
                  {/* Card Top Banner */}
                  <div className={`bg-gradient-to-br ${event.color} p-5 flex items-center justify-between`}>
                    <div className="p-3 bg-white/20 backdrop-blur rounded-xl border border-white/20">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-white/20 border border-white/20 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                      {event.tag}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-base font-extrabold text-primary-navy font-display mb-3 leading-tight">{event.title}</h3>

                    <div className="flex flex-col gap-1.5 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3.5 w-3.5 text-secondary-blue shrink-0" />
                        <span className="text-xs font-semibold text-slate-600">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5 text-secondary-blue shrink-0" />
                        <span className="text-xs text-slate-500">{event.location}</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 leading-relaxed flex-1">{event.desc}</p>

                    <button className={`mt-5 w-full py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r ${event.color} hover:opacity-90 transition-opacity shadow-sm hover:shadow-md`}>
                      Register Now →
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-gradient-to-br from-primary-navy to-blue-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Star className="h-10 w-10 text-yellow-400 fill-yellow-400 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display mb-4">
              Start Your Journey Towards Top-Tier Placements
            </h2>
            <p className="text-base text-slate-300 mb-8">
              Join Vertex College of Engineering and become part of a legacy of engineers who are shaping the world's most innovative companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#admissions"
                className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full font-semibold text-primary-navy bg-white hover:bg-slate-100 shadow-md transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Apply for Admission</span>
                <ChevronRight className="h-4 w-4" />
              </a>
              <a
                href="mailto:placements@vertex.edu"
                className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full font-semibold text-white border border-white/30 hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Briefcase className="h-4 w-4" />
                <span>Contact Placement Cell</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default CareerDevelopment;
