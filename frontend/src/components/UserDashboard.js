import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/css/Dashboard.css';

const UserDashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="dashboard-container">
            <div className="dashboard-content">
                <h2>Welcome, User!</h2>
                <div className="dashboard-section">
                    <h3>Your Profile</h3>
                    <p>Update your personal information, resume, and more.</p>
                    <button className="dashboard-button" onClick={() => navigate('/user-profile')}>Edit Profile</button>
                </div>
                <div className="dashboard-section">
                    <h3>Job Applications</h3>
                    <p>Track your job applications and their statuses.</p>
                    <button className="dashboard-button" onClick={() => navigate('/job-applications')}>View Applications</button>
                </div>
                <div className="dashboard-section">
                    <h3>Recommended Jobs</h3>
                    <p>See jobs recommended for you based on your profile.</p>
                    <button className="dashboard-button" onClick={() => navigate('/recommended-jobs')}>View Jobs</button>
                </div>
                <div className="dashboard-section">
                    {/* <button className="dashboard-button back-button" onClick={() => navigate('/homepage')}>Back to Homepage</button> */}
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
