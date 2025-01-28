import React, { useState, useEffect } from "react";
import "../styles/PureCssCarousel.css";

const PureCssCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://media.geeksforgeeks.org/wp-content/uploads/20240308154939/html-(1).jpg",
    "https://media.geeksforgeeks.org/wp-content/uploads/20240308154940/js-(1).jpg",
    "https://media.geeksforgeeks.org/wp-content/uploads/20240308154942/web-(1).jpg",
    "https://media.geeksforgeeks.org/wp-content/uploads/20240308154945/web2-(1).jpg",
  ];

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 3000); // Auto-slide every 3 seconds
    return () => clearInterval(autoSlide);
  }, []);

  return (
    <div className="carousel-container">
      <div
        className="carousel-slides"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="carousel-slide" key={index}>
            <img src={slide} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      <button className="carousel-control prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="carousel-control next" onClick={nextSlide}>
        &#10095;
      </button>

      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${currentSlide === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PureCssCarousel;
