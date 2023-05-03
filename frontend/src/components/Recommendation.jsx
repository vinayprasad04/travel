import { useSelector } from "react-redux";

import MasterJourneyCard from "./cards/MasterJourneyCard";

import { DisplayEvent } from "../redux/actions/eventAction";
import { useEffect, useState } from "react";
import TodayRecomandation from "./TodayRecomandation";
import Map from "./Map";

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
      <main className="content">
        <TodayRecomandation recommendation={recommendation} user={user} />

        {/* here is master journety ends */}

        <div className="recommendations">
          <div className="container">
            <h2 className="recommendations__title">
              {user?.data.name}, here is your master journey with us so far
            </h2>
            <div className="card__grid card__grid--dashboard">
              {[1, 2, 3, 4].map((a, i) => (
                <MasterJourneyCard data={a} key={i} />
              ))}
            </div>
          </div>
        </div>
        <Map />
        {/* here is master journey ends */}
      </main>
    </>
  );
};

export default Recommendation;
