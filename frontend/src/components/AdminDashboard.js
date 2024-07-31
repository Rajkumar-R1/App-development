import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/css/Dashboard.css';
import UserManagementModal from './UserManagementModal';
import JobManagementModal from './JobManagementModal';
import ReportsModal from './ReportsModal';

const AdminDashboard = () => {
    const [modalType, setModalType] = useState(null);
    const navigate = useNavigate();

    const handleOpenModal = (type) => {
        setModalType(type);
    };

    const handleCloseModal = () => {
        setModalType(null);
    };

    const handleNavigateHome = () => {
        setModalType(null);  // Ensure modals are closed
        navigate('/homepage');
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-content">
                <h2>Welcome, Admin!</h2>
                <div className="dashboard-section">
                    <h3>Manage Users</h3>
                    <p>View and manage registered users.</p>
                    <button className="dashboard-button" onClick={() => handleOpenModal('users')}>Manage Users</button>
                </div>
                <div className="dashboard-section">
                    <h3>Manage Jobs</h3>
                    <p>Create, update, and delete job postings.</p>
                    <button className="dashboard-button" onClick={() => handleOpenModal('jobs')}>Manage Jobs</button>
                </div>
                <div className="dashboard-section">
                    <h3>Reports</h3>
                    <p>View site usage and performance reports.</p>
                    <button className="dashboard-button" onClick={() => handleOpenModal('reports')}>View Reports</button>
                </div>
                
            </div>
            {modalType === 'users' && <UserManagementModal onClose={handleCloseModal} />}
            {modalType === 'jobs' && <JobManagementModal onClose={handleCloseModal} />}
            {modalType === 'reports' && <ReportsModal onClose={handleCloseModal} />}
        </div>
    );
};

export default AdminDashboard;
