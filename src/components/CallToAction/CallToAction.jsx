import "./calltoaction.css";
import Img from "../../assets/restauranfood.jpg";
import Content from "../Content/Content";
import { Link } from "react-router";

const CallToAction = () => {
  return (
    <section className="full-green mt-3">
      <Content className="calltoaction">
        <div className="calltoaction-detals">
          <h1 className="calltoaction-title">Little Lemon</h1>
          <h2 className="calltoaction-subtitle">Chicago</h2>
          <h5 className="calltoaction-leadtext">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist. We are a family
            owned Mediterranean restaurant, focused on traditional recipes
            served with a modern twist. We are a family owned Mediterranean
            restaurant, focused
          </h5>
          <Link to="/booking">
            <button aria-label="ReserveTable" className="calltoaction-order">
              Reserve a Table
            </button>
          </Link>
        </div>

        <img src={Img} className="calltoaction-image" alt="Restauran Food" />
      </Content>
    </section>
  );
};

export default CallToAction;
