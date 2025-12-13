import { Link } from "react-router";
import "./nav.css";

const Nav = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/menu" className="nav-link">
            Menu
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/reservation" className="nav-link">
            Reservation
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/booking" className="nav-link">
            Order Online
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
