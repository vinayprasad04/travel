import React from "react";

import "../assets/scss/_home.scss"
import ItinerarySlider from "../components/dashboardSliders/ItinerarySlider";
import ExperienceSlider from "../components/dashboardSliders/ExperienceSlider";

import HomeTest from '../components/cards/HomeTest'

const Home = () => {
  return <>
        <div style={{paddingLeft: "8.5vw"}}>
          <ItinerarySlider />
          <ExperienceSlider />
        </div>
        <HomeTest/>
  </>;
};

export default Home