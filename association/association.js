
const Student = require('../models/studentModel');
const Result = require('../models/resultModel');

// Define associations
Student.hasOne(Result, { foreignKey: 'studentId', unique: true });
Result.belongsTo(Student, { foreignKey: 'studentId', unique: true });

module.exports = {
  Student,
  Result,
};
