import React from 'react'
import { useNavigate } from "react-router-dom";

const NavigationButton = ({isCompleted, isRevieved}) => {
    const navigate = useNavigate();
  return (
    <button
        className="btn__transparent"
        onClick={() => navigate("/event-details")}
      >
        View event
    </button>
  )
}

export default NavigationButton