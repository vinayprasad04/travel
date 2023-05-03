import React, { Fragment, useState } from "react";
import ShowModal from "./ShowModal";

const EventImage = ({ event }) => {
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
              src={`https://cdn.firsttry.live/${event?.images[0]?.url}`}
              alt=""
              className="grid__image border__rounded--topLeft"
            />
          </div>
          <div className="grid__box--sm">
            <img
              src={`https://cdn.firsttry.live/${event?.images[1]?.url}`}
              alt=""
              className="grid__image"
            />
          </div>
          <div className="grid__box--sm">
            <img
              src={`https://cdn.firsttry.live/${
                event?.images.length < 3
                  ? event?.images[1]?.url
                  : event?.images[2]?.url
              }`}
              alt=""
              className="grid__image border__rounded--bottomLeft"
            />
          </div>
          <div className="grid__box--sm">
            <img
              src={`https://cdn.firsttry.live/${
                event?.images.length < 3
                  ? event?.images[0]?.url
                  : event?.images[3]?.url
              }`}
              alt=""
              className="grid__image"
            />
          </div>
        </div>
        <div className="eventDetails__grid--col">
          <img
            src={`https://cdn.firsttry.live/${
              event?.images.length < 2
                ? event?.images[0]?.url
                : event?.images[event?.images.length - 1]?.url
            }`}
            alt=""
            className="grid__image border__rounded--topRight border__rounded--bottomRight"
          />
        </div>
        <div className="status scheduled">{event?.status}</div>
        <button className="btn__white" onClick={handleClick}>
          Show all
        </button>{" "}
      </div>
      <ShowModal event={event?.images} open={open} handleClose={handleClose} />
    </Fragment>
  );
};

export default EventImage;
