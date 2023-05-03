import React, { useEffect } from "react";
import RouterComponent from "./RouterComponent";
import { useDispatch } from "react-redux";
import { loadUser } from "./redux/action";


const App = () => {

  const dispatch = useDispatch();

  const getUserData = async () => {
    try {
      const token = localStorage.getItem('token');
      const data = await loadUser(token);
      const userInfo = data?.data?.data;

      dispatch({ type: 'load', payload: userInfo });
    }
    catch (e) {
      console.log(e);

    }
  }

  useEffect(() => {
    getUserData();
  }, [dispatch]);


  return (
    <>
      <RouterComponent />
    </>
  );
};

export default App;
