import React from 'react'
import "./ImageCard.css"
import { Link } from "react-router-dom";

function ImageCard({image}) {
  return (
    <div className="image-card">
      <div className="card-body">
        <Link to={image.to}>
          <div className="cardimage">
            <img
              src={image.src}
              alt={image.title}
              className="img-fluid rounded"
            />
            <div className="overlay">
              <div className="text">{image.title} (12)</div>
            </div>
          </div>
        </Link>
        <div className="card-title flex-column">
          <h6 className="fw-bold" style={{ color: "grey" }}>
            {image.title}
          </h6>
        </div>
      </div>
    </div>
  );
}

export default ImageCard