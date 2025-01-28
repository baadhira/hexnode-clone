import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const ResponsiveCarousel = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Responsive Carousel in Bootstrap 5</h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://media.geeksforgeeks.org/wp-content/uploads/20240308154939/html-(1).jpg"
                    className="d-block w-100"
                    alt="Slide 1"
                  />
                </div>

                <div className="carousel-item">
                  <img
                    src="https://media.geeksforgeeks.org/wp-content/uploads/20240308154940/js-(1).jpg"
                    className="d-block w-100"
                    alt="Slide 2"
                  />
                </div>

                <div className="carousel-item">
                  <img
                    src="https://media.geeksforgeeks.org/wp-content/uploads/20240308154942/web-(1).jpg"
                    className="d-block w-100"
                    alt="Slide 3"
                  />
                </div>

                <div className="carousel-item">
                  <img
                    src="https://media.geeksforgeeks.org/wp-content/uploads/20240308154945/web2-(1).jpg"
                    className="d-block w-100"
                    alt="Slide 4"
                  />
                </div>
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveCarousel;
