import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes }
 from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages';
import SetUp from './pages/SetUp';
import SignUp from './pages/SignUp';
import Transaction from './pages/Transaction';
import Login from '../Login/Login';
import useToken from './useToken'; // Import the useToken hook

export default function App() {
  const {token, setToken} = useToken();
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/" element={<Home />} />
        <Route path="/setup" element={<SetUp />} />
        <Route path="/transactions" element={<Transaction />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}
