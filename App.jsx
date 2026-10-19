// import React from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Footer from "./components/Footer";

// import "../App.css";

// function App() {
//   return (<> <Navbar /> <main> <Hero /> <section id="about" style= {
//         {
//         padding: "60px 8%", textAlign: "center"
//       }
//     }

//     > <h2>About Us</h2> <p style= {
//         {
//         marginTop: "15px", color: "#64748b", lineHeight: 1.8
//       }
//     }

//     >
//       At<span className="logo"> LINO<span>WEB </span></span>, we transform bold ideas into powerful
//       digital experiences. We combine creativity, modern
//       technology, and smart design to help businesses,
//       brands, and individuals stand out in the digital world.
//     </p>

//     <p className="about-description">
//       From stunning websites to innovative digital solutions,
//       our mission is simple: turn your vision into reality
//       and give your ideas the platform they deserve.
//     </p>
//      </section>
//       </main> 
//       <Footer /> </>);
// }

// export default App;





 



import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import "./App.css";

const services = [
  {
    number: "01",
    icon: "✳",
    title: "Web Development",
    description:
      "We build fast, secure, responsive, and scalable websites that strengthen your brand, communicate your value, and turn visitors into potential customers.",
    tags: ["React", "Modern Web", "Performance"],
  },
  {
    number: "02",
    icon: "◇",
    title: "UI/UX Design",
    description:
      "We transform complex ideas into intuitive digital experiences through thoughtful user research, clean layouts, and user-centered interface design.",
    tags: ["Wireframing", "Prototyping", "UI Design"],
  },
  {
    number: "03",
    icon: "▣",
    title: "Responsive Design",
    description:
      "We create consistent digital experiences that adapt seamlessly to mobile phones, tablets, laptops, and desktop screens.",
    tags: ["Mobile First", "Accessibility", "Flexibility"],
  },
  {
    number: "04",
    icon: "↗",
    title: "Website Redesign",
    description:
      "We modernize outdated websites with refreshed visuals, improved navigation, stronger content hierarchy, and a better user experience.",
    tags: ["Modernization", "UX Improvement", "SEO Basics"],
  },
  {
    number: "05",
    icon: "◎",
    title: "Brand Identity",
    description:
      "We help businesses establish a consistent digital identity through thoughtful visual direction, typography, color systems, and brand presentation.",
    tags: ["Visual Identity", "Typography", "Brand Style"],
  },
  {
    number: "06",
    icon: "⌘",
    title: "Website Maintenance",
    description:
      "We help keep websites current with content updates, routine checks, performance improvements, and ongoing technical support.",
    tags: ["Updates", "Optimization", "Support"],
  },
];

const projects = [
  {
    number: "01",
    category: "Business Web Design",
    title: "Corporate Digital Presence",
    description:
      "A professional website concept built to communicate business value, establish credibility, and help visitors discover essential services.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
    alt: "Business analytics and digital workspace",
  },
  {
    number: "02",
    category: "Dashboard UI/UX",
    title: "Analytics Dashboard",
    description:
      "A clean dashboard concept designed to make complex information easier to understand through structured layouts and clear data visualization.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
    alt: "Analytics dashboard with charts and data",
  },
  {
    number: "03",
    category: "Creative Direction",
    title: "Creative Workspace",
    description:
      "A contemporary visual concept inspired by collaboration, creativity, and the design systems behind modern digital brands.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
    alt: "Modern creative office and workspace",
  },
  {
    number: "04",
    category: "Digital Experience",
    title: "Modern Product Interface",
    description:
      "A product interface concept focused on simplicity, intuitive navigation, and a consistent experience across screen sizes.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=85",
    alt: "Modern website displayed on a computer",
  },
];

const videos = [
  {
    number: "01",
    category: "Mobile App Development",
    title: "Your Business Deserves an App",
    description:
      "Give your customers a better way to connect with your business. Let's turn your idea into a mobile app.",
    src: "/videos/mobile-app.mp4",
    cta: "Build my app",
  },
  {
    number: "02",
    category: "E-commerce Solutions",
    title: "Take Your Business Online",
    description:
      "Make it easier for customers to explore your products and services with a professional digital experience.",
    src: "/videos/ecommerce-app.mp4",
    cta: "Build my online store",
  },
  {
    number: "03",
    category: "Custom Software",
    title: "Simplify the Way You Work",
    description:
      "Replace repetitive tasks with digital tools designed around your business and its everyday operations.",
    src: "/videos/software-development.mp4",
    cta: "Discuss my project",
  },
  {
    number: "04",
    category: "Business Dashboards",
    title: "Turn Your Ideas Into Solutions",
    description:
      "From booking platforms to business dashboards, let's build technology that solves real problems.",
    src: "/videos/business-dashboard.mp4",
    cta: "Start my project",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We learn about your business, audience, objectives, and project requirements before defining a clear direction.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We shape the concept through thoughtful layouts, visual direction, and user-focused design decisions.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "We turn the approved design into a responsive website with clean implementation and attention to detail.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We review the finished experience, check key functionality, and prepare the website for its intended audience.",
  },
];

function About() {
  return (
    <section className="nx-about" id="about">
      <div className="nx-container nx-about-grid">
        <div className="nx-about-image">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
            alt="Creative professionals collaborating on digital projects"
            loading="lazy"
          />

          <div className="nx-image-note">
            <span className="nx-image-note-icon">N.</span>
            <div>
              <strong>Ideas into experiences.</strong>
              <p>Creativity meets technology.</p>
            </div>
          </div>
        </div>

        <div className="nx-about-copy">
          <span className="nx-eyebrow">ABOUT NEXORA</span>

          <h2>
            We build digital experiences
            <span> with purpose.</span>
          </h2>

          <p>
            Nexora is a digital brand focused on modern web
            development, user-centered design, and creative
            technology. We help businesses, entrepreneurs, and
            individuals establish a stronger online presence
            through professional websites and engaging digital
            experiences.
          </p>

          <p>
            We believe a great website should do more than look
            attractive. It should communicate clearly, build
            trust, provide a seamless user experience, and support
            meaningful business goals.
          </p>

          <p>
            From the first concept to the final interface, our
            approach combines creativity, technical thinking,
            attention to detail, and a commitment to quality.
          </p>

          <div className="nx-about-points">
            <div>
              <span>01</span>
              <div>
                <strong>Purposeful creativity</strong>
                <p>Every design decision serves a clear goal.</p>
              </div>
            </div>

            <div>
              <span>02</span>
              <div>
                <strong>Quality and detail</strong>
                <p>Careful execution across every screen.</p>
              </div>
            </div>

            <div>
              <span>03</span>
              <div>
                <strong>Client-focused solutions</strong>
                <p>Digital experiences shaped around your needs.</p>
              </div>
            </div>
          </div>

          <a href="#contact" className="nx-button">
            Let's work together <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="nx-services" id="services">
      <div className="nx-container">
        <div className="nx-section-heading">
          <span className="nx-eyebrow">WHAT WE DO</span>

          <h2>
            Digital solutions built
            <span> for your next step.</span>
          </h2>

          <p>
            From strategy and design to development and
            maintenance, we help bring your digital ideas to life
            with solutions tailored to your goals.
          </p>
        </div>

        <div className="nx-services-grid">
          {services.map((service) => (
            <article className="nx-service-card" key={service.number}>
              <div className="nx-service-top">
                <span className="nx-service-icon">
                  {service.icon}
                </span>
                <span className="nx-service-number">
                  {service.number}
                </span>
              </div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <div className="nx-service-tags">
                {service.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <a href="#contact" className="nx-text-link">
                Discuss this service <span>↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function OurWork() {
  return (
    <section className="nx-work" id="work">
      <div className="nx-container">
        <div className="nx-work-heading">
          <div className="nx-section-heading">
            <span className="nx-eyebrow">OUR PORTFOLIO</span>

            <h2>
              Thoughtful ideas.
              <span> Digital experiences.</span>
            </h2>

            <p>
              Explore visual concepts representing the types of
              websites, interfaces, and digital experiences
              Nexora can create.
            </p>
          </div>

          <a href="#contact" className="nx-button">
            Start a project <span>↗</span>
          </a>
        </div>

        <div className="nx-work-grid">
          {projects.map((project) => (
            <article className="nx-work-card" key={project.number}>
              <div className="nx-work-image">
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                />
                <span>{project.number}</span>
              </div>

              <div className="nx-work-content">
                <span className="nx-work-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <a href="#contact" className="nx-text-link">
                  Discuss a similar project <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="nx-work-note">
          Portfolio concepts are illustrative examples. Replace
          them with completed client projects and original work
          as your portfolio grows.
        </p>
      </div>
    </section>
  );
}

function VideoShowcase() {
  return (
    <section className="nx-videos" id="videos">
      <div className="nx-container">
        <div className="nx-section-heading nx-video-heading">
          <span className="nx-eyebrow">
            YOUR IDEA. OUR EXPERTISE.
          </span>

          <h2>
            Have an idea?
            <span> Let's build it.</span>
          </h2>

          <p>
            We build digital solutions for businesses,
            entrepreneurs, and startups. Explore our services
            and take the first step toward your next big idea.
          </p>
        </div>

        <div className="nx-video-grid">
          {videos.map((video) => (
            <article
              className="nx-video-card"
              key={video.number}
            >
              <div className="nx-video-frame">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  aria-label={video.title}
                  onError={(event) => {
                    console.error(
                      "Check video file:",
                      video.src,
                      event.currentTarget.error
                    );
                  }}
                >
                  <source
                    src={video.src}
                    type="video/mp4"
                  />
                  Your browser does not support video playback.
                </video>
              </div>

              <div className="nx-video-content">
                <span className="nx-work-category">
                  {video.category}
                </span>

                <h3>{video.title}</h3>
                <p>{video.description}</p>

                <a
                  href="https://wa.me/2348124424377?text=Hello%20Nexora%2C%20I%20want%20to%20discuss%20building%20an%20app%20or%20digital%20solution."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nx-button"
                >
                  {video.cta} <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="nx-video-cta">
          <div>
            <h3>Ready to build something valuable?</h3>
            <p>
              Tell us your idea. Let's discuss how Nexora
              can help bring it to life.
            </p>
          </div>

          <a
            href="https://wa.me/2348124424377?text=Hello%20Nexora%2C%20I%20have%20a%20project%20idea."
            target="_blank"
            rel="noopener noreferrer"
            className="nx-button"
          >
            Let's talk <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function OurProcess() {
  return (
    <section className="nx-process" id="process">
      <div className="nx-container">
        <div className="nx-section-heading">
          <span className="nx-eyebrow">HOW WE WORK</span>

          <h2>
            A clear process.
            <span> A better result.</span>
          </h2>

          <p>
            Every project follows a structured approach that
            keeps the work focused, collaborative, and aligned
            with your objectives.
          </p>
        </div>

        <div className="nx-process-grid">
          {processSteps.map((step) => (
            <article className="nx-process-card" key={step.number}>
              <span className="nx-process-number">
                {step.number}
              </span>

              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="nx-contact" id="contact">
      <div className="nx-contact-inner">
        <span className="nx-eyebrow">
          LET'S BUILD SOMETHING GREAT
        </span>

        <h2>
          Your next big idea
          <span> starts here.</span>
        </h2>

        <p>
          Whether you're launching a new business, redesigning
          your website, or bringing a digital product to life,
          Nexora is ready to discuss your vision and explore the
          right solution for your goals.
        </p>

        <div className="nx-contact-actions">
          <a
            className="nx-button nx-button-light"
            href="https://wa.me/2348124424377"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start a conversation <span>↗</span>
          </a>

          <a
            className="nx-contact-email"
            href="mailto:marcellinusjohn29@gmail.com"
          >
            Email us directly
          </a>
        </div>

        <span className="nx-contact-location">
          Abakaliki, Ebonyi State, Nigeria
        </span>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <OurWork />
        <VideoShowcase />
        <OurProcess />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
