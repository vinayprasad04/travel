import pool from "../config/Database.js";
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";
import { RemoveFile, UploadFile } from "../utils/uploaderImage.js";
import uploadToS3 from "../utils/awsUploader.js";
import cloudinary from "cloudinary";

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
      return res.status(200).json({
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

export const updateProfile = async (req, res) => {
  try {
    const { name, email, contact, dob, category } = req.body;
    console.log(req.files);
    const images = [req.files.images];
    const imageArray = [];

    //1->find user
    const existUser = await pool.query("SELECT * FROM users WHERE email=$1 ", [
      email,
    ]);
    const user = existUser.rows[0];
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
    const category2 = [{ item: JSON.parse(category) }];

    const updateData = await pool.query(
      "UPDATE users SET name=$1,contact=$2,dob=$3,category=$4,profile=$5 RETURNING *",
      [name, contact, dob, category2, imageArray]
    );
    res
      .status(200)
      .json({ msg: "Profile Update Successfully", data: updateData.rows[0] });
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

export const getEventDetails = async (req, res) => {
  try {
    const id = req.body.id;
    const data = await pool.query("SELECT * from events WHERE id=$1 ", [id]);
    return res
      .status(200)
      .json({ msg: "Events Fetch Successfully", data: data.rows[0] });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error });
  }
};

////   create Notifications

export const createNotification = async (req, res) => {
  try {
    const { title, eventId, msg } = req.body;
    const data = await pool.query(
      "INSERT INTO notification (title,eventId,msg) VALUES($1,$2,$3)",
      [title, eventId, msg]
    );
    res
      .status(201)
      .json({ msg: "Notification Create Successfully!", data: data });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error });
  }
};

///Display All Notifications

export const displayAllNotifications = async (req, res) => {
  try {
    const data = await pool.query("SELECT * FROM notification");

    res.status(200).json({ msg: "Fetch Successfully", data: data.rows });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: error });
  }
};

///// Specific Notification

export const notificationById = async (req, res) => {
  try {
    const id = req.params.id;

    const result = await pool.query(
      "SELECT * from notification WHERE eventId = $1",
      [id]
    );

    if (result.rows.length < 1) {
      res.status(200).json({ msg: "Notification", data: result.rows[0] });
    } else {
      res.status(200).json({ msg: "No Notification" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: error });
  }
};

export const listUsers = async (req, res) => {
  try {
    const users = await pool.query("SELECT * FROM users");
    res.status(200).json({ data: users.rows });
  } catch (error) {
    res.status(400).json({ msg: error });
    console.log(error);
  }
};

export const addToFav = async (req, res) => {
  try {
    const { id } = req.body;
    const user = await pool.query("SELECT * FROM users WHERE email=$1", [
      req.email,
    ]);
    console.log(user.rows[0]);
    let fav = await user.rows[0].fav;
    let f;

    if (fav === null) {
      f = [{ id: id }];
    } else {
      if (fav.find((u) => u.id === id)) {
        return res.status(200).json({ msg: "Event already Present" });
      }
      f = [...fav, { id: id }];
    }

    const data = await pool.query("UPDATE users SET fav=$1  RETURNING *", [f]);

    res.status(201).json({ msg: "Event Add Successfully", data: data.rows[0] });
  } catch (error) {
    res.status(400).json({ msg: error });
    console.log(error);
  }
};

export const removeFav = async (req, res) => {
  try {
    const { id } = req.body;
    const user = await pool.query("SELECT * FROM users WHERE email=$1", [
      req.email,
    ]);

    const fav2 = await user.rows[0].fav.filter((f) => f.id !== id);
    console.log(fav2);
    const data = await pool.query("UPDATE users SET fav=$1  RETURNING *", [
      fav2,
    ]);

    return res
      .status(201)
      .json({ msg: "Event remove Successfully", data: data.rows[0] });
  } catch (error) {
    res.status(400).json({ msg: error });
    console.log(error);
  }
};

export const getFav = async (req, res) => {
  try {
    const user = await pool.query("SELECT * FROM users WHERE email=$1", [
      req.email,
    ]);
    const events = [];
    if (user?.rows[0].fav === null) {
      return res.status({ msg: "No Events Available..." });
    }
    for (var i = 0; i < user.rows[0].fav.length; i++) {
      const data = await pool.query("SELECT * FROM events WHERE id=$1 ", [
        user.rows[0].fav[i].id,
      ]);
      events.push(data.rows[0]);
    }
    res.status(200).json({ msg: "Events fetch Successfully", data: events });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: error });
  }
};

export const createIterniary = async (req, res) => {
  try {
    const { email, eventId, startDate, endDate, person, status } =
      req.body.data;
    console.log(startDate);
    const data = await pool.query(
      "SELECT * FROM iternary WHERE email=$1 AND events=$2",
      [email, eventId]
    );
    if (data.rows.length > 0) {
      return res.status(400).json({ msg: "Iterniary Already Assign" });
    }
    const data2 = await pool.query(
      "INSERT INTO iternary (email,startDate,endDate,people,events,status) VALUES ($1,$2,$3,$4,$5,$6)",
      [email, startDate, endDate, person, eventId, status]
    );
    res.status(201).json({ msg: "Iterniary Assign Successfulyy", data: data2 });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: error });
  }
};

export const DisplayIterniary = async (req, res) => {
  try {
    const { page, limit } = req.params;
    ///calculate offset means skiplist value
    const offset = (page - 1) * limit;
    console.log(offset, "offset");

    const data = await pool.query(
      `SELECT * FROM iternary LIMIT ${limit} OFFSET ${offset}`
    );
    console.log(data.rows);
    const { rows: count } = await pool.query(`SELECT count(*) FROM iternary`);
    const rows = data.rows;
    res.send({ rows, count: parseInt(count[0].count) });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: error });
  }
};

export const DisplayIdIterniarys = async (req, res) => {
  try {
    const data = await pool.query("SELECT * FROM iternary WHERE email=$1", [
      req.email,
    ]);
    console.log(data.rows.length);
    const Iterniaries = [];
    let data1 = [];
    for (var i = 0; i < data.rows.length; i++) {
      const d = await pool.query("SELECT * FROM events WHERE id=$1", [
        data?.rows[i].events,
      ]);
      data1.push(d.rows);
    }
    for (var i = 0; i < data.rows.length; i++) {
      const data2 = {
        event: data1[i],
        iternaries: data.rows[i],
      };
      Iterniaries.push(data2);
    }
    res
      .status(200)
      .json({ msg: "Iterniary Fetch Successfully", data: Iterniaries });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: error });
  }
};
