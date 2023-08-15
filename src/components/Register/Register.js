import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AuthStyles.css';

// Function to send server registration request
async function registerUser(credentials) {
  return fetch('http://localhost:8080/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  }).then(data => data.json());
}

// Show input error message
function showError(message) {
  var span = document.createElement('span');
  var errorWrap = document.getElementById("error");

  span.appendChild(document.createTextNode(message));
  errorWrap.appendChild(span);

  setTimeout(function(){ span.parentNode.removeChild(span); }, 2000);

  return false;
}



// Login props
export default function Register({ onRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await registerUser({ username, password });
    if (response.token) {
      onRegister(response.token);
      navigate('/login'); // Redirect to the protected route on successful registration
    } else {
      console.error('Registration failed:', response.error);
      setError(response.error);
    }
  };

  return (
    <div className="register-container">
      <div className="auth-box">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">Register</button>
          <p className="error-message">{error}</p>
          <p>
            Already have an account? <Link to="/login">Login now</Link>
          </p>
        </form>
      </div>
    </div>
  );
}