import React, { useState } from 'react';
import './PasswordUpdateForm.css'; // Import the CSS file

const PasswordUpdateForm = ({ onUpdatePassword }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUpdate = () => {
    // Validate new password and confirm password
    if (!newPassword || !confirmPassword) {
      alert('Please enter both the new password and confirm password.');
      return;
    }

    if (newPassword !== confirmPassword) {
      alert('New password and confirm password do not match.');
      return;
    }

    // Pass the new password to the parent component (RegistrationForm)
    onUpdatePassword(newPassword);
  };

  return (
    <div className="password-update-form">
      <h2>Password Update Form</h2>
      <div className="form-group">
        <label htmlFor="newPassword">New Password:</label>
        <input
          type="password"
          id="newPassword"
          className="input-field"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          className="input-field"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-update" onClick={handleUpdate}>
        Update 
      </button>
    </div>
  );
};

export default PasswordUpdateForm;
