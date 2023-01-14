import React from "react";

export default function NavLink(props) {
  return (
    <>
      <li>
        <a href={props.path} className="nav-link mb-3">
          <div className="d-flex align-items-center">
            {props.icon ? (
              <img src={props.icon} alt="" />
            ) : (
              <div className="nav-space"></div>
            )}
            <span>{props.name}</span>
          </div>
        </a>
      </li>
    </>
  );
}
