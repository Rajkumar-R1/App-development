import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import JobSearch from './components/JobSearch';
import PostJob from './components/PostJob';
import CompanyDetails from './components/CompanyDetails';
import ApplyJob from './components/ApplyJob';
import UserProfile from './components/UserProfile';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/homepage" element={<Homepage />} />
                    <Route path="/search" element={<JobSearch />} />
                    <Route path="/post" element={<PostJob />} />
                    <Route path="/company/:id" element={<CompanyDetails />} />
                    <Route path="/apply/:id" element={<ApplyJob />} />
                    <Route path="/profile" element={<UserProfile />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
