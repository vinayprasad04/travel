import React, { useEffect, useState } from "react";
import { swiperHandle } from "../assets/js/swiper-handle.js";
import "../assets/scss/index.css";
// import "../assets/scss/swiper-bundle.min.css";
import RatingCard from "../components/cards/RatingCard.jsx";
import RecommendationCard from "../components/cards/RecommendationCard.jsx";
import EventImage from "../components/Event-Details/EventImage.jsx";
import ViboMeter from "../components/Event-Details/ViboMeter.jsx";
import EventDescription from "../components/Event-Details/EventDescription.jsx";
import EventReview from "../components/Event-Details/EventReview.jsx";
import EventReserveForm from "../components/Event-Details/EventReserveForm.jsx";
import EventTitle from "../components/Event-Details/EventTitle.jsx";
import { DisplayEvent, GetEventDetails } from "../redux/action.js";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const EventDetails = () => {
  const [recommendation, setRecommendation] = useState([]);
  const [event, setEvent] = useState();
  const param = useParams();
  const { user } = useSelector((state) => state.users);

  const token = localStorage.getItem("token");
  const id = param.id;
  const getEvents = async () => {
    const result = await GetEventDetails(token, id);
    if (result?.data.data) {
      setEvent(result?.data.data);
    }
  };

  useEffect(() => {
    swiperHandle();
    getEvents();
  }, [id]);

  const GetRecomandation = async () => {
    try {
      const result = await DisplayEvent();
      setRecommendation(result?.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetRecomandation();
  }, []);

  return (
    <div>
      <main className="content event">
        <div className="eventDetails">
          <div className="container">
            <EventTitle event={event} />
            <EventImage event={event} />
          </div>
        </div>

        <div className="eventReserve">
          <div className="container">
            <div className="eventReserve__grid">
              <div className="eventReserve__grid--col">
                <ViboMeter />
                <EventDescription event={event} />
                <EventReview />
              </div>
              <EventReserveForm />
            </div>
          </div>
        </div>
        {/* 
          <!-- Recommendations --> */}
        <div className="container">
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
        </div>

        {/* <!-- Some other recommendations --> */}
        <div className="recommendations event--recommendations">
          <div className="container">
            <h2 className="recommendations__title">
              Some more recommendations for you, {user?.data.name}!
            </h2>
            <div className="card__grid">
              {recommendation?.map((d, i) => (
                <RecommendationCard data={d} i={i} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EventDetails;
