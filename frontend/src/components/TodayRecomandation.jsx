import React from "react";
import RecommendationCard from "./cards/RecommendationCard";
const TodayRecomandation = ({ recommendation, user }) => {
  return (
    <div className="trending">
      <div className="container">
        <h2 className="trending__title">
          Today's recommendations for you, {user?.data.name}!
        </h2>
        <div className="card__grid">
          {recommendation?.map((data, i) => (
            <RecommendationCard data={data} i={i} key={data.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodayRecomandation;
