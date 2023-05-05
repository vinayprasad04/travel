const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("utkarsh", "postgres", "12345", {
  host: "192.168.29.209",
  port: 5432,
  dialect: "postgres",
});

if (sequelize) {
  console.log("Databse connected");
}

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

module.exports = sequelize;
