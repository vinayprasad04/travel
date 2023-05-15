const pool = require("../Database/db");

exports.getEvents = async (req, res) => {
  const query = `SELECT * FROM events`;
  try {
    const result = await pool.query(query);
    const cancelled = await cancelledEvents();
    console.log(cancelled);
    res.status(200).json({
      message: "Successfully fetched ",
      data: result.rows,
      eventCancelled: cancelled,
    });
  } catch (error) {
    console.log(error);
  }
};

const cancelledEvents = async (req, res) => {
  const query = `select * from events where status = 'Cancelled';`;
  try {
    const result = await pool.query(query);
    console.log("ddddddddddddddddddddd", result.rows);
    return result.rows;
  } catch (error) {
    console.log(error);
  }
};
