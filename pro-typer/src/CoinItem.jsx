/**
 * @author Ajanthapan Agilaruben
 *  This file contains what each coin item component which will be in the coins page and it has the name image
 *  and price of the coin user would want to purchase.
 * @date 30/3/2024 - 12:46:36 PM
 *
 * @returns {props which are name, price, image, quantity, type}
 */

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
