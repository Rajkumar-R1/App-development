import React from 'react';
import '../pages/css/Modal.css';

const ReportsModal = ({ onClose }) => {
    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <h3>View Reports</h3>
                <p>Here you can view site usage and performance reports.</p>
                {/* Add reports viewing functionality here */}
                <button className="close-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default ReportsModal;
