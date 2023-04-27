import React from "react";
import { useNavigate } from "react-router-dom";

const NavigationButton = ({ isCompleted, isRevieved , id }) => {
  const navigate = useNavigate();

  if (!isCompleted && !isRevieved) {
    return (
      <button
        className="btn__transparent"
        onClick={() => navigate(`/event-details/${id}`)}
      >
        View event
      </button>
    );
  }
  if (isCompleted && !isRevieved) {
    return (
      <button
        className="btn__transparent"
        onClick={() => navigate("/event-details")}
      >
        Add Review
      </button>
    );
  }
  return (
    <button className="btn__transparent" onClick={() => navigate("/dashboard")}>
      Go to home page
    </button>
  );
};

export default NavigationButton;
