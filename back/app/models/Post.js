module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define("post", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false,
    },
    imageUrl: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false,
    },
    userId: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    likes: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false,
    },
    dislikes: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false,
    },
    usersLiked: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false,
    },
    usersDisliked: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false,
    },
  });
  return Post;
};
