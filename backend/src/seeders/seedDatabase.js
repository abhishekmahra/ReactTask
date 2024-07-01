const axios = require('axios');
const sequelize = require('../config/database');
const Transaction = require('../models/transaction');

async function seedDatabase() {
    const url = 'https://s3.amazonaws.com/roxiler.com/product_transaction.json';
    const { data } = await axios.get(url);

    await sequelize.sync({ force: true });

    await Transaction.bulkCreate(data);

    console.log('Database seeded successfully!');
}

seedDatabase().catch(console.error);
