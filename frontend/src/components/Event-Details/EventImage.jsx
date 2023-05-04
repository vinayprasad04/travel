import React, { Fragment, useEffect, useState } from "react";
import eventImage from "../../assets/img/Image118.jpg";
import ShowModal from "./ShowModal";

const EventImage = ({ scheduledData }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  let status = "Scheduled";

  const handleClick = () => {
    setOpen(true);
  };

  const completedTime =
    scheduledData?.[0]?.scheduledevents[
      scheduledData?.[0]?.scheduledevents?.length - 1
    ].completed;

  const time = new Date();
  if (completedTime) {
    const [hours, minutes, seconds] = completedTime.split(":");

    time.setHours(hours);
    time.setMinutes(minutes);
    time.setSeconds(seconds);
  }

  const currentTime = new Date().toLocaleTimeString();
  const time2 = new Date();

  if (currentTime) {
    const fullTime = currentTime.split(":");
    const [hours2, minutes2] = currentTime.split(":");
    const seconds2 = fullTime[2].split(" ")[0];

    time2.setHours(hours2);
    time2.setMinutes(minutes2);
    time2.setSeconds(seconds2);
  }

  if (time.getTime() < time2.getTime()) {
    console.log(completedTime + " is before " + currentTime);
    status = "Completed";
  }

  return (
    <Fragment>
      {" "}
      <div className="eventDetails__grid">
        <div className="eventDetails__grid--col grid__box">
          <div className="grid__box--sm">
            <img
              src={eventImage}
              alt=""
              className="grid__image border__rounded--topLeft"
            />
          </div>
          <div className="grid__box--sm">
            <img src={eventImage} alt="" className="grid__image" />
          </div>
          <div className="grid__box--sm">
            <img
              src={eventImage}
              alt=""
              className="grid__image border__rounded--bottomLeft"
            />
          </div>
          <div className="grid__box--sm">
            <img src={eventImage} alt="" className="grid__image" />
          </div>
        </div>
        <div className="eventDetails__grid--col">
          <img
            src={eventImage}
            alt=""
            className="grid__image border__rounded--topRight border__rounded--bottomRight"
          />
        </div>
        <div className="status scheduled">{status}</div>
        <button className="btn__white" onClick={handleClick}>
          Show all
        </button>{" "}
      </div>
      <ShowModal open={open} handleClose={handleClose} />
    </Fragment>
  );
};

export default EventImage;
