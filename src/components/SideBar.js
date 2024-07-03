import React from "react";
import "./SideBar.css";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { GiSchoolBag } from "react-icons/gi";
import { FaCar } from "react-icons/fa";
import { GiCampingTent } from "react-icons/gi";
import { GiSecretBook } from "react-icons/gi";
import { FaHotel } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";
import { IoRestaurantSharp } from "react-icons/io5";
import { RiLogoutBoxFill } from "react-icons/ri";

function SideBar() {
  return (
    <div
      className="col-md-2 d-flex flex-column text-white"
      style={{ backgroundColor: "#074173" }}
    >
      <div className="text-center mt-4">
        <img
          src={logo}
          className="img-fluid"
          style={{
            height: "100px",
          }}
          alt="Logo"
        />
      </div>

      <div className="mt-4">
        <ul className="nav flex-column m-3">
          <li className="nav-item mb-3">
            <NavLink
              to="/home"
              className="nav-link text-white fw-bold d-flex align-items-center"
              activeClassName="active"
            >
              <MdOutlineSpaceDashboard
                className="me-2"
                style={{ height: "25px", width: "25px" }}
              />
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item mb-3">
            <NavLink
              to="/travellers"
              className="nav-link text-white fw-bold d-flex align-items-center"
              activeClassName="active"
            >
              <GiSchoolBag
                className="me-2"
                style={{ height: "26px", width: "26px" }}
              />
              Travellers
            </NavLink>
          </li>
          <li className="nav-item mb-3 ">
            <NavLink
              to="/vehicle-rentals"
              className="nav-link text-white fw-bold d-flex align-items-center"
              activeClassName="active"
            >
              <FaCar
                className="me-2"
                style={{ height: "25px", width: "25px" }}
              />
              Vehicle Rentals
            </NavLink>
          </li>
          <li className="nav-item mb-3">
            <NavLink
              to="/equipment-rentals"
              className="nav-link text-white fw-bold d-flex align-items-center"
              activeClassName="active"
            >
              <GiCampingTent
                className="me-2"
                style={{ height: "26px", width: "26px" }}
              />
              Equipment Rentals
            </NavLink>
          </li>
          <li className="nav-item mb-3 ">
            <NavLink
              to="/travel-guides"
              className="nav-link text-white fw-bold d-flex align-items-center"
              activeClassName="active"
            >
              <GiSecretBook
                className="me-2"
                style={{ height: "26px", width: "26px" }}
              />
              Travel Guides
            </NavLink>
          </li>
          <li className="nav-item mb-3 ">
            <NavLink
              to="/hotels"
              className="nav-link text-white fw-bold d-flex align-items-center"
              activeClassName="active"
            >
              <FaHotel
                className="me-2"
                style={{ height: "25px", width: "25px" }}
              />
              Hotels
            </NavLink>
          </li>
          <li className="nav-item mb-3">
            <NavLink
              to="/restaurants"
              className="nav-link text-white fw-bold d-flex align-items-center"
              activeClassName="active"
            >
              <IoRestaurantSharp
                className="me-2"
                style={{ height: "26px", width: "26px" }}
              />
              Restaurants
            </NavLink>
          </li>
          <li className="nav-item mb-3">
            <NavLink
              to="/authorities"
              className="nav-link text-white fw-bold d-flex align-items-center"
              activeClassName="active"
            >
              <IoShieldCheckmark
                className="me-2"
                style={{ height: "26px", width: "26px" }}
              />
              Authorities
            </NavLink>
          </li>
          <li className="nav-item mt-5">
            <Link
              to="/"
              className="nav-link text-white fw-bold d-flex align-items-center"
              activeClassName="active"
            >
              <RiLogoutBoxFill
                className="me-2"
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
