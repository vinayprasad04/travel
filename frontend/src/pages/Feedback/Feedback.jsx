import React from "react";
import Cards from "./Cards";
import overwhelmed from "../../assets/img/overwhelmed.svg";
import VibeOMeter from './VibeOMeter';

function Feedback() {
  const userName = "Charlie";

  return (
    <>
      <main className="content feedback">
        <div className="feedback__banner">
          <div className="container--fluid">
            <div className="container">
              <div className="row">
                <div className="col_sm_12 col_md_12 col_lg_6">
                  <div className="feedback__banner--info">
                    <div className="feedback__banner--icon">
                      <img src={overwhelmed} alt="Overwhelmed" />
                    </div>
                    <h2 className="feedback__banner--title">
                      Overwhelmed experience
                    </h2>
                    <h3 className="feedback__banner--subtitle">
                      Your Vibe-O-Meter reading exits us too
                    </h3>
                    <div className="feedback__banner--description">
                      We are happy too because we successfully keep you happy
                      during this visit to Sindalah City.
                    </div>
                  </div>
                </div>

                <div className="col_sm_12 col_md_12 col_lg_6">
                  {/* Vibe-o-meter  */}
                  <VibeOMeter currentEmotion = {overwhelmed} />
                </div>
              </div>
            </div>
          </div>
          <div className="backdrop--filter"></div>
        </div>

        {/* Middle  */}

        <div className="feedback__cards">
          <div className="container">
            <h2 className="feedback__title">
              Hi {userName},
              <br />
              here are the glimpse of your feedback shared with us.
            </h2>
            <ul className="feedback__list">
              <Cards />
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default Feedback;
