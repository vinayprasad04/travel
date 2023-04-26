import logo from "../../../assets/img/logo/logo.svg";
import user from "../../../assets/img/layout_img/user_img.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ onsSidebarCollapse }) => {
  const navigation = useNavigate();
  const [rightSideBarOpen, setRightSideBarOpen] = useState(false);
  const onRightSideDropDown = () => {
    setRightSideBarOpen(!rightSideBarOpen);
  };
  const onLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    navigation("/");
    window.location.reload();
  };
  return (
    <div className="topbar">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="full">
          <button
            type="button"
            onClick={onsSidebarCollapse}
            id="sidebarCollapse"
            className="sidebar_toggle"
          >
            <i className="fa fa-bars"></i>
          </button>
          <div className="logo_section">
            <a href="/">
              <img className="img-responsive" src={logo} alt="logo" />
            </a>
          </div>
          <div className="right_topbar">
            <div className="icon_info">
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-bell-o"></i>
                    <span className="badge">2</span>
                  </a>
                </li>
              </ul>
              <ul className="user_profile_dd">
                <li>
                  <a
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    onClick={onRightSideDropDown}
                  >
                    <img
                      className="img-responsive rounded-circle"
                      src={user}
                      alt="user"
                    />
                    <span className="name_user">John David</span>
                  </a>
                  <div
                    className={`dropdown-menu ${
                      rightSideBarOpen ? "show" : ""
                    }`}
                  >
                    <a className="dropdown-item" href="/">
                      Settings
                    </a>
                    <a className="dropdown-item" onClick={onLogout}>
                      <span>Log Out</span> <i className="fa fa-sign-out"></i>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
