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
  });
  return Post;
};
