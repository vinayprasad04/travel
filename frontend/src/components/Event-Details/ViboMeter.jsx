import React, { Fragment, useEffect } from "react";
import overwhelmed from "../../assets/img/overwhelmed.svg";
import joy from "../../assets/img/joy.svg";
import appreciation from "../../assets/img/appreciation.svg";
import boredom from "../../assets/img/boredom.svg";
import disappointed from "../../assets/img/disappointed.svg";
import anger from "../../assets/img/anger.svg";
import { useDispatch } from "react-redux";
import { experienceActions } from "../../store/dataStore";
import axios from "axios";

const ViboMeter = ({ reviewData, id, eventData }) => {
  const dispatch = useDispatch();

  const category = eventData?.[0]?.aboutevent?.category;

  const reviewLength = reviewData?.[0]?.reviews.length;

  let sum = 0;
  let srcemoji;

  const avgRatingData = reviewData?.[0]?.reviews.map((item) => {
    sum += item.rating;
    return sum;
  });

  const avgRating = avgRatingData?.slice(-1)[0] / reviewLength;
  const floorAvgRating = Math.floor(avgRating);

  let viboMeterData;

  if (floorAvgRating) {
    if (floorAvgRating === 5) {
      viboMeterData = {
        overwhelmed: 1,
      };
      srcemoji = "overwhelmed";
    }
    if (floorAvgRating === 4) {
      viboMeterData = {
        joy: 1,
      };
      srcemoji = "joy";
    }
    if (floorAvgRating === 3) {
      viboMeterData = {
        appreciation: 1,
      };
      srcemoji = "appreciation";
    }

    if (floorAvgRating === 2) {
      viboMeterData = {
        boredom: 1,
      };
      srcemoji = "boredom";
    }
    if (floorAvgRating === 1) {
      viboMeterData = {
        disappointed: 1,
      };
      srcemoji = "disappointed";
    }
  }

  console.log("let", viboMeterData);

  useEffect(() => {
    if (viboMeterData) {
      const url = `http://localhost:8080/api/event-update/update/${id}`;

      const data = axios.put(url, {
        aboutevent: {
          category: category,
          experience: viboMeterData,
          srcemoji: srcemoji,
        },
      });
    }
  }, [viboMeterData, srcemoji, id]);

  useEffect(() => {
    console.log(
      dispatch(
        experienceActions.getExperience({
          payload: viboMeterData,
        })
      )
    );

    return () => {
      const cancelAction = { type: "CANCEL_ACTION" };
      dispatch(cancelAction);
    };
  }, [dispatch, viboMeterData]);

  const styleViboMeter = viboMeterData ? "active" : "";

  return (
    <Fragment>
      {" "}
      <div className="event__meter">
        <h4 className="event__reserve--title">Vibe-o-meter of the event</h4>
        <ul className="emotions__list">
          <li
            className={
              viboMeterData?.overwhelmed
                ? `emotions__list--item ${styleViboMeter}`
                : `emotions__list--item`
            }
          >
            <div className="emotion overwhelmed"></div>
            <img src={overwhelmed} alt="" width="52" height="52px" />
          </li>
          <li
            className={
              viboMeterData?.joy
                ? `emotions__list--item ${styleViboMeter}`
                : `emotions__list--item`
            }
          >
            <div className="emotion joy"></div>
            <img src={joy} alt="" width="52" height="52px" />
          </li>
          <li
            className={
              viboMeterData?.appreciation
                ? `emotions__list--item ${styleViboMeter}`
                : `emotions__list--item`
            }
          >
            <div className="emotion appreciation"></div>
            <img src={appreciation} alt="" width="52" height="52px" />
          </li>
          <li
            className={
              viboMeterData?.boredom
                ? `emotions__list--item ${styleViboMeter}`
                : `emotions__list--item`
            }
          >
            <div className="emotion boredom"></div>
            <img src={boredom} alt="" width="52" height="52px" />
          </li>
          <li
            className={
              viboMeterData?.disappointed
                ? `emotions__list--item ${styleViboMeter}`
                : `emotions__list--item`
            }
          >
            <div className="emotion disappointed"></div>
            <img src={disappointed} alt="" width="52" height="52px" />
          </li>
          <li
            className={
              viboMeterData?.anger
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
