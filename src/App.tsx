import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  return (
    <>
      <div className="site-wrap">
        <div className="site-navbar mt-4">
          <div className="container py-1">
            <div className="row align-items-center">
              <div className="col-8 col-md-8 col-lg-4">
                <h1 className="mb-0">
                  <a href="index.html" className="text-white h2 mb-0">
                    <strong>
                      Wakacje 4U<span className="text-primary">.</span>
                    </strong>
                  </a>
                </h1>
              </div>
              <div className="col-4 col-md-4 col-lg-8">
                <nav
                  className="site-navigation text-right text-md-right"
                  role="navigation"
                >
                  <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3">
                    <a
                      href="#"
                      className="site-menu-toggle js-menu-toggle text-white"
                    >
                      <span className="icon-menu h3"></span>
                    </a>
                  </div>

                  <ul className="site-menu js-clone-nav d-none d-lg-block">
                    <li className="active">
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="gallery.html">Galeria</a>
                    </li>
                    <li>
                      <a href="contact.html">Kontakt</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-mobile-menu">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>

      <div
        className="site-blocks-cover overlay"
        style={{
          backgroundImage: `url("/images/hero_bg_lake_view_1.jpg?url")`,
        }}
        data-aos="fade"
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-md-8 text-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h1 className="mb-4">
                Twoje miejsce wypoczynku nad morzem i jeziorem
              </h1>
              <p className="mb-5">Unieście, Sea & Lake, ul. Sosnowy Las 15</p>
              <p>
                <a href="./gallery.html" className="btn btn-primary px-5 py-3">
                  Zdjęcia
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="featured-property-half d-flex">
          {/* <div
            className="image"
            style={{ backgroundImage: `url(${imageUrl2})` }}
          ></div> */}
          <div className="text">
            <h2>Studio apartament</h2>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
              quae obcaecati doloribus distinctio, aliquam vero? Molestias,
              amet, eveniet.
            </p>
            <ul className="property-list-details mb-5">
              <li className="text-black">
                Property Name:{" "}
                <strong className="text-black">Marga Luxury Suite</strong>
              </li>
              <li>
                Room: <strong>2</strong>
              </li>
              <li>
                Total Area: <strong>482 Square Feets</strong>
              </li>
              <li>
                Category: <strong>Modern House</strong>
              </li>
              <li>
                Lunch Date: Jan 20, 2019<strong></strong>
              </li>
            </ul>
            <p>
              <a href="#" className="btn btn-primary px-4 py-3">
                Get Details
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-primary" data-aos="fade">
        <div className="container">
          <div className="row">
            <a href="#" className="col-2 text-center py-4 social-icon d-block">
              <span className="icon-facebook text-white"></span>
            </a>
            <a href="#" className="col-2 text-center py-4 social-icon d-block">
              <span className="icon-twitter text-white"></span>
            </a>
            <a href="#" className="col-2 text-center py-4 social-icon d-block">
              <span className="icon-instagram text-white"></span>
            </a>
            <a href="#" className="col-2 text-center py-4 social-icon d-block">
              <span className="icon-linkedin text-white"></span>
            </a>
            <a href="#" className="col-2 text-center py-4 social-icon d-block">
              <span className="icon-pinterest text-white"></span>
            </a>
            <a href="#" className="col-2 text-center py-4 social-icon d-block">
              <span className="icon-youtube text-white"></span>
            </a>
          </div>
        </div>
      </div>

      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="mb-5">
                <h3 className="footer-heading mb-4">About Apart</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Saepe pariatur reprehenderit vero atque, consequatur id
                  ratione, et non dignissimos culpa? Ut veritatis, quos illum
                  totam quis blanditiis, minima minus odio!
                </p>
              </div>
              <div className="mb-5">
                <h3 className="footer-heading mb-4">Subscribe</h3>
                <form action="#" method="post" className="site-block-subscribe">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control border-secondary bg-transparent"
                      placeholder="Enter your email"
                      aria-label="Enter Email"
                      aria-describedby="button-addon2"
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-primary rounded-top-right-0"
                        type="button"
                        id="button-addon2"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="row mb-5">
                <div className="col-md-12">
                  <h3 className="footer-heading mb-4">Navigations</h3>
                </div>
                <div className="col-md-6 col-lg-6">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Apartments</a>
                    </li>
                    <li>
                      <a href="#">News</a>
                    </li>
                    <li>
                      <a href="#">Featured Apartment</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 col-lg-6">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Membership</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <h3 className="footer-heading mb-4">Follow Us</h3>

                  <div>
                    <a href="#" className="pl-0 pr-3">
                      <span className="icon-facebook"></span>
                    </a>
                    <a href="#" className="pl-3 pr-3">
                      <span className="icon-twitter"></span>
                    </a>
                    <a href="#" className="pl-3 pr-3">
                      <span className="icon-instagram"></span>
                    </a>
                    <a href="#" className="pl-3 pr-3">
                      <span className="icon-linkedin"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="mb-5">
                <h3 className="footer-heading mb-4">Watch Live Streaming</h3>

                <div className="block-16">
                  <figure>
                    <img
                      src="images/img_1.jpg"
                      alt="Image placeholder"
                      className="img-fluid rounded"
                    />
                    <a
                      href="https://vimeo.com/channels/staffpicks/93951774"
                      className="play-button popup-vimeo"
                    >
                      <span className="icon-play"></span>
                    </a>
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-5 mt-5 text-center">
            <div className="col-md-12">
              <p>
                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                Copyright &copy;
                <script
                  data-cfasync="false"
                  src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
                ></script>
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved | This template is made with{" "}
                <i className="icon-heart text-danger" aria-hidden="true"></i> by{" "}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>
                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
