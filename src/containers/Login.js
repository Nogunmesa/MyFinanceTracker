import React, { useState } from 'react';
import './Login.css';
import Login from '../components/Login/Login';

export default function LoginContainer() {
  // State to hold the token once the user is logged in
  const [token, setToken] = useState(null);

  return (
    <div className="LoginContainer">
      {/* Render the Login component and pass the setToken function */}
      <Login setToken={setToken} />
      {/* You can also conditionally render content based on the token */}
      {token && <p>You are logged in with token: {token}</p>}
    </div>
  );
}
