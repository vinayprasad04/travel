import React from "react";

// import "../assets/scss/_home.scss"

import Slider from "../components/carousel/Slider";
import MidSlider from "../components/carousel/MidSlider";
import MidPageDashboard from '../components/cards/MidPageDashboard'

const Home = () => {
  return <>
        <Slider />
        <MidSlider />
        <MidPageDashboard/>
  </>;
};

export default Home