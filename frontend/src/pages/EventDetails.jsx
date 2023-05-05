import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { swiperHandle } from "../assets/js/swiper-handle.js";
import "../assets/scss/index.css";
import "../assets/scss/swiper-bundle.min.css";
import RatingCard from "../components/Event-Details/RatingCard.jsx";
import EventRecommendation from "../components/Event-Details/EventRecommendation.jsx";
import EventImage from "../components/Event-Details/EventImage.jsx";
import ViboMeter from "../components/Event-Details/ViboMeter.jsx";
import EventDescription from "../components/Event-Details/EventDescription.jsx";
import EventReserveForm from "../components/Event-Details/EventReserveForm.jsx";
import EventTitle from "../components/Event-Details/EventTitle.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  getEventOperations,
  getEventsData,
  getScheduledEvents,
  getUserReviews,
} from "../store/dataStore.js";
import EventOperation from "../components/Event-Details/EventOperation.jsx";

const EventDetails = () => {
  useEffect(() => {
    swiperHandle();
  }, []);

  const review = useSelector((state) => state.reviews);
  const event = useSelector((state) => state.events);
  const scheduled = useSelector((state) => state.schedules);
  const operation = useSelector((state) => state.operations);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEventsData());
    dispatch(getUserReviews());
    dispatch(getScheduledEvents());
    dispatch(getEventOperations());
  }, []);

  const { id } = useParams();

  const eventData = event.events.data?.filter(
    (item) => id === item.eventid.toString()
  );

  const reviewData = review.reviews.data?.filter(
    (item) => id === item.eventid.toString()
  );

  const scheduledData = scheduled.schedules.data?.filter(
    (item) => id === item.eventid.toString()
  );

  const eventOperationData = operation.operations.data?.filter(
    (item) => id === item.eventid.toString()
  );

  const eventRecommendation = event.events.data?.filter(
    (item) => id !== item.eventid.toString()
  );

  const eventRecommendationReviews = review.reviews.data?.filter(
    (item) => id !== item.eventid.toString()
  );

  const scheduledDataRecommendation = scheduled.schedules.data?.filter(
    (item) => id !== item.eventid.toString()
  );

  // console.log("sd,kjkjjj", eventData);

  return (
    <div>
      <main className="content event">
        <div className="eventDetails">
          <div className="container">
            <EventTitle eventData={eventData} id={id} reviewData={reviewData} />
            <EventImage scheduledData={scheduledData} />
          </div>
        </div>

        <div className="eventReserve">
          <div className="container">
            <div className="eventReserve__grid">
              <div className="eventReserve__grid--col">
                <ViboMeter
                  reviewData={reviewData}
                  id={id}
                  eventData={eventData}
                />
                <EventDescription
                  eventData={eventData}
                  reviewData={reviewData}
                />
                <EventOperation eventOperationData={eventOperationData} />
              </div>
              <EventReserveForm />
            </div>
          </div>
        </div>
        {/* 
<!-- Recommendations --> */}
        <div className="recSlider recSlider--ratingCards">
          <div className="swiper tailored">
            <div className="swiper-wrapper">
              <RatingCard reviewData={reviewData} />
            </div>

            <div className="swiper-buttons">
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>
          </div>
        </div>

        {/* <!-- Some other recommendations --> */}
        <div className="recommendations event--recommendations">
          <div className="container">
            <h2 className="recommendations__title">
              Some more recommendations for you, Charlie!
            </h2>
            <div className="card__grid">
              <EventRecommendation
                eventRecommendation={eventRecommendation}
                eventRecommendationReviews={eventRecommendationReviews}
                scheduledDataRecommendation={scheduledDataRecommendation}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EventDetails;
