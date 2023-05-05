const express = require("express");
// const bcrpyt = require("bcrypt");
const pool = require("../config/database.js");
const { Pool } = require("pg");
const router = express.Router();
const jwtGenerator= require("../utils/jwtGenerator.js");

router.post("/signup", async (req, res) => {
  try {
    //destructure the req body (email.phone,password)
    const { email, phone, password } = req.body;

    //check user exits(if user exits then throw error)
    const user = await pool.query("select * from signup where email_id=$1", [
      email,
    ]);

    if (user.rows.length != 0)
      return res.status(401).send("User already exits");

    // Bcrpyt the user password
    // const round = 10;
    // const genSalt = await bcrpyt.genSalt(round);
    // const bcrpytPassword = bcrpyt.hash(password, round);

    console.log(req.body);

    // enter new user into database
    const data = await pool.query(
      "insert into signup (email_id,phone_number,pass) values ($1,$2,$3) RETURNING * ",
      [email, phone, password]
    );
    res.json(data.rows[0]);
    res.status(200).send("POST request to the homepage");
    console.log(data);
    
  } 
   // generate  jwt token 
   

  

catch (error) {
    console.log(error);
  }

})
module.exports = router;
