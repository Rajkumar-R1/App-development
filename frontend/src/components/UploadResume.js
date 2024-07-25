import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/css/UploadResume.css'; // Ensure to include your CSS file

const UploadResume = () => {
    const [resume, setResume] = useState(null);
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        setResume(e.target.files[0]);
    };

    const handleUpload = () => {
        if (resume) {
            // Handle file upload logic here (e.g., send file to backend)
            alert('Resume uploaded successfully!');
            navigate('/profile'); // Redirect to UserProfile page
        } else {
            alert('Please select a resume to upload.');
        }
    };

    return (
        <div className="upload-resume-container">
            <h1>Upload Resume</h1>
            <input
                type="file"
                accept=".pdf, .doc, .docx"
                onChange={handleFileChange}
            />
            <button type="button" onClick={handleUpload}>Upload</button>
            <button className="back-button" onClick={() => navigate('/profile')}>
                Back to Profile
            </button>
        </div>
    );
};

export default UploadResume;
