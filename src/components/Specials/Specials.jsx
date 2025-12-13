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
          <button>Online Menu</button>
        </div>
        <SpecialsList />
      </Content>
    </section>
  );
};

export default Specials;
