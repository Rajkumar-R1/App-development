import React from 'react';
import '../pages/css/RecommendedJobs.css';

const recommendedJobs = [
    { id: 1, title: 'Frontend Developer', company: 'Tech Corp', location: 'San Francisco, CA', salary: '$120,000 - $150,000' },
    { id: 2, title: 'Data Scientist', company: 'Data Inc', location: 'New York, NY', salary: '$110,000 - $140,000' },
    { id: 3, title: 'Product Manager', company: 'Innovate Ltd', location: 'Remote', salary: '$130,000 - $160,000' },
    { id: 4, title: 'UX Designer', company: 'Designify', location: 'Los Angeles, CA', salary: '$100,000 - $130,000' },
    { id: 5, title: 'DevOps Engineer', company: 'CloudWorks', location: 'Seattle, WA', salary: '$125,000 - $155,000' }
];

const RecommendedJobs = () => {
    return (
        <div className="jobs-container">
            <h2>Recommended Jobs</h2>
            <p>See jobs recommended for you based on your profile.</p>
            <div className="jobs-list">
                {recommendedJobs.map(job => (
                    <div key={job.id} className="job-card">
                        <h3 className="job-title">{job.title}</h3>
                        <p className="job-company">{job.company}</p>
                        <p className="job-location">{job.location}</p>
                        <p className="job-salary">{job.salary}</p>
                        <button className="apply-button">Apply Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecommendedJobs;
