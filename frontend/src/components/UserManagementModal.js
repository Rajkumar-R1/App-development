import React from 'react';
import '../pages/css/Modal.css';

const UserManagementModal = ({ onClose }) => {
    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <h3>Manage Users</h3>
                <p>Here you can view, edit, and delete registered users.</p>
                {/* Add user management functionality here */}
                <button className="close-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default UserManagementModal;
