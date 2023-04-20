//we are using modern import and export rules

import express from "express";
import cors from "cors";
import { config } from "dotenv";
import morgan from "morgan";

//creating Instances

const app = express();

//define path for env file
config({ path: "./config/.env" });

//define PORT Value

const PORT = process.env.PORT || 5000;

///define Middlewares

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//calling db function

//definine initial routes

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is running Perfectly :)" });
});

/// Create server

app.listen(PORT, () => {
  console.log(`Server is running on port no ${PORT}`);
});
