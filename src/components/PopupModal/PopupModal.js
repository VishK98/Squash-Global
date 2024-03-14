import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import "./PopupModal.css";

function PopupModal({ show, onHide, apiResponse }) {
  const [loading, setLoading] = useState(true);
  var message =
    "Please stand by as we work on sending your request to our administrator.";

  useEffect(() => {
    // console.log(`Popup ==>${apiResponse}`);
    if (apiResponse) {
      setLoading(false);
      message = "";
    }
  }, [apiResponse]);

  return (
    <Modal show={show} onHide={onHide} centered backdrop="static">
      <div className="modal-body">
        <div className="close-btn" onClick={onHide}></div>
        <div>
          <div class="flex">
            <div className={`${loading ? "loader" : "loader-done"}`}></div>
          </div>
          {loading ? (
            <div class="loading-text">{message}</div>
          ) : (
            <p className="respose-text">{apiResponse.message}</p>
          )}
        </div>
      </div>
    </Modal>
  );
}

export default PopupModal;
