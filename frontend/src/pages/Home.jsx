import React from "react";

import "../assets/scss/_home.scss"
import Card from "../components/carousel/Card";
import Slider from "../components/carousel/Slider";
import MidSlider from "../components/carousel/MidSlider";

import HomeTest from '../components/cards/HomeTest'

const Home = () => {
  return <>
    <Slider />
        <MidSlider />
        <HomeTest/>
  </>;
};

export default Home