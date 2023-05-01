import * as Yup from "yup"

export const signUpSchenam = Yup.object({
    email:Yup.string().email().required("Please Enter Email"),
    phone:Yup.number().min(10).required("Phone number must be of 10 digit"),
    password:Yup.string().min(6).required("Please enter your password"),
    confirmpassword:Yup.string().required("Please enter confirm password").oneOf([Yup.ref('password'),null],"Password must match"), 
});