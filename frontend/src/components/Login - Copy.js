import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/css/Login.css';

const Login = ({ setUserType }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateForm = () => {
        const errors = {};
        if (!email) {
            errors.email = "Email is required";
        }
        if (!password) {
            errors.password = "Password is required";
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            console.log('Email:', email, 'Password:', password);
            if (email === 'admin@example.com') {
                setUserType('admin');
                navigate('/admin-dashboard');
            } else if (email === 'company@example.com') {
                setUserType('company');
                navigate('/company-dashboard');
            } else {
                setUserType('user');
                navigate('/user-dashboard');
            }
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <div className="error">{errors.email}</div>}
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <div className="error">{errors.password}</div>}
                    </div>
                    <button type="submit" className="login-button">Login</button>
                    <p className="signup-link">
                        Don't have an account? <span onClick={() => navigate('/register')}>Sign up now</span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
