import React, { Fragment } from "react";
import imgCard from "../../assets/img/Image119.jpg";
import emoji from "../../assets/img/overwhelmed.svg";

const EventRecommendation = ({
  eventRecommendationReviews,
  scheduledDataRecommendation,
}) => {
  let eventRecommendedReviewsData = [];

  eventRecommendationReviews?.map((item) => {
    let sum = 0;
    const reviewLength = item?.reviews.length;
    item.reviews.map((e) => {
      sum += e.rating;
    });

    if (
      Math.floor(sum / reviewLength) === 5 ||
      Math.floor(sum / reviewLength) === 4
    ) {
      eventRecommendedReviewsData.push(sum / reviewLength);
    }
  });

  const sortedArray = eventRecommendedReviewsData.sort().reverse();

  let eventsArray = [];

  eventRecommendationReviews?.map((item, i) => {
    scheduledDataRecommendation?.map((element) => {
      for (let i = 0; i < sortedArray.length; i++) {
        if (parseInt(sortedArray[i]) === element.eventrating) {
          eventsArray.push(element);
          break;
        }
      }
    });
  });

  const uniq = [...new Set(eventsArray)];

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
      {uniq &&
        uniq.map((item) => {
          return (
            <div className="card__item">
              <a href="#" className="card__link">
                <div className="card__thumb">
                  <button className="card__fav">
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
