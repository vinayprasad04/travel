import axios from "axios";
const url = process.env.REACT_APP_BASE_URL;

// <---------------------------------------------------------------------------------------------------------->
// Add Favorites to user
export const AddtoFav = async (id, token) => {
  try {
    return await axios.post(
      url + "/add/fav",
      { id },
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
// Remove Favorites to user
export const RemoveToFav = async (id, token) => {
  try {
    return await axios.post(
      url + "/delete/fav",
      { id },
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
// Get Favorites to user
export const getFav = async (token) => {
  try {
    return await axios.post(
      url + "/get/fav",
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
