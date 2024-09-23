import Projects from "../components/Projects";
import "../styles/Portfolio.css";

const projects = [
  {
    id: 1,
    title: "WeatherPulse",
    url: "https://weatherpulse-v7qx.onrender.com/",
    github: "https://github.com/DevUmana/WeatherPulse",
    stack: "MERN",
    background: "#610d00",
  },
  {
    id: 2,
    title: "Travels Guide",
    url: "https://devumana.github.io/New-Travels-Guide/",
    github: "https://github.com/DevUmana/New-Travels-Guide",
    stack: "HTML, CSS, JavaScript",
    background: "#3b382b",
  },
  {
    id: 3,
    title: "Portfolio",
    url: "https://devumana.github.io/02-challenge-portfolio/",
    github: "https://github.com/DevUmana/02-challenge-portfolio",
    stack: "HTML, CSS",
    background: "#374739",
  },
  {
    id: 4,
    title: "CSS Snippet Cheatsheet",
    url: "https://devumana.github.io/02-28-mini-project/",
    github: "https://github.com/DevUmana/02-28-mini-project",
    stack: "HTML, CSS",
    background: "#283b34",
  },
  {
    id: 5,
    title: "Vehicle Builder",
    url: "https://github.com/DevUmana/Vehicle-Builder",
    github: "https://github.com/DevUmana/Vehicle-Builder",
    stack: "Typescript",
    background: "#610d00",
  },
  {
    id: 6,
    title: "Employee Tracker",
    url: "https://github.com/DevUmana/Employee-Tracker",
    github: "https://github.com/DevUmana/Employee-Tracker",
    stack: "Node.js, MySQL, Typescript",
    background: "#3b382b",
  },
];

export default function Portfolio() {
  return (
    <div className="wrapper">
      <div className="pageName">
        <h1>Portfolio</h1>
      </div>
      <div className="portfolio">
        <Projects projects={projects} />
      </div>
    </div>
  );
}
