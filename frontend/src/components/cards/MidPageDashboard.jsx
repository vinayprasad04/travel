import React, { useEffect, useState } from "react";

import { getEvents } from "../../redux/action";
import TodaysRecommendation from "./TodaysRecommendation";
import MasterJourney from "./MasterJourney";
import mapImg from "../../assets/img/map.jpg";

const HomeTest = () => {
  const [eventDetails, setEventDetails] = useState([]);
  const getEventsDetails = async () => {
    const data = await getEvents();
    setEventDetails(data?.data.data);
  };

  useEffect(() => {
    getEventsDetails();
  }, []);

  console.log(eventDetails);

  return (
    <>
      <main class="content">
        <div class="trending">
          <div class="container">
            <h2 class="trending__title">
              Today's recommendations for you, Charlie!
            </h2>
            <div class="card__grid">
              {eventDetails?.slice(0,10).map((a, i) => (
                <TodaysRecommendation key={a?.id} data={a} />
              ))}
            </div>
          </div>
        </div>

        {/* here is master journety ends */}

        <div class="recommendations">
          <div class="container">
            <h2 class="recommendations__title">
              Charlie, here is your master journey with us so far
            </h2>
            <div class="card__grid card__grid--dashboard">
              {eventDetails?.slice(0,10).map((a, i) => (
                <MasterJourney key={i}  data={a}/>
              ))}
            </div>
          </div>
        </div>

        {/* here is master journey ends */}

        <div class="onmap">
          <div class="container">
            <h2 class="onmap__title">Find events on map</h2>
            <div class="onmap__map">
              <img src={mapImg} alt="" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomeTest;
