const sequelize = require("../config/db");
const Event = require("../models/eventsModel");
const ScheduledEvent = require("../models/scheduledEvent");

Event.hasMany(ScheduledEvent, {
  foreignKey: "",
  as: false,
});

ScheduledEvent.belongsTo(Event);

sequelize
  .sync({ alter: true })
  .then((r) => {
    console.log(r);
  })
  .catch((err) => {
    console.log(err);
  });

const scheduledEventPost = async (req, res) => {
  try {
    const { scheduleddate, scheduledtime, completed, eventEventid } = req.body;
    const scheduledData = await ScheduledEvent.create({
      scheduleddate: scheduleddate,
      scheduledtime: scheduledtime,
      completed: completed,
      eventEventid: eventEventid,
    });
    res.status(200).json({ status: "Database Updated", data: scheduledData });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const scheduledEventGet = async (req, res) => {
  try {
    const scheduledData = await Event.findAll({
      include: ScheduledEvent,
    });
    res.status(200).json(scheduledData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { scheduledEventPost, scheduledEventGet };
