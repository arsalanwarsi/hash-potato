import React from "react";
import NavLink from "./NavLink";
import logo from "../assets/pics/logo.png";
import logoText from "../assets/pics/logo_text.png";
import twitter from "../assets/pics/twitter.png";
import dics from "../assets/pics/dics.png";
import tel from "../assets/pics/tel.png";

export default function Navbar(props) {
  const { route } = props;
  return (
    <>
      <div>
        <header>
          <nav className="navbar navbar-expand-lg navbar-light">
            <button
              className="navbar-toggler toggle-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="d-flex flex-column justify-content-between main-nav">
                <a href="/">
                  <div className="logo">
                    <img src={logo} alt="" />
                    <img src={logoText} className="ms-1 w-75" alt="" />
                  </div>
                </a>
                <div className="navbar nav-menu">
                  <ul className="nav-list w-100">
                    {route.map((value, key) => {
                      return (
                        <NavLink
                          key={key}
                          name={value.name}
                          path={value.path}
                          icon={value.icon}
                        />
                      );
                    })}
                  </ul>
                </div>
                <div className="footer-logo">
                  <a href="/">
                    <img src={twitter} alt="" />
                  </a>
                  <a href="/">
                    <img src={dics} alt="" />
                  </a>
                  <a href="/">
                    <img src={tel} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}
