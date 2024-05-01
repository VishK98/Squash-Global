import React, { useState } from 'react';
import './FormPopUp.css';

const FormPopUp = ({ isOpen, onClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        companyName: '',
        service: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({
            name: '',
            email: '',
            contact: '',
            companyName: '',
            service: '',
            message: ''
        });
        onClose(); // Close the modal after form submission
    };

    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    </label>
                    <label>
                        Contact:
                        <input type="text" name="contact" value={formData.contact} onChange={handleChange} />
                    </label>
                    <label>
                        Company Name:
                        <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} />
                    </label>
                    <label>
                        Service:
                        <input type="text" name="service" value={formData.service} onChange={handleChange} />
                    </label>
                    <label>
                        Message:
                        <textarea name="message" value={formData.message} onChange={handleChange} />
                    </label>
                    {/* Use className for custom button styling */}
                    <button type="submit" className="custom-button">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default FormPopUp;
