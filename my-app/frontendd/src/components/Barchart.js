// src/components/BarChart.js
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { fetchBarChartData } from '../api';

const BarChart = ({ month }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchBarChartData(month);
      const ranges = ['0-100', '101-200', '201-300', '301-400', '401-500', '501-600', '601-700', '701-800', '801-900', '901-above'];
      const items = response.data || [];

      setData({
        labels: ranges,
        datasets: [{
          label: '# of Items',
          data: items,
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        }],
      });
    };

    fetchData();
  }, [month]);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h2>Bar Chart</h2>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;
