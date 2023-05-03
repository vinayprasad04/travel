import axios from "axios";
const url = process.env.REACT_APP_BASE_URL;

// <---------------------------------------------------------------------------------------------------------->
///Register
export const Registers = async (myForm) => {
  try {
    return await axios.post(url + "/register", myForm);
  } catch (error) {
    console.log(error);
  }
};
// <--------------------------------------------------------------------------------------------------------->

// <---------------------------------------------------------------------------------------------------------->
/// Login
export const Logins = async (email, password) => {
  try {
    return await axios.post(url + "/login", { email, password });
  } catch (error) {
    console.log(error);
  }
};
// <--------------------------------------------------------------------------------------------------------->

// <---------------------------------------------------------------------------------------------------------->
/// Load User
export const Loads = async (token) => {
  try {
    return await axios.post(
      url + "/load",
      {},
      {
        headers: {
          token: token,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};
// <--------------------------------------------------------------------------------------------------------->

// <---------------------------------------------------------------------------------------------------------->
/// Load User List
export const getUserList = async () => {
  try {
    return await axios.get(url + "/get/users");
  } catch (error) {
    console.log(error);
  }
};
// <--------------------------------------------------------------------------------------------------------->
