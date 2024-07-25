import React from "react";
import User from "../components/User";

function TravellersPage() {
  const travellers = [
    {
      name: "Ms. Tharindu",
      id: "1254851",
      type: "traveller",
      id_type: "traveller",
    },
    {
      name: "Ms. Senanayake",
      id: "1254852",
      type: "traveller",
      id_type: "traveller",
    },
    {
      name: "Ms. David",
      id: "1254853",
      type: "traveller",
      id_type: "traveller",
    },
    {
      name: "Ms. Mushahid",
      id: "1254854",
      type: "traveller",
      id_type: "traveller",
    },
    {
      name: "Ms. Aamir",
      id: "1254855",
      type: "traveller",
      id_type: "traveller",
    },
  ];


  return (
    <div className="row g-0 mt-4 ms-4" style={{ marginRight: "15%" }}>
      <div className="container">
        <User users={travellers} type="traveller" />
      </div>
    </div>
  );
}

export default TravellersPage;
