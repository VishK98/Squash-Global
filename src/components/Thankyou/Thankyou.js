import React from 'react';
import "./Thankyou.css";
import { Link } from "react-router-dom";


function Thankyou() {
    return (
        <>
            <div>
                <div className="wrapper-1">
                    <div className="wrapper-2">
                        <h1 className='head'>Thank you !</h1>
                        <p>Thanks for subscribing to our news letter.  </p>
                        <p>you should receive a confirmation email soon  </p>
                        <Link to="/" class="btn-flip mt-lg-4 mt-2" >
              <button class="req-btn"><i class="animation"></i>Go to home<i class="animation"></i>
              </button>
            </Link>
                    </div>
                   
                </div>
            </div>



            {/* <link href="https://fonts.googleapis.com/css?family=Kaushan+Script|Source+Sans+Pro" rel="stylesheet"></link> */}
        </>
    )
}

export default Thankyou