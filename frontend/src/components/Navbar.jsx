import React, { useState } from "react";
import logo from "../assets/img/logo-black.svg";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/features/LoginSlice";
import PopUp from "./PopUp";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    localStorage.removeItem("Token");
    console.log("hello");
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__branding">
            <Link to="/home" className="header__branding__logo">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <nav className="header__menu">
            <ul className="header__nav">
              <li className="header__nav__item header__nav__item-active header__nav__item--mobile">
                <NavLink
                  to="/home"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "header__nav__link header__nav__link--underline header__nav__item-active"
                      : "header__nav__link"
                  }
                >
                  Dashboard
                </NavLink>
              </li>
              <li className="header__nav__item header__nav__item--mobile">
                <NavLink
                  to="/favorites"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "header__nav__link header__nav__link--underline"
                      : "header__nav__link"
                  }
                >
                  My favorites
                </NavLink>
              </li>
              <li className="header__nav__item header__nav__item--mobile">
                <NavLink
                  to="/upcoming-events"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "header__nav__link header__nav__link--underline"
                      : "header__nav__link"
                  }
                >
                  Upcoming events
                </NavLink>
              </li>
              <li className="header__nav__item header__nav__item--notifications">
                <Link className="header__nav__link">
                  <span className="icon-bell"></span>
                  {/* <!-- The below span will be displayed if there is any unread notification in the system othersie hide this --> */}
                  <span className="circle"></span>
                </Link>

                <PopUp />
              </li>
              <li className="header__nav__item header__nav__item--menu">
                <Link className="header__nav__link">
                  <div className="header__nav__link__menu">
                    <span className="icon-menu"></span>
                    <div className="header__nav__link__user">
                      <div className="header__nav__link__user--init">S</div>
                      <div className="nav__link__user--pic"></div>
                    </div>
                  </div>
                </Link>
                <div className="dropdown-menu">
                  <ul className="nav">
                    <li className="nav__item nav__item--mobile">
                      <Link to="/" className="nav__link">
                        Dashboard
                      </Link>
                    </li>
                    <li className="nav__item nav__item--mobile">
                      <Link to="/favorites" className="nav__link">
                        My favorites
                      </Link>
                    </li>
                    <li className="nav__item nav__item--mobile">
                      <Link to="/upcoming-events" className="nav__link">
                        Upcomingevents
                      </Link>
                    </li>
                    <li className="nav__divider nav__item--mobile"></li>
                    <li className="nav__item">
                      <Link to="/edit-profile" className="nav__link">
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
                      <Link to="/recommendations" className="nav__link">
                        Recommendations
                      </Link>
                    </li>
                    <li className="nav__item">
                      <Link to="/notifications" className="nav__link">
                        Notifications
                      </Link>
                    </li>
                    <li className="nav__item">
                      <Link
                        to="/"
                        onClick={logoutHandler}
                        className="nav__link"
                      >
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
                        href="#english"
                        className="nav__link nav__link--selected"
                      >
                        English
                      </Link>
                    </li>
                    <li className="nav__item">
                      <Link href="#french" className="nav__link">
                        French
                      </Link>
                    </li>
                    <li className="nav__item">
                      <Link href="#arabic" className="nav__link">
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

export default Navbar;
