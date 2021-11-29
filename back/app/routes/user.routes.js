module.exports = (app) => {
  const posts = require("../controllers/post.js");

  var router = require("express").Router();

  // Create a new post
  router.post("/signup", users.create);
  router.post("/login", users.create);

  app.use("/api/users", router);
};
