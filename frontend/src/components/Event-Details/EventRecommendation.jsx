import React, { Fragment } from "react";
import imgCard from "../../assets/img/trending1.jpg";
import emoji from "../../assets/img/overwhelmed.svg";

const EventRecommendation = () => {
  const cardData = [
    // dummy data
    {
      cardImage: imgCard,
      emoji: emoji,
      experience: "Overwhelmed",
      date: "Nov 10-29",
      event: "Surfing at leasure",
      cost: "AED 1800 per person",
    },
    {
      cardImage: imgCard,
      emoji: emoji,
      experience: "Overwhelmed",
      date: "Nov 10-29",
      event: "Surfing at leasure",
      cost: "AED 1800 per person",
    },
    {
      cardImage: imgCard,
      emoji: emoji,
      experience: "Overwhelmed",
      date: "Nov 10-29",
      event: "Surfing at leasure",
      cost: "AED 1800 per person",
    },
    {
      cardImage: imgCard,
      emoji: emoji,
      experience: "Overwhelmed",
      date: "Nov 10-29",
      event: "Surfing at leasure",
      cost: "AED 1800 per person",
    },
    {
      cardImage: imgCard,
      emoji: emoji,
      experience: "Overwhelmed",
      date: "Nov 10-29",
      event: "Surfing at leasure",
      cost: "AED 1800 per person",
    },
    {
      cardImage: imgCard,
      emoji: emoji,
      experience: "Overwhelmed",
      date: "Nov 10-29",
      event: "Surfing at leasure",
      cost: "AED 1800 per person",
    },
    {
      cardImage: imgCard,
      emoji: emoji,
      experience: "Overwhelmed",
      date: "Nov 10-29",
      event: "Surfing at leasure",
      cost: "AED 1800 per person",
    },
    {
      cardImage: imgCard,
      emoji: emoji,
      experience: "Overwhelmed",
      date: "Nov 10-29",
      event: "Surfing at leasure",
      cost: "AED 1800 per person",
    },
    {
      cardImage: imgCard,
      emoji: emoji,
      experience: "Overwhelmed",
      date: "Nov 10-29",
      event: "Surfing at leasure",
      cost: "AED 1800 per person",
    },
    {
      cardImage: imgCard,
      emoji: emoji,
      experience: "Overwhelmed",
      date: "Nov 10-29",
      event: "Surfing at leasure",
      cost: "AED 1800 per person",
    },
  ];

  return (
    <Fragment>
      {" "}
      {cardData &&
        cardData.map((item) => {
          return (
            <div className="card__item">
              <a href="#" className="card__link">
                <div className="card__thumb">
                  <button className="card__fav">
                    <span className="icon-heart"></span>
                  </button>
                  <img
                    src={item.cardImage}
                    alt="event name"
                    className="card__img"
                  />
                </div>
                <div className="card__info">
                  <div className="card__row">
                    {/* <!-- <div className="card__rating"><span className="icon-star"></span> 4.9 (123 reviews)</div> --> */}
                    <div className="vibes">
                      <img
                        src={item.emoji}
                        alt="Overwhelmed"
                        className="vibes__icon"
                      />
                      <span className="vibes__text">{item.experience}</span>
                    </div>
                    <div className="card__date">{item.date}</div>
                  </div>
                  <h3 className="card__title">{item.event}</h3>
                  <div className="card__price">{item.cost}</div>
                </div>
              </a>
            </div>
          );
        })}
    </Fragment>
  );
};

export default EventRecommendation;
