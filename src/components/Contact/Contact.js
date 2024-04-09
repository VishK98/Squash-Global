import React, { useState } from "react";
import { Helmet } from 'react-helmet';
import ScrollToTopButton from '../TopButton/TopButton';
import contact from "../../assets/images/taw-contact-banner1.jpg";
import AnimatedText from '../Animations/TextAnimation';
import "./Contact.css";
import ImageAnimationUnfold from "../Animations/ImageAnimationUnfold";
import PopupModal from "../PopupModal/PopupModal";
import { contactUs, contactUsMail } from "../../utils/api";

function Contact() {
  const [modalShow, setModalShow] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    companyName: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      formData.name &&
      formData.email &&
      formData.contact &&
      formData.companyName &&
      formData.message &&
      formData.service !== "selected"
    ) {
      try {
        setModalShow(true);
        const response = await contactUs(formData);
        if (response.success) {
          await sendMail(formData);
          setApiResponse(response);
          setModalShow(true);
          const resetValue = {
            name: "",
            email: "",
            contact: "",
            companyName: "",
            service: "",
            message: "",
          };
          setFormData(resetValue);
          window.location.href = '/thankyou';
        }
      } catch (error) {
        console.error("Error submitting form for admin:", error);
      }
    } else {
      alert("Please fill out all fields and select a service.");
    }
  };
  const handleContactChange = (event) => {
    const { value } = event.target;
    // Ensure only numeric values are entered and limit to 10 digits
    const numericValue = value.replace(/\D/g, '').slice(0, 10);
    setFormData((prevData) => ({
      ...prevData,
      contact: numericValue
    }));
  };

  const sendMail = async (formData) => {
    try {
      const response = await contactUsMail(formData);
      console.log(`Mail response ==> ${response.data}`);
    } catch (error) {
      console.error("Error submitting form for mail:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const mapUrl = `https://www.google.com/maps/place/The+Agency+Way+(TAW)/@28.5004455,77.0823999,17z/data=!3m1!4b1!4m6!3m5!1s0x69456236f7adfc51:0x655d02ec3fd0c02f!8m2!3d28.5004408!4d77.0849748!16s%2Fg%2F11vq__2xt1?entry=ttu`;

  const handleMapClick = () => {
    window.open(mapUrl, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Reach Out to Contact US - The Agency Way (TAW)</title>
        <meta name="description" content="Connect with us the Agency Way (TAW)! Reach out to Contact Us for personalized solutions and exceptional service tailored to your needs." />
        <link rel="canonical" href="https://taw.agency/contact" />
      </Helmet>
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
                    <AnimatedText text={<h3 className="address">
                      D-65, Udyog Vihar, Phase-V, Sector-19,<br /> Gurgaon, Haryana, 122016
                    </h3>} animation="slide-up" />
                  </div>
                </div>
              </div>
              <button
                href="#"
                target="_blank"
                onClick={handleMapClick}
                rel="noopener noreferrer"
                className="view-map-text mt-3"
                aria-label="View on Google Maps"
              >
                <div style={{ height: "45px", width: "40px" }}>
                  <ImageAnimationUnfold src='https://img.icons8.com/pastel-glyph/64/marker--v1.png' alt="Image not found" />
                </div>
                <AnimatedText text={<h2 className="india-text" style={{ marginLeft: "5px" }}>Find us on the map</h2>
                } animation="slide-up" />
              </button>
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
              <AnimatedText
                text={
                  <span style={{ marginLeft: "50px" }}>
                    <a className="contact-text" href="tel:+91 8368163883">
                      +91 8368163883
                    </a>
                  </span>
                }
                animation="slide-up"
              />
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
                   onChange={handleContactChange}
                   placeholder="Type here"
                   autoComplete="off"
                   className="form-field mb-2"
                   maxLength={10} // Ensure max length is set to 10
                   required
                  />} animation='slide-up' />
                  <AnimatedText text={<label>
                    Company Name
                    <sup style={{ color: "red", marginLeft: "5px", fontWeight: "bold" }}>*</sup>
                  </label>} animation='slide-up' />
                  <AnimatedText text={<input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Type here"
                    autoComplete="off"
                    className="form-field mb-2"
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
                      <option value="Social Media Management (SMM)">Social Media Management (SMM)</option>
                      <option value="Search Engine Optimisation (SEO)">Search Engine Optimisation (SEO)</option>
                      <option value="Public Relation (PR)">Public Relation (PR)</option>
                      <option value="Paid Ads">Paid Ads</option>
                      <option value="Website Design and Developments">Website Design and Developments</option>
                      <option value="Creative Design">Creative Design</option>
                      <option value="Content Solutions">Content Solutions</option>
                      <option value="Influencer Marketing">Influencer Marketing</option>
                      <option value="Film & Photography">Film & Photography</option>
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
                <PopupModal show={modalShow} onHide={() => setModalShow(false)} apiResponse={apiResponse} />
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
