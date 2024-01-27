// Contact.js

import React, { useState } from "react";
import ScrollToTopButton from '../TopButton/TopButton';
import contact from "../../assets/images/contact-img-2.webp";
import india from "../../assets/images/tonic-india-hq.webp";
import mapIcon from "../../assets/images/viewmap-icon.webp";
import message from "../../assets/images/message-icon.png";
import email from "../../assets/images/email-icon1.png";
import uae from "../../assets/images/uae-hq-icon.png";
import { useFormik } from 'formik';
import * as Yup from 'yup';


import "./Contact.css";

function Contact() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      state: '',
      contactNumber: '',
      selectedService: 'selected',
      additionalInfo: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().required('Invalid email format').required('Email is required'),
      state: Yup.string().required('Invalid state format').required('State is required'),
      contactNumber: Yup.string().required('Invalid contactNumber format').required('Contact is required'),
      service: Yup.string().required('Invalid contactNumber format').required('Service is required'),
      // additionalInfo: Yup.string().required('Invalid additionalInfo format').required('Additional info is required'),
      // Add more validation for other fields
    }),
    onSubmit: (values) => {
      // Handle form submission logic here
      console.log('Form submitted:', values);
    },
  });
  // Create a state to manage the selected value
  const [selectedService, setSelectedService] = useState("selected");

  // Handle changes to the selected value
  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div class="route-text">
              <ol class="breadcrumb bg-transparent px-0 route-text mt-4">
                <li>
                  <a
                    href="/"
                    style={{ color: "grey", textDecoration: "none" }}
                  >
                    Home /
                  </a>
                </li>
                <li
                  class="breadcrumb-item active"
                  aria-current="page"
                  style={{ marginLeft: "8px", color: "grey" }}
                >
                  Contact
                </li>
              </ol>
            </div>
            <div className="inner_title hidden">
              <h1 className="contact-page-title">Let’s connect :)</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-3 mb-5">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="inner_section_img position-relative hidden">
              <img
                src={contact}
                alt="Contact Digital Marketing Agency"
                className="w-100 "
              />
            </div>
          </div>
        </div>
        <div className="row mt-5 ">
          <div className="col-lg-5 pt-lg-5">
            <div className="mt-4 mt-lg-0 address-info topslide">
              <div className="hidden">
                <img src={india} className="head-icon" alt="india" />
                <h2 className="india-text"> India</h2>
              </div>
              <div className="address">
                <p>
                  904/905, Eureka Towers Wing-B, Mindspace, Chincholi Bunder
                  Road, Malad (w), Mumbai, 400064
                </p>
              </div>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="view-map-text"
              >
                <img src={mapIcon} alt="map pin" />
                <span style={{ marginLeft: "15px" }}>View map</span>
              </a>{" "}
              <p className="phone mt-3">
                <img src={message} alt="message icon" />
                <span style={{ marginLeft: "15px" }}>
                  <a
                    style={{ textDecoration: "none", color: "#000" }}
                    href="tel:+9102233540123"
                  >
                    Tel: +91 022 33540123
                  </a>{" "}
                  /{" "}
                  <a
                    style={{ textDecoration: "none", color: "#000" }}
                    href="tel:+919833973364"
                  >
                    +91 9833973364
                  </a>
                </span>
              </p>
              <p className="email mt-3">
                <img src={email} alt="email icon" />
                <span style={{ marginLeft: "10px" }}>
                  <a
                    style={{ textDecoration: "none", color: "#000" }}
                    href="mailto:india@tonicworldwide.com"
                  >
                    India@tonicworldwide.com
                  </a>
                </span>
              </p>
              <div className="hidden">
                <img src={uae} className="head-icon" alt="india" />
                <h2 className="india-text"> Middle East</h2>
              </div>
              <div className="address">
                <p>
                  ASPIN COMMERCIAL TOWER 704-F, Sheikh Zayed Road, Dubai,
                  United Arab Emirates, 122703
                </p>
              </div>
              <a
                href="https://g.page/tonicworldwide?share"
                target="_blank"
                rel="noopener noreferrer"
                className="view-map-text"
              >
                <img src={mapIcon} alt="map pin" />
                <span style={{ marginLeft: "15px" }}>View map</span>
              </a>{" "}
              <p className="phone mt-3">
                <img src={message} alt="message icon" />
                <span style={{ marginLeft: "15px" }}>
                  <a style={{ textDecoration: "none", color: "#000" }} href="tel:+9102233540123">Tel: +91 022 33540123</a> /{" "}
                  <a style={{ textDecoration: "none", color: "#000" }} href="tel:+919833973364">+91 9833973364</a>
                </span>
              </p>
              <p className="email mt-3">
                <img src={email} alt="email icon" />
                <span style={{ marginLeft: "10px" }}>
                  <a style={{ textDecoration: "none", color: "#000" }} href="mailto:india@tonicworldwide.com">
                    dubai@tonicworldwide.com
                  </a>
                </span>
              </p>
            </div>
            {/* ... (other code) */}
          </div>
          <div className="col-lg-6 offset-lg-1 pt-5">
            <div
              className="formcol main-contact-form topslide"
            >
              <h1 style={{ fontWeight: "bold" }} ml-5>
                Catch up with us
              </h1>

              <form className="mt-5" onSubmit={formik.handleSubmit}>
                <label>Full Name<sup style={{color: "red", marginLeft: "5px", fontSize: "12px"}}>*</sup></label> <br></br>
                <input
                  type="text"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  placeholder="Type here"
                  autoComplete="off"
                  className="form-field mb-3"
                />
                {formik.errors.name && (
                  <div className="error-container position-relative">
                    <div className="error-tooltip">
                      {formik.errors.name}
                      <div className="arrow"></div>
                    </div>
                  </div>
                )}
                <label>Email<sup style={{color: "red", marginLeft: "5px", fontSize: "12px"}}>*</sup></label> <br></br>
                <input
                  type="text"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  placeholder="Type here"
                  autoComplete="off"
                  className="form-field mb-3"
                />
                {formik.errors.email && (
                  <div className="error-container position-relative">
                    <div className="error-tooltip">
                      {formik.errors.email}
                      <div className="arrow"></div>
                    </div>
                  </div>
                )}
                <label>State<sup style={{color: "red", marginLeft: "5px", fontSize: "12px"}}>*</sup></label> <br></br>
                <input
                  type="text"
                  name="state"
                  value={formik.values.state}
                  onChange={formik.handleChange}
                  placeholder="Type here"
                  autoComplete="off"
                  className="form-field mb-3"
                />
                {formik.errors.state && (
                  <div className="error-container position-relative">
                    <div className="error-tooltip">
                      {formik.errors.state}
                      <div className="arrow"></div>
                    </div>
                  </div>
                )}
                <label>Contact Number<sup style={{color: "red", marginLeft: "5px", fontSize: "12px"}}>*</sup></label> <br></br>
                <input
                  type="text"
                  name="contactNumber"
                  value={formik.values.contactNumber}
                  onChange={formik.handleChange}
                  placeholder="Type here"
                  autoComplete="off"
                  className="form-field mb-3"
                />
                {formik.errors.contactNumber && (
                  <div className="error-container position-relative">
                    <div className="error-tooltip">
                      {formik.errors.contactNumber}
                      <div className="arrow"></div>
                    </div>
                  </div>
                )}
                <div>
                  <label htmlFor="service">Choose a service <sup style={{color: "red", marginLeft: "5px", fontSize: "12px"}}>*</sup></label>
                  <select
                    type="text"
                    name="service"
                    value={formik.values.service}
                    onChange={formik.service}
                    placeholder="Type here"
                    autoComplete="off"
                    className="form-field mb-3"
                  >
                    <option value="selected">Select</option>
                    <option value="Brand Discovery and Strategy">
                      Brand Discovery and Strategy
                    </option>
                    <option value="Social Media Strategy">
                      Social Media Strategy
                    </option>
                    <option value="Data and Insights">
                      Data and Insights
                    </option>
                    <option value="Creative and Content">
                      Creative and Content
                    </option>
                    <option value="Design and Development">
                      Design and Development
                    </option>
                    <option value="Organic and Paid Marketing">
                      Organic and Paid Marketing
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                {formik.errors.service && (
                  <div className="error-container position-relative">
                    <div className="error-tooltip">
                      {formik.errors.service}
                      <div className="arrow"></div>
                    </div>
                  </div>
                )}
                <label>Write here something to add</label> <br></br>
                <input
                  type="text"
                  name="additionalInfo"
                  value={formik.values.additionalInfo}
                  onChange={formik.handleChange}
                  placeholder="Type here"
                  autoComplete="off"
                  className="form-field mb-3"
                />
                {/* {formik.errors.additionalInfo && (
                  <div className="error-container position-relative">
                    <div className="error-tooltip">
                      {formik.errors.additionalInfo}
                      <div className="arrow"></div>
                    </div>
                  </div>
                )} */}
                <div className="d-flex justify-content-center text-center"
                >
                  <input style={{ fontSize: "20px", fontWeight: "bold" }}
                    type="submit"
                    name="submit"
                    value="Send it"
                    class="submit"
                  />
                </div>
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
