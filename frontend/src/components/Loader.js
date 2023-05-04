import React from "react";
import { TailSpin } from  'react-loader-spinner'


const Loader = () => {
  return (
    <div>
      <TailSpin
        height="30"
        width="80"
        color="white"
        ariaLabel="tail-spin-loading"
        radius="3"
        wrapperStyle={{ marginTop: "-15px", display: "flex", justifyContent: "center", padding: "10px"}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
