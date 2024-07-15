import React, { useState } from "react";
import person from "../assets/images/person.png";
import { NavLink } from "react-router-dom";
import "./TabLayout.css"

const TabLayout = ({ children }) => {
  const [activeTab, setActiveTab] = useState();

  return (
    <div className="row g-0 mt-4 ms-4" style={{ marginRight: "15%" }}>
      <div className="container">
        <ul className="nav nav-tabs m-0 p-0">
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
        <div className="card shadow-lg" style={{ backgroundColor: "#dde6ed" }}>
          <div className="card-body m-2">
            <div className="d-flex align-items-center mb-3">
              <div className="me-3">
                <img
                  src={person}
                  className="img-rounded-circle"
                  style={{ width: "50px", height: "50px" }}
                />
              </div>
              <div>
                <h5 className="card-title mb-0 fw-bold fs-4">Ms. Perera</h5>
                <a href="#" className="text-decoration-none">
                  Traveller ID #1254852
                </a>
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabLayout;
