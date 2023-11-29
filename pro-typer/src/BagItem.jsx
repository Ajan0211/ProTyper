import React from "react";

const BagItem = (props) => {
  const { priceIndex, priceList, setPriceList } = props;

  return (
    <>
      <div className="shop-container">
        item1
        <div className="quantity">
          <i className="fa-solid fa-minus"></i>
          <div className="quantity-num">1</div>
          <i className="fa-solid fa-plus"></i>
        </div>
        <div className="total-container">{priceList[priceIndex]}</div>
      </div>
    </>
  );
};

export default BagItem;
