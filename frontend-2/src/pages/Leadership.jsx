import { motion } from 'framer-motion';
import { GraduationCap, Quote } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const leaders = [
  {
    role: 'Chairman',
    name: 'Dr. Arthur Vertex',
    qualification: 'Ph.D. in Computer Engineering & Entrepreneurship',
    message: 'Empowering the minds of tomorrow through deep technical research, state-of-the-art laboratory infrastructure, and values-driven institutional integrity.',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop'
  },
  {
    role: 'Principal',
    name: 'Dr. Stephen Hawking',
    qualification: 'Ph.D. in Physics & Quantum Computation',
    message: 'Academic discipline, outcome-based education, and strategic global collaborations guarantee that our graduates transition effortlessly into tier-1 tech careers.',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop'
  },
  {
    role: 'Vice Principal',
    name: 'Dr. Grace Hopper',
    qualification: 'Ph.D. in Software Architectures & Compilers',
    message: 'Innovation thrives when academic rigor meets hands-on practical experimentation. We build compiler cells and modern software labs to shape creative leaders.',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop'
  },
  {
    role: 'Dean Academics',
    name: 'Dr. Richard Feynman',
    qualification: 'Ph.D. in Applied Mathematics & Electromagnetism',
    message: 'Our curriculum is continuously evolved with expert industry advisory boards to ensure engineering practices align with active industry changes.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop'
  },
  {
    role: 'Dean Student Affairs',
    name: 'Dr. Katherine Johnson',
    qualification: 'Ph.D. in Aerospace Guidance Systems',
    message: 'We champion a vibrant campus ecosystem full of student-led clubs, tech hackathons, athletic circles, and community building activities.',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop'
  }
];

const Leadership = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50 text-left">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-primary-navy to-secondary-blue py-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-3 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-300">Vertex Board</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display">College Leadership</h1>
          <p className="text-sm text-slate-200 max-w-xl font-light leading-relaxed">
            Meet the visionary leaders guiding the academic roadmap, research guidelines, and student development plans of Vertex.
          </p>
        </div>
      </section>

      {/* Leadership Directory */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* HOD / Chairman Main Card */}
        <section className="bg-white border border-slate-200/60 rounded-3xl p-8 lg:p-12 shadow-sm hover:shadow-lg transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 aspect-square rounded-2xl overflow-hidden bg-slate-100 max-w-sm mx-auto w-full">
            <img
              src={leaders[0].photo}
              alt={leaders[0].name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary-blue bg-blue-50 px-3 py-1 rounded-full w-fit">
                {leaders[0].role}
              </span>
              <h2 className="text-2xl font-extrabold text-primary-navy font-display">{leaders[0].name}</h2>
              <div className="flex items-center space-x-2 text-xs text-slate-400 font-semibold font-sans">
                <GraduationCap className="h-4.5 w-4.5 text-slate-400 shrink-0" />
                <span>{leaders[0].qualification}</span>
              </div>
            </div>

            <div className="relative p-5 bg-slate-50/50 border border-slate-100 rounded-2xl">
              <Quote className="absolute top-2 left-2 h-8 w-8 text-slate-200 pointer-events-none" />
              <p className="text-slate-600 text-sm leading-relaxed italic pl-6 font-sans relative z-10">
                "{leaders[0].message}"
              </p>
            </div>
          </div>
        </section>

        {/* Other Members Grid */}
        <section className="space-y-10">
          <SectionTitle 
            subtitle="Executive Cabinet" 
            title="Administration Board Members" 
            center={true} 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leaders.slice(1).map((lead, index) => (
              <motion.div
                key={lead.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white border border-slate-200/60 p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 sm:grid-cols-12 gap-6 items-start text-left"
              >
                <div className="sm:col-span-4 aspect-square rounded-2xl overflow-hidden bg-slate-100 shrink-0">
                  <img
                    src={lead.photo}
                    alt={lead.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="sm:col-span-8 space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-secondary-blue block">
                      {lead.role}
                    </span>
                    <h3 className="text-base font-bold text-primary-navy font-display leading-tight">{lead.name}</h3>
                    <div className="flex items-center space-x-1.5 text-[10px] text-slate-400 font-semibold font-sans">
                      <GraduationCap className="h-3.5 w-3.5" />
                      <span className="truncate" title={lead.qualification}>{lead.qualification}</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans font-light">
                    "{lead.message}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};

export default Leadership;
