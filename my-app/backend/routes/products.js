const express = require('express');
const { listTransactions, getStatistics, getBarChart, getPieChart, getCombinedData } = require('../controllers/products');

const router = express.Router();

router.get('/transactions', async (req, res) => {
  try {
    const transactions = await listTransactions(req.query);
    res.json(transactions);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

router.get('/statistics', async (req, res) => {
  try {
    const statistics = await getStatistics(req.query);
    res.json(statistics);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

router.get('/barchart', async (req, res) => {
  try {
    const barChart = await getBarChart(req.query);
    res.json(barChart);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

router.get('/piechart', async (req, res) => {
  try {
    const pieChart = await getPieChart(req.query);
    res.json(pieChart);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

router.get('/combined', getCombinedData);

module.exports = router;
