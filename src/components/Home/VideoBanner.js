
import React from 'react';
import './VideoBanner.css';
import squashVideo from "../../assets/squash.mp4";


const VideoBanner = () => {
  return (
    <div className="video-banner">
      <video autoPlay loop muted playsInline>
        <source src={squashVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBanner;
