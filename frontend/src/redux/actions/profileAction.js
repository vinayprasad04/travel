import axios from "axios";
const url = process.env.REACT_APP_BASE_URL;

// <---------------------------------------------------------------------------------------------------------->
// Update Profile Info
export const UpdateProfile = async (token, myForm) => {
  try {
    return await axios.patch(url + "/update/profile", myForm, {
      headers: { token: token },
    });
  } catch (error) {
    console.log(error);
  }
};
// <--------------------------------------------------------------------------------------------------------->
