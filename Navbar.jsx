// import React from "react";
// import "../App.css";

// function Navbar() {
//   return (
//   <nav className="navbar" >
    
//   <a href="/" className="logo" > </a>
//    <ul className="nav-links" >
//      <li>
//     <a href="#home" >Home</a>
//    </li> 
//    <li>
//     <a href="#about" >About</a>
//     </li>
//      <li>
//     <a href="#services" >Services</a>
//     </li>
//     <li>
//     <a href="#contact" >Contact</a>
//     </li> </ul>
//      <a href="#contact" className="nav-button" > Get Started </a>
//       </nav>);
// }

// export default Navbar;









import ContactModal from "./ContactModal";
import React, { useState } from "react";
import "../App.css";




export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar">
        <a
          href="#home"
          className="nav-logo"
          aria-label="Home"
          onClick={closeMenu}
        >
          <span className="logo-mark">N</span>
          <span className="logo-text">
            Nexora
            <small>DIGITAL STUDIO</small>
          </span>
        </a>

        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-menu ${menuOpen ? "menu-open" : ""}`}>
          <ul className="nav-links">
            <li>
              <a href="#home" onClick={closeMenu}>Home</a>
            </li>
            <li>
              <a href="#services" onClick={closeMenu}>Services</a>
            </li>
            <li>
              <a href="#work" onClick={closeMenu}>Our Work</a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu}>About</a>
            </li>
          </ul>

          <a
            href="#contact"
            className="nav-cta"
            onClick={closeMenu}
          >
            <button
  type="button"
  className="nav-cta"
  onClick={() => {
    setMenuOpen(false);
    setContactOpen(true);
  }}
>
  Let's Talk
  <span className="nav-cta-arrow">↗</span>
</button>
            
          </a>
        </div>
      </nav>
    </header>
  );
  {contactOpen && (
  <ContactModal onClose={() => setContactOpen(false)} />
)}
}
