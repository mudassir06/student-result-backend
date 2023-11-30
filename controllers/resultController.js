// controllers/resultController.js
const Result = require('../models/resultModel');
// controllers/resultController.js
const Student = require('../models/studentModel');

exports.createResult = async (req, res) => {
  const { studentId, math, english, computer, islamiat } = req.body;

  try {
    // Create a new result associated with a student
    const newResult = await Result.create({
      studentId, // Assuming the foreign key is named studentId
      math,
      english,
      computer,
      islamiat,
    });

    res.status(201).json(newResult);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};


exports.getAllResults = async (req, res) => {
  try {
    const results = await Result.findAll();
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.getResultById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Result.findByPk(id,{
      include:Student
    });
    if (!result) {
      return res.status(404).send('Result not found');
    }
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};


// Add other CRUD operations (update, delete) as needed
