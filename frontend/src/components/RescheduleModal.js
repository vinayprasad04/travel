import React, { useState } from "react";
import cross from "../assets/img/close-icon.png";
import { useDispatch } from "react-redux";
import { RescheduleHide, setData } from "../redux/features/RescheduleForm";
import axios from "axios";

const RescheduleModal = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("userDetails"));
  console.log(user.user_name);

  const submitModalHandler = () => {
    console.log(date);
    dispatch(RescheduleHide());
    dispatch(setData([date, time]));

    axios
      .post(`${process.env.REACT_APP_BASE_URL}/events/reschedule`, { date })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="modelOverlay active">
      <div className="modelInner">
        <h4>
          {user.user_name}, considering your golf handicap we have few
          recommendations for you
        </h4>
        <form>
          <div className="item">
            <label>Date</label>
            <div className="inputWrap">
              <input
                type="radio"
                name="date"
                id="date"
                value="2023-12-17"
                onChange={(e) => setDate(e.target.value)}
              />
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
                onChange={(e) => setTime(e.target.value)}
              />
              <label> 10:30AM - 12:30PM</label>
            </div>
            <div className="inputWrap">
              <input
                type="radio"
                name="Time"
                id="Time2"
                value="3:00PM - 5:30PM"
                onChange={(e) => setTime(e.target.value)}
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
