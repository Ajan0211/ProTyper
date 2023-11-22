import "./Game.css";
import Navbar from "./pro-typer/src/navbar";
import { useEffect, useState } from "react";
const TEXT_API_URL = "https://api.quotable.io/random";

function Game() {
  function randomText() {
    return fetch(TEXT_API_URL)
      .then((response) => response.json())
      .then((data) => data.content);
  }
  async function newText() {
    const text = await randomText();
    setCurrentText(text);
  }

  const [currentQuote, setCurrentText] = useState("");

  useEffect(() => {
    newText();
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div className="main-container">
        <div className="game-container">
          <div className="time" id="timer">
            Timer: 0
          </div>
          <div className="text-container" id="quote">
            {currentQuote}
          </div>
          <input id="text" autoFocus></input>
        </div>
      </div>
    </>
  );
}
export default Game;
