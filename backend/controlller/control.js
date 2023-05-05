
const userRegister = async (req, res) => {
  try {
    res.status(200).json({ message: "server okay" });
    const { email, phone, password } = req.body;
    console.log(email, phone, password);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "server error in user register" });
  }
};

module.exports =  userRegister ;
