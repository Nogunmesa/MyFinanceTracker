
import React, { useState } from 'react';
import { useDataContext } from '../../Context/DataContext'; //Import the DataContext
import './AddAccountFormStyles.css';

function AddAccountForm({ onAddAccount }) {
  const { addAccount } = useDataContext();

  const [name, setName] = useState('');
  const [accountType, setAccountType] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [balance, setBalance] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate account number length
    if (accountNumber.length !== 4) {
      alert('Account number must be 4 digits');
      return;
    }

    const newAccount = { name, accountType, accountNumber, balance };
    addAccount(newAccount); // Use the addAccount function from DataContext

    // Reset input fields
    setName('');
    setAccountType('');
    setAccountNumber('');
    setBalance('');
  };

  return (
    <div className="account-form">
      <h3>Add New Account</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Account Type:
          <select
            id="accountType"
            value={accountType}
            onChange={(e) => setAccountType(e.target.value)}
            required
          >
            <option value="">Select an account type</option>
            <option value="Savings Account">Savings</option>
            <option value="Checking Account">Checkings</option>
          </select>
        </label>
        <label>
          Account Number (Last 4 digits):
          <input
            type="text"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            maxLength="4" // Limit to 4 characters
            pattern="\d{4}" // Validate using regular expression
            required
          />
        </label>
        <label>
          Balance:
          <input
            type="number"
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add Account</button>
      </form>
    </div>
  );
}

export default AddAccountForm;