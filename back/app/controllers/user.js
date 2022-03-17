const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../models");
const User = db.users;

exports.signup = (req, res, next) => {
  console.log("Cl1", req.body.user.password);
  console.log("cl2", req.body);

  bcrypt
    .hash(req.body.user.password, 10)
    .then((hash) => {
      console.log("Cl2", hash);
      console.log("bug", User);

      const user = new User({
        username: req.body.user.username,
        email: req.body.user.email,
        hashedPassword: hash,
      });
      console.log("cl3", user);

      user
        .save()
        .then(() => res.status(201).json({ message: "utilisateur crée !" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
  User?.findOne({ where: { email: req.body.user.email } })
    .then((user) => {
      console.log("user", user);
      if (!user) {
        return res.status(401).json({ error: "utilisateur non trouvé !" });
      }
      console.log("userpw", req.body.user.password);
      console.log("hash", user.hashedPassword);
      bcrypt
        .compare(req.body.user.password, user.hashedPassword)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: "mot de passe incorrect !" });
          }

          res.status(200).json({
            userId: user.id,
            token: jwt.sign({ userId: user.id }, "RANDOM_TOKEN_SECRET", {
              expiresIn: "24h",
            }),
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.delete = (req, res) => {
  User.destroy({
    where: { id: req.userId },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "user was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete user with id=${req.userId}. Maybe user was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete user with id=" + req.userId,
      });
    });
};
