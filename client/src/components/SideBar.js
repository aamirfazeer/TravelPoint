import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { GiSchoolBag } from "react-icons/gi";
import { FaCar } from "react-icons/fa";
import { GiCampingTent } from "react-icons/gi";
import { GiSecretBook } from "react-icons/gi";
import { TbReportAnalytics } from "react-icons/tb";
import { RiLogoutBoxFill } from "react-icons/ri";
import "./SideBar.css"

function SideBar() {
  return (
    <div
      className="sd d-flex flex-column min-vh-100"
      style={{ backgroundColor: "#074173" }}
    >
      <div className="text-center mt-3 align-items-center justify-content-center gap-3">
        <img
          src={logo}
          className="img-fluid"
          style={{
            height: "100px",
          }}
          alt="Logo"
        />
      </div>

      <div className="mt-2">
        <ul className="nav flex-column m-3">
          <li className="nav-item mb-3">
            <NavLink
              to="/home"
              className="nav-link rounded text-white fw-bold d-flex align-items-center"
              activeClassName="bg-light cl"
            >
              <MdOutlineSpaceDashboard
                className="icon me-2"
                style={{ height: "25px", width: "25px" }}
              />
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item mb-3">
            <NavLink
              to="/travellers"
              className="nav-link rounded text-white fw-bold d-flex align-items-center"
              activeClassName="bg-light cl"
            >
              <GiSchoolBag
                className="icon me-2"
                style={{ height: "26px", width: "26px" }}
              />
              Travellers
            </NavLink>
          </li>
          <li className="nav-item mb-3 ">
            <NavLink
              to="/vehicle-rentals"
              className="nav-link rounded text-white fw-bold d-flex align-items-center"
              activeClassName="bg-light cl"
            >
              <FaCar
                className="icon me-2"
                style={{ height: "25px", width: "25px" }}
              />
              Vehicle Rentals
            </NavLink>
          </li>
          <li className="nav-item mb-3">
            <NavLink
              to="/equipment-rentals"
              className="nav-link rounded text-white fw-bold d-flex align-items-center"
              activeClassName="bg-light cl"
            >
              <GiCampingTent
                className="icon me-2"
                style={{ height: "26px", width: "26px" }}
              />
              Equipment Rentals
            </NavLink>
          </li>
          <li className="nav-item mb-3 ">
            <NavLink
              to="/travel-guides"
              className="nav-link rounded text-white fw-bold d-flex align-items-center"
              activeClassName="bg-light cl"
            >
              <GiSecretBook
                className="icon me-2"
                style={{ height: "26px", width: "26px" }}
              />
              Travel Guides
            </NavLink>
          </li>
          <li className="nav-item mb-3">
            <NavLink
              to="/Report"
              className="nav-link rounded text-white fw-bold d-flex align-items-center"
              activeClassName="bg-light cl"
            >
              <TbReportAnalytics
                className="icon me-2"
                style={{ height: "26px", width: "26px" }}
              />
              Report
            </NavLink>
          </li>
          <li className="nav-item mt-5">
            <Link
              to="/"
              className="nav-link rounded text-white fw-bold d-flex align-items-center"
              activeClassName="bg-light cl"
            >
              <RiLogoutBoxFill
                className="icon me-2"
                style={{ height: "26px", width: "26px" }}
              />
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
