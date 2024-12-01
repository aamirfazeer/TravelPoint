import React from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
import person from "../assets/images/person1.png";
import { IoMailOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";

const NavBar = ({user}) => {
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
      case "/profile":
        return "Profile";
      case "/guide-request":
        return "Guide Request"; 
      case "/equipment-request":
        return "Equipment Request";
      case "/vehicle-request":
        return "Vehicle Request"; 
      default:
        return "";
    }
  };

  return (
    <div className="row g-0">
      <div
        className="col-md"
        style={{
          justifyContent: "left",
          marginTop: "1.4%",
          marginLeft: "3.2%",
          marginBottom: "24px",
        }}
      >
        <h1 className="fs-2" style={{ fontWeight: "bold", color: "grey" }}>
          {getTitle(location.pathname)}
        </h1>
      </div>
      <div
        className="col-md d-flex justify-content-right mt-3 mb-3 me-3"
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
          <Link to="/profile">
            <img
              src={person}
              className="img-rounded me-2"
              style={{ width: "50px", height: "50px" }}
            />
          </Link>
          <div className="d-flex flex-column g-0 m-0 p-0">
            <h2 className="fs-5" style={{ fontWeight: "bold" }}>
              {user?.first_name} {user?.last_name}
            </h2>
            <h6 className="fs-9">System Admin</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar