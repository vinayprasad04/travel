const dotenv = require("dotenv");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
dotenv.config();

const reviewRouter = require("./routers/userRatingRoutes");
const RegisterRouter = require("./routers/NewUserRoutes");
const LoginRouter = require("./routers/UserLoginRoutes");
const EventsRouter = require("./routers/EventsRoutes");

const app = express();

//Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/user/review", reviewRouter);
app.use("/signup", RegisterRouter);
app.use("/login", LoginRouter);
app.use("/events", EventsRouter);

app.listen(process.env.PORT, console.log(`Running on ${process.env.PORT}`));
