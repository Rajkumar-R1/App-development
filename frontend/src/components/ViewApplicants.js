import React, { useState } from 'react';
import '../pages/css/ViewApplicants.css';

const ViewApplicants = () => {
    const [applicants, setApplicants] = useState([
        // Example applicant data
        { id: 1, name: 'John Doe', email: 'john.doe@example.com', job: 'Software Engineer' },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', job: 'Product Manager' }
    ]);

    return (
        <div className="view-applicants-container">
            <div className="view-applicants-content">
                <h2>View Applicants</h2>
                <table className="applicants-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Applied Job</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applicants.map(applicant => (
                            <tr key={applicant.id}>
                                <td>{applicant.name}</td>
                                <td>{applicant.email}</td>
                                <td>{applicant.job}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplicants;
