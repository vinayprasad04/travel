import React, { useState } from "react";

import Hand from "../assets/img/hand.svg";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { HideModal } from "../redux/features/PopupSlice";
import { RescheduleVisible } from "../redux/features/RescheduleForm";

const PopUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const popdetail = useSelector((state) => state.events.data.eventCancelled);
  const userInfo = useSelector((state) => state);
  console.log("userrrrrrrrrrrrrrrrrrrrrrrrrr", userInfo);
  console.log("POPPPDETALS", popdetail);
  const rescheduleHandler = () => {
    navigate("/recommendations");
    dispatch(HideModal());
    dispatch(RescheduleVisible());
  };
  const PopCancelHandler = () => {
    navigate("/recommendations");
    dispatch(HideModal());
  };
  return (
    <div className="popup">
      <h4 className="popup__title">
        Hey Charlie
        <span className="popup__icon">
          <img src={Hand} alt="asset" />
        </span>
      </h4>
      <p className="popup__content">
        We noticed that you have changed your preferences. We have added some
        new events keeping in mind your new settings.
      </p>
      <p className="popup__content">
        Please visit the home page to check the new events and activities!
      </p>
      <div className="popup__actions">
        <button className="popup__btn" onClick={() => rescheduleHandler()}>
          Reschedule
        </button>

        <button className="popup__btn" onClick={() => PopCancelHandler()}>
          Cancel
        </button>
      </div>
      <div className="popup__pointer"></div>
      <button
        style={{ background: "transparent", border: "none" }}
        className="popup__close"
        // onClick={cancelPopUpHandler}
      >
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="122.881px"
          height="122.88px"
          viewBox="0 0 122.881 122.88"
          enableBackground="new 0 0 122.881 122.88"
        >
          <g>
            <path d="M61.44,0c16.966,0,32.326,6.877,43.445,17.996c11.119,11.118,17.996,26.479,17.996,43.444 c0,16.967-6.877,32.326-17.996,43.444C93.766,116.003,78.406,122.88,61.44,122.88c-16.966,0-32.326-6.877-43.444-17.996 C6.877,93.766,0,78.406,0,61.439c0-16.965,6.877-32.326,17.996-43.444C29.114,6.877,44.474,0,61.44,0L61.44,0z M80.16,37.369 c1.301-1.302,3.412-1.302,4.713,0c1.301,1.301,1.301,3.411,0,4.713L65.512,61.444l19.361,19.362c1.301,1.301,1.301,3.411,0,4.713 c-1.301,1.301-3.412,1.301-4.713,0L60.798,66.157L41.436,85.52c-1.301,1.301-3.412,1.301-4.713,0c-1.301-1.302-1.301-3.412,0-4.713 l19.363-19.362L36.723,42.082c-1.301-1.302-1.301-3.412,0-4.713c1.301-1.302,3.412-1.302,4.713,0l19.363,19.362L80.16,37.369 L80.16,37.369z M100.172,22.708C90.26,12.796,76.566,6.666,61.44,6.666c-15.126,0-28.819,6.13-38.731,16.042 C12.797,32.62,6.666,46.314,6.666,61.439c0,15.126,6.131,28.82,16.042,38.732c9.912,9.911,23.605,16.042,38.731,16.042 c15.126,0,28.82-6.131,38.732-16.042c9.912-9.912,16.043-23.606,16.043-38.732C116.215,46.314,110.084,32.62,100.172,22.708 L100.172,22.708z" />
          </g>
        </svg>
      </button>
    </div>
  );
};

export default PopUp;
