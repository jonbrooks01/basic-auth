'use strict';

// 3rd Party Resources
const express = require('express');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
// const { Sequelize, DataTypes } = require('sequelize');

// // Prepare the express app
// const app = express();

// // Process JSON input and put the data on req.body
// app.use(express.json());

// const sequelize = new Sequelize(process.env.DATABASE_URL);

// // Process FORM intput and put the data on req.body
// app.use(express.urlencoded({ extended: true }));

// // Create a Sequelize model
// const Users = sequelize.define('User', {
//   username: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   }
// });

// // Signup Route -- create a new user
// // Two ways to test this route with httpie
// // echo '{"username":"john","password":"foo"}' | http post :3000/signup
// // http post :3000/signup username=john password=foo
app.post('/signup', basic, (req,res) => {
  res.status(200).send(req.user);
});




