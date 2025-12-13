import Logo from "../../assets/Logo.svg";
import "./header.css";
import Nav from "../Nav/Nav";
import Content from "../Content/Content";
import { Link } from "react-router";

const Header = () => {
  return (
    <Content>
      <header>
        <Link to="/">
          <img src={Logo} alt="Little Lemon" />
        </Link>

        <Nav />
      </header>
    </Content>
  );
};

export default Header;
