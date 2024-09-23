import "../styles/Footer.css";
import gitHubLogo from "../assets/github-logo.png";
import linkedInLogo from "../assets/linkedin-with-circle.svg";
import stackOverflowLogo from "../assets/stack-overflow.svg";

export default function Footer() {
  return (
    <footer>
      <ul className="ul-footer">
        <li className="li-footer">
          <a
            className="a-footer"
            href="https://github.com/DevUmana"
            target="_blank"
          >
            <img
              className="img-footer"
              src={gitHubLogo}
              alt="GitHub Profile"
            />
          </a>
        </li>
        <li className="li-footer">
          <a
            className="a-footer"
            href="https://www.linkedin.com/in/david-umana-16a103113"
            target="_blank"
          >
            <img
              className="img-footer"
              src={linkedInLogo}
              alt="LinkedIn Profile"
            />
          </a>
        </li>
        <li className="li-footer">
          <a
            className="a-footer"
            href="https://stackoverflow.com/users/27423118/david-umana"
            target="_blank"
          >
            <img
              className="img-footer"
              src={stackOverflowLogo}
              alt="Stack Overflow Profile"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
}
