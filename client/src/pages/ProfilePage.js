import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { BsCameraFill } from "react-icons/bs"; // Import camera icon
const CURRENT_ADMIN_ID = 11;

function ProfilePage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    location: "",
    username: "",
    dateOfBirth: "",
    bio: "",
    profilePic: "",
    nicPassport: "",
  });

  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdminDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/users/${CURRENT_ADMIN_ID}`);
        const userData = response.data;

        const formattedDate = userData.date_of_birth
          ? new Date(userData.date_of_birth).toISOString().split('T')[0]
          : '';

        setFormData({
          firstName: userData.first_name || "",
          lastName: userData.last_name || "",
          email: userData.email || "",
          nicPassport: userData.nic_passport || "",
          phoneNumber: userData.phone_number || "",
          location: userData.location || "",
          username: userData.username || "",
          dateOfBirth: formattedDate, // Set the formatted date
          profilePic: userData.profile_pic || "",
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching admin details:", error);
        setError("Failed to fetch admin details.");
        setLoading(false);
      }
    };

    fetchAdminDetails();
  }, []);

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
          profilePic: reader.result,
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.put(`http://localhost:5000/api/users/${CURRENT_ADMIN_ID}`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row g-0 mt-4 ms-4" style={{ marginRight: "15%" }}>
      <div className="container">
        <div className="card shadow-lg" style={{ backgroundColor: "#dde6ed" }}>
          <div className="card-body m-2">
            <div className="d-flex align-items-center mb-4">
              <div className="me-3 position-relative">
                <div
                  className="position-relative"
                  style={{
                    width: "90px",
                    height: "90px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    cursor: "pointer",
                    border: "2px solid #007bff",
                  }}
                  onClick={handleImageClick}
                >
                  <img
                    src={"data:image/jpg;base64," + formData.profilePic}
                    alt="Profile"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                {/* Camera icon outside of the profile picture div, positioned bottom-right */}
                <div
                  className="position-absolute bottom-0 end-0 mb-3 me-3"
                  style={{
                    zIndex: 10,
                    cursor: "pointer",
                    transform: "translate(50%, 50%)",
                  }}
                  onClick={handleImageClick}
                >
                  <div
                    className="bg-dark text-white rounded-circle"
                    style={{
                      width: "25px",
                      height: "25px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      opacity: 0.8,
                    }}
                  >
                    <BsCameraFill />
                  </div>
                </div>
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
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="dateOfBirth" className="form-label fw-bold">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
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
              <div className="mb-3">
                <label htmlFor="location" className="form-label fw-bold">
                  Home Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label fw-bold">
                  Contact Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-primary fw-bold mt-2"
                  disabled={loading}
                >
                  {loading ? "Updating..." : "Update Profile"}
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
