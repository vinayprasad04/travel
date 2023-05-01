import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/bundle";
import ExperienceCard from "./ExperiencedCard";

import {experienceData} from "../../constant";

function ExperienceSlider() {

    return (
        <div className="recSlider recSlider--cardView recSlider--cardView-fullWidth">
            <h2 className="recSlider__title">
                Charlie, hope we understand you better
            </h2>
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
                    {experienceData.map((item, i) => {
                        return (
                            <SwiperSlide className="swiper-slide" key={i}>
                                <ExperienceCard
                                    expressionImg={item.expressionImg}
                                    coverImg={item.coverImg}
                                    title={item.title}
                                    dated={item.dated}
                                    details={item.details}
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
}

export default ExperienceSlider;
