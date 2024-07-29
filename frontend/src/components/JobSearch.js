import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/css/JobSearch.css';

const JobSearch = () => {
    const [jobTitle, setJobTitle] = useState('');
    const [jobLocation, setJobLocation] = useState('');
    const [results, setResults] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateForm = () => {
        const errors = {};
        if (!jobTitle) {
            errors.jobTitle = "Job Title or Keywords is required";
        }
        if (!jobLocation) {
            errors.jobLocation = "City or Location is required";
        }
        return errors;
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            console.log('Searching for:', jobTitle, 'in', jobLocation);
            // Mock search results
            const searchResults = [
                { title: 'Software Developer', company: 'Company A', location: 'New York, NY' },
                { title: 'Project Manager', company: 'Company B', location: 'San Francisco, CA' },
                { title: 'Data Scientist', company: 'Company C', location: 'Chicago, IL' },
                { title: 'Product Manager', company: 'Company D', location: 'Austin, TX' },
                { title: 'UX Designer', company: 'Company E', location: 'Seattle, WA' },
                { title: 'Marketing Specialist', company: 'Company F', location: 'Boston, MA' },
                { title: 'DevOps Engineer', company: 'Company G', location: 'Denver, CO' },
                { title: 'Frontend Developer', company: 'Company A', location: 'New York, NY' },
                { title: 'Backend Developer', company: 'Company A', location: 'New York, NY' }
            ];
            setResults(searchResults);
            setFilteredResults(searchResults);
        } else {
            setErrors(formErrors);
        }
    };

    const handleCompanyClick = (company) => {
        const filtered = results.filter(job => job.company === company);
        setFilteredResults(filtered);
    };

    return (
        <div className="jobsearch-container">
            <h2>Search Jobs</h2>
            <form onSubmit={handleSearch} className="search-form">
                <div className="form-group">
                    <label>Job Title or Keywords:</label>
                    <input
                        type="text"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                    />
                    {errors.jobTitle && <div className="error">{errors.jobTitle}</div>}
                </div>
                <div className="form-group">
                    <label>City or Location:</label>
                    <input
                        type="text"
                        value={jobLocation}
                        onChange={(e) => setJobLocation(e.target.value)}
                    />
                    {errors.jobLocation && <div className="error">{errors.jobLocation}</div>}
                </div>
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="results">
                {filteredResults.length > 0 ? (
                    filteredResults.map((job, index) => (
                        <div key={index} className="job" onClick={() => handleCompanyClick(job.company)}>
                            <h3>{job.title}</h3>
                            <p>{job.company}</p>
                            <p>{job.location}</p>
                        </div>
                    ))
                ) : (
                    <p>No results found.</p>
                )}
            </div>
            <button className="back-button" onClick={() => navigate('/homepage')}>Back to Homepage</button>
        </div>
    );
};

export default JobSearch;
