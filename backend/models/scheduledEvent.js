const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const ScheduledEvent = sequelize.define("scheduledevents", {
  scheduledid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  scheduleddate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  scheduledtime: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  rescheduleddate: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  rescheduledtime: {
    type: DataTypes.TIME,
    allowNull: true,
  },
  completed: {
    type: DataTypes.TIME,
    allowNull: true,
  },
});

module.exports = ScheduledEvent;
