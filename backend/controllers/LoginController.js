const jwt = require("jsonwebtoken");
const pool = require("../Database/db");
const bcrypt = require("bcrypt");

exports.UserLogin = async (req, res) => {
  const { email, password } = req.body.values;
  console.log(email, password);
  const userQuery = `select * from users where user_email = $1`;
  const query = `select exists(select 1 from Users where user_email =$1);`;
  const passquery = `select user_password from users where user_email = $1 `;
  try {
    const result = await pool.query(query, [email]);
    const user_result = await pool.query(passquery, [email]);
    const userDetails = await pool.query(userQuery, [email]);
    const user = result.rows[0].exists;

    const user_password = user_result.rows[0].user_password;

    if ((user, userDetails)) {
      const passMatch = await bcrypt.compare(password, user_password);

      if ((passMatch, userDetails)) {
        console.log(passMatch, "qqqqqqqqqqq");
        const token = jwt.sign({ email: email }, process.env.JWT_SECRET, {
          expiresIn: process.env.EXPIRES_IN,
        });

        return res
          .status(200)
          .json({ token, userDetails: userDetails.rows[0] });
      } else {
        res.status(401).json({ error: "Password do not Match" });
      }
    } else {
      res.status(404).json({ message: "User does not exists" });
    }
  } catch (error) {
    console.log(error, "db error");
  }
};
