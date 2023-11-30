// models/student.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Student = sequelize.define('Student', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    primaryKey: true,
    autoIncrement: true,
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false,
  },
 
  // Add other fields as needed
});

module.exports = Student;
