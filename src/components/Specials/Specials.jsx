import { Link } from "react-router";
import Content from "../Content/Content";
import "./specials.css";
import SpecialsList from "./SpecialsList";

const Specials = () => {
  return (
    <section className="specials">
      <Content>
        {" "}
        <div className="Specials-Heading">
          <h2>This weeks specials</h2>
          <Link to="/menu">
            <button>Online Menu</button>
          </Link>
        </div>
        <SpecialsList />
      </Content>
    </section>
  );
};

export default Specials;
