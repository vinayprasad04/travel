import React, {useEffect} from "react";
import RouterComponent from "./RouterComponent";
import { useNavigate } from "react-router-dom";

const App = () => {

  const auth=localStorage.getItem("user");
  const navigate=useNavigate();
  useEffect(()=>{
    if(!auth){
      navigate("/edit-profile");
    }
  }, [auth, navigate])

  return (
    <>
      <RouterComponent />
    </>
  );
};
  
export default App;
