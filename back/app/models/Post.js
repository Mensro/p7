module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define("post", {
    description: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false,
    },
    imageUrl: {
      type: Sequelize.STRING,
      allowNull: true,
      unique: false,
    },
    userId: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: true,
      unique: false,
    },
    likes: {
      type: Sequelize.STRING,
      allowNull: true,
      unique: false,
    },
    dislikes: {
      type: Sequelize.STRING,
      allowNull: true,
      unique: false,
    },
    usersLiked: {
      type: Sequelize.STRING,
      allowNull: true,
      unique: false,
    },
    usersDisliked: {
      type: Sequelize.STRING,
      allowNull: true,
      unique: false,
    },
  });
  return Post;
};
