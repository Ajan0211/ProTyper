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

axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/Game" element={<Game />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
