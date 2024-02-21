import React from 'react'
import "./ServiceDetails.css"
import img from "../../assets/images/WebDevliopment.png";
import AnimatedText from '../Animations/TextAnimation';

function WebsiteDesign() {
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
         <AnimatedText text="&nbsp; WEBSITE DESIGN AND DEVELOPMENT " animation="slide-right" />
       </li>
     </ol>
   </div>
   <div className='row mt-lg-4'>
     <div className='col-lg-5 col-md-5 col-12'>
       <img src={img} className='tittle-img' alt='' />
     </div>
     <div className='col-lg-7 col-md-7 col-12'>
       <h1 className="big-title page-head">WEBSITE DESIGN AND DEVELOPMENT</h1>
       <h3 className='mt-lg-3'>WE CREATE YOUR BRAND'S IDENTITY</h3>
       <p>A website is the first point of contact with your customer. At TAW, we ensure that the first encounter is worth remembering for with an optimum user experience. Our team of developers and designers encode all necessary elements to make your website your Brand's Identity.</p>
       <h3>TAW'S 3 STEPS WEBSITE DESIGN MANTRA:</h3>
         <p>To ensure you set a positive tone for your project to maximize interactions with your targeted site visitors, our Website Designing Process focuses the following points:</p>
       <ul>
       <li>Make your website about your customer not about yourself</li>
       <li>Emphasize your customers outcome</li>
       <li>Help customers do what they are on your website to do</li>
       </ul>
       <h3>8 AWESOME THINGS THAT TAW DOES THAT WILL MAKE YOU GO WOW!</h3>
       <ul>
        <li>Website Designing</li>
        <li>Website Development</li>
        <li>E-Commerce Portal Development</li>
        <li>Content Management System</li>
        <li>Content Management System </li>
         <li>Micro-Sites</li>
         <li>Web Applications</li>
         <li>UI Designing</li>
         <p>Want the same for your Business?</p>
         <p>How about catching up for a Coffee!</p>
       </ul>
     </div>
   </div>
 </div>
 </div>
  )
}

export default WebsiteDesign