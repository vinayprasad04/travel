import React from "react";
import { Audio } from "react-loader-spinner";
import { ThreeDots } from "react-loader-spinner";
const LoaderSpinner = () => {
  return (
    <div>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="yellowgreen"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default LoaderSpinner;
