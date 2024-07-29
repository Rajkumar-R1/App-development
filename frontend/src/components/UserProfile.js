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
            <h1>User Profile</h1>
            <form className="user-profile-form" onSubmit={handleSubmit}>
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
                    Phone:
                    <input
                        type="text"
                        name="phone"
                        value={user.phone}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Address:
                    <input
                        type="text"
                        name="address"
                        value={user.address}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    LinkedIn Profile:
                    <input
                        type="text"
                        name="linkedin"
                        value={user.linkedin}
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
                <label>
                    Upload Resume:
                    <input
                        type="file"
                        onChange={handleUploadResume}
                    />
                </label>
                <button type="submit">Save Changes</button>
            </form>
            <button className="navigate-button" onClick={() => navigate('/dashboard')}>
                Go to Dashboard
            </button>
        </div>
    );
};

export default UserProfile;
