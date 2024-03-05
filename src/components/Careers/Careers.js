import React, { useState, useEffect, useRef } from "react";
import "./Careers.css";
import ScrollToTopButton from "../TopButton/TopButton";
import image from "../../assets/images/Banner Careers.png";
import downArrow from "../../assets/images/Icons/-down-arrow.png";
import team from "../../assets/images/Career Section Middle Banner.png";
import teamBreak from "../../assets/images/Career Section Bottom Banner.png";
import jobPost from "../../assets/images/hiring.png";
import AnimatedText from "../Animations/TextAnimation";
import ImageAnimationUnfold from "../Animations/ImageAnimationUnfold";

function Careers() {
  const jobData = [
    {
      url: jobPost,
      title: "Jr. Project Manager",
      location: "Mumbai",
      experience: "4-6 years",
      responsibilities: [
        "Project Coordination: Assist in planning, executing, and closing projects while ensuring they are delivered on time and within scope.",
        "Task Management: Oversee tasks, schedules, and resources to meet project goals. Track progress and identify potential issues.",
        "Team Support: Collaborate with project teams, providing administrative support, facilitating communication, and fostering a collaborative environment.",
      ],
      requirements: [
        "Bachelor's degree in a relevant field",
        "Strong organizational and communication skills",
        "Proficiency in project management tools and software",
        "Ability to work effectively in a team and support project goals",
        "Highly organized with strong attention to detail",
      ],
    },
    {
      url: jobPost,
      title: "Sr. Project Manager",
      location: "Kolkata",
      experience: "4-6 years",
      responsibilities: [
        "Project Coordination: Assist in planning, executing, and closing projects while ensuring they are delivered on time and within scope.",
        "Task Management: Oversee tasks, schedules, and resources to meet project goals. Track progress and identify potential issues.",
        "Team Support: Collaborate with project teams, providing administrative support, facilitating communication, and fostering a collaborative environment.",
      ],
      requirements: [
        "Bachelor's degree in a relevant field",
        "Strong organizational and communication skills",
        "Proficiency in project management tools and software",
        "Ability to work effectively in a team and support project goals",
        "Highly organized with strong attention to detail",
      ],
    },
    {
      url: jobPost,
      title: "Jr. Project Manager",
      location: "Mumbai",
      experience: "4-6 years",
      responsibilities: [
        "Project Coordination: Assist in planning, executing, and closing projects while ensuring they are delivered on time and within scope.",
        "Task Management: Oversee tasks, schedules, and resources to meet project goals. Track progress and identify potential issues.",
        "Team Support: Collaborate with project teams, providing administrative support, facilitating communication, and fostering a collaborative environment.",
      ],
      requirements: [
        "Bachelor's degree in a relevant field",
        "Strong organizational and communication skills",
        "Proficiency in project management tools and software",
        "Ability to work effectively in a team and support project goals",
        "Highly organized with strong attention to detail",
      ],
    },
  ];

  const [selectedService, setSelectedService] = useState("selected");

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };
  const handleFileChange = (e) => {
    const fileName = e.target.files[0].name;
    document.getElementById("file-upload-label").textContent = fileName;
    document.getElementById("file-upload-close").style.display = "inline";
    handleChange(e);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    state: "",
    contactNumber: "",
    about: "",
    service: "",
    resume: null,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Form data:", formData);
    } else {
      console.log("Form is not valid");
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "resume") {
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };
  const validateForm = () => {
    return (
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.state.trim() !== "" &&
      formData.contactNumber.trim() !== "" &&
      formData.about.trim() !== "" &&
      formData.service.trim() !== "" &&
      formData.resume !== null
    );
  };

  const [selectedJobIndex, setSelectedJobIndex] = useState(false);
  const applyNowRef = useRef(null);
  const formRef = useRef(null);
  const closeRef = useRef(null);

  const handleApplyNowClick = () => {
    // Scroll to the form section
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleCloseClick = () => {
    // Scroll to the form section
    closeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleDetailsClick = (index) => {
    setSelectedJobIndex((prevIndex) => (prevIndex === index ? null : index));

    if (selectedJobIndex !== index) {
      setTimeout(() => {
        const applyNowButton = document.getElementById(
          `applyNowButton-${index}`
        );
        if (applyNowButton && applyNowButton.offsetParent !== null) {
          applyNowButton.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    }
  };

  useEffect(() => {
    if (selectedJobIndex && applyNowRef.current) {
      applyNowRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedJobIndex]);

  return (
    <>
      <div className="full-screen-image">
        <ImageAnimationUnfold
          src={image}
          alt="Image not found"
          style={{ width: "100%", height: "100%", objectFit: "fill" }}
        />
      </div>
      <div className="container-fluid mt-lg-4 mt-3 p-4">
        <div class="career-heading">
          <AnimatedText
            text={<h1>Start your journey in TAW</h1>}
            animation="slide-up"
          />
        </div>
        <div className="row ">
          <div className="col-lg-12 col-md-12 col-12">
            <div class="career-sub-heading">
              <h1>Work with a dynamic team and creative minded people.</h1>
            </div>
            {/* <a href="#latestOpeningSection" className="explorbtn">
              <div style={{ display: "flex", alignItems: "center" }}>
                <div class="career-sub-heading">
                  <h1 style={{ fontSize: '30px', fontWeight: "bold" }}>Join us</h1>
                </div>
                <div
                  className="animated-arrow-btn"
                  style={{ marginLeft: "10px", height: "50px", width: "50px" }}
                >
                  <ImageAnimationUnfold src={downArrow} alt="Image not found" />
                </div>
              </div>
            </a> */}
          </div>
        </div>
      </div>
      <div className="container-fluid p-4">
        {/* <AnimatedText
          text={<h1 className="Color-Text">What to expect at TAW?</h1>}
          animation="slide-up"
        /> */}
        <AnimatedText
          text={
            <h1 className="At-Taw-text">
              At TAW, we believe in growing together.
            </h1>
          }
          animation="slide-up"
        />
      </div>
      <div className="container-fluid p-4">
        <div className="row">
          <div className="col-lg-5 col-md-5 col-12 col-sm-12 mt-3">
            <AnimatedText
              text={
                <h3 className="color-text">
                  Where ideas thrive and turn that idea into reality
                </h3>
              }
              animation="slide-left"
            />
            <AnimatedText
              text={
                <p className="paragraph-text mt-3">
                  At <span class="career-sub-heading">TAW</span> we foster
                  collaboration, innovation and creative minds to explore
                  limitless possibilities. If you are someone who wants to be a
                  part of the next big thing in the marketing and advertising
                  industry,
                </p>
              }
              animation="slide-left"
            />
            <AnimatedText
              text={
                <p
                  className="paragraph-text mt-3"
                  style={{ fontWeight: "bold" }}
                >
                  Write to us at{" "}
                  <span>
                    <a className="mail-text" href="mailto:hr@taw.agency">
                      hr@taw.agency
                    </a>
                  </span>
                </p>
              }
              animation="slide-left"
            />
          </div>
          <div className="col-lg-7 col-md-7 col-12 col-sm-12 mt-3 mb-1 ">
            <div>
              <ImageAnimationUnfold src={team} alt="Image not found" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-4 mb-3 p-4">
        <AnimatedText
          text={
            <h1 className="Color-Text" style={{ fontWeight: "bold" }}>
              Life at The Agency Way
            </h1>
          }
          animation="slide-left"
        />

      </div>
      <ImageAnimationUnfold src={teamBreak} alt="Image not found" />
      <div className="container-fluid p-4">
        <h1 className="Color-Text">Latest Openings</h1>
        <div className="row" ref={closeRef}>
          {jobData.map((job, index) => (
            <div
              className="col-xs-12 col-sm-6 col-md-4 mt-4 col-lg-4"
              key={index}
            >
              <div
                className={`card ${selectedJobIndex === index ? "flipped" : ""
                  }`}
              >
                <div className="text-center mb-2">
                  <img
                    className="img-fluid animated-image"
                    src={job.url}
                    alt="card image"
                  />
                  <h4 className="card-title mt-3">{job.title}</h4>
                  <div className="row mt-1">
                    <div className="col">
                      <p style={{ fontWeight: "500" }}>
                        Location: {job.location}
                      </p>
                    </div>
                    <div className="col">
                      <p style={{ fontWeight: "500" }}>
                        Experience: {job.experience}
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p
                        style={{
                          fontWeight: "500",
                          marginRight: "30px",
                        }}
                      >
                        Salary: 4-6 LPA{" "}
                      </p>
                    </div>
                    <div className="col">
                      <p style={{ fontWeight: "500" }}>Posted on: 10-01-2024</p>
                    </div>
                  </div>

                  <div>
                    <button
                      ref={applyNowRef}
                      className="apply-now-btn mt-3"
                      onClick={() => handleDetailsClick(index)}
                    >
                      {selectedJobIndex === index ? "Close" : "Details"}
                    </button>
                  </div>
                </div>
                <div
                  className="back"
                  style={{
                    display: selectedJobIndex === index ? "block" : "none",
                  }}
                >
                  <div id={`applyNowButton-${index}`} className="card-body">
                    <h4 className="card-title text-center">{job.title}</h4>
                    <p style={{ fontWeight: "bold" }}>Responsibilities</p>
                    <ul className="card-text" style={{ marginLeft: "15px" }}>
                      {job.responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                      ))}
                    </ul>
                    <p style={{ fontWeight: "bold" }}>Requirements</p>
                    <ul className="card-text" style={{ marginLeft: "15px" }}>
                      {job.requirements.map((requirement, index) => (
                        <li key={index}>{requirement}</li>
                      ))}
                    </ul>
                    <div
                      className="row "
                      style={{ justifyContent: "space-evenly" }}
                    >
                      <button
                        className="apply-now-btn mt-3"
                        onClick={() => {
                          handleDetailsClick(index);
                          handleApplyNowClick();
                        }}
                      >
                        Apply Now
                      </button>
                      <button
                        onClick={() => {
                          handleCloseClick(index);
                          handleDetailsClick(index);
                        }}
                        className="apply-now-btn mt-3"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mt-5" ref={formRef}>
        <div className="row">
          <div
            className=" content-box col-lg-4 col-md-4 col-sm-12 col-12"
            style={{ padding: "20px" }}
            ref={formRef}
          >
            <AnimatedText
              text={
                <h4 className=" paragraph-text content-box-text mb-5" style={{marginTop: "100px"}}>
                  We love people with ideas & the thirst to see that idea
                  through.
                </h4>
              }
              animation="slide-up"
            />
            <AnimatedText
              text={
                <h4 className="paragraph-text content-box-text">
                  If you think you can match up to our challenge, give us a
                  shout & we will make it work.
                </h4>
              }
              animation="slide-up"
            />
          </div>

          <div className="col-lg-8 col-md-8 col-sm-12 col-12 form-mobile mt-3">
            <div id="contactForm">
              <form onSubmit={handleSubmit}>
                <AnimatedText
                  text={
                    <label>
                      Full Name
                      <sup
                        style={{
                          color: "red",
                          marginLeft: "5px",
                          fontWeight: "bold",
                        }}
                      >
                        *
                      </sup>
                    </label>
                  }
                  animation="slide-up"
                />
                <AnimatedText
                  text={
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Type here"
                      autoComplete="off"
                      className="form-field mb-3"
                      required
                    />
                  }
                  animation="slide-up"
                />

                <AnimatedText
                  text={
                    <label>
                      Email
                      <sup
                        style={{
                          color: "red",
                          marginLeft: "5px",
                          fontWeight: "bold",
                        }}
                      >
                        *
                      </sup>
                    </label>
                  }
                  animation="slide-up"
                />
                <AnimatedText
                  text={
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Type here"
                      autoComplete="off"
                      className="form-field "
                      required
                    />
                  }
                  animation="slide-up"
                />
                <AnimatedText
                  className="mt-2"
                  text={
                    <label>
                      Contact number
                      <sup
                        style={{
                          color: "red",
                          marginLeft: "5px",
                          fontWeight: "bold",
                        }}
                      >
                        *
                      </sup>
                    </label>
                  }
                  animation="slide-up"
                />
                <AnimatedText
                  text={
                    <input
                      type="tel"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      placeholder="+91 9900000088"
                      autoComplete="off"
                      className="form-field mb-3"
                      pattern="[0-9]{10}"
                      required
                    />
                  }
                  animation="slide-up"
                />
                <AnimatedText
                  text={
                    <label>
                      Role applying for
                      <sup
                        style={{
                          color: "red",
                          marginLeft: "5px",
                          fontWeight: "bold",
                        }}
                      >
                        *
                      </sup>
                    </label>
                  }
                  animation="slide-up"
                />
                <AnimatedText
                  text={
                    <select
                      type="dropdown"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      placeholder="Type here"
                      autoComplete="off"
                      className="form-field mb-3"
                      required
                    >
                      <option value="selected">Select role</option>
                      <option value="Jr. Project Manager">
                        Jr. Project Manager
                      </option>
                      <option value="Account Management">
                        Account Management
                      </option>
                      <option value="Associate Creative Director">
                        Associate Creative Director
                      </option>
                      <option value="Creative Supervisor">
                        Creative Supervisor
                      </option>
                      <option value="Scriptwriter">Scriptwriter</option>
                      <option value="SEO Technical Lead">
                        SEO Technical Lead
                      </option>
                    </select>
                  }
                  animation="slide-up"
                />
                <AnimatedText
                  text={
                    <label>
                      Write something about yourself
                      <sup
                        style={{
                          color: "red",
                          marginLeft: "5px",
                          fontWeight: "bold",
                        }}
                      >
                        *
                      </sup>
                    </label>
                  }
                  animation="slide-up"
                />

                <AnimatedText
                  text={
                    <input
                      type="text"
                      name="about"
                      value={formData.about}
                      onChange={handleChange}
                      placeholder="Type here"
                      autoComplete="off"
                      className="form-field mb-3"
                      required
                    />
                  }
                  animation="slide-up"
                />
                <AnimatedText
                  text={
                    <label>
                      Attach your resume here
                      <sup
                        style={{
                          color: "red",
                          marginLeft: "5px",
                          fontWeight: "bold",
                        }}
                      >
                        *
                      </sup>
                    </label>
                  }
                  animation="sldie-up"
                />
                <AnimatedText
                  text={
                    <input
                      id="file-upload"
                      type="file"
                      name="resume"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      style={{ display: "none" }}
                      className="form-field"
                    />
                  }
                  animation="slide-up"
                />
                <AnimatedText
                  text={
                    <label
                      htmlFor="file-upload"
                      className="custom-file-upload"
                      style={{ color: "grey", marginRight: "5px" }}
                      id="file-upload-label"
                    >
                      No file chosen
                    </label>
                  }
                  animation="slide-up"
                />
                <span
                  id="file-upload-close"
                  onClick={() => {
                    document.getElementById("file-upload").value = "";
                    document.getElementById("file-upload-label").textContent =
                      "No file chosen";
                    document.getElementById("file-upload-close").style.display =
                      "none";
                  }}
                  style={{ display: "none", cursor: "pointer" }}
                >
                  &#x2715;
                </span>
                <AnimatedText
                  text={
                    <div className="d-flex justify-content-center mt-4 mb-3">
                      <input
                        type="submit"
                        name="submit"
                        value="Send it"
                        className="submit"
                      />
                    </div>
                  }
                  animation="fade-in"
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

export default Careers;
