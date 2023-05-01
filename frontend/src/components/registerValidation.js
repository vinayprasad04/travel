import * as Yup from "yup";

const phoneRegExp = /^[6-9]\d{9}$/;
const passwordRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

export const RegisterValidation = Yup.object({
  email: Yup.string()
    .email("email must be a valid")
    .required("Required field !"),
  phone: Yup.string()
    .matches(phoneRegExp, "Please enter the valid phone number !")
    .required("Reqired field !"),
  password: Yup.string()
    .min(8, "Password must contain atleast 8 characters !")
    .matches(
      passwordRegExp,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    )
    .required("Required field !"),
  c_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required field !"),
});
