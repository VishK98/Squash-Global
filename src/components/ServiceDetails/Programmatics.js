import React from 'react'
import "./ServiceDetails.css"
import img from "../../assets/images/PROGRAMMATIC ADVERTISING.png";
import AnimatedText from '../Animations/TextAnimation';
function Programmatics() {
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
         <AnimatedText text="&nbsp; PROGRAMMATIC ADVERTISING" animation="slide-right" />
       </li>
     </ol>
   </div>
   <div className='row mt-lg-4'>
     <div className='col-lg-5 col-md-5 col-12'>
       <img src={img} className='tittle-img' alt='' />
     </div>
     <div className='col-lg-7 col-md-7 col-12'>
       <h1 className="big-title page-head">PROGRAMMATIC ADVERTISING</h1>
       <h3 className='mt-lg-3'>DATA DRIVEN DIGITAL STRATEGIES </h3>
       <p>In digital marketing sphere, things keep on changing its course with the media consuming habits of the audiences. Sometimes, brands must deploy targeted approach across the digital spectrum to hit the bullseye. That is where programmatic advertising and TAW comes into play. </p>
         <p>Programmatic advertising refers to the buying and selling digital advert space through automated platforms. Whereas TAW empowers the advertisers with advanced targeting capabilities within the scope of programmatic advertising. Our strategic media planning helps to display ads to the right audience at the right time with our plenty of targeting options like geolocation targeting, audience targeting, IP targeting, contextual targeting, retargeting and many more.</p>
         <p>TAW has in-house capabilities to drive programmatic advertising for Brands, devise digital strategies driven by data and optimized ad campaign directed to the niched audiences. </p>
       <h3>OUR PROGRAMMATIC ADVERTISING OFFERINGS:</h3>
       <p>With TAW, you can leverage the following benefits of programmatic advertising that will provide an edge to your brand over generic: </p>
       <ul>
       <li>Scalable and Flexible Spending</li>
       <li>Large Reach</li>
       <li>Transparency</li>
       <li>Efficiency</li>
       <li>Targeting</li>
       <li>Real-Time Data</li>
       </ul>
         <p>Want the same for your Business?</p>
         <p>How about catching up for a Coffee!</p>
     </div>
   </div>
 </div>
 </div>
  )
}

export default Programmatics