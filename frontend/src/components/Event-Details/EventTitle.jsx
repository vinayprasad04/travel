import React, { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";


const EventTitle = ({eventData}) => {
  return (
    <Fragment>
      {" "}
      <h2 className="eventDetails__title">{eventData?.[0].eventname}</h2>
      <div className="eventDetails__review">
        <div className="rating">
          <Rating initialValue={eventData?.[0].eventrating} size={20} readonly={true} />
        </div>
        <div className="review">
          {eventData?.[0].eventrating} <span>23 reviews</span>
        </div>
        <div className="location">{eventData?.[0].place}</div>
      </div>
    </Fragment>
  );
};

export default EventTitle;
