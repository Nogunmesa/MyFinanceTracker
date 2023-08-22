import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { useDataContext } from '../Context/DataContext';
import Chart from 'chart.js/auto';

function WeeklySummary() {
  const { transactions, accounts } = useDataContext();
  const [balanceChanges, setBalanceChanges] = useState([]);

  useEffect(() => {
    // Calculate balance changes caused by transactions
    const initialBalances = accounts.map(account => account.balance);
    const updatedBalanceChanges = transactions.map(transaction => parseFloat(transaction.amount));
    const cumulativeBalanceChanges = updatedBalanceChanges.reduce((acc, amount) => [...acc, acc[acc.length - 1] + amount], initialBalances);

    setBalanceChanges(cumulativeBalanceChanges);
  }, [transactions, accounts]);

  const transactionLabels = transactions.map((transaction, index) => `Transaction ${index + 1}`);

  const data = {
    labels: transactionLabels, // Labels for each transaction
    datasets: [
      {
        label: 'Balance Changes',
        data: balanceChanges, // Cumulative balance changes after each transaction
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Weekly Summary</h2>
      <Bar
        data={data}
        options={{
          scales: {
            y: {
              beginAtZero: false, // Allow negative values on y-axis for balance changes
            },
          },
        }}
      />
    </div>
  );
}

export default WeeklySummary;

