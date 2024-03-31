/**
 * This file is a component used in the shopNav.jsx file and it is the shopping bag feature which is shown as a pop up on the shop page when you click on the Navbar.
 * @date 30/3/2024 - 11:20:23 AM
 * @author Ajanthapan Agilaruben
 * @returns {The bag component with a bag icon and a list of items.}
 */

import React, { useContext, useState } from "react";
import BagItem from "./BagItem";
import { useNavigate } from "react-router-dom";
import { BagContext } from "./BagContext";

const Bag = (props) => {
  const { popUp } = props;
  const { bag } = useContext(BagContext);
  const navigate = useNavigate();
  // This calculates the costs of the items within the bag.
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
        {/* Calls the bag item component and returns it to the bag. */}
        {bag.map((item, index) => {
          return <BagItem key={`bag-item-${index}`} item={item} />;
        })}
      </div>
      <div className="total-cost">
        {/* Returns the cost */}
        Total: {calculateCost()}
        <i className="fa-solid fa-coins"></i>
      </div>
      {/* Navigates to the coins checkout page */}
      <div className="bag-checkout" onClick={() => navigate("/CoinsCheckout")}>
        Checkout
      </div>
    </div>
  );
};

export default Bag;
