import React from "react";
import image1 from "../assets/images/traveller.jpg";
import image2 from "../assets/images/vehicle.jpg";
import image3 from "../assets/images/equipment.jpg";
import image4 from "../assets/images/guide.jpg";
import image5 from "../assets/images/hotel.jpg";
import image6 from "../assets/images/restaurant.jpg";
import image7 from "../assets/images/authority.jpg";
import "./AdminHomePage.css";

function AdminHomePage() {
  const images1 = [
    { src: image1, title: "Traveller" },
    { src: image2, title: "Vehicle Rental" },
    { src: image3, title: "Equipment Rental" },
    { src: image4, title: "Travel Guide" },
    { src: image5, title: "Hotel" },
    { src: image6, title: "Restaurant" },
    { src: image7, title: "Authority" },
  ];

  return (
    <div className="row g-0 ms-4 mt-4">
      <div className="container justify-content-center">
        <div className="card shadow-lg">
          <div
            className="card-body"
            style={{ backgroundColor: "#dde6ed", padding: "2% 2% 2% 2%" }}
          >
            <div
              className="row align-items-center justify-content-center g-0"
              style={{ marginLeft: "0" }}
            >
              {images1.map((image, index) => (
                <div className="col-md-3" key={index}>
                  <div className="image-container d-block ms-4 mt-2">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="img-fluid rounded"
                    />
                    <div className="overlay">
                      <div className="text">{image.title} (12)</div>
                    </div>
                    <div className="mt-2 text-center me-5">
                      <h6 style={{ fontWeight: "bold" }}>{image.title}</h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHomePage;
