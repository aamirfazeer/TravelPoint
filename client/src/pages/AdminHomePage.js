import React from "react";
import traveller from "../assets/images/traveller.jpg";
import vehicle from "../assets/images/vehicle.jpg";
import equipment from "../assets/images/equipment.jpg";
import Report from "../assets/images/report.png";
import guide from "../assets/images/guide.jpg";
import Card from "../components/Card";

function AdminHomePage() {
  const images1 = [
    { src: traveller, title: "Traveller", to: "/travellers" },
    { src: vehicle, title: "Vehicle Rental", to: "/vehicle-rentals" },
    { src: equipment, title: "Equipment Rental", to: "/equipment-rentals" },
    { src: guide, title: "Travel Guide", to: "/travel-guides" },
    { src: Report, title: "Report", to: "/Report" },
  ];

  return (
    <div
      className="container"
      style={{
        maxWidth: "1200px", // Adjust this to control the overall width of the grid
        paddingLeft: "0px",
        paddingRight: "40px",
      }}
    >
      <div className="row justify-content-center">
        {images1.slice(0, 3).map((image, index) => (
          <div
            key={index}
            className="col-md-3 d-flex justify-content-center"
            style={{ height: "295px" }}
          >
            <Card image={image} />
          </div>
        ))}
      </div>
      <div className="row justify-content-center">
        {images1.slice(3).map((image, index) => (
          <div
            key={index}
            className="col-md-3 d-flex justify-content-center"
            style={{ height: "295px" }}
          >
            <Card image={image} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminHomePage;
