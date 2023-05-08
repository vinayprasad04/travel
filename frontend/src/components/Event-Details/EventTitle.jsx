import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Rating } from "react-simple-star-rating";

const EventTitle = ({ eventData, id, reviewData }) => {
  const avgRatingData = useFetch(
    `http://localhost:8080/api/user-reviews/average/${id}`
  );

  const avgRating = avgRatingData?.[0]?.data;

  let content = "review";
  const reviewLength = reviewData?.[0]?.reviews.length;

  if (reviewLength > 1) {
    content = "reviews";
  }

  useEffect(() => {
    if (avgRatingData) {
      const url = `http://localhost:8080/api/event-update/update/${id}`;

      const data = axios.put(url, {
        eventrating: Math.floor(avgRating),
      });
    }
  }, [avgRating, id]);

  return (
    <Fragment>
      {" "}
      <h2 className="eventDetails__title">{eventData?.[0].eventname}</h2>
      <div className="eventDetails__review">
        <div className="rating">
          <Rating
            initialValue={Math.floor(avgRating)}
            size={20}
            readonly={true}
          />
        </div>
        <div className="review">
          {avgRating}{" "}
          <span>
            {reviewLength} {content}
          </span>
        </div>
        <div className="location">{eventData?.[0].place}</div>
      </div>
    </Fragment>
  );
};

export default EventTitle;
