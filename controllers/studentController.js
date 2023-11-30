// controllers/studentController.js
const Student = require('../models/studentModel');
const Result = require('../models/resultModel');

exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll({
      include:Result
    });
    res.json(students);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.getStudentById = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findByPk(id, {
      include: Result,
    });
    if (!student) {
      return res.status(404).send('Student not found');
    }
    res.json(student);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.createStudent = async (req, res) => {
  const { fullName, email } = req.body;

  try {
    // Create a new student
    const newStudent = await Student.create({
      fullName,
      email,
    });

    res.status(201).json(newStudent);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.deleteStudentById = async (req, res) => {
  const { id } = req.params;

  try {
    const student = await Student.findByPk(id);

    if (!student) {
      return res.status(404).send('Student not found');
    }

    // Delete the student
    await student.destroy();

    res.status(204).send(); // No content in the response for a successful deletion
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Add other CRUD operations (update) as needed
