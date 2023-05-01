import React from "react";
import mapImg from "../assets/img/map.jpg";
const Map = () => {
  return (
    <div class="onmap">
      <div class="container">
        <h2 class="onmap__title">Find events on map</h2>
        <div class="onmap__map">
          <img src={mapImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Map;
