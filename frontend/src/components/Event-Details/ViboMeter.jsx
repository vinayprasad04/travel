import React, { Fragment } from "react";
import overwhelmed from "../../assets/img/overwhelmed.svg";
import joy from "../../assets/img/joy.svg";
import appreciation from "../../assets/img/appreciation.svg";
import boredom from "../../assets/img/boredom.svg";
import disappointed from "../../assets/img/disappointed.svg";
import anger from "../../assets/img/anger.svg";

const ViboMeter = () => {
  const viboMeterData = {
    anger: 1,
  };

  const styleViboMeter = viboMeterData ? "active" : "";

  return (
    <Fragment>
      {" "}
      <div className="event__meter">
        <h4 className="event__reserve--title">Vibe-o-meter of the event</h4>
        <ul className="emotions__list">
          <li
            className={
              viboMeterData.overwhelmed
                ? `emotions__list--item ${styleViboMeter}`
                : `emotions__list--item`
            }
          >
            <div className="emotion overwhelmed"></div>
            <img src={overwhelmed} alt="" width="52" height="52px" />
          </li>
          <li
            className={
              viboMeterData.joy
                ? `emotions__list--item ${styleViboMeter}`
                : `emotions__list--item`
            }
          >
            <div className="emotion joy"></div>
            <img src={joy} alt="" width="52" height="52px" />
          </li>
          <li
            className={
              viboMeterData.appreciation
                ? `emotions__list--item ${styleViboMeter}`
                : `emotions__list--item`
            }
          >
            <div className="emotion appreciation"></div>
            <img src={appreciation} alt="" width="52" height="52px" />
          </li>
          <li
            className={
              viboMeterData.boredom
                ? `emotions__list--item ${styleViboMeter}`
                : `emotions__list--item`
            }
          >
            <div className="emotion boredom"></div>
            <img src={boredom} alt="" width="52" height="52px" />
          </li>
          <li
            className={
              viboMeterData.disappointed
                ? `emotions__list--item ${styleViboMeter}`
                : `emotions__list--item`
            }
          >
            <div className="emotion disappointed"></div>
            <img src={disappointed} alt="" width="52" height="52px" />
          </li>
          <li
            className={
              viboMeterData.anger
                ? `emotions__list--item ${styleViboMeter}`
                : `emotions__list--item`
            }
          >
            <div className="emotion anger"></div>
            <img src={anger} alt="" width="52" height="52px" />
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default ViboMeter;
