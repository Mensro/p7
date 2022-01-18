module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define("post", {
    name: {
      type: Sequelize.STRING,
      allowNull: true,
      unique: false,
    },
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
      unique: true,
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
