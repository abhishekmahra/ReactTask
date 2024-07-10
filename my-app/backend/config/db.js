const { Sequelize } = require('sequelize');
require('dotenv').config();

// Load environment variables
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env;


// Initialize Sequelize with MySQL dialect
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'mysql', // Specify the dialect explicitly
});

module.exports = sequelize;
