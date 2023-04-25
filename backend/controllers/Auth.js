import pool from "../config/Database.js";
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";
import { UploadFile } from "../utils/uploaderImage.js";
import uploadToS3 from "../utils/awsUploader.js";

export const Register = async (req, res) => {
  try {
    const { name, email, password, contact, dob, category } = req.body;

    console.log(dob);

    const category2 = [{ item: JSON.parse(category) }];

    const image = req.files.image;
    console.log(req.files);
    ///1.-> check user exist or not
    const data = await pool.query(`SELECT * FROM users WHERE email=$1`, [
      email,
    ]);
    if (data.rows.length != 0) {
      return res.status(400).json({ message: "User Email Already Exist" });
    }
    ///2.-> encrypt password
    const encryptPassword = await bcrypt.hash(password, 10);
    //3.-> Image Upload to Cloud
    const cloud_image = await UploadFile(image);
    console.log(cloud_image, "upload images");
    const imageData = [
      {
        public_id: cloud_image.public_id,
        url: cloud_image.url,
      },
    ];
    //4.->Store data in db
    const user = await pool.query(
      "INSERT INTO users (name,email,password,contact,dob,category,profile) VALUES ($1,$2,$3,$4,$5,$6,$7)",
      [name, email, encryptPassword, contact, dob, category2, imageData]
    );

    ///5.->Generate JWT Token
    const token = Jwt.sign(
      {
        email: email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );
    console.log(token, "token");
    /////6.->
    const data22 = await pool.query(`SELECT * FROM users WHERE email=$1`, [
      email,
    ]);
    if (token) {
      return res.status(201).json({
        message: "User Register Successfully",
        data: data22,
        token: token,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Server Error", error: error });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existUser = await pool.query("SELECT * from users WHERE email=$1", [
      email,
    ]);
    if (existUser.rows.length < 1) {
      return res.status(400).json({ msg: "Invalid Credintials" });
    }
    const user = existUser.rows[0];
    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      return res.status(400).json({ msg: "Invalid Credintials" });
    }

    //// Generate Token
    const token = Jwt.sign(
      {
        email: user.email,
        role: user.role,
        id: user.id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    return res
      .status(200)
      .json({ msg: "login Successfully", data: user, token: token });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: error });
  }
};

export const load = async (req, res) => {
  try {
    const data = await pool.query("SELECT * from users WHERE email=$1", [
      req.email,
    ]);
    if (data.rows[0]) {
      return res
        .status(200)
        .json({
          msg: "user load successfully",
          data: data.rows[0],
          token: req.token,
        });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: error });
  }
};

export const createCategory = async (req, res) => {
  try {
    const title = req.body.title;
    const images = [req.files.image];
    const imageArray = [];

    for (var i = 0; i < images.length; i++) {
      const avatarData = await uploadToS3(images[i].data)
        .then((result) => {
          return result;
        })
        .catch((err) => {
          console.log(err);
        });
      imageArray.push({
        url: avatarData.key,
        id: avatarData.ETag.toString(),
      });
    }
    /// Store data in db
    const user = await pool.query(
      "INSERT INTO category(title,image) VALUES ($1,$2)",
      [title, imageArray]
    );

    res.status(200).json({ messge: "Data Saved Successfully", data: user });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error });
  }
};

export const getCategories = async (req, res) => {
  try {
    const data = await pool.query(`SELECT * FROM category `, []);
    res
      .status(200)
      .json({ msg: "Category Fetch Successfully", data: data.rows });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    console.log(req.body.id);
    const id = req.body.id;
    const data = await pool.query("DELETE from category WHERE id =$1", [id]);
    if (data) {
      return res
        .status(200)
        .json({ msg: "Category Delete Successfully", data: data });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error });
  }
};

export const createEvent = async (req, res) => {
  try {
    const {
      title,
      dis,
      people,
      eventStartDate,
      eventEndDate,
      location,
      status,
      category,
    } = req.body;
    const cat = [{ category: category }];

    const eventExist = await pool.query("SELECT * from events where title=$1", [
      title,
    ]);
    if (eventExist.rows.length > 0) {
      return res.status(400).json({ msg: "Event Already Exist" });
    }

    /// upload images
    const images = req.files.image;
    const imageArray = [];
    console.log(req.files);

    for (var i = 0; i < images.length; i++) {
      const avatarData = await uploadToS3(images[i].data)
        .then((result) => {
          return result;
        })
        .catch((err) => {
          console.log(err);
        });
      imageArray.push({
        url: avatarData.key,
        id: avatarData.ETag.toString(),
      });
    }
    ////store data to databae
    const data = await pool.query(
      "INSERT INTO events(title,discription,eventstartdate,eventenddate,location,category,status,person,images) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) ",
      [
        title,
        dis,
        eventStartDate,
        eventEndDate,
        location,
        cat,
        status,
        people,
        imageArray,
      ]
    );
    return res
      .status(201)
      .json({ msg: "Event Create Successfully", data: data });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error });
  }
};

export const getEvents = async (req, res) => {
  try {
    const data = await pool.query("SELECT * from events ");
    return res
      .status(200)
      .json({ msg: "Events Fetch Successfully", data: data.rows });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error });
  }
};
