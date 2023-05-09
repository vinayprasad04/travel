import Swal from "sweetalert2";
function Success(success) {
  Swal.fire("Good job!", `${success}`, "success");
}

export default Success;
