const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    username: {
      type: DataTypes.STRING(64),
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          msg: "Please enter your name",
        },
      },
    },
    hashedPassword: {
      type: DataTypes.STRING(64),
      validate: {
        is: /^\$2[ayb]\$.{56}$/i,
      },
    },
    email: {
      type: DataTypes.STRING(64),
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          msg: "Please enter your mail",
        },
      },
    },
  });
  return User;
};
