import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";

const Headermain = () => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  const handleClose = () => {
    setActive(false);
    document.body.classList.remove("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="header__inner">
          <Link className="navbar-brand nav_ac" to="/" onClick={handleClose} aria-label="Home">
            <div className="logo-container">
              <div className="logo" role="img" aria-label="Ben Dyson logo" />
            </div>
          </Link>
          <div className="header__right">
            <Themetoggle />
            <button
              className="menu__button nav_ac"
              onClick={handleToggle}
              aria-label={isActive ? "Close menu" : "Open menu"}
            >
              {isActive ? <VscClose /> : <VscGrabber />}
            </button>
          </div>
        </div>

        <div className={`site__navigation ${isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container">
                <ul className="the_menu">
                  <li className="menu_item">
                    <Link onClick={handleClose} to="/" className="my-3">Home</Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleClose} to="/portfolio" className="my-3">Work</Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleClose} to="/about" className="my-3">About</Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleClose} to="/contact" className="my-3">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer">
            <div className="menu_footer__links">
              <a href={socialprofils.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={socialprofils.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            <p className="copyright">&copy; {new Date().getFullYear()} Ben Dyson</p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Headermain;
