import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import testimonialOne from "../assets/images/testimonialOne.png";
import testimonialTwo from "../assets/images/testimonialTwo.png";
import testimonailThree from "../assets/images/testimonialThree.png";



const TestimonialSwiper = () => {
  const swiperRef = useRef(null);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);

  const testimonials = [
    {
      image: testimonialOne,
      quote: 'Hexnode is of great value. Works great with Android and iOS!',
      name: 'Justin Modrak',
      title: 'Technology Coordinator',
      company: 'East Troy Community School District'
    },
    {
      image: testimonialTwo,
      quote: 'Another great experience with the product!',
      name: 'Sarah Johnson',
      title: 'IT Manager',
      company: 'Global Tech Solutions'
    },
    {
      image: testimonailThree,
      quote: 'Incredible performance and support!',
      name: 'Michael Chen',
      title: 'Operations Director',
      company: 'Innovation Partners'
    }
  ];

  const handleSlideChange = (swiper) => {
    setIsFirstSlide(swiper.isBeginning);
    setIsLastSlide(swiper.isEnd);
  };

  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        className="testimonial-swiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-slide">
              <div className="testimonial-image">
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
              <div className="testimonial-content">
                <h1>{testimonial.quote}</h1>
                <h2>{testimonial.name}</h2>
                <hr />
                <h5>{testimonial.title}</h5>
                <h5>{testimonial.company}</h5>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="navigation-buttons">
        <button
          className="custom-prev-button"
          onClick={() => swiperRef.current?.slidePrev()}
          disabled={isFirstSlide}
        >
          <img src="/prev-arrow.svg" alt="Previous" />
        </button>
        <button
          className="custom-next-button"
          onClick={() => swiperRef.current?.slideNext()}
          disabled={isLastSlide}
        >
          <img src="/next-arrow.svg" alt="Next" />
        </button>
      </div>

      <style jsx>{`
        .carousel-container {
          width: 80%;
          height: 30vh;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px 0;
        }

        .testimonial-swiper {
          width: 100%;
          height: 100%;
        }

        .testimonial-slide {
          display: flex;
          flex-direction: column;
          height: 300%;
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid #e0e0e0;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        .testimonial-image {
          width: 100%;
          height: 50%;
        }

        .testimonial-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .testimonial-content {
          width: 100%;
          height: 50%;
          padding: 15px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .navigation-buttons {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 15px;
        }

        .custom-prev-button,
        .custom-next-button {
          background: white;
          border: 1px solid #e0e0e0;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .custom-prev-button:disabled,
        .custom-next-button:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .custom-prev-button:hover:not(:disabled),
        .custom-next-button:hover:not(:disabled) {
          transform: scale(1.1);
          box-shadow: 0 4px 6px rgba(0,0,0,0.2);
        }

        .custom-prev-button img,
        .custom-next-button img {
          max-width: 20px;
          max-height: 20px;
          object-fit: contain;
        }

        @media (min-width: 768px) {
          .testimonial-slide {
            flex-direction: row;
            height: 160px;
          }

          .testimonial-image {
            width: 30%;
            height: 100%;
          }

          .testimonial-content {
            width: 70%;
            height: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default TestimonialSwiper;