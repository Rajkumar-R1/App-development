import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/css/CompanyList.css';

const companies = [
    { name: 'Amazon', id: 'amazon' },
    { name: 'Flipkart', id: 'flipkart' },
    { name: 'Google', id: 'google' },
    { name: 'Microsoft', id: 'microsoft' },
    { name: 'Facebook', id: 'facebook' },
    { name: 'Apple', id: 'apple' },
    // Add more companies as needed
];

const CompanyList = () => {
    const navigate = useNavigate();

    return (
        <div className="company-list-container">
            <h2>Companies</h2>
            <div className="company-list">
                {companies.map((company) => (
                    <div key={company.id} className="company" onClick={() => navigate(`/company/${company.id}`)}>
                        {company.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CompanyList;
