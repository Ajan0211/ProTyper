import React, { useState } from "react";
import BagItem from "./BagItem";
import { useNavigate } from "react-router-dom";

const Bag = (props) => {
  const { popUp } = props;
  const [priceList, setPriceList] = useState([18, 6, 4]);
  const navigate = useNavigate();
  return (
    <div className={`PopUp ${[popUp ? "show" : ""]}`}>
      Shopping bag
      <div className="item-container">
        {priceList.map((_, index) => {
          return (
            <BagItem
              priceIndex={index}
              priceList={priceList}
              setPriceList={setPriceList}
              key={`bag-item-${index}`}
            />
          );
        })}
      </div>
      <div className="total-cost">
        Total:
        {priceList.reduce((a, b) => {
          return a + b;
        })}
      </div>
      <div className="bag-checkout" onClick={() => navigate("/Checkout")}>
        Checkout
      </div>
    </div>
  );
};

export default Bag;
