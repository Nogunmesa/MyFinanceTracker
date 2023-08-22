import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component from react-router-dom
import './HomePageStyles.css'

function HomePage() {
  return (
    <div className="home-page">
      <header>
        <h1>Welcome to My Finance App</h1>
        <p>Your personal finance management solution</p>
      </header>
      <section className="features">
        <div className="feature">
          <h2>Track Expenses</h2>
          <p>Keep a record of your expenses to manage your budget effectively.</p>
        </div>
        <div className="feature">
          <h2>Monitor Income</h2>
          <p>Track your sources of income to have a clear overview of your financial health.</p>
        </div>
        <div className="feature">
          <h2>Analyze Trends</h2>
          <p>Visualize your financial trends with charts and graphs for better decision making.</p>
        </div>
      </section>
      <section className="cta">
        <h2>Get Started Today</h2>
        <p>Join us to take control of your finances and achieve your goals.</p>
      </section>
    </div>
  );
}

export default HomePage;
