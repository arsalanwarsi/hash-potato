import React from "react";

export default function NavLink(props) {
  return (
    <>
      <li>
        <a href={props.path} className="nav-link mb-3">
          <div className="d-flex align-items-center">
            <img src={props.icon} alt="" />
            <span>{props.name}</span>
          </div>
        </a>
      </li>
    </>
  );
}
