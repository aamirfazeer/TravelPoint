import React from "react";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="container-fluid g-0 m-0 p-0">
      <div className="row g-0">
        <SideBar />
        <div className="col-md-10 min-vh-100 mt-2">
          <div>
            <NavBar />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
