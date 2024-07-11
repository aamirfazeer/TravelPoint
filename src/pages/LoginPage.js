import React from "react";
import { useState } from "react";
import scenicImage from "../assets/images/scenic.jpg";
import { FaRegUser } from "react-icons/fa6";
import { FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";

function LoginPage() {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="page-container">
      <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
        <div
          className="card login-container"
          style={{
            backgroundColor: "#EFF2FB",
            maxWidth: "800px",
            width: "100%",
            border: "none",
            borderRadius: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
          }}
        >
          <div className="row g-0">
            <div className="col-md-5 d-none d-md-block">
              <img
                src={scenicImage}
                alt="Scenic view"
                className="img-fluid img h-100"
                style={{
                  objectFit: "cover",
                  borderTopLeftRadius: "20px",
                  borderBottomLeftRadius: "20px",
                }}
              />
            </div>
            <div className="col-md-6 container d-flex justify-content-center align-items-center">
              <div className="card-body ">
                <h2 className="card-title mb-5 text-center">
                  Login to your account
                </h2>
                <form>
                  <div className="mb-3">
                    <label
                      htmlFor="username"
                      className="form-label"
                      style={{ fontSize: "0.9rem", color: "#6c757d" }}
                    >
                      Email or username
                    </label>
                    <div className="input-group  border-primary border-3">
                      <span className="input-group-text">
                        <FaRegUser />
                      </span>
                      <input
                        type="text"
                        className="form-control border-primary border-3"
                        id="username"
                        placeholder={"Username"}
                      />
                    </div>
                  </div>
                  <div className="mb-3 position-relative">
                    <label
                      htmlFor="password"
                      className="form-label"
                      style={{ fontSize: "0.9rem", color: "#6c757d" }}
                    >
                      Password
                    </label>
                    <div className="input-group border-primary border-3">
                      <span className="input-group-text">
                        <FiLock />
                      </span>
                      <input
                        type={passwordShown ? "text" : "password"}
                        className="form-control border-primary border-3"
                        id="password"
                        placeholder="Password"
                      />
                    </div>
                    <span
                      className="position-absolute top-50 end-0 translate-top-y me-3 mt-1"
                      style={{ cursor: "pointer" }}
                      onClick={togglePasswordVisibility}
                    >
                      <i
                        className={
                          passwordShown ? "fas fa-eye-slash" : "fas fa-eye"
                        }
                      ></i>
                    </span>
                  </div>
                  <Link to="/home">
                    <div className="mb-3">
                      <button
                        type="submit"
                        className="btn btn-primary w-50 mt-3"
                        style={{ marginLeft: "25%" }}
                      >
                        Log In
                      </button>
                    </div>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
