import React, { Fragment } from "react";
import { Rating } from "react-simple-star-rating";
import userPic from "../../assets/img/user1.png";
import { Link } from "react-router-dom";

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
            <div className="swiper-slide">
              <Link to="/" className="recSlider__link">
                <div className="recSlider__profile">
                  <img
                    src={item.userPic}
                    alt="event title"
                    className="recSlider__profile--image"
                  />
                  <div className="recSlider__profile--info">
                    <h4>{item.userName}</h4>
                    <span>{item.date}</span>
                  </div>
                </div>
                <div className="recSlider__info">
                  <div className="recSlider__info__description">
                    {item.ratingDescription}
                  </div>
                  <div className="recSlider__info__row">
                    <div className="recSlider__info__rating">
                      <div className="rating">
                        <Rating
                          initialValue={item.starValue}
                          size={20}
                          readonly={true}
                        />
                      </div>
                      <div className="review">{item.rating}</div>
                    </div>
                  </div>
                </div>
                <button className="recSlider__button">Read more</button>
              </Link>
            </div>
          );
        })}{" "}
    </Fragment>
  );
};

export default RatingCard;
