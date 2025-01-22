import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Login = () => {
  const [loginData, setLoginData] = useState({
    identifier: "", // Can be email or mobile
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userDetails = JSON.parse(localStorage.getItem("userDetails"));

    if (
      userDetails &&
      (userDetails.email === loginData.identifier ||
        userDetails.mobile === loginData.identifier) &&
      userDetails.password === loginData.password
    ) {
      localStorage.setItem("loggedInUser", JSON.stringify(userDetails)); // Persist login session
      alert("Login successful!");
      navigate("/"); // Redirect to the homepage
    } else {
      setError("Invalid email/mobile or password.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div className="row my-4">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="my-3">
                <label>Email or Mobile Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="identifier"
                  placeholder="Enter Email or Mobile"
                  value={loginData.identifier}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="my-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter Password"
                  value={loginData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {error && <div className="text-danger">{error}</div>}
              <div className="text-center">
                <button className="btn btn-dark" type="submit">
                  Login
                </button>
              </div>
              <p className="mt-3">
                New here?{" "}
                <Link to="/register" className="text-decoration-underline text-info">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
