import React from "react";
import ModalForm from "../components/modalForm/ModalForm";

import "../assets/scss/_home.scss";
import Slider from "../components/carousel/Slider";
import MidSlider from "../components/carousel/MidSlider";

import HomeTest from "../components/cards/HomeTest";
import { style } from "@mui/system";

const Home = () => {
  const a = 10;

  return (
    <div>
      <ModalForm />
    </div>
  );
  return (
    <>
      <div style={{ paddingLeft: "100px" }}>
        <Slider />
        <MidSlider />
      </div>

      <HomeTest />
    </>
  );
};

export default Home;
