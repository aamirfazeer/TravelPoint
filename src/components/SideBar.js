import React from "react";
import { Link } from "react-router-dom";
import placeholder from "../assets/placeholder.jpg";

function SideBar() {
  return (
    <div
      className="col-md-2 text-white no-gutters"
      style={{ backgroundColor: "#074173" }}
    >
      <div className="text-center" style={{ height: "160px" }}>
        <img
          src={placeholder}
          className="img-rounded text-center"
          style={{
            width: "100px",
            height: "100px",
            marginTop: "40px",
            borderRadius: "50px",
          }}
        />
      </div>
      <hr
        className="ms-3 me-3 text-white font-weight-bold"
        style={{ fontWeight: "bold" }}
      ></hr>
      <div style={{ marginTop: "12%" }}>
        <ul className="nav flex-column m-3">
          <li className="nav-item mb-3">
            <Link
              to="/travellers"
              className="nav-link text-white"
              activeClassName="active"
              style={{ fontWeight: "bold" }}
            >
              Travellers
            </Link>
          </li>
          <li className="nav-item mb-3">
            <Link
              to="/vehicle-rentals"
              className="nav-link text-white"
              activeClassName="active"
              style={{ fontWeight: "bold" }}
            >
              Vehicle Rentals
            </Link>
          </li>
          <li className="nav-item mb-3">
            <Link
              to="/equipment-rentals"
              className="nav-link text-white"
              activeClassName="active"
              style={{ fontWeight: "bold" }}
            >
              Equipment Rentals
            </Link>
          </li>
          <li className="nav-item mb-3">
            <Link
              to="/travel-guides"
              className="nav-link text-white"
              activeClassName="active"
              style={{ fontWeight: "bold" }}
            >
              Travel Guides
            </Link>
          </li>
          <li className="nav-item mb-3">
            <Link
              to="/hotels"
              className="nav-link text-white"
              activeClassName="active"
              style={{ fontWeight: "bold" }}
            >
              Hotels
            </Link>
          </li>
          <li className="nav-item mb-3">
            <Link
              to="/restaurants"
              className="nav-link text-white"
              activeClassName="active"
              style={{ fontWeight: "bold" }}
            >
              Restaurants
            </Link>
          </li>
          <li className="nav-item mb-3">
            <Link
              to="/authorities"
              className="nav-link text-white"
              activeClassName="active"
              style={{ fontWeight: "bold" }}
            >
              Authorities
            </Link>
          </li>
          <li className="mt-5">
            <Link
              to="/"
              className="nav-link text-white"
              activeClassName="active"
              style={{ fontWeight: "bold" }}
            >
              {">>"}  Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
