import React from "react";
import Card from "./Card";

// import coverImg from "../assets/img/spa_0.png";
// import overwhel from "../assets/img/overwhelmed.svg";


import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const Slider = (props) => {

    let dummy=["../assets/img/spa_0.png" , "../assets/img/holiday_0.png", "../assets/img/cusine_0.png", "../assets/img/spa_0.png", "../assets/img/holiday_0.png", "../assets/img/cusine_0.png"]


  return (
    <>
      <div class="recSlider recSlider--cardView">
        <h2 class="recSlider__title">Good morning Charlie!</h2>
        <div class="recSlider__subtitle">
          <p>
            Below listed are your itineraries, have a look to the timings and
            the location.
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
            {
                dummy.map((item)=>{
                    return <>
                        <SwiperSlide className="swiper-slide">
                            <Card coverImg={item} />
                        </SwiperSlide>
                    </>
                })
            }
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
