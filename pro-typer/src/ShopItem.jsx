/**
 * @author Ajanthapan Agilaruben
 * This file contains the component which is used in the shop and it displays the items whith the name and its
 * price with a Add button which allows it to be added to the users basket.
 * @date 12/5/2023 - 12:41:35 pM
 * @returns {ShopItem component.}
 */

import React, { useContext } from "react";
import { BagContext } from "./BagContext";

const ShopItem = (props) => {
  const { name, price, image, type } = props;
  const { setBag } = useContext(BagContext);
  return (
    <div className="box-container">
      {name}
      <img className="product-image" src={image} alt="Product Image" />
      {/* <div className="image-container"></div> */}
      <div className="price-container">
        {price} coins
        <div
          onClick={() => {
            setBag((current) => [
              ...current,
              { type, quantity: 1, image, price, name },
            ]);
          }}
          className="Add-button"
        >
          <i className="fa-solid fa-plus"></i>
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
