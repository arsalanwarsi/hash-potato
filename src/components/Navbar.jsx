import React from "react";
import NavLink from "./NavLink";

export default function Navbar(props) {
  const { route } = props;
  return (
    <>
      <div>
        <header>
          <nav className="navbar navbar-expand-lg navbar-light">
            <a href="/">
              <div className="logo">
                {/* <img src="img/logo.png" alt=""> */}
              </div>
            </a>
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
              <div className="main-nav">
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
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}
