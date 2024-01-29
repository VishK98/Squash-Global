// PopupModal.js
import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import "./PopupModal.css";

function PopupModal(onClose) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        state: "",
        contactNumber: "",
        about: ""
      });

      const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
    
        // Validate the form fields
        if (validateForm()) {
          // If the form is valid, you can access the form data from the state
          console.log("Form data:", formData);
          // Perform any other actions here, such as sending the data to a server
        } else {
          // Form is not valid, handle the error or display a message to the user
          console.log("Form is not valid");
        }
      };

      const handleChange = (event) => {
        // Update the form data state when the form fields change
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
    
      const validateForm = () => {
        // Perform validation logic here
        // For example, check if the required fields are not empty
        return (
          formData.name.trim() !== "" &&
          formData.email.trim() !== "" &&
          formData.state.trim() !== "" &&
          formData.contactNumber.trim() !== "" &&
          formData.about.trim() !== ""
        );
      };
    
    const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    // Update the state to show the modal when the component mounts
    setShowModal(true);
  }, []);

  const closeModal = () => {
    // Function to close the modal
    setShowModal(false);
    onClose(); // Call the onClose prop when the modal is closed
  };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        // Set a timer to show the modal after 10 seconds
        const timer = setTimeout(() => {
            handleShow();
        }, 20000); // 20 seconds in milliseconds

        return () => {
            // Clear the timer if the component is unmounted before the 10 seconds
            clearTimeout(timer);
        };
    }, []); // Run this effect only once on mount

    return (
        <>
            <Modal show={show} onHide={handleClose} centered backdrop="static" keyboard={false}>
            <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="row align-items-center mb-3">
              <div className="col">
                <h4 className="modal-title text-center animated-title">
                  Get in touch with us
                </h4>
              </div>
              <div className="col-auto">
                <button className="depth" type="button" onClick={handleClose}>
                  &#x2716;
                </button>
              </div>
            </div>
            <div id="contactForm">
              <label>
                Full Name
                <sup style={{ color: "red", marginLeft: "5px", fontWeight: "bold" }}>*</sup>
              </label>{" "}
              <br />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Type here"
                autoComplete="off"
                className="form-field mb-2"
                required
              />
              <div id={`applyNowButton`} style={{ display: "flex", marginBottom: "1rem" }}>
                <div style={{ flex: 1, marginRight: "1rem" }}>
                  <label>
                    Email
                    <sup style={{ color: "red", marginLeft: "5px", fontWeight: "bold" }}>*</sup>
                  </label>{" "}
                  <br />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Type here"
                    autoComplete="off"
                    className="form-field"
                    required
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label>
                    State
                    <sup style={{ color: "red", marginLeft: "5px", fontWeight: "bold" }}>*</sup>
                  </label>{" "}
                  <br />
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="Type here"
                    autoComplete="off"
                    className="form-field"
                    required
                  />
                </div>
              </div>
              <label>
                Contact number
                <sup style={{ color: "red", marginLeft: "5px", fontWeight: "bold" }}>*</sup>
              </label>{" "}
              <br />
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="+91 9900000088"
                autoComplete="off"
                className="form-field mb-2"
                pattern="[0-9]{10}"
                required
              />
              <label>Write something about yourself</label> <br />
              <input
                type="text"
                name="about"
                value={formData.about}
                onChange={handleChange}
                placeholder="Type here"
                autoComplete="off"
                className="form-field"
                required
              />
            </div>
            <div className="text-center mb-1 mt-3">
              <button type="submit" className="submit-depth">
                Submit
              </button>
            </div>
          </form>
        </Modal.Body>
             
                {/* <div className="text-center mb-3">
                    <button class="submit-depth" type="button" onClick={handleClose}>Submit</button>


                </div> */}

            </Modal>
        </>
    );
}

export default PopupModal;
