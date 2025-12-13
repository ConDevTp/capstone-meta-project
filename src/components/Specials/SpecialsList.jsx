import Order from "../../assets/order.png";

import salad from "../../assets/greek salad.jpg";
import dessert from "../../assets/lemon dessert.jpg";
import bruchetta from "../../assets/Bruchetta.jpg";

const SpecialsList = () => {
  return (
    <div className="SpecialsList">
      <div className="food-card">
        <img src={salad} alt="Greek salad" className="food-image" />

        <div className="food-details">
          <h3 className="food-title">Greek salad</h3>
          <span className="food-price">$12.99</span>
        </div>

        <p className="food-description">
          The famous greek salad of crispy lettuce, peppers, olives and our
          Chicago style feta cheese, garnished with crunchy garlic and rosemary
          croutons.
        </p>
        <button className="order-btn">
          Order a Delivery
          <img className="order-icon" src={Order} alt="delivery icon" />
        </button>
      </div>
      <div className="food-card">
        <img src={bruchetta} alt="Greek salad" className="food-image" />

        <div className="food-details">
          <h3 className="food-title">Bruchetta</h3>
          <span className="food-price">$5.99</span>
        </div>

        <p className="food-description">
          Our Bruschetta is made from grilled bread that has been smeared with
          garlic and seasoned with salt and olive oil.
        </p>
        <button className="order-btn">
          Order a Delivery
          <img className="order-icon" src={Order} alt="delivery icon" />
        </button>
      </div>
      <div className="food-card">
        <img src={dessert} alt="Greek salad" className="food-image" />

        <div className="food-details">
          <h3 className="food-title">Lemon Dessert</h3>
          <span className="food-price">$5.00</span>
        </div>

        <p className="food-description">
          This comes straight from grandma’s recipe book, every last ingredient
          has been sourced and is as authentic as can be imagined.
        </p>
        <button className="order-btn">
          Order a Delivery
          <img className="order-icon" src={Order} alt="delivery icon" />
        </button>
      </div>
    </div>
  );
};

export default SpecialsList;
