import React from "react";

export default function NavLink(props) {
  return (
    <>
      <li>
        <a href={props.path} className="nav-link">
          <i className="">{props.icon}</i>
          <span>{props.name}</span>
        </a>
      </li>
    </>
  );
}
