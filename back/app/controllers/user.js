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
  User?.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: "utilisateur non trouvé !" });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: "mot de passe incorrect !" });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign({ userId: user._id }, "RANDOM_TOKEN_SECRET", {
              expiresIn: "24h",
            }),
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};
