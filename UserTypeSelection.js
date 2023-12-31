import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './UserTypeSelection.css';

const UserTypeSelection = ({ registrationDetails }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Validate username and password
    if (!username) {
      alert('Please enter a username');
      return;
    }

    if (!password) {
      alert('Please enter a password');
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
      alert(
        'Password should contain at least 1 uppercase letter, 1 special character, 1 digit, and have a minimum length of 6 characters.'
      );
      return;
    }

    // Check if login details match registration details
    if (
      registrationDetails &&
      registrationDetails.username === username &&
      registrationDetails.password.trim() === password.trim()
    ) {
      setIsLoggedIn(true);
    } else {
      alert("Incorrect details. Please sign in with the correct username and password.");
    }
  };

  // Redirect to home if logged in
  if (isLoggedIn) {
    alert(`Your login is successful, ${username}!`);
    return <Navigate to="/home" />;
  }

  return (
    <div>
      <div className="main-container">
        <h1>Welcome to the World of Artistry</h1>
        <div className="form-card">
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            className="input-field"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link to="/PasswordUpdateForm">Forgot Password</Link>
          <button className="btn btn-outline-dark" onClick={handleLogin}>
            Login
          </button>
          <p>
            Don't have an account<Link to="/registrationform">Sign In here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserTypeSelection;
