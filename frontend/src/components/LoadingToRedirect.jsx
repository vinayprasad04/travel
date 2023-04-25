import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoadingToRedirect = () => {
  const Navigate = useNavigate();
  useEffect(() => {
    Navigate("/login");
  }, [Navigate]);
  return <div>LoadingToRedirect</div>;
};

export default LoadingToRedirect;
