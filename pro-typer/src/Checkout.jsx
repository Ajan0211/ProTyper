import ShopNav from "./ShopNav.jsx";
import "./Checkout.css";

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
              <i className="fa-solid fa-user"></i>
              <input
                type="street"
                id="street"
                name="street"
                placeholder="Street Address"
              ></input>
            </div>
            <div className="input-pay">
              <i className="fa-solid fa-user"></i>
              <input
                type="country"
                id="country"
                name="country"
                placeholder="country"
              ></input>
            </div>
            <div className="input-pay">
              <i className="fa-solid fa-user"></i>
              <input
                type="city"
                id="city"
                name="city"
                placeholder="city"
              ></input>
            </div>
            <div className="input-pay">
              <i className="fa-solid fa-user"></i>
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
            Enter card information below
            <div class="card-input-container">
              <div class="input-container">
                <input
                  placeholder="XXXX-XXXX-XXXX-XXXX"
                  class="input-box-card"
                  id="card-number"
                />
              </div>
              <div class="input-container">
                <input placeholder="XX/XX" class="input-box" id="exp-date" />
              </div>
              <div class="input-container">
                <input placeholder="CVV" class="input-box" id="cvv" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Checkout;
