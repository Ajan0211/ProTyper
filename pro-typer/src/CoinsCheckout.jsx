import ShopNav from "./ShopNav.jsx";
import "./CoinsCheckout.css";
import { useContext } from "react";
import { UserContext } from "./userContext.jsx";
import { useNavigate } from "react-router-dom";
import { BagContext } from "./BagContext.jsx";
import axios from "axios";
/**
 * @author Ajanthapan Agilaruben
 *  This file contains the Checkout page which would allow the user to pay for the amount of coins they have put in the basket.
 * @date 1/4/2024 - 12:46:36 PM
 *
 * @returns {the shopNav component as well as the payment section and the personal information section.}
 */
function CoinsCheckout() {
  const { user, checkout } = useContext(UserContext);
  const { bag, removeFromBag } = useContext(BagContext);
  const navigate = useNavigate();

  // This is the functionthat calculates the total cost of the items in the bag that are not coins
  const calculateCost = () => {
    let cost = 0;
    bag.forEach((item) => {
      if (item.type != "coin") {
        cost += item.price; // This adds up the price of each item
      }
    });

    return cost; // This returns the total cost.
  };
  return (
    <>
      <ShopNav></ShopNav>

      <div className="checkout-heading">
        Thank you for shopping at ProTyper!
      </div>

      <div className="checkout-container">
        <div className="pay-container">
          Order Summary
          <div className="personal-container">
            Items selected shown below
            {bag
              .filter((item) => item.type != "coin") // This filters out coin items
              .map((item) => {
                return (
                  // This returns the items selected by the user
                  <div className="item-order">
                    {item.quantity}x {item.name} ({item.price} coins)
                    <i
                      onClick={() => removeFromBag(item)} // This removes the item when clicked on
                      className="fa-solid fa-trash"
                    ></i>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="card-info">
          Coin Payment
          <div className="card-container">
            <div className="card-info-text">
              Press plus icon to purchase more coins
            </div>

            <div className="card-input-container">
              <div className="cost-container">
                Current Balance:
                <div className="coin-balance">
                  {/* This displays the current coin balance of the users */}
                  {user?.coinbalance ? user.coinbalance : 0}{" "}
                  <i className="fa-solid fa-coins"></i>
                </div>
              </div>
              <div className="split">
                <div className="cost-container3">
                  Costs:
                  <div className="coin-balance">
                    {/* This give the total cost of the items being purchased by the user */}
                    {calculateCost()} <i className="fa-solid fa-coins"></i>
                  </div>
                </div>
                <div
                  className="cost-container2"
                  onClick={() => navigate("/Coins")} // This navigates the user to the coins page.
                >
                  Purchase more Coins +
                </div>
              </div>
            </div>
          </div>
          <div className="payment">
            <div className="pay-section">
              <div
                className="pay-button"
                onClick={() => {
                  if (user) {
                    // If the user is logged in it would checkout but if they are not it would lead to the shop page.
                    const dataToSend = {
                      bag: bag.filter((item) => item.type != "coin"),
                      type: "item",
                    };
                    checkout(dataToSend);
                  } else {
                    navigate("/Shop");
                  }
                }}
              >
                Pay Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CoinsCheckout;
