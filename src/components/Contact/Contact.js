
import React, { useState } from "react";
import ScrollToTopButton from '../TopButton/TopButton';
import contact from "../../assets/images/Contact Us banner.jpg";
import AnimatedText from '../Animations/TextAnimation';
import "./Contact.css";
import axios from 'axios';
import ImageAnimationFade from "../Animations/ImageAnimationFade";
import ImageAnimationUnfold from "../Animations/ImageAnimationUnfold";


function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    state: "",
    contactNumber: "",
    about: ""
  });

  const handleSubmit = async event => {
    event.preventDefault();
    console.log('First', formData);
    try {
      const response = await axios.post('http://localhost:8000/api/contactUs', formData);
      console.log('Response from server:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };



  // Create a state to manage the selected value
  const [selectedService, setSelectedService] = useState("selected");

  // Handle changes to the selected value
  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${28.498540},${77.088620}`;

  const handleMapClick = () => {
    window.open(mapUrl, '_blank');
  };

  return (
    <>
      <div> <ImageAnimationUnfold src={contact} alt="Image not found" /></div>
      <div className="container">
        <div className="row">
          <div className="inner_title hidden">
            <AnimatedText text={<h1 className="contact-page-title">Let’s connect us</h1>
            } animation="slide-left" />
          </div>
        </div>
      </div>

      <div className="container mt-3 mb-5">

        <div className="row">
          <div className="col-lg-5 pt-lg-5">
            <div className="mt-4 mt-lg-0 address-info topslide">
              <div style={{ display: "flex", alignItems: "flex-start" }}>

                <div style={{ position: "relative", height: "35px", width: "35px" }}>
                  <ImageAnimationUnfold src='https://img.icons8.com/ios-filled/50/4c029e/red-fort.png' alt="Image not found" />
                </div>
                <div style={{ marginLeft: "12px", }}>
                  <AnimatedText text={<h2 className="india-text"> India</h2>} animation="slide-up" />
                  <div className="address">
                    <AnimatedText text={<h5 className="address">
                      791/5, Udyog Vihar, Phase-V, Sector-19,<br /> Gurgaon, Haryana, 122016
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
                  <ImageAnimationUnfold src='https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/4c029e/external-location-contact-us-flatart-icons-solid-flatarticons.png' alt="Image not found" />
                </div>
                <AnimatedText text={<span style={{ marginLeft: "12px", fontFamily: "Times New Roman, Times, serif" }}>Find us on the map</span>
                } animation="slide-up" />
              </a>
              <p className="phone mt-3" style={{ display: "flex", alignItems: "center" }}>
                <div style={{ position: "relative", height: "35px", width: "35px" }}>
                  <ImageAnimationUnfold src='https://img.icons8.com/ios-filled/50/4c029e/ringer-volume.png' alt="Image not found" />
                </div>
                <AnimatedText
                  text={
                    <span style={{ marginLeft: "15px" }}>
                      {/* +91 7827058243 */}
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
                  <ImageAnimationUnfold src='https://img.icons8.com/ios-filled/50/4c029e/composing-mail.png' alt="Image not found" />
                </div>
                <AnimatedText
                  text={
                    <span style={{ marginLeft: "10px" }}>
                      <a className="contact-text"
                        style={{ textDecoration: "none", color: "#000" }}
                        href="mailto:contact@TAWglobal.com"
                      >
                        contact@TAWglobal.com
                      </a>
                    </span>
                  }
                  animation="slide-up"
                />
              </p>

            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 pt-5">
            <div
              className="formcol main-contact-form topslide"
            >
              <AnimatedText text={<h1 style={{ fontWeight: "bold" }} ml-5>
                Catch up with us
              </h1>
              } animation="slide-up" />
              <form onSubmit={handleSubmit}>
                <div id="contactForm">
                  <AnimatedText text={<label>
                    Full Name
                    <sup style={{ color: "red", marginLeft: "5px", fontWeight: "bold" }}>*</sup>
                  </label>} animation='slide-up' />
                  <AnimatedText text={<input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
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
                  <div className="mt-3">
                    <AnimatedText text={<label>
                      Address
                      <sup style={{ color: "red", marginLeft: "5px", fontWeight: "bold" }}>*</sup>
                    </label>} animation='slide-up' />

                    <AnimatedText text={<input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="Type here"
                      autoComplete="off"
                      className="form-field"
                      required
                    />} animation='slide-up' />
                  </div>
                  <AnimatedText text={<label className="mt-3">
                    Contact number
                    <sup style={{ color: "red", marginLeft: "5px", fontWeight: "bold" }}>*</sup>
                  </label>} animation='slide-up' />

                  <AnimatedText text={<input
                    type="tel"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    placeholder="+91 9900000088"
                    autoComplete="off"
                    className="form-field mb-2"
                    pattern="[0-9]{10}"
                    required
                  />} animation='slide-up' />
                  <AnimatedText text={<label htmlFor="service">Choose a service <sup style={{ color: "red", marginLeft: "5px", fontSize: "12px" }}>*</sup></label>
                  } animation='slide-up' />

                  <AnimatedText text={<select
                    type="text"
                    name="service"
                    // value={formik.values.service}
                    // onChange={formik.service}
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
                  </select>} animation='slide-up' />
                  <AnimatedText text={<label>Write something about yourself</label>
                  } animation='slide-up' />

                  <AnimatedText text={<input
                    type="text"
                    name="about"
                    value={formData.about}
                    onChange={handleChange}
                    placeholder="Type here"
                    autoComplete="off"
                    className="form-field"
                    required
                  />} animation='slide-up' />
                </div>
                {/* <div className="d-flex justify-content-center text-center"
                >
                  <AnimatedText text={<input style={{ fontSize: "20px", fontWeight: "bold", marginTop: "25px" }}
                    type="submit"
                    name="submit"
                    value="Send it"
                    class="submit submit-depth"
                  />} animation='fade-in' />
                </div> */}
                <div><div className="d-flex justify-content-center  mb-3 mt-3">
            <button className="submit-button">
              <div class="svg-wrapper-1">
                <div class="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="35"
                    height="35"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    ></path>
                  </svg>
                </div>
              </div>
              <span>Submit</span>
            </button>
          </div>
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
