import * as Yup from "yup";

export const UserRegistrationSchema = Yup.object({
  userName: Yup.string()
    .max(20, "Must be 15 characters or less")
    .min(4, "Must be 4 characters or more")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(8, "Password should be more than 8 characters")
    .max(14, "Password should be less than 14 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/,
      " One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  confirmPassword: Yup.string()
    .required("required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});
