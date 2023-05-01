import React from "react";

import ItinerarySlider from "../components/dashboardSliders/ItinerarySlider";
import ExperienceSlider from "../components/dashboardSliders/ExperienceSlider";
import DashboardMidSection from "../components/dashboardMid/DashboardMidSection";

const Home = () => {
  return <>
        <div style={{paddingLeft: "8.5vw"}}>
          <ItinerarySlider />
          <ExperienceSlider />
        </div>
        <DashboardMidSection />
  </>;
};

export default Home