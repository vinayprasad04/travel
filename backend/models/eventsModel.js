const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Event = sequelize.define("events", {
  eventid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  eventname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  eventrating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  place: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  aboutevent: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
  eventdescription: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  cost: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  srcemoji: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Event;
