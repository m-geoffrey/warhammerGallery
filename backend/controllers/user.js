const bcrypt = require("bcrypt");

const User = require("../models/user");

const nodemailer = require('nodemailer');


// User Creation
exports.createUser = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    const user = new User({
      pseudo: req.body.pseudo,
      email: req.body.email,
      password: hash,
      active: false
    });
    user
      .save()
      .then((result) => {
        res.status(201).json({
          message: "user created",
          result: result,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "Identifiants invalide"
        });
      });
  });
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  let user = req.body.pseudo;
  let mailOptions = {
    // var1 = req.body.pseudo,
    from: 'moniezgeoffrey59@gmail.com',
    // to: 'moniez.geoffrey@yahoo.fr',
    to: req.body.email,
    subject: 'testing and testing',
    // html: `Hello ${req.body.pseudo}, and welcome !`
    html: "<p>Hello " + user + " and welcome!"
  };
  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log('Error Occurs', err);
    } else {
      console.log('Email send');
    }
  })
}

// User Connection
exports.userLogin = (req, res, next) => {
  let fetchedUser;
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: 'Unknow Email Address'
        });
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then((result) => {
      if (!result) {
        return res.status(401).json({
          message: 'Invalid login'
        });
      }
      res.status(200).json({
        userId: fetchedUser._id
      });
    })
    .catch((err) => {
      res.status(401).json({
        message: 'Invalid login'
      });
    });
}
