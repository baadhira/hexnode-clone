import React, { useState } from 'react';
import '../styles/MultiAppKiosk.css';

const MultiAppKiosk = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 0, name: 'Single App Kiosk' },
    { id: 1, name: 'Multi-App Kiosk' },
    { id: 2, name: 'Web-based Kiosk' },
    { id: 3, name: 'Digital Signages' },
    { id: 4, name: 'ASAM Kiosk' }
  ];

  const features = [
    'Limit device access to approved apps, ensuring focus and productivity.',
    'With default phone and settings app inclusion, reduce distractions by providing users access to essential functions only.',
    "With Hexnode's peripheral settings admins can allow necessary device settings while retaining control.",
    'Simplify device management while empowering user productivity by deploying Multi-App Kiosk Mode.'
  ];

  return (
    <section className="kiosk-section">
      <div className="kiosk-container">
        <h2 className="kiosk-title">
          Specific kiosk modes for unique use cases
        </h2>
        
        <div className="kiosk-content">
          {/* Mobile Placeholder */}
          <div className="mobile-tabs">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          {/* Desktop Tabs */}
          <div className="desktop-tabs-wrapper">
            <div className="desktop-tabs-container">
              <div className="tabs-inner-container">
                <div 
                  className="active-tab-highlight" 
                  style={{ 
                    width: '260px', 
                    left: `${activeTab * 260}px` 
                  }}
                ></div>
                <ul className="tabs-list">
                  {tabs.map((tab, index) => (
                    <li 
                      key={tab.id} 
                      className={`tab-item ${activeTab === index ? 'active' : ''}`}
                      onClick={() => setActiveTab(index)}
                    >
                      <p className="tab-text">
                        <span>{tab.name}</span>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="content-section">
            <div className="content-wrapper">
              {/* Text Content */}
              <div className="text-content">
                <h3 className="section-subtitle">
                  Elevate efficiency with Multi-App Kiosk
                </h3>
                <ul className="features-list">
                  {features.map((feature, index) => (
                    <li 
                      key={index} 
                      className="feature-item"
                    >
                      <span className="feature-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14.393" height="10.111">
                          <path 
                            fill="none" 
                            stroke="#60c458" 
                            strokeWidth="2" 
                            d="M.697 4.107 5.45 8.718l8.247-8" 
                            data-name="tick - icon"
                          />
                        </svg>
                      </span>
                      <p className="feature-text">
                        {feature}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className="image-container">
                <div className="image-wrapper">
                  <figure className="image-figure">
                    <img 
                      alt="A device running in Multi-App Kiosk mode." 
                      src="/api/placeholder/570/387" 
                      className="feature-image"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiAppKiosk;