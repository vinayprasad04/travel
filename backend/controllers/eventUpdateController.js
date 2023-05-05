const Event = require("../models/eventsModel");

const updateEventController = async (req, res) => {
  try {
    const { id } = req.params;
    const { aboutevent, cost, srcemoji, eventrating } = req.body;
    const data = await Event.update(
      {
        aboutevent: aboutevent,
        cost: cost,
        srcemoji: srcemoji,
        eventrating: eventrating,
      },
      { where: { eventid: id } }
    );
    res.status(200).json({ info: "Updated" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { updateEventController };
