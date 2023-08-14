import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Home from '../pages/index';
import SetUp from '../pages/setup';
import SignUp from '../pages/signup';
import Transaction from '../pages/transactions';
import useToken from './useToken';
import Navbar from '../Navbar';
import './App.css'; // Import the CSS styles

function App() {
  const { token, setToken, removeToken } = useToken();
  console.log('initial token: ', token);

  useEffect(() => {
    console.log('token after registration (inside useEffect): ', token);
  }, [token]);

  const handleRegister = async (newToken) => {
    await setToken(newToken); // Wait for setToken to complete
    console.log('token after registration (inside handleRegister): ', newToken);
  };

  const handleLogout = () => {
    removeToken();
  };

  if (!token) {
    return (
      <Router>
        <div className="auth-container">
          <div className="auth-box">
            <Routes>
              <Route path="/login" element={<Login setToken={setToken} />} />
              <Route
                path="/register"
                element={<Register onRegister={handleRegister} />}
              />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>
      <Navbar />
      <Routes>
        <Route path="/index" element={<Home />} />
        <Route path="/setup" element={<SetUp />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/transactions" element={<Transaction />} />
      </Routes>
    </Router>
  );
}

export default App;
