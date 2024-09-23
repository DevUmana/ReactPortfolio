import React from "react";
import "../styles/Resume.css";

export default function Resume() {
  return (
    <div className="wrapper">
      <h1>Resume</h1>
      <div className="resumeDownload">
        <p>
          Download my
          <a href="src/assets/resume.pdf" download="resume.pdf">
            <button type="button">Resume</button>
          </a>
        </p>
      </div>
      <div className="resume">
        <div className="frontend">
        <h3>Front-end Proficiencies</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Responsive Design</li>
          <li>Bootstrap</li>
          <li>React</li>
        </ul>
        </div>
        <div className="backend">
        <h3>Back-end Proficiencies</h3>
        <ul>
          <li>APIs</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MySQL</li>
        </ul>
        </div>
      </div>
    </div>
  );
}
