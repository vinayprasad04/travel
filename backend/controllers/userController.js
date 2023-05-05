const User = require("../models/userModel");

const userPostController = async (req, res) => {
  try {
    const { username, emailid, phonenumber, password, dateofbirth } = req.body;

    const users = await User.create({
      username: username,
      emailid: emailid,
      phonenumber: phonenumber,
      password: password,
      dateofbirth: dateofbirth,
    });

    res.status(200).json({ status: "Database Updated", data: users });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const userGetController = (req, res) => {};

module.exports = { userPostController, userGetController };
