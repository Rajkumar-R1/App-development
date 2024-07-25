import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/css/PostJob.css';

const PostJob = () => {
    const [title, setTitle] = useState('');
    const [company, setCompany] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add job posting logic here
        console.log('Posting job:', title, company, location, description);
        // Reset form fields
        setTitle('');
        setCompany('');
        setLocation('');
        setDescription('');
    };

    return (
        <div className="postjob-container">
            <h2>Post a Job</h2>
            <form onSubmit={handleSubmit} className="post-form">
                <div className="form-group">
                    <label>Job Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Company:</label>
                    <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Location:</label>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="post-button">Post Job</button>
            </form>
            <button className="back-button" onClick={() => navigate('/home')}>Back to Homepage</button>
        </div>
    );
};

export default PostJob;
