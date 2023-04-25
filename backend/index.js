//we are using modern import and export rules

import express from "express";
import cors from "cors";
import { config } from "dotenv";
import morgan from "morgan";
import test from "./routes/Auth.js";
import cloudinary from "cloudinary";
import fileUpload from "express-fileupload";
import bodyParser from "body-parser";

//creating Instances

const app = express();

//define path for env file
config({ path: "./config/.env" });

///configuring cloudinary;

cloudinary.config({
  cloud_name: process.env.CLOUDNAME,
  api_key: process.env.APIKEY,
  api_secret: process.env.APISECRET,
});

//define PORT Value

const PORT = process.env.PORT || 5000;

///define Middlewares
app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  })
);
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/api/v1", test);

// app.use(bodyParser.urlencoded({ extended: true }));
//calling db function

//definine initial routes

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is running Perfectly :)" });
});

/// Create server

app.listen(PORT, () => {
  console.log(`Server is running on port no ${PORT}`);
});
