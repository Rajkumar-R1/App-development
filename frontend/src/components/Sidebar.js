import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/css/Sidebar.css';

const Sidebar = ({ userType, onLogout }) => {
    const navigate = useNavigate();

    const handleLogoutClick = () => {
        if (typeof onLogout === 'function') {
            onLogout();
            navigate('/homepage');
        } else {
            console.error('onLogout is not a function');
        }
    };

    return (
        <div className="sidebar">
            <ul>
                {userType === 'admin' && (
                    <>
                        <li onClick={() => navigate('/admin-dashboard')}>Admin Dashboard</li>
                        <li onClick={() => navigate('/manage-users')}>Manage Users</li>
                        <li onClick={() => navigate('/manage-jobs')}>Manage Jobs</li>
                        <li onClick={() => navigate('/reports')}>Reports</li>
                    </>
                )}
                {userType === 'company' && (
                    <>
                        <li onClick={() => navigate('/company-dashboard')}>Company Dashboard</li>
                        <li onClick={() => navigate('/edit-profile')}>Edit Profile</li>
                        <li onClick={() => navigate('/manage-jobs')}>Manage Jobs</li>
                        <li onClick={() => navigate('/view-applicants')}>View Applicants</li>
                    </>
                )}
                {userType === 'user' && (
                    <>
                        <li onClick={() => navigate('/user-dashboard')}>User Dashboard</li>
                        <li onClick={() => navigate('/user-profile')}>View Profile</li>
                        <li onClick={() => navigate('/job-applications')}>Job Applications</li>
                        <li onClick={() => navigate('/recommended-jobs')}>Recommended Jobs</li>
                    </>
                )}
                <li onClick={handleLogoutClick}>Logout</li>
            </ul>
        </div>
    );
};

export default Sidebar;
