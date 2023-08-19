// SetUp.js
import React, { useState, useEffect, useRef } from 'react';
import AddAccountForm from './AddAccountForm';
import { useDataContext } from '../../Context/DataContext'; //Import the DataContext
import './SetupStyles.css';

function SetUp() {
  const { accounts, addAccount, handleDeleteAccount, calculateUpdatedBalance } = useDataContext();
  const [openForm, setOpenForm] = useState(false); // Initialize to false
  const formRef = useRef(null);

  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      setOpenForm(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="setup-container">
      <h2 className="accounts-title">Accounts</h2>
      {accounts.map((account, index) => (
        <div key={index} className="account-card">
          <div className="account-info">
          {/* Display account details */}
          <div className="account-name-box" style={{ width: account.name.length * 10 + 'px' }}>
          <p className="account-name">{account.name}</p>
          </div>
          <p className= "other-info">{account.accountType}</p>
          <p className="other-info">xxxx xxxx xxxx {account.accountNumber.slice(-4)}</p> {/* Format the account number */}
          <p className="balance">${account.balance}</p>
        </div>
        <button className="delete-button" onClick={() => handleDeleteAccount(index)}>
          X
        </button>
        </div>
      ))}
      <div className="add-account-card" onClick={() => setOpenForm(true)}>
      <div className="add-account-circle">
        {/* Plus sign icon */}
        <span className="plus-sign">+</span>
      </div>
        <p className="add-account-text">Add new account</p>
      </div>
      {openForm && (
        <div className="overlay">
          <div className="form-popout" ref={formRef}>
            <div className="form-container">
              <AddAccountForm onAddAccount={addAccount} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


export default SetUp;
