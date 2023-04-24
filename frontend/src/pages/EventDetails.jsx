import React, { useEffect } from "react";
import { swiperHandle } from "../assets/js/swiper-handle.js";
import "../assets/scss/index.css";
import "../assets/scss/swiper-bundle.min.css";
import RatingCard from "../components/Event-Details/RatingCard.jsx";
import EventRecommendation from "../components/Event-Details/EventRecommendation.jsx";
import EventImage from "../components/Event-Details/EventImage.jsx";
import ViboMeter from "../components/Event-Details/ViboMeter.jsx";
import EventDescription from "../components/Event-Details/EventDescription.jsx";
import EventReview from "../components/Event-Details/EventReview.jsx";
import EventReserveForm from "../components/Event-Details/EventReserveForm.jsx";
import EventTitle from "../components/Event-Details/EventTitle.jsx";

const EventDetails = () => {
  useEffect(() => {
    swiperHandle();
  }, []);

  return (
    <div>
      <main className="content event">
        <div className="eventDetails">
          <div className="container">
            <EventTitle />
            <EventImage />
          </div>
        </div>

        <div className="eventReserve">
          <div className="container">
            <div className="eventReserve__grid">
              <div className="eventReserve__grid--col">
                <ViboMeter />
                <EventDescription />
                <EventReview />
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
              <RatingCard />
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
              <EventRecommendation />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EventDetails;
