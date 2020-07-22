const bcrypt = require("bcrypt");

const User = require("../models/user");

// Créer un compte utilisateur
exports.createUser = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    const user = new User({
      email: req.body.email,
      password: hash,
      pseudo: req.body.pseudo
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
