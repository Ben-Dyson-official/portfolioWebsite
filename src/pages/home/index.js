import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { introdata, meta, socialprofils } from "../../content_option";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="hero">
          <div className="hero__content">
            <p className="hero__label">Hello, I'm</p>
            <h1 className="hero__name">{introdata.title}</h1>
            <p className="hero__bio">{introdata.description}</p>
            <div className="hero__actions">
              <Link to="/portfolio" className="btn btn--primary">
                View My Work
              </Link>
              <Link to="/contact" className="btn btn--ghost">
                Get in Touch
              </Link>
            </div>
            <div className="hero__social">
              <a
                href={socialprofils.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <FaGithub aria-hidden="true" />
                GitHub
              </a>
              <a
                href={socialprofils.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin aria-hidden="true" />
                LinkedIn
              </a>
              <a href={socialprofils.email} aria-label="Send email">
                <MdOutlineEmail aria-hidden="true" />
                benj.dyson@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
