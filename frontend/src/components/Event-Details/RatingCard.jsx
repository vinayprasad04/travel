import React, { Fragment, useState } from "react";
import { Rating } from "react-simple-star-rating";
import userPic from "../../assets/img/user1.png";

const RatingCard = () => {
  const ratingData = [
    // dummy data
    {
      userPic: userPic,
      userName: "Anastasia",
      date: "Nov 2022",
      ratingDescription: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
      sed diam nonumy eirmod tempor invidunt ut labore et dolore
      magna aliquyam erat, sed diam voluptua. At vero eos et
      accusam et justo...`,
      rating: "5.0",
      starValue: 5.0,
    },
    {
      userPic: userPic,
      userName: "Anastasia",
      date: "Nov 2022",
      ratingDescription: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
      sed diam nonumy eirmod tempor invidunt ut labore et dolore
      magna aliquyam erat, sed diam voluptua. At vero eos et
      accusam et justo...`,
      rating: "5.0",
      starValue: 5.0,
    },
    {
      userPic: userPic,
      userName: "Anastasia",
      date: "Nov 2022",
      ratingDescription: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
      sed diam nonumy eirmod tempor invidunt ut labore et dolore
      magna aliquyam erat, sed diam voluptua. At vero eos et
      accusam et justo...`,
      rating: "5.0",
      starValue: 5.0,
    },
    {
      userPic: userPic,
      userName: "Anastasia",
      date: "Nov 2022",
      ratingDescription: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
      sed diam nonumy eirmod tempor invidunt ut labore et dolore
      magna aliquyam erat, sed diam voluptua. At vero eos et
      accusam et justo...`,
      rating: "5.0",
      starValue: 5.0,
    },
    {
      userPic: userPic,
      userName: "Anastasia",
      date: "Nov 2022",
      ratingDescription: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
      sed diam nonumy eirmod tempor invidunt ut labore et dolore
      magna aliquyam erat, sed diam voluptua. At vero eos et
      accusam et justo...`,
      rating: "5.0",
      starValue: 5.0,
    },
    {
      userPic: userPic,
      userName: "Anastasia",
      date: "Nov 2022",
      ratingDescription: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
      sed diam nonumy eirmod tempor invidunt ut labore et dolore
      magna aliquyam erat, sed diam voluptua. At vero eos et
      accusam et justo...`,
      rating: "5.0",
      starValue: 5.0,
    },
  ];

  return (
    <Fragment>
      {ratingData &&
        ratingData.map((item) => {
          return (
            <div class="swiper-slide">
              <a href="#" class="recSlider__link">
                <div class="recSlider__profile">
                  <img
                    src={item.userPic}
                    alt="event title"
                    class="recSlider__profile--image"
                  />
                  <div class="recSlider__profile--info">
                    <h4>{item.userName}</h4>
                    <span>{item.date}</span>
                  </div>
                </div>
                <div class="recSlider__info">
                  <div class="recSlider__info__description">
                    {item.ratingDescription}
                  </div>
                  <div class="recSlider__info__row">
                    <div class="recSlider__info__rating">
                      <div class="rating">
                        <Rating
                          initialValue={item.starValue}
                          size={20}
                          readonly={true}
                        />
                      </div>
                      <div class="review">{item.rating}</div>
                    </div>
                  </div>
                </div>
                <button class="recSlider__button">Read more</button>
              </a>
            </div>
          );
        })}{" "}
    </Fragment>
  );
};

export default RatingCard;
