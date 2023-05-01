import React, { Fragment } from "react";
import pic from "../../assets/img/overwhelmed.svg";

const EventDescription = () => {
  return (
    <Fragment>
      {" "}
      <div className="event__description">
        <h4 className="event__reserve--title">About the event</h4>
        <ul className="event__description--list">
          <li className="event__description--list-item">
            <div className="icon icon-category"></div>
            <div className="description-details">
              <h5>Golf</h5>
              <p>
                This is one of the many events comes under the Golf category.
              </p>
            </div>
          </li>
          <li className="event__description--list-item">
            <div className="icon icon-location"></div>
            <div className="description-details">
              <h5>Great location</h5>
              <p>
                This is one of the many events comes under the Golf category.
              </p>
            </div>
          </li>
          <li className="event__description--list-item">
            <div className="icon">
              <img src={pic} alt="" />
            </div>
            <div className="description-details">
              <h5>Overwhelmed experience</h5>
              <p>
                This event has a rating of 5.0 that make this event overwhelmed.
              </p>
            </div>
          </li>
        </ul>
        <div className="event__description--content">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elit.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elit.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default EventDescription;
