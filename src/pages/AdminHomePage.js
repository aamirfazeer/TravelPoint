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
                    style={{ width: "200px", height: "200px", marginLeft: "8%" }}
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      className="img-fluid rounded"
                    />
                    <div className="overlay" style={{overlay}}>
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

const overlay = {
  position: "absolute",
  top: "0",
  bottom: "0",
  left: "0",
  right: "0",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  overflow: "hidden",
  width: "100%",
  height: "100%",
  transition: ".5s ease",
  BorderRadius: "0.25rem"
};
