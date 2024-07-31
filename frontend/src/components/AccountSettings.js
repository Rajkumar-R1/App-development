import React, { useState } from 'react';
import '../pages/css/AccountSettings.css';

const AccountSettings = () => {
    const [settings, setSettings] = useState({
        email: '',
        password: '',
        notifications: true,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setSettings(prevSettings => ({
            ...prevSettings,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSave = () => {
        // Handle save logic here
        console.log('Settings saved:', settings);
    };

    return (
        <div className="account-settings-container">
            <div className="account-settings-content">
                <h2>Account Settings</h2>
                <form className="settings-form">
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={settings.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={settings.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>
                            <input
                                type="checkbox"
                                name="notifications"
                                checked={settings.notifications}
                                onChange={handleChange}
                            />
                            Enable Notifications
                        </label>
                    </div>
                    <button type="button" className="save-button" onClick={handleSave}>Save Changes</button>
                </form>
            </div>
        </div>
    );
};

export default AccountSettings;
