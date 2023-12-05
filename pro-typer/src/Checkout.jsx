import ShopNav from "./ShopNav.jsx";
import "./Checkout.css";

/**
 * @author Ajanthapan Agilaruben
 *  This file contains the Checkout page which would allow the user to pay for what has been placed in the users basket.
 * @date 12/5/2023 - 12:46:36 PM
 *
 * @returns {the shopNav component as well as the payment section and the personal information section.}
 */
function Checkout() {
  return (
    <>
      <ShopNav></ShopNav>

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
              Amount due: £XX.XX
              <div className="pay-button">Pay Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Checkout;
