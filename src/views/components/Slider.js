import React, { useState } from "react";
import "../styles/Slider.css";
import testimonialOne from "../assets/images/testimonialOne.png";
import testimonialTwo from "../assets/images/testimonialTwo.png";
import testimonialThree from "../assets/images/testimonialThree.png";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [testimonialOne, testimonialOne, testimonialOne];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider-container">
      <button className="slider-button left" onClick={prevSlide}>
        &#10094;
      </button>

      <div className="slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${currentSlide === index ? "active" : ""}`}
          >
            <img src={slide} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      <button className="slider-button right" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
