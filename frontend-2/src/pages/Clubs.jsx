import { motion } from 'framer-motion';
import { Code2, Cpu, Shield, Music, Camera, Palette, Lightbulb, Users, Star, ChevronRight, Mic2, Rocket } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const clubCategories = [
  {
    category: 'Technical Clubs',
    color: 'from-blue-600 to-indigo-700',
    lightColor: 'bg-blue-50 border-blue-200 text-blue-700',
    tagColor: 'bg-blue-600',
    clubs: [
      {
        name: 'Coding Club', icon: Code2, members: 420,
        desc: 'Weekly competitive programming contests, hackathons, and open-source contribution drives. Partners with CodeChef, HackerRank, and LeetCode.',
        activities: ['Weekly DSA Sessions', 'Competitive Programming', 'Open Source Sprints', 'CodeFest Annual Event'],
        founded: 2005, advisor: 'Dr. Priya Krishnamurthy'
      },
      {
        name: 'AI Club', icon: Cpu, members: 280,
        desc: 'Exploring machine learning, neural networks, and responsible AI through workshops, research reading circles, and Kaggle competition teams.',
        activities: ['Kaggle Team Participation', 'Paper Reading Circle', 'ML Workshop Series', 'AI Demo Day'],
        founded: 2019, advisor: 'Dr. Meenakshi Venkat'
      },
      {
        name: 'Robotics Club', icon: Cpu, members: 195,
        desc: 'Building autonomous robots for national competitions. Specialists in ROS, SLAM navigation, drone systems, and pick-and-place automation.',
        activities: ['Robocon Preparation', 'Drone Racing Events', 'Arduino/ROS Workshops', 'Annual Robomania'],
        founded: 2010, advisor: 'Dr. Suresh Narayanan'
      },
      {
        name: 'Cyber Security Club', icon: Shield, members: 160,
        desc: 'Ethical hacking, CTF challenge competitions, and digital forensics training for students interested in information security careers.',
        activities: ['CTF Competitions', 'Ethical Hacking Bootcamp', 'Bug Bounty Program', 'Security Awareness Week'],
        founded: 2020, advisor: 'Dr. Anand Venkatraman'
      },
    ]
  },
  {
    category: 'Cultural Clubs',
    color: 'from-rose-600 to-pink-700',
    lightColor: 'bg-rose-50 border-rose-200 text-rose-700',
    tagColor: 'bg-rose-600',
    clubs: [
      {
        name: 'Music Club', icon: Mic2, members: 340,
        desc: 'Carnatic, Hindustani, and Western music with professional-grade rehearsal studios, instruments, and an annual inter-college music fest "Swaranjali".',
        activities: ['Annual Swaranjali Fest', 'Inter-College Competitions', 'Flash Mob Events', 'Alumni Concert'],
        founded: 2003, advisor: 'Prof. Anitha Rajan'
      },
      {
        name: 'Dance Club', icon: Star, members: 290,
        desc: 'Classical Bharatanatyam, contemporary fusion, folk, and western dance forms. Performs at cultural fests and represents the college nationally.',
        activities: ['Klassique Annual Show', 'National Dance Competitions', 'Street Dance Battles', 'Choreography Workshops'],
        founded: 2004, advisor: 'Ms. Deepa Ramachandran'
      },
      {
        name: 'Photography Club', icon: Camera, members: 220,
        desc: 'Mastering composition, lighting, post-processing, and documentary photography. Hosts "FrameWork" — the annual photography exhibition.',
        activities: ['FrameWork Exhibition', 'Photo Walks', 'Campus Documentary Projects', 'Photo Editing Masterclass'],
        founded: 2012, advisor: 'Mr. Vivek Anand'
      },
      {
        name: 'Fine Arts Club', icon: Palette, members: 175,
        desc: 'Painting, sketching, digital art, and sculpture workshops culminating in the "Canvas" annual art showcase open to the public.',
        activities: ['Canvas Art Exhibition', 'Mural Projects', 'Digital Art Workshops', 'Sketch-A-Thon'],
        founded: 2006, advisor: 'Ms. Kavitha Murugesan'
      },
    ]
  },
  {
    category: 'Leadership & Innovation',
    color: 'from-amber-600 to-orange-700',
    lightColor: 'bg-amber-50 border-amber-200 text-amber-700',
    tagColor: 'bg-amber-600',
    clubs: [
      {
        name: 'Entrepreneurship Cell', icon: Rocket, members: 310,
        desc: 'Fostering the next generation of startups through ideation workshops, investor connects, mentoring sessions, and the annual "VentureX" startup pitch competition.',
        activities: ['VentureX Startup Pitch', 'Investor Connect', 'Business Plan Competition', 'Startup Mentoring'],
        founded: 2014, advisor: 'Dr. Balakrishnan Nair'
      },
      {
        name: 'Innovation Forum', icon: Lightbulb, members: 240,
        desc: 'Cross-disciplinary problem-solving through design thinking, hackathons, and social innovation challenges addressing real community problems.',
        activities: ['Design Thinking Bootcamp', 'Social Innovation Challenge', '24hr Innovation Hackathon', 'Patent Filing Workshops'],
        founded: 2016, advisor: 'Dr. Sridhar Venkatesan'
      },
      {
        name: 'Leadership Society', icon: Users, members: 185,
        desc: 'Developing strategic leadership, public speaking, debate, and organizational management skills through structured leadership development programs.',
        activities: ['TEDx VCE Events', 'MUN Conference', 'Leadership Summit', 'Debate Championships'],
        founded: 2008, advisor: 'Dr. Padmanabhan Iyer'
      },
    ]
  },
];

const Clubs = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">

      {/* HERO */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden flex items-center">
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop"
          alt="Student Clubs"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-navy/90 via-indigo-900/80 to-purple-900/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-purple-300 bg-purple-500/20 border border-purple-400/20 mb-4">
              Student Life
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight mb-4">
              Student Clubs & Activities
            </h1>
            <p className="text-base text-slate-300 max-w-2xl leading-relaxed">
              Beyond academics — 11 vibrant clubs across technical, cultural, and leadership domains with 2,800+ active members, bringing campus life to life every single day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-primary-navy py-14">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { value: '11', label: 'Active Clubs' },
            { value: '2,800+', label: 'Club Members' },
            { value: '50+', label: 'Events Per Year' },
            { value: '3', label: 'Club Categories' },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <span className="block text-4xl font-extrabold text-white font-display">{s.value}</span>
              <span className="block text-xs text-slate-400 uppercase tracking-widest mt-1">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CLUB CATEGORIES */}
      {clubCategories.map((cat, catIndex) => (
        <section
          key={cat.category}
          className={`py-24 ${catIndex % 2 === 0 ? 'bg-slate-50' : 'bg-white'} border-t border-slate-100`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-12">
              <div className={`h-1.5 w-12 rounded-full bg-gradient-to-r ${cat.color}`} />
              <h2 className="text-2xl font-extrabold text-primary-navy font-display">{cat.category}</h2>
              <div className={`h-1.5 flex-1 rounded-full bg-gradient-to-r ${cat.color} opacity-20`} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {cat.clubs.map((club, clubIndex) => {
                const Icon = club.icon;
                return (
                  <motion.div
                    key={club.name}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: clubIndex * 0.1 }}
                    className="bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left"
                  >
                    {/* Club Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-white`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-extrabold text-primary-navy font-display leading-tight">{club.name}</h3>
                          <p className="text-[10px] text-slate-400 font-semibold">Est. {club.founded} · Advisor: {club.advisor}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 bg-slate-100 px-3 py-1.5 rounded-full">
                        <Users className="h-3.5 w-3.5 text-slate-500" />
                        <span className="text-xs font-bold text-slate-600">{club.members}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-500 leading-relaxed mb-4">{club.desc}</p>

                    {/* Activities */}
                    <div className="mb-4">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Key Activities</p>
                      <div className="flex flex-wrap gap-1.5">
                        {club.activities.map(a => (
                          <span key={a} className={`px-2.5 py-1 border rounded-lg text-[10px] font-semibold ${cat.lightColor}`}>
                            {a}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className="inline-flex items-center space-x-1.5 text-xs font-bold text-secondary-blue hover:text-primary-navy transition-colors">
                      <span>Join This Club</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* JOIN CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-navy to-indigo-900 text-white text-center border-t border-slate-700/40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto px-4"
        >
          <Star className="h-10 w-10 text-yellow-400 fill-yellow-400 mx-auto mb-4" />
          <h2 className="text-3xl font-extrabold font-display mb-3">Join the Club Family</h2>
          <p className="text-slate-300 text-sm mb-8">Club registrations open every semester. Connect with the Student Affairs office or scan the QR code on your student ID to enroll.</p>
          <a href="mailto:clubs@vertex.edu" className="inline-flex items-center space-x-2 px-8 py-3.5 bg-white text-primary-navy rounded-2xl font-bold hover:bg-blue-50 transition-colors shadow-xl">
            <Users className="h-5 w-5" />
            <span>Contact Student Affairs</span>
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Clubs;
