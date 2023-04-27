import React from "react";
import IternearyCardSlider from "../components/sliders/IternearyCardSlider";
import ExperianceCardSlider from "../components/sliders/ExperianceCardSlider";
import Recommendation from "../components/Recommendation";

const Home = () => {
  return (
    <>
      <div style={{ paddingLeft: "100px" }}>
        <IternearyCardSlider />
        <ExperianceCardSlider />
      </div>
      <Recommendation />
    </>
  );
};

export default Home;
