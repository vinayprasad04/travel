const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const EventOperation = sequelize.define("eventoperations", {
  eventoperationsid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  operatedby: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  operationsrating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  operationdescription: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = EventOperation;
