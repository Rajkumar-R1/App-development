import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/css/Dashboard.css'; // Make sure to create this CSS file

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="dashboard-container">
            <h1>Dashboard</h1>
            <p>Welcome back, John Doe!</p>
            <p>Here you can manage your job applications and account settings.</p>
            <div className="dashboard-buttons">
                <button onClick={() => navigate('/profile')}>View Profile</button>
                <button onClick={() => navigate('/search')}>Search Jobs</button>
                <button onClick={() => navigate('/post')}>Post a Job</button>
            </div>
        </div>
    );
};

export default Dashboard;
