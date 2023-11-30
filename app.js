const express = require('express');
require('dotenv').config();
const sequelize = require('./config');
const studentRoutes = require('./routes/studentRoutes');
const resultRoutes = require('./routes/resultRoutes');
const { DataTypes } = require('sequelize');
// const Student = require('./models/studentModel');
// const Result = require('./models/resultModel');
const {Student,Result} = require('./association/association')
const app = express();
const PORT = process.env.PORT ;

app.use(express.json());
// Routes
app.use(studentRoutes);
app.use(resultRoutes);

// Define associations directly in app.js


// Sync the database and start the server
sequelize.sync()
  .then(() => {
    console.log('Database synced successfully');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });

// Sync the database and start the server
// force true to recrete the database from 0
// sequelize.sync({ force: true })
//   .then(() => {
//     console.log('Database connected successfully');
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.error('Error syncing database:', error);
//   });


