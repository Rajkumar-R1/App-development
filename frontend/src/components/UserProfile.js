import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/css/UserProfile.css'; // Ensure to include your CSS file

const UserProfile = () => {
    const [user, setUser] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        bio: 'A motivated software developer.',
        phone: '',
        address: '',
        linkedin: ''
    });
    const [resume, setResume] = useState(null);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        // Handle save logic (e.g., send data to backend)
        alert('Profile updated successfully!');
    };

    const handleUploadResume = (e) => {
        setResume(e.target.files[0]);
        alert('Resume uploaded successfully!');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission including file upload logic here
        console.log('User data:', user);
        if (resume) {
            console.log('Resume file:', resume);
        }
        // Navigate to another page if needed
        navigate('/dashboard');
    };

    return (
        <div className="user-profile-container">
            <h1 className="user-profile-title">User Profile</h1>
            <form className="user-profile-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        placeholder="john.doe@example.com"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={user.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={user.address}
                        onChange={handleChange}
                        placeholder="Your address"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="linkedin">LinkedIn Profile:</label>
                    <input
                        type="text"
                        id="linkedin"
                        name="linkedin"
                        value={user.linkedin}
                        onChange={handleChange}
                        placeholder="Your LinkedIn profile URL"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="bio">Bio:</label>
                    <textarea
                        id="bio"
                        name="bio"
                        value={user.bio}
                        onChange={handleChange}
                        placeholder="A short bio about yourself"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="resume">Upload Resume:</label>
                    <input
                        type="file"
                        id="resume"
                        onChange={handleUploadResume}
                    />
                </div>
                <div className="form-actions">
                    <button type="submit" className="btn-primary">Save Changes</button>
                </div>
            </form>
        </div>
    );
};

export default UserProfile;
