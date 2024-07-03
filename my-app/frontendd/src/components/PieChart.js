// src/components/PieChart.js
import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { fetchPieChartData } from '../api';

const PieChart = ({ month }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchPieChartData(month);
      const categories = (response.data || []).map(item => item.category);
      const counts = (response.data || []).map(item => item.count);

      setData({
        labels: categories,
        datasets: [{
          data: counts,
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
          ],
        }],
      });
    };

    fetchData();
  }, [month]);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h2>Pie Chart</h2>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
