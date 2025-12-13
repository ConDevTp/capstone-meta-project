import "./nav.css";

const Nav = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="/menu" className="nav-link">
            Menu
          </a>
        </li>
        <li className="nav-item">
          <a href="/reservation" className="nav-link">
            Reservation
          </a>
        </li>
        <li className="nav-item">
          <a href="/order" className="nav-link">
            Order Online
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
