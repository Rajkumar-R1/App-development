import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../pages/css/CompanyDetails.css';

const CompanyDetails = () => {
    const { id } = useParams();
    const [company, setCompany] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Mocked company data for demonstration
        const companies = [
            { 
                id: 1, 
                name: 'Amazon', 
                description: 'A multinational tech company specializing in e-commerce, cloud computing, and digital streaming.', 
                logo: 'https://static.vecteezy.com/system/resources/previews/019/766/223/original/amazon-logo-amazon-icon-transparent-free-png.png',
                jobs: [
                    { title: 'Software Engineer', salary: '$120,000' },
                    { title: 'Product Manager', salary: '$130,000' }
                ]
            },
            { 
                id: 2, 
                name: 'Flipkart', 
                description: 'An Indian e-commerce company offering a wide range of products including electronics, fashion, and home goods.', 
                logo: 'https://tse3.mm.bing.net/th/id/OIP.vBmeNfhXI1Sue8fAfAmKWAHaEK?w=299&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                jobs: [
                    { title: 'Data Scientist', salary: '$110,000' },
                    { title: 'UX Designer', salary: '$105,000' }
                ]
            },
            { 
                id: 3, 
                name: 'Google', 
                description: 'A leading search engine company known for its innovations in internet services, AI, and digital advertising.', 
                logo: 'https://tse4.mm.bing.net/th/id/OIP.D6P-BO32wCApcPIIjt6p5wHaHa?w=185&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                jobs: [
                    { title: 'Software Engineer', salary: '$150,000' },
                    { title: 'Product Designer', salary: '$140,000' }
                ]
            },
            { 
                id: 4, 
                name: 'Microsoft', 
                description: 'A multinational technology company focusing on software, hardware, and cloud computing services.', 
                logo: 'https://www.bing.com/th?id=OIP.yDkAvGTSQwMqDFK2MNu5AgHaG8&w=258&h=242&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
                jobs: [
                    { title: 'Cloud Engineer', salary: '$140,000' },
                    { title: 'Business Analyst', salary: '$125,000' }
                ]
            },
            { 
                id: 5, 
                name: 'Facebook', 
                description: 'A social media giant that connects people globally and provides a platform for personal and professional networking.', 
                logo: 'https://tse1.mm.bing.net/th?id=OIP.ozO9Qwo_h1JD_bW0r1mn1AHaHa&pid=Api&P=0&h=180',
                jobs: [
                    { title: 'Software Engineer', salary: '$130,000' },
                    { title: 'Data Analyst', salary: '$115,000' }
                ]
            },
            { 
                id: 6, 
                name: 'Apple', 
                description: 'A global technology leader known for its innovation in consumer electronics, software, and online services.', 
                logo: 'https://tse4.mm.bing.net/th?id=OIP.KzOFPzLnbMPTb4zlzxi8PgHaHa&pid=Api&P=0&h=180',
                jobs: [
                    { title: 'iOS Developer', salary: '$140,000' },
                    { title: 'Product Marketing Manager', salary: '$130,000' }
                ]
            },
            { 
                id: 7, 
                name: 'Netflix', 
                description: 'A leading streaming service offering a wide variety of award-winning TV shows, movies, anime, documentaries, and more.', 
                logo: 'https://tse4.mm.bing.net/th?id=OIP.jBA0fAwgdtDhlcb9lBS66QHaEK&pid=Api&P=0&h=180',
                jobs: [
                    { title: 'Content Strategist', salary: '$120,000' },
                    { title: 'Software Engineer', salary: '$135,000' }
                ]
            },
            { 
                id: 8, 
                name: 'Tesla', 
                description: 'An electric vehicle and clean energy company known for its innovation in sustainable transportation and energy solutions.', 
                logo: 'https://tse3.mm.bing.net/th?id=OIP.5Ih3fXWRacdLdKqV8Hrb7QHaHa&pid=Api&P=0&h=180',
                jobs: [
                    { title: 'Mechanical Engineer', salary: '$125,000' },
                    { title: 'Electrical Engineer', salary: '$130,000' }
                ]
            },
            { 
                id: 9, 
                name: 'Twitter', 
                description: 'A social media platform that allows users to post and interact with short messages called "tweets".', 
                logo: 'https://tse4.mm.bing.net/th?id=OIP.H836RvDYYgQZcZn0TC8qBAHaHa&pid=Api&P=0&h=180',
                jobs: [
                    { title: 'Backend Engineer', salary: '$120,000' },
                    { title: 'Product Manager', salary: '$130,000' }
                ]
            },
            { 
                id: 10, 
                name: 'Adobe', 
                description: 'A software company known for its creative and multimedia software products, including Photoshop and Illustrator.', 
                logo: 'https://tse2.mm.bing.net/th?id=OIP.Zg3aXyayZ6tkCRmw9b8W5gHaFP&pid=Api&P=0&h=180',
                jobs: [
                    { title: 'Creative Director', salary: '$140,000' },
                    { title: 'Software Developer', salary: '$125,000' }
                ]
            },
            { 
                id: 11, 
                name: 'IBM', 
                description: 'An information technology company offering cloud platforms, AI solutions, and consulting services.', 
                logo: 'https://tse2.mm.bing.net/th?id=OIP.wD_fKi6K-okPUivWxldiggHaEK&pid=Api&P=0&h=180',
                jobs: [
                    { title: 'AI Engineer', salary: '$135,000' },
                    { title: 'Business Consultant', salary: '$120,000' }
                ]
            },
            { 
                id: 12, 
                name: 'Intel', 
                description: 'A leading semiconductor company known for its microprocessors and other computing innovations.', 
                logo: 'https://tse2.mm.bing.net/th?id=OIP.jo5dPgs47NBogIJiW78VkQHaE8&pid=Api&P=0&h=180',
                jobs: [
                    { title: 'Chip Designer', salary: '$140,000' },
                    { title: 'Hardware Engineer', salary: '$130,000' }
                ]
            },
            { 
                id: 13, 
                name: 'Oracle', 
                description: 'A multinational computer technology corporation that provides enterprise software and hardware systems.', 
                logo: 'https://tse4.mm.bing.net/th?id=OIP.JaaB3HQLC1SooagkjmOeXgHaH6&pid=Api&P=0&h=180',
                jobs: [
                    { title: 'Database Administrator', salary: '$125,000' },
                    { title: 'Cloud Solutions Architect', salary: '$135,000' }
                ]
            },
            { 
                id: 14, 
                name: 'Samsung', 
                description: 'A global leader in consumer electronics, including smartphones, TVs, and home appliances.', 
                logo: 'https://tse4.mm.bing.net/th?id=OIP.jZnZ_dhHZtahZmn-8isj1wHaC7&pid=Api&P=0&h=180',
                jobs: [
                    { title: 'Product Manager', salary: '$130,000' },
                    { title: 'Software Engineer', salary: '$125,000' }
                ]
            },
            { 
                id: 15, 
                name: 'Cisco', 
                description: 'A technology company that designs and sells networking hardware, telecommunications equipment, and other high-technology services.', 
                logo: 'https://tse2.mm.bing.net/th?id=OIP._DniSnYiVI2-8QnTMRcSAwHaE8&pid=Api&P=0&h=180',
                jobs: [
                    { title: 'Network Engineer', salary: '$120,000' },
                    { title: 'Systems Engineer', salary: '$125,000' }
                ]
            },
            { 
                id: 16, 
                name: 'Salesforce', 
                description: 'A cloud-based software company that provides customer relationship management (CRM) services and applications.', 
                logo: 'https://tse1.mm.bing.net/th?id=OIP.Jk_RrpPfIcbbjfx4X1qpfwHaEK&pid=Api&P=0&h=180',
                jobs: [
                    { title: 'CRM Developer', salary: '$130,000' },
                    { title: 'Sales Consultant', salary: '$115,000' }
                ]
            },
            { 
                id: 17, 
                name: 'HP', 
                description: 'A multinational information technology company known for its hardware, including printers and personal computers.', 
                logo: 'https://tse3.mm.bing.net/th?id=OIP.-hlI49I2ctunQyX5Gs-k8QHaHm&pid=Api&P=0&h=180',
                jobs: [
                    { title: 'Product Designer', salary: '$125,000' },
                    { title: 'Technical Support Specialist', salary: '$110,000' }
                ]
            },
            { 
                id: 18, 
                name: 'Uber', 
                description: 'A ride-hailing company that connects drivers with passengers through its mobile app.', 
                logo: 'https://tse1.mm.bing.net/th?id=OIP.Oy5wfKuZ37KcuXONE7zjnQHaEK&pid=Api&rs=1&c=1&qlt=95&w=195&h=109',
                jobs: [
                    { title: 'Operations Manager', salary: '$120,000' },
                    { title: 'Software Engineer', salary: '$135,000' }
                ]
            },
            { 
                id: 19, 
                name: 'Spotify', 
                description: 'A digital music service that gives you access to millions of songs and podcasts.', 
                logo: 'https://tse1.mm.bing.net/th?id=OIP.K0VLJyKHD2kK1B0lclKLrgHaEK&pid=Api&P=0&h=180',
                jobs: [
                    { title: 'Music Data Analyst', salary: '$115,000' },
                    { title: 'Software Engineer', salary: '$130,000' }
                ]
            },
            { 
                id: 20, 
                name: 'Slack', 
                description: 'A collaboration hub that connects your work with the people you work with through channels, messages, and files.', 
                logo: 'https://tse4.mm.bing.net/th?id=OIP.zWIwte4ooLmfKX1kQgjk7wHaHw&pid=Api&P=0&h=180',
                jobs: [
                    { title: 'Product Manager', salary: '$130,000' },
                    { title: 'UX Designer', salary: '$120,000' }
                ]
            },
            { 
                id: 21, 
                name: 'PayPal', 
                description: 'An online payment system that supports online money transfers and serves as an electronic alternative to traditional paper methods.', 
                logo: 'https://tse1.mm.bing.net/th?id=OIP.wBKSzdf1HTUgx1Ax_EecKwHaHa&pid=Api&P=0&h=180',
                jobs: [
                    { title: 'Financial Analyst', salary: '$125,000' },
                    { title: 'Software Engineer', salary: '$130,000' }
                ]
            },
            { 
                id: 22, 
                name: 'LinkedIn', 
                description: 'A professional networking site that allows users to connect with colleagues, seek jobs, and share industry insights.', 
                logo: 'https://tse1.mm.bing.net/th?id=OIP.YO7Fxc7mQc7rx-7pDzclCQAAAA&pid=Api&P=0&h=180',
                jobs: [
                    { title: 'Recruitment Specialist', salary: '$115,000' },
                    { title: 'Software Engineer', salary: '$135,000' }
                ]
            },
            { 
                id: 23, 
                name: 'Airbnb', 
                description: 'An online marketplace for lodging, primarily homestays for vacation rentals, and tourism experiences.', 
                logo: 'https://tse4.mm.bing.net/th?id=OIP.osh3RSskwfZSEtety5-qXgHaHa&pid=Api&P=0&h=180',
                jobs: [
                    { title: 'Host Experience Specialist', salary: '$110,000' },
                    { title: 'Software Engineer', salary: '$125,000' }
                ]
            },
            { 
                id: 24, 
                name: 'Shopify', 
                description: 'An e-commerce platform that allows individuals and businesses to create their own online stores.', 
                logo: 'https://tse2.mm.bing.net/th?id=OIP.setqbO4qogmle6ICnqzHpgHaE8&pid=Api&P=0&h=180',
                jobs: [
                    { title: 'E-commerce Manager', salary: '$130,000' },
                    { title: 'Software Engineer', salary: '$125,000' }
                ]
            }
        ];

        const company = companies.find(comp => comp.id === parseInt(id));
        if (company) {
            setCompany(company);
        } else {
            setCompany(null);
        }
    }, [id]);

    if (company === null) {
        return <div>Company not found</div>;
    }

    return (
        <div className="company-details-container">
            <div className="company-details-content">
                <div className="company-header">
                    <img src={company.logo} alt={`${company.name} Logo`} className="company-logo" />
                    <h2 className="company-name">{company.name}</h2>
                </div>
                <p className="company-description">{company.description}</p>
                {company.jobs && (
                    <div className="job-list">
                        <h3>Available Jobs</h3>
                        <ul>
                            {company.jobs.map((job, index) => (
                                <li key={index} className="job-item">
                                    <h4>{job.title}</h4>
                                    <p>Salary: {job.salary}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <button onClick={() => navigate(`/apply/${company.id}`)} className="apply-button">Apply for a Job</button>
                {/* <button onClick={() => navigate('/')} className="back-button">Back to Homepage</button> */}
            </div>
        </div>
    );
};

export default CompanyDetails;
