import React, { Fragment, useState } from "react";
import useFetch from "../../hooks/useFetch";
import imgCard from "../../assets/img/Image119.jpg";
import emoji from "../../assets/img/overwhelmed.svg";

const EventRecommendation = ({ id }) => {
  const recommendations = useFetch(
    `http://localhost:8080/api/user-reviews/recommendation/${id}`
  );

  const [favourites, setFavourites] = useState([]);
  const [toggleFavourite, setToggleFavourite] = useState(false);

  const recommended = recommendations?.[0]?.data;

  const handeFavourite = (e, index) => {
    e.preventDefault();

    setToggleFavourite(!toggleFavourite);
    console.log(toggleFavourite, "aaaa");

    if (!toggleFavourite && favourites.length > 0) {
      console.log("kl");
      setFavourites((prev) => {
        return [favourites.pop()];
      });
    } else {
      setFavourites((prev) => {
        console.log("pri");
        return [...prev, recommended[index]];
      });
    }
  };

  console.log("fav", favourites);
  // const cardData = [
  //   // dummy data
  //   {
  //     cardImage: imgCard,
  //     emoji: emoji,
  //     experience: "Overwhelmed",
  //     date: "Nov 10-29",
  //     event: "Surfing at leasure",
  //     cost: "AED 1800 per person",
  //   },
  //   {
  //     cardImage: imgCard,
  //     emoji: emoji,
  //     experience: "Overwhelmed",
  //     date: "Nov 10-29",
  //     event: "Surfing at leasure",
  //     cost: "AED 1800 per person",
  //   },
  //   {
  //     cardImage: imgCard,
  //     emoji: emoji,
  //     experience: "Overwhelmed",
  //     date: "Nov 10-29",
  //     event: "Surfing at leasure",
  //     cost: "AED 1800 per person",
  //   },
  //   {
  //     cardImage: imgCard,
  //     emoji: emoji,
  //     experience: "Overwhelmed",
  //     date: "Nov 10-29",
  //     event: "Surfing at leasure",
  //     cost: "AED 1800 per person",
  //   },
  //   {
  //     cardImage: imgCard,
  //     emoji: emoji,
  //     experience: "Overwhelmed",
  //     date: "Nov 10-29",
  //     event: "Surfing at leasure",
  //     cost: "AED 1800 per person",
  //   },
  //   {
  //     cardImage: imgCard,
  //     emoji: emoji,
  //     experience: "Overwhelmed",
  //     date: "Nov 10-29",
  //     event: "Surfing at leasure",
  //     cost: "AED 1800 per person",
  //   },
  //   {
  //     cardImage: imgCard,
  //     emoji: emoji,
  //     experience: "Overwhelmed",
  //     date: "Nov 10-29",
  //     event: "Surfing at leasure",
  //     cost: "AED 1800 per person",
  //   },
  //   {
  //     cardImage: imgCard,
  //     emoji: emoji,
  //     experience: "Overwhelmed",
  //     date: "Nov 10-29",
  //     event: "Surfing at leasure",
  //     cost: "AED 1800 per person",
  //   },
  //   {
  //     cardImage: imgCard,
  //     emoji: emoji,
  //     experience: "Overwhelmed",
  //     date: "Nov 10-29",
  //     event: "Surfing at leasure",
  //     cost: "AED 1800 per person",
  //   },
  //   {
  //     cardImage: imgCard,
  //     emoji: emoji,
  //     experience: "Overwhelmed",
  //     date: "Nov 10-29",
  //     event: "Surfing at leasure",
  //     cost: "AED 1800 per person",
  //   },
  // ];

  return (
    <Fragment>
      {" "}
      {recommended &&
        recommended.map((item, index) => {
          return (
            <div className="card__item">
              <a href="#" className="card__link">
                <div className="card__thumb">
                  <button
                    key={index}
                    className="card__fav"
                    onClick={(e) => {
                      handeFavourite(e, index);
                    }}
                  >
                    <span className="icon-heart"></span>
                  </button>
                  <img src={imgCard} alt="event name" className="card__img" />
                </div>
                <div className="card__info">
                  <div className="card__row">
                    {/* <!-- <div className="card__rating"><span className="icon-star"></span> 4.9 (123 reviews)</div> --> */}
                    <div className="vibes">
                      <img
                        src={require(`../../assets/img/${item.srcemoji}.svg`)}
                        alt="Overwhelmed"
                        className="vibes__icon"
                      />
                      <span className="vibes__text">{item.srcemoji}</span>
                    </div>
                    <div className="card__date">
                      {item.scheduledevents[0].scheduleddate}
                    </div>
                  </div>
                  <h3 className="card__title">{item.eventname}</h3>
                  <div className="card__price">{item.cost} per person</div>
                </div>
              </a>
            </div>
          );
        })}
    </Fragment>
  );
};

export default EventRecommendation;
