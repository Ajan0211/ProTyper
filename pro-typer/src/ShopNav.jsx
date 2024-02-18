import "./ShopNav.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Bag from "./Bag";
import { useContext } from "react";
import { UserContext } from "./userContext";

/**
 * @author Ajanthapan Agilaruben
 * This file contains the ShopNav Component which is used throughout the shop page. It holds all the links to lead to other pages.
 *
 * @date 12/5/2023 15:31:25 PM
 *
 * @param {searchValue, setSearchValue are used for the search bars to get the item searched by the user and
 * typefilter, setTypeFilter are used to filter through the 3 filters skins,coins and themes. }
 * @returns {ShopNav component}
 */
function ShopNav(props) {
  const { searchValue, setSearchValue, typeFilter, setTypeFilter } = props;
  const [popUp, setPopUp] = useState(false);
  const navigate = useNavigate();

  const { user } = useContext(UserContext);
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
            <a
              onClick={() => {
                if (user) {
                  alert("Account page not made yet!");
                } else {
                  navigate("/Login");
                }
              }}
            >
              {user ? (
                <>
                  My Account
                  <i className="fa-solid fa-user"></i>
                </>
              ) : (
                "Login / Signup"
              )}
            </a>
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
            <Bag popUp={popUp} />
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
