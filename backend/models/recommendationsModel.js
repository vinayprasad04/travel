const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Recommendation = sequelize.define("recommendations", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

// console.log("Starting transaction...");
// sequelize
//   .transaction((t) => {
//     console.log("Inside transaction...");
//     return Recommendation.sync({ transaction: t })
//       .then(() => {
//         console.log("Table created successfully.");
//       })
//       .catch((error) => {
//         console.error("Unable to create the table:", error);
//       });
//   })
//   .then(() => {
//     console.log("Transaction completed successfully.");
//   })
//   .catch((error) => {
//     console.error("Transaction failed:", error);
//   });

module.exports = Recommendation;
