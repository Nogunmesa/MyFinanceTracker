import React, { createContext, useContext, useEffect, useState } from 'react';

const DataContext = createContext();

export function DataProvider({ children }) {
  const [accounts, setAccounts] = useState([]);
  const [transactions, setTransactions] = useState([]); // New state for transactions

  // Load data from local storage on component mount
  useEffect(() => {
    const storedAccounts = localStorage.getItem('accounts');
    const storedTransactions = localStorage.getItem('transactions');

    if (storedAccounts) {
      setAccounts(JSON.parse(storedAccounts));
    }

    if (storedTransactions) {
      setTransactions(JSON.parse(storedTransactions));
    }
  }, []);

  // Save data to local storage whenever accounts or transactions change
  useEffect(() => {
    localStorage.setItem('accounts', JSON.stringify(accounts));
  }, [accounts]);

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addAccount = (newAccount) => {
    setAccounts([...accounts, newAccount]);
  };

  const addTransaction = (accountIndex, newTransaction) => {
    const updatedTransactions = [...transactions];
    updatedTransactions.push({
      accountIndex,
      ...newTransaction,
    });
    setTransactions(updatedTransactions);

    // Update account balance based on transaction
    const updatedAccounts = [...accounts];
    const transactionAmount = parseFloat(newTransaction.amount);
    console.log('newupdatedAccountsbalance1', updatedAccounts[0].balance);
    if (newTransaction.type === 'income') {
      updatedAccounts[accountIndex].balance += transactionAmount;

    } else if (newTransaction.type === 'expense') {
      const temp = parseFloat(updatedAccounts[accountIndex].balance) + transactionAmount;
      updatedAccounts[accountIndex].balance = temp;
      console.log('newupdatedAccountsbalance2', updatedAccounts[0].balance);
      console.log('Expense:', transactionAmount);
    }
    setAccounts(updatedAccounts);
  };

  // Other context functions and values
  const handleDeleteAccount = (accountIndex) => {
    const updatedTransactions = transactions.filter(transaction => transaction.accountIndex != accountIndex);
    const updatedAccounts = accounts.filter((account, index) => index !== accountIndex);
    setAccounts(updatedAccounts);
    setTransactions(updatedTransactions);
  };

  return (
    <DataContext.Provider
      value={{
        accounts,
        transactions,
        addAccount,
        addTransaction,
        handleDeleteAccount
        // Other context values
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  return useContext(DataContext);
}