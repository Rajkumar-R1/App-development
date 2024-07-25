import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/Landingpage';
import Homepage from './components/Homepage';
import JobSearch from './components/JobSearch';
import PostJob from './components/PostJob';
import UserProfile from './components/UserProfile';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import UploadResume from './components/UploadResume'; // Import the new component
import './App.css'; // Ensure to import your global styles

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <Navbar />
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/homepage" element={<Homepage />} />
                        <Route path="/search" element={<JobSearch />} />
                        <Route path="/post" element={<PostJob />} />
                        <Route path="/profile" element={<UserProfile />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/upload-resume" element={<UploadResume />} /> {/* New route */}
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
