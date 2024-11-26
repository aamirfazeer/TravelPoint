import React, { useState } from "react";
import User from "../components/User";

function EquipmentRentalsPage() {
  const initialEquipmentRentals = [
    {
      name: "Mr. Yuhanga",
      id: "1254851",
      status: "accepted",
      id_type: "service provider",
    },
    {
      name: "Mr. Induwara",
      id: "1254852",
      status: "rejected",
      id_type: "service provider",
    },
    {
      name: "Ms. Amali",
      id: "1254853",
      status: "requested",
      id_type: "service provider",
    },
    {
      name: "Ms. Kulathunga",
      id: "1254854",
      status: "accepted",
      id_type: "service provider",
    },
    {
      name: "Ms. Lakshika",
      id: "1254855",
      status: "requested",
      id_type: "service provider",
    },
  ];

  const [equipment_rentals, setEquipmentRentals] = useState(
    initialEquipmentRentals
  );
  const [activeTab, setActiveTab] = useState("accepted");

  const filteredEquipmentRentals = equipment_rentals.filter(
    (equipment_rental) => equipment_rental.status === activeTab
  );

  const updateStatus = (id, newStatus) => {
    setEquipmentRentals((prevEquipmentRentals) =>
      prevEquipmentRentals.map((equipment_rental) =>
        equipment_rental.id === id
          ? { ...equipment_rental, status: newStatus }
          : equipment_rental
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
          users={filteredEquipmentRentals}
          updateStatus={updateStatus}
          type={activeTab}
          id_type="equipment rentals"
        />
      </div>
    </div>
  );
}

export default EquipmentRentalsPage;
