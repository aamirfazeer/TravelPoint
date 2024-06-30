import React from 'react'
import { Link } from 'react-router-dom'
import placeholder from '../assets/placeholder.jpg'

function NavBar() {
  return (
    <div class="row g-0 mt-2" style={{ marginLeft: "35px" }}>
      <div class="col-md-1 m-3">
        <Link to="/home">
          <img
            src={placeholder}
            className="img-rounded"
            style={{ width: "75px", height: "75px" }}
          />
        </Link>
      </div>
      <div class="col-md-9 m-3">
        <div className="d-flex flex-column justify-content-center">
          <h2 style={{ fontWeight: "bold" }}>Administrator Name</h2>
          <h6>System Admin</h6>
        </div>
      </div>
    </div>
  );
}

export default NavBar