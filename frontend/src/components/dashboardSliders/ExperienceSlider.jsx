import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/bundle";

import expressionImg from "../../assets/img/disappointed.svg";
import ExperienceCard from "./ExperienceCard";
import cardImg from "../../assets/img/Event-Banner.png"

import {experienceData} from "../../constant";

function ExperienceSlider() {

    // const [cardData, setCardData] = useState([]);

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
                                    expressionImg={expressionImg}
                                    coverImg={cardImg}
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
