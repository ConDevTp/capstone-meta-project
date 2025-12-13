import Content from "../Content/Content";
import "./customerssay.css";
import CustomersSayList from "./CustomersSayList";

const CustomersSay = () => {
  return (
    <section className="full-green mt-10">
      <Content className="CustomersSay">
        <div className="CustomersSayHeading">
          <h2>Testimonials</h2>
        </div>

        <CustomersSayList />
      </Content>
    </section>
  );
};

export default CustomersSay;
