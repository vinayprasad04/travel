import React, { useEffect, useState } from "react";
import EventBanner from "../../assets/img/Event-Banner.png";
import overwhelmed from "../../assets/img/overwhelmed.svg";
import appreciation from "../../assets/img/appreciation.svg";
import boredom from "../../assets/img/boredom.svg";
import dissappointed from "../../assets/img/disappointed.svg";
import anger from "../../assets/img/anger.svg";
import joy from "../../assets/img/joy.svg";

import axios from "axios";

function Cards(props) {

  const [data, setData] = useState([]);

  const emotion = [
    overwhelmed,
    joy,
    appreciation,
    anger,
    dissappointed,
    boredom,
  ];


  // Get all Data
  const getData = () => {
    axios
      .get("http://localhost:5000/getData")
      .then((res) => {
        // console.log(res.data.feedbackData);
        setData(res.data.feedbackData);
      })
      .catch((error) => {
        console.log(error);
      });
  };



  // Remove Data
  const removeData = () => {
    axios
      .get("http://localhost:5000/removeData")
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };


  // Add Data
  const addData = () => {
    axios
      .get("http://localhost:5000/addData")
      .then((res) => {
        console.log("addData", res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

//console.log("Main Data: ", data);

  useEffect(() => {
    getData();
    // removeData();
    // addData();
  }, []);

  return (
    <>
      {
      data.map((val, item) => {
        return (
          <li className="feedback__list--item" key={item}>
            <div className="feedback__list--image">
              <div className="card--image">
                <img src={EventBanner} alt="" />
              </div>

              <div className="card--text">
                <h4>{val.eventname}</h4>
                <p>{val.eventdate}</p>

                <div className="card--review">
                  <a>{val.eventreview} reviews</a>
                  <div className="icon">
                    <span className="icon-star"></span>
                    {props.handleCallback(val.eventrating)}
                  </div>
                </div>
              </div>
            </div>

            <div className="feedback__list--content">
              <div className="card--date"> {val.eventdate} </div>

              {val.emotions ? (
                <>
                  <h3 className="card--title">{val.eventtitle}</h3>
                  <div className="card--description">
                    {val.eventdescription}
                  </div>
                </>
              ) : (
                <>
                  <h3 className="card--subtitle">
                    Hey Charlie, you haven't added you feedback yet. Please
                    share your experience with us to serve you better next time.
                  </h3>
                </>
              )}
              <ul className="emotion__list">
                {val.emotions ? (
                  emotion.map((vl, index) => {
                    return (

                      <li className="emotion__list--item" key={index}>
                        <img src={vl} alt="" />
                      </li>
                    );
                  })
                ) : (
                  <button className="btn btn__black">
                    Add a review
                  </button>
                )}
              </ul>
            </div>
          </li>
        );
      })}
    </>
  );
}

export default Cards;

// Dummy Data :

// const cardDescription = [
//   {
//     date: "Nov 10-29,2022",
//     title: "Great experience!",
//     imageURL: EventBanner,
//     eventName: "Surfing at leasure",
//     description:
//       "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum",
//     emotion: [overwhelmed, appreciation, anger, dissappointed, boredom],
//     reviews: 123,
//     rating: 5.0,
//   },

//   {
//     date: "Nov 10-29,2022",
//     title: "Great experience!",
//     imageURL: EventBanner,
//     eventName: "Surfing at leasure",
//     description: false,
//     emotion: false,
//     reviews: 123,
//     rating: 5.0,
//   },

//   {
//     date: "Nov 10-29,2022",
//     title: "Great experience!",
//     imageURL: EventBanner,
//     eventName: "Surfing at leasure",
//     description:
//       "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum",
//     emotion: [overwhelmed, appreciation, anger, dissappointed, boredom],
//     reviews: 123,
//     rating: 5.0,
//   },

//   {
//     date: "Nov 10-29,2022",
//     title: "Great experience!",
//     imageURL: EventBanner,
//     eventName: "Surfing at leasure",
//     description:
//       "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum",
//     emotion: [overwhelmed, appreciation, anger, dissappointed, boredom],
//     reviews: 123,
//     rating: 5.0,
//   },
//   {
//     date: "Nov 10-29,2022",
//     title: "Great experience!",
//     imageURL: EventBanner,
//     eventName: "Surfing at leasure",
//     description:
//       "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum",
//     emotion: [overwhelmed, appreciation, anger, dissappointed, boredom],
//     reviews: 123,
//     rating: 5.0,
//   },
// ];

// ('Swimming game for below 18 year kids', 'Hey Charlie, you havent added you feedback yet. Please share your experience with us to serve you better next time!', 'Nov 17, 2022', '123', '5.0'
// 	  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.'
// , 'false'),

// ('Live comedy Performance in front of live audience', 'Thank you Unified Guests for this great experience!', 'Nov 17, 2022', '123', '5.0'
// 	  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.'
// , 'true'),
// ('Surfing at leasure', 'Love all the activities!', 'Nov 17, 2022', '123', '5.0'
// 	  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.'
// , 'true')
