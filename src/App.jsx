import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import AdminSidebar from './components/AdminSidebar'
import Dashboard from './components/Dashboard'
import AdminDashboard from './components/AdminDashboard'
import AdminMembers from './components/AdminMembers'
import AdminEvents from './components/AdminEvents'
import AdminAnno from './components/AdminAnno'
import AdminReports from './components/AdminReports'
import Announcements from './components/Announcements'
import Profile from './components/Profile'
import Events from './components/Events'
import Club1 from './components/Club1'
import Club2 from './components/Club2'
import Club3 from './components/Club3'
import Club4 from './components/Club4'
import Club5 from './components/Club5'
import Roles from './components/Roles'
import Login from './components/Login'
import ProtectedRoutes from './components/ProtectedRoutes'
import Enroll from './components/Enroll'
import './index.css'

const App = () => {
  const [role, setRole] = useState(localStorage.getItem('userRole'));

  // Update role when localStorage changes (after login)
  useEffect(() => {
    const handleStorageChange = () => {
      setRole(localStorage.getItem('userRole'));
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);
  return (
    <Router>
      {role=== 'Admin' && <AdminSidebar/>}
      {role === 'Member' && <Header />}

      <Routes>
        <Route path="/" element={<Roles />} />
        <Route path="/login" element={<Login />} />
        {role === 'Admin' && (
          <>
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/adminmembers" element={<ProtectedRoutes><AdminMembers /></ProtectedRoutes>} />
          <Route path="/adminevents" element={<ProtectedRoutes><AdminEvents /></ProtectedRoutes>} />
          <Route path="/adminanno" element={<ProtectedRoutes><AdminAnno /></ProtectedRoutes>} />
          <Route path="/adminreports" element={<ProtectedRoutes><AdminReports /></ProtectedRoutes>} />
          <Route path="/profile" element={<ProtectedRoutes><Profile /></ProtectedRoutes>} />
          </>
        )}        
        {role === 'Member' && (
          <>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/events" element={<ProtectedRoutes><Events /></ProtectedRoutes>} />
            <Route path="/announcements" element={<ProtectedRoutes><Announcements /></ProtectedRoutes>} />
            <Route path="/profile" element={<ProtectedRoutes><Profile /></ProtectedRoutes>} />
            <Route path="/club1" element={<ProtectedRoutes><Club1 /></ProtectedRoutes>} />
            <Route path="/club2" element={<ProtectedRoutes><Club2 /></ProtectedRoutes>} />
            <Route path="/club3" element={<ProtectedRoutes><Club3 /></ProtectedRoutes>} />
            <Route path="/club4" element={<ProtectedRoutes><Club4 /></ProtectedRoutes>} />
            <Route path="/club5" element={<ProtectedRoutes><Club5 /></ProtectedRoutes>} />
            <Route path="/enrollment" element={<ProtectedRoutes><Enroll /></ProtectedRoutes>} />

          </>
        )}
      </Routes>
    </Router>
  )
}

export default App