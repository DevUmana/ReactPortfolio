import { Link, useLocation } from "react-router-dom";
import "../styles/NavTabs.css";

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs nav-style">
      <li className="nav-item">
        <Link
          to="/"
          className={
            currentPage === "/"
              ? "nav-link-style active-link"
              : "nav-link-style"
          }
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
          className={
            currentPage === "/Portfolio"
              ? "nav-link-style active-link"
              : "nav-link-style"
          }
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={
            currentPage === "/Contact"
              ? "nav-link-style active-link"
              : "nav-link-style"
          }
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          className={
            currentPage === "/Resume"
              ? "nav-link-style active-link"
              : "nav-link-style"
          }
        >
          Resume
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
