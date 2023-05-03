import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/bundle";
import MidCard from "../cards/ExperianceCard";
import { useSelector } from "react-redux";
import { ExperianceData } from "../../DummyText/index.js";

function ExperianceCardSlider() {
  const { user } = useSelector((state) => state.users);

  return (
    <>
      <div className="recSlider recSlider--cardView recSlider--cardView-fullWidth">
        <h2 className="recSlider__title">
          {user?.data.name}, hope we understand you better
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
            {ExperianceData?.map((item, i) => {
              return (
                <SwiperSlide className="swiper-slide" key={i}>
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

export default ExperianceCardSlider;
