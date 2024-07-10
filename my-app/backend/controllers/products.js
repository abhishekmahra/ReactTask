const { Op } = require('sequelize');
const sequelize = require('../config/db');
const Product = require('../models/Product');

// Function to list transactions with search and pagination
const listTransactions = async (query) => {
  try {
    const { month, search, page = 1, perPage = 10 } = query;
    const where = {};

    if (month) {
      where.dateOfSale = {
        [Op.and]: [
          sequelize.where(sequelize.fn('MONTH', sequelize.col('dateOfSale')), month)
        ]
      };
    }

    if (search) {
      where[Op.or] = [
        { title: { [Op.like]: `%${search}%` } },
        { description: { [Op.like]: `%${search}%` } },
        { price: { [Op.eq]: parseFloat(search) } }
      ];
    }

    const transactions = await Product.findAndCountAll({
      where,
      limit: parseInt(perPage),
      offset: (page - 1) * perPage
    });

    return transactions;
  } catch (err) {
    console.error('Error in listTransactions:', err);
    throw err;
  }
};

// Function to get statistics for a specific month
const getStatistics = async (query) => {
  try {
    const { month } = query;
    const where = {};

    if (month) {
      where.dateOfSale = {
        [Op.and]: [
          sequelize.where(sequelize.fn('MONTH', sequelize.col('dateOfSale')), month)
        ]
      };
    }

    const totalSaleAmount = await Product.sum('price', { where });
    const totalSoldItems = await Product.count({ where: { ...where, sold: true } });
    const totalNotSoldItems = await Product.count({ where: { ...where, sold: false } });

    return {
      totalSaleAmount,
      totalSoldItems,
      totalNotSoldItems
    };
  } catch (err) {
    console.error('Error in getStatistics:', err);
    throw err;
  }
};

// Function to get bar chart data for a specific month
const getBarChart = async (query) => {
  try {
    const { month } = query;
    const where = {};

    if (month) {
      where.dateOfSale = {
        [Op.and]: [
          sequelize.where(sequelize.fn('MONTH', sequelize.col('dateOfSale')), month)
        ]
      };
    }

    const ranges = [
      { range: '0-100', min: 0, max: 100 },
      { range: '101-200', min: 101, max: 200 },
      { range: '201-300', min: 201, max: 300 },
      { range: '301-400', min: 301, max: 400 },
      { range: '401-500', min: 401, max: 500 },
      { range: '501-600', min: 501, max: 600 },
      { range: '601-700', min: 601, max: 700 },
      { range: '701-800', min: 701, max: 800 },
      { range: '801-900', min: 801, max: 900 },
      { range: '901-above', min: 901, max: Infinity }
    ];

    const barChartData = await Promise.all(ranges.map(async ({ range, min, max }) => {
      const count = await Product.count({
        where: {
          ...where,
          price: {
            [Op.and]: [
              { [Op.gte]: min },
              { [Op.lte]: max === Infinity ? undefined : max }
            ]
          }
        }
      });
      return { range, count };
    }));

    return barChartData;
  } catch (err) {
    console.error('Error in getBarChart:', err);
    throw err;
  }
};

// Function to get pie chart data for a specific month
const getPieChart = async (query) => {
  try {
    const { month } = query;
    const where = {};

    if (month) {
      where.dateOfSale = {
        [Op.and]: [
          sequelize.where(sequelize.fn('MONTH', sequelize.col('dateOfSale')), month)
        ]
      };
    }

    const pieChartData = await Product.findAll({
      attributes: [
        'category',
        [sequelize.fn('COUNT', sequelize.col('category')), 'count']
      ],
      where,
      group: ['category']
    });

    const formattedData = pieChartData.map(item => ({
      category: item.dataValues.category,
      count: item.dataValues.count
    }));

    return formattedData;
  } catch (err) {
    console.error('Error in getPieChart:', err);
    throw err;
  }
};

// Function to get combined data from all APIs
const getCombinedData = async (req, res) => {
  try {
    const { month } = req.query;

    const transactionsPromise = listTransactions({ month });
    const statisticsPromise = getStatistics({ month });
    const barChartPromise = getBarChart({ month });
    const pieChartPromise = getPieChart({ month });

    const [transactions, statistics, barChart, pieChart] = await Promise.all([
      transactionsPromise,
      statisticsPromise,
      barChartPromise,
      pieChartPromise
    ]);

    res.json({ transactions, statistics, barChart, pieChart });
  } catch (err) {
    console.error('Error in getCombinedData:', err);
    res.status(500).send('Server Error');
  }
};

module.exports = {
  listTransactions,
  getStatistics,
  getBarChart,
  getPieChart,
  getCombinedData
};
