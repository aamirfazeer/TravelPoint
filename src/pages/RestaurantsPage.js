import React from "react";
import User from "../components/User";

function RestaurantsPage() {
  const restaurants = [
    {
      name: "Ms. Tharindu",
      id: "1254851",
      type: "restaurant",
      id_type: "service provider",
    },
    {
      name: "Ms. Senanayake",
      id: "1254852",
      type: "restaurant",
      id_type: "service provider",
    },
    {
      name: "Ms. David",
      id: "1254853",
      type: "restaurant",
      id_type: "service provider",
    },
    {
      name: "Ms. Mushahid",
      id: "1254854",
      type: "restaurant",
      id_type: "service provider",
    },
    {
      name: "Ms. Aamir",
      id: "1254855",
      type: "restaurant",
      id_type: "service provider",
    },
  ];


  return (
    <div className="row g-0 mt-4 ms-4" style={{ marginRight: "15%" }}>
      <div className="container">
        <User users={restaurants} type="restaurant" />
      </div>
    </div>
  );
}

export default RestaurantsPage;
