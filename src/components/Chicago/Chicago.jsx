import Content from "../Content/Content";
import "./chicago.css";

import restaurant from "../../assets/restaurant.jpg";
import restaurantChef from "../../assets/restaurant chef B.jpg";

const Chicago = () => {
  return (
    <Content>
      <section className="chicago">
        <div className="chicago-details">
          <h2 className="chicago-title">Little Lemon</h2>
          <h3 className="chicago-subtitle">Chicago</h3>
          <h5 className="chicago-description">
            Little Lemon is a charming neighborhood bistro that serves simple,
            fresh, and locally sourced dishes alongside classic cocktails in a
            lively yet casual atmosphere. The restaurant prides itself on its
            daily specials made from seasonal ingredients, offering guests a
            memorable dining experience with flavors that celebrate
            Mediterranean traditions. From crisp salads and artisanal breads to
            expertly prepared seafood and indulgent desserts, every dish is
            crafted with care. The warm and welcoming environment makes it
            perfect for families, friends, or solo diners. Guests can enjoy
            attentive service, thoughtfully curated drinks, and a cozy ambiance
            that blends modern touches with traditional charm, making every
            visit to Little Lemon a delightful culinary journey.
          </h5>
        </div>
        <div className="chicago-images">
          <img src={restaurant} alt="inside restaurant little lemon" />
          <img src={restaurantChef} alt="restaurant chef B" />
        </div>
      </section>
    </Content>
  );
};

export default Chicago;
