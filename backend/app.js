const express = require("express");
const db = require("./db");
const cors = require("cors");
const pool = require("./db");
const app = express();
const port = 5000;
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

// 32 -bit
const TOKEN_SECRET = "My-name-is-Punit-Sharma";

// Users
app.post("/createUser", async (req, res) => {
  const { Email, Name, Password } = req.body;
  
  try {
    const searchUser = await pool.query(
      "select exists(select 1 from users where Email =$1);",
      [Email]
    );
    if (searchUser.rows[0].exists) {     
      res.status(200).json({ message: "Already Exists!", exists: true});
    } else {
      const result = await pool.query(
        "insert into users (email, name , password) values($1,$2,$3)",
        [Email, Name, Password]
      );
      res.status(201).json({message : "User cretaed"});
    }
  } catch (error) {
    console.log(error);
  }
});

app.get("/login", async (req, res) => {
  const { Email } = req.body;
  const result = await pool.query(
    "SELECT EXISTS (SELECT password FROM users WHERE email = $1)",
    [Email]
  );
});

///////////////////////////////////////////////////////////////////////////////

// Get Data
app.get("/getData", async (req, res) => {
  const result = await pool.query("SELECT * FROM  feedback");
  // console.log(result.rows);
  const feedbackData = result.rows;
  return res.status(200).send({ message: "SuccesFul Response", feedbackData });
});

// Deleting Rows
app.get("/removeData/:id", async (req, res) => {
  var user = req.params.id;
  try {
    pool.query("DELETE FROM feedback WHERE id = $1", [user]);
    return res.status(200).send("Deleted Succesfully");
  } catch (error) {
    console.log(error);
  }
});

// Review
app.get("/review", async (req, res) => {
  await pool
    .query(
      "select feedback.eventrating, feedback.eventname from feedback inner join review on  feedback.reviewid = review.reviewid;   "
    )
    .then((result) => {
      console.log("Review :", result.rows);
      return res.status(200).send(result.rows);
    })
    .catch((error) => {
      console.log(error);
    });
});

// Event Rating
app.get("/eventRating", async (req, res) => {
  await pool
    .query("select eventrating from feedback   ")
    .then((result) => {
      console.log("eventRating :", result.rows);
      return res.status(200).send(result.rows);
    })
    .catch((error) => {
      console.log(error);
    });
});

// Adding Review
app.put("/addReview", async (req, res) => {
  const { Description, AvgRating, Eventtitle } = req.body;
  console.log("-------------------->", req.body);
  const result = pool
    .query(
      "update feedback set eventdescription = $1  , eventrating = $2, eventtitle = $3,  emotions=true  where reviewid= 2",
      [Description, AvgRating, Eventtitle]
    )
    .then((res) => console.log("Updated Succesfully!"))
    .catch((error) => [console.log(error)]);

  return res.status(200).send(result.rows);
});

app.listen(port, () => {
  console.log("Server is Running on the Port : ", port);
});
