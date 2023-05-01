import React, { Fragment, useState } from "react";
import eventImage from "../../assets/img/Image118.jpg";
import ShowModal from "./ShowModal";

const EventImage = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const handleClick = () => {
    setOpen(true);
  };

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
