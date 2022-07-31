const express = require('express');
const path = require('path');
const {sequelize} = require('./models');
const app = express();

app.use(express.json());

const pathPublicDirectory = path.join(__dirname, '../public');
app.use(express.static(pathPublicDirectory));



app.listen('3000', () => {
    console.log('Server is running on port 3000');
    
  })