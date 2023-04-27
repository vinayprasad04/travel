import axios from "axios";

const url = process.env.REACT_APP_BASE_URL;

///GET Category

export const Category = async () => {
  try {
    return await axios.get(url + "/category");
  } catch (error) {
    console.log(error);
  }
};

///Get Intrests

export const Intrests = async () => {
  try {
    return await axios.get(url + "/intrests");
  } catch (error) {
    console.log(error);
  }
};

///Register

export const Registers = async (myForm) => {
  try {
    return await axios.post(url + "/register", myForm);
  } catch (error) {
    console.log(error);
  }
};

///Login

export const Logins = async (email, password) => {
  try {
    return await axios.post(url + "/login", { email, password });
  } catch (error) {
    console.log(error);
  }
};

///Load User

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

////Update Profile

export const UpdateProfile = async (token, myForm) => {
  try {
    return await axios.patch(url + "/update/profile", myForm, {
      headers: { token: token },
    });
  } catch (error) {
    console.log(error);
  }
};

/// Get Events

export const GetEvents = async (token) => {
  try {
    return await axios.post(url + "/events", {}, { headers: { token: token } });
  } catch (error) {
    console.log(error);
  }
};

/// create category

export const CreateCategorys = async (myForm) => {
  try {
    return await axios.post(url + "/create/category", myForm);
  } catch (error) {
    console.log(error);
  }
};

/// get Category

export const getCategories = async () => {
  try {
    return await axios.get(url + "/get/category");
  } catch (error) {
    console.log(error);
  }
};

///delete Category

export const deleteCategory = async (id) => {
  try {
    return await axios.post(url + "/delete/category", { id });
  } catch (error) {
    console.log(error);
  }
};

///create Events

export const CreateEvent = async (myForm) => {
  try {
    return await axios.post(url + "/create/event", myForm);
  } catch (error) {
    console.log(error);
  }
};

/// Display Events

export const DisplayEvent = async () => {
  try {
    return await axios.get(url + "/get/events");
  } catch (error) {
    console.log(error);
  }
};
