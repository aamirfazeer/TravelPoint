import React, { useState, useRef } from "react";
import person from "../assets/images/person1.png";

function ProfilePage() {
  const [formData, setFormData] = useState({
    firstName: "Usama",
    lastName: "Puward",
    email: "usama1234@gmail.com",
    address: "123 Main St, Colombo, Sri Lanka",
    contactNumber: "0771234567",
    nicPassport: "1234567890123456",
    profileImage: person,
  });

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData((prevData) => ({
          ...prevData,
          profileImage: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the server or update state
    console.log("Form submitted:", formData);
  };

  return (
    <div className="row g-0 mt-4 ms-4" style={{ marginRight: "15%" }}>
      <div className="container">
        <div className="card shadow-lg" style={{ backgroundColor: "#dde6ed" }}>
          <div className="card-body m-2">
            <div className="d-flex align-items-center mb-4">
              <div className="me-3 position-relative">
                <img
                  src={formData.profileImage}
                  className="img-rounded-circle"
                  style={{ width: "80px", height: "80px", cursor: "pointer" }}
                  alt="Profile"
                  onClick={handleImageClick}
                />
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                  accept="image/*"
                />
              </div>
              <div>
                <h5 className="card-title mb-0 fw-bold fs-4">
                  {formData.firstName} {formData.lastName}
                </h5>
              </div>
            </div>
            <form className="mt-4" onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="firstName" className="form-label fw-bold">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="lastName" className="form-label fw-bold">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-bold">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label fw-bold">
                  Home Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="contactNumber" className="form-label fw-bold">
                    Contact Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="contactNumber"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="nicPassport" className="form-label fw-bold">
                    NIC/Passport
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nicPassport"
                    name="nicPassport"
                    value={formData.nicPassport}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary fw-bold mt-2" style={{width:"20%"}}>
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
