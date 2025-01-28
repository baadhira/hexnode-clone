// HeaderKiosk.jsx
import React, { useState } from 'react';
import '../styles/HeaderKiosk.css';

const HeaderKiosk = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="nav-header header-wrap">
      <div className="nav-container">
        <nav className="navbar">
          <a href="/" className="logo-link" aria-label="Hexnode">
            <svg version="1.1" className="logo" width="121" height="25" viewBox="0 0 120.9 25">
              {/* SVG paths from original code */}
              <path d="M8.3,8.7C7.9,8.6,6.9,8.5,5.8,8.8c-0.4,0.1-1.2,0.3-2,0.7l0-7.3c0-1.1-0.9-1.9-1.9-1.9S0,1.2,0,2.2L0,23c0,1.1,0.9,1.9,1.9,1.9C3,24.9,3.8,24,3.8,23l0-7.5v0c0.2-0.7,0.4-1.2,0.8-1.7c0.2-0.3,0.9-1,2-1.1c1.6-0.2,2.7,0.7,2.9,0.9c1.2,1.1,1.2,2.5,1.2,2.7l0,7.1c0,0.9,0.8,1.7,1.8,1.7h0c1,0,1.8-0.8,1.8-1.7l0-7.5c0-1.5-0.5-2.6-0.8-3.1C12.6,10.5,10.5,9,8.3,8.7z" fill="#fff"/>
              {/* Add other SVG paths here */}
            </svg>
          </a>

          <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
            <ul className="nav-menu" role="menubar" aria-label="Navigation">
              {/* Add your menu items here */}
            </ul>

            <div className="nav-buttons">
              <a 
                href="/signup" 
                className="trial-button"
                target="_self" 
                rel="nofollow"
                aria-label="14 Day Free Trial"
              >
                14 Day Free Trial
              </a>
              
              <a 
                href="/sign-in" 
                className="login-button"
                target="_self" 
                rel="nofollow"
                aria-label="Login"
              >
                Login
              </a>
            </div>
          </div>

          <button 
            className="hamburger-button"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default HeaderKiosk;