import axios from "axios";
const url = process.env.REACT_APP_BASE_URL;

// <---------------------------------------------------------------------------------------------------------->
//Get Events
export const GetEvents = async (token) => {
  try {
    return await axios.post(url + "/events", {}, { headers: { token: token } });
  } catch (error) {
    console.log(error);
  }
};
// <--------------------------------------------------------------------------------------------------------->

// <---------------------------------------------------------------------------------------------------------->
// Create Event
export const CreateEvent = async (myForm) => {
  try {
    return await axios.post(url + "/create/event", myForm);
  } catch (error) {
    console.log(error);
  }
};
// <--------------------------------------------------------------------------------------------------------->

// <---------------------------------------------------------------------------------------------------------->
//Get All Events
export const DisplayEvent = async () => {
  try {
    return await axios.get(url + "/get/events");
  } catch (error) {
    console.log(error);
  }
};
// <--------------------------------------------------------------------------------------------------------->

// <---------------------------------------------------------------------------------------------------------->
// Show Event Details
export const GetEventDetails = async (token, id) => {
  try {
    return await axios.post(
      url + "/get/events/details",
      { id },
      { headers: { token: token } }
    );
  } catch (error) {
    console.log(error);
  }
};

// <--------------------------------------------------------------------------------------------------------->
