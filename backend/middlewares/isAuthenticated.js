import Jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.headers.token;
    if (!token) {
      return res.status(400).json({ msg: "Invalid Token" });
    }
    const user = Jwt.verify(token, process.env.JWT_SECRET);
    console.log(user);
    if (user) {
      req.id = user.id;
      req.email = user.email;
      req.role = user.type;
      req.token = token;
      next();
    } else {
      return res.status(400).json({ msg: "Invalid token" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Invalid Token", error: error });
  }
};
