import React, {useState, useEffect} from "react";
import { MdPersonSearch } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import axios from "axios";

const VehicleRentalsPage = () => {

  const [vehicles, setVehicles] = useState([]);
  const [statusFilter, setStatusFilter] = useState(1);

  const fetchVehicles = async(status)=> {
    try{
      const response = await axios.get("http://localhost:5000/api/users/vehicles", {
        params: {status}
      });
      setVehicles(response.data);
    }catch(error){
      console.error("Error in fetching data", error);
    }
  };

  useEffect(() => {
    fetchVehicles(statusFilter)
  }, [statusFilter]);
  
  return (
    <div className="row g-0 mt-4 ms-4" style={{ marginRight: "15%" }}>
      <div className="container">

        <div className="d-flex mb-4">
          <button
            className={`btn me-2 ${statusFilter ===1 ? "btn-primary" : ""}`} 
            onClick={() => setStatusFilter(1)}
            >
            Accepted
          </button>
          <button
            className={`btn me-2 ${statusFilter === 0 ? "btn-primary" : ""}`}
            onClick={() => setStatusFilter(0)}
            >
            Requests
          </button>
          <button
          className={`btn me-2 ${statusFilter === -1 ? "btn-primary" : ""}`}
          onClick={() => setStatusFilter(-1)}   
          >   
            Rejected
          </button>
        </div>

        <div className="mb-3 mt-3" style={{ backgroundColor: "#EFF2FB", padding:"20px" }} >
          <h5 className="card-title fs-4 fw-bold mb-3">
            Search 
          </h5>
          <div className="d-flex mb-4 align-items-center">
            <MdPersonSearch className="me-2" style={{ fontSize: "45px" }} />
            <input
              type="text"
              className="form-control"
              placeholder="Enter name/ID here"/>
            <span className="position-absolute" style={{ marginLeft: "855px" }}>
              <FaSearch className="fs-5" />
            </span>
          </div>

      {vehicles.length > 0 ?(
        vehicles.map((vehicle) => (
<div className="mt-2">
      <div className="" >
          <div className="d-flex align-items-center justify-content-between py-2 mb-2 bg-white"
            style={{ borderRadius: "10px" }}>
              <div style={{width:"25%"}}>
                <IoPersonSharp className="ms-2 me-2" />
                {vehicle.type}
              </div>
              <div>
                   ID.No - {vehicle.id}
              </div>
              <div className="me-2">
                <Link to={`/vehicle-request/${vehicle.id}`}>
                  <button
                    className="btn "
                    style={{ backgroundColor: "#0069FF", color: "white", fontWeight:"bold", borderRadius:"20px" }}>
                    View Request
                    </button>
                </Link>
              </div>
            </div>                        
        </div>
    </div>        ))
        
      ): (
        <p>No vehicles Found!</p>
      )}
      </div>

      </div>
    </div>
  );
}

export default VehicleRentalsPage;
