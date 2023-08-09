import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login'; //import login component
import Home from './components/pages';

export default function App() {
    return (
      <Router>
        <Routes>
        <Route path="/" element={<Login />} /> {/* Set up the default route */}
        <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    );
  }