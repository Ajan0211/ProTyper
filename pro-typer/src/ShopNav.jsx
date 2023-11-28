import "./ShopNav.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ShopNav(props) {
  const { searchValue, setSearchValue, typeFilter, setTypeFilter } = props;
  const [popUp, setPopUp] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar1">
        <img
          className="shoplogo"
          src="src/assets/Layer 1.png"
          onClick={() => navigate("/")}
        />
        <div className="shopnav-left">
          <div className="shopnav-item1">
            <div className="searchbar">
              <input
                type="text"
                placeholder="Search.."
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
              ></input>
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </div>

        <div className="shopnav-right">
          <div className="shopnav-item1">
            <a onClick={() => navigate("/Login")}>My Account </a>
            <i className="fa-solid fa-user"></i>
          </div>

          <div className="shopnav-item1">
            <div
              className="bag-button"
              onClick={() =>
                setPopUp((state) => {
                  return !state;
                })
              }
            >
              <i className="fa-solid fa-bag-shopping"></i>
            </div>
            <div className={`PopUp ${[popUp ? "show" : ""]}`}>
              Shopping bag
              <div className="item-container">
                <div className="shop-container"></div>
                <div className="shop-container"></div>
                <div className="shop-container"></div>
                <div className="total-container">
                  <div className="total">Total:</div> $$$
                </div>
              </div>
            </div>
          </div>

          <div
            className="checkout-button"
            onClick={() => navigate("/Checkout")}
          >
            {" "}
            Checkout
          </div>
        </div>
      </div>
      <div className="navbar2">
        <div className="shopnav-item1">
          <a
            className={typeFilter == "skin" ? `active` : ""}
            onClick={() =>
              setTypeFilter((state) => {
                if (state == "skin") {
                  return "";
                }
                return "skin";
              })
            }
          >
            Skins
          </a>
        </div>
        <div className="shopnav-item1">
          <a
            className={typeFilter == "theme" ? `active` : ""}
            onClick={() =>
              setTypeFilter((state) => {
                if (state == "theme") {
                  return "";
                }
                return "theme";
              })
            }
          >
            Themes
          </a>
        </div>
        <div className="shopnav-item1">
          <a
            className={typeFilter == "coin" ? `active` : ""}
            onClick={() =>
              setTypeFilter((state) => {
                if (state == "coin") {
                  return "";
                }
                return "coin";
              })
            }
          >
            Coins
          </a>
        </div>
      </div>
    </>
  );
}

export default ShopNav;
