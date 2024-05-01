import React, { useState } from 'react';

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
        <div style={{ position: 'fixed', zIndex: 1, left: 0, top: 0, width: '100%', height: '100%', overflow: 'auto', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#fefefe', padding: '10px', border: '1px solid #888', maxWidth: '60%' }}>
                <span style={{ position: 'absolute', top: '10px', right: '10px', color: '#aaa', fontSize: '24px', fontWeight: 'bold', cursor: 'pointer' }} onClick={onClose}>&times;</span>
                <form onSubmit={handleSubmit}>
                    <div style={{ padding: '10px', background: '#fff', boxShadow: '-1px 1px 16px -4px rgba(0, 0, 0, 0.21)' }}>
                        <h2 style={{ fontSize: '24px', color: '#58595b', fontWeight: '400', marginBottom: '10px' }}>Connect With Us</h2>
                        <div>
                            <input type="text" placeholder="Name" name="name" required="" maxLength="100" style={{ width: '100%', marginBottom: '10px', padding: '5px', fontSize: '14px', borderBottom: '1px solid #053187', color: '#58595b', background: 'none' }} />
                            <input type="text" placeholder="Email" name="email" required="" maxLength="100" style={{ width: '100%', marginBottom: '10px', padding: '5px', fontSize: '14px', borderBottom: '1px solid #053187', color: '#58595b', background: 'none' }} />
                            <input type="text" placeholder="Phone No" name="contact" onKeyPress={(event) => { return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57 }} minLength="10" maxLength="10" required="" style={{ width: '100%', marginBottom: '10px', padding: '5px', fontSize: '14px', borderBottom: '1px solid #053187', color: '#58595b', background: 'none' }} />
                            <select id="category" name="category" style={{ width: '100%', marginBottom: '10px', padding: '5px', fontSize: '14px', borderBottom: '1px solid #053187', color: '#58595b', background: 'none' }} onChange={handleChange}>
                                <option value="">Please Select Services</option>
                                <option value="Social Media Management (SMM)">Social Media Management (SMM)</option>
                                <option value="Search Engine Optimisation (SEO)">Search Engine Optimisation (SEO)</option>
                                <option value="Public Relation (PR)">Public Relation (PR)</option>
                                <option value="Paid Ads">Paid Ads</option>
                                <option value="Website Design and Developments">Website Design and Developments</option>
                                <option value="Creative Design">Creative Design</option>
                                <option value="Content Solutions">Content Solutions</option>
                                <option value="Influencer Marketing">Influencer Marketing</option>
                                <option value="Film & Photography">Film & Photography</option>
                            </select>
                            <textarea name="message" placeholder="Message" style={{ width: '100%', marginBottom: '10px', padding: '5px', fontSize: '14px', borderBottom: '1px solid #053187', color: '#58595b', background: 'none', resize: 'none', height: '40px' }}></textarea>
                            <label style={{ display: 'block', paddingLeft: '27px', cursor: 'pointer', fontSize: '12px', color: '#303030', position: 'relative', lineHeight: '17px', userSelect: 'none', marginBottom: '10px' }}>I have read and agree to the <a href="https://www.hashtagorange.in/privacy-policy" target="_blank" style={{ color: '#58595b', textDecoration: 'underline' }}>privacy policy</a>
                                <input type="checkbox" name="agree" id="agree" value="" style={{ position: 'absolute', opacity: '0', cursor: 'pointer', height: '0', width: '0' }} />
                                <span style={{ position: 'absolute', top: '0', left: '0', height: '15px', width: '15px', background: '#fff', border: '1px solid #053187', borderRadius: '100px' }}></span>
                            </label>
                            <input type="submit" value="Submit" style={{ padding: '5px 20px', borderRadius: '100px', fontSize: '14px', fontWeight: '600', color: '#58595b', border: '1px solid #58595b', cursor: 'pointer' }} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormPopUp;
