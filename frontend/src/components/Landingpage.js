import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/css/Landingpage.css';

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="landing-container">
            <header className="landing-header">
                <h1>Welcome to JobSearchPortal</h1>
                <p>Your gateway to finding the perfect job.</p>
            </header>
            <div className="landing-content">
                <div className="overview-section">
                    <h2>Find Your Dream Job</h2>
                    <p>Search from thousands of job listings to find the one that matches your skills and preferences.</p>
                    <button className="cta-button" onClick={() => navigate('/search')}>Start Searching</button>
                </div>
                <div className="overview-section">
                    <h2>Post Job Openings</h2>
                    <p>Are you an employer? Post your job openings and attract top talent.</p>
                    <button className="cta-button" onClick={() => navigate('/post')}>Post a Job</button>
                </div>
                <div className="overview-section">
                    <h2>Join Our Community</h2>
                    <p>Register now to stay updated with the latest job opportunities.</p>
                    <button className="cta-button" onClick={() => navigate('/register')}>Register</button>
                </div>
                <div className="overview-section">
                    <h2>Already a Member?</h2>
                    <p>Login to manage your job applications and job posts.</p>
                    <button className="cta-button" onClick={() => navigate('/login')}>Login</button>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
