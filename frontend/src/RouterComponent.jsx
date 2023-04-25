import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import Feedback from "./pages/Feedback";
import Setting from "./pages/Setting";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Wrapper from "./components/Wrapper";
import CreateCategory from "./pages/admin/CreateCategory";
import DisplayCategory from "./pages/admin/DisplayCategory";
import UserList from "./pages/admin/UserList";
import Iternearies from "./pages/admin/Iternearies";
import CreateEvent from "./pages/admin/CreateEvents";
import DisplayEvents from "./pages/admin/DisplayEvents";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Error from "./pages/Error";

import UserRoute from "./components/UserRoute";
import AdminRoute from "./components/AdminRoute";

const RouterComponent = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <UserRoute>
              <Wrapper />
            </UserRoute>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/upcoming-events" element={<Favorites />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/setting" element={<Setting />} />
        </Route>
        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        >
          <Route path="category" element={<CreateCategory />} />
          <Route path="display/category" element={<DisplayCategory />} />
          <Route path="users" element={<UserList />} />
          <Route path="itenearies" element={<Iternearies />} />
          <Route path="event" element={<CreateEvent />} />
          <Route path="display/events" element={<DisplayEvents />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
};

export default RouterComponent;

//  <Route path="/" element={<Home />} />
//         <Route path="/favorites" element={<Favorites />} />
//         <Route path="/upcoming-events" element={<Favorites />} />
//         <Route path="/notifications" element={<Notifications />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/feedback" element={<Feedback />} />
//         <Route path="/setting" element={<Setting />} />
//         <Route path="/admin/dashboard" element={<AdminDashboard />} />
