import React from "react";
import Card from "./Card";

import "swiper/css/bundle";
import {Swiper} from "swiper/react";

const Slider = () => {
    

    return (
        <>
            <div class="recSlider recSlider--cardView">
                <h2 class="recSlider__title">Good morning Charlie!</h2>
                <div class="recSlider__subtitle">
                    <p>
                        Below listed are your itineraries, have a look to the
                        timings and the location.
                    </p>
                    <p>We wish you to enjoy the activities and the weather!</p>
                </div>
            
                <Swiper 
                    class="swiper tailored"
                    spaceBetween={30}
                    slidesPerView={"auto"}
                >
                    <div className="swiper-wrapper">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>

                    <div class="swiper-buttons">
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    </div>
                </Swiper>
            </div>
        </>
    );
};

export default Slider;
