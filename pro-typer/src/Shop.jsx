import ShopNav from "./ShopNav.jsx";
import "./Shop.css";
import ShopItem from "./ShopItem.jsx";
import { useState } from "react";

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
    { name: "item9", price: "£8.99", type: "theme" },
  ];

  const filterItems = () => {
    return items.filter((item) => {
      return item.name.toLowerCase().includes(searchValue.toLowerCase());
    });
  };

  return (
    <>
      <ShopNav
        searchValue={searchValue}
        setSearchValue={setSearchValue}
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
