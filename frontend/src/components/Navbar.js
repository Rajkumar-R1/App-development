import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/css/Navbar.css'; // Ensure to include your CSS file

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li><Link to="/homepage">Home</Link></li>
                {/* <li><Link to="/user-dashboard">Dashboard</Link></li> */}
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
