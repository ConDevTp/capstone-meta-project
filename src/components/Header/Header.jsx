import Logo from "../../assets/Logo.svg";
import "./header.css";
import Nav from "../Nav/Nav";
import Content from "../Content/Content";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  useEffect(() => {
    document.body.style.overflow = isNavActive ? "hidden" : "auto";
  }, [isNavActive]);
  return (
    <Content>
      <header>
        <Link to="/">
          <img src={Logo} alt="Little Lemon" />
        </Link>

        <button
          className="nav-toggle"
          onClick={() => setIsNavActive(!isNavActive)}
        >
          {isNavActive ? "✕" : "☰"}
        </button>

        <Nav isActive={isNavActive} setIsNavActive={setIsNavActive} />
      </header>
    </Content>
  );
};

export default Header;
