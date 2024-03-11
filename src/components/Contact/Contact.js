import React, { useState } from "react";
import ScrollToTopButton from '../TopButton/TopButton';
import contact from "../../assets/images/Contact Us banner.jpg";
import AnimatedText from '../Animations/TextAnimation';
import "./Contact.css";
import axios from 'axios';
import ImageAnimationUnfold from "../Animations/ImageAnimationUnfold";
import PopupModal from "../PopupModal/PopupModal";
import BASE_URL from "../../utils/api"

function Contact() {
  const [modalShow, setModalShow] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    service: "",
    message: "",
  });

  const handleSubmit = async event => {
    event.preventDefault();
    if (formData.name && formData.email && formData.contact && formData.message && formData.service !== "selected") {
      try {
        setModalShow(true);
        const response = await axios.post(`${BASE_URL}contactUs`, formData);
        // setApiResponse(response.data); 
        if(response.data.success){
          // console.log(response.data.success);
          const resetValue = {
            name: "",
            email: "",
            contact: "",
            service: "",
            message: "",
          };
          setFormData(resetValue);
        }
        setModalShow(true);
  
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    } else {
      alert("Please fill out all fields and select a service.");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${28.498540},${77.088620}`;

  const handleMapClick = () => {
    window.open(mapUrl, '_blank');
  };

  return (
    <>
      <div className="full-screen-image">
        <ImageAnimationUnfold src={contact} alt="Image not found" style={{ width: "100%", height: "100%", objectFit: "fill" }} />
      </div>
      <div className="container">
        <AnimatedText text={<h1 className="Color-Text mt-3">Let’s connect us</h1>} animation="slide-left" />
      </div>

      <div className="container mt-3 mb-5">

        <div className="row">
          <div className="col-lg-5 pt-lg-4">
            <div className="mt-4 mt-lg-0 address-info topslide">
              <div style={{ display: "flex", alignItems: "flex-start" }}>

                <div style={{ position: "relative", height: "35px", width: "35px" }}>
                  <ImageAnimationUnfold src='https://img.icons8.com/ios-filled/50/000000/red-fort.png' alt="Image not found" />
                </div>
                <div style={{ marginLeft: "12px", }}>
                  <AnimatedText text={<h2 className="india-text"> India</h2>} animation="slide-up" />
                  <div className="address">
                    <AnimatedText text={<h5 className="address">
                      D-65, Udyog Vihar, Phase-V, Sector-19,<br /> Gurgaon, Haryana, 122016
                    </h5>} animation="slide-up" />
                  </div>
                </div>
              </div>

              <a
                href="#"
                target="_blank"
                onClick={handleMapClick}
                rel="noopener noreferrer"
                className="view-map-text mt-3"
              >
                <div style={{ height: "45px", width: "40px" }}>
                  <ImageAnimationUnfold src='https://img.icons8.com/pastel-glyph/64/marker--v1.png' alt="Image not found" />
                </div>
                <AnimatedText text={<h2 className="india-text" style={{ marginLeft: "5px" }}>Find us on the map</h2>
                } animation="slide-up" />
              </a>
              <p className="phone mt-3" style={{ display: "flex", alignItems: "center" }}>
                <div style={{ position: "relative", height: "35px", width: "35px" }}>
                  <ImageAnimationUnfold src='https://img.icons8.com/ios-filled/50/man-on-phone.png' alt="Image not found" />
                </div>
                <AnimatedText
                  text={
                    <span style={{ marginLeft: "15px" }}>
                      <a className="contact-text" href="tel:+91 7827058243">
                        +91 7827058243
                      </a>
                    </span>
                  }
                  animation="slide-up"
                />
              </p>
              <p className="phone mt-3" style={{ display: "flex", alignItems: "center" }}>
                <div style={{ position: "relative", height: "33px", width: "35px" }}>
                  <ImageAnimationUnfold src='https://img.icons8.com/ios-filled/50/email-sign.png' alt="Image not found" />
                </div>
                <AnimatedText
                  text={
                    <span style={{ marginLeft: "10px" }}>
                      <a className="contact-text"
                        style={{ textDecoration: "none", color: "#000" }}
                        href="mailto:connect@theagencyway.co.in"
                      >
                        connect@theagencyway.co.in
                      </a>
                    </span>
                  }
                  animation="slide-up"
                />
              </p>

            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 pt-lg-4">
            <div className="formcol main-contact-form topslide">
              {/* Contact form */}
              <form onSubmit={handleSubmit}>
                {/* Form fields */}
                <div id="contactForm">
                  <AnimatedText text={<label>
                    Full Name
                    <sup style={{ color: "red", marginLeft: "5px", fontWeight: "bold" }}>*</sup>
                  </label>} animation='slide-up' />
                  <AnimatedText text={<input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Type here"
                    autoComplete="off"
                    className="form-field mb-2"
                    required
                  />} animation='slide-up' />
                  <AnimatedText text={<label>
                    Email
                    <sup style={{ color: "red", marginLeft: "5px", fontWeight: "bold" }}>*</sup>
                  </label>} animation='slide-up' />
                  <AnimatedText text={<input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Type here"
                    autoComplete="off"
                    className="form-field"
                    required
                  />
                  } animation='slide-up' />
                  <AnimatedText text={<label className="mt-3">
                    Contact number
                    <sup style={{ color: "red", marginLeft: "5px", fontWeight: "bold" }}>*</sup>
                  </label>} animation='slide-up' />

                  <AnimatedText text={<input
                    type="tel"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="+91 9900000088"
                    autoComplete="off"
                    className="form-field mb-2"
                    pattern="[0-9]{10}"
                    required
                  />} animation='slide-up' />
                  <AnimatedText text={<label htmlFor="service">Choose a service <sup style={{ color: "red", marginLeft: "5px", fontSize: "12px" }}>*</sup></label>
                  } animation='slide-up' />

                  <AnimatedText text={
                    <select
                      type="text"
                      name="service"
                      placeholder="Type here"
                      autoComplete="off"
                      className="form-field mb-3"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="selected">Select</option>
                      <option value="Media Planning And Buying">Media Planning And Buying</option>
                      <option value="Digital PR And ORM">Digital PR And ORM</option>
                      <option value="SEO & SEM">SEO & SEM</option>
                      <option value="Creative">Creative</option>
                      <option value="Design and Development">Social Media Management</option>
                      <option value="Content">Content</option>
                      <option value="Film & Photography">Film & Photography</option>
                      <option value="Website Design And Devlopment">Website Design And Devlopment</option>
                      <option value="Influencer Marketing">Influencer Marketing</option>
                      <option value="Social Media Marketing">Social Media Marketing</option>
                      <option value="Paid Ads">Paid Ads</option>
                    </select>

                  } animation='slide-up' />
                  <AnimatedText text={<label>Write something message yourself</label>
                  } animation='slide-up' />

                  <AnimatedText text={<input
                    type="text"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type here"
                    autoComplete="off"
                    className="form-field"
                    required
                  />} animation='slide-up' />
                </div>
                <button className="submit-button mt-lg-5 mt-3" type="submit" style={{ marginLeft: "200px" }}>
                  <div className="svg-wrapper-1">
                    <div className="svg-wrapper">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="35" height="35">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                      </svg>
                    </div>
                  </div>
                  <span>Submit</span>
                </button>
                <PopupModal show={modalShow} onHide={() => setModalShow(false)} apiResponse={apiResponse}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </>
  );
}

export default Contact;
