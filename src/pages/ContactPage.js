import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "../styles/ContactPage.scss";
import addressIcon from "../assets/icons/address.png";
import emailIcon from "../assets/icons/email.png";
import phoneIcon from "../assets/icons/phone.png";
import facebookIcon from "../assets/icons/facebook.png";
import twitterIcon from "../assets/icons/twitter.png";


const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  // Update these coordinates to match the exact location of Chupet Store
  const [location, setLocation] = useState({
    lat: 8.4799, // Latitude for Chupet Store
    lng: 4.5418, // Longitude for Chupet Store
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email sent to oladejianthony4@gmail.com!`);
    console.log(formData);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => {
          alert("Unable to retrieve your location. Showing default location.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);

  const mapContainerStyle = {
    width: '100%',
    height: '100%',
  };

  return (
    <div className="contact__page">
      <div className="contact__bg"></div>
      <div className="mail">
        <h2>Send us a Message</h2>
        <form className="input__field" onSubmit={handleSubmit}>
          <div className="name__fields">
            <input
              type="text"
              name="firstName"
              placeholder="First name:*"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name:*"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact__fields">
            <input
              type="email"
              name="email"
              placeholder="Email address:*"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone number:*"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Write Message:*"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="contact__info">
        <div className="contact__head">
          <h2>Contact Information</h2>
        </div>
        <div className="contact__icons">
          <div className="box">
            <img src={addressIcon} alt="icons" />
            <div>
              <h3>Address</h3>
              <p>14, Jakande street, Lagos state, Nigeria</p>
            </div>
          </div>

          <div className="box">
            <img src={emailIcon} alt="icons" />
            <div>
              <h3>Email Address</h3>
              <p>Natalagosng@gmail.com</p>
            </div>
          </div>
          <div className="box">
            <img src={phoneIcon} alt="icons" />
            <div>
              <h3>Phone Number</h3>
              <p>+234 540511045</p>
            </div>
          </div>

          <div className="box">
            <img src={facebookIcon} alt="icons" />
            <div>
              <h3>Facebook page</h3>
              <p>NATA Lagos</p>
            </div>
          </div>

          <div className="box">
            <img src={twitterIcon} alt="icons" />
            <div>
              <h3>Twitter</h3>
              <p>NATA Lagos</p>
            </div>
          </div>
        </div>

        <div className="map">
          <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={location}
              zoom={15}
            >
              <Marker position={location} />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
