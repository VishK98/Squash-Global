import React from 'react'
import "./ServiceDetails.css"
import img from "../../assets/images/Creative.png";
import AnimatedText from '../Animations/TextAnimation';

function Creative() {
  return (
    <div>
       <div className='container'>
      <div class="route-text">
        <ol class="breadcrumb route-text mt-3">
          <li>
            <a
              href="/"
              style={{ color: "grey", textDecoration: "none" }}
            >
              <AnimatedText text="Service /" animation="slide-left" />
            </a>
          </li>
          <li>
            <AnimatedText text="&nbsp; CREATIVE" animation="slide-right" />
          </li>
        </ol>
      </div>
      <div className='row mt-lg-4'>
        <div className='col-lg-5 col-md-5 col-12'>
          <img src={img} className='tittle-img' alt='' />
        </div>
        <div className='col-lg-7 col-md-7 col-12'>
          <h1 className="big-title page-head">CREATIVE</h1>
          <h3 className='mt-lg-3'>TURN IDEAS INTO REALITY</h3>
          <p>Illustration implies a thousand word. That being said, arguably, none can deny the fact that Creatives are the sole of all types of marketing and advertising. 
            From the time immemorial, Creative ads, posters, graphics are being imprinted on the mind of the consumers. 
            Creative messages are so strong that consumers end up remembering a Brand with the creatives. 
            But all are a fantasy dream and nothing else, if you lack the ability to use the power of Creative marketing to its fullest form.</p>
            <p>At Squash, our creative advertising team collaborate on the creative concept for an advertising campaign and calculate its effectiveness. 
              Our bold and persuasive approach give meaning to your Brand in many ways. 
              If you struggling to put your Brand in the consumers' eye in a meaningful and long-lasting way, Squash is the perfect destination for you. </p>
          <h3>PROFESSIONAL DESIGN SERVICES FOR YOUR BUSINESS</h3>
          <ul>
          <li>Emailer Design</li>
          <li>Poster Design </li>
          <li>Infographic Design</li>
          <li>Website & App Banner Design</li>
          <li>Blog Images</li>
          <li>Logo Design</li>
          <li>Presentation Design</li>
          <li>E-Book Design</li>
          <li>Newsletter Design</li>
          <li>Whitepaper Design</li>
          </ul>
          <p>Want the same for your Business?</p>
          <p>How about catching up for a Coffee!</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Creative