import React from "react";
import { useState, useEffect } from "react";
import RouterComponent from "./RouterComponent";

const App = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data));
  }, []);

  console.log(message);

  return (
    <>
      <RouterComponent {...message} />
    </>
  );
};

export default App;
