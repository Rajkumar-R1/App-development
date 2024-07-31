import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import CompanyDashboard from './components/CompanyDashboard';
import UserProfile from './components/UserProfile';
import JobApplications from './components/JobApplications';
import RecommendedJobs from './components/RecommendedJobs';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ApplyJob from './components/ApplyJob';
import CompanyDetails from './components/CompanyDetails';

// Import new components
import ManageProfile from './components/ManageProfile';
import ManageJobs from './components/ManageJobs';
import ViewApplicants from './components/ViewApplicants';
import CompanyAnalytics from './components/CompanyAnalytics';
import AccountSettings from './components/AccountSettings';
import UserManagement from './components/UserManagement';

function App() {
    const [userType, setUserType] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () => {
        setUserType(null);
        setIsLoggedIn(false);
    };

    useEffect(() => {
        // Mock checking if the user is logged in
        const user = localStorage.getItem('user'); // Example: replace with actual user session check
        if (user) {
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <Router>
            <div className="app-container">
                <Navbar />
                {userType && <Sidebar userType={userType} onLogout={handleLogout} />}
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/login" element={<Login setUserType={setUserType} setIsLoggedIn={setIsLoggedIn} />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/user-dashboard" element={<UserDashboard />} />
                    <Route path="/admin-dashboard" element={<AdminDashboard />} />
                    <Route path="/company-dashboard" element={<CompanyDashboard />} />
                    <Route path="/user-profile" element={<UserProfile />} />
                    <Route path="/job-applications" element={<JobApplications />} />
                    <Route path="/recommended-jobs" element={<RecommendedJobs />} />
                    <Route path="/homepage" element={<Homepage />} />
                    <Route path="/apply/:companyId" element={isLoggedIn ? <ApplyJob /> : <Login setUserType={setUserType} setIsLoggedIn={setIsLoggedIn} />} />
                    <Route path="/company/:id" element={<CompanyDetails />} />
                    
                    {/* New Routes */}
                    <Route path="/manage-profile" element={<ManageProfile />} />
                    <Route path="/manage-jobs" element={<ManageJobs />} />
                    <Route path="/view-applicants" element={<ViewApplicants />} />
                    <Route path="/company-analytics" element={<CompanyAnalytics />} />
                    <Route path="/account-settings" element={<AccountSettings />} />
                    <Route path="/user-management" element={<UserManagement />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
