import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Briefcase, GraduationCap, Search } from 'lucide-react';

const facultyData = [
  {
    name: 'Dr. Evelyn Sterling',
    designation: 'Professor & HOD',
    department: 'Computer Science & Engineering',
    qualification: 'Ph.D. in Distributed Systems',
    experience: '18 Years',
    email: 'evelyn.sterling@vertex.edu',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop'
  },
  {
    name: 'Dr. Marcus Vance',
    designation: 'Professor & HOD',
    department: 'Artificial Intelligence & Data Science',
    qualification: 'Ph.D. in Neural Networks',
    experience: '15 Years',
    email: 'marcus.vance@vertex.edu',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop'
  },
  {
    name: 'Dr. Rajesh Pillai',
    designation: 'Professor & HOD',
    department: 'Information Technology',
    qualification: 'Ph.D. in Network Architectures',
    experience: '16 Years',
    email: 'rajesh.pillai@vertex.edu',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop'
  },
  {
    name: 'Dr. Clara Oswald',
    designation: 'Professor & HOD',
    department: 'Electronics & Communication Engineering',
    qualification: 'Ph.D. in VLSI Technology',
    experience: '14 Years',
    email: 'clara.oswald@vertex.edu',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop'
  },
  {
    name: 'Dr. Alan Turing',
    designation: 'Professor & HOD',
    department: 'Electrical & Electronics Engineering',
    qualification: 'Ph.D. in Smart Grid Computing',
    experience: '20 Years',
    email: 'alan.turing@vertex.edu',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop'
  },
  {
    name: 'Dr. Vikram Sarabhai',
    designation: 'Professor & HOD',
    department: 'Mechanical Engineering',
    qualification: 'Ph.D. in Thermal Sciences',
    experience: '19 Years',
    email: 'vikram.sarabhai@vertex.edu',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop'
  },
  {
    name: 'Dr. Visvesvaraya Naidu',
    designation: 'Professor & HOD',
    department: 'Civil Engineering',
    qualification: 'Ph.D. in Structural Dynamics',
    experience: '22 Years',
    email: 'visvesvaraya.naidu@vertex.edu',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop'
  },
  {
    name: 'Dr. Sarah Connor',
    designation: 'Professor & HOD',
    department: 'Biomedical Engineering',
    qualification: 'Ph.D. in Bio-Sensors',
    experience: '12 Years',
    email: 'sarah.connor@vertex.edu',
    photo: 'https://images.unsplash.com/photo-1594744803329-e58b31de215f?q=80&w=300&auto=format&fit=crop'
  },
  {
    name: 'Dr. Edward Snowden',
    designation: 'Professor & HOD',
    department: 'Cyber Security',
    qualification: 'Ph.D. in Cryptographic Protocols',
    experience: '11 Years',
    email: 'edward.snowden@vertex.edu',
    photo: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=300&auto=format&fit=crop'
  },
  {
    name: 'Dr. Nikola Tesla',
    designation: 'Professor & HOD',
    department: 'Robotics & Automation',
    qualification: 'Ph.D. in Autonomous Systems',
    experience: '17 Years',
    email: 'nikola.tesla@vertex.edu',
    photo: 'https://images.unsplash.com/photo-1628157582853-a796fa650a6a?q=80&w=300&auto=format&fit=crop'
  },
  {
    name: 'Prof. Arthur Pendragon',
    designation: 'Associate Professor',
    department: 'Computer Science & Engineering',
    qualification: 'M.Tech. in AI & ML',
    experience: '10 Years',
    email: 'arthur.pendragon@vertex.edu',
    photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=300&auto=format&fit=crop'
  },
  {
    name: 'Prof. Morgana Le Fay',
    designation: 'Assistant Professor',
    department: 'Artificial Intelligence & Data Science',
    qualification: 'M.S. in Machine Learning',
    experience: '8 Years',
    email: 'morgana.fay@vertex.edu',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop'
  },
  {
    name: 'Dr. John Watson',
    designation: 'Associate Professor',
    department: 'Biomedical Engineering',
    qualification: 'Ph.D. in Medical Diagnostics',
    experience: '9 Years',
    email: 'john.watson@vertex.edu',
    photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=300&auto=format&fit=crop'
  },
  {
    name: 'Prof. Sherlock Holmes',
    designation: 'Senior Lecturer',
    department: 'Cyber Security',
    qualification: 'M.S. in Threat Analysis',
    experience: '12 Years',
    email: 'sherlock.holmes@vertex.edu',
    photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=300&auto=format&fit=crop'
  },
  {
    name: 'Dr. Bruce Banner',
    designation: 'Professor',
    department: 'Electrical & Electronics Engineering',
    qualification: 'Ph.D. in High Voltage systems',
    experience: '14 Years',
    email: 'bruce.banner@vertex.edu',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop'
  },
  {
    name: 'Prof. Tony Stark',
    designation: 'Professor',
    department: 'Robotics & Automation',
    qualification: 'M.Tech. in Advanced Mechatronics',
    experience: '15 Years',
    email: 'tony.stark@vertex.edu',
    photo: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=300&auto=format&fit=crop'
  },
  {
    name: 'Dr. Peter Parker',
    designation: 'Assistant Professor',
    department: 'Electronics & Communication Engineering',
    qualification: 'Ph.D. in Micro-Sensors',
    experience: '5 Years',
    email: 'peter.parker@vertex.edu',
    photo: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=300&auto=format&fit=crop'
  },
  {
    name: 'Prof. Clark Kent',
    designation: 'Assistant Professor',
    department: 'Civil Engineering',
    qualification: 'M.Tech. in Earthquake Resistant Designs',
    experience: '7 Years',
    email: 'clark.kent@vertex.edu',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop'
  },
  {
    name: 'Dr. Diana Prince',
    designation: 'Associate Professor',
    department: 'Mechanical Engineering',
    qualification: 'Ph.D. in Composite Aerodynamics',
    experience: '13 Years',
    email: 'diana.prince@vertex.edu',
    photo: 'https://images.unsplash.com/photo-1558203728-00f45181dd84?q=80&w=300&auto=format&fit=crop'
  },
  {
    name: 'Prof. Barry Allen',
    designation: 'Lecturer',
    department: 'Information Technology',
    qualification: 'M.S. in Cloud Architecture Networks',
    experience: '4 Years',
    email: 'barry.allen@vertex.edu',
    photo: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=300&auto=format&fit=crop'
  }
];

const Faculty = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');

  const departments = ['All', ...new Set(facultyData.map(f => f.department))];

  const filteredFaculty = facultyData.filter(fac => {
    const matchesSearch = fac.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          fac.qualification.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDept = selectedDept === 'All' || fac.department === selectedDept;
    return matchesSearch && matchesDept;
  });

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-primary-navy to-secondary-blue py-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-3 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-300">Vertex Experts</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display">Faculty Directory</h1>
          <p className="text-sm text-slate-200 max-w-xl font-light leading-relaxed">
            Meet our esteemed panel of professors, researchers, and technical lecturers guiding future engineering milestones.
          </p>
        </div>
      </section>

      {/* Search and Filter Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="bg-white border border-slate-200/60 p-6 rounded-3xl shadow-sm flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          {/* Search bar */}
          <div className="relative flex-1 max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="h-5 w-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search faculty by name or qualification..."
              className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-secondary-blue transition-colors font-sans"
            />
          </div>

          {/* Department filter */}
          <div className="flex items-center space-x-3 shrink-0">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">Filter Dept:</span>
            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-secondary-blue font-sans text-primary-navy font-semibold cursor-pointer"
            >
              {departments.map(d => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Faculty Cards Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredFaculty.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredFaculty.map((fac, index) => (
              <motion.div
                key={fac.email}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.02 }}
                className="bg-white border border-slate-200/60 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between text-left group"
              >
                {/* Photo & Basic Details */}
                <div className="p-5 space-y-4">
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100">
                    <img
                      src={fac.photo}
                      alt={fac.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-primary-navy font-display group-hover:text-secondary-blue transition-colors leading-snug">
                      {fac.name}
                    </h3>
                    <span className="text-[10px] font-bold text-secondary-blue uppercase tracking-widest block font-sans">
                      {fac.designation}
                    </span>
                  </div>
                </div>

                {/* Additional Stats / Credentials */}
                <div className="px-5 pb-5 pt-3 border-t border-slate-50 bg-slate-50/40 space-y-2.5 text-xs text-slate-500 font-sans">
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="h-4 w-4 text-slate-400 shrink-0" />
                    <span className="truncate" title={fac.qualification}>{fac.qualification}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Briefcase className="h-4 w-4 text-slate-400 shrink-0" />
                    <span>Exp: {fac.experience}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[11px] font-medium text-slate-600 bg-white border border-slate-100/60 p-2 rounded-xl">
                    <Mail className="h-3.5 w-3.5 text-secondary-blue shrink-0" />
                    <a href={`mailto:${fac.email}`} className="hover:underline truncate">{fac.email}</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="bg-white border p-16 rounded-3xl text-center shadow-sm">
            <p className="text-slate-400 font-semibold">No faculty members found matching search parameters.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Faculty;
