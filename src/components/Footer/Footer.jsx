import { Link } from "react-router";
import Logo from "../../assets/logo-lg.png";
import Content from "../Content/Content";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="full-green mt-4">
      <Content className="footer">
        <div>
          <img src={Logo} alt="Little Lemon" className="footer-logo" />
        </div>

        <nav>
          <h4 className="footer-title">Doormat Navigation</h4>
          <ul>
            <li className="footer-item">
              <Link to="/">Home</Link>
            </li>
            <li className="footer-item">
              <Link to="/about">About</Link>
            </li>
            <li className="footer-item">
              <Link to="/menu">Menu</Link>
            </li>
            <li className="footer-item">
              <Link to="/reservations">Reservations</Link>
            </li>
            <li className="footer-item">
              <Link to="/order">Order Online</Link>
            </li>
          </ul>
        </nav>

        <address>
          <h4 className="footer-title">Contact</h4>
          <p className="footer-item">Address: 123 Main St, City</p>
          <p className="footer-item">Phone: (123) 456-7890</p>
          <p className="footer-item">Email: info@littlelemon.com</p>
        </address>

        <section>
          <h4 className="footer-title">Social Media Links</h4>
          <ul>
            <li className="footer-item">
              <a href="/">Facebook</a>
            </li>
            <li className="footer-item">
              <a href="/about">Instagram</a>
            </li>
            <li className="footer-item">
              <a href="/menu">Twitter</a>
            </li>
          </ul>
        </section>
      </Content>
    </footer>
  );
};

export default Footer;
