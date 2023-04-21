import React from "react";

import cardimg from "../assets/img/disappointed.svg";
import overwhelImg from "../assets/img/overwhelmed.svg";
import joy from "../assets/img/joy.svg";
import anger from "../assets/img/anger.svg";
import appri from "../assets/img/appreciation.svg";
import dummyimg from "../assets/img/Event-Banner.png";


import {Swiper, SwiperSlide} from "swiper/react";


function MidSlider() {




    return (
        <>
            <div className="recSlider recSlider--cardView recSlider--cardView-fullWidth">
                <h2 className="recSlider__title">
                    Charlie, hope we understand you better
                </h2>
                <Swiper 
                    className="swiper tailored"
                    slidesPerView={"auto"}
                    spaceBetween={30}
                >
                    <div className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide">
                            <a href="#" className="recSlider__link">
                                <div className="slider__image--wrapper">
                                    <img
                                        src={dummyimg}
                                        alt="event title"
                                    />
                                </div>

                                <div className="recSlider__info">
                                    <h3 className="recSlider__info__title">
                                        Indulge in the Finest Epicurean Cuisines
                                    </h3>
                                    <div className="recSlider__info__row">
                                        <div className="recSlider__info__items">
                                            on Nov 17, 2022
                                        </div>
                                    </div>
                                    <div className="recSlider__info__row">
                                        <div className="recSlider__info__items recSlider__info__description">
                                            Hi Charlie, we came to from our chef
                                            John that you didn't enjoyed the
                                            Epicurean cuisines yesterday. As a
                                            compensation we would like to offer
                                            you a free Italian cuisines as a
                                            goodwill gesture. Would you like to
                                            accept our request?
                                        </div>
                                    </div>
                                    <div className="recSlider__info__row">
                                        <button className="btn btn__black">
                                            Yes, I accept
                                        </button>
                                        <button className="btn btn__link">
                                            No, thanks
                                        </button>
                                    </div>
                                </div>

                                <div className="recSlider__emotion">
                                    <img src={cardimg} alt="" />
                                </div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <a href="#" className="recSlider__link">
                                <div className="slider__image--wrapper">
                                    <img
                                        src={dummyimg}
                                        alt="event title"
                                    />
                                </div>

                                <div className="recSlider__info">
                                    <h3 className="recSlider__info__title">
                                        Indulge in the Finest Epicurean Cuisines
                                    </h3>
                                    <div className="recSlider__info__row">
                                        <div className="recSlider__info__items">
                                            on Nov 17, 2022
                                        </div>
                                    </div>
                                    <div className="recSlider__info__row">
                                        <div className="recSlider__info__items recSlider__info__description">
                                            Hi Charlie, we came to from our chef
                                            John that you didn't enjoyed the
                                            Epicurean cuisines yesterday. As a
                                            compensation we would like to offer
                                            you a free Italian cuisines as a
                                            goodwill gesture. Would you like to
                                            accept our request?
                                        </div>
                                    </div>
                                    <div className="recSlider__info__row">
                                        <button className="btn btn__black">
                                            Yes, I accept
                                        </button>
                                        <button className="btn btn__link">
                                            No, thanks
                                        </button>
                                    </div>
                                </div>

                                <div className="recSlider__emotion">
                                    <img src={overwhelImg} alt="" />
                                </div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <a href="#" className="recSlider__link">
                                <div className="slider__image--wrapper">
                                    <img
                                        src={dummyimg}
                                        alt="event title"
                                    />
                                </div>

                                <div className="recSlider__info">
                                    <h3 className="recSlider__info__title">
                                        Indulge in the Finest Epicurean Cuisines
                                    </h3>
                                    <div className="recSlider__info__row">
                                        <div className="recSlider__info__items">
                                            on Nov 17, 2022
                                        </div>
                                    </div>
                                    <div className="recSlider__info__row">
                                        <div className="recSlider__info__items recSlider__info__description">
                                            Hi Charlie, we came to from our chef
                                            John that you didn't enjoyed the
                                            Epicurean cuisines yesterday. As a
                                            compensation we would like to offer
                                            you a free Italian cuisines as a
                                            goodwill gesture. Would you like to
                                            accept our request?
                                        </div>
                                    </div>
                                    <div className="recSlider__info__row">
                                        <button className="btn btn__black">
                                            Yes, I accept
                                        </button>
                                        <button className="btn btn__link">
                                            No, thanks
                                        </button>
                                    </div>
                                </div>

                                <div className="recSlider__emotion">
                                    <img src={joy} alt="" />
                                </div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <a href="#" className="recSlider__link">
                                <div className="slider__image--wrapper">
                                    <img
                                        src={dummyimg}
                                        alt="event title"
                                    />
                                </div>

                                <div className="recSlider__info">
                                    <h3 className="recSlider__info__title">
                                        Indulge in the Finest Epicurean Cuisines
                                    </h3>
                                    <div className="recSlider__info__row">
                                        <div className="recSlider__info__items">
                                            on Nov 17, 2022
                                        </div>
                                    </div>
                                    <div className="recSlider__info__row">
                                        <div className="recSlider__info__items recSlider__info__description">
                                            Hi Charlie, we came to from our chef
                                            John that you didn't enjoyed the
                                            Epicurean cuisines yesterday. As a
                                            compensation we would like to offer
                                            you a free Italian cuisines as a
                                            goodwill gesture. Would you like to
                                            accept our request?
                                        </div>
                                    </div>
                                    <div className="recSlider__info__row">
                                        <button className="btn btn__black">
                                            Yes, I accept
                                        </button>
                                        <button className="btn btn__link">
                                            No, thanks
                                        </button>
                                    </div>
                                </div>

                                <div className="recSlider__emotion">
                                    <img src={anger} alt="" />
                                </div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <a href="#" className="recSlider__link">
                                <div className="slider__image--wrapper">
                                    <img
                                        src={dummyimg}
                                        alt="event title"
                                    />
                                </div>

                                <div className="recSlider__info">
                                    <h3 className="recSlider__info__title">
                                        Indulge in the Finest Epicurean Cuisines
                                    </h3>
                                    <div className="recSlider__info__row">
                                        <div className="recSlider__info__items">
                                            on Nov 17, 2022
                                        </div>
                                    </div>
                                    <div className="recSlider__info__row">
                                        <div className="recSlider__info__items recSlider__info__description">
                                            Hi Charlie, we came to from our chef
                                            John that you didn't enjoyed the
                                            Epicurean cuisines yesterday. As a
                                            compensation we would like to offer
                                            you a free Italian cuisines as a
                                            goodwill gesture. Would you like to
                                            accept our request?
                                        </div>
                                    </div>
                                    <div className="recSlider__info__row">
                                        <button className="btn btn__black">
                                            Yes, I accept
                                        </button>
                                        <button className="btn btn__link">
                                            No, thanks
                                        </button>
                                    </div>
                                </div>

                                <div className="recSlider__emotion">
                                    <img src={appri} alt="" />
                                </div>
                            </a>
                        </SwiperSlide>
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
