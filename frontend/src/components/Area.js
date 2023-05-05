import React from "react";
// import 'D:/travel/frontend/src/assets/styles/Area.css'

import Details from "./Details";
import logoBlack from "../assets/img/logoBlack.svg";

export default function Area() {
  return (
    <div className="ar">
      <div className="image">
        <img src={logoBlack} alt="dfg" />
      </div>

      <div
        className="para"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <p>Welcome to Our Login Portal</p>
      </div>

      <Details />
    </div>
  );
}
