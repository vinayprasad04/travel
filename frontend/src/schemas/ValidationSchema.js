import * as Yup from "yup";

///schema for Profile update page

export const ProfileValidation = Yup.object({
  name: Yup.string()
    .min(3)
    .max(15)
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      "Name can only contain Alphabets letters."
    )
    .required("Name is required"),
  email: Yup.string().email().required("Email is required"),
  phone: Yup.string().min(10).max(10).required("Phone No is required"),
});

///shema for Register page

export const RegisterValidation = Yup.object({
  name: Yup.string()
    .min(3)
    .max(3)
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      "Name can only contain Alphabets letters."
    )
    .required("Name is required"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().min(3).max(10).required("Password is required"),
  phone: Yup.string().min(10).max(10).required("Phone No is required"),
  dob: Yup.string().required("Date of Birth is required !"),
});

///schema for login Page

export const loginValidation = Yup.object({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().min(3).max(10).required("Password is required"),
});
