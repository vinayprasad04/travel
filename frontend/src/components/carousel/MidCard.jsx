import React from "react";

//import cardimg from "../../assets/img/disappointed.svg";
// import overwhelImg from "../assets/img/overwhelmed.svg";
// import joy from "../assets/img/joy.svg";
// import anger from "../assets/img/anger.svg";
// import appri from "../assets/img/appreciation.svg";
//import dummyimg from "../../assets/img/Event-Banner.png";

const MidCard = (props) => {
    return (
        <>
            <a href="#" className="recSlider__link">
                <div className="slider__image--wrapper">
                    <img src={props.coverImg} alt="event title" />
                </div>

                <div className="recSlider__info">
                    <h3 className="recSlider__info__title">{props.title}</h3>
                    <div className="recSlider__info__row">
                        <div className="recSlider__info__items">
                            {props.dated}
                        </div>
                    </div>
                    <div className="recSlider__info__row">
                        <div className="recSlider__info__items recSlider__info__description">
                            {props.details}
                        </div>
                    </div>
                    <div className="recSlider__info__row">
                        <button className="btn btn__black">
                            Yes, I accept
                        </button>
                        <button className="btn btn__link">No, thanks</button>
                    </div>
                </div>

                <div className="recSlider__emotion">
                    <img src={props.expressionImg} alt="" />
                </div>
            </a>
        </>
    );
};

export default MidCard;
