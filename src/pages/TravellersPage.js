import React from "react";
import User from "../components/User";


function TravellersPage() {
  const travelers = [
    {
      name: "Ms. Tharindu",
      id: "1254852",
      id_type: "traveller",
    },
    {
      name: "Ms. Senanayake",
      id: "1254852",
      id_type: "traveller",
    },
    {
      name: "Ms. David",
      id: "1254852",
      id_type: "traveller",
    },
    {
      name: "Ms. Mushahid",
      id: "1254852",
      id_type: "traveller",
    },
    {
      name: "Ms. Aamir",
      id: "1254852",
      id_type: "traveller",
    },
  ];

  return (
    <div className="row g-0 mt-4 ms-4" style={{ marginRight: "15%" }}>
      <div className="container">
        <User users={travelers} type="Traveller" />
      </div>
    </div>
  );
}



export default TravellersPage;
