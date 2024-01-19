import React, { useState, useEffect, useRef } from "react";
import "./Careers.css";
import "./Cards.css";
import image from "../../assets/images/career-in-tonic.jpg";
import downArrow from "../../assets/images/small-circle-down-arrow.png";
import team from "../../assets/images/team-image.webp";
import coffee from "../../assets/images/coffee.png";
import teamBreak from "../../assets/images/team-break-time.webp";
import jobPost from "../../assets/images/hiring.png";

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
  // Create a state to manage the selected value
  const [selectedService, setSelectedService] = useState("selected");

  // Handle changes to the selected value
  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
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
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div class="route-text">
              <ol class="breadcrumb bg-transparent px-0 route-text mt-4">
                <li class="breadcrumb-item">
                  <a href="/" style={{ color: "grey", textDecoration: "none" }}>
                    Home /
                  </a>
                </li>
                <li
                  class="breadcrumb-item active"
                  aria-current="page"
                  style={{ marginLeft: "8px", color: "grey" }}
                >
                  Careers
                </li>
              </ol>
            </div>
            <div className="inner_title hidden d-flex align-items-center justify-content-between flex-wrap careers-sec">
              <h1 className="pr-lg-4 topslide story">
                Your Story
                <h1 className="d-md-inline-block d-inline-block start">
                  Starts here
                </h1>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid ">
        <div className="row align-items-center pt-md-4">
          <div className="col-lg-7">
            <div className="inner_section_img position-relative hidden round_corner_img">
              <div>
                <img
                  style={{ width: "100%" }}
                  src={image}
                  alt="Career at Digital Marketing Agency"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-5 topslide">
            <div className="section_text mt-4 mt-lg-0 pl-lg-4 pl-0">
              <h2 className="working">
                <br />
                Work with the biggest brand & brightest
                <br />
                minds
              </h2>
              <a href="#latestOpeningSection" className="explorbtn mt-lg-4">
                <i className="joinUs">Join Us</i>
                <span>
                  <img
                    className="animated-arrow-btn"
                    style={{ marginLeft: "15px" }}
                    src={downArrow}
                    alt="join us"
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <h1 style={{ fontWeight: "bold" }}>Why Join Squash Global?</h1>
        <p className="mt-4" style={{ fontSize: "20px" }}>
          <span style={{ fontWeight: "600" }}>
            We believe in growing together, with you.
          </span>
          <br />
          <br /> A great place to work also offers tangible achievements,
          diverse opportunities and development programs. The next big thing in
          digital advertising is you. Join us as we are here to grow with you.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-5 col-12 col-sm-12 mt-5">
            <h3 style={{ fontWeight: "bold" }}>
              We love people with ideas and the thirst to see that idea through
            </h3>
            <p className="mt-4" style={{ fontSize: "20px" }}>
              "At{" "}
              <span
                className="animated-text"
                style={{ fontWeight: "bold", color: "#fe504f" }}
              >
                Squash Global
              </span>
              , we foster a culture of innovation and collaboration, where your
              ideas are valued and your potential is limitless. Join our team
              and be part of the future of digital advertising." <br /> <br />
              If you think you can match up to our challenge, write to us.
            </p>
          </div>
          <div className="col-lg-7 col-md-7 col-12 col-sm-12 mt-4 ">
            <div>
              <img
                style={{ width: "100%" }}
                src={team}
                alt="Career at Digital Marketing Agency"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div style={{ display: "flex" }}>
          <h1 style={{ fontWeight: "bold" }}>Life at Squash Global</h1>
          <img
            className="animated-coffee-text"
            style={{
              height: "45px",
              width: "45px",
              marginLeft: "19px",
              marginTop: "4px",
            }}
            src={coffee}
          ></img>
        </div>
      </div>
      <img className="mt-4" style={{ width: "100%" }} src={teamBreak}></img>
      <div className="container">
        <h1 className="mt-3">Latest Openings</h1>

        <div className="row" ref={closeRef}>
          {jobData.map((job, index) => (
            <div className="col-xs-12 col-sm-6 col-md-4 mt-4" key={index}>
              <div
                className={`card ${selectedJobIndex === index ? "flipped" : ""
                  }`}
              >
                <div className="front">
                  <div className="card-body text-center">
                    <img
                      className="img-fluid animated-image"
                      src={job.url}
                      alt="card image"
                    />
                    <h4 className="card-title mt-3">{job.title}</h4>
                    <div className="row mt-3">
                      {/* ... (other front card content) */}
                      <div className="row mt-3">
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
                          <p style={{ fontWeight: "500" }}>
                            Posted on: 10-01-2024
                          </p>
                        </div>
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
            <h4 className="content-box-text">
              We love people with ideas & the thirst to see that idea through.
            </h4>
            <h4 className="content-box-text">
              If you think you can match up to our challenge, give us a shout &
              we will make it work.
            </h4>
          </div>

          <div
            className="col-lg-7 col-md-8 col-sm-12 col-12 form-mobile"
            style={{ marginLeft: "20px"}}
          >
            <div id="contactForm" >
              <form>
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
                </label>{" "}
                <br />
                <input
                  type="text"
                  name="name"
                  // value={this.state.name}
                  // onChange={this.handleChange}
                  placeholder="Type here"
                  autoComplete="off"
                  className="name-field mb-3"
                />
                <div
                  id={`applyNowButton`}
                  style={{
                    display: "flex",
                    marginBottom: "1rem",
                  }}
                >
                  <div style={{ flex: 1, marginRight: "1rem" }}>
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
                    </label>{" "}
                    <br />
                    <input
                      type="text"
                      name="email"
                      // value={this.state.email}
                      // onChange={this.handleChange}
                      placeholder="Type here"
                      autoComplete="off"
                      className="name-field mb-3"
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label>
                      State
                      <sup
                        style={{
                          color: "red",
                          marginLeft: "5px",
                          fontWeight: "bold",
                        }}
                      >
                        *
                      </sup>
                    </label>{" "}
                    <br />
                    <input
                      type="text"
                      name="state"
                      // value={this.state.country}
                      // onChange={this.handleChange}
                      placeholder="Type here"
                      autoComplete="off"
                      className="name-field mb-3"
                    />
                  </div>
                </div>
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
                </label>{" "}
                <br />
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
                  </label>{" "}
                  <br />
                  <select
                    name="service"
                    id="service"
                    className="custom-select"
                    value={selectedService}
                    onChange={handleServiceChange}
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
                </div>
                <label>Write something about yourself</label> <br />
                <input
                  type="text"
                  name="name"
                  // value={this.state.name}
                  // onChange={this.handleChange}
                  placeholder="Type here"
                  autoComplete="off"
                  className="name-field mb-5"
                />
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
                </label>{" "}
                <br />
                <input
                  id="file-upload"
                  type="file"
                  name="file"
                  // value={this.state.file}
                  // onChange={this.handleFileChange}
                  className="name-field"
                  style={{ display: "none" }}
                  accept="image/*" // Specify accepted file types, e.g., images
                  onChange={(e) => {
                    const fileName = e.target.files[0].name;
                    document.getElementById("file-upload-label").textContent =
                      fileName;
                    document.getElementById(
                      "file-upload-close"
                    ).style.display = "inline"; // Show the close icon
                  }}
                />
                <div style={{ display: "flex" }}>
                  <label
                    htmlFor="file-upload"
                    className="custom-file-upload"
                    style={{ color: "grey", marginRight: "5px" }} // Add margin for spacing
                    id="file-upload-label"
                  >
                    No file chosen
                  </label>
                  <span
                    id="file-upload-close"
                    onClick={() => {
                      document.getElementById("file-upload").value = ""; // Reset the file input
                      document.getElementById(
                        "file-upload-label"
                      ).textContent = "No file chosen"; // Reset the label text
                      document.getElementById(
                        "file-upload-close"
                      ).style.display = "none"; // Hide the close icon
                    }}
                    style={{ display: "none", cursor: "pointer" }}
                  >
                    &#x2715; {/* Close icon (×) */}
                  </span>
                </div>
                <div className="d-flex justify-content-center mt-4 mb-3">
                  <input
                    type="submit"
                    name="submit"
                    value="Send it"
                    className="submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Careers;
