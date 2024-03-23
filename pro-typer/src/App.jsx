/**
 * This file is what sets up all the routes which would allow the onclick feature on links and buttons to work and lead the user to the right page.
 * @date 12/5/2023 - 11:17:03 AM
 * @author Ajanthapan Agilaruben
 * @returns {Routes}
 */

import Login from "../../Login";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Game from "../../Game";
import SignUp from "./SignUp";
import ResetPassword from "./ResetPassword";
import Shop from "./Shop";
import Checkout from "./Checkout";
import Settings from "./Settings";
import axios from "axios";
import Account from "./Account";
import Skins from "./Skins";
import Statistics from "./Satistics";
import Coins from "./Coins";
import Themes from "./Themes";
import CoinsCheckout from "./CoinsCheckout";
import { useContext } from "react";
import { ThemeContext } from "./themeContext";
import DarkBackground from "./assets/background.png";
import LightBackground from "./assets/background-lightmode.png";

axios.defaults.withCredentials = true;

function App() {
  const { isLightMode, getCurrentFontString, currentBG } =
    useContext(ThemeContext);

  const getBG = () => {
    if (!currentBG) {
      if (isLightMode) {
        return LightBackground;
      } else {
        return DarkBackground;
      }
    } else {
      return currentBG;
    }
  };

  return (
    <div
      style={{
        fontFamily: getCurrentFontString() ? getCurrentFontString() : undefined,
        backgroundImage: `url("${getBG()}")`,
      }}
      className={`App ${isLightMode ? "light" : ""}`}
    >
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/Game" element={<Game />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Skins" element={<Skins />} />
        <Route path="/Themes" element={<Themes />} />
        <Route path="/Statistics" element={<Statistics />} />
        <Route path="/Coins" element={<Coins />} />
        <Route path="/CoinsCheckout" element={<CoinsCheckout />} />
      </Routes>
    </div>
  );
}

export default App;
