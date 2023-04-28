import React from "react";
import NavigationButton from "./NavigationButton";

const EventCard = ({ data }) => {
  return (
    <li className="notification__list--item" key={data.id}>
      <div className="notification__info">
        <div className="image--wrapper">
          <img src={data.imageUrl} alt="" width="100px" height="100px" />
        </div>
        <div className="content--wrapper">
          <div className="title">{data.activity}</div>
          <div className="subtitle">{data.name}</div>
          <div className="details">AED {data.price} per person</div>
          <div className="details">{data.time}</div>
        </div>
      </div>
      <NavigationButton
        isRevieved={data.isRevieved}
        isCompleted={data.isCompleted}
      />
    </li>
  );
};

export default EventCard;
