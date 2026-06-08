import { motion } from 'framer-motion';
import { 
  Compass, 
  Target, 
  BookOpen, 
  Briefcase, 
  Cpu, 
  Building,
  GraduationCap,
  Globe
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const About = () => {
  const timeline = [
    {
      year: '2012',
      title: 'Founding Year',
      desc: 'Vertex College of Engineering was established with a singular mission: to provide world-class engineering education and foster scientific curiosity.'
    },
    {
      year: '2015',
      title: 'Incubation Center Launch',
      desc: 'Partnered with key silicon valley incubators to set up our state-of-the-art innovation cells, allowing students to build early-stage start-ups.'
    },
    {
      year: '2018',
      title: 'ABET & International Accreditations',
      desc: 'Achieved premier global standards, establishing student exchange protocols with major European and Asian partner universities.'
    },
    {
      year: '2021',
      title: 'R&D Supercomputing Lab',
      desc: 'Commissioned our custom academic HPC node, accelerating student research in data architectures, autonomous AI, and astrophysics.'
    },
    {
      year: '2025',
      title: 'Vertex Tech Arena & Sports Complex',
      desc: 'Unveiled a multi-million-dollar tech coliseum and sporting complex to cultivate teamwork, innovation events, and student life.'
    }
  ];

  const faculty = [
    {
      name: 'Dr. Evelyn Sterling',
      role: 'Dean & Professor of Computer Science',
      desc: 'Ph.D. from MIT. Over 20 years of research experience in Deep Learning architectures and computational neural networks.',
      initials: 'ES'
    },
    {
      name: 'Dr. Marcus Vance',
      role: 'Head of Robotics & Mechatronics',
      desc: 'Ph.D. from Stanford. Former Chief R&D Engineer at NextGen Robotics, specializing in autonomous drone grids and kinematics.',
      initials: 'MV'
    },
    {
      name: 'Dr. Sarah Lin',
      role: 'Director of Industry Alliances',
      desc: 'Ph.D. from Berkeley. Specialized in semiconductor scaling and fostering strategic student internships with top tech giants.',
      initials: 'SL'
    },
    {
      name: 'Prof. Julian Brooks',
      role: 'Dean of Student Affairs',
      desc: 'M.S. from Georgia Tech. Dedicated to designing hackathons, cultural fests, leadership academies, and active student clubs.',
      initials: 'JB'
    }
  ];

  const galleryItems = [
    {
      title: 'Robotics Incubator',
      desc: 'Equipped with custom arm controllers, drone prototypes, and CNC scaling tools.',
      icon: Cpu,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Smart Library',
      desc: 'Housing over 100,000 research prints, private digital terminals, and collaborative hubs.',
      icon: BookOpen,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      title: 'Tech Arena',
      desc: 'A modern stadium setting for hosting national hackathons, esports fests, and expert sessions.',
      icon: Building,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Green Quadrangle',
      desc: 'Ecology-positive active space for relaxation, outdoor workgroups, and weekend cultural events.',
      icon: Globe,
      color: 'from-emerald-500 to-teal-600'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-primary-navy py-24 text-white">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <span className="text-xs font-bold bg-secondary-blue px-3.5 py-1.5 rounded-full tracking-widest uppercase text-white">
              Vertex Legacy
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold font-display leading-tight">
              About Vertex College of Engineering
            </h1>
            <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-sans font-light">
              Fostering a culture of academic rigor, industry-oriented innovation, and holistic student leadership in the heart of the Silicon Valley.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Our Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-50 border border-slate-100 rounded-3xl p-8 text-left space-y-6 relative overflow-hidden group hover:border-secondary-blue/20 transition-colors"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full translate-x-8 -translate-y-8" />
            <div className="p-4 bg-blue-100 text-secondary-blue rounded-2xl w-fit">
              <Compass className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold text-primary-navy font-display">Our Vision</h2>
            <p className="text-sm text-slate-500 leading-relaxed font-sans">
              To be recognized globally as an incubator for pioneering engineering education and technology leadership. We aim to nurture individuals who integrate analytical science with societal responsibility to build a robust, scalable, and progressive future.
            </p>
          </motion.div>

          {/* Our Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-50 border border-slate-100 rounded-3xl p-8 text-left space-y-6 relative overflow-hidden group hover:border-secondary-blue/20 transition-colors"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full translate-x-8 -translate-y-8" />
            <div className="p-4 bg-indigo-100 text-indigo-600 rounded-2xl w-fit">
              <Target className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold text-primary-navy font-display">Our Mission</h2>
            <p className="text-sm text-slate-500 leading-relaxed font-sans">
              Our mission is to engineer opportunities by integrating strict academic coursework with industry internships, providing state-of-the-art incubation infrastructure for student-led R&D, and implementing active mentorship models that transition scholars into industry champions.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Core Excellence Pillars */}
      <section className="py-20 bg-section-bg border-y border-slate-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Strategic Priorities" title="Foundations of Our Campus Excellence" center={true} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 text-left">
            
            {/* Pillar 1 */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3.5">
                <div className="p-2.5 bg-blue-50 text-secondary-blue rounded-xl">
                  <Building className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-primary-navy font-display">Campus Excellence</h3>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed font-sans pl-12">
                Our infrastructure features smart classrooms, high-fidelity engineering complexes, collaborative study pods, and extensive digital library networks to foster learning at every corner.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3.5">
                <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl">
                  <Briefcase className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-primary-navy font-display">Industry Partnerships</h3>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed font-sans pl-12">
                We coordinate closely with over 50 leading corporate firms to establish curriculum validation committees, masterclass schedules, and high-conversion recruitment pathways.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3.5">
                <div className="p-2.5 bg-cyan-50 text-cyan-600 rounded-xl">
                  <Cpu className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-primary-navy font-display">Innovation & Research</h3>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed font-sans pl-12">
                Students work on real-world research under direct guidance of credentialed faculty, writing research briefs, patent submissions, and open-source models in our advanced computing nodes.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3.5">
                <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-primary-navy font-display">Career Development</h3>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed font-sans pl-12">
                Our active pre-placement cell implements daily coding challenges, mock engineering panels, corporate dressing, and soft skills training to maximize placement success metrics.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* History & Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Our Journey" title="A History of Engineering Milestones" center={true} />

          <div className="relative border-l border-slate-200 mt-16 pl-8 space-y-12 text-left">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Bullet */}
                <div className="absolute left-[-42px] top-1.5 w-5 h-5 rounded-full bg-white border-4 border-secondary-blue flex items-center justify-center shadow" />
                
                <span className="text-xs font-extrabold text-secondary-blue tracking-widest font-display mb-1 block">
                  {item.year}
                </span>
                <h3 className="text-lg font-bold text-primary-navy mb-2 font-display">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership / Faculty Section */}
      <section className="py-24 bg-section-bg border-t border-slate-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Faculty & Board" title="Distinguished Academic Leaders" center={true} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 text-left">
            {faculty.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Initials placeholder for high end portrait mock */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-navy to-secondary-blue flex items-center justify-center text-white font-bold font-display text-lg shadow mb-4">
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-primary-navy font-display leading-tight">{member.name}</h3>
                    <p className="text-xs font-semibold text-secondary-blue uppercase tracking-wide mt-1">{member.role}</p>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans pt-2">
                    {member.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Life Virtual Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Campus Life" title="Explore Life Outside the Classroom" center={true} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 text-left">
            {galleryItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col justify-between hover:bg-white hover:shadow-xl hover:border-secondary-blue/30 transition-all duration-300 group"
                >
                  <div>
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center mb-6 shadow group-hover:scale-105 transition-transform`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-primary-navy font-display mb-2">{item.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
