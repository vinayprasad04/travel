import React from "react";
import "../../assets/scss/_dashboard.scss";
import imgSvg from "../../assets/img/one.svg";
import overwhelmedImg from "../../assets/img/overwhelmed.svg";

const TodaysRecommendation = ({ data, i }) => {
  console.log(data);
  return (
    <>
      <div class="card__item">
        <a href="#" class="card__link">
          <div class="card__thumb">
            <button class="card__fav">
              <span class="icon-heart"></span>
            </button>
            <img
              src={`https://cdn.firsttry.live/${data.images[0].url}`}
              alt="event name"
              class="card__img"
            />
            <span
              class="card__count"
              style={{
                fontSize: "10rem",
                textBorder: "1px solid white",
                color: "rgba(255,255,255,0.8",
                fontWeight: "bolder",
              }}
            >
              {i + 1}
            </span>
          </div>
          <div class="card__info">
            <div class="card__row">
              <div class="vibes">
                <img
                  src={overwhelmedImg}
                  alt="Overwhelmed"
                  class="vibes__icon"
                />
                <span class="vibes__text">Overwhelmed</span>
              </div>
              <div class="card__date">{}</div>
            </div>
            <h3 class="card__title">{data.title}</h3>
            <div class="card__price">{2000} AED/person</div>
          </div>
        </a>
      </div>
    </>
  );
};

export default TodaysRecommendation;
