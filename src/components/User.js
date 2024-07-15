import React from "react";
import { Link } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";
import { RiUserSearchFill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";

function User({ users, type }) {
  return (
      <div className="card shadow-lg">
        <div className="card-body p-4" style={{ backgroundColor: "#dde6ed" }}>
          <div className="mb-3">
            <h5 className="card-title fs-4 fw-bold mb-3">Search {type}</h5>
            <div
              className="d-flex mb-4 align-items-center"
              style={{ width: "80%" }}
            >
              <RiUserSearchFill
                style={{ height: "35px", width: "35px", marginRight: "15px" }}
              />
              <input
                type="text"
                className="form-control"
                placeholder="Enter name/ID here"
              />
              <span
                className="position-absolute translate-top-y me-3 align-items-center "
                style={{ marginLeft: "72.5%" }}
              >
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
                  className="d-flex align-items-center justify-content-between py-2 bg-white mb-2"
                  style={{ borderRadius: "10px" }}
                >
                  <div style={{ width: "20%" }}>
                    <IoPersonSharp className="ms-2 me-2" />
                    {user.name}
                  </div>
                  <div style={{ textAlign: "left" }}>
                    {user.id_type} ID #{user.id}
                  </div>
                  <div>
                    <Link to="/personal-info">
                      <button
                        className="btn btn-sm me-2"
                        style={{
                          backgroundColor: "#046197",
                          color: "white",
                          margin: "2px",
                          borderRadius: "5px",
                        }}
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

export default User;
