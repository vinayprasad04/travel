import React, { useState } from "react";

import "./overlay.scss";

import crossImg from "../../assets/img/cross.svg";

const Popup = () => {
  const [visible, setVisible] = useState(true);

  const handleCross = () => {
    setVisible(false);
  };

  return visible ? (
    <div class="modelOverlay">
      <div class="modelInner">
        <h4>
          Charlie, considering your golf handicap we have few recommendations
          for you
        </h4>
        <form>
          <div class="item">
            <label>Date</label>
            <div class="inputWrap">
              <input
                type="radio"
                name="date"
                id="date"
                value="17 Dec"
                checked
              />
              <label> 17 Dec</label>
            </div>
          </div>
          <div class="item">
            <label>Time</label>
            <div class="inputWrap">
              <input
                type="radio"
                name="Time"
                id="Time"
                value="8:00PM - 10:30PM"
                checked
              />
              <label> 10:30AM - 12:30PM</label>
            </div>
            <div class="inputWrap">
              <input
                type="radio"
                name="Time"
                id="Time2"
                value="3:00PM - 5:30PM"
              />
              <label> 1:30PM - 3:30PM</label>
            </div>
          </div>
          <div class="item">
            <label>No. of Guest</label>
            <select name="" id="">
              <option value="1">1</option>
            </select>
          </div>
        </form>
        <button class="btn rescheduledPopupBtn">Reserve</button>
        <div class=" rescheduled__close" onClick={handleCross}>
          <img src={crossImg} alt="" />
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
