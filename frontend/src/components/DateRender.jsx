import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const DateRender = ({ days, hours, minutes, seconds, completed }) => {
  const hour = 2 * 60 * 60 * 1000;

  if (completed) {
    return <h2>Event is Start</h2>;
  } else {
    // Render a countdown
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          gap: "40px",
        }}
      >
        <CircularProgressbar
          strokeWidth={2}
          styles={{ path: { stroke: "orange" }, text: { fill: "#fff" } }}
          style={{ width: "2rem", height: "2rem" }}
          value={days}
          maxValue={365}
          text={`${days} day`}
        />
        <CircularProgressbar
          strokeWidth={2}
          styles={{ path: { stroke: "#129bfc" }, text: { fill: "#fff" } }}
          style={{ width: "2rem", height: "2rem" }}
          value={hours}
          maxValue={24}
          text={`${hours} hr`}
        />
        <CircularProgressbar
          strokeWidth={2}
          styles={{ path: { stroke: "#fced12" }, text: { fill: "#fff" } }}
          style={{ width: "2rem", height: "2rem" }}
          value={minutes}
          maxValue={60}
          text={`${minutes} min`}
        />
        <CircularProgressbar
          strokeWidth={2}
          styles={{ path: { stroke: "#fc127b" }, text: { fill: "#fff" } }}
          style={{ width: "rem", height: "2rem" }}
          value={seconds}
          maxValue={60}
          text={`${seconds} sec`}
        />
      </div>
    );
  }
};

export default DateRender;
