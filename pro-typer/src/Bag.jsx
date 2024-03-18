/**
 * This file is a component of the shopNav.jsx file and it is shopping bag feature which is shown as a pop up on the shop page when you click on the Navbar.
 * @date 12/5/2023 - 11:20:23 AM
 * @author Ajanthapan Agilaruben
 * @returns {The bag item component with a list of items with its price and total and a button that leads to the checkout page.}
 */

import React, { useContext, useState } from "react";
import BagItem from "./BagItem";
import { useNavigate } from "react-router-dom";
import { BagContext } from "./BagContext";

const Bag = (props) => {
  const { popUp } = props;
  const { bag } = useContext(BagContext);
  const navigate = useNavigate();

  const calculateCost = () => {
    let cost = 0;
    bag.forEach((item) => {
      if (item.type != "coin") {
        cost += item.price;
      }
    });

    return cost;
  };
  return (
    <div className={`PopUp ${[popUp ? "show" : ""]}`}>
      Shopping bag
      <div className="item-container">
        {bag.map((item, index) => {
          return <BagItem key={`bag-item-${index}`} item={item} />;
        })}
      </div>
      <div className="total-cost">
        Total: {calculateCost()}
        <i className="fa-solid fa-coins"></i>
      </div>
      <div className="bag-checkout" onClick={() => navigate("/CoinsCheckout")}>
        Checkout
      </div>
    </div>
  );
};

export default Bag;
