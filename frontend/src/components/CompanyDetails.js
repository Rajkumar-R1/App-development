import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../pages/css/CompanyDetails.css';  // Ensure this path is correct

const CompanyDetails = () => {
    const { id } = useParams(); // Get the company ID from URL params
    const [company, setCompany] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Mocked company data for demonstration
        const companies = [
            { id: 1, name: 'Amazon', description: 'A multinational tech company.', logo: 'https://static.vecteezy.com/system/resources/previews/019/766/223/original/amazon-logo-amazon-icon-transparent-free-png.png' },
            { id: 2, name: 'Flipkart', description: 'An Indian e-commerce company.', logo: 'https://tse3.mm.bing.net/th/id/OIP.vBmeNfhXI1Sue8fAfAmKWAHaEK?w=299&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
            { id: 3, name: 'Google', description: 'A leading search engine company.', logo: 'https://tse4.mm.bing.net/th/id/OIP.D6P-BO32wCApcPIIjt6p5wHaHa?w=185&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
            { id: 4, name: 'Microsoft', description: 'A multinational tech company.', logo: 'https://www.bing.com/th?id=OIP.yDkAvGTSQwMqDFK2MNu5AgHaG8&w=258&h=242&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
            { id: 5, name: 'Facebook', logo: 'https://tse1.mm.bing.net/th?id=OIP.ozO9Qwo_h1JD_bW0r1mn1AHaHa&pid=Api&P=0&h=180' },
            { id: 6, name: 'Apple', logo: 'https://tse4.mm.bing.net/th?id=OIP.KzOFPzLnbMPTb4zlzxi8PgHaHa&pid=Api&P=0&h=180' },
            { id: 7, name: 'Netflix', logo: 'https://tse4.mm.bing.net/th?id=OIP.jBA0fAwgdtDhlcb9lBS66QHaEK&pid=Api&P=0&h=180' },
            { id: 8, name: 'Tesla', logo: 'https://tse3.mm.bing.net/th?id=OIP.5Ih3fXWRacdLdKqV8Hrb7QHaHa&pid=Api&P=0&h=180' },
            { id: 9, name: 'Twitter', logo: 'https://tse4.mm.bing.net/th?id=OIP.H836RvDYYgQZcZn0TC8qBAHaHa&pid=Api&P=0&h=180' },
            { id: 10, name: 'Adobe', logo: 'https://tse2.mm.bing.net/th?id=OIP.Zg3aXyayZ6tkCRmw9b8W5gHaFP&pid=Api&P=0&h=180' },
            { id: 11, name: 'IBM', logo: 'https://tse2.mm.bing.net/th?id=OIP.wD_fKi6K-okPUivWxldiggHaEK&pid=Api&P=0&h=180' },
            { id: 12, name: 'Intel', logo: 'https://tse2.mm.bing.net/th?id=OIP.jo5dPgs47NBogIJiW78VkQHaE8&pid=Api&P=0&h=180' },
            { id: 13, name: 'Oracle', logo: 'https://tse4.mm.bing.net/th?id=OIP.JaaB3HQLC1SooagkjmOeXgHaH6&pid=Api&P=0&h=180' },
            { id: 14, name: 'Samsung', logo: 'https://tse4.mm.bing.net/th?id=OIP.jZnZ_dhHZtahZmn-8isj1wHaC7&pid=Api&P=0&h=180' },
            { id: 15, name: 'Cisco', logo: 'https://tse2.mm.bing.net/th?id=OIP._DniSnYiVI2-8QnTMRcSAwHaE8&pid=Api&P=0&h=180' },
            { id: 16, name: 'Salesforce', logo: 'https://tse1.mm.bing.net/th?id=OIP.Jk_RrpPfIcbbjfx4X1qpfwHaEK&pid=Api&P=0&h=180' },
            { id: 17, name: 'HP', logo: 'https://tse3.mm.bing.net/th?id=OIP.-hlI49I2ctunQyX5Gs-k8QHaHm&pid=Api&P=0&h=180' },
            { id: 18, name: 'Uber', logo: 'https://tse1.mm.bing.net/th?id=OIP.Oy5wfKuZ37KcuXONE7zjnQHaEK&pid=Api&rs=1&c=1&qlt=95&w=195&h=109' },
            { id: 19, name: 'Spotify', logo: 'https://tse1.mm.bing.net/th?id=OIP.K0VLJyKHD2kK1B0lclKLrgHaEK&pid=Api&P=0&h=180' },
            { id: 20, name: 'Slack', logo: 'https://tse4.mm.bing.net/th?id=OIP.zWIwte4ooLmfKX1kQgjk7wHaHw&pid=Api&P=0&h=180' },
            { id: 21, name: 'PayPal', logo: 'https://tse1.mm.bing.net/th?id=OIP.wBKSzdf1HTUgx1Ax_EecKwHaHa&pid=Api&P=0&h=180' },
            { id: 22, name: 'LinkedIn', logo: 'https://tse1.mm.bing.net/th?id=OIP.YO7Fxc7mQc7rx-7pDzclCQAAAA&pid=Api&P=0&h=180' },
            { id: 23, name: 'Airbnb', logo: 'https://tse4.mm.bing.net/th?id=OIP.osh3RSskwfZSEtety5-qXgHaHa&pid=Api&P=0&h=180' },
            { id: 24, name: 'Shopify', logo: 'https://tse2.mm.bing.net/th?id=OIP.setqbO4qogmle6ICnqzHpgHaE8&pid=Api&P=0&h=180' }
            
        ];

        // Find the company by ID
        const company = companies.find(comp => comp.id === parseInt(id));
        if (company) {
            setCompany(company);
        } else {
            setCompany(null);
        }
    }, [id]);

    // Handle the case where no company was found
    if (company === null) {
        return <div>Company not found</div>;
    }

    return (
        <div className="company-details-container">
            <div className="company-details-content">
                <img src={company.logo} alt={`${company.name} Logo`} className="company-logo" />
                <h2>{company.name}</h2>
                <p>{company.description}</p>
                <button onClick={() => navigate(`/apply/${company.id}`)} className="apply-button">Apply for a Job</button>
                <button onClick={() => navigate('/')} className="back-button">Back to Homepage</button>
            </div>
        </div>
    );
};

export default CompanyDetails;
