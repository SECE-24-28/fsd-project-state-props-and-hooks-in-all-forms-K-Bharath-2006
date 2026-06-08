import { motion } from 'framer-motion';
import { Trophy, Users, Target, Star, ChevronRight, Dumbbell, Activity } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const facilities = [
  {
    name: 'Cricket Ground',
    desc: 'Full-size BCCI-standard cricket ground with manicured turf, net practice facilities, and floodlights for evening matches.',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=700&auto=format&fit=crop',
    color: 'from-emerald-600 to-green-700'
  },
  {
    name: 'Football Ground',
    desc: 'FIFA-spec synthetic turf football field with corner flags, goal posts, team dugouts, and drainage for year-round play.',
    image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?q=80&w=700&auto=format&fit=crop',
    color: 'from-lime-600 to-green-600'
  },
  {
    name: 'Basketball Court',
    desc: 'Two NBA-specification wooden-floor indoor basketball courts with electronic scoreboards and bleacher seating for 500 spectators.',
    image: 'https://images.unsplash.com/photo-1546519638405-a9b2de32ba1e?q=80&w=700&auto=format&fit=crop',
    color: 'from-orange-600 to-amber-600'
  },
  {
    name: 'Volleyball Court',
    desc: 'Regulation outdoor and indoor volleyball courts with sand pit practice areas and international-standard net systems.',
    image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=700&auto=format&fit=crop',
    color: 'from-blue-600 to-cyan-600'
  },
  {
    name: 'Indoor Stadium',
    desc: 'Multipurpose 2,000-seat indoor stadium hosting badminton, table tennis, chess competitions, and inter-college tournaments.',
    image: 'https://images.unsplash.com/photo-1585792180666-f7347c490ee2?q=80&w=700&auto=format&fit=crop',
    color: 'from-indigo-600 to-violet-700'
  },
  {
    name: 'Gymnasium',
    desc: 'State-of-the-art fitness center with 150+ equipment, cardio machines, free weight section, and certified personal trainers available daily.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=700&auto=format&fit=crop',
    color: 'from-slate-600 to-gray-800'
  },
  {
    name: 'Athletics Track',
    desc: '400m IAAF-certified synthetic running track with long jump pit, shot put, discus, and javelin fields for national-level training.',
    image: 'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?q=80&w=700&auto=format&fit=crop',
    color: 'from-red-600 to-rose-600'
  },
];

const achievements = [
  { year: '2024', event: 'South Zone Inter-University Cricket Championship', result: '🏆 Champions', desc: 'First time in college history reaching inter-university finals' },
  { year: '2023', event: 'Tamil Nadu State Athletics Meet (400m Relay)', result: '🥇 Gold Medal', desc: 'College relay team set a new state-level record' },
  { year: '2023', event: 'Anna University Zonal Basketball', result: '🥈 Runners-Up', desc: 'Back-to-back runners-up finishes in regional competition' },
  { year: '2022', event: 'National Badminton Championship (U-25)', result: '🥉 3rd Place', desc: 'Two players selected for state training camp' },
  { year: '2022', event: 'Inter-Engineering Football League (Chennai)', result: '🏆 Winners', desc: 'Undefeated in 8 matches across the tournament' },
];

const teams = [
  'Cricket', 'Football', 'Basketball', 'Volleyball', 'Badminton',
  'Table Tennis', 'Athletics', 'Swimming', 'Chess', 'Kabaddi',
  'Kho-Kho', 'Throwball', 'Tennis', 'Hockey', 'Boxing', 'Yoga'
];

const Sports = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">

      {/* HERO */}
      <section className="relative h-[65vh] min-h-[450px] overflow-hidden flex items-center">
        <img
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1600&auto=format&fit=crop"
          alt="Sports Complex"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-navy/90 via-indigo-900/80 to-emerald-900/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-emerald-300 bg-emerald-500/20 border border-emerald-400/20 mb-4">
              Athletics & Sports
            </span>
            <h1 className="text-5xl sm:text-6xl font-extrabold font-display tracking-tight mb-4">
              Sports & Fitness Center
            </h1>
            <p className="text-base text-slate-300 max-w-2xl leading-relaxed">
              World-class sports facilities nurturing champions across 25+ disciplines. From cricket grounds to gymnasiums — Vertex believes in building complete engineers who excel in mind and body.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-primary-navy py-14">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { value: '25+', label: 'Sports Teams', icon: Users },
            { value: '10+', label: 'Annual Competitions', icon: Target },
            { value: '5+', label: 'National Achievements', icon: Trophy },
            { value: '150+', label: 'Sports Scholarships', icon: Star },
          ].map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-2">
                  <Icon className="h-6 w-6 text-blue-300" />
                </div>
                <span className="block text-4xl font-extrabold text-white font-display">{s.value}</span>
                <span className="block text-xs text-slate-400 uppercase tracking-widest mt-1">{s.label}</span>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* FACILITIES GALLERY */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Facilities" title="World-Class Sports Infrastructure" center={true} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-14">
            {facilities.map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={f.image} alt={f.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-600" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${f.color} opacity-50 group-hover:opacity-70 transition-opacity`} />
                  <div className={`absolute inset-0 flex items-end p-4`}>
                    <h3 className="text-white font-extrabold text-lg font-display drop-shadow">{f.name}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
                  <button className="mt-3 inline-flex items-center space-x-1 text-xs font-bold text-secondary-blue hover:text-primary-navy transition-colors">
                    <span>Learn More</span><ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SPORTS TEAMS */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Teams" title="Our 25+ College Sports Teams" center={true} />
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {teams.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="px-4 py-2 bg-blue-50 text-secondary-blue border border-blue-200 rounded-full text-sm font-semibold hover:bg-primary-navy hover:text-white hover:border-primary-navy transition-all duration-200 cursor-default"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Track Record" title="National & State Level Achievements" center={true} />
          <div className="space-y-4 mt-14">
            {achievements.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-md transition-shadow flex items-start gap-5"
              >
                <div className="bg-primary-navy text-white text-xs font-bold px-3 py-1.5 rounded-xl shrink-0 font-mono">{a.year}</div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h4 className="text-sm font-bold text-primary-navy font-display">{a.event}</h4>
                    <span className="text-sm">{a.result}</span>
                  </div>
                  <p className="text-xs text-slate-500">{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GYM CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-navy to-indigo-900 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto px-4"
        >
          <Dumbbell className="h-12 w-12 text-blue-300 mx-auto mb-4" />
          <h2 className="text-3xl font-extrabold font-display mb-3">Join a Sports Team</h2>
          <p className="text-slate-300 mb-8 text-sm">Represent Vertex College in state and national competitions. Our coaches and trainers will guide you to your peak performance.</p>
          <a href="mailto:sports@vertex.edu" className="inline-flex items-center space-x-2 px-8 py-3.5 bg-white text-primary-navy rounded-2xl font-bold hover:bg-blue-50 transition-colors shadow-xl">
            <Activity className="h-5 w-5" />
            <span>Contact Sports Director</span>
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Sports;
