// src/components/App.js
import React, { useState } from 'react';
import Transactions from './Transactions';
import Statistics from './Statistics';
import BarChart from './Barchart';
import PieChart from './PieChart';
import Combined from './Combined';
import { Container, Typography, Select, MenuItem } from '@mui/material';

function App() {
  const [month, setMonth] = useState(1);

  return (
    <Container>
      <Typography variant="h3" gutterBottom>Product Transactions Dashboard</Typography>
      <label>
        Select Month:
        <Select value={month} onChange={(e) => setMonth(e.target.value)}>
          <MenuItem value={1}>January</MenuItem>
          <MenuItem value={2}>February</MenuItem>
          <MenuItem value={3}>March</MenuItem>
          <MenuItem value={4}>April</MenuItem>
          <MenuItem value={5}>May</MenuItem>
          <MenuItem value={6}>June</MenuItem>
          <MenuItem value={7}>July</MenuItem>
          <MenuItem value={8}>August</MenuItem>
          <MenuItem value={9}>September</MenuItem>
          <MenuItem value={10}>October</MenuItem>
          <MenuItem value={11}>November</MenuItem>
          <MenuItem value={12}>December</MenuItem>
        </Select>
      </label>

      <Transactions month={month} />
      <Statistics month={month} />
      <BarChart month={month} />
      <PieChart month={month} />
      <Combined month={month} />
    </Container>
  );
}

export default App;
