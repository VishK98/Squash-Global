import React, { useState } from 'react';
import './FormPopUp.css';
import PopupModal from "../PopupModal/PopupModal";
import { contactUs } from "../../utils/api";
import { contactUsMail } from "../../utils/api";


const FormPopUp = ({ isOpen, onClose, onSubmit }) => {
    const [modalShow, setModalShow] = useState(false);
    const [apiResponse, setApiResponse] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        companyName: '',
        contact: '',
        service: '',
        message: ''
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (
            formData.name &&
            formData.email &&
            formData.contact &&
            formData.companyName &&
            formData.service !== "selected"
        ) {
            try {
                setModalShow(true);
                const response = await contactUs(formData);
                // console.log("Response:", response.success);
                if (response.success) {
                    await sendMail(formData); // Wait for sendMail() to complete
                    setApiResponse(response);
                    setModalShow(true);
                    const resetValue = {
                        name: "",
                        email: "",
                        contact: "",
                        companyName: "",
                        service: "",
                        message: "",
                    };
                    setFormData(resetValue);
                    window.location.href = "/thankyou";
                }
            } catch (error) {
                console.error("Error submitting form for admin:", error);
            }
        } else {
            alert("Please fill out all fields and select a service.");
        }
    };
    const sendMail = async (formData) => {
        // Pass formData as an argument
        try {
            const response = await contactUsMail(formData);
            console.log(`Mail response ==> ${response.data}`);
        } catch (error) {
            console.error("Error submitting form for mail:", error);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <button className="button" onClick={onClose}>
                    <span className="X"></span>
                    <span className="Y"></span>
                </button>

                <form onSubmit={handleSubmit}>
                <h4 className='text-center text-black'>Connect With Us</h4>

                    <div className='row'>
                        <div className='col-md-6 col-lg-6'>
                            <input
                                className="input"
                                placeholder="Enter your full name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='col-md-6 col-lg-6'>
                            <input
                                className="input"
                                placeholder="Enter your email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6 col-lg-6'>
                            <input
                                className="input"
                                placeholder="Enter your company name"
                                name="companyName"
                                type="text"
                                value={formData.companyName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='col-md-6 col-lg-6'>
                            <input
                                className="input"
                                placeholder="Enter your contact"
                                name="contact"
                                type="tel"
                                value={formData.contact}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <select
                            className="input"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Service</option>
                            <option value="Social Media Management (SMM)">
                                Social Media Management (SMM)
                            </option>
                            <option value="Search Engine Optimisation (SEO)">
                                Search Engine Optimisation (SEO)
                            </option>
                            <option value="Public Relation (PR)">
                                Public Relation (PR)
                            </option>
                            <option value="Paid Ads">Paid Ads</option>
                            <option value="Website Design and Developments">
                                Website Design and Developments
                            </option>
                            <option value="Creative Design">Creative Design</option>
                            <option value="Content Solutions">Content Solutions</option>
                            <option value="Influencer Marketing">
                                Influencer Marketing
                            </option>
                            <option value="Film & Photography">Film & Photography</option>
                        </select>
                    </div>
                    <div>
                        <textarea
                            className="input"
                            placeholder="Enter your message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="fancy">
                        <span className="top-key"></span>
                        <span className="text">Submit</span>
                        <span className="bottom-key-1"></span>
                        <span className="bottom-key-2"></span>
                    </button>
                    <PopupModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        apiResponse={apiResponse}
                    />
                </form>
            </div>
        </div>
    );
};

export default FormPopUp;
