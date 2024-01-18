import React, { useState, useEffect, useRef } from "react";
import jobPost from "../../assets/images/juniorpm-logo.png";
import "./Cards.css";
import "./Careers.css";

function JobCard({
  title,
  location,
  experience,
  responsibilities,
  requirements,
}) {
  const [isClicked, setIsClicked] = useState(false);
  const cardRef = useRef(null);
  const applyNowRef = useRef(null);

  const handleFlip = () => {
    setIsClicked(!isClicked);
  };

  const handleClickOutside = (event) => {
    if (cardRef.current && !cardRef.current.contains(event.target)) {
      setIsClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isClicked && applyNowRef.current) {
      applyNowRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isClicked]);

  return (
    <div className="col-xs-12 col-sm-6 col-md-4 mt-4">
      <div ref={cardRef} className={`card ${isClicked ? "flipped" : ""}`}>
        <div className="front">
          <div className="card-body text-center">
            <img className="img-fluid" src={jobPost} alt="card image" />
            <h4 className="card-title mt-3">{title}</h4>
            <div className="row mt-3">
              <div className="col">
                <p style={{ fontWeight: "500" }}>Location: {location}</p>
              </div>
              <div className="col">
                <p style={{ fontWeight: "500" }}>Experience: {experience}</p>
              </div>
            </div>
            <div className="row" >
              <div className="col">
                <p style={{ fontWeight: "500",marginRight:"65px" }}>Salary: 4-6 LPA </p>
              </div>
              <div className="col">
                <p style={{ fontWeight: "500" }}>Posted on: 10-01-2024</p>
              </div>
            </div>
            
            <div>
            <button className="apply-now-btn mt-3" onClick={handleFlip}>
              {isClicked ? "Close" : "Details"}
            </button>
            </div>
          </div>
        </div>
        <div
          className="back"
          style={{ display: isClicked ? "block" : "none" }}
          ref={applyNowRef}
        >
          <div className="card-body">
            <h4 className="card-title text-center">{title}</h4>
            <p style={{ fontWeight: "bold" }}>Responsibilities</p>
            <ul className="card-text" style={{ marginLeft: "15px" }}>
              {responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
            <p style={{ fontWeight: "bold" }}>Requirements</p>
            <ul className="card-text" style={{ marginLeft: "15px" }}>
              {requirements.map((requirement, index) => (
                <li key={index}>{requirement}</li>
              ))}
            </ul>
            <div className="row " style={{ justifyContent: "space-evenly" }}>
              <button className="apply-now-btn mt-3">Apply Now</button>
              <button onClick={handleFlip} className="apply-now-btn mt-3">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function JobList() {
  const jobData = [
    {
      title: "Jr. Project Manager",
      location: "Mumbai, India",
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
    // Add more job data objects as needed
    {
      title: "Jr. Project Manager",
      location: "Mumbai, India",
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
      title: "Jr. Project Manager",
      location: "Mumbai, India",
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

  return (
    <div className="row">
      {jobData.map((job, index) => (
        <JobCard
          key={index}
          title={job.title}
          location={job.location}
          experience={job.experience}
          responsibilities={job.responsibilities}
          requirements={job.requirements}
        />
      ))}
    </div>
  );
}

export default JobList;
