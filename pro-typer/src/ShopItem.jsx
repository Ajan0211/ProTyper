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
