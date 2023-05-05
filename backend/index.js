const cors = require("cors");
const express = require("express");
const rout = require("./routes/rout.js");
const app = express();
//middleware
app.use(cors());
app.use(express.json());//req.body

//Routs
app.use("/api/v1", rout);

app.listen(7000, () => {
  console.log("server running 7000");
});


