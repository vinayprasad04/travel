const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Review = sequelize.define("review", {
  reviewid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  review: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  dateofreview: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
});

module.exports = Review;
