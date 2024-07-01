const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Transaction = sequelize.define('Transaction', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
    dateOfSale: DataTypes.DATE,
    sold: DataTypes.BOOLEAN,
    category: DataTypes.STRING
});

module.exports = Transaction;
