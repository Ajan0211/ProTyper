/**
 * @author Ajanthapan Agilaruben
 *  This file contains the Checkout page which would allow the user to pay for what has been placed in the users basket.
 * @date 30/3/2024 - 12:46:36 PM
 *
 * @returns {The Checkout component}
 */
import "./Checkout.css";
import { useContext } from "react";
import { UserContext } from "./userContext.jsx";
import Navbar from "../../Navbar.jsx";
import { BagContext } from "./BagContext.jsx";

function Checkout() {
  const { user, checkout } = useContext(UserContext);
  const { bag, removeFromBag } = useContext(BagContext);
  // This calculates the costs of what is in the order summary.
  const calculateCost = () => {
    let cost = 0;
    bag.forEach((item) => {
      if ((item.type = "coin")) {
        cost += item.price;
      }
    });

    return cost;
  };
  return (
    <>
      <Navbar></Navbar>

      <div className="checkout-heading">
        Thank you for shopping at ProTyper!
      </div>

      <div className="checkout-container">
        <div className="pay-container">
          Personal information
          <div className="personal-container">
            Please input your personal information below
            <div className="input-pay">
              <i className="fa-solid fa-user"></i>
              <input
                type="firstname"
                id="firstname"
                name="firstname"
                placeholder="firstname"
              ></input>
            </div>
            <div className="input-pay">
              <i className="fa-solid fa-user"></i>
              <input
                type="lastname"
                id="lastname"
                name="lastname"
                placeholder="lastname"
              ></input>
            </div>
            <div className="input-pay">
              <i className="fa-solid fa-house"></i>
              <input
                type="street"
                id="street"
                name="street"
                placeholder="Street Address"
              ></input>
            </div>
            <div className="input-pay">
              <i className="fa-solid fa-house"></i>
              <input
                type="country"
                id="country"
                name="country"
                placeholder="country"
              ></input>
            </div>
            <div className="input-pay">
              <i className="fa-solid fa-house"></i>
              <input
                type="city"
                id="city"
                name="city"
                placeholder="city"
              ></input>
            </div>
            <div className="input-pay">
              <i className="fa-solid fa-house"></i>
              <input
                type="postcode"
                id="postcode"
                name="postcode"
                placeholder="postcode"
              ></input>
            </div>
          </div>
        </div>
        <div className="split1">
          <div className="pay-container">
            Order Summary
            <div className="personal-container">
              Items selected shown below
              {bag
                .filter((item) => item.type == "coin")
                .map((item) => {
                  return (
                    // This returns the item the user has selected with its price
                    // and an icon of a trash bag if they want to remove it from the bag
                    <div className="item-order">
                      <div className="coin-order">
                        <span>Number of coins: {item.quantity}</span>
                        <i className="fa-solid fa-coins"></i>
                      </div>
                      <div className="coin-order">Price: {item.price} </div>
                      <div className="coin-order">
                        <i
                          onClick={() => removeFromBag(item)}
                          className="fa-solid fa-trash"
                        ></i>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="card-info">
            Card Information
            <div className="card-container">
              <img className="card" src="src/assets/Mastercard-Logo.png"></img>
              <div className="card-info-text">Enter card information below</div>

              <div className="card-input-container">
                <div className="input-container">
                  <i className="fa-solid fa-credit-card"></i>
                  <input
                    placeholder="XXXX-XXXX-XXXX-XXXX"
                    className="input-box-card"
                    id="card-number"
                  />
                </div>
                <div className="split">
                  <div className="input-container2">
                    <i className="fa-solid fa-credit-card"></i>
                    <input
                      placeholder="XX/XX"
                      className="input-box"
                      id="exp-date"
                    />
                  </div>
                  <div className="input-container2">
                    <i className="fa-solid fa-credit-card"></i>
                    <input placeholder="CVV" className="input-box" id="cvv" />
                  </div>
                </div>
              </div>
            </div>
            <div className="payment">
              <div className="pay-section">
                {/* This tells the user what is total cost */}
                Amount due: £ {calculateCost()}
                <div
                  // This makes the user purchase the coins they have bought when clicked on
                  className="pay-button"
                  onClick={() => {
                    if (user) {
                      const dataToSend = {
                        bag: bag.filter((item) => item.type == "coin"),
                        type: "coin",
                      };
                      checkout(dataToSend);
                    } else {
                      alert("You're not signed in!");
                    }
                  }}
                >
                  Pay Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Checkout;
