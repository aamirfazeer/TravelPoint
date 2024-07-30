import React, { useState } from "react";
import User from "../components/User";

function HotelPage() {
  const initialHotels = [
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

  const [hotels, setHotels] = useState(initialHotels);
  const [activeTab, setActiveTab] = useState("accepted");

  const filteredHotels = hotels.filter(
    (hotel) => hotel.status === activeTab
  );

  const updateStatus = (id, newStatus) => {
    setHotels((prevHotels) =>
      prevHotels.map((hotel) =>
        hotel.id === id ? { ...hotel, status: newStatus } : hotel
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
          users={filteredHotels}
          updateStatus={updateStatus}
          type={activeTab}
          id_type="hotels"
        />
      </div>
    </div>
  );
}

export default HotelPage;
