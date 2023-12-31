import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleUpdatePassword = (newPassword) => {
    // Update the password in the state
    setPassword(newPassword);
    alert('Password updated successfully!');
  };
  const handleLogin = () => {
    // Validate username, password, and confirmPassword
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

    if (password !== confirmpassword) {
      alert('Password and Confirm Password should match');
      return;
    }

    // If all validations pass, proceed with registration logic
    fetch('http://localhost/artgallery/registerfile.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        username: username,
        password: password,
        confirmpassword: confirmpassword,
      }),
    })
      .then(response => response.text())
      .then(data => {
        console.log(data);
        setIsLoggedIn(true);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  // Redirect to home if logged in
  if (isLoggedIn) {
    alert(`Your registration is successful, ${username}!`);
    navigate('/'); // Use navigate to redirect programmatically
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
            onChange={e => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            className="input-field"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <input
            type="password"
            name="confirmpassword"
            placeholder="Confirm Password"
            className="input-field"
            value={confirmpassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />

          <button className="btn btn-outline-dark" onClick={handleLogin}>
            Register
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
