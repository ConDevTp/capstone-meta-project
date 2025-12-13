import Logo from "../assets/Logo.svg";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={Logo} alt="Little Lemon" />
      </div>

      <nav>
        <h4>Doormat Navigation</h4>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/reservations">Reservations</a>
          </li>
          <li>
            <a href="/order">Order Online</a>
          </li>
        </ul>
      </nav>

      <address>
        <h4>Contact</h4>
        <p>Address: 123 Main St, City</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@littlelemon.com</p>
      </address>

      <section>
        <h4>Social Media Links</h4>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>Twitter</p>
      </section>
    </footer>
  );
};

export default Footer;
