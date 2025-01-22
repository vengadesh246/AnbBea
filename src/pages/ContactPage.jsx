import React, { useState } from "react";
import { Footer, Navbar } from "../components";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [isMobileValid, setIsMobileValid] = useState(true);

  const validateMobile = (number) => {
    // Check if the number starts with +91 and is followed by exactly 10 digits
    const regex = /^\+91\d{10}$/;
    return regex.test(number);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the mobile number before proceeding
    if (!validateMobile(mobile)) {
      alert("Please enter a valid mobile number in the format +911234567890.");
      return;
    }

    // Generate WhatsApp message
    const whatsappNumber = "7092392023"; // Replace with your WhatsApp number (with country code)
    const textMessage = `Hello, here are my contact details:\n\nName: ${name}\nEmail: ${email}\nMobile: ${mobile}\nMessage: ${message}`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      textMessage
    )}`;

    // Redirect to WhatsApp
    window.open(whatsappLink, "_blank");
  };

  const handleMobileChange = (e) => {
    const value = e.target.value;
    setMobile(value);

    // Validate the mobile number as the user types
    setIsMobileValid(validateMobile(value));
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Contact Us</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="form my-3">
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              {/* Email Field */}
              <div className="form my-3">
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Mobile Number Field */}
              <div className="form my-3">
                <label htmlFor="Mobile">Mobile Number</label>
                <input
                  type="tel"
                  className={`form-control ${
                    isMobileValid ? "" : "is-invalid"
                  }`}
                  id="Mobile"
                  placeholder="Enter your mobile number (+911234567890)"
                  value={mobile}
                  onChange={handleMobileChange}
                  required
                />
                {!isMobileValid && (
                  <div className="invalid-feedback">
                    Mobile number must start with +91 and have 10 digits after.
                  </div>
                )}
              </div>

              {/* Message Field */}
              <div className="form my-3">
                <label htmlFor="Message">Message</label>
                <textarea
                  rows={5}
                  className="form-control"
                  id="Message"
                  placeholder="Enter your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  className="my-2 px-4 mx-auto btn btn-dark"
                  type="submit"
                  disabled={!isMobileValid}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
