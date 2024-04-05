import React from 'react';
import "./Thankyou.css";
import { Link } from "react-router-dom";


function Thankyou() {
    return (
        <div className="wrapper-1">
            <div className="wrapper-2">
                <h1 className='head'>Thank you !</h1>
                <p>Your form submission has been received.</p>
                <p>you should receive a confirmation email soon  </p>
                <Link to="/" className="btn-flip mt-lg-4 mt-2" >
                    <button className="req-btn"><i className="animation"></i>Go to home<i className="animation"></i>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Thankyou