const auth = require("../middleware/auth");

module.exports = (app) => {
  const users = require("../controllers/user.js");

  var router = require("express").Router();

  // Create a new post
  router.post("/signup", users.signup);
  router.post("/login", users.login);
  router.delete("/me", auth, users.delete);

  app.use("/api/users", router);
};
