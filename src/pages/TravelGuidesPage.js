import React, { useState } from "react";
import User from "../components/User";

function TravelGuidesPage() {
  const travel_guides = [
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

  const [activeTab, setActiveTab] = useState("accepted");

  const filteredTravelGuides = travel_guides.filter(
    (travel_guide) => travel_guide.status === activeTab
  );

  return (
    <div className="row g-0 mt-4 ms-4" style={{ marginRight: "15%" }}>
      <div className="container">
        <div className="d-flex mb-4">
          <button
            className={`btn btn-outline-primary me-2 ${
              activeTab === "accepted" ? "active" : ""
            }`}
            onClick={() => setActiveTab("accepted")}
          >
            Accepted
          </button>
          <button
            className={`btn btn-outline-primary me-2 ${
              activeTab === "rejected" ? "active" : ""
            }`}
            onClick={() => setActiveTab("rejected")}
          >
            Rejected
          </button>
          <button
            className={`btn btn-outline-primary ${
              activeTab === "requested" ? "active" : ""
            }`}
            onClick={() => setActiveTab("requested")}
          >
            Requested
          </button>
        </div>
        <User
          users={filteredTravelGuides}
          type={activeTab}
          id_type="travel guides"
        />
      </div>
    </div>
  );
}

export default TravelGuidesPage;
