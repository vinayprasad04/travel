import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { displayModal } from "../../redux/features/ModalSlice";
import ModalForm from "../modalForm/ModalForm";

const NavigationButton = ({ isCompleted, isRevieved }) => {
  const navigate = useNavigate();

  const ShowModal = useSelector((state) => state.showModal);
  console.log("bjffjdddddd", ShowModal);
  const dispatch = useDispatch();

  if (!isCompleted && !isRevieved) {
    return (
      <button
        className="btn__transparent"
        onClick={() => navigate("/event-details")}
      >
        View event
      </button>
    );
  }
  if (isCompleted && !isRevieved) {
    return (
      <>
        <button
          className="btn__transparent"
          onClick={() => {
            dispatch(displayModal());
          }}
        >
          Add Review
        </button>
        {ShowModal.display && <ModalForm />}
      </>
    );
  }
  return (
    <>
      <button
        className="btn__transparent"
        onClick={() => navigate("/dashboard")}
      >
        Go to home page
      </button>
    </>
  );
};

export default NavigationButton;
