import "./App.css";
import Login from "../../Login";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Game from "../../Game";
import SignUp from "./SignUp";
import ResetPassword from "./ResetPassword";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/Game" element={<Game />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
