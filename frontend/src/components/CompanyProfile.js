import React, { useState } from 'react';
import '../pages/css/CompanyProfile.css'; // Add your CSS for the component

const CompanyProfile = () => {
    const [company, setCompany] = useState({
        name: 'Tech Innovators Inc.',
        description: 'A leading company in tech innovations and software development.',
        location: 'San Francisco, CA',
        contactEmail: 'contact@techinnovators.com',
        phone: '+1 (123) 456-7890'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCompany({
            ...company,
            [name]: value
        });
    };

    const handleSave = () => {
        // Handle save functionality (e.g., API call)
        console.log('Company profile saved:', company);
    };

    return (
        <div className="company-profile-container">
            <h2>Company Profile</h2>
            <div className="profile-form">
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={company.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={company.description}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className="form-group">
                    <label>Location:</label>
                    <input
                        type="text"
                        name="location"
                        value={company.location}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Contact Email:</label>
                    <input
                        type="email"
                        name="contactEmail"
                        value={company.contactEmail}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Phone:</label>
                    <input
                        type="text"
                        name="phone"
                        value={company.phone}
                        onChange={handleChange}
                    />
                </div>
                <button className="save-button" onClick={handleSave}>Save Changes</button>
            </div>
        </div>
    );
};

export default CompanyProfile;
