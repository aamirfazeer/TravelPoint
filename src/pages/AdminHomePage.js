import React from "react";
import image1 from "../assets/traveller.jpg";
import image2 from "../assets/vehicle.jpg";
import image3 from "../assets/equipment.jpg";
import image4 from "../assets/guide.jpg";
import image5 from "../assets/hotel.jpg";
import image6 from "../assets/restaurant.jpg";
import image7 from "../assets/authority.jpg";
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
    <div className="row g-0 mt-4 ms-4" style={{ marginRight: "18%" }}>
      <div className="container">
        <div className="card">
          <div
            className="card-body d-flex"
            style={{ backgroundColor: "#EFF2FB", padding: "2% 2% 1% 2%" }}
          >
            <div className="row justify-content-center g-0">
              {images1.map((image, index) => (
                <div className="col-md-3" key={index}>
                  <div
                    className="image-container justify-content-center mt-2"
                    style={{ width: "180px", height: "180px", marginLeft: "12%" }}
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      className="img-fluid rounded"
                    />
                    <div className="overlay">
                      <div className="text">{image.title} (12)</div>
                    </div>
                  </div>
                  <div className="mt-2 text-center">
                    <h6 style={{ fontWeight: "bold" }}>{image.title}</h6>
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
