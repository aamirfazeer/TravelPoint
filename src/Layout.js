import React from "react";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="dashboard">
      <SideBar />
      <div className="dashboard-content">
        <div className="col min-vh-100">
          <NavBar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
