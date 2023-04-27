import React from "react";
import { Link } from "react-router-dom";


const UpcomingEventCard = (props) => {
  return (

    <div className="card__item">
      <Link href="#" className="card__link">
        <div className="card__thumb">
          <button className="card__fav">
            <span className="icon-heart"></span>
          </button>
          <img
            src={props.data.coverimg}
            alt="event name"
            className="card__img"
          />
        </div>
        <div className="card__info">
          <div className="card__row">
            {/* <!-- <div className="card__rating"><span className="icon-star"></span> 4.9 (123 reviews)</div> --> */}
            <div className="vibes">
              <img
                src={process.env.PUBLIC_URL + "/images/overwhelmed.svg"}
                alt="Overwhelmed"
                className="vibes__icon"
              />
              <span className="vibes__text">Overwhelmed</span>
            </div>
            <div className="card__date">{props.data.date}</div>
          </div>
          <h3 className="card__title">Surfing at leasure</h3>
          <div className="card__price">AED 1800 per person</div>
        </div>
      </Link>
    </div>

  );
};

export default UpcomingEventCard;
