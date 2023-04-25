import React from "react";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingToRedirect";

const AdminRoute = ({ children }) => {
  const { user, isValid, role } = useSelector((state) => state.users);
  const token = localStorage.getItem("token");

  return (
    <div>
      {user && isValid && token && role === "admin" ? (
        children
      ) : (
        <LoadingToRedirect />
      )}
    </div>
  );
};
export default AdminRoute;
