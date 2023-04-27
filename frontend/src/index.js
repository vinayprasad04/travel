import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/scss/index.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/dataStore";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider  store={store} >
        <App/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
