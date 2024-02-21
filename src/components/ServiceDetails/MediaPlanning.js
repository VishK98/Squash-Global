import React from 'react'
import "./ServiceDetails.css"
import img from "../../assets/images/mplanning.png";
import AnimatedText from '../Animations/TextAnimation';


function MediaPlanning() {
  return (
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
            {/* <AnimatedText text="&nbsp;MEDIA PLANNING AND BUYING" animation="slide-right" /> */}
            <AnimatedText text="&nbsp;Media planning and buying" animation="slide-right" />

          </li>
        </ol>
      </div>
      <div className='row mt-lg-4'>
        <h1 className="big-title page-head" style={{ fontSize: '45px', fontWeight: "bold",textAlign: "center" }}>MEDIA PLA<span className='underline-custom service-title'>NNING AND</span> <span className='service-title'>BUYI</span>NG</h1>
        <div className='col-lg-5 col-md-5 col-12 mt-lg-3'>
          <img style={{height: "91%", width: "100%"}} src={img} className='tittle-img' alt='' />
        </div>
        <div className='col-lg-7 col-md-7 col-12'>
          <div style={{height: "2px", width: "100%",background: "#4c029e",marginTop: "18px",marginTop:"30px"}}></div>
          <h6 className='underline-custom-1 service-title-1'>FROM TRADITIONAL TO DIGITAL</h6>
          {/* <h4 className=''>We Cover It ALL!</h4> */}
          <AnimatedText text={<h3>We Cover It ALL !!!</h3>} animation="slide-left" className="service-heading" />
          <p>The medium is the power and to harness that power you need Media Planning experts by your side who knows how and when to deliver that message to the right people.</p>
          <p> TAW ensures your billions of advertising dollars are not wasted by guiding you through proper media planning strategies. We assign a combination of people with skilled knowledge of media, budgeting, content creation, and other areas of expertise related to marketing. Our Media Planning Strategies will certainly help you drive the desired results that you are dreaming of.</p>
          <h3 style={{ fontSize: "35px" }}><span style={{ color: "#4c029e", fontSize: "35px"}}>3 PILLARS  OF  </span> MEDIA<br /> PLANNING</h3>
          <div className='row mt-lg-3'>
            <diV className="col-lg-2 col-12">
              <p className='service-description' >Purpose</p>
            </diV>
            <div className="col-lg-10 col-12"> <p>What are the goals and objectives of the Brand? Does it create awareness and visibility or encourage a viewer to fill out a form? We consider all the possible questions at the early stages of the planning process.</p>
            </div>
          </div>
          {/* <p>Purpose: What are the goals and objectives of the Brand? Does it create awareness and visibility or encourage a viewer to fill out a form? We consider all the possible questions at the early stages of the planning process. </p> */}
          <div className='row'>
            <diV className="col-lg-2 col-12">
              <p className='service-description service-description-1 ' >Audience</p>
            </diV>
            <div className="col-lg-10 col-12 "> <p>Whom are we targeting? Who will likely to be benefitted from the message we are amplifying? Will they be interested in the product? Will they buy it? Will it serve its purpose of developing a long-term relationship between Brand and Customer? The Purpose and the Audience are both sides of a same coin.</p>
            </div>
          </div>
          {/* <p>Audience: Whom are we targeting? Who will likely to be benefitted from the message we are amplifying? Will they be interested in the product? Will they buy it? Will it serve its purpose of developing a long-term relationship between Brand and Customer? The Purpose and the Audience are both sides of a same coin.</p> */}
          <div className='row'>
            <diV className="col-lg-2 col-12">
              <p className='service-description-2 ' >Reach</p>
            </diV>
            <div className="col-lg-10 col-12 "> <p>What would be volume? How many people are we targeting? What would be the frequency? Not everyone consumes the media at the same time. So, it is utmost important to decide the reach and frequency of a campaign..</p>
            </div>
          </div>
          {/* <p>Reach: What would be volume? How many people are we targeting? What would be the frequency? Not everyone consumes the media at the same time. So, it is utmost important to decide the reach and frequency of a campaign. </p> */}
          <h6 className='service-description-3'>All these three are interconnected and our media planning team consider each and every aspect during the early stage of plan formation. </h6>
          <p className='service-description-3'>Want the same for your Business?</p>
          <p className='service-description-3'>How about catching up for a <span style={{ color: "#4c029e" }}>Coffee!</span></p>
          <div style={{height: "2px", width: "100%",background: "#4c029e",marginTop: "18px"}}></div>

        </div>
      </div>
    </div>

  )
}

export default MediaPlanning