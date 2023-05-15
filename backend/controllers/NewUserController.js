const express = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const pool = require("../Database/db");
const bcrypt = require("bcrypt");

exports.addNewUser = async (req, res) => {
  const { userName, email, password } = req.body;

  console.log(userName, email, password);

  const query = `INSERT INTO Users (user_name,user_email,user_password) VALUES
 ($1,$2, $3)`;

  try {
    const passwordHash = await bcrypt.hash(password, 10);
    const result = await pool.query(query, [userName, email, passwordHash]);
    console.log(result);
    const token = jwt.sign({ name: userName }, process.env.JWT_SECRET, {
      expiresIn: process.env.EXPIRES_IN,
    });

    res.status(200).json({ result, token });
  } catch (error) {
    console.log(error);
  }
};
