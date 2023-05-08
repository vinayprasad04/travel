import React, { useState } from "react";
import EventBanner from "../../assets/img/Event-Banner.png";
import overwhelmed from "../../assets/img/overwhelmed.svg";
import appreciation from "../../assets/img/appreciation.svg";
import boredom from "../../assets/img/boredom.svg";
import dissappointed from "../../assets/img/disappointed.svg";
import anger from "../../assets/img/anger.svg";
import joy from "../../assets/img/joy.svg";

import ModalReview from "../Add Review/ModalReview";

function Cards({ item, userData }) {
  const [modal, setModal] = useState(false);

  // console.log("USer Data", userData[0].name);

  console.log("Event Rating Data", item.eventrating);

  return (
    <>
      <li className="feedback__list--item" key={item}>
        <div className="feedback__list--image">
          <div className="card--image">
            <img src={EventBanner} alt="" />
          </div>

          <div className="card--text">
            <h4>{item.eventname}</h4>
            <p>{item.eventdate}</p>

            <div className="card--review">
              <a>{item.eventreview} reviews</a>
              <div className="icon">
                <span className="icon-star"></span>
                {item.eventrating}
              </div>
            </div>
          </div>
        </div>

        <div className="feedback__list--content">
          <div className="card--date"> {item.eventdate} </div>
          {item.emotions ? (
            <>
              <h3 className="card--title">{item.eventtitle}</h3>
              <div className="card--description">{item.eventdescription}</div>
            </>
          ) : (
            <>
              <h3 className="card--subtitle">
                Hey Punit, you haven't added you feedback yet. Please share your
                experience with us to serve you better next time.
              </h3>
            </>
          )}
          <ul className="emotion__list">
            {item.emotions ? (
              <>
                <li
                  className={
                    item.eventrating >= 5 && item.eventrating < 6
                      ? "emotion__list--item active"
                      : "emotion__list--item"
                  }
                >
                  <img src={overwhelmed} alt="" />
                </li>
                <li
                  className={
                    item.eventrating >= 4 && item.eventrating < 5
                      ? "emotion__list--item active"
                      : "emotion__list--item"
                  }
                >
                  <img src={joy} alt="" />
                </li>
                <li
                  className={
                    item.eventrating >= 3 && item.eventrating < 4
                      ? "emotion__list--item active"
                      : "emotion__list--item"
                  }
                >
                  <img src={appreciation} alt="" />
                </li>
                <li
                  className={
                    item.eventrating >= 2 && item.eventrating < 3
                      ? "emotion__list--item active"
                      : "emotion__list--item"
                  }
                >
                  <img src={boredom} alt="" />
                </li>
                <li
                  className={
                    item.eventrating >= 1 && item.eventrating < 2
                      ? "emotion__list--item active"
                      : "emotion__list--item"
                  }
                >
                  <img src={dissappointed} alt="" />
                </li>
                <li
                  className={
                    item.eventrating >= 0 && item.eventrating < 1
                      ? "emotion__list--item active"
                      : "emotion__list--item"
                  }
                >
                  <img src={anger} alt="" />
                </li>
              </>
            ) : (
              <button
                className="btn btn__black"
                onClick={() => {
                  setModal(true);
                }}
              >
                Add a review
              </button>
            )}
            {modal && <ModalReview/> }
          </ul>
        </div>
      </li>
    </>
  );
}

export default Cards;

/* <li className="emotion__list--item" key={index}>
<img
  src={vl}
  alt=""
/>
</li> */

// emotions
// emotion.map((vl, index) => {
//   console.log("vl" , vl);

//   console.log("Val.emotions", item.emotions); // true

//   const styleVibeOMeter = item.emotions ? "active" : " ";

//   return (
//     <>
//       <li className= {`emotion__list--item active ${styleVibeOMeter}` } key={index}>
//         <img
//           src={vl}
//           alt="emojis"
//         />
//       </li>
//     </>
//   );
// })
// )

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
//     item.eventrating: 5.0,
//   },

//   {
//     date: "Nov 10-29,2022",
//     title: "Great experience!",
//     imageURL: EventBanner,
//     eventName: "Surfing at leasure",
//     description: false,
//     emotion: false,
//     reviews: 123,
//     item.eventrating: 5.0,
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
//     item.eventrating: 5.0,
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
//     item.eventrating: 5.0,
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
//     item.eventrating: 5.0,
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
