import React from "react";

import "../assets/scss/_home.scss";
import Slider from "../components/carousel/Slider";
import MidSlider from "../components/carousel/MidSlider";

import HomeTest from "../components/cards/HomeTest";
import { style } from "@mui/system";

const Home = () => {
  return <>
        <div style={{paddingLeft: "100px"}}>
          <Slider />
          <MidSlider />
        </div>
    
        
        {/* <HomeTest/> */}
  </>;
};

export default Home;
