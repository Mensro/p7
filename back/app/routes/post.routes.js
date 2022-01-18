module.exports = (app) => {
  const posts = require("../controllers/post.js");
  const auth = require("../middleware/auth");
  const multer = require("../middleware/multer-config");
  var router = require("express").Router();

  // Create a new post
  router.post("/", auth, multer, posts.create);

  // Retrieve all Tutorials
  router.get("/", posts.findAll);

  // Retrieve all published Tutorials

  // Retrieve a single post with id
  router.get("/:id", posts.findOne);

  // Update a post with id
  router.put("/:id", posts.update);

  // Delete a post with id
  router.delete("/:id", posts.delete);

  // Delete all Tutorials

  app.use("/api/posts", router);
};
