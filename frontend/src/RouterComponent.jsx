import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Favorites from "./pages/Favorites";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import Feedback from "../src/pages/Feedback/Feedback";
import Setting from "./pages/Setting";
import Login from "./pages/Login";
import EditProfile from "./pages/editProfile";
import ModalForm from "./components/modalForm/ModalForm";
import { useSelector } from "react-redux";
import UserRegistration from "./pages/UserRegistration";

const RouterComponent = () => {
  const IsLogin = useSelector((state) => state.userLogin.isLoggedIn);
  console.log(IsLogin);

  const token = localStorage.getItem("Token");

  return (
    <>
      <>
        <Navbar />
        <Routes>
          {token ? (
            <>
              <Route path="/home" element={<Home />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/upcoming-events" element={<Favorites />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/edit-profile" element={<EditProfile />} />
              <Route path="/addreview" element={<ModalForm />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Login />} />
              <Route path="/user-registration" element={<UserRegistration />} />
            </>
          )}
        </Routes>
        <Footer />
      </>
    </>
  );
};

export default RouterComponent;
