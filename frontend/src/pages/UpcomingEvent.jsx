import React from "react";
import { useState } from "react";

import Event from "../components/Event";
import image from "./imageData";

const UpcomingEvent = () => {
  const ImagePerLoad = 5;
  const [load, setLoad] = useState(ImagePerLoad);

  const step = 5;
  const handleLoad = () => {
    setLoad(ImagePerLoad + step);
  };

  return (
    <>
      <Event load={load} />
      <div className="recommendations__more">
        {load < image?.length && (
          <button className="btn btn__black" onClick={handleLoad}>
            Load more
          </button>
        )}
      </div>
    </>
  );
};
export default UpcomingEvent;
