import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import routes from "../router";
import MainSection from "./MainSection";
import TopBar from "./TopBar";

export default function Dashboard(props) {
  return (
    <>
      <div>
        <Navbar route={routes} />
        <div className="main-body">
          {/* <Outlet /> */}
          <TopBar />
          <MainSection />
        </div>
      </div>
    </>
  );
}
