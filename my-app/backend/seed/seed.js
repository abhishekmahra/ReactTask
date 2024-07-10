const axios = require('axios');
const sequelize = require('../config/db');
const Product = require('../models/Product');

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
    const products = response.data;

    await Product.bulkCreate(products);

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding the database:', error);
  } finally {
    await sequelize.close();
  }
};

seedDatabase();
