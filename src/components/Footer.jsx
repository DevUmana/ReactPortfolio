import "../styles/Footer.css";

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
              src="src/assets/github-logo.png"
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
              src="src/assets/linkedin-with-circle.svg"
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
              src="src/assets/stack-overflow.svg"
              alt="Stack Overflow Profile"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
}
