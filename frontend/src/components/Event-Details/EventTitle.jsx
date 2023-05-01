import React, { Fragment } from "react";
import { Rating } from "react-simple-star-rating";

const EventTitle = ({ event }) => {
  return (
    <Fragment>
      {" "}
      <h2 className="eventDetails__title">{event?.title}</h2>
      <div className="eventDetails__review">
        <div className="rating">
          <Rating initialValue="5" size={20} readonly={true} />
        </div>
        <div className="review">
          5.0 <span>23 reviews</span>
        </div>
        <div className="location">{event?.location}</div>
      </div>
    </Fragment>
  );
};

export default EventTitle;
