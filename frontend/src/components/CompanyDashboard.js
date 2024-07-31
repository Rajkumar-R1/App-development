import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/css/CompanyDashboard.css';

const CompanyDashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="dashboard-container">
            <div className="dashboard-content">
                <h2>Welcome, Company!</h2>
                <div className="dashboard-section">
                    <h3>Manage Company Profile</h3>
                    <p>Update your company's profile and information.</p>
                    <button
                        className="dashboard-button"
                        onClick={() => navigate('/manage-profile')}
                    >
                        Edit Profile
                    </button>
                </div>
                <div className="dashboard-section">
                    <h3>Manage Job Postings</h3>
                    <p>Create, update, and delete job postings.</p>
                    <button
                        className="dashboard-button"
                        onClick={() => navigate('/manage-jobs')}
                    >
                        Manage Jobs
                    </button>
                </div>
                <div className="dashboard-section">
                    <h3>View Applicants</h3>
                    <p>See applicants for your job postings.</p>
                    <button
                        className="dashboard-button"
                        onClick={() => navigate('/view-applicants')}
                    >
                        View Applicants
                    </button>
                </div>
                <div className="dashboard-section">
                    <h3>Company Analytics</h3>
                    <p>Analyze the performance of your job postings and applications.</p>
                    <button
                        className="dashboard-button"
                        onClick={() => navigate('/company-analytics')}
                    >
                        View Analytics
                    </button>
                </div>
                <div className="dashboard-section">
                    <h3>Account Settings</h3>
                    <p>Update your account settings and preferences.</p>
                    <button
                        className="dashboard-button"
                        onClick={() => navigate('/account-settings')}
                    >
                        Account Settings
                    </button>
                </div>
                <div className="dashboard-section">
                    <h3>User Management</h3>
                    <p>Manage users who have access to the company dashboard.</p>
                    <button
                        className="dashboard-button"
                        onClick={() => navigate('/user-management')}
                    >
                        Manage Users
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CompanyDashboard;
