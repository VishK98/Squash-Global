import React from 'react';
import "./Thankyou.css";

function Thankyou() {
    return (
        <>
            <div>
                <div className="wrapper-1">
                    <div className="wrapper-2">
                        <h1>Thank you !</h1>
                        <p>Thanks for subscribing to our news letter.  </p>
                        <p>you should receive a confirmation email soon  </p>
                        <button className="go-home">
                            go home
                        </button>
                    </div>
                    <div className="footer-like">
                        <p>Email not received?
                            <a href="#">Click here to send again</a>
                        </p>
                    </div>
                </div>
            </div>



            {/* <link href="https://fonts.googleapis.com/css?family=Kaushan+Script|Source+Sans+Pro" rel="stylesheet"></link> */}
        </>
    )
}

export default Thankyou