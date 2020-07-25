const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require('cors');

// require('dotenv').config();
const nodemailer = require('nodemailer');

const User = require("./models/user");
const userRoutes = require('./routes/user');


const app = express();

mongoose
  .connect(
    "mongodb+srv://hitbox:"
    + process.env.MONGO_ATLAS_PW
    + "@cluster0.jlrds.gcp.mongodb.net/miniature-warhammer?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log('Connected to database !');
  })
  .catch(() => {
    console.log('Connection failed !');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/user", userRoutes);

module.exports = app;

//start nodemailer

//step 1
// let transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.PASSWORD
//   }
// });
//
// let mailOptions = {
//   from: 'moniezgeoffrey59@gmail.com',
//   to: 'moniez.geoffrey@yahoo.fr',
//   subject: 'testing and testing',
//   text: 'IT works'
// };
//
// // step 2
// transporter.sendMail(mailOptions, function(err, data) {
//   if (err) {
//     console.log('Error Occurs', err);
//   } else {
//     console.log('Email send');
//   }
// })
