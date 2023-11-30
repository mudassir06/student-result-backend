// routes/resultRoutes.js
const express = require('express');
const router = express.Router();
const resultController = require('../controllers/resultController');
router.get('/results', resultController.getAllResults);
router.get('/results/:id', resultController.getResultById);
router.post('/results/', resultController.createResult);

// Add other CRUD routes as needed

module.exports = router;
