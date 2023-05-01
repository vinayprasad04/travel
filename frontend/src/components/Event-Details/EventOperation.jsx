import React, { Fragment } from "react";
import { Rating } from "react-simple-star-rating";

const EventOperation = () => {
  return (
    <Fragment>
      {" "}
      <div className="event__review">
        <h4 className="event__reserve--title">Operated by River Stone</h4>
        <div className="event__review--row">
          <div className="rating">
            <Rating initialValue="4.9" size={20} readonly={true} />
          </div>
          <div className="review">4.9</div>
        </div>
        <div className="event__description--content">
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

export default EventOperation;
