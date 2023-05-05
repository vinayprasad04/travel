const sequelize = require("../config/db");
const EventOperation = require("../models/eventOperation");
const Event = require("../models/eventsModel");

Event.hasOne(EventOperation, {
  foreignKey: "",
  as: false,
});

EventOperation.belongsTo(Event);

sequelize
  .sync({ alter: true })
  .then((r) => {
    console.log(r);
  })
  .catch((err) => {
    console.log(err);
  });

const eventOperationPost = async (req, res) => {
  try {
    const {
      eventoperationsid,
      operatedby,
      operationsrating,
      operationdescription,
      eventEventid,
    } = req.body;

    const operations = await EventOperation.create({
      eventoperationsid: eventoperationsid,
      operatedby: operatedby,
      operationsrating: operationsrating,
      operationdescription: operationdescription,
      eventEventid: eventEventid,
    });

    res.status(200).json({ status: "Database Updated", data: operations });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const eventOperationGet = async (req, res) => {
  try {
    const operations = await Event.findAll({
      include: EventOperation,
    });

    // const eventsWithReviews = await Event.findAll({
    //   include: [{ model: Review, include: [{ model: User }] }],
    // });
    res.status(200).json(operations);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { eventOperationPost, eventOperationGet };
