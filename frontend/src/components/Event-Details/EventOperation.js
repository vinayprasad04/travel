import React, { Fragment } from "react";
import { Rating } from "react-simple-star-rating";

const EventOperation = ({ eventOperationData }) => {
  return (
    <Fragment>
      {" "}
      <div className="event__review">
        <h4 className="event__reserve--title">
          Operated By {eventOperationData?.[0]?.eventoperation?.operatedby}
        </h4>
        <div className="event__review--row">
          <div className="rating">
            <Rating
              initialValue={
                eventOperationData?.[0]?.eventoperation?.operationsrating
              }
              size={20}
              readonly={true}
            />
          </div>
          <div className="review">
            {eventOperationData?.[0]?.eventoperation?.operationsrating}
          </div>
        </div>
        <div className="event__description--content">
          <p>{eventOperationData?.[0]?.eventoperation?.operationdescription}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default EventOperation;
