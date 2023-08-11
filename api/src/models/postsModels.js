//modelos de sequelize. min 34 repaso

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("posts", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
