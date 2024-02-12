import React from 'react'
import "./ServiceDetails.css"
import img from "../../assets/images/Production.png";
import AnimatedText from '../Animations/TextAnimation';

function Production() {
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
         <AnimatedText text="&nbsp; PRODUCTION " animation="slide-right" />
       </li>
     </ol>
   </div>
   <div className='row mt-lg-4'>
     <div className='col-lg-5 col-md-5 col-12'>
       <img src={img} className='tittle-img' alt='' />
     </div>
     <div className='col-lg-7 col-md-7 col-12'>
       <h1 className="big-title page-head">PRODUCTION</h1>
       <h3 className='mt-lg-3'>THOUSANDS OF EMOTIONS IN MOTION</h3>
       <p>If an illustration implies a thousand words, a Video shows a thousand illustrations. Storytelling is an art. Squash Global is an artist who knows how to weave beautiful stories with moving pictures. Whether it is a six seconds ad film or a complete digital film, our team has got everything covered with their intimidating storytelling techniques. We craft videos that stands out compelling both your visual and auditory senses. With Squash, you can step into the full-scale video revolution era faster grasping the latest trends in a blink of an eye. Our video production services have been proven to better connect with the audiences and establish a dominant online presence. </p>
       <h3>OUR OFFERINGS FOR MEDIA PRODUCTION SERVICES:</h3>
         <p>We assist you with a wide range of different services by bringing an arsenal of different skills and capabilities to the table.</p>
       <ul>
       <li>Scripting</li>
       <li>Story-boarding</li>
       <li>Filming</li>
       <li>Editing</li>
       <li>Color-Correction</li>
       <li>Visual Effects</li>
       <li>Animation</li>
       <li>Distribution</li>
       </ul>
       <p>Want the same for your business?</p>
       <p>How about catching up for Coffee!</p>
     </div>
   </div>
 </div>
 </div>
  )
}

export default Production