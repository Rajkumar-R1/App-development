import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/css/Homepage.css';

const Homepage = () => {
    const navigate = useNavigate();

    return (
        <div className="homepage-container">
            <h1>Welcome to JobSearchPortal</h1>
            <p>Your one-stop solution for finding your dream job.</p>
            <div className="homepage-content">
                <div className="section">
                    <h2>Search Jobs</h2>
                    <p>Find the best jobs that match your skills and preferences.</p>
                    <button className="homepage-button" onClick={() => navigate('/search')}>Start Searching</button>
                </div>
                <div className="section">
                    <h2>Post a Job</h2>
                    <p>Are you an employer? Post your job openings and find the right candidates.</p>
                    <button className="homepage-button" onClick={() => navigate('/post')}>Post a Job</button>
                </div>
                <div className="section">
                    <h2>Login</h2>
                    <p>Already have an account? Login to manage your job posts and applications.</p>
                    <button className="homepage-button" onClick={() => navigate('/login')}>Login</button>
                </div>
                <div className="section">
                    <h2>Register</h2>
                    <p>Don't have an account? Register now to get started.</p>
                    <button className="homepage-button" onClick={() => navigate('/register')}>Register</button>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
