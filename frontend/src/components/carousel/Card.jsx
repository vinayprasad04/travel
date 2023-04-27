import React from "react";
//import coverImg from "../assets/img/spa_0.png";
import overwhel from "../../assets/img/overwhelmed.svg";

const Card = (props) => {
    //console.log(coverImg);
    return (
        <>
            
                <a
                    href="completed-event-details.html"
                    className="recSlider__link"
                >
                    <div className="slider__image--wrapper">
                        <img src={props.coverImg} alt="event title" />
                        <div className="weather">
                            {/* <div className="weather__icon">
                                        <img src="./assets/img/abstract.jpg" alt="Weather" />
                                    </div>
                                    <div className="weather__text">
                                        <h2>18&#176;<sup>C</sup></h2>
                                        <div className="weather__text--wrap">
                                            <span>29&#176;</span>
                                            <span>16&#176;</span>
                                        </div>
                                    </div> */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="97"
                                height="48"
                                viewBox="0 0 97 48"
                            >
                                <g
                                    id="Group_136"
                                    data-name="Group 136"
                                    transform="translate(-188 -415)"
                                >
                                    <g id="Group_134" data-name="Group 134">
                                        <circle
                                            id="Ellipse_8"
                                            data-name="Ellipse 8"
                                            cx="16"
                                            cy="16"
                                            r="16"
                                            transform="translate(193.007 416)"
                                            fill="#ffc368"
                                        />
                                        <path
                                            id="Icon_ionic-ios-cloud"
                                            data-name="Icon ionic-ios-cloud"
                                            d="M19.332,12.668A6.634,6.634,0,0,0,7.28,9.612a3.135,3.135,0,0,0-1.19-.234,3.276,3.276,0,0,0-3.158,3.246A4.32,4.32,0,0,0,0,16.723,4.159,4.159,0,0,0,4.02,20.9H18.629a4.162,4.162,0,0,0,.7-8.235Z"
                                            transform="translate(188 410.597)"
                                            fill="#fff"
                                        />
                                        <path
                                            id="Icon_ionic-ios-cloudy"
                                            data-name="Icon ionic-ios-cloudy"
                                            d="M10.7,6.75a5.4,5.4,0,0,0-5.292,5.416,4.5,4.5,0,0,0,.033.53,3.664,3.664,0,0,0-3.188,3.66A3.619,3.619,0,0,0,5.753,20H16.427a4.49,4.49,0,0,0,0-8.977c-.1,0-.2-.008-.3-.008s-.174,0-.253,0A5.231,5.231,0,0,0,10.7,6.75Z"
                                            transform="translate(205.757 428)"
                                            fill="#fff"
                                        />
                                    </g>
                                    <g id="Group_135" data-name="Group 135">
                                        <g
                                            id="Group_132"
                                            data-name="Group 132"
                                            transform="translate(-286 -66)"
                                        >
                                            <text
                                                id="o"
                                                transform="translate(548 496)"
                                                fill="#fff"
                                                font-size="7.583"
                                                font-family="Poppins-Regular, Poppins"
                                                letter-spacing="0.022em"
                                                baseline-shift="4.332900047302246"
                                            >
                                                <tspan x="0" y="0">
                                                    o
                                                </tspan>
                                            </text>
                                            <text
                                                id="C"
                                                transform="translate(555 497)"
                                                fill="#fff"
                                                font-size="12"
                                                font-family="Poppins-Regular, Poppins"
                                                letter-spacing="0.022em"
                                            >
                                                <tspan x="0" y="0">
                                                    C
                                                </tspan>
                                            </text>
                                        </g>
                                        <text
                                            id="_18"
                                            data-name="18"
                                            transform="translate(235 440)"
                                            fill="#fff"
                                            font-size="24"
                                            font-family="Poppins-Medium, Poppins"
                                            font-weight="500"
                                        >
                                            <tspan x="0" y="0">
                                                18
                                            </tspan>
                                        </text>
                                        <g
                                            id="Group_133"
                                            data-name="Group 133"
                                            transform="translate(-239 -84)"
                                        >
                                            <text
                                                id="_29_16"
                                                data-name="29    16"
                                                transform="translate(478 543)"
                                                fill="#fff"
                                                font-size="12"
                                                font-family="Poppins-Regular, Poppins"
                                                letter-spacing="0.022em"
                                            >
                                                <tspan x="0" y="0">
                                                    29 16
                                                </tspan>
                                            </text>
                                            <text
                                                id="o-2"
                                                data-name="o"
                                                transform="translate(494 541)"
                                                fill="#fff"
                                                font-size="7.583"
                                                font-family="Poppins-Regular, Poppins"
                                                letter-spacing="0.022em"
                                                baseline-shift="4.332900047302246"
                                            >
                                                <tspan x="0" y="0">
                                                    o
                                                </tspan>
                                            </text>
                                            <text
                                                id="o-3"
                                                data-name="o"
                                                transform="translate(519 541)"
                                                fill="#fff"
                                                font-size="7.583"
                                                font-family="Poppins-Regular, Poppins"
                                                letter-spacing="0.022em"
                                                baseline-shift="4.332900047302246"
                                            >
                                                <tspan x="0" y="0">
                                                    o
                                                </tspan>
                                            </text>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>

                    <div className="recSlider__info">
                        <h3 className="recSlider__info__title">
                            {props.title}
                        </h3>
                        <div className="recSlider__info__rating">
                            <div className="rating"></div>
                            <div className="review">
                                <span>5.0</span> (123 reviews)
                            </div>
                        </div>
                        <div className="recSlider__info__row">
                            <div className="recSlider__info__items recSlider__info__description">
                                {props.eventDetails}
                                <button className="read--more">
                                    read more
                                </button>
                            </div>
                        </div>
                        <div className="recSlider__info__row">
                            <div className="recSlider__info__items">
                                <span className="icon icon-calendar"></span>
                                {props.duration}
                            </div>
                        </div>
                        <div className="recSlider__info__row">
                            <div className="recSlider__info__items">
                                <span className="icon icon-location"></span>
                                {props.location}
                            </div>
                        </div>
                        <div className="recSlider__info__row">
                            <div className="recSlider__info__items">
                                <span className="icon icon-category"></span>
                                {props.category}
                            </div>
                        </div>
                        <div className="recSlider__info__row recSlider__footer">
                            <div className="recSlider__footer__item">
                                <div className="vibes">
                                    <img
                                        src={overwhel}
                                        alt="Overwhelmed"
                                        className="vibes__icon"
                                    />
                                    <span className="vibes__text">
                                        Overwhelmed{" "}
                                    </span>
                                </div>
                                <span className="status scheduled">
                                    Scheduled
                                </span>
                            </div>
                        </div>
                    </div>
                </a>

        </>
    );
};

export default Card;
