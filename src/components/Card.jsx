import React from "react";

export default function Card(props) {
  return (
    <>
      <div className="col-sm-12 col-md-6 p-0">
        <div className="main-card">
          <p>{props.title}</p>
          <p>{props.value}</p>
        </div>
      </div>
    </>
  );
}
