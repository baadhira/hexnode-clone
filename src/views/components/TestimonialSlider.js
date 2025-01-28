import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import justim from '../assets/images/justin-modrak.png'
import dalibor from '../assets/images/dalibor-kruljac.png'
import chris from '../assets/images/chris-robinson.png'
import prevIcon from '../assets/images/prev-arrow-icon-black.svg'
import nextIcon from '../assets/images/next-arrow-icon-black.svg'

const testimonials = [
  {
    image: justim,
    quote: "Hexnode is of great value. Works great with Android and iOS!",
    name: "Justin Modrak",
    title: "Technology Coordinator",
    company: "East Troy Community School District"
  },
  {
    image: dalibor,
    quote: "Most complete MDM solution I found, and I tested many of them, including major names",
    name: "Dalibor Kruljac",
    title: "",
    company: "KAMELEYA LTD"
  },
  {
    image: chris,
    quote: "It seemed to be in-line with everything we were looking at.",
    name: "Chris Robinson",
    title: "Executive Account Manager, NCS",
    company: ""
  }
];

const TestimonialSlider = () => {
  const [isLastSlide, setIsLastSlide] = useState(false);

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <h2 className="section-title-testimonial">Why should you choose Hexnode?</h2>
        
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            prevEl: '.prev-button',
            nextEl: '.next-button'
          }}
          onReachEnd={() => setIsLastSlide(true)}
          onResetSwiper={() => setIsLastSlide(false)}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-slide-slide">
                <div className="testimonial-image-img">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                
                <div className="testimonial-content-con">
                  <div className="quote-container">
                    <h4>"{testimonial.quote}"</h4>
                  </div>
                  
                  <div className="author-details">
                    <div className="separator"></div>
                    <p className="author-name">{testimonial.name}</p>
                    {testimonial.title && (
                      <small className="author-title">{testimonial.title}</small>
                    )}
                    {testimonial.company && (
                      <small className="author-company">{testimonial.company}</small>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        <div className="navigation-buttons">
          <button 
            className="prev-button navigation-button" 
            disabled={false}
          >
            <img 
              src={prevIcon}
              alt="Previous" 
            />
          </button>
          
          <button 
            className="next-button navigation-button" 
            disabled={isLastSlide}
          >
            <img 
              src={nextIcon} 
              alt="Next" 
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;

// Accompanying CSS
const styles = `
.testimonial-section {
  background-color: #F7F7F7;
  padding-top: 60px;
  padding-bottom: 30px;
}

.testimonial-container {
  width: 88%;
  max-width: 1300px;
  margin: 0 auto;
  position: relative;
}

.section-title-testimonial {
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  color: #020a19;
  margin-bottom: 20px;
}

.testimonial-slide-slide {
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 18px;
  overflow: hidden;
}

.testimonial-image-img {
  max-height: 320px;
  overflow: hidden;
}

.testimonial-image-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.testimonial-content-con {
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.quote-container h4 {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #020a19;
}

.author-details {
  text-align: center;
  margin-top: 20px;
  position: relative;
}

.separator {
  height: 2px;
  width: 100%;
  background-color: #F7F7F7;
  position: absolute;
  top: -20px;
  border-radius: 5px;
}

.author-name {
  font-size: 20px;
  font-weight: bold;
  color: #020a19;
}

.author-title, .author-company {
  display: block;
  font-size: 14px;
  color: #020a19;
  opacity: 0.7;
}

.navigation-buttons {
  position: absolute;
  bottom: -80px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.navigation-button {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.navigation-button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.navigation-button img {
  max-width: 9px;
  max-height: 17px;
}
`;