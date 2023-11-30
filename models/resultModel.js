// models/result.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config');
const Student = require('./studentModel');

const Result = sequelize.define('Result', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  math: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  english: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  computer: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  islamiat: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  studentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// Define the association
// Result.belongsTo(Student, { foreignKey: 'studentId', targetKey: 'id' });
// Student.hasOne(Result, { foreignKey: 'studentId', sourceKey: 'id' });

module.exports = Result;
