import React from 'react';
import '../pages/css/Modal.css';

const JobManagementModal = ({ onClose }) => {
    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <h3>Manage Jobs</h3>
                <p>Here you can create, update, and delete job postings.</p>
                {/* Add job management functionality here */}
                <button className="close-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default JobManagementModal;
