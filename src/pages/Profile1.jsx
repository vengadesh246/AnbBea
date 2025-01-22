import React, { useState, useEffect } from "react";

const Profile1 = () => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const [profileImage, setProfileImage] = useState(null);

  // Load profile image from localStorage when the component mounts
  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setProfileImage(savedImage); // Set the saved image in state
    }
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageBase64 = reader.result;
        setProfileImage(imageBase64); // Set the image preview
        // Save the image to localStorage
        localStorage.setItem("profileImage", imageBase64);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Profile Page</h1>
      <div className="text-center my-4">
        {/* Profile Image */}
        <div
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            overflow: "hidden",
            margin: "0 auto",
            border: "2px solid #ddd",
          }}
        >
          <img
            src={profileImage || "https://via.placeholder.com/150"}
            alt="Profile"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="my-3">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="form-control"
          />
        </div>
      </div>

      {/* Display Full Name */}
      <h3 className="text-center">
        {loggedInUser?.fullName || "Guest User"}
      </h3>
    </div>
  );
};

export default Profile1;
