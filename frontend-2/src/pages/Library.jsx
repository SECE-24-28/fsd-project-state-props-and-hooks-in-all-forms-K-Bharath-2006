import { motion } from 'framer-motion';
import { BookOpen, Wifi, Monitor, Clock, Search, Database, Users, ChevronRight, Star, FileText, Globe } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const stats = [
  { value: '1,00,000+', label: 'Books', icon: BookOpen, color: 'bg-blue-50 text-blue-600' },
  { value: '5,000+', label: 'Research Papers', icon: FileText, color: 'bg-violet-50 text-violet-600' },
  { value: '500+', label: 'Digital Journals', icon: Globe, color: 'bg-emerald-50 text-emerald-600' },
  { value: '24×7', label: 'Digital Access', icon: Clock, color: 'bg-amber-50 text-amber-600' },
];

const services = [
  {
    icon: Monitor,
    title: 'Digital Library Services',
    desc: 'Access IEEE Xplore, Springer, Elsevier, and DELNET databases with over 5 lakh e-books and research articles available on and off campus.',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    icon: Search,
    title: 'Research Resources',
    desc: 'Dedicated research assistance desks, citation management tools (Mendeley, Zotero), and interlibrary loan services for advanced scholars.',
    color: 'bg-violet-50 text-violet-600'
  },
  {
    icon: BookOpen,
    title: 'Reading Halls',
    desc: 'Three air-conditioned reading halls with 500+ seats, noise-controlled zones, dedicated group study cabins, and power outlets at every seat.',
    color: 'bg-emerald-50 text-emerald-600'
  },
  {
    icon: Database,
    title: 'E-Journals & Archives',
    desc: 'Institutional access to 500+ peer-reviewed e-journals across all engineering and science disciplines including current issues and 15-year archives.',
    color: 'bg-cyan-50 text-cyan-600'
  },
  {
    icon: Wifi,
    title: 'Wi-Fi Enabled Study Areas',
    desc: 'High-speed 10 Gbps campus-wide Wi-Fi with dedicated library zones offering uninterrupted connectivity for research and online learning.',
    color: 'bg-amber-50 text-amber-600'
  },
  {
    icon: Clock,
    title: '24×7 Digital Access',
    desc: 'Round-the-clock access to the digital library portal from any device. Physical library hours: 6:00 AM to 11:00 PM on all working days.',
    color: 'bg-rose-50 text-rose-600'
  },
];

const collections = [
  { category: 'Engineering & Technology', count: '45,000+', color: 'from-blue-600 to-indigo-700' },
  { category: 'Science & Mathematics', count: '18,000+', color: 'from-violet-600 to-purple-700' },
  { category: 'Management & Business', count: '12,000+', color: 'from-emerald-600 to-teal-700' },
  { category: 'Humanities & Languages', count: '8,000+', color: 'from-amber-600 to-orange-700' },
  { category: 'Reference & Encyclopedia', count: '6,500+', color: 'from-rose-600 to-pink-700' },
  { category: 'National & State Archives', count: '4,200+', color: 'from-slate-600 to-gray-800' },
];

const Library = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">

      {/* HERO */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden flex items-center">
        <img
          src="https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=1600&auto=format&fit=crop"
          alt="Central Library"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-navy/92 via-blue-900/80 to-indigo-900/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-blue-300 bg-blue-500/20 border border-blue-400/20 mb-4">
              Knowledge Hub
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight mb-4">
              Central Library
            </h1>
            <p className="text-base text-slate-300 max-w-2xl leading-relaxed">
              A world-class knowledge repository with over 1 lakh books, 500+ digital journals, and 24×7 online access — empowering research and academic excellence at Vertex College.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-primary-navy py-14 border-y border-slate-700/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className={`w-12 h-12 rounded-2xl ${s.color} flex items-center justify-center mx-auto mb-3`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="block text-3xl font-extrabold text-white font-display">{s.value}</span>
                  <span className="block text-xs text-slate-400 uppercase tracking-widest mt-1 font-semibold">{s.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-5 text-left"
            >
              <SectionTitle subtitle="Library Overview" title="A Legacy of Knowledge & Learning" />
              <p className="text-sm text-slate-600 leading-relaxed">
                Established in 2001, the Vertex Central Library spans 25,000 sq.ft. across three floors, housing one of the most comprehensive engineering literature collections in Tamil Nadu. Our library has been awarded the <strong>Best Engineering College Library</strong> by Tamil Nadu State Library Association in 2023.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                With dedicated sections for e-learning, language labs, periodicals, and a rare books archive, the library serves over 10,000 students and 500 faculty members across all disciplines, processing 1,500+ transactions daily.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {['DELNET Member', 'NAAC A+ Rated Resources', 'IEEE Xplore Access', 'NPTEL Integration'].map(b => (
                  <span key={b} className="px-3 py-1.5 bg-blue-50 text-blue-700 border border-blue-200 rounded-lg text-xs font-semibold">
                    ✓ {b}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl h-80"
            >
              <img
                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=800&auto=format&fit=crop"
                alt="Library Interior"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Services" title="Digital Library Services & Resources" center={true} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-14">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left"
                >
                  <div className={`w-12 h-12 rounded-xl ${s.color} flex items-center justify-center mb-4`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-bold text-primary-navy font-display mb-2">{s.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Collections" title="Our Library Collection by Category" center={true} />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 mt-14">
            {collections.map((c, i) => (
              <motion.div
                key={c.category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className={`bg-gradient-to-br ${c.color} rounded-2xl p-5 text-white text-center hover:scale-105 transition-transform duration-300 shadow-sm hover:shadow-xl`}
              >
                <p className="text-2xl font-extrabold font-display mb-1">{c.count}</p>
                <p className="text-[10px] text-white/80 font-semibold uppercase tracking-wide leading-tight">{c.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOURS */}
      <section className="py-16 bg-gradient-to-br from-primary-navy to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Star className="h-10 w-10 text-yellow-400 fill-yellow-400 mx-auto mb-4" />
          <h2 className="text-2xl font-extrabold font-display mb-6">Library Timings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { day: 'Monday – Friday', time: '6:00 AM – 11:00 PM', note: 'Full services' },
              { day: 'Saturday', time: '7:00 AM – 9:00 PM', note: 'All sections open' },
              { day: 'Digital Portal', time: '24×7 Available', note: 'Online access always' },
            ].map(t => (
              <div key={t.day} className="bg-white/10 backdrop-blur border border-white/10 rounded-2xl p-5">
                <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-1">{t.day}</p>
                <p className="text-xl font-extrabold text-white font-display">{t.time}</p>
                <p className="text-xs text-blue-300 mt-1">{t.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Library;
