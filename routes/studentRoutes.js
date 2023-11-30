const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
router.get('/students', studentController.getAllStudents);
router.get('/students/:id', studentController.getStudentById);
router.post('/students', studentController.createStudent);
// Add other CRUD routes as needed
module.exports = router;