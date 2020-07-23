const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

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

// 4sa4FhDEc2wupBGa
