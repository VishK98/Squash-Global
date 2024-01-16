import React from 'react';
import { AutoplaySlider } from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/dist/styles.css';

const SliderComponent = () => {
  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false}
      interval={6000}
      cssModule={AwesomeSliderStyles}
    >
      <div data-src="/path/to/image-0.jpg" />
      <div data-src="/path/to/image-1.jpg" />
      <div data-src="/path/to/image-2.jpg" />
      <div data-src="/path/to/image-3.jpg" />
    </AutoplaySlider>
  );
};

export default SliderComponent;
