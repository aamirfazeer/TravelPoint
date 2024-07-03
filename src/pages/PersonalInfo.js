import React from "react";
import person from "../assets/images/person.png";
import { NavLink } from "react-router-dom";

const PersonalInfo = () => {
  return (
    <div className="row g-0 mt-5 ms-5" style={{ marginRight: "15%" }}>
      <div className="container">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/personal-info"
            >
              Personal Information
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/travel-log"
            >
              Travel Log
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/booking-info"
            >
              Booking Information
            </NavLink>
          </li>
        </ul>
        <div className="card" style={{ backgroundColor: "#EFF2FB" }}>
          <div className="card-body">
            <div className="d-flex align-items-center mb-3">
              <div class="me-3">
                <img
                  src={person}
                  className="img-rounded"
                  style={{ width: "50px", height: "50px" }}
                />
              </div>
              <div>
                <h5 className="card-title mb-0">Ms. Perera</h5>
                <a href="#" className="text-decoration-none">
                  Traveller ID #1254852
                </a>
              </div>
            </div>
            <form>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input type="text" className="form-control" id="firstName" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input type="text" className="form-control" id="lastName" />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Home Address
                </label>
                <input type="text" className="form-control" id="address" />
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="contactNumber" className="form-label">
                    Contact Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="contactNumber"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="nicPassport" className="form-label">
                    NIC/Passport
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nicPassport"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
