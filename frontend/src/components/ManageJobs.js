import React, { useState } from 'react';
import '../pages/css/ManangeJobs.css';

const ManageJobs = () => {
    const [jobs, setJobs] = useState([
        // Example job data
        { id: 1, title: 'Software Engineer', description: 'Develop and maintain web applications.' },
        { id: 2, title: 'Product Manager', description: 'Oversee product development and strategy.' }
    ]);

    const handleAddJob = () => {
        // Handle job addition logic
        console.log('Add Job functionality here');
    };

    const handleEditJob = (jobId) => {
        // Handle job editing logic
        console.log('Edit Job functionality here', jobId);
    };

    const handleDeleteJob = (jobId) => {
        // Handle job deletion logic
        setJobs(jobs.filter(job => job.id !== jobId));
    };

    return (
        <div className="manage-jobs-container">
            <div className="manage-jobs-content">
                <h2>Manage Job Postings</h2>
                <button className="add-job-button" onClick={handleAddJob}>Add New Job</button>
                <table className="jobs-table">
                    <thead>
                        <tr>
                            <th>Job Title</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map(job => (
                            <tr key={job.id}>
                                <td>{job.title}</td>
                                <td>{job.description}</td>
                                <td>
                                    <button className="edit-button" onClick={() => handleEditJob(job.id)}>Edit</button>
                                    <button className="delete-button" onClick={() => handleDeleteJob(job.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageJobs;
