const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  host: "192.168.29.209",
  port: "5432",
  user: "postgres",
  password: "12345",
  database: "PuneetDB",
});

const p = pool.query("Select * from feedback", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Databse Connected Succesfully! ");
  }
});


module.exports = pool;
