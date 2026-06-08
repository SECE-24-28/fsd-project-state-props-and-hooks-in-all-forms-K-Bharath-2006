import { motion } from 'framer-motion';
import { 
  ShieldAlert, 
  Wifi, 
  Coffee, 
  Activity, 
  HeartPulse, 
  Gamepad2, 
  BookOpen, 
  Compass, 
  UserCheck 
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const hostelFeatures = [
  { title: '24x7 Security', desc: 'Secure biometric access control and continuous guard monitoring around gates.', icon: ShieldAlert, color: 'bg-red-50 text-red-600' },
  { title: 'High-Speed Wi-Fi', desc: 'Symmetrical gigabit connections across all lobby structures and individual dorm tables.', icon: Wifi, color: 'bg-blue-50 text-blue-600' },
  { title: 'Hygienic Dining Hall', desc: 'Balanced nutritious vegetarian and non-vegetarian menus cooked under clean standards.', icon: Coffee, color: 'bg-emerald-50 text-emerald-600' },
  { title: 'Laundry Facility', desc: 'High-capacity washing machines and professional laundry schedules for all residents.', icon: Compass, color: 'bg-indigo-50 text-indigo-600' },
  { title: 'Medical Assistance', desc: 'On-campus nursing station and dedicated emergency transport vehicles available 24x7.', icon: HeartPulse, color: 'bg-rose-50 text-rose-600' },
  { title: 'Recreation Hall', desc: 'Large screens and seating to support entertainment, talks, and community bonding.', icon: Activity, color: 'bg-purple-50 text-purple-600' },
  { title: 'Indoor Games', desc: 'Table tennis courts, chess tables, and carrom setups for student leisure activities.', icon: Gamepad2, color: 'bg-amber-50 text-amber-600' },
  { title: 'Study Rooms', desc: 'Dedicated silent zones to prepare for tests and execute group project assignments.', icon: BookOpen, color: 'bg-cyan-50 text-cyan-600' }
];

const galleryImages = [
  { title: 'Dormitory Rooms', url: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=600&auto=format&fit=crop', desc: 'Comfortable spaces with personal study desks and wardrobes.' },
  { title: 'Student Dining Hall', url: 'https://images.unsplash.com/photo-1567521463850-4939134bcd4a?q=80&w=600&auto=format&fit=crop', desc: 'Spacious and hygienic mess area serving fresh meals.' },
  { title: 'Silent Reading Hall', url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600&auto=format&fit=crop', desc: 'Peaceful reading tables stocked with tech periodicals.' },
  { title: 'Recreational Area & Gym', url: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=600&auto=format&fit=crop', desc: 'Integrated workouts center and athletic tables.' }
];

const Hostel = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      
      {/* Hero Header Section */}
      <section className="bg-gradient-to-r from-primary-navy to-secondary-blue py-20 text-white relative overflow-hidden text-center sm:text-left">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
          <div className="space-y-4 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-300">Campus Residence</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display">Campus Hostel Facilities</h1>
            <p className="text-sm text-slate-200 font-light leading-relaxed">
              Safe, Comfortable, and Student-Friendly Accommodation Facilities designed to support both academic goals and rich social learning.
            </p>
          </div>
          <div className="p-4 bg-white/10 rounded-3xl border border-white/10 shrink-0 text-center z-10 flex space-x-6">
            <div className="px-4 py-2">
              <span className="text-xs font-semibold text-blue-200 uppercase block">Total Capacity</span>
              <span className="text-2xl font-bold font-display mt-0.5 block">2,100+</span>
            </div>
            <div className="w-[1px] bg-white/10 self-stretch" />
            <div className="px-4 py-2">
              <span className="text-xs font-semibold text-blue-200 uppercase block">Total Rooms</span>
              <span className="text-2xl font-bold font-display mt-0.5 block">630+</span>
            </div>
          </div>
        </div>
      </section>

      {/* Boys & Girls Accommodations Overview */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Boys and Girls Dual Cards */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Boys Hostel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-slate-200/60 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 text-left"
          >
            <div className="relative h-60">
              <img
                src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=600&auto=format&fit=crop"
                alt="Boys Hostel Dorm"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-widest bg-blue-600 px-2 py-0.5 rounded-md">Boys Wing</span>
                <h3 className="text-xl font-bold font-display">Newton Residence Hall</h3>
              </div>
            </div>
            <div className="p-8 space-y-6">
              <div className="grid grid-cols-2 gap-4 text-center border-b border-slate-100 pb-5">
                <div className="bg-slate-50 p-3 rounded-2xl">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Student Capacity</span>
                  <span className="text-lg font-extrabold text-primary-navy font-display">1,200 Scholars</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-2xl">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Available Rooms</span>
                  <span className="text-lg font-extrabold text-primary-navy font-display">350 Rooms</span>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Newton Hall Amenities:</h4>
                <ul className="grid grid-cols-2 gap-2 text-xs text-slate-600 font-semibold font-sans">
                  <li className="flex items-center space-x-2"><Wifi className="h-4 w-4 text-blue-500 shrink-0" /> <span>High-Speed Wi-Fi</span></li>
                  <li className="flex items-center space-x-2"><BookOpen className="h-4 w-4 text-blue-500 shrink-0" /> <span>Silent Study Hall</span></li>
                  <li className="flex items-center space-x-2"><Activity className="h-4 w-4 text-blue-500 shrink-0" /> <span>Fully Equipped Gym</span></li>
                  <li className="flex items-center space-x-2"><Gamepad2 className="h-4 w-4 text-blue-500 shrink-0" /> <span>Recreation Area</span></li>
                  <li className="flex items-center space-x-2"><UserCheck className="h-4 w-4 text-blue-500 shrink-0" /> <span>Biometric Security</span></li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Girls Hostel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-slate-200/60 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 text-left"
          >
            <div className="relative h-60">
              <img
                src="https://images.unsplash.com/photo-1567521463850-4939134bcd4a?q=80&w=600&auto=format&fit=crop"
                alt="Girls Hostel Dining"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-widest bg-pink-600 px-2 py-0.5 rounded-md">Girls Wing</span>
                <h3 className="text-xl font-bold font-display">Curie Residence Hall</h3>
              </div>
            </div>
            <div className="p-8 space-y-6">
              <div className="grid grid-cols-2 gap-4 text-center border-b border-slate-100 pb-5">
                <div className="bg-slate-50 p-3 rounded-2xl">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Student Capacity</span>
                  <span className="text-lg font-extrabold text-primary-navy font-display">900 Scholars</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-2xl">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Available Rooms</span>
                  <span className="text-lg font-extrabold text-primary-navy font-display">280 Rooms</span>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Curie Hall Amenities:</h4>
                <ul className="grid grid-cols-2 gap-2 text-xs text-slate-600 font-semibold font-sans">
                  <li className="flex items-center space-x-2"><Wifi className="h-4 w-4 text-pink-500 shrink-0" /> <span>High-Speed Wi-Fi</span></li>
                  <li className="flex items-center space-x-2"><BookOpen className="h-4 w-4 text-pink-500 shrink-0" /> <span>Cozy Reading Hall</span></li>
                  <li className="flex items-center space-x-2"><HeartPulse className="h-4 w-4 text-pink-500 shrink-0" /> <span>Medical support 24/7</span></li>
                  <li className="flex items-center space-x-2"><ShieldAlert className="h-4 w-4 text-pink-500 shrink-0" /> <span>Surveillance Security</span></li>
                  <li className="flex items-center space-x-2"><UserCheck className="h-4 w-4 text-pink-500 shrink-0" /> <span>Biometric access</span></li>
                </ul>
              </div>
            </div>
          </motion.div>

        </section>

        {/* Feature Cards Grid */}
        <section className="space-y-10">
          <SectionTitle 
            subtitle="Campus Living Standards" 
            title="Premium Residence Hall Features" 
            center={true} 
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hostelFeatures.map((feat) => {
              const Icon = feat.icon;
              return (
                <div key={feat.title} className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm text-left space-y-3 hover:shadow-md transition-shadow">
                  <div className={`p-3 rounded-xl w-fit ${feat.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-sm font-bold text-primary-navy font-display">{feat.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans">{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Image Gallery */}
        <section className="space-y-10">
          <SectionTitle 
            subtitle="Campus Preview" 
            title="Hostel Facilities Image Gallery" 
            center={true} 
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((img) => (
              <div key={img.title} className="bg-white border border-slate-200/60 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow text-left group">
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 space-y-1">
                  <h4 className="text-xs font-bold text-primary-navy font-display">{img.title}</h4>
                  <p className="text-[10px] text-slate-400 font-sans leading-relaxed">{img.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};

export default Hostel;
