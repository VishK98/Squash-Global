import React from "react";
import "./Footer.css";

import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="text-center text-white footer-background ">
        <div className="container pt-3 mt-4">
          <section >
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://www.facebook.com/profile.php?id=100091281026430&mibextid=ZbWKwL"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <FaFacebookF />
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://twitter.com/global_squash"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <FaTwitter />
            </a>
{/* 
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <FaGoogle />
            </a> */}

            {/* Instagram */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://www.instagram.com/global_squash/"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <FaInstagram />
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://www.linkedin.com/company/squash-global/"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <FaLinkedin />
            </a>
          </section>
        </div>
        <div className="text-center text-dark p-3">
          © 2024 Squash Global. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;
