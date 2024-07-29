import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/css/Homepage.css';  // Ensure this path is correct
import '../pages/css/CompanyList.css';  // Ensure this path is correct

const Homepage = () => {
    const navigate = useNavigate();

    const companies = [
        { id: 1, name: 'Amazon', logo: 'https://static.vecteezy.com/system/resources/previews/019/766/223/original/amazon-logo-amazon-icon-transparent-free-png.png' },
        { id: 2, name: 'Flipkart', logo: 'https://tse3.mm.bing.net/th/id/OIP.vBmeNfhXI1Sue8fAfAmKWAHaEK?w=299&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
        { id: 3, name: 'Google', logo: 'https://tse4.mm.bing.net/th/id/OIP.D6P-BO32wCApcPIIjt6p5wHaHa?w=185&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
        { id: 4, name: 'Microsoft', logo: 'https://www.bing.com/th?id=OIP.yDkAvGTSQwMqDFK2MNu5AgHaG8&w=258&h=242&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
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

    const handleCompanyClick = (companyId) => {
        navigate(`/company/${companyId}`);
    };

    return (
        <div className="homepage-container">
            <header className="homepage-header">
                <h1>Welcome to JobSearchPortal</h1>
                <p>Your one-stop solution for finding your dream job.</p>
            </header>

            <section className="homepage-section">
                <h2>Companies Available</h2>
                <div className="company-list-container">
                    <div className="company-list">
                        {companies.map((company) => (
                            <div
                                key={company.id}
                                className="company-item"
                                onClick={() => handleCompanyClick(company.id)}
                            >
                                <img src={company.logo} alt={`${company.name} Logo`} className="company-logo" />
                                <h3>{company.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="homepage-content">
                <section className="homepage-section">
                    <h2>Search Jobs</h2>
                    <p>Find the best jobs that match your skills and preferences.</p>
                    <button className="homepage-button" onClick={() => navigate('/search')}>Start Searching</button>
                </section>

                <section className="homepage-section">
                    <h2>Post a Job</h2>
                    <p>Are you an employer? Post your job openings and find the right candidates.</p>
                    <button className="homepage-button" onClick={() => navigate('/post')}>Post a Job</button>
                </section>
            </div>

            <footer className="homepage-footer">
                <div className="footer-logo">
                   
                </div>
                <div className="footer-content">
                    <p>Follow us on:</p>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram Logo" className="footer-icon" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook Logo" className="footer-icon" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://th.bing.com/th?id=OIP.biG9UdrkNGTbvX1YvOvY4AHaHa&w=250&h=250&c=8&rs=1&qlt=30&o=6&dpr=1.3&pid=3.1&rm=2" alt="Twitter Logo" className="footer-icon" />
                    </a>
                </div>
                <p>© 2024 JobSearchPortal. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Homepage;
