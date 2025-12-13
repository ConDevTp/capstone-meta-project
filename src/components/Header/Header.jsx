import Logo from "../../assets/Logo.svg";
import "./header.css";
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Little Lemon" />

      <Nav />
    </header>
  );
};

export default Header;
