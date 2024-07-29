import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../pages/css/ApplyJob.css';

const ApplyJob = () => {
    const { companyId } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [coverLetter, setCoverLetter] = useState('');
    const [resume, setResume] = useState(null);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const errors = {};
        if (!name) {
            errors.name = "Name is required";
        }
        if (!email) {
            errors.email = "Email is required";
        }
        if (!phone) {
            errors.phone = "Phone number is required";
        }
        if (!coverLetter) {
            errors.coverLetter = "Cover letter is required";
        }
        if (!resume) {
            errors.resume = "Resume is required";
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            console.log('Applying for a job at:', companyId);
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Phone:', phone);
            console.log('Cover Letter:', coverLetter);
            console.log('Resume:', resume);
            // Handle the job application logic here
            setName('');
            setEmail('');
            setPhone('');
            setCoverLetter('');
            setResume(null);
            navigate('/homepage'); // Redirect to Homepage after submission
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <div className="applyjob-container">
            <div className="applyjob-content">
                <h2>Apply for a Job</h2>
                <form onSubmit={handleSubmit} className="apply-form">
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={errors.name ? 'input-error' : ''}
                        />
                        {errors.name && <div className="error">{errors.name}</div>}
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={errors.email ? 'input-error' : ''}
                        />
                        {errors.email && <div className="error">{errors.email}</div>}
                    </div>
                    <div className="form-group">
                        <label>Phone:</label>
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className={errors.phone ? 'input-error' : ''}
                        />
                        {errors.phone && <div className="error">{errors.phone}</div>}
                    </div>
                    <div className="form-group">
                        <label>Cover Letter:</label>
                        <textarea
                            value={coverLetter}
                            onChange={(e) => setCoverLetter(e.target.value)}
                            className={errors.coverLetter ? 'input-error' : ''}
                        ></textarea>
                        {errors.coverLetter && <div className="error">{errors.coverLetter}</div>}
                    </div>
                    <div className="form-group">
                        <label>Resume:</label>
                        <input
                            type="file"
                            onChange={(e) => setResume(e.target.files[0])}
                            className={errors.resume ? 'input-error' : ''}
                        />
                        {errors.resume && <div className="error">{errors.resume}</div>}
                    </div>
                    <button type="submit" className="apply-button apply-submit-button">Submit Application</button>
                </form>
                <button className="back-button" onClick={() => navigate('/homepage')}>Back to Homepage</button>
            </div>
        </div>
    );
};

export default ApplyJob;
