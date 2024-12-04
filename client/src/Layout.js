import React from "react";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import "./Layout.css";

const Layout = () => {

  const user  = JSON.parse(localStorage.getItem("user")) || null;
  return (
    <div className="dashboard">
      <SideBar />
      <div className="dashboard-content">
        <div className="col min-vh-100 page">
          <NavBar user = {user} />
          <div className="outlet">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
//document.querySelector("#root > div > div.dashboard-content > div > div.row.g-0 > div:nth-child(1) > h1")
export default Layout;
