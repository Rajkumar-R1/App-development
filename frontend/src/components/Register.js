import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/css/Register.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateForm = () => {
        const errors = {};
        if (!username) {
            errors.username = "Username is required";
        }
        if (!email) {
            errors.email = "Email is required";
        }
        if (!password) {
            errors.password = "Password is required";
        }
        if (password !== confirmPassword) {
            errors.confirmPassword = "Passwords do not match";
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            console.log('Username:', username, 'Email:', email, 'Password:', password);
            // Perform registration logic here
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit} className="register-form">
                <div className="form-group">
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {errors.username && <div className="error">{errors.username}</div>}
                </div>
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
                <div className="form-group">
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
                </div>
                <button type="submit" className="register-button">Register</button>
                <p className="login-link">
                    Already have an account? <span onClick={() => navigate('/login')}>Login now</span>
                </p>
            </form>
        </div>
    );
};

export default Register;
