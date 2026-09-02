import { useState } from "react";

import mdp1 from "../assets/projects/smoke-detection/mdp-1.png";
import mdp2 from "../assets/projects/smoke-detection/mdp-2.png";
import mdp3 from "../assets/projects/smoke-detection/mdp-3.png";
import mdp4 from "../assets/projects/smoke-detection/mdp-4.png";
import mdp5 from "../assets/projects/smoke-detection/mdp-5.png";
import mdp6 from "../assets/projects/smoke-detection/mdp-6.png";

function Projects() {

  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    mdp1,
    mdp2,
    mdp3,
    mdp4,
    mdp5,
    mdp6
  ];

  return (
    <section id="projects" className="section">
      <div className="section-container">

        <h2>Projects</h2>

        <div className="projects-grid">

          <div className="project-card">

            {/* Project Image Gallery */}
            <div className="project-gallery">

              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Smart Smoke Detection System - Image ${index + 1}`}
                  onClick={() => setSelectedImage(image)}
                />
              ))}

            </div>

            {/* Project Information */}
            <div className="project-content">

              <h3>Smart Smoke Detection System</h3>

              <p>
                An IoT-based smoke detection system designed to detect
                smoke and provide immediate visual and audio alerts.
              </p>

              <p>
                The system uses an MQ2 sensor to detect smoke and an
                ESP8266 for IoT connectivity. Visual and audio alerts
                are provided using an OLED display, RGB LED, and buzzer.
              </p>

              <p>
                <strong>Technologies:</strong>
              </p>

              <div className="tech-stack">
                <span>Arduino Uno</span>
                <span>ESP8266</span>
                <span>MQ2 Sensor</span>
                <span>OLED Display</span>
                <span>RGB LED</span>
                <span>Buzzer</span>
              </div>

              <div className="project-links">

                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Fullscreen Image */}
      {selectedImage && (
        <div
          className="image-modal"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Enlarged project"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="close-modal"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
        </div>
      )}

    </section>
  );
}

export default Projects;