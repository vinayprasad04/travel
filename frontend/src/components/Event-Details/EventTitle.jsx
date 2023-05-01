import React, { Fragment } from "react";
import { Rating } from "react-simple-star-rating";

const EventTitle = () => {
  return (
    <Fragment>
      {" "}
      <h2 className="eventDetails__title">Surfing at leasure</h2>
      <div className="eventDetails__review">
        <div className="rating">
          <Rating initialValue="5" size={20} readonly={true} />
        </div>
        <div className="review">
          5.0 <span>23 reviews</span>
        </div>
        <div className="location">Sindalah City, Dubai</div>
      </div>
    </Fragment>
  );
};

export default EventTitle;
