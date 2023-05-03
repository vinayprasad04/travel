import React from "react";
import mapImg from "../assets/img/map.jpg";
const Map = () => {
  return (
    <div className="onmap">
      <div className="container">
        <h2 className="onmap__title">Find events on map</h2>
        <div className="onmap__map">
          <img src={mapImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Map;
