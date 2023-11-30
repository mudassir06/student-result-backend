// config.js
require('dotenv').config();

const { Sequelize } = require('sequelize');

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

// Use these variables in your database connection
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'mysql', // Explicitly specify the dialect
  // Other Sequelize configurations
});

module.exports = sequelize;
