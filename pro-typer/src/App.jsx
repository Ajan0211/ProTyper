import "./App.css";
import Login from "../../Login";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Game from "../../Game";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/Game" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
