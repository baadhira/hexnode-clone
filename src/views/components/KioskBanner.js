// KioskBanner.jsx
import React, { useState } from 'react';
import '../styles/KioskBanner.css';

const KioskBanner = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // Add your form submission logic here
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      console.log('Form submitted with email:', email);
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="banner-section">
      <div className="containerKioskBanner">
        <div className="banner-content">
          <div className="banner-text">
            <div>
              <h1 className="banner-title">
                Turn your devices into kiosks in a few minutes with Hexnode UEM
              </h1>
            </div>
            
            <div className="form-container">
              <form onSubmit={handleSubmit}>
                <div className="form-wrapper">
                  <div className="input-wrapper">
                    <input
                      placeholder="Your Work Email"
                      type="email"
                      name="email"
                      id="signup-email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="input-field"
                      required
                    />
                  </div>
                  <div className="button-wrapper">
                    <button
                      type="submit"
                      className="submit-button-kiosk-banner"
                      disabled={loading}
                    >
                      GET STARTED NOW!
                      {loading && (
                        <svg
                          className="animate-spin ml-2 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </form>
              {error && (
                <div className="error-wrapper">
                  <span className="error-message">{error}</span>
                </div>
              )}
            </div>
          </div>

          <div className="banner-image">
            <div>
              <img
                alt="Mobile Kiosk"
                loading="lazy"
                width={597}
                height={585}
                src="/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fbanner%2Fhexnode-kiosk.png&w=1200&q=95"
                srcSet="/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fbanner%2Fhexnode-kiosk.png&w=640&q=95 1x, /_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fbanner%2Fhexnode-kiosk.png&w=1200&q=95 2x"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KioskBanner;