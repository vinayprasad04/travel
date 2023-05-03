import React, { Fragment, useEffect } from "react";

import pic from "../../assets/img/overwhelmed.svg";

const EventDescription = ({ eventData }) => {
  return (
    <Fragment>
      {" "}
      <div className="event__description">
        <h4 className="event__reserve--title">About the event</h4>
        <ul className="event__description--list">
          <li className="event__description--list-item">
            <div className="icon icon-category"></div>
            <div className="description-details">
              <h5> {eventData?.[0].aboutevent.category} category</h5>
              <p>
                This is one of the many events comes under the{" "}
                {eventData?.[0].aboutevent.category} category.
              </p>
            </div>
          </li>
          <li className="event__description--list-item">
            <div className="icon icon-location"></div>
            <div className="description-details">
              <h5>Great location</h5>
              <p>
                This is one of the many events comes under the{" "}
                {eventData?.[0].aboutevent.category} category.
              </p>
            </div>
          </li>
          <li className="event__description--list-item">
            <div className="icon">
              <img src={pic} alt="" />
            </div>
            <div className="description-details">
              <h5>{eventData?.[0].aboutevent.experience} experience</h5>
              <p>
                This event has a rating of {eventData?.[0].eventrating} that
                make this event {eventData?.[0].aboutevent.experience}.
              </p>
            </div>
          </li>
        </ul>
        <div className="event__description--content">
          <p>{eventData?.[0].eventdescription}</p>
          <p>{eventData?.[0].eventdescription}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default EventDescription;
