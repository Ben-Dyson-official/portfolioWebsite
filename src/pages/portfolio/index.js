import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Portfolio | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Portfolio</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => (
            <div key={i} className="po_item" onClick={() => setSelectedProject(data)}>
              <img src={data.img} alt="Project screenshot" />
              <div className="content">
                <p>{data.description}</p>
                <a href={data.link} onClick={(e) => e.stopPropagation()}>View Project</a>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Popup */}
        {selectedProject && (
          <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close" onClick={() => setSelectedProject(null)}>&times;</span>
              <img src={selectedProject.img} alt="Project screenshot" className="modal-img" />
              <p>{selectedProject.description}</p>
              <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        )}
      </Container>
    </HelmetProvider>
  );
};
