import React, { useState } from "react";
import BagItem from "./BagItem";

const Bag = (props) => {
  const { popUp } = props;
  const [priceList, setPriceList] = useState([18, 6, 4]);

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
    </div>
  );
};

export default Bag;
