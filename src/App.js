import React from 'react';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';
import SetUp from './pages/setup';
import SignUp from './pages/signup';
import Transaction from './pages/transactions';


function App() {
  return (
      <Router>
          <Navbar />
          <Routes>
              <Route exact path='/' exact element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/setup' element={<SetUp />} />
              <Route path='/transactions' element={<Transaction />} />
              <Route path='/signup' element={<SignUp />} />
          </Routes>
      </Router>
  );
}

export default App;
