// import React from "react";
import "./../App.css";

// function Hero() {
//   return (<section className="hero" id="home" > <div className="hero-content" >
//      <p className="hero-tag" >WELCOME TO LINO WEB</p>
//      <h1> Build Your Ideas <br /> Into <span className="changing-color">Reality.</span> </h1> 
//       <p className="hero-description" > We create beautiful, modern and responsive websites that help your business grow online. </p> 
//       <div className="hero-buttons" > 
//         <a href="#services" className="primary-button" > Explore Services</a>
//          <a href="#about" className="secondary-button" > Learn More → </a>
//           </div> </div> <div className="hero-card" > 
//             <div className="hero-icon" > {
//       "</>"
//     }

//     </div> <h2>Creative Development</h2> <p>Design. Develop. Deliver.</p> </div> </section>);
// }

// export default Hero;





import React, { useState } from "react";

const services = [
  {
    number: "01",
    icon: "⌘",
    title: "Web Development",
    description:
      "Fast, modern and responsive websites built to bring your ideas to life.",
  },
  {
    number: "02",
    icon: "✳",
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces designed around your users.",
  },
  {
    number: "03",
    icon: "▣",
    title: "Responsive Design",
    description:
      "Seamless digital experiences on phones, tablets and desktops.",
  },
];

export default function Hero() {
  const [showServices, setShowServices] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const toggleServices = () => {
    setShowServices((current) => !current);
    setShowMore(false);
  };

  const toggleAbout = () => {
    setShowMore((current) => !current);
    setShowServices(false);
  };

  return (
    <>
      <section className="hero" id="home">
        <div className="hero-background" />
        <div className="hero-overlay" />

        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              CREATIVE DIGITAL SOLUTIONS
            </div>

            <h1>
              We Build Digital
              <br />
              <span>Experiences That</span>
              <br />
              Move You Forward.
            </h1>

            <p className="hero-description">
              We combine creativity, modern technology and
              thoughtful design to transform your ideas into
              meaningful digital experiences.
            </p>

            <div className="hero-actions">
              <button
                className="hero-action-card explore-card"
                onClick={toggleServices}
                aria-expanded={showServices}
              >
                <span className="action-icon">✳</span>

                <span className="action-copy">
                  <strong>
                    {showServices ? "Hide Services" : "Explore Services"}
                  </strong>
                  <small>
                    Discover what we can build
                  </small>
                </span>

                <span className="action-arrow">
                  {showServices ? "−" : "↗"}
                </span>
              </button>

              <button
                className="hero-action-card learn-card"
                onClick={toggleAbout}
                aria-expanded={showMore}
              >
                <span className="action-icon">◈</span>

                <span className="action-copy">
                  <strong>
                    {showMore ? "Show Less" : "Learn More"}
                  </strong>
                  <small>
                    Discover our approach
                  </small>
                </span>

                <span className="action-arrow">
                  {showMore ? "−" : "↗"}
                </span>
              </button>
            </div>

            <div className="hero-bottom-note">
              <span className="hero-bottom-line" />
              <span>DESIGN WITH PURPOSE. BUILD WITH IMPACT.</span>
            </div>
          </div>

          <div className="hero-floating-label">
            <span className="floating-label-icon">✦</span>
            <div>
              <strong>Ideas into reality</strong>
              <p>Thoughtful digital experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {showServices && (
        <section className="interactive-section" id="services">
          <div className="interactive-container">
            <div className="interactive-heading">
              <span className="section-eyebrow">WHAT WE DO</span>
              <h2>Solutions built around you.</h2>
              <p>
                From the first idea to the final experience,
                we help bring digital projects to life.
              </p>
            </div>

            <div className="service-cards">
              {services.map((service, index) => (
                <article
                  className="service-card"
                  key={service.number}
                  style={{ "--card-index": index }}
                >
                  <div className="service-card-top">
                    <span className="service-icon">
                      {service.icon}
                    </span>
                    <span className="service-number">
                      {service.number}
                    </span>
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <a href="#contact" className="service-card-link">
                    Discuss a project <span>↗</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {showMore && (
        <section className="interactive-section about-reveal" id="about">
          <div className="about-reveal-image">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85"
              alt="Creative professionals collaborating on ideas"
              loading="lazy"
            />
          </div>

          <div className="about-reveal-content">
            <span className="section-eyebrow">GET TO KNOW US</span>
            <h2>Good ideas deserve great execution.</h2>

            <p>
              We believe technology should solve real problems.
              Our approach combines clean design, reliable code
              and a focus on the people who use what we build.
            </p>

            <div className="about-feature">
              <span>01</span>
              <div>
                <h3>Purposeful design</h3>
                <p>Every detail has a reason to be there.</p>
              </div>
            </div>

            <div className="about-feature">
              <span>02</span>
              <div>
                <h3>Modern development</h3>
                <p>Built with usability and performance in mind.</p>
              </div>
            </div>

            <a href="#contact" className="about-contact-link">
              Let's work together <span>↗</span>
            </a>
          </div>
        </section>
      )}
    </>
  );
}
