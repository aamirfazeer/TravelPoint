import React, { useState } from "react";
import User from "../components/User";

function TravellersPage() {
  const initialTravellers = [
    {
      name: "Mr. Supun",
      id: "6",
      status: "accepted",
      id_type: "traveller",
    },
    {
      name: "Mr. Abdullah",
      id: "125485",
      status: "rejected",
      id_type: "traveller",
    },
    {
      name: "Mr. jhone",
      id: "1254853",
      status: "requested",
      id_type: "traveller",
    },
    {
      name: "Mr. Mushahid",
      id: "12",
      status: "accepted",
      id_type: "traveller",
    },
    {
      name: "Mr. Kevin",
      id: "1254855",
      status: "requested",
      id_type: "traveller",
    },
  ];

  const [travellers, setTravellers] = useState(initialTravellers);
  const [activeTab, setActiveTab] = useState("accepted");

  const filteredTravellers = travellers.filter(
    (traveller) => traveller.status === activeTab
  );

  const updateStatus = (id, newStatus) => {
    setTravellers((prevTravellers) =>
      prevTravellers.map((traveller) =>
        traveller.id === id ? { ...traveller, status: newStatus } : traveller
      )
    );
  };

  return (
    <div className="row g-0 mt-4 ms-4" style={{ marginRight: "15%" }}>
      <div className="container">
        <div className="d-flex mb-4">
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
        </div>
        <User
          users={filteredTravellers}
          id_type="traveller"
          type={activeTab}
          updateStatus={updateStatus}
        />
      </div>
    </div>
  );
}

export default TravellersPage;

