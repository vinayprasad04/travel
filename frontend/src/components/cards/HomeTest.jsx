import React from "react";
// import Card3 from "../components/cards/Card3";
// import Card2 from "../components/cards/Card2";
import TodaysRecommendation from "./TodaysRecommendation";
import MasterJourney from "./MasterJourney";
import mapImg from "../../assets/img/map.jpg";
import eventImage from "../../assets/img/spa_0.png";
import eventImageSvg from "../../assets/img/one.svg";
import eventOverwhelmedImg from "../../assets/img/overwhelmed.svg";
const HomeTest = () => {
  const recommendationObj = [
    {
      id: 1,
      eventImage: eventImage,
      eventImageSvg: eventImageSvg,
      eventOverwhelmedImg: eventOverwhelmedImg,
      date: "Nov 291",
      title: "Surfing at leasure",
      price: 11000,
    },
    {
      id: 1,
      eventImage: eventImage,
      eventImageSvg: eventImageSvg,
      eventOverwhelmedImg: eventOverwhelmedImg,
      date: "Nov 291",
      title: "Surfing at leasure",
      price: 11000,
    },
    {
      id: 1,
      eventImage: eventImage,
      eventImageSvg: eventImageSvg,
      eventOverwhelmedImg: eventOverwhelmedImg,
      date: "Nov 291",
      title: "Surfing at leasure",
      price: 11000,
    },
    {
      id: 1,
      eventImage: eventImage,
      eventImageSvg: eventImageSvg,
      eventOverwhelmedImg: eventOverwhelmedImg,
      date: "Nov 291",
      title: "Surfing at leasure",
      price: 11000,
    },
    {
      id: 1,
      eventImage: eventImage,
      eventImageSvg: eventImageSvg,
      eventOverwhelmedImg: eventOverwhelmedImg,
      date: "Nov 291",
      title: "Surfing at leasure",
      price: 11000,
    },
  ];
  return (
    <>
      <main className="content">
        <div className="trending">
          <div className="container">
            <h2 className="trending__title">
              Today's recommendations for you, Charlie!
            </h2>
            <div className="card__grid">
              {recommendationObj.map((a, i) => (
                <TodaysRecommendation key={i} data={a} />
              ))}
            </div>
          </div>
        </div>

        {/* here is master journety ends */}

        <div className="recommendations">
          <div className="container">
            <h2 className="recommendations__title">
              Charlie, here is your master journey with us so far
            </h2>
            <div className="card__grid card__grid--dashboard">
              {[1, 2, 3, 4].map((a, i) => (
                <MasterJourney key={i} />
              ))}
            </div>
          </div>
        </div>

        {/* here is master journey ends */}

        <div className="onmap">
          <div className="container">
            <h2 className="onmap__title">Find events on map</h2>
            <div className="onmap__map">
              <img src={mapImg} alt="" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomeTest;
