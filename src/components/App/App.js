import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import { DataProvider } from '../Context/DataContext';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Home from '../pages/index';
import SetUp from '../pages/SetUp/setup';
import WeeklySummary from '../pages/WeeklySummary';
import Transaction from '../pages/Transactions/transactions';
import useToken from './useToken';
import Navbar from '../Navbar';

function App() {
  // Use useToken hook to manage authentication state
  const { token, setToken, removeToken } = useToken();

  // Log initial token when the componenet mounts
  useEffect(() => {
    console.log('token after registration (inside useEffect): ', token);
  }, [token]);

  // Set new token for registration
  const handleRegister = async (newToken) => {
    await setToken(newToken); // Wait for setToken to complete
    console.log('token after registration (inside handleRegister): ', newToken);
  };

  // Logout user by removing token
  const handleLogout = () => {
    removeToken();
  };

  // Render content based upon the presence of a token
  if (!token) { // If null token, show login/register options
    return (
      <Router>
      <div className='app-container'>
      <div className="image-container">
        <img src= '/logo2.png' />
      </div>

        <Routes>
          {/* Redirect to /login by default */}
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/register" element={<Register onRegister={handleRegister} />} />
            {/* Catch-all route that redirects any undefined paths to /login */}
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
      </Router>
    );
  }

  // If token exists, user is logged in or registered
  return (
    <DataProvider>
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
        <Route path="/weeklysummary" element={<WeeklySummary />} />
        <Route path="/transactions" element={<Transaction />} />
            {/* Catch-all route that redirects any undefined paths to /login */}
        <Route path="*" element={<Navigate to="/index" />} />
      </Routes>
    </Router>
    </DataProvider>
  );
}

export default App;