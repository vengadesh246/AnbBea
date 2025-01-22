import React from "react";
import { Footer, Navbar } from "../components";

const Profile = () => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")); // Retrieve profile details

  if (!loggedInUser) {
    return <h1>You must log in to access this page!</h1>;
  }

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Profile</h1>
        <hr />
        <div className="row my-4">
          <div className="col-md-6 col-lg-6 col-sm-8 mx-auto">
            <div className="card p-4">
              <h3>Welcome, {loggedInUser.fullName}!</h3>
              <p>Email: {loggedInUser.email}</p>
              <p>Mobile: {loggedInUser.mobile}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
