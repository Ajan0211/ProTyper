import { useContext, useEffect, useState } from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./pro-typer/src/userContext";
import { ThemeContext } from "./pro-typer/src/themeContext";

/**
 * This file holds the navbar component which is used throughout the pages so user can navigate to different pages at any time.
 * @date 31/3/2023 - 15:33:47 PM
 *
 * @returns {the Navbar component}
 */
function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useContext(UserContext);
  const { isLightMode } = useContext(ThemeContext);

  const [balance, setBalance] = useState(0);

  useEffect(() => {
    setBalance(user?.coinbalance);
  }, [user]);

  return (
    // contains all the nav links which are on the left of the navbar.
    <div className="navbar">
      <div className="nav-left">
        <div className="nav-item1">
          <a onClick={() => navigate("/")}>Home</a>
        </div>
        <div className="nav-item1">
          <a onClick={() => navigate("/Shop")}>Shop</a>
        </div>
        <div className="nav-item1">
          <a onClick={() => navigate("/Settings")}>Settings</a>
        </div>
      </div>
      {/* contains the logo in the centre of the navbar which leads to the home page when clicked and changes to when on lightmode */}
      <img
        className="logo"
        src={`${
          isLightMode
            ? "src/assets/logo-lightmode.png"
            : "src/assets/Layer 1.png"
        }`}
        onClick={() => navigate("/")}
      ></img>
      {/* Conatins all the nav links in the right of the navbar and also has the users coin balance when logged in */}
      <div className="nav-right">
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
        {/* switches from My Account or Login/Signup depending on if the user is logged in or not */}
        <div className="myaccount">
          <a
            onClick={() => {
              if (user) {
                navigate("/Account");
              } else {
                navigate("/Login");
              }
            }}
          >
            {/* Login/Signup */}
            {user ? (
              <>
                My Account <i className="fa-solid fa-user"></i>
              </>
            ) : (
              "Login / Signup"
            )}
          </a>
        </div>

        {/* displays logout when user has been logged in to log out of the account */}
        <div
          style={{ display: user ? "" : "none" }}
          onClick={() => {
            logout();
          }}
          className="logout"
        >
          <a>Logout</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
