import React, {useState} from "react";
import User from "../components/User";

function VehicleRentalsPage() {
  const initialVehicleRentals = [
    {
      name: "Ms. Tharindu",
      id: "1254851",
      status: "accepted",
      id_type: "service provider",
    },
    {
      name: "Ms. Senanayake",
      id: "1254852",
      status: "rejected",
      id_type: "service provider",
    },
    {
      name: "Ms. David",
      id: "1254853",
      status: "requested",
      id_type: "service provider",
    },
    {
      name: "Ms. Mushahid",
      id: "1254854",
      status: "accepted",
      id_type: "service provider",
    },
    {
      name: "Ms. Aamir",
      id: "1254855",
      status: "requested",
      id_type: "service provider",
    },
  ];

  const [vehicle_rentals, setVehicleRentals] = useState(initialVehicleRentals);
  const [activeTab, setActiveTab] = useState("accepted");

  const filteredVehicleRentals = vehicle_rentals.filter(
    (vehicle_rental) => vehicle_rental.status === activeTab
  );

  const updateStatus = (id, newStatus) => {
    setVehicleRentals((prevVehicleRentals) =>
      prevVehicleRentals.map((vehicle_rental) =>
        vehicle_rental.id === id
          ? { ...vehicle_rental, status: newStatus }
          : vehicle_rental
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
          users={filteredVehicleRentals}
          id_type="vehicle rentals"
          type={activeTab}
          updateStatus={updateStatus}
        />
      </div>
    </div>
  );
}

export default VehicleRentalsPage;
