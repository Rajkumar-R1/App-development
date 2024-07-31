import React, { useState } from 'react';
import '../pages/css/ManageProfile.css';

const ManageProfile = () => {
    const [profileData, setProfileData] = useState({
        companyName: '',
        description: '',
        website: '',
        contactEmail: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSave = () => {
        // Handle save logic here
        console.log('Profile saved:', profileData);
    };

    return (
        <div className="manage-profile-container">
            <div className="manage-profile-content">
                <h2>Manage Company Profile</h2>
                <form className="profile-form">
                    <div className="form-group">
                        <label>Company Name</label>
                        <input
                            type="text"
                            name="companyName"
                            value={profileData.companyName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea
                            name="description"
                            value={profileData.description}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label>Website</label>
                        <input
                            type="text"
                            name="website"
                            value={profileData.website}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Contact Email</label>
                        <input
                            type="email"
                            name="contactEmail"
                            value={profileData.contactEmail}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="button" className="save-button" onClick={handleSave}>Save Changes</button>
                </form>
            </div>
        </div>
    );
};

export default ManageProfile;
