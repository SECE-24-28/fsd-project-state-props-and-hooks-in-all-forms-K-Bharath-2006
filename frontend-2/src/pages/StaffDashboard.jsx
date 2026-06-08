/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, 
  Calendar, 
  Edit, 
  Check, 
  TrendingUp, 
  BookOpen, 
  Search,
  Loader2
} from 'lucide-react';

import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import DashboardCard from '../components/DashboardCard';
import Table from '../components/Table';
import Modal from '../components/Modal';
import api from '../api/axios';
import { useAuth } from '../context/AuthContext';

const StaffDashboard = () => {
  const navigate = useNavigate();
  const { user: currentUser, logout } = useAuth();

  // Responsive Layout States
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Active Menu Tab
  const [activeTab, setActiveTab] = useState('Dashboard');

  // Database States
  const [students, setStudents] = useState([]);
  const [isStudentsLoading, setIsStudentsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterDepartmentOnly, setFilterDepartmentOnly] = useState(true);

  // Edit marks/attendance modal states
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [editForm, setEditForm] = useState({
    marks: 0,
    attendance: 0,
    remarks: ''
  });
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchStudents = async () => {
    setIsStudentsLoading(true);
    try {
      const response = await api.get('/staff/students');
      const mapped = response.data.data.map(s => ({
        id: s._id,
        userId: s.userId?._id,
        name: s.userId?.name || '',
        email: s.userId?.email || '',
        rollNumber: s.rollNumber,
        department: s.department,
        year: s.year,
        phone: s.phone,
        attendance: s.attendance || 0,
        marks: s.marks || 0,
        remarks: s.remarks || '',
      }));
      setStudents(mapped);
    } catch (error) {
      console.error('Error fetching students:', error);
    } finally {
      setIsStudentsLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/erp-login');
  };

  // Filter students based on teacher's department and search queries
  const getFilteredStudents = () => {
    let result = [...students];
    
    if (filterDepartmentOnly && currentUser?.department) {
      result = result.filter(s => s.department === currentUser.department);
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      result = result.filter(s => 
        s.name.toLowerCase().includes(q) || 
        s.rollNumber.toLowerCase().includes(q) ||
        s.department.toLowerCase().includes(q)
      );
    }

    return result;
  };

  const filteredStudents = getFilteredStudents();

  // Statistics calculations
  const totalAssignedStudents = filteredStudents.length;
  
  const avgAttendance = filteredStudents.length
    ? Math.round(filteredStudents.reduce((acc, curr) => acc + (Number(curr.attendance) || 0), 0) / filteredStudents.length)
    : 0;

  const avgMarks = filteredStudents.length
    ? Math.round(filteredStudents.reduce((acc, curr) => acc + (Number(curr.marks) || 0), 0) / filteredStudents.length)
    : 0;

  // Grade/Attendance editors
  const openEditModal = (student) => {
    setSelectedStudent(student);
    setEditForm({
      marks: student.marks || 0,
      attendance: student.attendance || 0,
      remarks: student.remarks || ''
    });
    setFormError('');
    setIsEditModalOpen(true);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    setIsSubmitting(true);

    const marksNum = Number(editForm.marks);
    const attNum = Number(editForm.attendance);

    // Validations
    if (isNaN(marksNum) || marksNum < 0 || marksNum > 100) {
      setFormError('Marks score must be a number between 0 and 100.');
      setIsSubmitting(false);
      return;
    }

    if (isNaN(attNum) || attNum < 0 || attNum > 100) {
      setFormError('Attendance percentage must be a number between 0 and 100.');
      setIsSubmitting(false);
      return;
    }

    try {
      await api.put(`/staff/students/${selectedStudent.id}`, {
        marks: marksNum,
        attendance: attNum,
        remarks: editForm.remarks
      });
      await fetchStudents();
      setIsEditModalOpen(false);
    } catch (error) {
      console.error('Error updating metrics:', error);
      setFormError(error.response?.data?.message || 'Failed to update student metrics.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
      
      {/* Sidebar navigation */}
      <Sidebar 
        role="staff" 
        activeTab={activeTab} 
        setActiveTab={(tab) => {
          setActiveTab(tab);
          setSearchQuery(''); // Reset search queries
        }}
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={setIsSidebarCollapsed}
        isMobileOpen={isMobileSidebarOpen}
        setIsMobileOpen={setIsMobileSidebarOpen}
        onLogout={handleLogout}
      />

      {/* Main content body */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        <Topbar 
          title={`Staff Workspace — ${activeTab}`} 
          user={currentUser} 
          role="staff"
          setIsMobileOpen={setIsMobileSidebarOpen}
          onLogout={handleLogout}
        />

        {/* Scrollable details */}
        <main className="flex-grow p-6 overflow-y-auto">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'Dashboard' && (
            <div className="space-y-8 animate-fade-in text-left">
              {/* Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <DashboardCard 
                  title="Assigned Students" 
                  value={totalAssignedStudents} 
                  icon={Users} 
                  colorClass="bg-blue-50 text-secondary-blue" 
                  detail={currentUser?.department || 'Department class'}
                />
                <DashboardCard 
                  title="Class Attendance Avg" 
                  value={`${avgAttendance}%`} 
                  icon={Calendar} 
                  colorClass="bg-emerald-50 text-emerald-600" 
                  detail="Active lectures attendance"
                />
                <DashboardCard 
                  title="Class Marks Avg" 
                  value={`${avgMarks}/100`} 
                  icon={TrendingUp} 
                  colorClass="bg-cyan-50 text-cyan-600" 
                  detail="Exam results metrics"
                />
              </div>

              {/* Informative Welcoming Card */}
              <div className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm space-y-4">
                <div className="flex items-center space-x-2 text-secondary-blue">
                  <BookOpen className="h-5 w-5" />
                  <h3 className="text-base font-bold text-primary-navy font-display">Faculty Advisory Panel</h3>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed max-w-3xl">
                  Hello, {currentUser?.name || 'Professor'}. You are logged in as a faculty instructor for the **{currentUser?.department || 'Engineering'}** department. Use the controls below to verify marks, update attendance rosters, and publish remarks for your students.
                </p>
                <div className="border-t border-slate-100 pt-4 flex flex-wrap gap-4 text-xs font-semibold text-slate-400">
                  <div>Assigned Subject: <span className="text-primary-navy font-bold">{currentUser?.subject || 'General Engineering'}</span></div>
                  <div className="hidden sm:block text-slate-300">|</div>
                  <div>Current Term: <span className="text-primary-navy font-bold">Academic Session 2026</span></div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: STUDENTS MANAGEMENT */}
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
                    placeholder="Search by student name, roll number..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-secondary-blue focus:ring-4 focus:ring-blue-50/50 bg-white font-sans transition-all duration-300"
                  />
                </div>

                <div className="flex items-center space-x-2.5">
                  <label className="text-xs font-semibold text-slate-500 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={filterDepartmentOnly}
                      onChange={(e) => setFilterDepartmentOnly(e.target.checked)}
                      className="h-4.5 w-4.5 rounded border-slate-300 text-secondary-blue focus:ring-secondary-blue accent-secondary-blue mr-2 cursor-pointer"
                    />
                    Filter by my department ({currentUser?.department ? 'CSE' : 'All'})
                  </label>
                </div>
              </div>

              {/* Student Table */}
              {isStudentsLoading ? (
                <div className="flex justify-center items-center py-20">
                  <Loader2 className="h-8 w-8 animate-spin text-secondary-blue" />
                </div>
              ) : filteredStudents.length > 0 ? (
                <Table headers={['Student Name', 'Roll Number', 'Department', 'Attendance', 'Marks Score', 'Remarks / Comments', 'Actions']}>
                  {filteredStudents.map((student) => {
                    const att = Number(student.attendance) || 0;
                    const marks = Number(student.marks) || 0;
                    
                    // Attendance indicator colors
                    let attColor = 'text-red-600 bg-red-50 border-red-200/50';
                    if (att >= 75) attColor = 'text-green-600 bg-green-50 border-green-200/50';
                    else if (att >= 60) attColor = 'text-amber-600 bg-amber-50 border-amber-200/50';

                    // Marks color indicator
                    let markColor = 'text-red-600 bg-red-50 border-red-100';
                    if (marks >= 80) markColor = 'text-green-600 bg-green-50 border-green-100';
                    else if (marks >= 50) markColor = 'text-blue-600 bg-blue-50 border-blue-100';

                    return (
                      <tr key={student.id} className="hover:bg-slate-50/60 transition-colors">
                        <td className="px-6 py-4 font-semibold text-primary-navy">{student.name}</td>
                        <td className="px-6 py-4 font-mono text-slate-500 text-xs font-bold">{student.rollNumber}</td>
                        <td className="px-6 py-4 text-slate-500 text-xs font-medium">{student.department}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            <span className={`px-2 py-0.5 rounded-md border text-xs font-bold ${attColor}`}>
                              {att}%
                            </span>
                            <div className="w-16 bg-slate-100 h-1.5 rounded-full hidden sm:block">
                              <div 
                                className={`h-1.5 rounded-full ${att >= 75 ? 'bg-green-500' : att >= 60 ? 'bg-amber-500' : 'bg-red-500'}`}
                                style={{ width: `${att}%` }}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-2.5 py-1 rounded-md border text-xs font-bold ${markColor}`}>
                            {marks}/100
                          </span>
                        </td>
                        <td className="px-6 py-4 text-slate-500 text-xs max-w-[200px] truncate" title={student.remarks}>
                          {student.remarks || <span className="text-slate-300 italic">No comments</span>}
                        </td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => openEditModal(student)}
                            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-secondary-blue hover:text-white bg-blue-50 hover:bg-secondary-blue transition-all cursor-pointer"
                          >
                            <Edit className="h-3.5 w-3.5" />
                            <span>Edit Grades</span>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </Table>
              ) : (
                <div className="bg-white border border-slate-200/60 p-12 rounded-2xl text-center text-slate-400 shadow-sm font-sans">
                  <Users className="h-10 w-10 mx-auto mb-2 text-slate-300" />
                  <p className="font-semibold">No student records found matching details.</p>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: MARKS DIRECT ENTRIES */}
          {activeTab === 'Marks' && (
            <div className="space-y-6 animate-fade-in text-left">
              <div className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm">
                <h3 className="text-base font-bold text-primary-navy font-display mb-2">Subject Marks Dashboard</h3>
                <p className="text-xs text-slate-500">Quickly audit exam scores for students enrolled in your course programs.</p>
              </div>

              {isStudentsLoading ? (
                <div className="flex justify-center items-center py-20">
                  <Loader2 className="h-8 w-8 animate-spin text-secondary-blue" />
                </div>
              ) : filteredStudents.length > 0 ? (
                <Table headers={['Student Name', 'Roll Number', 'Marks Score', 'Performance Scale', 'Actions']}>
                  {filteredStudents.map((student) => {
                    const marks = Number(student.marks) || 0;
                    let scaleText = 'Needs Improvement';
                    let scaleColor = 'text-red-600 bg-red-50';
                    if (marks >= 85) {
                      scaleText = 'Outstanding';
                      scaleColor = 'text-green-600 bg-green-50';
                    } else if (marks >= 70) {
                      scaleText = 'Very Good';
                      scaleColor = 'text-emerald-600 bg-emerald-50';
                    } else if (marks >= 50) {
                      scaleText = 'Average Pass';
                      scaleColor = 'text-blue-600 bg-blue-50';
                    }
                    return (
                      <tr key={student.id} className="hover:bg-slate-50/60 transition-colors">
                        <td className="px-6 py-4 font-semibold text-primary-navy">{student.name}</td>
                        <td className="px-6 py-4 font-mono text-slate-500 text-xs font-bold">{student.rollNumber}</td>
                        <td className="px-6 py-4 font-bold text-slate-800 text-base">{marks}/100</td>
                        <td className="px-6 py-4 text-xs font-bold">
                          <span className={`px-2.5 py-1 rounded-full ${scaleColor}`}>
                            {scaleText}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => openEditModal(student)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-secondary-blue hover:bg-blue-50 transition-colors cursor-pointer"
                          >
                            <Edit className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </Table>
              ) : (
                <div className="bg-white border border-slate-200/60 p-12 rounded-2xl text-center text-slate-400 shadow-sm font-sans">
                  <Users className="h-10 w-10 mx-auto mb-2 text-slate-300" />
                  <p className="font-semibold">No student scores found.</p>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: ATTENDANCE TRACKING */}
          {activeTab === 'Attendance' && (
            <div className="space-y-6 animate-fade-in text-left">
              <div className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm">
                <h3 className="text-base font-bold text-primary-navy font-display mb-2">Class Attendance Logs</h3>
                <p className="text-xs text-slate-500">Record and review student attendance averages to satisfy university requirements (minimum 75%).</p>
              </div>

              {isStudentsLoading ? (
                <div className="flex justify-center items-center py-20">
                  <Loader2 className="h-8 w-8 animate-spin text-secondary-blue" />
                </div>
              ) : filteredStudents.length > 0 ? (
                <Table headers={['Student Name', 'Roll Number', 'Attendance Percentage', 'Status Level', 'Actions']}>
                  {filteredStudents.map((student) => {
                    const att = Number(student.attendance) || 0;
                    let label = 'Low Attendance';
                    let labelColor = 'text-red-600 bg-red-50 border-red-200/50';
                    if (att >= 75) {
                      label = 'Safe';
                      labelColor = 'text-green-600 bg-green-50 border-green-200/50';
                    } else if (att >= 60) {
                      label = 'Warning';
                      labelColor = 'text-amber-600 bg-amber-50 border-amber-200/50';
                    }
                    return (
                      <tr key={student.id} className="hover:bg-slate-50/60 transition-colors">
                        <td className="px-6 py-4 font-semibold text-primary-navy">{student.name}</td>
                        <td className="px-6 py-4 font-mono text-slate-500 text-xs font-bold">{student.rollNumber}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-3">
                            <span className="font-bold text-slate-800 text-base">{att}%</span>
                            <div className="w-24 bg-slate-100 h-2 rounded-full hidden sm:block">
                              <div 
                                className={`h-2 rounded-full ${att >= 75 ? 'bg-green-500' : att >= 60 ? 'bg-amber-500' : 'bg-red-500'}`}
                                style={{ width: `${att}%` }}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-xs font-bold">
                          <span className={`px-2.5 py-1 rounded-full border ${labelColor}`}>
                            {label}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => openEditModal(student)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-secondary-blue hover:bg-blue-50 transition-colors cursor-pointer"
                          >
                            <Edit className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </Table>
              ) : (
                <div className="bg-white border border-slate-200/60 p-12 rounded-2xl text-center text-slate-400 shadow-sm font-sans">
                  <Calendar className="h-10 w-10 mx-auto mb-2 text-slate-300" />
                  <p className="font-semibold">No attendance log records found.</p>
                </div>
              )}
            </div>
          )}

        </main>
      </div>

      {/* EDIT STUDENT METRICS MODAL */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title={`Edit Metrics: ${selectedStudent?.name || 'Student'}`}
      >
        <form onSubmit={handleEditSubmit} className="space-y-5 text-left font-sans">
          {formError && (
            <div className="p-3 bg-red-50 border border-red-200 text-xs text-red-600 font-semibold rounded-xl">
              {formError}
            </div>
          )}

          <div className="p-4 bg-slate-50 border rounded-xl space-y-1.5 text-xs text-slate-500">
            <div>Student Roll: <span className="text-primary-navy font-bold">{selectedStudent?.rollNumber}</span></div>
            <div>Department: <span className="text-primary-navy font-bold">{selectedStudent?.department}</span></div>
            <div>Assigned Subject: <span className="text-secondary-blue font-bold">{currentUser?.subject}</span></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">Exam Marks (0-100)</label>
              <input
                type="number"
                min="0"
                max="100"
                required
                value={editForm.marks}
                onChange={(e) => setEditForm({...editForm, marks: e.target.value})}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold focus:outline-none focus:border-secondary-blue bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">Attendance % (0-100)</label>
              <input
                type="number"
                min="0"
                max="100"
                required
                value={editForm.attendance}
                onChange={(e) => setEditForm({...editForm, attendance: e.target.value})}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold focus:outline-none focus:border-secondary-blue bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">Faculty Remarks & Comments</label>
            <textarea
              rows="3"
              value={editForm.remarks}
              onChange={(e) => setEditForm({...editForm, remarks: e.target.value})}
              placeholder="Provide comments on student's performance or advisory details..."
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-secondary-blue bg-white resize-none font-sans"
            ></textarea>
          </div>

          <div className="pt-2 flex items-center justify-end space-x-3">
            <button
              type="button"
              disabled={isSubmitting}
              onClick={() => setIsEditModalOpen(false)}
              className="px-4.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-500 hover:bg-slate-50 cursor-pointer disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-secondary-blue hover:bg-blue-700 shadow-sm cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Check className="h-4 w-4" />
              )}
              <span>{isSubmitting ? 'Saving Changes...' : 'Save Record Changes'}</span>
            </button>
          </div>
        </form>
      </Modal>

    </div>
  );
};

export default StaffDashboard;
