import React from "react";

import Slider from "../components/carousel/Slider";
import MidSlider from "../components/carousel/MidSlider";
import MidPageDashboard from "../components/cards/MidPageDashboard";

const Home = () => {
  return (
    <>
      <div style={{ paddingLeft: "8.5vh" }}>
        <Slider />
        <MidSlider />
        <MidPageDashboard />
      </div>
    </>
  );
};

export default Home;
