import React from "react";
import EventBanner from "../../assets/img/Event-Banner.png";

import overwhelmed from "../../assets/img/overwhelmed.svg";
import appreciation from "../../assets/img/appreciation.svg";
// import spa_0 from "../../assets/img/spa_0.png";
import boredom from "../../assets/img/boredom.svg";
// import joy from "../../assets/img/joy.svg";
import dissappointed from "../../assets/img/disappointed.svg";
import anger from "../../assets/img/anger.svg";

// import holiday from "../../assets/img/holiday_0.png";
// import cuisine from "../../assets/img/cusine_0.png";

function Cards() {
  const cardDescription = [
    {
      date: "Nov 10-29,2022",
      title: "Great experience!",
      imageURL: EventBanner,
      eventName: "Surfing at leasure",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum",
      emotion: [overwhelmed, appreciation, anger, dissappointed, boredom],
      reviews: 123,
      rating: 5.0,
    },
    {
      date: "Nov 10-29,2022",
      title: "Great experience!",
      imageURL: EventBanner,
      eventName: "Surfing at leasure",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum",
      emotion: [overwhelmed, appreciation, anger, dissappointed, boredom],
      reviews: 123,
      rating: 5.0,
    },
    
    {
      date: "Nov 10-29,2022",
      title: "Great experience!",
      imageURL: EventBanner,
      eventName: "Surfing at leasure",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum",
      emotion: [overwhelmed, appreciation, anger, dissappointed, boredom],
      reviews: 123,
      rating: 5.0,
    },

    {
      date: "Nov 10-29,2022",
      title: "Great experience!",
      imageURL: EventBanner,
      eventName: "Surfing at leasure",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum",
      emotion: [overwhelmed, appreciation, anger, dissappointed, boredom],
      reviews: 123,
      rating: 5.0,
    },
    {
      date: "Nov 10-29,2022",
      title: "Great experience!",
      imageURL: EventBanner,
      eventName: "Surfing at leasure",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum",
      emotion: [overwhelmed, appreciation, anger, dissappointed, boredom],
      reviews: 123,
      rating: 5.0,
    },
  ];

  console.log("message ", cardDescription);
  return (
    <>
      {cardDescription.map((val, key) => {
        return (
          <li class="feedback__list--item" index={key}>
            <div class="feedback__list--image">
              <div class="card--image">
                <img src={val.imageURL} alt="" />
              </div>
              <div class="card--text">
                <h4>{val.title}</h4>
                <p>{val.title}</p>
                <div class="card--review">
                  <a href="#">{val.reviews} reviews</a>
                  <div class="icon">
                    <span class="icon-star"></span>
                    {val.rating}
                  </div>
                </div>
              </div>
            </div>
            <div class="feedback__list--content">
              <div class="card--date"> {val.date} </div>
              <h3 class="card--title">{val.title}</h3>
              <div class="card--description">{val.description}</div>
              <ul class="emotion__list">
                {val.emotion.map((vl) => {
                  return (
                    <li class="emotion__list--item">
                      {" "}
                      <img src={vl} alt=" " />
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
        );
      })}
    </>
  );
}

export default Cards;
