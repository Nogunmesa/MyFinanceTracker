
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Login.css';

// Function to send server login request
async function loginUser(credentials) {
 return fetch('http://localhost:8080/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

// Login props
export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  // Handles form submission
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
    <div className='login-container'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          Password
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
          <button type="submit">Submit</button>
          <p>
            Don't have an account? <Link to="/register">Register now</Link>
          </p>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};