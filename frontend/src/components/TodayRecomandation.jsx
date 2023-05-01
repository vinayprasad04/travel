import React from "react";
import RecommendationCard from "./cards/RecommendationCard";
const TodayRecomandation = ({ recommendation, user }) => {
  return (
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
  );
};

export default TodayRecomandation;
