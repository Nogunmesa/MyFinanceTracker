import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages';
import Login from './containers/Login';

export default function App(){
    return(
        <Router>
            <Routes>
      <Route path="/" element={<Home />} />
            
      <Route path="/login" element={<Login />} />

            </Routes>
        </Router>
    );
}