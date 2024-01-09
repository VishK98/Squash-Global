// Contact.js

import React, { useState } from "react";
import contact from "../../assets/images/contact-img-2.webp";
import india from "../../assets/images/tonic-india-hq.webp";
import mapIcon from "../../assets/images/viewmap-icon.webp";
import message from "../../assets/images/message-icon.png";
import email from "../../assets/images/email-icon1.png";
import uae from "../../assets/images/uae-hq-icon.png";

import "./Contact.css";

function Contact() {
  // Create a state to manage the selected value
  const [selectedService, setSelectedService] = useState("selected");

  // Handle changes to the selected value
  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  return (
    <section id="contactSectionOne">
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner_title hidden">
                <h1 className="contact-page-title">Let’s connect :)</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-3 p-lg-0 mb-5 pb-5">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div
                className="inner_section_img position-relative hidden"
                style={{ opacity: 1, transform: "translate(0px, 0px)" }}
              >
                <img
                  src={contact}
                  alt="Contact Digital Marketing Agency"
                  className="w-100"
                  style={{ transform: "translate(0px, 0px)" }}
                />
              </div>
            </div>
          </div>
          <div className="row mt-5 pb-5">
            <div className="col-lg-5 pt-lg-5">
              <div
                className="mt-4 mt-lg-0 address-info topslide"
                style={{ transform: "translate(0px, 0px)", opacity: 1 }}
              >
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
                    <a href="tel:+9102233540123">Tel: +91 022 33540123</a> /{" "}
                    <a href="tel:+919833973364">+91 9833973364</a>
                  </span>
                </p>
                <p className="email mt-3">
                  <img src={email} alt="email icon" />
                  <span style={{ marginLeft: "10px" }}>
                    <a href="mailto:india@tonicworldwide.com">
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
                    <a href="tel:+9102233540123">Tel: +91 022 33540123</a> /{" "}
                    <a href="tel:+919833973364">+91 9833973364</a>
                  </span>
                </p>
                <p className="email mt-3">
                  <img src={email} alt="email icon" />
                  <span style={{ marginLeft: "10px" }}>
                    <a href="mailto:india@tonicworldwide.com">
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
                style={{ transform: "translate(0px, 0px)", opacity: 1 }}
              >
                <div className="hidden">
                  <h1 style={{ fontWeight: "bold" }} ml-5>
                    Catch up with us
                  </h1>
                </div>
                <div id="contactForm">
                  <form className="mt-5">
                    <label>Full Name</label> <br></br>
                    <input
                      type="text"
                      name="name"
                      // value={this.state.name}
                      // onChange={this.handleChange}
                      placeholder="Type here"
                      autoComplete="off"
                      className="name-field mb-3"
                    />
                    <label>Email</label> <br></br>
                    <input
                      type="text"
                      name="name"
                      // value={this.state.name}
                      // onChange={this.handleChange}
                      placeholder="Type here"
                      autoComplete="off"
                      className="name-field mb-3"
                    />
                    <label>Country</label> <br></br>
                    <input
                      type="text"
                      name="name"
                      // value={this.state.name}
                      // onChange={this.handleChange}
                      placeholder="Type here"
                      autoComplete="off"
                      className="name-field mb-3"
                    />
                    <label>Contact number</label> <br></br>
                    <input
                      type="text"
                      name="name"
                      // value={this.state.name}
                      // onChange={this.handleChange}
                      placeholder="+91 7352690391"
                      autoComplete="off"
                      className="name-field mb-3"
                    />
                    <div>
                      <label htmlFor="service">Choose a service:</label>
                      <select
                        name="service"
                        id="service"
                        class="custom-select"
                        value={selectedService}
                        onChange={handleServiceChange}
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
                    <label>Write here something to add</label> <br></br>
                    <input
                      type="text"
                      name="name"
                      // value={this.state.name}
                      // onChange={this.handleChange}
                      placeholder="Type here"
                      autoComplete="off"
                      className="name-field mb-5"
                    />
                    <div id="contactSubmitBtn"className="d-flex justify-content-center" >
                      <input 
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
        </div>
      </div>
    </section>
  );
}

export default Contact;
