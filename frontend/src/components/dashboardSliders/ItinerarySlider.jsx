import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import ItineraryCard from "./ItineraryCard";

import coverImg from "../../assets/img/spa_0.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/bundle";

const ItinerarySlider = () => {
    const eventsData = useSelector((state) => state.events);

    const itineraries=useSelector(state=>state.itinerary);
    //console.log(itineraries);

    //const [cardData, setCardData] = useState([]);
    // const getData = async () => {
    //     try {
    //         const result = await axios.get(process.env.REACT_APP_URL+"/events");
    //         setCardData(result?.data);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };
    // console.log(cardData)

    // useEffect(() => {
    //     getData();
    // }, []);

    return (
        <div className="recSlider recSlider--cardView">
            <h2 className="recSlider__title">Good morning Charlie!</h2>
            <div className="recSlider__subtitle">
                <p>
                    Below listed are your itineraries, have a look to the
                    timings and the location.
                </p>
                <p>We wish you to enjoy the activities and the weather!</p>
            </div>

            <Swiper
                modules={[Navigation]}
                className="swiper tailored"
                slidesPerView={"auto"}
                spaceBetween={30}
                navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next",
                }}
            >
                <div className="swiper-wrapper">
                    {eventsData?.events?.data?.map((item, i) => {
                        return (
                            <SwiperSlide className="swiper-slide" key={i}>
                                <ItineraryCard
                                    coverImg={coverImg}
                                    title={item.title}
                                    eventDetails={item.event_description}
                                    startDate={item.start_date}
                                    endDate={item.end_date}
                                    duration={item.duration}
                                    location={item.venue}
                                    category={item.category}
                                />
                            </SwiperSlide>
                        );
                    })}
                </div>

                <div className="swiper-buttons">
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
            </Swiper>
        </div>
    );
};

export default ItinerarySlider;
