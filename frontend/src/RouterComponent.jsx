import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import Feedback from "./pages/Feedback";
import Setting from "./pages/Setting";
import UpcomingEvent from "./pages/UpcomingEvent";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const RouterComponent = () =>{
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<LoginPg />} />
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/upcoming-events" element={<UpcomingEvent/>} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
      
    </>
  );
};

export default RouterComponent;
