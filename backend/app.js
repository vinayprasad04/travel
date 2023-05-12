const express = require("express");
const db = require("./db");
const cors = require("cors");
const pool = require("./db");
const app = express();
const port = 5000;

// const feedbackRouter = require("../backend/models/feedback");
app.use(cors());

app.use(express.json());

// Get Data
app.get("/getData", async (req, res) => {
  const result = await pool.query("SELECT * FROM  feedback");
  console.log(result.rows);
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

// Add data
app.get("/addData", async (req, res) => {
  const {
    eventname,
    eventtitle,
    eventdate,
    eventreview,
    eventrating,
    eventdescription,
    emotions,
  } = req.body;

  const result = pool
    .query(
      "insert into feedback ( eventname , eventtitle , eventdate, eventreview, eventrating, eventdescription , emotions	) values ($1,$2,$3, $4,$5,$6,$7)",
      [
        eventname,
        eventtitle,
        eventdate,
        eventreview,
        eventrating,
        eventdescription,
        emotions,
      ]
    )
    .then((data) => {
      const d = data.rows;
      return res.status(200).send({ message: "Inserted Succesfuly", d });
    })
    .catch((error) => {
      console.log(error);
    });
});

// Users
app.get("/user", async (req, res, next) => {
  await pool
    .query("select * from users")
    .then((result) => {
      // console.log("User : ", result.rows);
      const data = result.rows;
      return res.status(200).send({ message: "User Data ", data });
    })
    .catch((error) => {
      console.log(error);
    });
});

// Review
app.get("/review", async (req, res) => {
  await pool
    .query(
      "select feedback.eventrating, feedback.eventname from feedback inner join review on  feedback.reviewid = review.reviewid;   "
    )
    .then((result) => {
      // console.log("Review :", result.rows);
      return res.status(200).send(result.rows);
    })
    .catch((error) => {
      console.log(error);
    });
});

// Event Rating
app.post("/eventRating", async (req, res) => {
  await pool
    .query("select eventrating from feedback")
    .then((result) => {
      // console.log("eventRating :", result.rows);
      return res.status(200).send(result.rows);
    })
    .catch((error) => {
      console.log(error);
    });
});

// Review Routes Data======================================================

app.put("/addReview", async (req, res) => {
  const { eventrating, eventdescription } = req.body;
  const result = await pool
    .query(
      "UPDATE feedback  SET eventname = $1, eventdescription = $2, emotions= true WHERE id =9",
      [eventrating, eventdescription]
    )
    .then((result) => {
      console.log("eventRating :", result.rows);
      return res.status(200).json({ message: "Hyyyyyyyy From backnd", result });
    })
    .catch((error) => {
      console.log(error);
    });
});


app.get("/getReview", function(req,res){
 
  const result = pool.query('select eventname , eventdescription , emotions from feedback').then((result) => {
    const data = result.rows;
    console.log("GEt Revisfad================== ", result.rows);
    
    return res.status(200).send({ message: "User Data ", data });
  })
  .catch((error) => {
    console.log(error);
  });


})



app.listen(port, () => {
  console.log("Server is Running on the Port : ", port);
});
