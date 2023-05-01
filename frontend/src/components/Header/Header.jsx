import React, { useEffect, useState } from "react";
import logo from "../../assets/img/logo-black.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Popup from "../Popup";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";

const Header = () => {
  const [showNotification, setShowNotification] = useState(false);
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to be logout?")) {
      localStorage.removeItem("token");
      dispatch({ type: "logout" });
      swal({
        icon: "success",
        text: "Logout Successfully",
        type: "success",
      }).then(function () {
        Navigate("/login");
      });
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowNotification(true);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  console.log(showNotification);
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__branding">
            <Link to="/" className="header__branding__logo">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <nav className="header__menu">
            <ul className="header__nav">
              <li className="header__nav__item header__nav__item-active header__nav__item--mobile">
                <NavLink
                  to="/"
                  className="header__nav__link header__nav__link--underline"
                >
                  Dashboard
                </NavLink>
              </li>
              <li className="header__nav__item header__nav__item--mobile">
                <NavLink
                  to="/favorites"
                  className="header__nav__link header__nav__link--underline"
                >
                  My favorites
                </NavLink>
              </li>
              <li className="header__nav__item header__nav__item--mobile">
                <NavLink
                  to="/upcoming-events"
                  className="header__nav__link header__nav__link--underline"
                >
                  Upcoming events
                </NavLink>
              </li>
              <li className="header__nav__item header__nav__item--notifications">
                <Link className="header__nav__link">
                  <span className="icon-bell"></span>
                  {/* <!-- The below span will be displayed if there is any unread notification in the system othersie hide this --> */}
                </Link>
                {showNotification && (
                  <Popup setShowNotification={setShowNotification} />
                )}
              </li>
              <li className="header__nav__item header__nav__item--menu">
                <Link className="header__nav__link">
                  <div className="header__nav__link__menu">
                    <span className="icon-menu"></span>
                    <div className="header__nav__link__user">
                      <div className="header__nav__link__user--init">
                        {user?.data.name.substring(1, 0)}
                      </div>
                      <div className="nav__link__user--pic"></div>
                    </div>
                  </div>
                </Link>
                <div className="dropdown-menu">
                  <ul className="nav">
                    <li className="nav__item nav__item--mobile">
                      {user?.data.type === "user" ? (
                        <>
                          <Link to="/user/dashboard" className="nav__link">
                            Dashboard
                          </Link>
                        </>
                      ) : (
                        <>
                          <Link to="/admin/dashboard" className="nav__link">
                            Dashboard
                          </Link>
                        </>
                      )}
                    </li>
                    <li className="nav__item nav__item--mobile">
                      <Link to="/favorites" className="nav__link">
                        My favorites
                      </Link>
                    </li>
                    <li className="nav__item ">
                      <Link to="/recomandations" className="nav__link">
                        Recomandations
                      </Link>
                    </li>
                    <li className="nav__item nav__item--mobile">
                      <Link to="/upcoming-events" className="nav__link">
                        Upcomingevents
                      </Link>
                    </li>
                    <li className="nav__divider nav__item--mobile"></li>
                    <li className="nav__item">
                      <Link to="/profile" className="nav__link">
                        Edit profiles
                      </Link>
                    </li>
                    <li className="nav__item">
                      <Link to="/feedback" className="nav__link">
                        Feedback
                      </Link>
                    </li>
                    <li className="nav__item">
                      <Link to="/setting" className="nav__link">
                        Settings
                      </Link>
                    </li>
                    <li className="nav__item">
                      <Link className="nav__link" onClick={handleLogout}>
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="header__nav__item header__nav__item--languages">
                <div role="button" className="header__nav__link">
                  <span className="icon-globe"></span>
                </div>
                <div className="dropdown-menu dropdown-menu--sm">
                  <ul className="nav">
                    <li className="nav__item">
                      <Link
                        to="#english"
                        className="nav__link nav__link--selected"
                      >
                        English
                      </Link>
                    </li>
                    <li className="nav__item">
                      <Link to="#french" className="nav__link">
                        French
                      </Link>
                    </li>
                    <li className="nav__item">
                      <Link to="#arabic" className="nav__link">
                        Arabic
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
