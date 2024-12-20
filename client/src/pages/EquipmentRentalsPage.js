import React, { useState, useEffect } from "react";
import { MdPersonSearch } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import axios from "axios";

const EquipmentRentalsPage = () => {
  const [searchTerm, setSearchtTerm] = useState("");
  const [equipments, setEquipments] = useState([]);
  const [statusFilter, setStatusFilter] = useState(1);

  const fetchEquipments = async (status) => {
    try {
      const response = await axios.get("http://localhost:5000/api/users/equipments", {
        params: { status },
      });
      setEquipments(response.data);
    } catch (error) {
      console.error("Error in fetching data", error);
    }
  };

  useEffect(() => {
    fetchEquipments(statusFilter);
  }, [statusFilter]);

  return (
    <div className="row g-0 mt-4 ms-4" style={{ marginRight: "15%" }}>
      <div className="container">
        <div className="d-flex mb-4">
          <button
            className={`btn me-2 ${statusFilter === 1 ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setStatusFilter(1)}
          >
            Accepted
          </button>
          <button
            className={`btn me-2 ${statusFilter === 0 ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setStatusFilter(0)}
          >
            Requests
          </button>
          <button
            className={`btn me-2 ${statusFilter === -1 ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setStatusFilter(-1)}
          >
            Rejected
          </button>
        </div>

        <div className="mb-3 mt-3 p-3" style={{ backgroundColor: "#EFF2FB" }}>
          <h5 className="card-title fs-4 fw-bold mb-3">Search</h5>
          <div className="d-flex mb-4 align-items-center position-relative">
            <MdPersonSearch className="me-2" style={{ fontSize: "45px" }} />
            <input
              type="text"
              className="form-control"
              placeholder="Enter name/ID here"
              value={searchTerm}
              onChange={(e) => setSearchtTerm(e.target.value)}
            />
            <span className="position-absolute" style={{ right: "15px" }}>
              <FaSearch className="fs-5" />
            </span>
          </div>

          {equipments.length > 0 ? (
            equipments
              .filter(
                (equipment) =>
                  equipment.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  equipment.id.toString().includes(searchTerm)
              )
              .map((equipment) => (
                <div className="mt-2" key={equipment.id}>
                  <div>
                    <div
                      className="d-flex align-items-center justify-content-between py-2 mb-2 bg-white"
                      style={{ borderRadius: "10px" }}
                    >
                      <div style={{ width: "25%" }}>
                        <IoPersonSharp className="ms-2 me-2" />
                        {equipment.name}
                      </div>
                      <div>ID.No - {equipment.id}</div>
                      <div className="me-2">
                        <Link to={`/equipment-request/${equipment.id}`}>
                          <button
                            className="btn"
                            style={{
                              backgroundColor: "#0069FF",
                              color: "white",
                              fontWeight: "bold",
                              borderRadius: "20px",
                            }}
                          >
                            View Request
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
          ) : (
            <div className="text-center mt-4">No equipment found for the selected status.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EquipmentRentalsPage;
