import React, { useEffect, useState } from "react";

import { getEvents } from "../../redux/action";
import TodaysRecommendation from "./TodaysRecommendation";
import MasterJourney from "./MasterJourney";
import mapImg from "../../assets/img/map.jpg";
import { useSelector } from "react-redux";

const MidPageDashboard = () => {
  const [eventDetails, setEventDetails] = useState([]);
  const getEventsDetails = async () => {
    const data = await getEvents();
    setEventDetails(data?.data.data);
  };

  useEffect(() => {
    getEventsDetails();
  }, []);

  const { user } = useSelector((state) => state.user);

  return (
    <>
      <main className="content">
        <div className="trending">
          <div className="container">
            <h2 className="trending__title">
              Today's recommendations for you, {user?.name}!
            </h2>
            <div className="card__grid">
              {eventDetails?.slice(0, 10).map((a, i) => (
                <TodaysRecommendation key={a?.id} data={a} id={i} />
              ))}
            </div>
          </div>
        </div>

        {/* here is master journety ends */}

        <div className="recommendations">
          <div className="container">
            <h2 className="recommendations__title">
              {user?.name}, here is your master journey with us so far
            </h2>
            <div className="card__grid card__grid--dashboard">
              {eventDetails?.slice(0, 10).map((a, i) => (
                <MasterJourney key={i} data={a} id={i} />
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

export default MidPageDashboard;
