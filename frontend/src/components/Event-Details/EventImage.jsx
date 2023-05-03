import React, { Fragment, useEffect, useState } from "react";
import eventImage from "../../assets/img/Image118.jpg";
import ShowModal from "./ShowModal";
import useFetch from "../../hooks/useFetch";

const EventImage = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const handleClick = () => {
    setOpen(true);
  };

  const data = useFetch(
    "http://localhost:8080/api/scheduled/get-scheduled-events"
  );
  // console.log(data);
  // console.log(
  //   "new ",
  //   data[0]?.data[0]?.scheduledevents[1].scheduledtime,
  //   data[0]?.data[0]?.scheduledevents[1].completed
  // );
  // const b =
  //   Date.parse(
  //     `2023-05-03 ${data[0]?.data[0]?.scheduledevents[1].completed}`
  //   ) === Date.parse(`2023-05-03 ${new Date().toLocaleTimeString()}`);

  // console.log(b);

  // useEffect(() => {}, []);

  // console.log("hi", new Date().toLocaleTimeString());
  // console.log(
  //   "nn",
  //   Date.parse(
  //     `2023-05-03 ${data[0]?.data[0]?.scheduledevents[0].scheduledtime}`
  //   ) > Date.parse(`2023-05-03 ${new Date().toLocaleTimeString()}`)
  // );

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
        <div className="status scheduled">Scheduled</div>
        <button className="btn__white" onClick={handleClick}>
          Show all
        </button>{" "}
      </div>
      <ShowModal open={open} handleClose={handleClose} />
    </Fragment>
  );
};

export default EventImage;
