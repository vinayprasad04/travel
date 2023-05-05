const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Review = require("./reviewModel");

const User = sequelize.define("users", {
  userid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  emailid: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phonenumber: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dateofbirth: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
});
module.exports = User;
