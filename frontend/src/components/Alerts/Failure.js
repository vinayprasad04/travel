import Swal from "sweetalert2";

function Failure(error) {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: `${error}`,
  });
}

export default Failure;
