// src/components/Statistics.js
import React, { useEffect, useState } from 'react';
import { fetchStatistics } from '../api';

const Statistics = ({ month }) => {
  const [statistics, setStatistics] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchStatistics(month);
      setStatistics(response.data);
    };

    fetchData();
  }, [month]);

  if (!statistics) return <div>Loading...</div>;

  return (
    <div>
      <h2>Statistics</h2>
      <p>Total Sale Amount: {statistics.totalSaleAmount}</p>
      <p>Total Sold Items: {statistics.totalSoldItems}</p>
      <p>Total Not Sold Items: {statistics.totalNotSoldItems}</p>
    </div>
  );
};

export default Statistics;
