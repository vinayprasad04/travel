import React from "react";
import "../../assets/scss/admin.scss";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Tooltip } from "antd";

const AdminDashboard = () => {
  return (
    <section className="admin">
      <div className="left">
        <div className="list">
          <Tooltip title="Create Category" placement="left">
            <Link to="/admin/dashboard/category" className="link">
              <i className="bx bx-category"></i>
            </Link>
          </Tooltip>
          <Tooltip title="Display Category" placement="left">
            <Link to="/admin/dashboard/display/category" className="link">
              <i className="bx bx-category-alt"></i>
            </Link>
          </Tooltip>
          <Tooltip title=" User List" placement="left">
            <Link to="/admin/dashboard/users" className="link">
              <i className="bx bx-user"></i>
            </Link>
          </Tooltip>
          <Tooltip title=" Assign Iterneariees" placement="left">
            <Link to="/admin/dashboard/itenearies" className="link">
              <i className="bx bx-list-ol"></i>
            </Link>
          </Tooltip>
          <Tooltip title=" Create Events" placement="left">
            <Link to="/admin/dashboard/event" className="link">
              <i className="bx bx-calendar-event"></i>
            </Link>
          </Tooltip>
          <Tooltip title="  Display Events" placement="left">
            <Link to="/admin/dashboard/display/events" className="link">
              <i className="bx bx-list-check"></i>
            </Link>
          </Tooltip>
          <Tooltip title="Logout" placement="left">
            <Link to="/" className="link">
              <i className="bx bx-log-out-circle"></i>
            </Link>
          </Tooltip>
        </div>
      </div>
      <div className="right">
        <Outlet />
      </div>
    </section>
  );
};

export default AdminDashboard;
