import React, { useState } from "react";
import "../styles/Projects.css";
import githubLogo from "../assets/github-logo.png";

export default function Projects(props) {
  const [hoveredLink1, setHoveredLink1] = useState(false);
  const [hoveredLink2, setHoveredLink2] = useState(false);

  function handleHoverEnter(e) {
    e.preventDefault();

    if (e.target.classList.contains("project-links-1")) {
      setHoveredLink1(true);
      setHoveredLink2(false); // Keep link2 faded
    } else if (e.target.classList.contains("project-link-2")) {
      setHoveredLink2(true);
      setHoveredLink1(false); // Keep link1 faded
    }
  }

  function handleHoverLeave(e) {
    e.preventDefault();

    // When the mouse leaves, we return both to their original states
    if (e.target.classList.contains("project-links-1")) {
      setHoveredLink1(false);
    } else if (e.target.classList.contains("project-link-2")) {
      setHoveredLink2(false);
    }
  }

  return props.projects.map((project, index) => {

    const projectStyle = {
      background: project.background,
    };

    return (
      <div key={index} className="project" style={projectStyle}>
        {/* Link 1 */}
        <div className="project-links">
          <h2>{project.title}</h2>
          <a
            href={project.url}
            target="_blank"
            className={`project-links-1 ${hoveredLink1 ? "show" : "faded"}`}
            onMouseEnter={handleHoverEnter}
            onMouseLeave={handleHoverLeave}
          >
            {project.title}
          </a>

          {/* Link 2 (GitHub link) */}
          <a
            href={project.github}
            target="_blank"
            className={`project-link-2 ${hoveredLink2 ? "show" : "faded"}`}
            onMouseEnter={handleHoverEnter}
            onMouseLeave={handleHoverLeave}
          >
            <img src={githubLogo} alt="GitHub Logo" />
          </a>
        </div>
      </div>
    );
  });
}
