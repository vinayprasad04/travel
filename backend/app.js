const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const eventsRoute = require("./routes/eventsRoute");
const userRoute = require("./routes/userRoute");
const reviewRoute = require("./routes/reviewRoute");
const eventOperationRoute = require("./routes/eventOperationRoute");
const scheduledEventRoute = require("./routes/scheduledEventRoute");
const eventUpdateRoute = require("./routes/eventUpdateRoute");
const sequelize = require("./config/db");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/events", eventsRoute);
app.use("/api/user", userRoute);
app.use("/api/user-reviews", reviewRoute);
app.use("/api/operations", eventOperationRoute);
app.use("/api/scheduled", scheduledEventRoute);
app.use("/api/event-update", eventUpdateRoute);

const PORT = process.env.PORT || 8080;

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
