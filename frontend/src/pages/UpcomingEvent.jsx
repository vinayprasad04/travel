import React from "react";
import { useState } from "react";

import Event from "../components/Event";

  const UpcomingEvent = () => {
  const ImagePerLoad = 5;
  const [load, setLoad] = useState(ImagePerLoad);

  const step = 5;
  const handleLoad = () => {
    setLoad(ImagePerLoad + step);
  };
  // const [obj, setObj] = useState({
  //   comedy: false,
  //   walk: false,
  //   box: false,
  //   swiming: false,
  //   golf: false,
  //   singing: false,
  //   show: false,
  //   kite: false,
  //   exhibtions: false,
  // });
  // const handleFilter = (filterIndex) => {
  //   setObj(filterIndex);
  // };

  const dummy = [
    {
      coverimg: "/images/holiday_0.png",
      rating: 5.0,
      reviews: 126,
      date: "Nov 102-50",
    },
    {
      coverimg: "/images/Event-Banner.png",
      rating: 5.0,
      reviews: 126,
      date: "Nov 10-29",
    },
    {
      coverimg: "/images/spa_0.png",
      rating: 5.0,
      reviews: 126,
      date: "Nov 10-29",
    },
    {
      coverimg: "/images/holiday_0.png",
      rating: 5.0,
      reviews: 126,
      date: "Nov 10-29",
    },
    {
      coverimg: "/images/Event-Banner.png",
      rating: 5.0,
      reviews: 126,
      date: "Nov 10-29",
    },
    {
      coverimg: "/images/holiday_0.png",
      rating: 5.0,
      reviews: 126,
      date: "Nov 10-29",
    },
    {
      coverimg: "/images/Event-Banner.png",
      rating: 5.0,
      reviews: 126,
      date: "Nov 10-29",
    },
    {
      coverimg: "/images/spa_0.png",
      rating: 5.0,
      reviews: 126,
      date: "Nov 10-29",
    },
    {
      coverimg: "/images/holiday_0.png",
      rating: 5.0,
      reviews: 126,
      date: "Nov 10-29",
    },
    {
      coverimg: "/images/Event-Banner.png",
      rating: 5.0,
      reviews: 126,
      date: "Nov 10-29",
    },
    {
      coverimg: "/images/holiday_0.png",
      rating: 5.0,
      reviews: 126,
      date: "Nov 102-50",
    },
    {
      coverimg: "/images/Event-Banner.png",
      rating: 5.0,
      reviews: 126,
      date: "Nov 10-29",
    },
    {
      coverimg: "/images/spa_0.png",
      rating: 5.0,
      reviews: 126,
      date: "Nov 10-29",
    },
    {
      coverimg: "/images/holiday_0.png",
      rating: 5.0,
      reviews: 126,
      date: "Nov 10-29",
    },
    {
      coverimg: "/images/Event-Banner.png",
      rating: 5.0,
      reviews: 126,
      date: "Nov 10-29",
    },
    {
      coverimg: "/images/holiday_0.png",
      rating: 5.0,
      reviews: 126,
      date: "Nov 10-29",
    },
    {
      coverimg: "/images/Event-Banner.png",
      rating: 5.0,
      reviews: 126,
      date: "Nov 10-29",
    },
    {
      coverimg: "/images/spa_0.png",
      rating: 5.0,
      reviews: 126,
      date: "Nov 10-29",
    },
    {
      coverimg: "/images/holiday_0.png",
      rating: 5.0,
      reviews: 126,
      date: "Nov 10-29",
    },
    {
      coverimg: "/images/Event-Banner.png",
      rating: 5.0,
      reviews: 126,
      date: "Nov 10-29",
    },
  ];

  return (
    <>
      <Event load={load} />
      <div className="recommendations__more">
          {load < dummy?.length && (
          <button className="btn btn__black" onClick={handleLoad}>
            Load more
          </button>
        )}
      </div>
    </>
  );
};
export default UpcomingEvent;
