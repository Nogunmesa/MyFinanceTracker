import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useDataContext } from '../Context/DataContext';
import Chart from 'chart.js/auto';

function WeeklySummary() {
  const { transactions, accounts } = useDataContext();

  // Calculate weekly expenses and budget here
  const today = new Date();
  const oneWeekAgo = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

  const weeklyExpensesByCategory = {}; // Object to store spending for each category

  transactions
    .filter((transaction) => new Date(transaction.date) >= oneWeekAgo && transaction.type === 'expense')
    .forEach((transaction) => {
      if (weeklyExpensesByCategory[transaction.category]) {
        weeklyExpensesByCategory[transaction.category] += parseFloat(transaction.amount);
      } else {
        weeklyExpensesByCategory[transaction.category] = parseFloat(transaction.amount);
      }
    });

  const data = {
    labels: Object.keys(weeklyExpensesByCategory), // Category names as labels
    datasets: [
      {
        label: 'Expenses',
        data: Object.values(weeklyExpensesByCategory), // Spending values for each category
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
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
            x: {
              type: 'category',
            },
            y: {
              beginAtZero: true, // Start y-axis from zero
            },
          },
        }}
      />
    </div>
  );
}

export default WeeklySummary;
