import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/App/App';
import Login from './containers/Login';

export default function App(){
    return(
        <Router>
            <Routes>
      <Route path="/login" element={<Login />} />

            </Routes>
        </Router>
    );
}