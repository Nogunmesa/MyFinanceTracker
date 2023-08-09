import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login'; //import login component
import useToken from './components/App/useToken';
import Home from './components/pages/index';


export default function App() {
  const { token, setToken } = useToken(); // Get the token and setToken from useToken

  return (
    <Router>
      <Routes>
        {/* Pass the setToken function as a prop to the Login component */}
        <Route path="/" element={<Login setToken={setToken} />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}