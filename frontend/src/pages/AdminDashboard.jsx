import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, 
  UserCheck, 
  Calendar, 
  Award, 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  AlertCircle, 
  Settings as SettingsIcon,
  RefreshCw,
  Info
} from 'lucide-react';

import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import DashboardCard from '../components/DashboardCard';
import Table from '../components/Table';
import Modal from '../components/Modal';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [currentUser] = useState(() => {
    return JSON.parse(localStorage.getItem('currentUser')) || null;
  });

  // Responsive Layout States
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Active Menu Tab
  const [activeTab, setActiveTab] = useState('Dashboard');

  // Database States
  const [students, setStudents] = useState(() => {
    return JSON.parse(localStorage.getItem('students') || '[]');
  });
  const [staffs, setStaffs] = useState(() => {
    return JSON.parse(localStorage.getItem('staffs') || '[]');
  });
  const [subjects] = useState(() => {
    return JSON.parse(localStorage.getItem('subjects') || '[]');
  });

  // Search filter
  const [searchQuery, setSearchQuery] = useState('');

  // Modals & Selected items
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedStaff, setSelectedStaff] = useState(null);

  const [isStudentModalOpen, setIsStudentModalOpen] = useState(false); // Used for both Add & Edit
  const [isStaffModalOpen, setIsStaffModalOpen] = useState(false);     // Used for both Add & Edit
  
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const [deleteType, setDeleteType] = useState(''); // 'student' | 'staff'
  const [deleteId, setDeleteId] = useState('');

  // Form states
  const [studentForm, setStudentForm] = useState({
    name: '',
    email: '',
    rollNumber: '',
    department: 'Computer Science & Engineering',
    year: '1',
    password: ''
  });

  const [staffForm, setStaffForm] = useState({
    name: '',
    email: '',
    department: 'Computer Science & Engineering',
    subject: 'Computer Science',
    password: ''
  });

  const [formError, setFormError] = useState('');

  // Load user session check
  useEffect(() => {
    if (!currentUser || currentUser.role !== 'admin') {
      navigate('/erp-login');
    }
  }, [currentUser, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/erp-login');
  };

  // Helper stats calculations
  const totalStudents = students.length;
  const totalStaffs = staffs.length;
  
  const avgAttendance = students.length 
    ? Math.round(students.reduce((acc, curr) => acc + (Number(curr.attendance) || 0), 0) / students.length)
    : 0;

  const avgMarks = students.length
    ? Math.round(students.reduce((acc, curr) => acc + (Number(curr.marks) || 0), 0) / students.length)
    : 0;

  // Student CRUD operations
  const openAddStudent = () => {
    setSelectedStudent(null);
    setStudentForm({
      name: '',
      email: '',
      rollNumber: '',
      department: 'Computer Science & Engineering',
      year: '1',
      password: ''
    });
    setFormError('');
    setIsStudentModalOpen(true);
  };

  const openEditStudent = (student) => {
    setSelectedStudent(student);
    setStudentForm({
      name: student.name,
      email: student.email,
      rollNumber: student.rollNumber,
      department: student.department,
      year: student.year,
      password: student.password
    });
    setFormError('');
    setIsStudentModalOpen(true);
  };

  const handleStudentSubmit = (e) => {
    e.preventDefault();
    setFormError('');

    // Validations
    if (!studentForm.name.trim() || !studentForm.email.trim() || !studentForm.rollNumber.trim() || !studentForm.password) {
      setFormError('All fields are required.');
      return;
    }

    let updatedStudents = [...students];

    if (selectedStudent) {
      // Edit mode
      // Check for roll number duplicates excluding current student
      const duplicate = students.find(s => s.rollNumber.toLowerCase() === studentForm.rollNumber.toLowerCase() && s.id !== selectedStudent.id);
      if (duplicate) {
        setFormError('Roll number already exists.');
        return;
      }

      updatedStudents = students.map(s => s.id === selectedStudent.id ? {
        ...s,
        name: studentForm.name,
        email: studentForm.email,
        rollNumber: studentForm.rollNumber,
        department: studentForm.department,
        year: studentForm.year,
        password: studentForm.password
      } : s);
    } else {
      // Add mode
      const duplicate = students.find(s => s.rollNumber.toLowerCase() === studentForm.rollNumber.toLowerCase());
      if (duplicate) {
        setFormError('Roll number already exists.');
        return;
      }

      const newStudent = {
        id: `stud-${Date.now()}`,
        name: studentForm.name,
        email: studentForm.email,
        rollNumber: studentForm.rollNumber,
        department: studentForm.department,
        year: studentForm.year,
        password: studentForm.password,
        attendance: 0,
        marks: 0,
        remarks: ''
      };
      updatedStudents.push(newStudent);
    }

    localStorage.setItem('students', JSON.stringify(updatedStudents));
    setStudents(updatedStudents);
    setIsStudentModalOpen(false);
  };

  // Staff CRUD operations
  const openAddStaff = () => {
    setSelectedStaff(null);
    setStaffForm({
      name: '',
      email: '',
      department: 'Computer Science & Engineering',
      subject: 'Computer Science',
      password: ''
    });
    setFormError('');
    setIsStaffModalOpen(true);
  };

  const openEditStaff = (staff) => {
    setSelectedStaff(staff);
    setStaffForm({
      name: staff.name,
      email: staff.email,
      department: staff.department,
      subject: staff.subject || 'Computer Science',
      password: staff.password
    });
    setFormError('');
    setIsStaffModalOpen(true);
  };

  const handleStaffSubmit = (e) => {
    e.preventDefault();
    setFormError('');

    // Validations
    if (!staffForm.name.trim() || !staffForm.email.trim() || !staffForm.password) {
      setFormError('All fields are required.');
      return;
    }

    let updatedStaffs = [...staffs];

    if (selectedStaff) {
      // Edit
      updatedStaffs = staffs.map(s => s.id === selectedStaff.id ? {
        ...s,
        name: staffForm.name,
        email: staffForm.email,
        department: staffForm.department,
        subject: staffForm.subject,
        password: staffForm.password
      } : s);
    } else {
      // Add
      const newStaff = {
        id: `staff-${Date.now()}`,
        name: staffForm.name,
        email: staffForm.email,
        department: staffForm.department,
        subject: staffForm.subject,
        password: staffForm.password
      };
      updatedStaffs.push(newStaff);
    }

    localStorage.setItem('staffs', JSON.stringify(updatedStaffs));
    setStaffs(updatedStaffs);
    setIsStaffModalOpen(false);
  };

  // Delete Actions
  const triggerDelete = (type, id) => {
    setDeleteType(type);
    setDeleteId(id);
    setIsDeleteConfirmOpen(true);
  };

  const confirmDelete = () => {
    if (deleteType === 'student') {
      const updated = students.filter(s => s.id !== deleteId);
      localStorage.setItem('students', JSON.stringify(updated));
      setStudents(updated);
    } else if (deleteType === 'staff') {
      const updated = staffs.filter(s => s.id !== deleteId);
      localStorage.setItem('staffs', JSON.stringify(updated));
      setStaffs(updated);
    }
    setIsDeleteConfirmOpen(false);
  };

  // Reset Portal database to default state
  const handleResetDatabase = () => {
    localStorage.removeItem('students');
    localStorage.removeItem('staffs');
    localStorage.removeItem('admin');
    localStorage.removeItem('marks');
    localStorage.removeItem('attendance');
    localStorage.removeItem('subjects');
    // Clear session user & force relogin to trigger reseeding
    localStorage.removeItem('currentUser');
    navigate('/erp-login');
  };

  // Search filtering lists
  const filteredStudents = students.filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    s.rollNumber.toLowerCase().includes(searchQuery.toLowerCase()) || 
    s.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredStaffs = staffs.filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    s.department.toLowerCase().includes(searchQuery.toLowerCase()) || 
    s.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
      
      {/*Collapsible Sidebar Navigation */}
      <Sidebar 
        role="admin" 
        activeTab={activeTab} 
        setActiveTab={(tab) => {
          setActiveTab(tab);
          setSearchQuery(''); // Reset search when switching tab
        }}
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={setIsSidebarCollapsed}
        isMobileOpen={isMobileSidebarOpen}
        setIsMobileOpen={setIsMobileSidebarOpen}
        onLogout={handleLogout}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        <Topbar 
          title={`Admin Dashboard — ${activeTab}`} 
          user={currentUser} 
          role="admin"
          setIsMobileOpen={setIsMobileSidebarOpen}
          onLogout={handleLogout}
        />

        {/* Scrollable Body */}
        <main className="flex-grow p-6 overflow-y-auto">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'Dashboard' && (
            <div className="space-y-8 animate-fade-in">
              {/* Stat Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <DashboardCard 
                  title="Total Students" 
                  value={totalStudents} 
                  icon={Users} 
                  colorClass="bg-blue-50 text-secondary-blue" 
                  detail="Enrolled scholars"
                />
                <DashboardCard 
                  title="Total Staffs" 
                  value={totalStaffs} 
                  icon={UserCheck} 
                  colorClass="bg-indigo-50 text-indigo-600" 
                  detail="Faculty instructors"
                />
                <DashboardCard 
                  title="Attendance Average" 
                  value={`${avgAttendance}%`} 
                  icon={Calendar} 
                  colorClass="bg-emerald-50 text-emerald-600" 
                  detail="Across all departments"
                />
                <DashboardCard 
                  title="Average Mark Score" 
                  value={`${avgMarks}/100`} 
                  icon={Award} 
                  colorClass="bg-cyan-50 text-cyan-600" 
                  detail="Standard term evaluations"
                />
              </div>

              {/* Portal System Overview Summary Info Box */}
              <div className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm text-left space-y-4">
                <div className="flex items-center space-x-2 text-secondary-blue">
                  <Info className="h-5 w-5" />
                  <h3 className="text-base font-bold text-primary-navy font-display">System Overview</h3>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed max-w-3xl">
                  Welcome to the Vertex College ERP Administrative Control Suite. As an administrator, you have complete authority to manage student registries, register teaching staff, audit attendance benchmarks, and inspect general scores. Change records or reset databases via the settings console.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex flex-col justify-center">
                    <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Active Term</span>
                    <span className="text-sm font-bold text-primary-navy mt-1">Odd Semester 2026</span>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex flex-col justify-center">
                    <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Operational Mode</span>
                    <span className="text-sm font-bold text-emerald-600 mt-1">Local Storage Mode</span>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex flex-col justify-center">
                    <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">System Clock</span>
                    <span className="text-sm font-bold text-primary-navy mt-1">GMT +5:30 Online</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: STUDENTS REGISTRY */}
          {activeTab === 'Students' && (
            <div className="space-y-6 animate-fade-in text-left">
              {/* Header Action Tools */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="relative flex-1 max-w-md">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Search className="h-4.5 w-4.5" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search students by Name, Roll No, Dept..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-secondary-blue focus:ring-4 focus:ring-blue-50/50 bg-white font-sans transition-all duration-300"
                  />
                </div>
                <button
                  onClick={openAddStudent}
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-secondary-blue hover:bg-blue-700 transition-colors shadow-sm cursor-pointer"
                >
                  <Plus className="h-4 w-4" />
                  <span>Create Student</span>
                </button>
              </div>

              {/* Students Table */}
              {filteredStudents.length > 0 ? (
                <Table headers={['Student Name', 'Roll Number', 'Department', 'Academic Year', 'Email', 'Actions']}>
                  {filteredStudents.map((student) => (
                    <tr key={student.id} className="hover:bg-slate-50/60 transition-colors">
                      <td className="px-6 py-4 font-semibold text-primary-navy">{student.name}</td>
                      <td className="px-6 py-4 font-mono text-slate-600 text-xs font-bold">{student.rollNumber}</td>
                      <td className="px-6 py-4 text-slate-500 font-medium text-xs">{student.department}</td>
                      <td className="px-6 py-4 text-slate-600 font-semibold">Year {student.year}</td>
                      <td className="px-6 py-4 text-slate-500 font-normal">{student.email}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2.5">
                          <button
                            onClick={() => openEditStudent(student)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-secondary-blue hover:bg-blue-50 transition-colors cursor-pointer"
                            title="Edit Record"
                          >
                            <Edit className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => triggerDelete('student', student.id)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
                            title="Delete Record"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </Table>
              ) : (
                <div className="bg-white border border-slate-200/60 p-12 rounded-2xl text-center text-slate-400 shadow-sm font-sans">
                  <Users className="h-10 w-10 mx-auto mb-2 text-slate-300" />
                  <p className="font-semibold">No students found matching your criteria.</p>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: STAFF REGISTRY */}
          {activeTab === 'Staffs' && (
            <div className="space-y-6 animate-fade-in text-left">
              {/* Header Action Tools */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="relative flex-1 max-w-md">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Search className="h-4.5 w-4.5" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search staffs by Name, Dept, Subject..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-secondary-blue focus:ring-4 focus:ring-blue-50/50 bg-white font-sans transition-all duration-300"
                  />
                </div>
                <button
                  onClick={openAddStaff}
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-secondary-blue hover:bg-blue-700 transition-colors shadow-sm cursor-pointer"
                >
                  <Plus className="h-4 w-4" />
                  <span>Create Staff</span>
                </button>
              </div>

              {/* Staff Table */}
              {filteredStaffs.length > 0 ? (
                <Table headers={['Staff Name', 'Department', 'Assigned Subject', 'Email Address', 'Actions']}>
                  {filteredStaffs.map((staff) => (
                    <tr key={staff.id} className="hover:bg-slate-50/60 transition-colors">
                      <td className="px-6 py-4 font-semibold text-primary-navy">{staff.name}</td>
                      <td className="px-6 py-4 text-slate-500 font-medium text-xs">{staff.department}</td>
                      <td className="px-6 py-4 text-slate-700 font-semibold text-xs">
                        <span className="px-2.5 py-1 bg-slate-100 rounded-md border border-slate-200/50">
                          {staff.subject}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-500 font-normal">{staff.email}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2.5">
                          <button
                            onClick={() => openEditStaff(staff)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-secondary-blue hover:bg-blue-50 transition-colors cursor-pointer"
                            title="Edit Record"
                          >
                            <Edit className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => triggerDelete('staff', staff.id)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
                            title="Delete Record"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </Table>
              ) : (
                <div className="bg-white border border-slate-200/60 p-12 rounded-2xl text-center text-slate-400 shadow-sm font-sans">
                  <UserCheck className="h-10 w-10 mx-auto mb-2 text-slate-300" />
                  <p className="font-semibold">No teaching staff found matching your criteria.</p>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: ATTENDANCE AUDITS */}
          {activeTab === 'Attendance' && (
            <div className="space-y-6 animate-fade-in text-left">
              {/* Header Action Tools */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="relative flex-1 max-w-md">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Search className="h-4.5 w-4.5" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search by student name or roll..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-secondary-blue focus:ring-4 focus:ring-blue-50/50 bg-white font-sans transition-all duration-300"
                  />
                </div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest bg-slate-100 border px-4 py-2.5 rounded-xl">
                  Average Attendance: <span className="text-secondary-blue font-bold">{avgAttendance}%</span>
                </div>
              </div>

              {/* Attendance Table */}
              {filteredStudents.length > 0 ? (
                <Table headers={['Student Name', 'Roll Number', 'Department', 'Attendance Percentage', 'Status']}>
                  {filteredStudents.map((student) => {
                    const pct = Number(student.attendance) || 0;
                    let badgeColor = 'bg-red-50 text-red-600 border-red-200/50';
                    let label = 'Critical (<60%)';
                    if (pct >= 75) {
                      badgeColor = 'bg-green-50 text-green-600 border-green-200/50';
                      label = 'Excellent (>=75%)';
                    } else if (pct >= 60) {
                      badgeColor = 'bg-amber-50 text-amber-600 border-amber-200/50';
                      label = 'Warning (60%-74%)';
                    }
                    return (
                      <tr key={student.id} className="hover:bg-slate-50/60 transition-colors">
                        <td className="px-6 py-4 font-semibold text-primary-navy">{student.name}</td>
                        <td className="px-6 py-4 font-mono text-slate-600 text-xs font-bold">{student.rollNumber}</td>
                        <td className="px-6 py-4 text-slate-500 font-medium text-xs">{student.department}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-3 max-w-[200px]">
                            <div className="flex-1 bg-slate-100 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full ${pct >= 75 ? 'bg-green-500' : pct >= 60 ? 'bg-amber-500' : 'bg-red-500'}`}
                                style={{ width: `${pct}%` }}
                              />
                            </div>
                            <span className="text-xs font-bold text-primary-navy shrink-0">{pct}%</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-xs font-bold">
                          <span className={`px-2.5 py-1 rounded-full border ${badgeColor}`}>
                            {label}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </Table>
              ) : (
                <div className="bg-white border border-slate-200/60 p-12 rounded-2xl text-center text-slate-400 shadow-sm font-sans">
                  <Calendar className="h-10 w-10 mx-auto mb-2 text-slate-300" />
                  <p className="font-semibold">No students found matching your criteria.</p>
                </div>
              )}
            </div>
          )}

          {/* TAB 5: SETTINGS */}
          {activeTab === 'Settings' && (
            <div className="max-w-2xl bg-white border border-slate-200/60 rounded-3xl p-8 shadow-sm space-y-6 text-left animate-fade-in font-sans">
              <div className="flex items-center space-x-3.5 border-b border-slate-100 pb-5">
                <SettingsIcon className="h-6 w-6 text-secondary-blue" />
                <div>
                  <h3 className="text-lg font-bold text-primary-navy font-display">System Controls</h3>
                  <p className="text-xs text-slate-400">Configure global application variables and manage local database states.</p>
                </div>
              </div>

              {/* Maintenance Options */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-primary-navy uppercase tracking-wider font-display">Database Operations</h4>
                <p className="text-xs text-slate-500 leading-normal">
                  You are viewing local sandbox operations. Resetting database parameters will wipe all custom students, staff entries, attendance modifications, and grades. The system will force a logout and reseed default testing accounts upon next login.
                </p>

                <div className="pt-2">
                  <button
                    onClick={handleResetDatabase}
                    className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl text-sm font-bold text-white bg-red-600 hover:bg-red-700 transition-colors shadow-sm cursor-pointer"
                  >
                    <RefreshCw className="h-4 w-4" />
                    <span>Reset Database & Logout</span>
                  </button>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-6 space-y-2.5 text-xs text-slate-400">
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-500">Database Engine:</span>
                  <span className="font-mono">Window LocalStorage Object API</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-500">Active Seed Schema:</span>
                  <span className="font-mono">v1.2.6</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-500">Encryption Status:</span>
                  <span className="text-green-600 font-bold">Encrypted Session</span>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* STUDENT REGISTRY MODAL (ADD & EDIT) */}
      <Modal
        isOpen={isStudentModalOpen}
        onClose={() => setIsStudentModalOpen(false)}
        title={selectedStudent ? 'Edit Student Record' : 'Register New Student'}
      >
        <form onSubmit={handleStudentSubmit} className="space-y-4 text-left">
          {formError && (
            <div className="p-3 bg-red-50 border border-red-200 text-xs text-red-600 font-semibold rounded-xl">
              {formError}
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">Full Name</label>
            <input
              type="text"
              required
              value={studentForm.name}
              onChange={(e) => setStudentForm({...studentForm, name: e.target.value})}
              placeholder="e.g. John Doe"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-secondary-blue font-sans bg-white"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">Roll Number</label>
              <input
                type="text"
                required
                value={studentForm.rollNumber}
                onChange={(e) => setStudentForm({...studentForm, rollNumber: e.target.value})}
                placeholder="e.g. V1202601"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-secondary-blue font-sans bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">Academic Year</label>
              <select
                value={studentForm.year}
                onChange={(e) => setStudentForm({...studentForm, year: e.target.value})}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-secondary-blue font-sans bg-white"
              >
                <option value="1">Year 1</option>
                <option value="2">Year 2</option>
                <option value="3">Year 3</option>
                <option value="4">Year 4</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">Email Address</label>
            <input
              type="email"
              required
              value={studentForm.email}
              onChange={(e) => setStudentForm({...studentForm, email: e.target.value})}
              placeholder="student@vertex.edu"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-secondary-blue font-sans bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">Department</label>
            <select
              value={studentForm.department}
              onChange={(e) => setStudentForm({...studentForm, department: e.target.value})}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-secondary-blue font-sans bg-white"
            >
              <option value="Computer Science & Engineering">Computer Science & Engineering</option>
              <option value="Electronics & Communication">Electronics & Communication</option>
              <option value="Robotics & Automation">Robotics & Automation</option>
              <option value="Data Science & Analytics">Data Science & Analytics</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">Portal Password</label>
            <input
              type="password"
              required
              value={studentForm.password}
              onChange={(e) => setStudentForm({...studentForm, password: e.target.value})}
              placeholder="Min 6 characters"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-secondary-blue font-sans bg-white"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 rounded-xl font-bold text-white bg-secondary-blue hover:bg-blue-700 transition-colors shadow-sm cursor-pointer"
            >
              {selectedStudent ? 'Save Changes' : 'Register Student'}
            </button>
          </div>
        </form>
      </Modal>

      {/* STAFF REGISTRY MODAL (ADD & EDIT) */}
      <Modal
        isOpen={isStaffModalOpen}
        onClose={() => setIsStaffModalOpen(false)}
        title={selectedStaff ? 'Edit Instructor Record' : 'Register New Faculty Staff'}
      >
        <form onSubmit={handleStaffSubmit} className="space-y-4 text-left">
          {formError && (
            <div className="p-3 bg-red-50 border border-red-200 text-xs text-red-600 font-semibold rounded-xl">
              {formError}
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">Full Name</label>
            <input
              type="text"
              required
              value={staffForm.name}
              onChange={(e) => setStaffForm({...staffForm, name: e.target.value})}
              placeholder="e.g. Dr. Arthur Pendelton"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-secondary-blue font-sans bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">Email Address</label>
            <input
              type="email"
              required
              value={staffForm.email}
              onChange={(e) => setStaffForm({...staffForm, email: e.target.value})}
              placeholder="staff@vertex.edu"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-secondary-blue font-sans bg-white"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">Department</label>
              <select
                value={staffForm.department}
                onChange={(e) => setStaffForm({...staffForm, department: e.target.value})}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-secondary-blue font-sans bg-white"
              >
                <option value="Computer Science & Engineering">Computer Science & Engineering</option>
                <option value="Electronics & Communication">Electronics & Communication</option>
                <option value="Robotics & Automation">Robotics & Automation</option>
                <option value="Data Science & Analytics">Data Science & Analytics</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">Assigned Subject</label>
              <select
                value={staffForm.subject}
                onChange={(e) => setStaffForm({...staffForm, subject: e.target.value})}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-secondary-blue font-sans bg-white"
              >
                {subjects.map((sub, idx) => (
                  <option key={idx} value={sub}>{sub}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">Portal Password</label>
            <input
              type="password"
              required
              value={staffForm.password}
              onChange={(e) => setStaffForm({...staffForm, password: e.target.value})}
              placeholder="Min 6 characters"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-secondary-blue font-sans bg-white"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 rounded-xl font-bold text-white bg-secondary-blue hover:bg-blue-700 transition-colors shadow-sm cursor-pointer"
            >
              {selectedStaff ? 'Save Changes' : 'Register Staff'}
            </button>
          </div>
        </form>
      </Modal>

      {/* CONFIRM DELETE MODAL */}
      <Modal
        isOpen={isDeleteConfirmOpen}
        onClose={() => setIsDeleteConfirmOpen(false)}
        title="Confirm Record Deletion"
      >
        <div className="space-y-5 text-left font-sans">
          <div className="flex items-start space-x-3 text-red-600">
            <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="font-bold text-primary-navy">Are you absolutely sure?</h4>
              <p className="text-xs text-slate-500">
                This action is irreversible. Wiping this database record will permanently delete the associated credentials and academic stats.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-end space-x-3 pt-2">
            <button
              onClick={() => setIsDeleteConfirmOpen(false)}
              className="px-4.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={confirmDelete}
              className="px-4.5 py-2 rounded-xl text-xs font-bold text-white bg-red-600 hover:bg-red-700 transition-colors shadow-sm cursor-pointer"
            >
              Delete Record
            </button>
          </div>
        </div>
      </Modal>

    </div>
  );
};

export default AdminDashboard;
