import { useSelector } from "react-redux";

import RecommendationCard from "./cards/RecommendationCard";
import MasterJourneyCard from "./cards/MasterJourneyCard";
import mapImg from "../assets/img/map.jpg";
import eventImage from "../assets/img/spa_0.png";
import eventImageSvg from "../assets/img/one.svg";
import eventOverwhelmedImg from "../assets/img/overwhelmed.svg";
import { DisplayEvent } from "../redux/action";
import { useEffect, useState } from "react";

const Recommendation = () => {
  const [recommendation, setRecommendation] = useState([]);
  const { user } = useSelector((state) => state.users);

  const GetRecomandation = async () => {
    try {
      const result = await DisplayEvent();
      setRecommendation(result?.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetRecomandation();
  }, []);

  return (
    <>
      <main class="content">
        <div class="trending">
          <div class="container">
            <h2 class="trending__title">
              Today's recommendations for you, {user?.data.name}!
            </h2>
            <div class="card__grid">
              {recommendation?.map((data, i) => (
                <RecommendationCard data={data} i={i} key={data.id} />
              ))}
            </div>
          </div>
        </div>

        {/* here is master journety ends */}

        <div class="recommendations">
          <div class="container">
            <h2 class="recommendations__title">
              {user?.data.name}, here is your master journey with us so far
            </h2>
            <div class="card__grid card__grid--dashboard">
              {[1, 2, 3, 4].map((a, i) => (
                <MasterJourneyCard data={a} key={i} />
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

export default Recommendation;
