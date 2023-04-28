import React from "react";
import Cards from "./Cards";
import overwhelmed from "../../assets/img/overwhelmed.svg";
import vibeometer from "../../assets/img/vibe-o-meter.svg";

function Feedback() {
  const userName = "Charlie";

  return (
    <>
      <main class="content feedback">
        <div class="feedback__banner">
          <div class="container--fluid">
            <div class="container">
              <div class="row">
                <div class="col_sm_12 col_md_12 col_lg_6">
                  <div class="feedback__banner--info">
                    <div class="feedback__banner--icon">
                      <img src={overwhelmed} alt="Overwhelmed" />
                    </div>
                    <h2 class="feedback__banner--title">
                      Overwhelmed experience
                    </h2>
                    <h3 class="feedback__banner--subtitle">
                      Your Vibe-O-Meter reading exits us too
                    </h3>
                    <div class="feedback__banner--description">
                      We are happy too because we successfully keep you happy
                      during this visit to Sindalah City.
                    </div>
                  </div>
                </div>
                <div class="col_sm_12 col_md_12 col_lg_6">
                  {/* Vibe-o-meter  */}

                  <div class="feedback__banner--graphic">
                    <img src={vibeometer} alt="" />
                 
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="backdrop--filter"></div>
        </div>

        {/* Middle  */}

        <div class="feedback__cards">
          <div class="container">
            <h2 class="feedback__title">
              Hi {userName},
              <br />
              here are the glimpse of your feedback shared with us.
            </h2>
            <ul class="feedback__list">
              <Cards />
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default Feedback;
