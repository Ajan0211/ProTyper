import ShopNav from "./ShopNav.jsx";
import "./Shop.css";
import ShopItem from "./ShopItem.jsx";
import { useState } from "react";

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
    { name: "item1", price: "£8.99", type: "theme" },
    { name: "item2", price: "£8.99", type: "skin" },
    { name: "item3", price: "£8.99", type: "theme" },
    { name: "item4", price: "£8.99", type: "skin" },
    { name: "item5", price: "£8.99", type: "theme" },
    { name: "item6", price: "£8.99", type: "skin" },
    { name: "item7", price: "£8.99", type: "theme" },
    { name: "item8", price: "£8.99", type: "skin" },
    { name: "item9", price: "£10.99", type: "coin" },
    { name: "item10", price: "£15.99", type: "coin" },
    { name: "item11", price: "£5.99", type: "coin" },
    { name: "item12", price: "£25.99", type: "coin" },
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
        setTypeFilter={setTypeFilter}
        typeFilter={typeFilter}
      ></ShopNav>
      <div className="page-container">
        {filterItems().map((item, index) => {
          return (
            <ShopItem
              key={`shop-item-${index}`}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </div>
    </>
  );
}

export default Shop;
