import React from 'react'
import "./ServiceDetails.css"
import img from "../../assets/images/Influencer.png";
import AnimatedText from '../Animations/TextAnimation';
function Influencer() {
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
         <AnimatedText text="&nbsp; INFLUENCER MARKETING" animation="slide-right" />
       </li>
     </ol>
   </div>
   <div className='row mt-lg-4'>
     <div className='col-lg-5 col-md-5 col-12'>
       <img src={img} className='tittle-img' alt='' />
     </div>
     <div className='col-lg-7 col-md-7 col-12'>
       <h1 className="big-title page-head">INFLUENCER MARKETING</h1>
       <h3 className='mt-lg-3'>STEP INTO THE NEW NORMAL OF DIGITAL SPHERE  </h3>
       <p>Influencers are like modern marketing currency. With incredible cultural and consumer sway, their involvement can practically guarantee thousands of watchers or listeners. To attract customers, your business should let these social media stars light the way. Curious about how to harness the marketing power of influencers? TAW is here to help you guide through the path. </p>
         <p>Our influencer outreach services will help you reach new audiences and create effective amplification of your Brand communication. At TAW, we incorporate influencer marketing into your social media strategy to reach a niche, more engaged audience segment and expand your brand's presence.</p>
       <h3>WHY CHOOSE US?</h3>
       <ul>
       <li>Collaboration with popular and relevant influencers in your niche to promote your Brand and increase your revenue.</li>
       <li>Identification & targeting the right audience relevant to your niche and public personas align with your Brand's image.</li>
       <li>Increasing visibility to your Brand and starting meaningful conversation about it.</li>
       <li>Revamping your content strategy to hit the right cord with your audience.</li>
       <li>Depending on the marketing objective, working with influencers to create engaging content, announce giveaways, host Q & A sessions, etc.</li>
       </ul>
       <h3>YOUR BRAND, OUR PRIORITY</h3>
       <ul>
        <li>Hyper-focusing on niche influencers</li>
        <li>Creating waves across multiple platforms</li>
        <li>Playing the long-term game with long-term partnership</li>
        <li>Authenticity over perfection</li>
       </ul>
         <p>Want the same for your Business?</p>
         <p>How about catching up for a Coffee!</p>
     </div>
   </div>
 </div>
 </div>
  )
}

export default Influencer