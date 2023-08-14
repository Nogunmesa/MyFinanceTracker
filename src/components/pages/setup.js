import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Setup() {
  const [accountType, setAccountType] = useState('');
  const [accountName, setAccountName] = useState('');
  const [currentAmount, setCurrentAmount] = useState('');
  const [registeredAccounts, setRegisteredAccounts] = useState([]);

  useEffect(() => {
    // Fetch all accounts from the server when the component mounts and on every update
    fetchAccounts();
  }, []);

  const fetchAccounts = () => {
    // Fetch account data from the server
    axios.get('http://localhost:8080/api/accounts') // Update the URL
      .then((response) => setRegisteredAccounts(response.data))
      .catch((error) => console.error('Error fetching accounts:', error));
  };

  const createAccount = () => {
    // Send a POST request to create a new account
    axios.post('http://localhost:8080/api/accounts', { // Update the URL
      accountType,
      accountName,
      currentAmount: parseFloat(currentAmount),
    })
      .then((response) => {
        fetchAccounts(); // Fetch accounts again to get the updated list
        setAccountType('');
        setAccountName('');
        setCurrentAmount('');
      })
      .catch((error) => console.error('Error creating account:', error));
  };

  return (
    <div className="container">
      <h1>Account Setup</h1>
      <div id="accountForm">
        <label htmlFor="accountType">Choose an account type:</label>
        <select id="accountType" value={accountType} onChange={(e) => setAccountType(e.target.value)}>
          <option value="savings">Savings</option>
          <option value="checkings">Checkings</option>
        </select>
        <br />
        <label htmlFor="accountName">Account Name:</label>
        <input type="text" id="accountName" value={accountName} onChange={(e) => setAccountName(e.target.value)} placeholder="Enter account name" />
        <br />
        <label htmlFor="currentAmount">Current Amount:</label>
        <input type="number" id="currentAmount" value={currentAmount} onChange={(e) => setCurrentAmount(e.target.value)} placeholder="Enter current amount" />
        <br />
        <button onClick={createAccount}>Create Account</button>
      </div>
      <div id="registeredAccounts">
        <h2>Registered Accounts:</h2>
        <ul>
          {registeredAccounts.map((account) => (
            <li key={account.id}>
              {account.accountName} ({account.accountType}): ${account.currentAmount}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Setup;
