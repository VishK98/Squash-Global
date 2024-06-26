import React from 'react';
import './GridCard.css';
import AnimatedFadeImage from "../Animations/ImageAnimationFade";
import grid1 from "../../assets/images/specialist-division/Strategy Image.webp";
import grid2 from "../../assets/images/specialist-division/Design Image.webp";
import grid3 from "../../assets/images/specialist-division/Technology Image.webp";

const Card = () => {
    return (
        <div className='row'>
            <div className='col-lg-4 col-md-4 col-12'>
                <div class="grid">
                    <p class="grid-title">Strategy</p>
                    <p class="small-desc">
                        A plan is like a puzzle. Placing the right piece at the right place at the right time, makes it complete- this is what makes TAW different.
                    </p>
                    <div className="grid-grid-image-stat">
                        <AnimatedFadeImage src={grid1} alt="Image not found" />
                    </div>
                    <div class="go-corner">
                        <div class="go-arrow">→</div>
                    </div>
                </div>
            </div>
            <div className='col-lg-4 col-md-4 col-12'>
                <div class="grid">
                    <p class="grid-title">Design</p>
                    <p class="small-desc">
                        Design is more than a holistic approach to achieve aesthetics. For TAW, design is crucial art of storytelling for your Brand.
                    </p>
                    <div className="grid-grid-image-design">
                        <AnimatedFadeImage src={grid2} alt="Image not found" />
                    </div>
                    <div class="go-corner">
                        <div class="go-arrow">→</div>
                    </div>
                </div>
            </div>
            <div className='col-lg-4 col-md-4 col-12'>
                <div class="grid">
                    <p class="grid-title">Technology</p>
                    <p class="small-desc">
                        In today’s digitally evolved world, Technology is the backbone of every dream and vision. Our tech-savvy professionals offer high-quality experience from web development to app design. </p>
                    <div className="grid-grid-image-tech">
                        <AnimatedFadeImage src={grid3} alt="Image not found" />
                    </div>
                    <div class="go-corner">
                        <div class="go-arrow">→</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
