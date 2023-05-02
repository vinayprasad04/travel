import React, { useEffect, useState } from "react";
import EventBanner from "../../assets/img/Event-Banner.png";
import overwhelmed from "../../assets/img/overwhelmed.svg";
import appreciation from "../../assets/img/appreciation.svg";
import boredom from "../../assets/img/boredom.svg";
import dissappointed from "../../assets/img/disappointed.svg";
import anger from "../../assets/img/anger.svg";

import axios from "axios";

function Cards() {
  const [emoji, setEmoji] = useState(false);
  const [data, setData] = useState([]);

  const emotion = [overwhelmed, appreciation, anger, dissappointed, boredom];

  const emojiHandler = (i) => {
    alert(i + 1);
    setEmoji(true);
    setEmoji(false);
  };

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

  const removeData = ()=>{
       axios.get("http://localhost:5000/removeData").then((res)=>{  
       }).catch((err)=>{
        console.log(err);
       })
  }


  useEffect(() => {
    getData();
    removeData();
  }, []);

  console.log(data);

  return (
    <>
      {data.map((val, item) => {
        return (
          <li className="feedback__list--item" key={item}>
            <div className="feedback__list--image">
              <div className="card--image">
                <img src={val.imageURL} alt="" />
              </div>
              <div className="card--text">
                <h4>{val.eventname}</h4>
                <p>{val.eventtitle}</p>

                <div className="card--review">
                  <a>{val.reviews} reviews</a>

                  <div className="icon">
                    <span className="icon-star"></span>
                    {val.rating} 
                  </div>
                </div>
              </div>
            </div>

            <div className="feedback__list--content">
              <div className="card--date"> {val.eventdate} </div>
              <h3 className="card--title">{val.eventtitle}</h3>
              {val.emotion ? (
                <div className="card--description">{val.eventdescription}</div>
              ) : (
                <h3 className="card--subtitle">
                  Hey Charlie, you haven't added you feedback yet. Please share
                  your experience with us to serve you better next time.
                </h3>
              )}

              <ul className="emotion__list">
                {val.emotion ? (
                  val.emotion.map((vl, index) => {
                    return !emoji ? (
                      <li className="emotion__list--item" key={index}>
                        <img
                          src={vl}
                          alt=""
                          onClick={() => emojiHandler(index)}
                        />
                      </li>
                    ) : (
                      ""
                    );

                    // <li class="emotion__list--item" key={index}>

                    //   <img src={vl} alt="" onClick={()=> emojiHandler(index) } />
                    // </li>
                  })
                ) : (
                  <button className="btn btn__black">Add a review</button>
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
