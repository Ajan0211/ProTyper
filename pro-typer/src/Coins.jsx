/**
 * @author Ajanthapan Agilaruben
 *  This file contains the coins page where it shows the user all the available coins for sale to purchase skins and themes.
 * @date 1/4/2024 - 12:46:36 PM
 *
 * @returns {Coins component}
 */

import "./Coins.css";
import CoinItem from "./CoinItem.jsx";
import { useState } from "react";

import CoinImage from "./assets/coins.png";
import ShopNav from "./ShopNav.jsx";

function Coins() {
  const [searchValue, setSearchValue] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  // This is the array containing the coins available for purchase.
  const items = [
    {
      name: "5 coins",
      quantity: 5,
      price: 5.99,
      type: "coin",
      image: CoinImage,
    },
    {
      name: "10 coins",
      quantity: 10,
      price: 10.99,
      type: "coin",
      image: CoinImage,
    },
    {
      name: "15 coins",
      quantity: 15,
      price: 15.99,
      type: "coin",
      image: CoinImage,
    },
    {
      name: "25 coins",
      quantity: 25,
      price: 25.99,
      type: "coin",
      image: CoinImage,
    },
  ];
  // This is the function that filter items
  const filterItems = () => {
    return items.filter((item) => {
      if (item.name.toLowerCase().includes(searchValue.toLowerCase())) {
        if (typeFilter == "") {
          return true;
        }
        if (item.type == typeFilter) {
          return true;
        }
      }

      return false;
    });
  };
  return (
    <>
      <ShopNav />
      <div className="coinsTitle">Coins</div>
      {/*  This is the container for the coins */}
      <div className="page-container">
        {filterItems().map((item, index) => {
          return (
            <CoinItem
              key={`shop-item-${index}`}
              name={item.name}
              price={item.price}
              image={item.image}
              quantity={item.quantity}
              type={"coin"} // gets only the coins
            />
          );
        })}
      </div>
    </>
  );
}

export default Coins;
