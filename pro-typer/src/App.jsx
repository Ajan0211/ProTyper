import "./App.css";
import Login from "../../Login";
import { Routes, Route } from "react-router-dom";
import Start from "./Start";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/start" element={<Start />} />
      </Routes>
    </div>
  );
}

export default App;
