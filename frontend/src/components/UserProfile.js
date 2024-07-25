import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/css/UserProfile.css'; // Ensure to include your CSS file

const UserProfile = () => {
    const [user, setUser] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        bio: 'A motivated software developer.'
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        // Handle save logic (e.g., send data to backend)
        alert('Profile updated successfully!');
    };

    return (
        <div className="user-profile-container">
            <h1>User Profile</h1>
            <form className="user-profile-form">
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Bio:
                    <textarea
                        name="bio"
                        value={user.bio}
                        onChange={handleChange}
                    />
                </label>
                <button type="button" onClick={handleSave}>Save Changes</button>
            </form>
            <button className="navigate-button" onClick={() => navigate('/dashboard')}>
                Go to Dashboard
            </button>
            <button className="upload-resume-button" onClick={() => navigate('/upload-resume')}>
                Upload Resume
            </button>
        </div>
    );
};

export default UserProfile;
