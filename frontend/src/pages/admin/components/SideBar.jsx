import { Link } from "react-router-dom";
import logo from "../../../assets/img/logo/logo_icon.png";
import user from "../../../assets/img/layout_img/user_img.jpg";

const SideBar = ({ sideBarOpen }) => {
  return (
    <nav id="sidebar" className={`${sideBarOpen ? "active" : ""}`}>
      <div className="sidebar_blog_1">
        <div className="sidebar-header">
          <div className="logo_section">
            <a href="/">
              <img className="logo_icon img-responsive" src={logo} alt="logo" />
            </a>
          </div>
        </div>
        <div className="sidebar_user_info">
          <div className="icon_setting"></div>
          <div className="user_profle_side">
            <div className="user_img">
              <img className="img-responsive" src={user} alt="user" />
            </div>
            <div className="user_info">
              <h6>John David</h6>
              <p>
                <span className="online_animation"></span> Online
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar_blog_2">
        <h4>General</h4>
        <ul className="list-unstyled components">
          <li className="active">
            <Link to={"/home"}>
              <i className="fa fa-dashboard yellow_color"></i>{" "}
              <span>Dashboard</span>
            </Link>
          </li>

          <li>
            <Link to={"/wait-list"}>
              <i className="fa fa-users blue2_color"></i>{" "}
              <span>Wait-list Joiners</span>
            </Link>
          </li>
          <li>
            <Link to={"/charts"}>
              <i className="fa fa-bar-chart-o green_color"></i>{" "}
              <span>Visualisation</span>
            </Link>
          </li>
          <li>
            <Link to={"/home"}>
              <i className="fa fa-paper-plane red_color"></i>{" "}
              <span>Newsletter</span>
            </Link>
          </li>
          <li>
            <Link to={"/home"}>
              <i className="fa fa-cog yellow_color"></i> <span>Settings</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideBar;
