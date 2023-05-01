import React, { Fragment, useState } from "react";
import { Rating } from "react-simple-star-rating";
import userPic from "../../assets/img/user1.png";
import { getUserReviews } from "../../store/dataStore";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const RatingCard = ({ reviewData }) => {
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

  console.log(reviewData);

  return (
    <Fragment>
      {ratingData &&
        reviewData?.[0]?.reviews.map((item) => {
          return (
            <div className="swiper-slide">
              <a href="#" className="recSlider__link">
                <div className="recSlider__profile">
                  <img
                    src=""
                    alt="event title"
                    className="recSlider__profile--image"
                  />
                  <div className="recSlider__profile--info">
                    <h4>{item?.user?.username}</h4>
                    <span>{item.dateofreview}</span>
                  </div>
                </div>
                <div className="recSlider__info">
                  <div className="recSlider__info__description">
                    {item.review}
                  </div>
                  <div className="recSlider__info__row">
                    <div className="recSlider__info__rating">
                      <div className="rating">
                        <Rating
                          initialValue={item.rating}
                          size={20}
                          readonly={true}
                        />
                      </div>
                      <div className="review">{item.rating}</div>
                    </div>
                  </div>
                </div>
                <button className="recSlider__button">Read more</button>
              </a>
            </div>
          );
        })}{" "}
    </Fragment>
  );
};

export default RatingCard;
