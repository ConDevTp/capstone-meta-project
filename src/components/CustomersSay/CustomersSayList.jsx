import FourStar from "../../assets/4-star.jpg";
import FiveStar from "../../assets/5-star.jpg";

import John from "../../assets/John Davis.jpg";
import Anna from "../../assets/Anna Smith.jpg";
import Maria from "../../assets/Maria Johnson.jpg";
import Michael from "../../assets/Michael Brown.jpg";

const CustomersSayList = () => {
  return (
    <div className="customers-list">
      <div className="customer-card">
        <img src={FiveStar} alt="customer rate" className="customer-rating" />
        <div className="customer-details">
          <img src={John} alt="customer-john" className="customer-image" />
          <h4 className="customer-name">John Davis</h4>
        </div>
        <p className="customer-description">
          The food at Little Lemon is absolutely amazing! Fresh and delicious
          every time.
        </p>
      </div>

      <div className="customer-card">
        <img src={FourStar} alt="customer rate" className="customer-rating" />
        <div className="customer-details">
          <img src={Anna} alt="customer-Anna" className="customer-image" />
          <h4 className="customer-name">Anna Smith</h4>
        </div>
        <p className="customer-description">
          A cozy atmosphere and friendly staff. I love coming here with my
          family.
        </p>
      </div>

      <div className="customer-card">
        <img src={FiveStar} alt="customer rate" className="customer-rating" />
        <div className="customer-details">
          <img src={Maria} alt="customer-Maria" className="customer-image" />
          <h4 className="customer-name">Maria Johnson</h4>
        </div>
        <p className="customer-description">
          Best Mediterranean food in Chicago! Highly recommend the Greek salad.
        </p>
      </div>

      <div className="customer-card">
        <img src={FiveStar} alt="customer rate" className="customer-rating" />
        <div className="customer-details">
          <img
            src={Michael}
            alt="customer-Michael"
            className="customer-image"
          />
          <h4 className="customer-name">Michael Brown</h4>
        </div>
        <p className="customer-description">
          Great service and authentic dishes. Perfect place for a weekend
          dinner.
        </p>
      </div>
    </div>
  );
};

export default CustomersSayList;
