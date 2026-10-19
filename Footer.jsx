// import React from "react";
// import "./../App.css";

// function Footer() {
//   return (<footer className="footer" id="contact" > <div className="footer-top" >
//      <div className="footer-brand" > <a href="/" className="logo" > LINO<span>WEB</span> </a>
//       <p> Turning creative ideas into meaningful digital experiences. </p> </div> 
//   <div className="footer-links" id="services" > 
//     <h3>Quick Links</h3>
//      <a href="#home" >Home</a> 
//      <a href="#about" >About Us</a>
//       <a href="#services" >Our Services</a>
//        <a href="#contact" >Contact</a> </div> 
//        <div className="footer-links" >
//          <h3>Contact</h3> 
//          <p>Email: marcellinusjohn29@gmail.com</p> 
//          <p>Website Development</p> 
//          <p>Creative Design</p>
//          <p>08124424377</p>
//           </div> </div>
//           <div className="footer-bottom" > 
//             <p> © {
//       new Date().getFullYear()
//     }

//     LINO WEB. All rights reserved. </p> <p>The future is here.</p> </div> </footer>);
// }

// export default Footer;




import React from "react";
import "../App.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="footer-container">

        {/* Brand and description */}
        <div className="footer-main">

          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span className="footer-logo-mark">N</span>
              <span className="footer-logo-name">
                Nexora<span>.</span>
              </span>
            </a>

            <p className="footer-description">
              We create modern digital experiences that help
              businesses grow, connect with people, and stand out
              in a digital world.
            </p>

            <div className="footer-status">
              <span className="footer-status-dot"></span>
              Let's build something great together.
            </div>
          </div>

          {/* Quick navigation */}
          <div className="footer-column">
            <h3>Explore</h3>
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Our Services</a>
            <a href="#work">Our Projects</a>
          </div>

          {/* Contact information */}
          <div className="footer-column footer-contact-column">
            <h3>Contact Us</h3>

            <div className="footer-contact-item">
              <span className="footer-contact-icon">⌖</span>
              <div>
                <small>Our Location</small>
                <p>Abakaliki, Ebonyi State, Nigeria</p>
              </div>
            </div>

            <a
              href="tel:+2348124424377"
              className="footer-contact-item"
            >
              <span className="footer-contact-icon">☎</span>
              <div>
                <small>Call Us</small>
                <p>+234 812 442 4377</p>
              </div>
            </a>

            <a
              href="mailto:marcellinusjohn29@gmail.com"
              className="footer-contact-item"
            >
              <span className="footer-contact-icon">✉</span>
              <div>
                <small>Email Address</small>
                <p>marcellinusjohn29@gmail.com</p>
              </div>
            </a>
          </div>

          {/* Social media */}
          <div className="footer-column footer-social-column">
            <h3>Connect With Us</h3>

            <p className="footer-social-description">
              Follow Nexora on social media for updates,
              creative ideas, and our latest work.
            </p>

            <div className="footer-social-grid">
              <a
                href="https://wa.me/2348124424377"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="footer-social-link"
              >
                <span>WA</span>
                WhatsApp
                <span className="footer-social-arrow">↗</span>
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="footer-social-link"
              >
                <span>f</span>
                Facebook
                <span className="footer-social-arrow">↗</span>
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="footer-social-link"
              >
                <span>IG</span>
                Instagram
                <span className="footer-social-arrow">↗</span>
              </a>

              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="footer-social-link"
              >
                <span>TT</span>
                TikTok
                <span className="footer-social-arrow">↗</span>
              </a>
            </div>

            <a href="#contact" className="footer-project-button">
              Start a Project <span>↗</span>
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>
            © {year} <strong>Nexora</strong>. All rights reserved.
          </p>

          <p className="footer-bottom-location">
            Made with <span>♥</span> in Nigeria
          </p>

          <a href="#home" className="footer-back-top">
            Back to top <span>↑</span>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
