/**
 * @author Ajanthapan Agilaruben
 * This file contains the component which is used in the shop and it displays the items whith the name and its
 * price with a Add button which allows it to be added to the users basket.
 * @date 12/5/2023 - 12:41:35 pM
 * @returns {ShopItem component.}
 */

import React from "react";

const ShopItem = (props) => {
  const { name, price } = props;
  return (
    <div className="box-container">
      {name}
      <div className="image-container"></div>
      <div className="price-container">
        {price}
        <div className="Add-button">
          <i className="fa-solid fa-plus"></i>
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
