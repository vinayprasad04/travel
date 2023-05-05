import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Favorites from "./pages/Favourites";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import Feedback from "./pages/Feedback";
import Setting from "./pages/Setting";
import EditProfile from "./pages/editProfile";
import LoginPg from './components/LoginPg';
import SignUp from  './components/SignUp/SignUp';
import Recommendation from "./pages/Recommendation";


const RouterComponent = () => {

  return (
    <>
      
     <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPg />} />
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/upcoming-events" element={<Favorites />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/recommendation" element={<Recommendation />} />
        
      </Routes>
      
    </>
  );
};

export default RouterComponent;
