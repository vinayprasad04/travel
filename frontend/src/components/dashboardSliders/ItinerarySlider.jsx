import React, { useEffect, useState } from "react";
import axios from "axios";

import ItineraryCard from "./ItineraryCard";

import coverImg from "../../assets/img/spa_0.png";

import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const ItinerarySlider = () => {
    
    const [cardData, setCardData] = useState([]);

    const getData = async () => {
        try {
            console.log("url", process.env.REACT_APP_URL)
            const result = await axios.get(process.env.REACT_APP_URL+"/events");
            setCardData(result?.data);
            console.log(cardData);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getData();
    }, []);

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
                    {cardData.map((item, i) => {
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
