import React from 'react';
import '../pages/css/JobApplications.css';

const JobApplications = () => {
    // Mock application data
    const applications = [
        { id: 1, title: 'Software Engineer', company: 'TechCorp', status: 'pending', appliedDate: '2024-07-20' },
        { id: 2, title: 'Product Manager', company: 'InnoProducts', status: 'accepted', appliedDate: '2024-07-18' },
        { id: 3, title: 'UI/UX Designer', company: 'Designify', status: 'rejected', appliedDate: '2024-07-15' },
    ];

    return (
        <div className="applications-container">
            <h2>Job Applications</h2>
            <p>Track your job applications and their statuses here.</p>
            <div className="application-list">
                {applications.map(app => (
                    <div key={app.id} className="application-item">
                        <h4>{app.title} at {app.company}</h4>
                        <p>Applied on: {app.appliedDate}</p>
                        <p className={`status ${app.status}`}>{app.status.charAt(0).toUpperCase() + app.status.slice(1)}</p>
                        <button className="details-button">View Details</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobApplications;
