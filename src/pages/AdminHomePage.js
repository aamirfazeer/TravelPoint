import React from "react";
import traveller from "../assets/images/traveller.jpg";
import vehicle_rental from "../assets/images/vehicle.jpg";
import equipment_rental from "../assets/images/equipment.jpg";
import travel_guide from "../assets/images/guide.jpg";
import hotel from "../assets/images/hotel.jpg";
import restaurant from "../assets/images/restaurant.jpg";
import authority from "../assets/images/authority.jpg";
import ImageCard from "../components/ImageCard";

function AdminHomePage() {
  const images1 = [
    { src: traveller, title: "Traveller", to: "/travellers" },
    { src: vehicle_rental, title: "Vehicle Rental", to: "/vehicle-rentals" },
    {
      src: equipment_rental,
      title: "Equipment Rental",
      to: "/equipment-rentals",
    },
    { src: travel_guide, title: "Travel Guide", to: "/travel-guides" },
    { src: hotel, title: "Hotel", to: "/hotels" },
    { src: restaurant, title: "Restaurant", to: "/restaurants" },
    { src: authority, title: "Authority", to: "/authorities" },
  ];

  return (
    <div className="row g-0">
      <div className="container">
        <div className="row justify-content-center">
          {images1.map((image, index) => (
            <div className="col-md-3" key={index}>
              <ImageCard image={image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminHomePage;
