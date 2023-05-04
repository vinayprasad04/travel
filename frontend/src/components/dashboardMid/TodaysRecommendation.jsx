import React from "react";
import { Link } from "react-router-dom";

import cardImg from "../../assets/img/spa_0.png"
import overwhelmedImg from "../../assets/img/overwhelmed.svg";
import img1 from "../../assets/img/one.svg";
import img2 from "../../assets/img/two.svg";
import img3 from "../../assets/img/three.svg";
import img4 from "../../assets/img/four.svg";
import img5 from "../../assets/img/five.svg";


const TodaysRecommendation = (props) => {
    
    const rankImg = [img1, img2, img3, img4, img5];
    const { index } = props;
    
    const eventDate=new Date(props.data.start_date);
    const formattedDate=eventDate.toLocaleString("en-US", { month: "short" }) +" "+ eventDate.getDate();
    
    return (
        <div className="card__item">
            <Link to={`/event-details/${index}`} className="card__link">
                <div className="card__thumb">
                    <button className="card__fav">
                        <span className="icon-heart"></span>
                    </button>
                    <img
                        src={cardImg}
                        alt="event name"
                        className="card__img"
                    />
                    <span className="card__count">
                        <img src={rankImg[index ]} alt="Top ranking 1" />
                    </span>
                </div>
                <div className="card__info">
                    <div className="card__row">
                        <div className="vibes">
                            <img
                                src={overwhelmedImg}
                                alt="Overwhelmed"
                                className="vibes__icon"
                            />
                            <span className="vibes__text">Overwhelmed</span>
                        </div>
                        <div className="card__date">{formattedDate}</div>
                    </div>
                    <h3 className="card__title">{props.data.title}</h3>
                    <div className="card__price">
                        {props.data.price_adult} AED/person
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default TodaysRecommendation;
