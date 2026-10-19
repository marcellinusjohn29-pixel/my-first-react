
import React, { useState } from "react";
import "../App.css";

export default function ContactModal({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Project enquiry from ${form.name}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Service: ${form.service}\n\n` +
      `Message:\n${form.message}`
    );

    window.location.href =
      `mailto:marcellinusjohn29@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div
      className="contact-modal-backdrop"
      onClick={onClose}
    >
      <div
        className="contact-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="contact-modal-close"
          onClick={onClose}
          aria-label="Close contact window"
          type="button"
        >
          ×
        </button>

        <span className="contact-modal-eyebrow">
          LET'S CREATE SOMETHING GREAT
        </span>

        <h2 id="contact-modal-title">
          Let's talk about your project.
        </h2>

        <p className="contact-modal-description">
          Tell us what you have in mind. We'll help you
          explore the next steps.
        </p>

        <div className="contact-modal-options">
          <a
            href="https://wa.me/2348124424377"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-modal-option"
          >
            <span className="contact-modal-option-icon">WA</span>
            <span>
              <strong>WhatsApp</strong>
              <small>Chat with us directly</small>
            </span>
            <span className="contact-modal-arrow">↗</span>
          </a>

          <a
            href="tel:+2348124424377"
            className="contact-modal-option"
          >
            <span className="contact-modal-option-icon">☎</span>
            <span>
              <strong>Call us</strong>
              <small>+234 812 442 4377</small>
            </span>
            <span className="contact-modal-arrow">↗</span>
          </a>
        </div>

        <div className="contact-modal-divider">
          <span>OR SEND AN ENQUIRY</span>
        </div>

        <form onSubmit={handleSubmit} className="contact-modal-form">
          <label htmlFor="modal-name">Your name</label>
          <input
            id="modal-name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            autoComplete="name"
            required
          />

          <label htmlFor="modal-email">Email address</label>
          <input
            id="modal-email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            autoComplete="email"
            required
          />

          <label htmlFor="modal-service">What do you need?</label>
          <select
            id="modal-service"
            name="service"
            value={form.service}
            onChange={handleChange}
            required
          >
            <option value="">Choose a service</option>
            <option value="Web Development">Web Development</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Website Redesign">Website Redesign</option>
            <option value="Other">Other</option>
          </select>

          <label htmlFor="modal-message">Tell us about your project</label>
          <textarea
            id="modal-message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What would you like to build?"
            rows="3"
            required
          />

          <button type="submit" className="contact-modal-submit">
            Send Project Enquiry <span>↗</span>
          </button>
        </form>

        <p className="contact-modal-location">
          Abakaliki, Ebonyi State, Nigeria
        </p>
      </div>
    </div>
  );
}
