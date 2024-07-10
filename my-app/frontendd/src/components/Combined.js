// src/components/Combined.js
import React, { useEffect, useState } from 'react';
import { fetchCombinedData } from '../api';

const Combined = ({ month }) => {
  const [combinedData, setCombinedData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchCombinedData(month);
      setCombinedData(response.data);
    };

    fetchData();
  }, [month]);

  if (!combinedData) return <div>Loading...</div>;

  return (
    <div>
      <h2>Combined Data</h2>
      <pre>{JSON.stringify(combinedData, null, 2)}</pre>
    </div>
  );
};

export default Combined;
