import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import "../assets/scss/_home.scss";
import Slider from "../components/carousel/Slider";
import MidSlider from "../components/carousel/MidSlider";

import HomeTest from "../components/cards/HomeTest";
import { fetchEvents } from "../redux/features/EventsSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvents());
  }, []);

  return (
    <>
      <div style={{ paddingLeft: "8.5vw" }}>
        <Slider />

        <MidSlider />
      </div>
      <HomeTest />
    </>
  );
};

export default Home;
