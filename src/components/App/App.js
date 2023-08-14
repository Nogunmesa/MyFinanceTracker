import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../Login/Login';
import Home from '../pages/index';
import SetUp from '../pages/setup';
import SignUp from '../pages/signup';
import Transaction from '../pages/transactions';
import useToken from './useToken';

function App(){
  const {token, setToken} = useToken();

  if(!token){
    console.log('Null token continuing to Login')
    return <Login setToken={setToken} />
  }
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/setup" element={<SetUp />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/transactions" element={<Transaction />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
