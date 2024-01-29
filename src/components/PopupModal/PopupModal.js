// PopupModal.js
import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import "./PopupModal.css";

function PopupModal(onClose) {
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
                    <div className="row align-items-center mb-3">
                        <div className="col">
                            <h4 className="modal-title text-center animated-title">Get in touch with us</h4>
                        </div>
                        <div className="col-auto">
                            <button class="depth " type="button" onClick={handleClose}>&#x2716;</button>
                        </div>
                    </div>
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
                                className="form-field mb-2"
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
                                        className="form-field"
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
                                        className="form-field"
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
                                placeholder="+91 9900000088"
                                autoComplete="off"
                                className="form-field mb-2"
                            />

                            <label>Write something about yourself</label> <br />
                            <input
                                type="text"
                                name="name"
                                // value={this.state.name}
                                // onChange={this.handleChange}
                                placeholder="Type here"
                                autoComplete="off"
                                className="form-field"
                            />

                        </form>
                    </div>
                </Modal.Body>
                {/* <div className="text-center mb-3">
    <button type="button" className="btn btn-outline-success btn-block">
      Submit
    </button>
//   </div> */}
                <div className="text-center mb-3">
                    <button class="submit-depth" type="button" onClick={handleClose}>Submit</button>


                </div>

            </Modal>
        </>
    );
}

export default PopupModal;
