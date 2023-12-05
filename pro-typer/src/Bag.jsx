/**
 * This file is a component of the shopNav.jsx file and it is shopping bag feature which is shown as a pop up on the shop page when you click on the Navbar.
 * @date 12/5/2023 - 11:20:23 AM
 * @author Ajanthapan Agilaruben
 * @returns {The bag item component with a list of items with its price and total and a button that leads to the checkout page.}
 */

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
