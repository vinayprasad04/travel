const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "12345",
  host: "192.168.29.209",
  port: "5432",
  database: "Reetu",
});

if (pool) {
  console.log("database connection succesfully!!");
}
module.exports = pool;
