import React from "react";
import "./Footer.css";
import instagram from "../../assets/images/socialMedia/instagram.png";
import facebook from "../../assets/images/socialMedia/facebook.png";
import linkdin from "../../assets/images/socialMedia/linkedin.png";
import twitter from "../../assets/images/socialMedia/twitter.png";





function Footer() {
  return (
    <>
      <footer>
        <div className="socialMedia text-center">
          <a href="https://www.facebook.com/profile.php?id=100091281026430&mibextid=ZbWKwL" target="_blank">
            <img className="socialMedia social-media-icon" src={facebook} alt="Facebook"></img>
          </a>
          <a href="https://www.instagram.com/global_squash/" target="_blank">
            <img className="socialMedia social-media-icon" src={instagram} alt="Instagram"></img>
          </a>
          <a href="https://twitter.com/global_squash" target="_blank">
            <img className="socialMedia social-media-icon" src={twitter} alt="Twitter"></img>
          </a>
          <a href="https://www.linkedin.com/company/squash-global/" target="_blank">
            <img className="socialMedia social-media-icon" src={linkdin} alt="Linkdin"></img>
          </a>
        </div>
        <div className="text-center text-dark p-3">
          © 2024 Squash Global. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;
