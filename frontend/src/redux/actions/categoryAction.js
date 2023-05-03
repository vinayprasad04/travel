import axios from "axios";
const url = process.env.REACT_APP_BASE_URL;

// <---------------------------------------------------------------------------------------------------------->
//Get Category
export const Category = async () => {
  try {
    return await axios.get(url + "/category");
  } catch (error) {
    console.log(error);
  }
};
// <--------------------------------------------------------------------------------------------------------->

// <---------------------------------------------------------------------------------------------------------->
// Create Category
export const CreateCategorys = async (myForm) => {
  try {
    return await axios.post(url + "/create/category", myForm);
  } catch (error) {
    console.log(error);
  }
};
// <--------------------------------------------------------------------------------------------------------->

// <---------------------------------------------------------------------------------------------------------->
//Get Multiple Category
export const getCategories = async () => {
  try {
    return await axios.get(url + "/get/category");
  } catch (error) {
    console.log(error);
  }
};
// <--------------------------------------------------------------------------------------------------------->

// <---------------------------------------------------------------------------------------------------------->
// Delete Category
export const deleteCategory = async (id) => {
  try {
    return await axios.post(url + "/delete/category", { id });
  } catch (error) {
    console.log(error);
  }
};
// <--------------------------------------------------------------------------------------------------------->
