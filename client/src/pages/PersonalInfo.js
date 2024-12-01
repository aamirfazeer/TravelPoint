import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import TabLayout from "../components/TabLayout";
import person from "../assets/images/placeholder.jpg";

const PersonalInfo = () => {
  const { id: userId } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`/api/users/${userId}`);
        setUser(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [userId]);

  const pro_pic = user.profile_pic ? `data:image/jpeg;base64,${user.profile_pic}` : person;

  return (
    <TabLayout>
      <div className="d-flex align-items-center mb-4">
        <div className="me-3">
          <img
            src={pro_pic}
            className="rounded-circle"
            style={{ width: "50px", height: "50px" }}
          />
        </div>
        <div>
          <h5 className="card-title mb-0 fw-bold fs-4">{user.first_name} {user.last_name}</h5>
          <a href="#" className="text-decoration-none">
            ID: {user.id}  |   @{user.username ? user.username : "<unavailable>"}
          </a>
        </div>
      </div>
      <form className="mt-4">
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label fw-bold">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              defaultValue={user.first_name}
              readOnly
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
              defaultValue={user.last_name}
              readOnly
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
            defaultValue={user.email}
            readOnly
          />
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label fw-bold">
            Location
          </label>
          <input
            type="text"
            className="form-control"
            id="location"
            defaultValue={user.location}
            readOnly
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
              defaultValue={user.phone_number}
              readOnly
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
              defaultValue={user.nic_passport}
              readOnly
            />
          </div>
        </div>
      </form>
    </TabLayout>
  );
};

export default PersonalInfo;
