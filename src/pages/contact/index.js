import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta, contactConfig, socialprofils } from "../../content_option";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!contactConfig.FORMSPREE_ID) return;
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${contactConfig.FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const formReady = !!contactConfig.FORMSPREE_ID;

  return (
    <HelmetProvider>
      <div className="page-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Contact | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <h1 className="section-heading">Get in touch</h1>
        <p className="contact-intro">
          Happy to chat about grad roles, internships, or anything I'm building.
        </p>
        <hr className="section-divider" />

        <div className="contact-layout">
          {/* Social links */}
          <div className="contact-links">
            <a
              href={`mailto:${contactConfig.YOUR_EMAIL}`}
              className="contact-item contact-item--primary"
            >
              <MdOutlineEmail className="contact-item__icon" aria-hidden="true" />
              <div className="contact-item__text">
                <span className="contact-item__label">Email</span>
                <span className="contact-item__value">{contactConfig.YOUR_EMAIL}</span>
              </div>
            </a>

            <a
              href={socialprofils.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <FaGithub className="contact-item__icon" aria-hidden="true" />
              <div className="contact-item__text">
                <span className="contact-item__label">GitHub</span>
                <span className="contact-item__value">Ben-Dyson-official</span>
              </div>
            </a>

            <a
              href={socialprofils.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <FaLinkedin className="contact-item__icon" aria-hidden="true" />
              <div className="contact-item__text">
                <span className="contact-item__label">LinkedIn</span>
                <span className="contact-item__value">ben-dyson-uk</span>
              </div>
            </a>
          </div>

          {/* Contact form */}
          {formReady ? (
            <form className="contact-form" onSubmit={handleSubmit}>
              {status === "success" && (
                <div className="contact-form__alert contact-form__alert--success">
                  Message sent — I'll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="contact-form__alert contact-form__alert--error">
                  Something went wrong. Try emailing directly instead.
                </div>
              )}
              <div className="contact-form__row">
                <div className="contact-form__field">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className="contact-form__field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="contact-form__field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="What's on your mind?"
                />
              </div>
              <button
                type="submit"
                className="btn btn--primary"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
            </form>
          ) : (
            <div className="contact-form contact-form--placeholder">
              <p>
                To enable the contact form, add your Formspree form ID to{" "}
                <code>contactConfig.FORMSPREE_ID</code> in{" "}
                <code>src/content_option.js</code>.
              </p>
              <p>
                Sign up free at{" "}
                <a href="https://formspree.io" target="_blank" rel="noopener noreferrer">
                  formspree.io
                </a>{" "}
                → New Form → copy the ID from the endpoint URL.
              </p>
            </div>
          )}
        </div>
      </div>
    </HelmetProvider>
  );
};
