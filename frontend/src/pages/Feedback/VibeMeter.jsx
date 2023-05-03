import React from "react";
// import vibeometer from "../../assets/img/vibe-o-meter.svg";
import GaugeChart from "react-gauge-chart";

// EMOJIS
import overwhelmed from "../../assets/img/overwhelmed.svg";
import appreciation from "../../assets/img/appreciation.svg";
import boredom from "../../assets/img/boredom.svg";
import dissappointed from "../../assets/img/disappointed.svg";
import anger from "../../assets/img/anger.svg";
import joy from "../../assets/img/joy.svg";

import "./arc.css";

function VibeMeter(props) {
  // const [emotions, setEmotions] = useState(props);

  const emoji = [overwhelmed, joy, appreciation, anger, dissappointed, boredom];

  // console.log(emotions);

  

  // const [emotions , setEmotions] = useState("");

  let val = 60;

  return (
    <>
      <div className="feedback__banner--graphic">
        <div className="emojiContainer">
          <div className="image-container">
            <img className="emoji-image1" src={emoji[0]} alt="emoji" />
            <img className="emoji-image2" src={emoji[1]} alt="emoji" />
            <img className="emoji-image3" src={emoji[2]} alt="emoji" />
            <img className="emoji-image4" src={emoji[3]} alt="emoji" />
            <img className="emoji-image5" src={emoji[4]} alt="emoji" />
            <img className="emoji-image6" src={emoji[5]} alt="emoji" />
          </div>
        </div>

        <GaugeChart
          id="gauge-chart3"
          nrOfLevels={30}
          colors={[
            "#55bf3b",
            "#9acc0d",
            "#ace50d",
            "#d8d90f",
            "#ffb03a",
            "#ff385c",
          ]}
          arcWidth={0.2}
          cornerRadius={0}
          arcPadding={0.007}
          percent={val / 100}
          hideText={true}
          needleBaseColor="black"
          needleColor="black"
        />
      </div>
    </>
  );
}

export default VibeMeter;

// ["#55bf3b", "#9acc0d", "#ace50d","#d8d90f", "#ffb03a", "#ff385c"]
/* <GaugeChart
id="gauge-chart5"
nrOfLevels={30}
colors={[
  "#55bf3b",
  "#9acc0d",
  "#ace50d",
  "#d8d90f",
  "#ffb03a",
  "#ff385c",
]}
arcWidth={0.2}
cornerRadius={0}
percent={0.001}
arcPadding={0.007}
needleColor="black"
hideText={true}
needleBaseColor="black"
/> */
