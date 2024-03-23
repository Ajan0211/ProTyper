import ShopNav from "./ShopNav.jsx";
import "./Shop.css";
import ShopItem from "./ShopItem.jsx";
import { useState } from "react";

import Car2 from "./assets/car2.png";
import Car3 from "./assets/car3.png";
import Jet from "./assets/jet.png";
import Car4 from "./assets/car4.png";
import ShopFilter from "./ShopFilter.jsx";
import Theme1 from "./assets/Theme1.gif";
import Theme2 from "./assets/Theme2.gif";
import Theme3 from "./assets/Theme3.gif";
import Theme4 from "./assets/Theme4.gif";
/**
 * @author Ajanthapan Agilaruben
 * This file is used for the shop page were the user can use a search filter to look for the exact item the
 * user wants as well as the filter option which filters through the list of items and depending on which one
 * the user clicks (e.g skins) it would only display the skins available in the shop. It also has the a shopping
 * bag icon where the user can see all the items they have added to there basket and a checkout button which leads
 * to a checkout page.
 *
 * @date 12/5/2023 - 12:36:33 PM
 *
 * @returns {ShopNav component as well as the shop item component which lists all the available stock in the shop.}
 */
function Shop() {
  const [searchValue, setSearchValue] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  const items = [
    { name: "item1", price: 10, type: "theme", image: Theme1 },
    { name: "F1 Car", price: 11, type: "skin", image: Car2 },
    { name: "item3", price: 15, type: "theme", image: Theme2 },
    { name: "Police Car", price: 10, type: "skin", image: Car3 },
    { name: "item5", price: 5, type: "theme", image: Theme3 },
    { name: "Sports Car", price: 10, type: "skin", image: Car4 },
    { name: "item7", price: 10, type: "theme", image: Theme4 },
    { name: "Jet", price: 13, type: "skin", image: Jet },
  ];

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
      <ShopNav
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      ></ShopNav>
      <ShopFilter typeFilter={typeFilter} setTypeFilter={setTypeFilter} />

      <div className="page-container">
        {filterItems().map((item, index) => {
          return (
            <ShopItem
              key={`shop-item-${index}`}
              name={item.name}
              price={item.price}
              image={item.image}
              type={item.type}
            />
          );
        })}
      </div>
    </>
  );
}

export default Shop;
