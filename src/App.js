import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import useToken from './components/App/useToken';
import Login from './components/Login/Login';
import Register from './components/Register/Register'; // Import the Register component
import PrivateApp from './components/App/App';

const App = () => {
  const { token, setToken } = useToken();
  const isAuthenticated = !!token;

  const handleRegister = newToken => {
    if (newToken) {
      setToken(newToken); // Update token on successful registration
    }
  };

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register onRegister={handleRegister} />} />
        <Route
          path="/private/*"
          element={isAuthenticated ? <PrivateApp /> : <Navigate to="/login" />}
        />
        {/* Add more public routes */}
      </Routes>
    </Router>
  );
};

export default App;
