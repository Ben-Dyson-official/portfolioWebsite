import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { dataabout, meta, skills } from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <div className="page-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <h1 className="section-heading">About</h1>
        <hr className="section-divider" />

        <div className="about-body">
          <div className="about-bio">
            <p>{dataabout.aboutme}</p>
          </div>

          <div className="about-skills">
            <h2 className="skills-heading">Skills</h2>
            <div className="skills-grid">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="skills-category">
                  <h3 className="skills-category__title">{category}</h3>
                  <ul className="skills-list">
                    {items.map((item, i) => (
                      <li key={i} className="skill-tag">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};
