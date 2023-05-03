import axios from "axios";
const url = process.env.REACT_APP_BASE_URL;

// <---------------------------------------------------------------------------------------------------------->
/// Create Notification
export const CreateNotifications = async (title, eventId, msg) => {
  try {
    return await axios.post(url + "/create/notification", {
      title,
      eventId,
      msg,
    });
  } catch (error) {
    console.log(error);
  }
};
// <--------------------------------------------------------------------------------------------------------->

// <---------------------------------------------------------------------------------------------------------->
// Get All Notification
export const displayAllNotifications = async () => {
  try {
    return await axios.get(url + "/get/all/notification");
  } catch (error) {
    console.log(error);
  }
};
// <--------------------------------------------------------------------------------------------------------->

// <---------------------------------------------------------------------------------------------------------->
// Get Single Notificatins
export const getNotificationById = async (id) => {
  try {
    return await axios.get(url + `/get/notification/${id}`);
  } catch (error) {
    console.log(error);
  }
};
// <--------------------------------------------------------------------------------------------------------->
