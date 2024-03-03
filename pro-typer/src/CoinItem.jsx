import React from "react";
import { useNavigate } from "react-router-dom";
const CoinItem = (props) => {
  const { name, price, image } = props;
  const navigate = useNavigate();
  return (
    <div className="box-container">
      {name}
      <img className="product-image" src={image} alt="Product Image" />
      {/* <div className="image-container"></div> */}
      <div className="price-container">
        {price}
        <div className="checkout-button" onClick={() => navigate("/Checkout")}>
          Checkout
        </div>
      </div>
    </div>
  );
};

export default CoinItem;
