import React from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
import placeholder from "../assets/images/placeholder.jpg";
import { IoMailOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";

function NavBar() {
  const location = useLocation();

  const getTitle = (path) => {
    switch (path) {
      case "/home":
        return "Dashboard";
      case "/travellers":
        return "Travellers";
      case "/vehicle-rentals":
        return "Vehicle Rentals";
      case "/equipment-rentals":
        return "Equipment Rentals";
      case "/travel-guides":
        return "Travel Guides";
      case "/hotels":
        return "Hotels";
      case "/restaurants":
        return "Restaurants";
      case "/authorities":
        return "Authorities";
      default:
        return "Profile";
    }
  };

  return (
    <div class="row g-0">
      <div
        class="col-md"
        style={{ justifyContent: "left", marginTop: "2.4%", marginLeft: "3.2%" }}
      >
        <h1 class="fs-2" style={{ fontWeight: "bold", color:"grey" }}>
          {getTitle(location.pathname)}
        </h1>
      </div>
      <div
        class="col-md d-flex justify-content-right mt-3 mb-3 me-3"
        style={{ justifyContent: "right" }}
      >
        <IoMailOutline
          className="mt-2 me-4 "
          style={{ height: "35px", width: "35px" }}
        />
        <IoNotificationsOutline
          className="mt-2 me-4"
          style={{ height: "35px", width: "35px" }}
        />
        <div className="d-flex">
          <Link to="/home">
            <img
              src={placeholder}
              className="img-rounded me-2"
              style={{ width: "50px", height: "50px" }}
            />
          </Link>
          <div className="d-flex flex-column g-0 m-0 p-0">
            <h2 className="fs-5" style={{ fontWeight: "bold" }}>
              Usama Puward
            </h2>
            <h6 className="fs-9">System Admin</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar