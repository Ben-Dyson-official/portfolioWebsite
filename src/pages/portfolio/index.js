import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  const flagship = dataportfolio.find((p) => p.flagship);
  const rest = dataportfolio.filter((p) => !p.flagship);

  return (
    <HelmetProvider>
      <div className="page-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Work | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <h1 className="section-heading">Work</h1>
        <p className="portfolio-subtitle">
          A selection of projects — dissertation, hackathons, and personal work.
        </p>
        <hr className="section-divider" />

        {/* Flagship: Stridify */}
        {flagship && (
          <div className="project-flagship">
            <div className="project-flagship__visual">
              <div className="project-gradient-tile" aria-hidden="true">
                <span className="project-gradient-tile__name">{flagship.title}</span>
              </div>
            </div>
            <div className="project-flagship__content">
              <div className="project-meta">
                <span className="project-tagline">{flagship.tagline}</span>
                <span className="project-badge">Dissertation</span>
              </div>
              <h2 className="project-title">{flagship.title}</h2>
              <p className="project-desc">{flagship.description}</p>
              <div className="project-tech">
                {flagship.tech.map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>
              {flagship.link ? (
                <a
                  href={flagship.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary project-cta"
                >
                  View on GitHub →
                </a>
              ) : (
                <span className="link-private">{flagship.linkLabel}</span>
              )}
            </div>
          </div>
        )}

        {/* Other projects grid */}
        <div className="projects-grid">
          {rest.map((project, i) => (
            <article key={i} className="project-card">
              <div className="project-card__img">
                {project.img ? (
                  <img src={project.img} alt={`${project.title} screenshot`} loading="lazy" />
                ) : (
                  <div className="project-gradient-tile project-gradient-tile--sm" aria-hidden="true">
                    <span className="project-gradient-tile__name">{project.title}</span>
                  </div>
                )}
              </div>
              <div className="project-card__body">
                <p className="project-tagline">{project.tagline}</p>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t, j) => (
                    <span key={j} className="tech-tag">{t}</span>
                  ))}
                </div>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link"
                  >
                    GitHub →
                  </a>
                ) : (
                  <span className="link-private link-private--sm">No public repo</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </HelmetProvider>
  );
};
