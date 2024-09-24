import React, { useState } from "react";
import "../styles/Projects.css";
import githubLogo from "../assets/github-logo.png";

export default function Projects(props) {
  // Set the initial state of the hoveredLink to false
  const [hoveredLink1, setHoveredLink1] = useState(false);
  const [hoveredLink2, setHoveredLink2] = useState(false);

  // Function to handle the hover enter effect
  function handleHoverEnter(e) {
    e.preventDefault();

    if (e.target.classList.contains("project-links-1")) {
      setHoveredLink1(true);
      setHoveredLink2(false);
    } else if (e.target.classList.contains("project-link-2")) {
      setHoveredLink2(true);
      setHoveredLink1(false);
    }
  }

  // Function to handle the hover leave effect
  function handleHoverLeave(e) {
    e.preventDefault();

    if (e.target.classList.contains("project-links-1")) {
      setHoveredLink1(false);
    } else if (e.target.classList.contains("project-link-2")) {
      setHoveredLink2(false);
    }
  }

  // Map over the projects array to display each project
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
          <p>{project.stack}</p>
        </div>
      </div>
    );
  });
}
