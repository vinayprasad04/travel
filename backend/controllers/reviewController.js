const sequelize = require("../config/db");
const Event = require("../models/eventsModel");
const Review = require("../models/reviewModel");
const ScheduledEvent = require("../models/scheduledEvent");
const User = require("../models/userModel");

User.hasMany(Review, {
  foreignKey: "",
  as: false,
});

Event.hasMany(Review, {
  foreignKey: "",
  as: false,
});

Review.belongsTo(User);
Review.belongsTo(Event);

sequelize
  .sync({ alter: true })
  .then((r) => {
    console.log(r);
  })
  .catch((err) => {
    console.log(err);
  });

const reviewPost = async (req, res) => {
  try {
    const { review, rating, userUserid, eventEventid, dateofreview } = req.body;

    const reviews = await Review.create({
      review: review,
      rating: rating,
      userUserid: userUserid,
      eventEventid: eventEventid,
      dateofreview: dateofreview,
    });

    res.status(200).json({ status: "Database Updated", data: reviews });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const reviewGet = async (req, res) => {
  try {
    const reviews = await User.findAll({
      include: Review,
    });

    const eventsWithReviews = await Event.findAll({
      include: [{ model: Review, include: [{ model: User }] }],
    });
    res.status(200).json(eventsWithReviews);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const reviewAverage = async (req, res) => {
  try {
    let sum = 0,
      avg;
    const { id } = req.params;
    const reviews = await Event.findAll({
      include: [{ model: Review, attributes: ["rating"] }],
      where: { eventid: id },
    });

    const ratings = reviews
      .map((event) => event.reviews.map((review) => review.rating))
      .flat();

    for (let i = 0; i < ratings.length; i++) {
      sum += ratings[i];
    }
    avg = sum / ratings.length;

    res.status(200).json(avg);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const recommendation = async (req, res) => {
  try {
    let recommendedRating = [];
    let eventData = [];
    let uniq;
    const { id } = req.params;
    const reviews = await Event.findAll({
      include: [{ model: Review }],
    });

    const filteredEvents = reviews.filter(
      (event) => event.eventid !== Number(id)
    );
    const ratings = filteredEvents.map((event) => event.eventrating).flat();

    for (let i = 0; i < ratings.length; i++) {
      if (Number(ratings[i]) === 5 || Number(ratings[i]) === 4) {
        recommendedRating.push(ratings[i]);
      }
    }
    recommendedRating.sort().reverse();

    const scheduledData = await Event.findAll({
      include: ScheduledEvent,
    });

    const filteredScheduledData = scheduledData.filter(
      (event) => event.eventid !== Number(id)
    );

    filteredScheduledData?.map((element) => {
      for (let i = 0; i < recommendedRating.length; i++) {
        if (parseInt(recommendedRating[i]) === parseInt(element.eventrating)) {
          eventData.push(element);
          break;
        }
      }
    });

    uniq = [...new Set(eventData)];

    res.status(200).json(uniq);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { reviewPost, reviewGet, reviewAverage, recommendation };
