const bcrypt = require("bcrypt");

const User = require("../models/user");

// User Creation
exports.createUser = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    const user = new User({
      pseudo: req.body.pseudo,
      email: req.body.email,
      password: hash
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
