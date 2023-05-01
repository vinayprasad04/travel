import React from "react";
import GaugeChart from "react-gauge-chart";

const GaugeMeter = ({ ratings }) => {
  const gaugeAverage = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i].value;
    }
    return sum / arr.length;
  };

  const gaugeValue = gaugeAverage(ratings);
  console.log("gauge", gaugeValue);

  return (
    <GaugeChart
      id="gauge-chart5"
      nrOfLevels={30}
      colors={["red", "orange", , "green"]}
      arcWidth={0.2}
      cornerRadius={0}
      percent={gaugeValue / 5}
      arcPadding={0.007}
      needleColor="black"
      hideText={true}
      needleBaseColor="black"
    />
  );
};

export default GaugeMeter;
