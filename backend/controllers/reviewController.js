const sequelize = require("../config/db");
const Event = require("../models/eventsModel");
const Review = require("../models/reviewModel");
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

module.exports = { reviewPost, reviewGet };
