import { useContext } from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./pro-typer/src/userContext";
import { ThemeContext } from "./pro-typer/src/themeContext";

/**
 * This file holds the navbar component which is used throughout the pages so user can navigate to different pages at any time.
 * @date 12/5/2023 - 15:33:47 PM
 *
 * @returns {the Navbar component}
 */
function Navbar() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { isLightMode } = useContext(ThemeContext);

  return (
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

      <img
        className="logo"
        src={`${
          isLightMode
            ? "src/assets/logo-lightmode.png"
            : "src/assets/Layer 1.png"
        }`}
        onClick={() => navigate("/")}
      ></img>
      <div className="nav-right">
        <div className="coins">Coins:</div>
        <div className="coin-button">+</div>{" "}
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
        <div className="logout">
          <a>Logout</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
