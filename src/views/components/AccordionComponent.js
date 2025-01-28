import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import "../styles/AccordionComponent.css";
import "../styles/mobileaccordian.css";

import bannerImage1 from "../assets/images/Effortless.png";
import bannerImage2 from "../assets/images/Effortless.png";
import bannerImage3 from "../assets/images/Effortless.png";
import bannerImage4 from "../assets/images/Effortless.png";
import bannerImage5 from "../assets/images/Effortless.png";
import bannerImage from "../assets/images/testimonialOne.png";

const AccordionComponent = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 960);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 960);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const accordionItems = [
    {
      id: 0,
      title: "Effortless kiosk deployment & management",
      content: "Deploy kiosk-enabled devices straight out of the box...",
      image: bannerImage1,
    },
    {
      id: 1,
      title: "Customized interface for brand visibility",
      content:
        "Create a fully customized interface that aligns with your brand's identity...",
      image: bannerImage2,
    },
    {
      id: 2,
      title: "What more can you do with Hexnode kiosk?",
      content: "Hexnode kiosk opens doors to endless possibilities...",
      image: bannerImage3,
    },
    {
      id: 3,
      title: "Secure and update your app ecosystem",
      content: "Ensure your app ecosystem is secure and up-to-date...",
      image: bannerImage4,
    },
    {
      id: 4,
      title: "Provide an easy-to-use interface for end-users",
      content:
        "Simplify user interactions with a clean, intuitive interface...",
      image: bannerImage5,
    },
  ];

  const DesktopAccordion = () => {
    const SlideInBottom = keyframes`
  from { 
    opacity: 0;
    transform: translateY(-100%); 
  }
  to { 
    opacity: 1;
    transform: translateY(0); 
  }
`;

    const SlideInTop = keyframes`
  from { 
    opacity: 0;
    transform: translateY(100%); 
  }
  to { 
    opacity: 1;
    transform: translateY(0); 
  }
`;
    const AnimatedContent = styled.div`
      animation: ${(props) =>
          props.animation === "slide-in-bottom" ? SlideInBottom : SlideInTop}
        0.3s ease forwards;
    `;
    // Animated image container
    const AnimatedImage = styled.div`
      animation: ${(props) =>
          props.animation === "slide-in-bottom" ? SlideInBottom : SlideInTop}
        0.3s ease forwards;
      width: 40%;
      height: ${(props) => props.height};
      object-fit: cover;
    `;
    const [activeIndex, setActiveIndex] = useState(0);
    const [animationDirection, setAnimationDirection] = useState("");
    const [prevIndex, setPrevIndex] = useState(null);
    const [contentKey, setContentKey] = useState(0);
    const [imageKey, setImageKey] = useState(0);

    const accordionItems = [
      {
        id: 0,
        title: "Effortless kiosk deployment & management",
        content:
          "Deploy kiosk-enabled devices straight out of the box. Flash a custom Android Enterprise, Samsung Knox, or ROM with Hexnode App on the devices by collaborating with OEM vendors who provide specially configured ROMs.",
        image: bannerImage1,
      },
      {
        id: 1,
        title: "Customized interface for brand visibility",
        content:
          "Create a fully customized interface that aligns with your brand's identity, ensuring consistency across all kiosk deployments.",
        image: bannerImage2,
      },
      {
        id: 2,
        title: "What more can you do with Hexnode kiosk?",
        content:
          "Hexnode kiosk opens doors to endless possibilities, from managing apps to delivering seamless user experiences.",
        image: bannerImage3,
      },
      {
        id: 3,
        title: "Secure and update your app ecosystem",
        content:
          "Ensure your app ecosystem is secure and up-to-date with Hexnode's robust tools for patch management and version control.",
        image: bannerImage4,
      },
      {
        id: 4,
        title: "Provide an easy-to-use interface for end-users",
        content:
          "Simplify user interactions with a clean, intuitive interface, designed for ease of use across various devices.",
        image: bannerImage5,
      },
    ];

    // Calculate total accordion height
    // const totalHeight = 2000;
    const handleAccordionClick = (index) => {
      // Only allow clicking if the accordion is not already active
      if (index !== activeIndex) {
        // Force re-render of AnimatedImage and AnimatedContent
        setContentKey((prevKey) => prevKey + 1);
        setImageKey((prevKey) => prevKey + 1);

        // Determine animation direction
        if (prevIndex === null) {
          setAnimationDirection("slide-in-bottom");
        } else if (index > prevIndex) {
          setAnimationDirection("slide-in-bottom");
        } else if (index < prevIndex) {
          setAnimationDirection("slide-in-top");
        }

        // Update states
        setPrevIndex(index);
        setActiveIndex(index);
      }
    };
    return (
      <div className="accordion-container">
        <div className="accordion-content">
          {/* Animated Image */}
          {activeIndex !== null && (
            <AnimatedImage
              key={`image-${imageKey}-${activeIndex}`}
              animation={animationDirection}
              // height={`${totalHeight}px`}
            >
              <img
                src={accordionItems[activeIndex].image}
                alt={`Accordion ${activeIndex}`}
                className="accordion-image"
              />
            </AnimatedImage>
          )}

          {/* Accordion Items */}
          <div className="accordion-center">
            {accordionItems.map((item, index) => (
              <div key={item.id} className="accordion-item">
                <h1
                  className={`accordion-title ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => handleAccordionClick(index)}
                >
                  {item.title}
                </h1>
                {activeIndex === index && (
                  <AnimatedContent
                    key={`content-${contentKey}-${activeIndex}`}
                    animation={animationDirection}
                    className="accordion-body"
                  >
                    {item.content}
                  </AnimatedContent>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const MobileAccordion = () => {
    return (
      <div className="mobile-accordion-container">
        {accordionItems.map((item, index) => (
          <div key={item.id} className="mobile-accordion-section">
            {activeIndex === index && (
              <div className="mobile-accordion-image-wrapper">
                <img
                  src={item.image}
                  alt={`Accordion ${index}`}
                  className="mobile-accordion-image"
                />
              </div>
            )}

            <div
              className={`mobile-accordion-title ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {item.title}
            </div>
            {activeIndex === index && (
              <div className="mobile-accordion-content">{item.content}</div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return isMobile ? <MobileAccordion /> : <DesktopAccordion />;
};

export default AccordionComponent;
