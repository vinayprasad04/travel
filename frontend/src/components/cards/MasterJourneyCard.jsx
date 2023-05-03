import React from "react";
import eventImg from "../../assets/img/spa_0.png";
import { Link } from "react-router-dom";

const MasterJourneyCard = () => {
  return (
    <>
      <div className="card__item">
        <Link className="card__link">
          <div className="card__thumb">
            <img src={eventImg} alt="event name" className="card__img" />
          </div>
          <div className="card__info">
            <h3 className="card__title">Surfing at leisure</h3>
            <div className="card__price">3 guests attended this event</div>
            <div className="card__date">on Nov 17, 2022</div>
            <div className="card__row">
              <div className="card__rating">
                <span className="card__rating__txt">
                  <span className="card__rating__txt">
                    You rated this event
                  </span>
                </span>
                <span className="icon-star"></span>
                <span className="icon-star"></span>
                <span className="icon-star"></span>
                <span className="icon-star"></span>
                <span className="icon-star"></span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default MasterJourneyCard;
