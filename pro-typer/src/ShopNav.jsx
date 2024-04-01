import "./ShopNav.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Bag from "./Bag";
import { useContext } from "react";
import { UserContext } from "./userContext";
import { ThemeContext } from "./themeContext";

/**
 * @author Ajanthapan Agilaruben
 * This file contains the ShopNav Component which is used throughout the shop page. It holds all the links to lead to other pages.
 *
 * @date 12/5/2023 15:31:25 PM
 *
 * @param {searchValue, setSearchValue are used for the search bars to get the item searched by the user and}
 * @returns {ShopNav component}
 */

// This is the shopNav component to display the nav bar in the shop page.
function ShopNav(props) {
  const { searchValue, setSearchValue } = props;
  const [popUp, setPopUp] = useState(false);
  const navigate = useNavigate();

  const { user } = useContext(UserContext);
  const { isLightMode } = useContext(ThemeContext);

  const [balance, setBalance] = useState(0);

  // This is the effect that updates the balance when the user purchases coins
  useEffect(() => {
    setBalance(user?.coinbalance);
  }, [user]);
  return (
    <>
      <div className="navbar1">
        <img
          className="shoplogo"
          // This logo changes based on what mode it is in and navigates to home page.
          src={`${
            isLightMode
              ? "src/assets/logo-lightmode.png"
              : "src/assets/Layer 1.png"
          }`}
          onClick={() => navigate("/")}
        ></img>

        {/* This containing the search bar on the left side of the nav bar  */}
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
        {/* This is the right side of the navbar containing account and shopping information */}
        <div className="shopnav-right">
          <div className="shopnav-item1">
            <a
              onClick={() => {
                if (user) {
                  navigate("/Account");
                } else {
                  navigate("/Login");
                }
              }}
            >
              {user ? ( // this is what changes between My Account and login/signUp based on if the user is logged in or not.
                <>
                  My Account <i className="fa-solid fa-user"></i>
                </>
              ) : (
                "Login / Signup"
              )}
            </a>
          </div>
          {/* Displays user coins balance if the are logged in */}
          <div style={{ display: user ? "" : "none" }} className="coins">
            Coins: {balance}
          </div>
          <div
            style={{ display: user ? "" : "none" }}
            className="coin-button"
            onClick={() => navigate("/Coins")}
          >
            +
          </div>
          {/* This has the shopping bag icon with a pop up functionality */}
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
            onClick={() => navigate("/CoinsCheckout")}
          >
            {" "}
            Checkout
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopNav;
