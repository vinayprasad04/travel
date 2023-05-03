import React from "react";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingToRedirect";
const UserRoute = ({ children }) => {
  const { user, isValid } = useSelector((state) => state?.users);

  return <div>{user && isValid ? children : <LoadingToRedirect />}</div>;
};

export default UserRoute;
