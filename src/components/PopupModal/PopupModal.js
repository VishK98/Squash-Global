import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import "./PopupModal.css";

function PopupModal({ show, onHide, apiResponse }) {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("Please stand by as we work on sending your request to our administrator.");

  useEffect(() => {
    if (apiResponse) {
      setLoading(false);
      setMessage(""); // Update the message state instead of directly assigning to the variable
    }
  }, [apiResponse]);

  return (
    <Modal show={show} onHide={onHide} centered backdrop="static">
      <div className="modal-body">
        <div className="close-btn" onClick={onHide}></div>
        <div>
          <div className={`${loading ? "loader" : "loader-done"}`}></div>
          {loading ? (
            <div className="loading-text">{message}</div>
          ) : (
            <p className="response-text">{apiResponse.message}</p>
          )}
        </div>
      </div>
    </Modal>
  );
}
export default PopupModal;