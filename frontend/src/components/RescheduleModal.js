import React, { useState } from "react";
import cross from "../assets/img/close-icon.png";
import { useDispatch } from "react-redux";
import {
  RescheduleHide,
  RescheduleVisible,
} from "../redux/features/RescheduleForm";

const RescheduleModal = () => {
  const [formdata, setFormData] = useState([]);
  const dispatch = useDispatch();

  const submitModalHandler = () => {
    dispatch(RescheduleHide());
  };

  return (
    <div className="modelOverlay active">
      <div className="modelInner">
        <h4>
          Charlie, considering your golf handicap we have few recommendations
          for you
        </h4>
        <form>
          <div className="item">
            <label>Date</label>
            <div className="inputWrap">
              <input type="radio" name="date" id="date" value="17 Dec" />
              <label> 17 Dec</label>
            </div>
          </div>
          <div className="item">
            <label>Time</label>
            <div className="inputWrap">
              <input
                type="radio"
                name="Time"
                id="Time"
                value="8:00PM - 10:30PM"
              />
              <label> 10:30AM - 12:30PM</label>
            </div>
            <div className="inputWrap">
              <input
                type="radio"
                name="Time"
                id="Time2"
                value="3:00PM - 5:30PM"
              />
              <label> 1:30PM - 3:30PM</label>
            </div>
          </div>
          <div className="item">
            <label>No. of Guest</label>
            <select name="" id="">
              <option value="1">1</option>
            </select>
          </div>
        </form>
        <button
          onClick={() => submitModalHandler()}
          className="btn rescheduledPopupBtn"
        >
          Reserve
        </button>

        <div className="rescheduled__close">
          <button onClick={() => dispatch(RescheduleHide())}>
            <img width={25} src={cross} alt="cc" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RescheduleModal;
