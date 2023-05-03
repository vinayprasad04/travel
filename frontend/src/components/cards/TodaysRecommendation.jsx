import React from "react";
import "../../assets/scss/_dashboard.scss";
import img from "../../assets/img/spa_0.png";
import imgSvg from "../../assets/img/one.svg";
import overwhelmedImg from "../../assets/img/overwhelmed.svg";
import { Link } from "react-router-dom";

const TodaysRecommendation = ({ data, id }) => {
  return (
    <>
      <div className="card__item">
        <Link to={`/event-details/${id}`} className="card__link">
          <div className="card__thumb">
            <button className="card__fav">
              <span className="icon-heart"></span>
            </button>
            <img src={img} alt="event name" className="card__img" />
            <span className="card__count">
              <img src={imgSvg} alt="Top ranking 1" />
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
              <div className="card__date">{data?.event_date}</div>
            </div>
            <h3 className="card__title">{data?.title}</h3>
            <div className="card__price">{data?.price} AED/person</div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default TodaysRecommendation;
