import React from "react";
import { useState } from "react";
import axios from "axios"
import scenicImage from "../assets/images/scenic.jpg";
import { FaRegUser } from "react-icons/fa6";
import { FiLock } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import './LoginPage.css'

const LoginPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const login = async(e) => {
    e.preventDefault();
    try{
      const response = await axios.post("http://localhost:5000/api/auth/login",{
        email,
        password
      }); 
      console.log("Resp:", response.data)
      const {token, user} = response.data;
      localStorage.setItem("authToken", token);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("home", {state: { user }});
    }
    catch (error) {
      const errorMessage =
        error.response?.data?.message || error.message || "Login Failed!";
      setError(errorMessage);
    }
  };

  return (
    <div className="login-page-home-body">
      <div className="login-container">
        <div className="login-image">
          <img src={scenicImage} alt="Login" />
        </div>

        <div className="login-form">
          <form>
            <h2
              className="card-title mb-5 text-center"
              style={{ color: "#000000", fontWeight: "600" }}>
              Login to your account
            </h2>
            <div className="mb-3">
              <label
                htmlFor="username"
                className="form-label field"
                style={{ fontSize: "0.9rem", color: "#000000", fontWeight:"bold" }}>
                Email or username
              </label>
              <div className="input-group  border-primary border-3">
                <span className="input-group-text">
                  <FaRegUser />
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder={"Username"}
                  onChange={(e) => setEmail(e.target.value)}
                  />
              </div>
            </div>

            <div className="mb-3 position-relative">
              <label
                htmlFor="password"
                className="form-label field"
                style={{ fontSize: "0.9rem", color: "#000000", fontWeight: "bold" }}>
                Password
              </label>
              <div className="input-group border-primary border-3">
                <span className="input-group-text">
                  <FiLock />
                </span>
                <input
                  type={passwordShown ? "text" : "password"}
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  placeholder="Password"/>
              </div>
              <span
                className="position-absolute top-50 end-0 translate-top-y me-3 mt-1"
                style={{ cursor: "pointer" }}
                onClick={togglePasswordVisibility}>
                <i
                  className={passwordShown ? "fas fa-eye-slash" : "fas fa-eye"}></i>
              </span>
            </div>
            
              <div className="mb-3">
                <button
                onClick={login}
                  type="submit"
                  className="btn btn-primary w-50 mt-4 btnn"
                  style={{ marginLeft: "0%" }}>
                  Log In
                </button>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
