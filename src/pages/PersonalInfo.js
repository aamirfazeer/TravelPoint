import React from "react";
import TabLayout from "../components/TabLayout";
import person from "../assets/images/person.png";

const PersonalInfo = () => {
  return (
    <TabLayout>
      <div className="d-flex align-items-center mb-4">
        <div className="me-3">
          <img
            src={person}
            className="img-rounded-circle"
            style={{ width: "50px", height: "50px" }}
          />
        </div>
        <div>
          <h5 className="card-title mb-0 fw-bold fs-4">Ms. Perera</h5>
          <a href="#" className="text-decoration-none">
            Traveller ID #1254852
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
              defaultValue="Thisara"
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
              defaultValue="Perera"
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
            defaultValue="perera1234@gmail.com"
            readOnly
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
            defaultValue="123 Main St, Colombo, Sri Lanka"
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
              defaultValue="0771234567"
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
              defaultValue="1234567890123456"
              readOnly
            />
          </div>
        </div>
      </form>
    </TabLayout>
  );
};

export default PersonalInfo;
