import React from "react";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="container-fluid g-0">
      <div className="row g-0">
        <SideBar />
        <div className="col-md-10 min-vh-100">
          <div
            className=""
            style={{
              height: "6.5%",
              backgroundColor: "#1679AB",
            }}
          ></div>
          <div>
            <NavBar />
            <hr
              className="text-black ms-3 me-3 fs-4"
              style={{ fontWeight: "bold" }}
            ></hr>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
