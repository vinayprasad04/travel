import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/bundle";
import MidCard from "./MidCard";

function MidSlider() {
  const dummy = [
    {
      expressionImg: require("../../assets/img/disappointed.svg").default,
      coverImg: require("../../assets/img/Event-Banner.png"),
      title: "Indulge in the Finest Epicurean Cuisines",
      dated: "Nov 17, 2022",
      details:
        "Hi Charlie, we came to from our chef John that you didn't enjoyed the Epicurean cuisines yesterday. As a compensation we would like to offer you a free Italian cuisines as a goodwill gesture. Would you like to accept our request?",
    },
    {
      expressionImg: require("../../assets/img/disappointed.svg").default,
      coverImg: require("../../assets/img/Event-Banner.png"),
      title: "Indulge in the Finest Epicurean Cuisines",
      dated: "Nov 17, 2022",
      details:
        "Hi Charlie, we came to from our chef John that you didn't enjoyed the Epicurean cuisines yesterday. As a compensation we would like to offer you a free Italian cuisines as a goodwill gesture. Would you like to accept our request?",
    },
    {
      expressionImg: require("../../assets/img/disappointed.svg").default,
      coverImg: require("../../assets/img/Event-Banner.png"),
      title: "Indulge in the Finest Epicurean Cuisines",
      dated: "Nov 17, 2022",
      details:
        "Hi Charlie, we came to from our chef John that you didn't enjoyed the Epicurean cuisines yesterday. As a compensation we would like to offer you a free Italian cuisines as a goodwill gesture. Would you like to accept our request?",
    },
    {
      expressionImg: require("../../assets/img/disappointed.svg").default,
      coverImg: require("../../assets/img/Event-Banner.png"),
      title: "Indulge in the Finest Epicurean Cuisines",
      dated: "Nov 17, 2022",
      details:
        "Hi Charlie, we came to from our chef John that you didn't enjoyed the Epicurean cuisines yesterday. As a compensation we would like to offer you a free Italian cuisines as a goodwill gesture. Would you like to accept our request?",
    },
    {
      expressionImg: require("../../assets/img/disappointed.svg").default,
      coverImg: require("../../assets/img/Event-Banner.png"),
      title: "Indulge in the Finest Epicurean Cuisines",
      dated: "Nov 17, 2022",
      details:
        "Hi Charlie, we came to from our chef John that you didn't enjoyed the Epicurean cuisines yesterday. As a compensation we would like to offer you a free Italian cuisines as a goodwill gesture. Would you like to accept our request?",
    },
    {
      expressionImg: require("../../assets/img/disappointed.svg").default,
      coverImg: require("../../assets/img/Event-Banner.png"),
      title: "Indulge in the Finest Epicurean Cuisines",
      dated: "Nov 17, 2022",
      details:
        "Hi Charlie, we came to from our chef John that you didn't enjoyed the Epicurean cuisines yesterday. As a compensation we would like to offer you a free Italian cuisines as a goodwill gesture. Would you like to accept our request?",
    },
  ];

  return (
    <>
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
            {dummy.map((item, index) => {
              return (
                <SwiperSlide className="swiper-slide" key={index}>
                  <MidCard
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
    </>
  );
}

export default MidSlider;
