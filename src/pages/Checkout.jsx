import React, { useState } from "react";
import { Footer, Navbar } from "../components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaMoneyCheckAlt } from "react-icons/fa";

const WHATSAPP_NUMBER = "+917092392023";

const Checkout = () => {
  const state = useSelector((state) => state.handleCart);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [locationFetched, setLocationFetched] = useState(false);

  // Function to check if the checkout button should be enabled
  const isCheckoutEnabled = firstName.trim() !== "" && locationFetched;

  // Function to get the customer's current location
  const fetchLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`https://www.google.com/maps?q=${latitude},${longitude}`);
          setLocationFetched(true);
        },
        (error) => {
          console.error("Error fetching location: ", error);
          setLocation("Location not available");
          setLocationFetched(false);
        }
      );
    } else {
      setLocation("Geolocation not supported");
      setLocationFetched(false);
    }
  };

  const EmptyCart = () => (
    <div className="container">
      <div className="row">
        <div className="col-md-12 py-5 bg-light text-center">
          <h4 className="p-3 display-5">No item in Cart</h4>
          <Link to="/" className="btn btn-outline-dark mx-4">
            <i className="fa fa-arrow-left"></i> Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );

  const ShowCheckout = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;
    let cartMessage = "Your order details:\n\n";

    state.forEach((item) => {
      subtotal += item.price * item.qty;
      totalItems += item.qty;
      cartMessage += `${item.qty}x ${item.title || "Unnamed Product"} - $${(item.price * item.qty).toFixed(2)}\n`;
    });

    cartMessage += `\nSubtotal: $${subtotal.toFixed(2)}\n`;
    cartMessage += `Shipping: $${shipping.toFixed(2)}\n`;
    cartMessage += `Total: $${(subtotal + shipping).toFixed(2)}`;

    const handleCheckoutClick = (e) => {
      e.preventDefault();

      if (!isCheckoutEnabled) {
        alert("Please enter your first name and fetch your location before proceeding.");
        return;
      }

      const nameDetails = `\n\nCustomer Name: ${firstName} ${lastName}`;
      const locationDetails = location
        ? `\nCustomer Location: ${location}`
        : "\nCustomer Location: Not provided";

      const finalMessage = `${cartMessage}${nameDetails}${locationDetails}`;

      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        finalMessage
      )}`;

      window.open(whatsappUrl, "_blank");
    };

    return (
      <>
        <div className="container py-5">
          <div className="row my-4">
            <div className="col-md-5 col-lg-4 order-md-last">
              <div className="card mb-4">
                <div className="card-header py-3 bg-light">
                  <h5 className="mb-0">Order Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products ({totalItems})<span>${Math.round(subtotal)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>${shipping}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                      </div>
                      <span>
                        <strong>${Math.round(subtotal + shipping)}</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-7 col-lg-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h4 className="mb-0">Billing address</h4>
                </div>
                <div className="card-body">
                  <form className="needs-validation" onSubmit={handleCheckoutClick} noValidate>
                    <div className="row g-3">
                      <div className="col-sm-6 my-1">
                        <label htmlFor="firstName" className="form-label">
                          First name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          required
                        />
                        <div className="invalid-feedback">
                          Valid first name is required.
                        </div>
                      </div>
                      <div className="col-sm-6 my-1">
                        <label htmlFor="lastName" className="form-label">
                          Last name (Optional)
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>
                    </div>

                    <button
                      type="button"
                      className="btn btn-secondary my-2"
                      onClick={fetchLocation}
                    >
                      Fetch Current Location
                    </button>
                    {locationFetched && <p className="text-success">Location fetched successfully!</p>}
                    {!locationFetched && <p className="text-danger">Location is required to proceed.</p>}

                    <hr className="my-4" />

                    <h4 className="mb-3">Payment Methods</h4>
                    <div className="row gy-3">
                      <div className="col-md-6">
                        <label className="form-label">
                          <FaMoneyCheckAlt size={30} /> Cash on Delivery
                        </label>
                      </div>
                    </div>

                    <hr className="my-4" />
                    <button
                      type="submit"
                      className="w-100 btn btn-primary"
                      disabled={!isCheckoutEnabled} // Button is disabled until conditions are met
                    >
                      Continue to checkout
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Checkout</h1>
        <hr />
        {state.length ? <ShowCheckout /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
