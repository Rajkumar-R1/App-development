import React, { useState } from 'react';
import '../pages/css/UserManagement.css';

const UserManagement = () => {
    const [users, setUsers] = useState([
        // Example user data
        { id: 1, name: 'Alice Johnson', email: 'alice.johnson@example.com' },
        { id: 2, name: 'Bob Williams', email: 'bob.williams@example.com' }
    ]);

    const handleEditUser = (userId) => {
        // Handle user editing logic
        console.log('Edit User functionality here', userId);
    };

    const handleDeleteUser = (userId) => {
        // Handle user deletion logic
        setUsers(users.filter(user => user.id !== userId));
    };

    return (
        <div className="user-management-container">
            <div className="user-management-content">
                <h2>User Management</h2>
                <table className="users-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button className="edit-button" onClick={() => handleEditUser(user.id)}>Edit</button>
                                    <button className="delete-button" onClick={() => handleDeleteUser(user.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserManagement;
