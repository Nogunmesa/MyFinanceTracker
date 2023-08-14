import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AuthStyles.css';

async function registerUser(credentials) {
  return fetch('http://localhost:8080/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  }).then(data => data.json());
}


export default function Register({ onRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await registerUser({ username, password });
    if (response.token) {
      onRegister(response.token);
      navigate('/login'); // Redirect to the protected route on successful registration
    } else {
      console.error('Registration failed:', response.error);
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
          <p>
            Already have an account? <Link to="/login">Login now</Link>
          </p>
        </form>
      </div>
    </div>
  );
}