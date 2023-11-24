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
    setInputValue("");
  }

  const [currentQuote, setCurrentText] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [timer, setTimer] = useState(0);
  const [startedTyping, setStartedTyping] = useState(false);
  const [wordsPerMinute, setWordsPerMinute] = useState(0);

  const calculateMetrics = () => {
    if (startedTyping && timer > 0) {
      const totalWords = inputValue.split(/\s+/).length;
      setWordsPerMinute(Math.round((totalWords / timer) * 60));
    }
  };

  useEffect(() => {
    if (!startedTyping) {
      newText();
    }

    setWordsPerMinute(0);
    const interval = setInterval(() => {
      if (startedTyping) {
        setTimer((timer) => timer + 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [startedTyping]);

  useEffect(() => {
    calculateMetrics();
  }, [timer]);

  useEffect(() => {
    if (inputValue == currentQuote && startedTyping) {
      setStartedTyping(false);
    }
  }, [inputValue]);

  return (
    <>
      <Navbar></Navbar>
      <div className="main-container">
        <div className="game-container">
          <div className="time" id="timer">
            Timer: {timer}
          </div>
          <div className="text-container" id="quote">
            {currentQuote.split("").map((char, index) => {
              let correct = false;
              let empty = false;
              if (inputValue.length >= index + 1) {
                if (inputValue.substring(index, index + 1) == char) {
                  correct = true;
                }
              } else {
                empty = true;
              }

              return (
                <span
                  key={index}
                  className={
                    correct && !empty ? "correct" : empty ? "" : "incorrect"
                  }
                >
                  {char}
                </span>
              );
            })}
          </div>
          <input
            id="text"
            value={inputValue}
            onChange={(e) => {
              setStartedTyping(true);
              setInputValue(e.target.value);
            }}
            autoFocus
          ></input>
        </div>
        <div className="math-container">
          <div>Words per minute: {wordsPerMinute} </div>
        </div>
      </div>
    </>
  );
}
export default Game;
