import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin, ChevronRight, ChevronLeft, Wifi, Award,
  Users, FlaskConical, BookOpen, Play, Pause,
  Navigation, Star, CheckCircle, ArrowRight, Monitor
} from 'lucide-react';

// ─── Tour Stops Data ────────────────────────────────────────────────────────
const tourStops = [
  {
    id: 1,
    name: 'Main Academic Block',
    shortName: 'Academic Block',
    tag: 'Academics',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1600&auto=format&fit=crop',
    thumbImage: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=400&auto=format&fit=crop',
    color: 'from-blue-700 to-indigo-800',
    accent: 'bg-blue-600',
    desc: 'The heart of Vertex College — a magnificent 7-storey contemporary academic tower spanning 1.2 lakh sq.ft. Housing 120+ smart classrooms, faculty research cabins, the Vice-Chancellor\'s office, and state-of-the-art seminar halls.',
    highlights: [
      '120+ ICT-enabled smart classrooms',
      '7 floors with panoramic campus views',
      'Central air-conditioning throughout',
      'High-speed gigabit fibre network'
    ],
    facts: [{ label: 'Area', value: '1.2L sq.ft' }, { label: 'Floors', value: '7' }, { label: 'Classrooms', value: '120+' }]
  },
  {
    id: 2,
    name: 'Innovation & Research Center',
    shortName: 'Innovation Hub',
    tag: 'Research',
    image: 'https://images.unsplash.com/photo-1581093804475-577d72e38aa0?q=80&w=1600&auto=format&fit=crop',
    thumbImage: 'https://images.unsplash.com/photo-1581093804475-577d72e38aa0?q=80&w=400&auto=format&fit=crop',
    color: 'from-violet-700 to-purple-800',
    accent: 'bg-violet-600',
    desc: 'A 30,000 sq.ft. dedicated innovation ecosystem designed to transform student ideas into real-world products. Features incubation cells, prototype workshops, 3D printing suites, and collaborative co-working zones for student entrepreneurs and faculty researchers.',
    highlights: [
      '20 startup incubation cabins',
      '3D printing & rapid prototyping lab',
      'VC pitch presentation studio',
      '3 active patent applications in 2024'
    ],
    facts: [{ label: 'Area', value: '30,000 sqft' }, { label: 'Startups', value: '20+' }, { label: 'Patents', value: '3' }]
  },
  {
    id: 3,
    name: 'Central Library',
    shortName: 'Library',
    tag: 'Knowledge',
    image: 'https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=1600&auto=format&fit=crop',
    thumbImage: 'https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=400&auto=format&fit=crop',
    color: 'from-emerald-700 to-teal-800',
    accent: 'bg-emerald-600',
    desc: 'One of Tamil Nadu\'s most comprehensive engineering libraries spanning 3 floors and 25,000 sq.ft. with over 1 lakh books, 500+ e-journals, IEEE Xplore access, DELNET membership, and 500 silent study seats with dedicated power outlets.',
    highlights: [
      '1,00,000+ books across all disciplines',
      '500+ e-journals & research databases',
      '24×7 digital portal access',
      'Winner: Best Library Award 2023'
    ],
    facts: [{ label: 'Books', value: '1L+' }, { label: 'E-Journals', value: '500+' }, { label: 'Seats', value: '500' }]
  },
  {
    id: 4,
    name: 'Smart Classrooms',
    shortName: 'Smart Class',
    tag: 'Technology',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1600&auto=format&fit=crop',
    thumbImage: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=400&auto=format&fit=crop',
    color: 'from-cyan-700 to-blue-800',
    accent: 'bg-cyan-600',
    desc: 'Every classroom at Vertex is a fully equipped 21st-century learning environment. 4K interactive smartboards, spatial surround-sound systems, HD lecture recording cameras, cloud-synced digital attendance, and real-time student engagement analytics.',
    highlights: [
      '4K interactive smartboards in all rooms',
      'HD camera-enabled lecture recording',
      'Cloud-synced biometric attendance',
      'Spatial audio systems for 60-seater halls'
    ],
    facts: [{ label: 'Smart Rooms', value: '100+' }, { label: 'Capacity', value: '60/room' }, { label: 'Year Upgraded', value: '2023' }]
  },
  {
    id: 5,
    name: 'Engineering Laboratories',
    shortName: 'Labs',
    tag: 'Labs',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
    thumbImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400&auto=format&fit=crop',
    color: 'from-amber-700 to-orange-800',
    accent: 'bg-amber-600',
    desc: 'Over 50 highly specialized research and teaching laboratories equipped with industry-grade apparatus. From GPU-powered AI computing clusters and VLSI chip fabrication labs to robotics arenas, embedded systems benches, and a live IoT environment.',
    highlights: [
      '50+ specialized research labs',
      'GPU computing cluster (8× NVIDIA A100)',
      'VLSI design & PCB fabrication suite',
      'Dedicated IoT edge device test environment'
    ],
    facts: [{ label: 'Labs', value: '50+' }, { label: 'GPU Nodes', value: '8' }, { label: 'Equipment Value', value: '₹12 Cr' }]
  },
  {
    id: 6,
    name: 'Student Activity Center',
    shortName: 'Activity Center',
    tag: 'Student Life',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop',
    thumbImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=400&auto=format&fit=crop',
    color: 'from-rose-700 to-pink-800',
    accent: 'bg-rose-600',
    desc: 'A vibrant 5,000-capacity multipurpose cultural hub that never sleeps. Home to our annual cultural festival "VERTEXIA", equipped with a professional proscenium stage, green rooms, club activity rooms, food court, and open-sky collaboration terraces.',
    highlights: [
      '5,000-capacity main auditorium stage',
      'Annual festival "VERTEXIA" hosted here',
      'Professional green rooms & backstage',
      '12 dedicated club activity rooms'
    ],
    facts: [{ label: 'Capacity', value: '5,000' }, { label: 'Club Rooms', value: '12' }, { label: 'Events/Year', value: '50+' }]
  },
  {
    id: 7,
    name: 'Sports Complex',
    shortName: 'Sports',
    tag: 'Sports',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1600&auto=format&fit=crop',
    thumbImage: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=400&auto=format&fit=crop',
    color: 'from-green-700 to-emerald-800',
    accent: 'bg-green-600',
    desc: 'Internationally-standard sports facilities spread across 15 acres. Cricket grounds, synthetic football turf, NBA-spec basketball courts, 400m athletics track, and a state-of-the-art gymnasium. Home to 25+ college teams competing at national level.',
    highlights: [
      'BCCI-standard cricket ground with floodlights',
      'FIFA-spec synthetic football turf',
      '400m IAAF-certified athletics track',
      '150+ equipment professional gymnasium'
    ],
    facts: [{ label: 'Sports Area', value: '15 acres' }, { label: 'Teams', value: '25+' }, { label: 'Sports', value: '16+' }]
  },
  {
    id: 8,
    name: 'Residential Campus',
    shortName: 'Hostel',
    tag: 'Hostel',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1600&auto=format&fit=crop',
    thumbImage: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=400&auto=format&fit=crop',
    color: 'from-slate-700 to-gray-800',
    accent: 'bg-slate-600',
    desc: 'Fully self-contained residential campus with separate Boys (1,200 capacity) and Girls (900 capacity) hostels. All rooms air-conditioned with biometric access, high-speed Wi-Fi, round-the-clock security, multi-cuisine dining, and recreational facilities.',
    highlights: [
      '2,100 total residential capacity',
      'Fully air-conditioned rooms with study desks',
      '24×7 biometric entry security',
      'Multi-cuisine dining hall — 3 meals daily'
    ],
    facts: [{ label: 'Capacity', value: '2,100' }, { label: 'Boys Block', value: '1,200' }, { label: 'Girls Block', value: '900' }]
  },
  {
    id: 9,
    name: 'Open Green Campus',
    shortName: 'Green Campus',
    tag: 'Eco Campus',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1600&auto=format&fit=crop',
    thumbImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=400&auto=format&fit=crop',
    color: 'from-lime-700 to-green-800',
    accent: 'bg-lime-600',
    desc: 'A breathtaking 150-acre lush green campus awarded the "Green Campus of the Year 2023." Features botanical gardens, solar power generation, rainwater harvesting systems, open-air amphitheaters, meditation gardens, and over 10,000 indigenous tree species.',
    highlights: [
      '150-acre lush green campus',
      '10,000+ indigenous trees planted',
      'Solar-powered 40% of campus energy',
      'Rainwater harvesting — 5 lakh litres'
    ],
    facts: [{ label: 'Campus Area', value: '150 acres' }, { label: 'Trees', value: '10,000+' }, { label: 'Solar Power', value: '40%' }]
  },
];

// ─── Campus Stats ─────────────────────────────────────────────────────────────
const campusStats = [
  { value: '150', suffix: ' Acres', label: 'Green Campus', icon: '🌿' },
  { value: '10,000', suffix: '+', label: 'Students', icon: '🎓' },
  { value: '500', suffix: '+', label: 'Faculty', icon: '👨‍🏫' },
  { value: '50', suffix: '+', label: 'Laboratories', icon: '🔬' },
];

// ─── Animated Counter ─────────────────────────────────────────────────────────
const useCounter = (target, started) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!started) return;
    const num = parseInt(target.replace(/,/g, ''));
    let start = null;
    const duration = 1800;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setVal(Math.floor(p * num));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, started]);
  return val;
};

// ─── Main Component ────────────────────────────────────────────────────────────
const CampusTour = () => {
  const [currentStop, setCurrentStop] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);
  const [countersStarted, setCountersStarted] = useState(false);
  const [navVisible, setNavVisible] = useState(false);
  const statsRef = useRef(null);
  const intervalRef = useRef(null);

  // Auto-play
  useEffect(() => {
    if (autoPlay) {
      intervalRef.current = setInterval(() => {
        setCurrentStop(prev => (prev + 1) % tourStops.length);
      }, 4000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [autoPlay]);

  // Intersection observer for stats
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setCountersStarted(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  // Sticky nav pill visibility
  useEffect(() => {
    const onScroll = () => setNavVisible(window.scrollY > 420);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const c0 = useCounter('150', countersStarted);
  const c1 = useCounter('10000', countersStarted);
  const c2 = useCounter('500', countersStarted);
  const c3 = useCounter('50', countersStarted);

  const stop = tourStops[currentStop];
  const next = () => setCurrentStop((prev) => (prev + 1) % tourStops.length);
  const prev = () => setCurrentStop((prev) => (prev - 1 + tourStops.length) % tourStops.length);

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* ── STICKY TOUR STOP NAVIGATOR ──────────────────────────────────── */}
      <AnimatePresence>
        {navVisible && (
          <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            className="fixed top-0 left-0 right-0 z-[60] bg-slate-950/95 backdrop-blur border-b border-white/10 py-3 px-4"
          >
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest shrink-0">
                Stop {currentStop + 1}/{tourStops.length}
              </span>
              <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-hide">
                {tourStops.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => setCurrentStop(i)}
                    className={`shrink-0 px-3 py-1.5 rounded-full text-[11px] font-bold transition-all duration-200 ${
                      i === currentStop
                        ? 'bg-white text-slate-900'
                        : 'text-slate-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {s.shortName}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setAutoPlay(!autoPlay)}
                className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  autoPlay ? 'bg-white text-slate-900' : 'border border-white/20 text-slate-400 hover:text-white'
                }`}
              >
                {autoPlay ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
                {autoPlay ? 'Pause' : 'Auto'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── CINEMATIC HERO ──────────────────────────────────────────────── */}
      <section className="relative h-screen min-h-[700px] flex flex-col justify-end overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1920&auto=format&fit=crop"
            alt="Vertex College Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-slate-950/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white/10 border border-white/20 backdrop-blur-sm text-blue-300">
                <Navigation className="h-3 w-3" />
                Virtual Campus Tour
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-white/10 border border-white/20 backdrop-blur-sm text-slate-300">
                {tourStops.length} Stops · 150 Acres
              </span>
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black font-display tracking-tight leading-none mb-6">
              Explore
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300">
                Our Campus
              </span>
            </h1>
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed mb-10">
              Take an immersive virtual journey through Vertex College of Engineering — a 150-acre world-class campus built for the engineers of tomorrow.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => { setCurrentStop(0); document.getElementById('tour-viewer')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold text-base shadow-2xl hover:bg-blue-50 transition-colors"
              >
                <Play className="h-5 w-5 fill-slate-900" />
                Start Tour
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setAutoPlay(!autoPlay)}
                className="inline-flex items-center gap-2 px-6 py-4 border border-white/30 text-white rounded-2xl font-semibold text-sm backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Auto-tour Mode
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-2 opacity-50"
        >
          <span className="text-[10px] text-white font-semibold uppercase tracking-widest" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
          <div className="w-0.5 h-12 bg-white/40 rounded-full relative overflow-hidden">
            <div className="w-full h-4 bg-white absolute top-0 animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* ── TOUR STOPS STRIP ────────────────────────────────────────────── */}
      <section className="bg-slate-950 border-y border-white/5 py-6 overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 px-6 min-w-max mx-auto justify-center">
          {tourStops.map((s, i) => (
            <motion.button
              key={s.id}
              whileHover={{ y: -3 }}
              onClick={() => {
                setCurrentStop(i);
                document.getElementById('tour-viewer')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`flex flex-col items-center gap-2 px-4 py-3 rounded-2xl transition-all duration-200 border ${
                i === currentStop
                  ? 'bg-white text-slate-900 border-white'
                  : 'border-white/10 text-slate-400 hover:border-white/30 hover:text-white'
              }`}
            >
              <span className={`text-xs font-black font-mono ${i === currentStop ? 'text-slate-900' : 'text-slate-500'}`}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-xs font-semibold whitespace-nowrap">{s.shortName}</span>
            </motion.button>
          ))}
        </div>
      </section>

      {/* ── MAIN TOUR VIEWER ────────────────────────────────────────────── */}
      <section id="tour-viewer" className="relative bg-slate-950">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* CINEMATIC IMAGE */}
            <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
              <img
                src={stop.image}
                alt={stop.name}
                className="w-full h-full object-cover"
              />
              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

              {/* Stop Badge */}
              <div className="absolute top-8 left-8 flex items-center gap-3">
                <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${stop.color} flex items-center justify-center`}>
                  <span className="text-2xl font-black text-white">{String(currentStop + 1).padStart(2, '0')}</span>
                </div>
                <div>
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-white ${stop.accent} mb-1`}>
                    {stop.tag}
                  </span>
                  <p className="text-white/60 text-xs font-semibold">Stop {currentStop + 1} of {tourStops.length}</p>
                </div>
              </div>

              {/* Quick Facts on image */}
              <div className="absolute bottom-10 right-8 flex gap-3">
                {stop.facts.map(f => (
                  <div key={f.label} className="bg-black/50 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 text-center">
                    <p className="text-lg font-extrabold text-white font-display">{f.value}</p>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest">{f.label}</p>
                  </div>
                ))}
              </div>

              {/* Nav Arrows */}
              <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none px-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={prev}
                  className="pointer-events-auto w-12 h-12 rounded-full bg-black/40 border border-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <ChevronLeft className="h-5 w-5 text-white" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={next}
                  className="pointer-events-auto w-12 h-12 rounded-full bg-black/40 border border-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <ChevronRight className="h-5 w-5 text-white" />
                </motion.button>
              </div>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10">
                <motion.div
                  key={currentStop}
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentStop + 1) / tourStops.length) * 100}%` }}
                  transition={{ duration: 0.4 }}
                  className="h-full bg-white"
                />
              </div>
            </div>

            {/* ── STOP DETAIL PANEL ── */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                {/* Left: Main Content */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight mb-3">
                      {stop.name}
                    </h2>
                    <p className="text-base text-slate-400 leading-relaxed">{stop.desc}</p>
                  </div>

                  {/* Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {stop.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                        <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-300 leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex items-center gap-4 pt-2">
                    <button
                      onClick={prev}
                      className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 text-slate-400 rounded-xl text-sm font-semibold hover:text-white hover:border-white/40 transition-colors"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Previous Stop
                    </button>
                    <button
                      onClick={next}
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-slate-900 rounded-xl text-sm font-bold hover:bg-blue-50 transition-colors"
                    >
                      Next Stop
                      <ChevronRight className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setAutoPlay(!autoPlay)}
                      className={`ml-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                        autoPlay
                          ? 'bg-emerald-500 text-white'
                          : 'border border-white/20 text-slate-400 hover:text-white'
                      }`}
                    >
                      {autoPlay ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                      {autoPlay ? 'Pause Tour' : 'Auto Tour'}
                    </button>
                  </div>
                </div>

                {/* Right: Tour Stops Sidebar */}
                <div className="lg:col-span-5 space-y-2">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">All Tour Stops</p>
                  {tourStops.map((s, i) => (
                    <motion.button
                      key={s.id}
                      whileHover={{ x: 4 }}
                      onClick={() => setCurrentStop(i)}
                      className={`w-full flex items-center gap-4 p-3.5 rounded-2xl text-left transition-all duration-200 border ${
                        i === currentStop
                          ? 'bg-white/10 border-white/20 text-white'
                          : 'border-transparent hover:bg-white/5 hover:border-white/10 text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      {/* Thumb */}
                      <div className="h-12 w-16 rounded-xl overflow-hidden shrink-0">
                        <img src={s.thumbImage} alt={s.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold leading-tight truncate">{s.name}</p>
                        <p className={`text-[10px] font-semibold uppercase tracking-wider mt-0.5 ${i === currentStop ? 'text-blue-400' : 'text-slate-600'}`}>{s.tag}</p>
                      </div>
                      <span className={`text-xs font-mono font-bold shrink-0 ${i === currentStop ? 'text-white' : 'text-slate-700'}`}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ── DOT INDICATOR STRIP ─────────────────────────────────────────── */}
      <div className="flex justify-center gap-2 py-6 bg-slate-950 border-t border-white/5">
        {tourStops.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentStop(i)}
            className={`transition-all duration-300 rounded-full ${
              i === currentStop ? 'w-8 h-2 bg-white' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* ── CAMPUS STATS ────────────────────────────────────────────────── */}
      <section ref={statsRef} className="py-24 bg-gradient-to-br from-slate-900 to-slate-950 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">By The Numbers</span>
            <h2 className="text-4xl font-extrabold text-white font-display mt-2">Campus at a Glance</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              { counter: c0, suffix: ' Acres', label: 'Green Campus', sub: 'Eco-certified', emoji: '🌿' },
              { counter: c1, suffix: '+', label: 'Students', sub: 'Active Scholars', emoji: '🎓' },
              { counter: c2, suffix: '+', label: 'Faculty', sub: 'Expert Professors', emoji: '👨‍🏫' },
              { counter: c3, suffix: '+', label: 'Laboratories', sub: 'Research Labs', emoji: '🔬' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <span className="text-4xl mb-3 block">{s.emoji}</span>
                <p className="text-4xl sm:text-5xl font-extrabold text-white font-display">
                  {s.counter.toLocaleString()}{s.suffix}
                </p>
                <p className="text-base font-bold text-white/80 mt-1">{s.label}</p>
                <p className="text-xs text-slate-500 mt-0.5">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAMPUS HIGHLIGHTS GRID ──────────────────────────────────────── */}
      <section className="py-24 bg-slate-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Infrastructure</span>
            <h2 className="text-4xl font-extrabold text-white font-display mt-2">World-Class Facilities</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: Monitor, value: '100+', label: 'Smart Classrooms', color: 'bg-blue-500/10 border-blue-500/20 text-blue-400' },
              { icon: FlaskConical, value: '50+', label: 'Research Labs', color: 'bg-violet-500/10 border-violet-500/20 text-violet-400' },
              { icon: BookOpen, value: '1L+', label: 'Library Books', color: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' },
              { icon: Wifi, value: '100%', label: 'Wi-Fi Coverage', color: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400' },
              { icon: Star, value: '25+', label: 'Sports Teams', color: 'bg-amber-500/10 border-amber-500/20 text-amber-400' },
              { icon: Users, value: '11', label: 'Student Clubs', color: 'bg-rose-500/10 border-rose-500/20 text-rose-400' },
            ].map((h, i) => {
              const Icon = h.icon;
              return (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className={`border ${h.color} rounded-2xl p-5 text-center hover:scale-105 transition-transform duration-300`}
                >
                  <div className={`w-10 h-10 rounded-xl ${h.color} flex items-center justify-center mx-auto mb-3`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-2xl font-extrabold text-white font-display">{h.value}</p>
                  <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wide mt-1 leading-tight">{h.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 border-t border-white/5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto px-4"
        >
          <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-6">
            <MapPin className="h-8 w-8 text-blue-300" />
          </div>
          <h2 className="text-4xl font-extrabold font-display text-white mb-4">Experience It In Person</h2>
          <p className="text-slate-300 text-base leading-relaxed mb-10">
            A virtual tour only shows you half the picture. Visit Vertex College in person and feel the energy of 10,000+ students, world-class labs, and a campus designed to inspire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:admissions@vertex.edu"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold text-base hover:bg-blue-50 transition-colors shadow-xl"
            >
              <MapPin className="h-5 w-5" />
              Schedule a Visit
            </a>
            <a
              href="/#admissions"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white rounded-2xl font-bold text-base hover:bg-white/10 transition-colors"
            >
              Apply for Admission
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default CampusTour;
