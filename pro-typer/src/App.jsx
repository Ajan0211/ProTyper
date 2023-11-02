import "./App.css";
import Login from "../../Login";
import { Routes, Route } from "react-router-dom";
import Start from "./Start";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/start" element={<Start />} />
      </Routes>
    </>
  );
}

export default App;
