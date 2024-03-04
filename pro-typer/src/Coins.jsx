import Navbar from "../../Navbar.jsx";
import "./Coins.css";
import CoinItem from "./CoinItem.jsx";
import { useState } from "react";

import CoinImage from "./assets/coins.png";
import ShopNav from "./ShopNav.jsx";

function Coins() {
  const [searchValue, setSearchValue] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  const items = [
    {
      name: "5 coins",
      quantity: 5,
      price: "£5.99",
      type: "coin",
      image: CoinImage,
    },
    {
      name: "10 coins",
      quantity: 10,
      price: "£10.99",
      type: "coin",
      image: CoinImage,
    },
    {
      name: "15 coins",
      quantity: 15,
      price: "£15.99",
      type: "coin",
      image: CoinImage,
    },
    {
      name: "25 coins",
      quantity: 25,
      price: "£25.99",
      type: "coin",
      image: CoinImage,
    },
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
      {/* <Navbar></Navbar> */}

      <ShopNav />
      <div className="coinsTitle">Coins</div>

      <div className="page-container">
        {filterItems().map((item, index) => {
          return (
            <CoinItem
              key={`shop-item-${index}`}
              name={item.name}
              price={item.price}
              image={item.image}
              quantity={item.quantity}
              type={"coin"}
            />
          );
        })}
      </div>
    </>
  );
}

export default Coins;
