import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BagContext } from "./BagContext";
const CoinItem = (props) => {
  const { name, price, image, quantity, type } = props;
  const navigate = useNavigate();

  const { setBag } = useContext(BagContext);
  return (
    <div className="box-container">
      {name}
      <img className="product-image" src={image} alt="Product Image" />
      {/* <div className="image-container"></div> */}
      <div className="price-container">
        {price}
        <div
          className="checkout-button"
          onClick={() => {
            setBag((current) => [
              ...current,
              { type, quantity, image, price, name },
            ]);
            navigate("/Checkout");
          }}
        >
          Add To Bag
        </div>
      </div>
    </div>
  );
};

export default CoinItem;
