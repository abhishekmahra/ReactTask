// src/components/Transactions.js
import React, { useEffect, useState } from 'react';
import { fetchTransactions } from '../api';

const Transactions = ({ month }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchTransactions(month);
      setTransactions(response.data || []);
    };

    fetchData();
  }, [month]);

  if (!transactions.length) return <div>No Transactions</div>;

  return (
    <div>
      <h2>Transactions</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>{transaction.title} - {transaction.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
