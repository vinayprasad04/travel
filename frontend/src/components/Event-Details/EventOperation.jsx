import React, { Fragment } from "react";
import useFetch from "../../hooks/useFetch";
import { Rating } from "react-simple-star-rating";

const EventOperation = () => {
  const operationsManageData = useFetch(
    "http://localhost:8080/api/operations/operated"
  );
  // console.log("sdsd", data[0]?.data[0].eventoperation.operatedby);
  return (
    <Fragment>
      {" "}
      <div className="event__review">
        <h4 className="event__reserve--title">
          Operated By{" "}
          {operationsManageData[0]?.data[0].eventoperation.operatedby}
        </h4>
        <div className="event__review--row">
          <div className="rating">
            <Rating
              initialValue={
                operationsManageData[0]?.data[0].eventoperation.operationsrating
              }
              size={20}
              readonly={true}
            />
          </div>
          <div className="review">
            {operationsManageData[0]?.data[0].eventoperation.operationsrating}
          </div>
        </div>
        <div className="event__description--content">
          <p>
            {
              operationsManageData[0]?.data[0].eventoperation
                .operationdescription
            }
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default EventOperation;
