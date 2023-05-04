import axios from "axios";
const url = process.env.REACT_APP_BASE_URL;

// <---------------------------------------------------------------------------------------------------------->
// Add Favorites to user
export const assignIterniary = async (data, token) => {
  try {
    return await axios.post(
      url + "/add/iterniary",
      { data },
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
// Display All Iterniaries
export const DisplayIterniarys = async (page, limit, token) => {
  try {
    return await axios.post(
      url + `/get/iterniary/${page}/${limit}`,
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
// Display ID based Iterniaries
export const DisplayIdIterniarys = async (token) => {
  try {
    return await axios.get(
      url + `/get/iterniary`,

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
