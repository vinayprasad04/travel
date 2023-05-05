const Event = require("../models/eventsModel");
const postEventDetails = async (req, res) => {
  try {
    const {
      eventname,
      eventrating,
      place,
      aboutevent,
      eventdescription,
      cost,
    } = req.body;

    const events = await Event.create({
      eventname: eventname,
      eventrating: eventrating,
      place: place,
      aboutevent: aboutevent,
      eventdescription: eventdescription,
      cost: cost,
    });

    res.status(200).json({ status: "Database Updated", data: events });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { postEventDetails };
