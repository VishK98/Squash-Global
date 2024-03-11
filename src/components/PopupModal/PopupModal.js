import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import "./PopupModal.css";

function PopupModal({ show, onHide, apiResponse }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (apiResponse) {
            setLoading(false);
        }
    }, [apiResponse]);

    return (
        <Modal show={show} onHide={onHide} centered backdrop="static">
            <div className="modal-body">
                <div className="close-btn" onClick={onHide}></div>
                <div>
                    <div class="flex">
                        <div className={`loader ${!loading ? "done" : ""}`}>
                            <div className="tick">&#10004;</div>
                        </div>
                    </div>
                    {loading ? (<div class="loading-text">
                        Loading...
                    </div>) : (<p className="respose-text">{apiResponse.message}</p>)}
                </div>
            </div>
        </Modal>
    );
}

export default PopupModal;
