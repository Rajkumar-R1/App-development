import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/css/Navbar.css'; // Ensure to include your CSS file

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                {/* <li><Link to="/">Home</Link></li> */}
                <li><Link to="/homepage">Home</Link></li>
                {/* <li><Link to="/search">Job Search</Link></li> */}
                {/* <li><Link to="/post">Post a Job</Link></li> */}
                {/* <li><Link to="/profile">Profile</Link></li> */}
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                {/* <li><Link to="/upload-resume">Upload Resume</Link></li> */}
            </ul>
        </nav>
    );
};

export default Navbar;
