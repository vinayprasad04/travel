import React from "react";
import EventBanner from "../../assets/img/Event-Banner.png";
import overwhelmed from "../../assets/img/overwhelmed.svg";
import appreciation from "../../assets/img/appreciation.svg";
import boredom from "../../assets/img/boredom.svg";
import dissappointed from "../../assets/img/disappointed.svg";
import anger from "../../assets/img/anger.svg";


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
      description: false,
      emotion: false,
      reviews: 123,
      rating: 5.0
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
      rating: 5.0
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
      rating: 5.0
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


  const getData = () => {
    fetch('http://localhost:5000/getData').then((res) => {
      if(res.status === 200) {
        res.json()
      }
    })
  }


  return (
    <>
      {
      cardDescription.map((val, key) => {
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
                  <a href={"#"}>{val.reviews} reviews</a>
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
              {val.emotion ? (
                <div class="card--description">{val.description}</div>
              ) : (
                <h3 class="card--subtitle">
                  Hey Charlie, you haven't added you feedback yet. Please share
                  your experience with us to serve you better next time.
                </h3>
              )}

              {/* <div class="card--description">{val.description}</div> */}
              <ul class="emotion__list">
                {val.emotion ? (
                  val.emotion.map((vl, key) => {
                    return (
                      <li class="emotion__list--item" index={key}>
                        <img src={vl} alt=" " />
                      </li>
                    );
                  })
                ) : (
                  <button class="btn btn__black">Add a review</button>
                )}
              </ul>
            </div>
          </li>
        );
      })
      }
    </>
  );
}

export default Cards;
