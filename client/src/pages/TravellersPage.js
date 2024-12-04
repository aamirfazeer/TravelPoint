import React, { useState, useEffect } from "react";
import User from "../components/User";
import axios from "axios";

function TravellersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`/api/users/travellers`);
        setUsers(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUser();
  }, []);


  // const [travellers, setTravellers] = useState(initialTravellers);
  // const [activeTab, setActiveTab] = useState("accepted");

  // const filteredTravellers = travellers.filter(
  //   (traveller) => traveller.status === activeTab
  // );

  // const updateStatus = (id, newStatus) => {
  //   setTravellers((prevTravellers) =>
  //     prevTravellers.map((traveller) =>
  //       traveller.id === id ? { ...traveller, status: newStatus } : traveller
  //     )
  //   );
  // };

  return (
    <div className="row g-0 mt-4 ms-4 mb-4" style={{ marginRight: "15%"}}>
      <div className="container">
        {/* <div className="d-flex mb-4">
          <button
            className={`btn me-2 ${
              activeTab === "accepted" ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => setActiveTab("accepted")}
          >
            Accepted
          </button>
          <button
            className={`btn me-2 ${
              activeTab === "rejected" ? "btn-danger" : "btn-outline-danger"
            }`}
            onClick={() => setActiveTab("rejected")}
          >
            Rejected
          </button>
          <button
            className={`btn ${
              activeTab === "requested" ? "btn-warning" : "btn-outline-warning"
            }`}
            onClick={() => setActiveTab("requested")}
          >
            Requested
          </button>
        </div> */}
        <User
          users={users}
          id_type="traveller"
          // type={activeTab}
          // updateStatus={updateStatus}
        />
      </div>
    </div>
  );
}

export default TravellersPage;