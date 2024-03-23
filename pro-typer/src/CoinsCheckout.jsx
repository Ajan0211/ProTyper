import ShopNav from "./ShopNav.jsx";
import "./CoinsCheckout.css";
import { useContext } from "react";
import { UserContext } from "./userContext.jsx";
import { useNavigate } from "react-router-dom";
import { BagContext } from "./BagContext.jsx";
import axios from "axios";
/**
 * @author Ajanthapan Agilaruben
 *  This file contains the Checkout page which would allow the user to pay for what has been placed in the users basket.
 * @date 12/5/2023 - 12:46:36 PM
 *
 * @returns {the shopNav component as well as the payment section and the personal information section.}
 */
function CoinsCheckout() {
  const { user, checkout } = useContext(UserContext);
  const { bag, removeFromBag } = useContext(BagContext);
  const navigate = useNavigate();

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
              .filter((item) => item.type != "coin")
              .map((item) => {
                return (
                  <div className="item-order">
                    {item.quantity}x {item.name} ({item.price} coins)
                    <i
                      onClick={() => removeFromBag(item)}
                      className="fa-solid fa-trash"
                    ></i>
                  </div>
                );
              })}
            {/* <div className="item-order">
              Item2<i className="fa-solid fa-trash"></i>
            </div>
            <div className="item-order">
              Item3<i className="fa-solid fa-trash"></i>
            </div> */}
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
                  {user?.coinbalance ? user.coinbalance : 0}{" "}
                  <i className="fa-solid fa-coins"></i>
                </div>
              </div>
              <div className="split">
                <div className="cost-container3">
                  Costs:
                  <div className="coin-balance">
                    {calculateCost()} <i className="fa-solid fa-coins"></i>
                  </div>
                </div>
                <div
                  className="cost-container2"
                  onClick={() => navigate("/Coins")}
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
