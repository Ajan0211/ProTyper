import React from "react";

const Bag = (props) => {
  const { price, popUp } = props;
  return (
    <div className={`PopUp ${[popUp ? "show" : ""]}`}>
      Shopping bag
      <div className="item-container">
        <div className="shop-container"></div>
        <div className="shop-container"></div>
        <div className="shop-container"></div>
        <div className="total-container">
          <div className="total">Total:</div> {price}
        </div>
      </div>
    </div>
  );
};

export default Bag;
