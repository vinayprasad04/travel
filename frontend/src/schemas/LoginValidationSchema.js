import * as Yup from "yup";
const loginValidationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(8, "Password should be more than 8 characters")
    .max(14, "Password should be less than 14 characters"),
});

export default loginValidationSchema;
