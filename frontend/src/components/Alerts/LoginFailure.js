import Swal from "sweetalert2";

function LoginFailure() {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
    //    footer: '<a href="">Why do I have this issue?</a>',
  });
}

export default LoginFailure;
