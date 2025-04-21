import { Link } from "react-router-dom";
import gifBackground from "../assets/marvel.gif";
import "../Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        {/* Infinity Boost always animated */}
        <Link
          to="/"
          className="marvel-text"
          style={{ backgroundImage: `url(${gifBackground})` }}
        >
          Infinity Boost
        </Link>
      </div>
      <ul className="navbar-links">
        {["HOME", "ABOUT", "CONTACT"].map((link, index) => (
          <li key={index}>
            <Link
              to={link === "HOME" ? "/" : `/${link.toLowerCase()}`}
              className="hover-marvel-text"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
