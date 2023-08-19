import React, { useState, useRef } from 'react';
import { useDataContext } from '../../Context/DataContext';
import './Transactions.css';

function Transactions() {
  const { accounts, transactions, addTransaction } = useDataContext();
  const [openForm, setOpenForm] = useState(false);
  const formRef = useRef(null);

  const [selectedAccountIndex, setSelectedAccountIndex] = useState(0);
  const [transactionType, setTransactionType] = useState('expense');
  const [transactionAmount, setTransactionAmount] = useState('');
  const [transactionCategory, setTransactionCategory] = useState('');

  const handleAddTransaction = (e) => {
    e.preventDefault();

    if (isNaN(transactionAmount) || parseFloat(transactionAmount) <= 0) {
      alert('Transaction amount must be a positive number');
      return;
    }

    const signedTransactionAmount =
      transactionType === 'expense' ? -parseFloat(transactionAmount) : parseFloat(transactionAmount);
      console.log('Transaction Type:', transactionType);
      console.log('Transaction Amount:', signedTransactionAmount);
      console.log(selectedAccountIndex);

    addTransaction(selectedAccountIndex, {
      type: transactionType,
      amount: signedTransactionAmount,
      category: transactionCategory,
    });

    setTransactionType('expense');
    setTransactionAmount('');
    setTransactionCategory('');
    setOpenForm(false); // Close the form after adding a transaction
  };

  const handleFormClick = (e) => {
    e.stopPropagation();
  }

  return (
    <div className="transactions-container">
      <h2>Expense Tracking and Income Logging</h2>
      <div className="add-transaction-card" onClick={() => setOpenForm(true)}>
        <div className="add-transaction-circle">
          <span className="plus-sign">+</span>
        </div>
        <p className="add-transaction-text">Add new transaction</p>
      </div>
      {openForm && (
        <div className="transactions-overlay" onClick={() => setOpenForm(false)}>
          <div className="transactions-form-popout" ref={formRef} onClick={handleFormClick}>
            <form onSubmit={handleAddTransaction}>  <label>
                  Select Account:
                  <select
                    value={selectedAccountIndex}
                    onChange={(e) => setSelectedAccountIndex(parseInt(e.target.value))}
                  >
                    {accounts.map((account, index) => (
                      <option key={index} value={index}>
                        {account.name}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
            Transaction Type:
            <select
              value={transactionType}
              onChange={(e) => setTransactionType(e.target.value)}
            >
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
          </label>
          <label>
            Transaction Amount:
            <input
              type="number"
              value={transactionAmount}
              onChange={(e) => setTransactionAmount(e.target.value)}
              required
            />
          </label>
          <label>
            Transaction Category:
            <input
              type="text"
              value={transactionCategory}
              onChange={(e) => setTransactionCategory(e.target.value)}
              required
            />
          </label>
              <button type="submit">Add Transaction</button>
            </form>
          </div>
        </div>
      )}
      {/* Display transaction logs here */}
      <div className="transaction-logs">
        <h3>Transaction Logs</h3>
        <ul>
          {transactions.map((transaction, index) => (
            <li key={index}>
              Account: {accounts[transaction.accountIndex].name} | Type: {transaction.type} | Amount: ${transaction.amount} | Category: {transaction.category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Transactions;