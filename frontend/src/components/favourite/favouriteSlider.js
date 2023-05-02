import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import overwhelmed from "../../assets/img/overwhelmed.svg";
import eventBanner from "../../assets/img/Event-Banner.png";

const FavouriteSlider = () => {
  return (
    <div>
      <div className="recSlider">
        <h2 className="trending__title">
          Charlie, we have find some recommendation for you
        </h2>
        <div className="swiper tailored">
          <div className="swiper-wrapper">
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
              <SwiperSlide>
                <div className="swiper-slide">
                  <Link to="#" className="recSlider__link">
                    <img src={eventBanner} alt="event title" />
                    <div className="recSlider__info">
                      <h3 className="recSlider__info__title">
                        Explore the deep sea
                      </h3>
                      <div className="recSlider__info__date">
                        From Nov 10 to 29, 2022
                      </div>
                      <div className="recSlider__info__row">
                        <div className="recSlider__info__price">
                          AED 1800 <span>per person</span>
                        </div>
                        <div className="recSlider__info__rating">
                          {/* <!-- <div className="rating"></div>
                                <div className="review">5.0 (123 reviews)</div> --> */}
                          <div className="vibes">
                            <img
                              src={overwhelmed}
                              alt="Overwhelmed"
                              className="vibes__icon"
                            />
                            <span className="vibes__text">Overwhelmed</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <Link to="#" className="recSlider__link">
                    <img src={eventBanner} alt="event title" />
                    <div className="recSlider__info">
                      <h3 className="recSlider__info__title">
                        Swimming game for below 18 year kids
                      </h3>
                      <div className="recSlider__info__date">
                        From Nov 10 to 29, 2022
                      </div>
                      <div className="recSlider__info__row">
                        <div className="recSlider__info__price">
                          AED 1800 <span>per person</span>
                        </div>
                        <div className="recSlider__info__rating">
                          {/* <!-- <div className="rating"></div>
                                <div className="review">5.0 (123 reviews)</div> --> */}
                          <div className="vibes">
                            <img
                              src={overwhelmed}
                              alt="Overwhelmed"
                              className="vibes__icon"
                            />
                            <span className="vibes__text">Overwhelmed</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <Link to="#" className="recSlider__link">
                    <img src={eventBanner} alt="event title" />
                    <div className="recSlider__info">
                      <h3 className="recSlider__info__title">
                        Explore the deep sea
                      </h3>
                      <div className="recSlider__info__date">
                        From Nov 10 to 29, 2022
                      </div>
                      <div className="recSlider__info__row">
                        <div className="recSlider__info__price">
                          AED 1800 <span>per person</span>
                        </div>
                        <div className="recSlider__info__rating">
                          {/* <!-- <div className="rating"></div>
                                <div className="review">5.0 (123 reviews)</div> --> */}
                          <div className="vibes">
                            <img
                              src={overwhelmed}
                              alt="Overwhelmed"
                              className="vibes__icon"
                            />
                            <span className="vibes__text">Overwhelmed</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <Link to="#" className="recSlider__link">
                    <img src={eventBanner} alt="event title" />
                    <div className="recSlider__info">
                      <h3 className="recSlider__info__title">
                        Swimming game for below 18 year kids
                      </h3>
                      <div className="recSlider__info__date">
                        From Nov 10 to 29, 2022
                      </div>
                      <div className="recSlider__info__row">
                        <div className="recSlider__info__price">
                          AED 1800 <span>per person</span>
                        </div>
                        <div className="recSlider__info__rating">
                          {/* <!-- <div className="rating"></div>
                                <div className="review">5.0 (123 reviews)</div> --> */}
                          <div className="vibes">
                            <img
                              src={overwhelmed}
                              alt="Overwhelmed"
                              className="vibes__icon"
                            />
                            <span className="vibes__text">Overwhelmed</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="swiper-buttons">
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavouriteSlider;
