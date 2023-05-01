import React from "react";
import Card from "./Card";

import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const Slider = () => {
    let dummy = [
        {
            coverImg: require("../../assets/img/spa_0.png"),
            title: "Surfing at leasure",
            eventDetails:
                "Lorem ipsum dolorum doloribus pariatur maiores incidunt? nihil? Hic perferendis tempore velit magni admaior...",
            duration: "Nov 10, 10:30 AM - Nov 29. 6:30 PM",
            location: "Sindalah City",
            category: "Golf",
        },
        {
            coverImg: require("../../assets/img/holiday_0.png"),
            title: "Surfing at leasure",
            eventDetails:
                "Lorem ipsum dolorum doloribus pariatur maiores incidunt? nihil? Hic perferendis tempore velit magni admaior...",
            duration: "Nov 10, 10:30 AM - Nov 29. 6:30 PM",
            location: "Sindalah City",
            category: "Golf",
        },
        {
            coverImg: require("../../assets/img/cusine_0.png"),
            title: "Surfing at leasure",
            eventDetails:
                "Lorem ipsum dolorum doloribus pariatur maiores incidunt? nihil? Hic perferendis tempore velit magni admaior...",
            duration: "Nov 10, 10:30 AM - Nov 29. 6:30 PM",
            location: "Sindalah City",
            category: "Golf",
        },
        {
            coverImg: require("../../assets/img/spa_0.png"),
            title: "Surfing at leasure",
            eventDetails:
                "Lorem ipsum dolorum doloribus pariatur maiores incidunt? nihil? Hic perferendis tempore velit magni admaior...",
            duration: "Nov 10, 10:30 AM - Nov 29. 6:30 PM",
            location: "Sindalah City",
            category: "Golf",
        },
        {
            coverImg: require("../../assets/img/holiday_0.png"),
            title: "Surfing at leasure",
            eventDetails:
                "Lorem ipsum dolorum doloribus pariatur maiores incidunt? nihil? Hic perferendis tempore velit magni admaior...",
            duration: "Nov 10, 10:30 AM - Nov 29. 6:30 PM",
            location: "Sindalah City",
            category: "Golf",
        },
        {
            coverImg: require("../../assets/img/cusine_0.png"),
            title: "Surfing at leasure",
            eventDetails:
                "Lorem ipsum dolorum doloribus pariatur maiores incidunt? nihil? Hic perferendis tempore velit magni admaior...",
            duration: "Nov 10, 10:30 AM - Nov 29. 6:30 PM",
            location: "Sindalah City",
            category: "Golf",
        },
    ];

    return (
        <>
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
                        {dummy.map((item,i) => {
                            return (
                                    <SwiperSlide className="swiper-slide" key={i} >
                                        <Card
                                            coverImg={item.coverImg}
                                            title={item.title}
                                            eventDetails={item.eventDetails}
                                            duration={item.duration}
                                            location={item.location}
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
        </>
    );
};

export default Slider;