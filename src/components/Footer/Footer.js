import React from "react";
import "./Footer.css";
import instagram from "../../assets/images/socialMedia/instagram.png";
import facebook from "../../assets/images/socialMedia/facebook.png";
import linkedin from "../../assets/images/socialMedia/linkedin.png";
import twitter from "../../assets/images/socialMedia/twitter.png";
import AnimatedText from '../Animations/TextAnimation';

function Footer() {
  return (
    <footer>
      <div className="socialMedia text-center">
        <a href="https://www.facebook.com/theagencyway" target="_blank" rel="noopener noreferrer">
          <img className="socialMedia social-media-icon" src={facebook} alt="Facebook Icon"></img>
        </a>
        <a href="https://www.instagram.com/_theagencyway/" target="_blank" rel="noopener noreferrer">
          <img className="socialMedia social-media-icon" src={instagram} alt="Instagram Icon"></img>
        </a>
        <a href="https://twitter.com/_theagencyway" target="_blank" rel="noopener noreferrer">
          <img className="socialMedia social-media-icon" src={twitter} alt="Twitter Icon"></img>
        </a>
        <a href="https://www.linkedin.com/company/theagencyway/" target="_blank" rel="noopener noreferrer">
          <img className="socialMedia social-media-icon" src={linkedin} alt="LinkedIn Icon"></img>
        </a>
      </div>
      <AnimatedText text={<div className="text-center text-dark p-3">
        © {new Date().getFullYear()} TAW-the agency way. All Rights Reserved.
      </div>} animation='slide-left' />
    </footer>
  );
}

export default Footer;
