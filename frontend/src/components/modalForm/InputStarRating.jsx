import React from "react";
import starRegular from "../../assets/img/star-regular.svg";
const InputStarRating = () => {
  return (
    <div>
      <div class="star--rating">
        <img src={starRegular} alt="Star" width="25px" />
        <img src={starRegular} alt="Star" width="25px" />
        <img src={starRegular} alt="Star" width="25px" />
        <img src={starRegular} alt="Star" width="25px" />
        <img src={starRegular} alt="Star" width="25px" />
      </div>
    </div>
  );
};

export default InputStarRating;
