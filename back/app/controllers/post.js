const db = require("../models");
const Post = db.posts;
const User = db.users;

exports.findAll = (req, res) => {
  Post.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Post.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find post with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving post with id=" + id,
      });
    });
};

exports.create = (req, res) => {
  // Validate request
  console.log("reqBody", req.body);
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  User.findByPk(req.userId).then((user) => {
    console.log(user);

    console.log("Id", req.userId);
    // Create a post

    const imageUrl =
      req.file != undefined
        ? `${req.protocol}://${req.get("host")}/images/${req.file.filename}`
        : null;

    const post = {
      description: req.body.description,
      userId: req.userId,
      imageUrl: imageUrl,
      username: user.username,
    };

    // Save post in the database
    Post.create(post)
      .then((data) => {
        res.send(data);
      })

      .catch((err) => {
        console.log("error500", err);
        res.status(500).send({
          ...err,
          message:
            err.message || "Some error occurred while creating the Post.",
        });
      });
  });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Post.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Post was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Post with id=${id}. Maybe Post was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Post with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  console.log(req);
  const id = req.post.id;

  Post.destroy({
    where: { posts: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Post was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Post with id=${id}. Maybe Post was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Post with id=" + id,
      });
    });
};
