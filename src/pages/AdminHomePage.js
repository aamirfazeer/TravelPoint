import React from "react";
import traveller from "../assets/images/traveller.jpg";
import vehicle from "../assets/images/vehicle.jpg";
import equipment from "../assets/images/equipment.jpg";
import guide from "../assets/images/guide.jpg";
import hotel from "../assets/images/hotel.jpg";
import restaurant from "../assets/images/restaurant.jpg";
import authority from "../assets/images/authority.jpg";
import Card from "../components/Card";

function AdminHomePage() {
  const images1 = [
    { src: traveller, title: "Traveller", to: "/travellers" },
    { src: vehicle, title: "Vehicle Rental", to: "/vehicle-rentals" },
    { src: equipment, title: "Equipment Rental", to: "/equipment-rentals" },
    { src: guide, title: "Travel Guide", to: "/travel-guides" },
    { src: hotel, title: "Hotel", to: "/hotels" },
    { src: restaurant, title: "Restaurant", to: "/restaurants" },
    { src: authority, title: "Authority", to: "/authorities" },
  ];

  return (
    <div className="row g-0 ms-2 justify-content-center">
      {images1.map((image, index) => (
        <div
          className="col-md-3 justify-content-center g-0 m-0 p-0"
          style={{ height: "295px" }}
        >
          <Card image={image} />
        </div>
      ))}
    </div>
  );
}

export default AdminHomePage;
