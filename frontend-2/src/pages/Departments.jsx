import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  Users,
  FlaskConical,
  Award,
  ChevronDown,
  GraduationCap,
  Cpu,
  Zap,
  Globe,
  Shield,
  Cog,
  Building,
  Activity,
  Bot,
  Database,
  User
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const departmentsData = [
  {
    name: 'Computer Science & Engineering',
    code: 'CSE',
    icon: Cpu,
    color: 'from-blue-600 to-indigo-700',
    lightColor: 'bg-blue-50 text-blue-700 border-blue-200',
    hod: 'Dr. Rajan Subramaniam',
    established: 2001,
    facultyCount: 48,
    studentCount: 720,
    labsCount: 8,
    intake: 180,
    accreditation: 'NBA Accredited',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop',
    desc: 'Empowering students with core foundations in software engineering, machine learning, cloud computing, and full-stack development through industry-aligned curriculum.',
    specializations: ['Artificial Intelligence & ML', 'Cloud Computing & DevOps', 'Cyber Security', 'Data Engineering'],
    keySubjects: ['Data Structures & Algorithms', 'Operating Systems', 'DBMS', 'Computer Networks', 'Software Engineering'],
    labs: ['AI & Deep Learning Lab', 'Cloud Infrastructure Lab', 'Programming Lab (200 nodes)', 'Networking Lab', 'Cybersecurity Lab'],
    achievements: 'Best Department Award 2023 | 96% Placement Rate | 12 Published Research Papers',
    staff: [
      { name: 'Dr. Rajan Subramaniam', designation: 'Professor & HOD', specialization: 'Machine Learning, Big Data', experience: '22 yrs' },
      { name: 'Dr. Priya Krishnamurthy', designation: 'Associate Professor', specialization: 'Cloud Computing, DevOps', experience: '15 yrs' },
      { name: 'Mr. Arjun Nair', designation: 'Assistant Professor', specialization: 'Full Stack Development', experience: '8 yrs' },
      { name: 'Dr. Sneha Menon', designation: 'Associate Professor', specialization: 'Artificial Intelligence', experience: '12 yrs' },
      { name: 'Mr. Karthik Balaji', designation: 'Assistant Professor', specialization: 'Cybersecurity, Ethical Hacking', experience: '6 yrs' },
      { name: 'Ms. Deepa Ramachandran', designation: 'Assistant Professor', specialization: 'Web Technologies, React', experience: '5 yrs' },
    ]
  },
  {
    name: 'Artificial Intelligence & Data Science',
    code: 'AIDS',
    icon: Database,
    color: 'from-violet-600 to-purple-700',
    lightColor: 'bg-violet-50 text-violet-700 border-violet-200',
    hod: 'Dr. Meenakshi Venkat',
    established: 2020,
    facultyCount: 35,
    studentCount: 480,
    labsCount: 5,
    intake: 120,
    accreditation: 'AICTE Approved',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop',
    desc: 'Unlocking the future of neural computing, cognitive architectures, statistical modeling, and deep business intelligence to solve complex real-world data problems.',
    specializations: ['Deep Learning & Neural Networks', 'Natural Language Processing', 'Business Intelligence', 'Computer Vision'],
    keySubjects: ['Machine Learning', 'Deep Learning', 'Big Data Analytics', 'Python for AI', 'Statistics & Probability'],
    labs: ['AI Research Lab', 'Data Analytics Studio', 'NLP & Vision Lab', 'GPU Computing Lab', 'IoT Data Lab'],
    achievements: 'Emerging Department Award 2024 | 3 International Research Collaborations | 94% Placement',
    staff: [
      { name: 'Dr. Meenakshi Venkat', designation: 'Professor & HOD', specialization: 'Deep Learning, NLP', experience: '18 yrs' },
      { name: 'Dr. Suresh Babu', designation: 'Associate Professor', specialization: 'Computer Vision', experience: '14 yrs' },
      { name: 'Ms. Lakshmi Priya', designation: 'Assistant Professor', specialization: 'Business Analytics, Tableau', experience: '7 yrs' },
      { name: 'Mr. Rahul Sharma', designation: 'Assistant Professor', specialization: 'Python, TensorFlow, PyTorch', experience: '5 yrs' },
      { name: 'Dr. Kavitha Sundar', designation: 'Associate Professor', specialization: 'Statistical Modelling', experience: '11 yrs' },
    ]
  },
  {
    name: 'Information Technology',
    code: 'IT',
    icon: Globe,
    color: 'from-cyan-600 to-teal-700',
    lightColor: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    hod: 'Dr. Rajesh Pillai',
    established: 2003,
    facultyCount: 42,
    studentCount: 600,
    labsCount: 6,
    intake: 150,
    accreditation: 'NBA Accredited',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop',
    desc: 'Bridging enterprise software architectures, network administration, database integrity, mobile computing, and modern web application deployment at scale.',
    specializations: ['Enterprise Software Development', 'Network Administration', 'Mobile App Development', 'Database Management'],
    keySubjects: ['Web Technologies', 'Mobile Computing', 'Network Security', 'ERP Systems', 'Cloud Services'],
    labs: ['Software Development Lab', 'Network Lab', 'Mobile App Lab', 'Database Management Lab', 'IT Workshop'],
    achievements: 'ISO 9001:2015 Certified Programs | Industry MoUs with TCS & Infosys | 93% Placement Rate',
    staff: [
      { name: 'Dr. Rajesh Pillai', designation: 'Professor & HOD', specialization: 'Enterprise Architecture, ERP', experience: '20 yrs' },
      { name: 'Ms. Anitha Rajan', designation: 'Associate Professor', specialization: 'Mobile Computing, Android', experience: '13 yrs' },
      { name: 'Mr. Vijay Kumar', designation: 'Assistant Professor', specialization: 'Network Security, Cisco', experience: '9 yrs' },
      { name: 'Dr. Padma Iyer', designation: 'Associate Professor', specialization: 'Cloud Services, AWS', experience: '10 yrs' },
      { name: 'Mr. Siva Prasad', designation: 'Assistant Professor', specialization: 'Java, Spring Boot', experience: '6 yrs' },
    ]
  },
  {
    name: 'Electronics & Communication Engineering',
    code: 'ECE',
    icon: Zap,
    color: 'from-amber-600 to-orange-700',
    lightColor: 'bg-amber-50 text-amber-700 border-amber-200',
    hod: 'Dr. Clara Ramalingam',
    established: 2001,
    facultyCount: 45,
    studentCount: 640,
    labsCount: 7,
    intake: 160,
    accreditation: 'NBA Accredited',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
    desc: 'Innovating in VLSI circuit design, semiconductor fabrication, 5G wireless communication systems, embedded processing, and IoT edge device architectures.',
    specializations: ['VLSI Design', 'Embedded Systems & IoT', '5G & Wireless Communication', 'Signal & Image Processing'],
    keySubjects: ['Digital Electronics', 'Microprocessors & Controllers', 'VLSI Design', 'Communication Systems', 'IoT Architecture'],
    labs: ['VLSI Design Lab', 'Embedded Systems Lab', 'Communication Lab', 'Signal Processing Lab', 'IoT Prototyping Lab', 'PCB Fabrication Lab'],
    achievements: 'Best Research Department 2022 | 4 IEEE Publications | National VLSI Design Competition Winners',
    staff: [
      { name: 'Dr. Clara Ramalingam', designation: 'Professor & HOD', specialization: 'VLSI, Semiconductor Devices', experience: '21 yrs' },
      { name: 'Dr. Murugan Selvam', designation: 'Associate Professor', specialization: 'Embedded Systems, FPGA', experience: '16 yrs' },
      { name: 'Ms. Geetha Chandran', designation: 'Assistant Professor', specialization: 'IoT, LoRaWAN', experience: '7 yrs' },
      { name: 'Mr. Harish Babu', designation: 'Assistant Professor', specialization: '5G, Wireless Networks', experience: '5 yrs' },
      { name: 'Dr. Nalini Devi', designation: 'Associate Professor', specialization: 'Signal & Image Processing', experience: '12 yrs' },
      { name: 'Mr. Yuvaraj R', designation: 'Assistant Professor', specialization: 'Digital Communication, DSP', experience: '4 yrs' },
    ]
  },
  {
    name: 'Electrical & Electronics Engineering',
    code: 'EEE',
    icon: Zap,
    color: 'from-yellow-600 to-amber-700',
    lightColor: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    hod: 'Dr. Balakrishnan Nair',
    established: 2001,
    facultyCount: 38,
    studentCount: 520,
    labsCount: 6,
    intake: 130,
    accreditation: 'NBA Accredited',
    image: 'https://images.unsplash.com/photo-1509390836518-c6ecce2bc575?q=80&w=800&auto=format&fit=crop',
    desc: 'Shaping smart power grids, renewable energy systems, industrial automation controllers, drive circuit design, and high-voltage electrical system engineering.',
    specializations: ['Power Systems & Smart Grid', 'Renewable Energy Engineering', 'Industrial Drives & Automation', 'Power Electronics'],
    keySubjects: ['Electric Machines', 'Power Systems Analysis', 'Control Systems', 'Power Electronics', 'Renewable Energy'],
    labs: ['Electrical Machines Lab', 'Power Systems Lab', 'Control Systems Lab', 'Renewable Energy Lab', 'High Voltage Lab'],
    achievements: 'Green Campus Award | Solar Power Research Collaboration with MNRE | 91% Placement Rate',
    staff: [
      { name: 'Dr. Balakrishnan Nair', designation: 'Professor & HOD', specialization: 'Power Systems, Smart Grids', experience: '24 yrs' },
      { name: 'Dr. Selvi Krishnaswamy', designation: 'Associate Professor', specialization: 'Renewable Energy, Solar PV', experience: '15 yrs' },
      { name: 'Mr. Dinesh Kumar M', designation: 'Assistant Professor', specialization: 'Industrial Drives, VFD', experience: '8 yrs' },
      { name: 'Ms. Preethi Velayutham', designation: 'Assistant Professor', specialization: 'Power Electronics, Inverters', experience: '6 yrs' },
      { name: 'Dr. Elango Ponnusamy', designation: 'Associate Professor', specialization: 'Control Systems, MATLAB', experience: '13 yrs' },
    ]
  },
  {
    name: 'Mechanical Engineering',
    code: 'MECH',
    icon: Cog,
    color: 'from-slate-600 to-gray-800',
    lightColor: 'bg-slate-100 text-slate-700 border-slate-200',
    hod: 'Dr. Sridhar Venkatesan',
    established: 2001,
    facultyCount: 44,
    studentCount: 680,
    labsCount: 9,
    intake: 170,
    accreditation: 'NBA Accredited',
    image: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=800&auto=format&fit=crop',
    desc: 'Exploring thermodynamics, fluid mechanics, precision CAD/CAM manufacturing, industrial automation, and product lifecycle design using industry-grade software.',
    specializations: ['CAD/CAM & Product Design', 'Thermal & Fluid Systems', 'Manufacturing Technology', 'Industrial Automation'],
    keySubjects: ['Engineering Thermodynamics', 'Fluid Mechanics', 'Manufacturing Processes', 'Machine Design', 'CAD/CAM'],
    labs: ['CAD/CAM Lab', 'Fluid Mechanics Lab', 'Thermal Engineering Lab', 'Manufacturing Lab', 'Metrology Lab', 'Robotics Integration Lab', 'Workshop'],
    achievements: 'SAE Collegiate Design Series Participants | Industry MoU with BHEL | ANSYS Partnership for Simulation',
    staff: [
      { name: 'Dr. Sridhar Venkatesan', designation: 'Professor & HOD', specialization: 'CAD/CAM, Product Design', experience: '23 yrs' },
      { name: 'Dr. Anand Raman', designation: 'Associate Professor', specialization: 'Thermodynamics, Heat Transfer', experience: '17 yrs' },
      { name: 'Mr. Manikandan S', designation: 'Assistant Professor', specialization: 'Manufacturing, CNC', experience: '10 yrs' },
      { name: 'Ms. Kavitha Murugesan', designation: 'Assistant Professor', specialization: 'CATIA, SolidWorks', experience: '7 yrs' },
      { name: 'Dr. Ramesh Babu T', designation: 'Associate Professor', specialization: 'Fluid Mechanics, CFD', experience: '14 yrs' },
      { name: 'Mr. Gopal Krishnamoorthy', designation: 'Assistant Professor', specialization: 'Robotics, Industrial Automation', experience: '5 yrs' },
    ]
  },
  {
    name: 'Civil Engineering',
    code: 'CIVIL',
    icon: Building,
    color: 'from-emerald-600 to-green-700',
    lightColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    hod: 'Dr. Padmanabhan Iyer',
    established: 2001,
    facultyCount: 30,
    studentCount: 450,
    labsCount: 5,
    intake: 120,
    accreditation: 'NBA Accredited',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop',
    desc: 'Designing sustainable concrete structures, smart transport infrastructure, earthquake-resistant buildings, water management systems, and urban masterplanning.',
    specializations: ['Structural Engineering', 'Transportation Engineering', 'Environmental Engineering', 'Geotechnical Engineering'],
    keySubjects: ['Structural Analysis', 'Concrete Technology', 'Soil Mechanics', 'Environmental Engineering', 'Highway Engineering'],
    labs: ['Structural Lab', 'Geotechnical Lab', 'Environmental Lab', 'Surveying Lab', 'Concrete Technology Lab'],
    achievements: 'Smart Cities Project Partner | Green Building Design Award | STAAD.Pro Licensed Institute',
    staff: [
      { name: 'Dr. Padmanabhan Iyer', designation: 'Professor & HOD', specialization: 'Structural Engineering, STAAD', experience: '22 yrs' },
      { name: 'Dr. Revathi Nandagopal', designation: 'Associate Professor', specialization: 'Geotechnical, Foundation Design', experience: '15 yrs' },
      { name: 'Mr. Senthil Nathan K', designation: 'Assistant Professor', specialization: 'Transportation, Highway', experience: '9 yrs' },
      { name: 'Ms. Malathi Sundaram', designation: 'Assistant Professor', specialization: 'Environmental, Water Supply', experience: '6 yrs' },
      { name: 'Dr. Balachandran Sivam', designation: 'Associate Professor', specialization: 'Urban Planning, GIS', experience: '13 yrs' },
    ]
  },
  {
    name: 'Biomedical Engineering',
    code: 'BME',
    icon: Activity,
    color: 'from-rose-600 to-pink-700',
    lightColor: 'bg-rose-50 text-rose-700 border-rose-200',
    hod: 'Dr. Saranya Krishnan',
    established: 2008,
    facultyCount: 28,
    studentCount: 360,
    labsCount: 4,
    intake: 90,
    accreditation: 'AICTE Approved',
    image: 'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?q=80&w=800&auto=format&fit=crop',
    desc: 'Developing next-generation medical imaging devices, wearable biosensor chips, neural signal processing, prosthetic limb systems, and telemedicine platforms.',
    specializations: ['Medical Imaging & Diagnostics', 'Biosensors & Wearables', 'Neural Engineering', 'Rehabilitation Engineering'],
    keySubjects: ['Anatomy & Physiology', 'Medical Electronics', 'Biomechanics', 'Medical Imaging', 'Biosensors'],
    labs: ['Medical Electronics Lab', 'Biomedical Imaging Lab', 'Prosthetics Workshop', 'Clinical Simulation Lab'],
    achievements: 'Industry Partnership with Philips Healthcare | 3 Patent Applications Filed | Best Innovation Project 2023',
    staff: [
      { name: 'Dr. Saranya Krishnan', designation: 'Professor & HOD', specialization: 'Medical Imaging, MRI Systems', experience: '19 yrs' },
      { name: 'Dr. Kiran Mathew', designation: 'Associate Professor', specialization: 'Biosensors, Wearable Tech', experience: '12 yrs' },
      { name: 'Ms. Priya Dhandapani', designation: 'Assistant Professor', specialization: 'Clinical Engineering, EMG', experience: '7 yrs' },
      { name: 'Mr. Arun Babu', designation: 'Assistant Professor', specialization: 'Rehabilitation, Prosthetics', experience: '4 yrs' },
    ]
  },
  {
    name: 'Cyber Security',
    code: 'CY',
    icon: Shield,
    color: 'from-red-600 to-rose-700',
    lightColor: 'bg-red-50 text-red-700 border-red-200',
    hod: 'Dr. Anand Venkatraman',
    established: 2019,
    facultyCount: 32,
    studentCount: 400,
    labsCount: 4,
    intake: 100,
    accreditation: 'AICTE Approved',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop',
    desc: 'Securing digital infrastructure through ethical hacking, penetration testing, cryptographic protocols, digital forensics investigation, and SOC operations training.',
    specializations: ['Ethical Hacking & Pen Testing', 'Digital Forensics', 'Cryptography & Blockchain', 'SOC Operations'],
    keySubjects: ['Network Security', 'Ethical Hacking', 'Cryptography', 'Digital Forensics', 'Risk Management'],
    labs: ['Ethical Hacking Lab (Kali Linux)', 'Digital Forensics Lab', 'SOC Simulation Lab', 'Crypto & Blockchain Lab'],
    achievements: 'EC-Council ATC Partner | National Cyber Olympiad Finalists | CompTIA Licensed Training Center',
    staff: [
      { name: 'Dr. Anand Venkatraman', designation: 'Professor & HOD', specialization: 'Network Security, Pen Testing', experience: '17 yrs' },
      { name: 'Ms. Nithya Sundararajan', designation: 'Associate Professor', specialization: 'Digital Forensics, OSINT', experience: '11 yrs' },
      { name: 'Mr. Prasanna Kumar', designation: 'Assistant Professor', specialization: 'Ethical Hacking, CEH', experience: '6 yrs' },
      { name: 'Dr. Ravi Shankar', designation: 'Associate Professor', specialization: 'Cryptography, Blockchain', experience: '10 yrs' },
      { name: 'Ms. Lavanya Mohan', designation: 'Assistant Professor', specialization: 'SOC, SIEM Tools', experience: '4 yrs' },
    ]
  },
  {
    name: 'Robotics & Automation',
    code: 'RA',
    icon: Bot,
    color: 'from-indigo-600 to-blue-800',
    lightColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    hod: 'Dr. Suresh Narayanan',
    established: 2018,
    facultyCount: 34,
    studentCount: 420,
    labsCount: 5,
    intake: 110,
    accreditation: 'AICTE Approved',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop',
    desc: 'Pioneering humanoid robot kinematics, autonomous vehicle control, machine vision-guided systems, PLC-based industrial automation, and ROS middleware programming.',
    specializations: ['Robot Kinematics & Dynamics', 'Autonomous Systems & Drones', 'Machine Vision', 'Industrial PLC Automation'],
    keySubjects: ['Robot Programming (ROS)', 'PLC & SCADA', 'Machine Vision', 'Mechatronics', 'Autonomous Vehicles'],
    labs: ['Robotics Arena (6-DOF Robots)', 'PLC & SCADA Lab', 'Drone Flight Lab', 'Machine Vision Lab', 'Mechatronics Lab'],
    achievements: 'RoboSprint National Champions 2023 | ABB Robotics Partnership | 3 Startup Incubations in Automation',
    staff: [
      { name: 'Dr. Suresh Narayanan', designation: 'Professor & HOD', specialization: 'Robot Kinematics, ROS', experience: '16 yrs' },
      { name: 'Mr. Vivek Anand', designation: 'Associate Professor', specialization: 'Autonomous Vehicles, Drones', experience: '11 yrs' },
      { name: 'Ms. Sumitha Rajan', designation: 'Assistant Professor', specialization: 'PLC/SCADA, Industrial Auto.', experience: '7 yrs' },
      { name: 'Mr. Praveen Sivalingam', designation: 'Assistant Professor', specialization: 'Machine Vision, OpenCV', experience: '5 yrs' },
      { name: 'Dr. Chandrika Mohan', designation: 'Associate Professor', specialization: 'Mechatronics, Control Theory', experience: '12 yrs' },
    ]
  }
];

const Departments = () => {
  const [expandedCode, setExpandedCode] = useState(null);
  const [activeTab, setActiveTab] = useState({});

  const toggleExpand = (code) => {
    setExpandedCode(prev => prev === code ? null : code);
    setActiveTab(prev => ({ ...prev, [code]: prev[code] || 'details' }));
  };

  const setTab = (code, tab) => {
    setActiveTab(prev => ({ ...prev, [code]: tab }));
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-50">

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-primary-navy via-blue-900 to-indigo-900 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="space-y-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-blue-300 bg-blue-500/20 border border-blue-400/20">
                Vertex Academics
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight">
                Academic Departments
              </h1>
              <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
                10 specialized engineering departments — each with dedicated research labs, expert faculty, and industry-aligned curriculum designed to shape tomorrow's innovators.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 shrink-0">
              {[
                { value: '10', label: 'Departments' },
                { value: '376', label: 'Faculty' },
                { value: '5,270', label: 'Students' }
              ].map(s => (
                <div key={s.label} className="text-center bg-white/10 backdrop-blur border border-white/10 rounded-2xl px-5 py-4">
                  <span className="block text-2xl font-extrabold text-white font-display">{s.value}</span>
                  <span className="block text-[10px] text-slate-400 uppercase tracking-widest mt-0.5">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Department Cards */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {departmentsData.map((dept, index) => {
            const Icon = dept.icon;
            const isExpanded = expandedCode === dept.code;
            const tab = activeTab[dept.code] || 'details';

            return (
              <motion.div
                key={dept.code}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                layout
                className={`bg-white border rounded-3xl overflow-hidden shadow-sm transition-all duration-300 flex flex-col text-left ${
                  isExpanded ? 'border-blue-200 shadow-xl ring-1 ring-blue-100' : 'border-slate-200/60 hover:shadow-lg hover:-translate-y-1'
                }`}
              >
                {/* Card Image with gradient overlay */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={dept.image}
                    alt={dept.name}
                    className={`w-full h-full object-cover transition-transform duration-700 ${isExpanded ? 'scale-105' : 'group-hover:scale-105'}`}
                  />
                  {/* Dark gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${dept.color} opacity-75`} />
                  {/* Content over image */}
                  <div className="absolute inset-0 p-5 flex flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <div className="p-2.5 bg-white/20 backdrop-blur rounded-xl border border-white/20">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex flex-col items-end gap-1.5">
                        <span className="px-2.5 py-0.5 bg-white/95 font-mono font-bold text-xs rounded-lg text-primary-navy shadow">
                          {dept.code}
                        </span>
                        <span className="px-2 py-0.5 bg-black/30 backdrop-blur text-white text-[10px] font-semibold rounded-md border border-white/10">
                          {dept.accreditation}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-white font-display leading-tight drop-shadow-sm">
                        {dept.name}
                      </h3>
                      <p className="text-xs text-white/75 mt-0.5">Est. {dept.established} · Intake: {dept.intake}/yr</p>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col gap-4">
                  {/* HOD + desc */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 bg-slate-100 rounded-lg">
                        <User className="h-3.5 w-3.5 text-slate-500" />
                      </div>
                      <span className="text-xs text-slate-400">HOD: <span className="text-slate-700 font-semibold">{dept.hod}</span></span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">{dept.desc}</p>
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-2 border-t border-slate-100 pt-3 text-center">
                    <div>
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Faculty</span>
                      <span className="block text-lg font-extrabold text-primary-navy font-display">{dept.facultyCount}</span>
                    </div>
                    <div className="border-x border-slate-100">
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Students</span>
                      <span className="block text-lg font-extrabold text-primary-navy font-display">{dept.studentCount}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Labs</span>
                      <span className="block text-lg font-extrabold text-primary-navy font-display">{dept.labsCount}</span>
                    </div>
                  </div>

                  {/* Expand Toggle */}
                  <button
                    onClick={() => toggleExpand(dept.code)}
                    className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                      isExpanded
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-50 text-primary-navy hover:bg-blue-50 hover:text-blue-700 border border-slate-200'
                    }`}
                  >
                    <span>{isExpanded ? 'Show Less' : 'View Details & Staff'}</span>
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Expanded Panel */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        key="expanded"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pt-1 space-y-4">
                          {/* Tab Switcher */}
                          <div className="flex gap-1 bg-slate-100 rounded-xl p-1">
                            {['details', 'staff'].map(t => (
                              <button
                                key={t}
                                onClick={() => setTab(dept.code, t)}
                                className={`flex-1 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all duration-200 ${
                                  tab === t
                                    ? 'bg-white text-primary-navy shadow'
                                    : 'text-slate-500 hover:text-slate-700'
                                }`}
                              >
                                {t === 'details' ? '📚 Details' : '👨‍🏫 Faculty'}
                              </button>
                            ))}
                          </div>

                          {/* Details Tab */}
                          {tab === 'details' && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="space-y-4"
                            >
                              {/* Specializations */}
                              <div>
                                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Specializations</h4>
                                <div className="flex flex-wrap gap-1.5">
                                  {dept.specializations.map(s => (
                                    <span key={s} className={`px-2.5 py-1 rounded-lg text-[10px] font-semibold border ${dept.lightColor}`}>
                                      {s}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              {/* Key Subjects */}
                              <div>
                                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Key Subjects</h4>
                                <ul className="space-y-1">
                                  {dept.keySubjects.map(s => (
                                    <li key={s} className="flex items-center gap-2 text-xs text-slate-600">
                                      <span className="w-1.5 h-1.5 rounded-full bg-secondary-blue shrink-0" />
                                      {s}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Labs */}
                              <div>
                                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Research & Labs</h4>
                                <ul className="space-y-1">
                                  {dept.labs.map(l => (
                                    <li key={l} className="flex items-center gap-2 text-xs text-slate-600">
                                      <FlaskConical className="h-3 w-3 text-secondary-blue shrink-0" />
                                      {l}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Achievements */}
                              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-xl p-3">
                                <div className="flex items-start gap-2">
                                  <Award className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                                  <p className="text-[11px] text-amber-800 leading-relaxed font-medium">{dept.achievements}</p>
                                </div>
                              </div>
                            </motion.div>
                          )}

                          {/* Staff/Faculty Tab */}
                          {tab === 'staff' && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="space-y-2"
                            >
                              {dept.staff.map((member, i) => (
                                <div
                                  key={i}
                                  className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-colors"
                                >
                                  {/* Avatar initials */}
                                  <div className={`h-9 w-9 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 text-white bg-gradient-to-br ${dept.color}`}>
                                    {member.name.split(' ').filter(w => w.match(/^[A-Z]/)).slice(0, 2).map(w => w[0]).join('')}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-xs font-bold text-primary-navy truncate">{member.name}</p>
                                    <p className="text-[10px] text-slate-500 font-medium">{member.designation}</p>
                                    <p className="text-[10px] text-secondary-blue font-semibold mt-0.5 truncate">{member.specialization}</p>
                                  </div>
                                  <div className="text-right shrink-0">
                                    <span className="inline-block px-2 py-0.5 rounded-full bg-slate-100 text-[9px] font-bold text-slate-500 uppercase">{member.experience}</span>
                                  </div>
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Departments;
