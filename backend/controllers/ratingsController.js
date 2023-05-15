const express = require("express");
const pool = require("../Database/db");

// Post request when user adds a new review
exports.addReview = async (req, res) => {
  const { name, email, ratings, comment } = req.body;
  const query = `INSERT INTO UserReview (user_name,user_email,ratings,user_comment) VALUES
			($1,$2,$3,$4);`;

  try {
    const result = await pool.query(query, [name, email, ratings, comment]);
    console.log(result);
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
  }
};
