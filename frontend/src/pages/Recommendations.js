import React from "react";
import { Link } from "react-router-dom";
import banner from "../assets/img/banner.jpg";
import CircularTimer from "../components/timer/CircularTimer";

const Recommendations = () => {
  return (
    <main className="content home recommendation--page">
      {" "}
      <div className="banner">
        <div className="container">
          <div className=" mainbanner">
            {/* <!-- Additional required wrapper --> */}
            <div className="swiper-wrapper">
              {/* <!-- Slides --> */}
              <div className="swiper-slide">
                <img src={banner} alt="event title" />
                <div className="banner__info">
                  <h2 className="banner__info__title">
                    Medusa's <br />
                    New Year Musical Concert
                  </h2>
                  <div className="banner__info__location">
                    Jumeirah Palm Beach, Dubai
                  </div>
                  <div className="banner__info__date">
                    Jan 01, 2023 at 00:00
                  </div>
                  <div className="banner__info__countdown">
                    <div
                      className="counter"
                      data-date="2023-1-1 00:00:00"
                    ></div>
                  </div>

                  <CircularTimer />
                  <div className="banner__info__link">
                    <Link href="#">Yes, I am in</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- If we need navigation buttons --> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Recommendations;
