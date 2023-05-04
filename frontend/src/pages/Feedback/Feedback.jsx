import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";
import overwhelmed from "../../assets/img/overwhelmed.svg";
import VibeOMeter from "./VibeMeter";

function Feedback() {
  const [user, setUser] = useState([]);
  const [rating, setRating] = useState();

  // Users
  const users = async () => {
    await axios
      .get("http://localhost:5000/user")
      .then((userResult) => {
        setUser(userResult?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

   // Emotions
   const review =async () => {
   await axios
      .get("http://localhost:5000/eventRating")
      .then((res) => {
        // Event Rating
        console.log("Rating from Card:  ", res.data);

        let sum = 0;
        for (let i = 0; i < res.data.length; i++) {
          sum = sum + parseFloat(res.data[i].eventrating);
        }
        console.log("Resultant Rating : ", Math.floor(sum / res.data.length));
        setRating(Math.floor(sum/4));
      })
      .catch((error) => {
        console.log(error);
      });
  };

     
  const emojiImages = [
    require('../../assets/img/overwhelmed.svg') ,
    require('../../assets/img/joy.svg'),
    require('../../assets/img/appreciation.svg'),
    require('../../assets/img/anger.svg'),
    require('../../assets/img/disappointed.svg'),
    require('../../assets/img/boredom.svg')
];

function Callback(childData){


}
  
  useEffect(() => {
    users();
    review();
    // review();
  }, []);

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
                      <p>{rating}</p>
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
                  {/* <VibeOMeter currentEmotion = {overwhelmed} /> */}
                  <VibeOMeter currentEmotion={rating} />
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
              Hi &nbsp;
              {user?.data?.[0]?.name}
              <br />
              here are the glimpse of your feedback shared with us.
            </h2>
            <ul className="feedback__list">
              <Cards  handleCallback={Callback} />
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default Feedback;
