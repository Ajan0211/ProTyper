import "./Game.css";
import Navbar from "./pro-typer/src/navbar";

function Game() {
  return (
    <>
      <Navbar></Navbar>
      <div className="main-container">
        <div className="game-container">
          <div className="time" id="timer">
            Timer: 0
          </div>
          <div className="text-container" id="quote"></div>
          <input id="text" autoFocus></input>
        </div>
      </div>
    </>
  );
}
export default Game;
