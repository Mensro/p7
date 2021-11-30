module.exports = (app) => {
  const users = require("../controllers/user.js");

  var router = require("express").Router();

  // Create a new post
  router.post("/signup", users.signup);
  router.post("/login", users.login);

  app.use("/api/users", router);
};
