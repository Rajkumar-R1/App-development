import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/css/JobSearch.css';

const JobSearch = () => {
    const [keyword, setKeyword] = useState('');
    const [location, setLocation] = useState('');
    const [results, setResults] = useState([]);
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        // Add search logic here
        console.log('Searching for:', keyword, 'in', location);
        setResults([
            { title: 'Software Developer', company: 'Company A', location: 'New York, NY' },
            { title: 'Project Manager', company: 'Company B', location: 'San Francisco, CA' },
        ]); // Update with actual search results
    };

    return (
        <div className="jobsearch-container">
            <h2>Search Jobs</h2>
            <form onSubmit={handleSearch} className="search-form">
                <div className="form-group">
                    <label>Keyword:</label>
                    <input
                        type="text"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Location:</label>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="results">
                {results.length > 0 ? (
                    results.map((job, index) => (
                        <div key={index} className="job">
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
