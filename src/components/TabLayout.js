import React, { useState } from "react";
import person from "../assets/images/person.png";
import { NavLink } from "react-router-dom";
import "./TabLayout.css";

const TabLayout = ({ children }) => {
  const [activeTab, setActiveTab] = useState();

  return (
    <div className="row g-0 mt-4 ms-4" style={{ marginRight: "15%" }}>
      <div className="container">
        <ul className="nav nav-tabs mb-0 p-0">
          <li className="nav-item">
            <NavLink
              className={`nav-link tab ${
                activeTab === "personal-info" ? "active" : ""
              }`}
              to="/personal-info"
              onClick={() => setActiveTab("personal-info")}
            >
              Personal Information
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={`nav-link tab ${
                activeTab === "travel-log" ? "active" : ""
              }`}
              to="/travel-log"
              onClick={() => setActiveTab("travel-log")}
            >
              Travel Log
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={`nav-link tab ${
                activeTab === "booking-info" ? "active" : ""
              }`}
              to="/booking-info"
              onClick={() => setActiveTab("booking-info")}
            >
              Booking Information
            </NavLink>
          </li>
        </ul>
        <div className="card shadow-lg mt-3" style={{ backgroundColor: "#dde6ed" }}>
          <div className="card-body m-2">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabLayout;
