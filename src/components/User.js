import React from 'react'
import { IoPersonSharp } from "react-icons/io5";
import { MdPersonSearch } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

function User({ users, type }) {
  return (
    <div className="card shadow-lg">
      <div className="card-body p-4" style={{ backgroundColor: "#EFF2FB" }}>
        <div className="mb-3">
          <h5 className="card-title fs-4 fw-bold mb-3">Search {type}</h5>
          <div className="d-flex mb-4 align-items-center">
            <MdPersonSearch className="me-2" style={{ fontSize: "45px" }} />
            <input
              type="text"
              className="form-control"
              placeholder="Enter name/ID here"
            />
            <span className="position-absolute" style={{ marginLeft: "855px" }}>
              <FaSearch className="fs-5" />
            </span>
          </div>
        </div>
        <hr />
        <div className="mt-4">
          <div>
            {users.map((user, index) => (
              <div
                key={index}
                className="d-flex align-items-center justify-content-between py-2 mb-2 bg-white"
                style={{ borderRadius: "10px" }}
              >
                <div style={{ width: "20%" }}>
                  <IoPersonSharp className="ms-2 me-2" />
                  {user.name}
                </div>
                <div style={{ textAlign: "right" }}>
                  {user.id_type} ID #{user.id}
                </div>
                <div>
                  <Link to="/personal-info">
                    <button
                      className="btn btn-sm me-2"
                      style={{ backgroundColor: "#046197", color:"white" }}
                    >
                      View Profile
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default User