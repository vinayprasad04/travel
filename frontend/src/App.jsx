import React, { useEffect } from "react";

import { Loads } from "./redux/actions/authAction";
import { useDispatch } from "react-redux";
import RouterComponent from "./RouterComponent";
const App = () => {
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");

  const loadUser = async () => {
    const res = await Loads(token);
    if (res?.data.token) {
      dispatch({ type: "load", payload: res?.data });
    }
  };

  useEffect(() => {
    if (token) loadUser();
  }, [dispatch]);
  return <RouterComponent />;
};

export default App;
