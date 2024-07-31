import React, { useState } from "react";
import User from "../components/User";

function RestaurantsPage() {
  const initialRestaurants = [
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

  const [restaurants, setRestaurants] = useState(initialRestaurants);
  const [activeTab, setActiveTab] = useState("accepted");

  const filteredRestaurants = restaurants.filter(
    (restaurant) => restaurant.status === activeTab
  );

  const updateStatus = (id, newStatus) => {
    setRestaurants((prevRestaurants) =>
      prevRestaurants.map((restaurant) =>
        restaurant.id === id ? { ...restaurant, status: newStatus } : restaurant
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
          users={filteredRestaurants}
          type={activeTab}
          updateStatus={updateStatus}
          id_type="restaurants"
        />
      </div>
    </div>
  );
}

export default RestaurantsPage;
