import "./ShopNav.css";

import { useNavigate } from "react-router-dom";

function ShopNav(props) {
  const { searchValue, setSearchValue } = props;
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
            <a onClick={() => navigate("/ShoppingBag")}>
              <i className="fa-solid fa-bag-shopping"></i>
            </a>
          </div>

          <div className="checkout-button">Checkout</div>
        </div>
      </div>
      <div className="navbar2">
        <div className="shopnav-item1">
          <a onClick={() => navigate("/Skins")}>Skins</a>
        </div>
        <div className="shopnav-item1">
          <a onClick={() => navigate("/Themes")}>Themes</a>
        </div>
        <div className="shopnav-item1">
          <a onClick={() => navigate("/Coins")}>Coins</a>
        </div>
      </div>
    </>
  );
}

export default ShopNav;
