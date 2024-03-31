import "./Game.css";
import Navbar from "./Navbar";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "./pro-typer/src/userContext";
import axios from "axios";
import { ThemeContext } from "./pro-typer/src/themeContext";
const TEXT_API_URL = "https://api.quotable.io/random";

/**
 * @author Ajanthapan Agilaruben
 * This is the file that contains the main game, currently the game is set to calculate the time taken and
 * the words per minute. In addition, it also has a running car animation which moves when keys are pressed
 * and there is a reset button to get a new quote everytime.
 *
 * @date 12/5/2023 - 13:29:50 PM
 *
 * @returns game component.
 */
function Game() {
  /** Fetches a random quote from the Quotable.io API*/

  function randomText() {
    return fetch(TEXT_API_URL)
      .then((response) => response.json())
      .then((data) => data.content);
  }

  /**  Sets the quote in the quote box on the game page to a new quote and erases the input box */
  async function newText() {
    const text = await randomText();
    setCurrentText(text);
    setInputValue("");
  }

  const [currentQuote, setCurrentText] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [timer, setTimer] = useState(0);
  const [startedTyping, setStartedTyping] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [wordsPerMinute, setWordsPerMinute] = useState(0);
  const [finishedRace, setFinishedRace] = useState(false);
  const [animPaused, setAnimPaused] = useState(true);
  const [lastKeyPress, setLastKeyPress] = useState(0);

  const { updateProfile } = useContext(UserContext);
  const { currentSkin } = useContext(ThemeContext);

  /** Calculates typing metrics such as words per minute and sets each state */

  const calculateMetrics = () => {
    if (startedTyping && timer > 0) {
      const totalWords = inputValue.split(/\s+/).length;
      setWordsPerMinute(Math.round((totalWords / timer) * 60));
    }
  };

  /** Starts the timer interval when the user has started typing and resets statistics on page load */
  useEffect(() => {
    if (!pageLoaded) {
      newText();
      setWordsPerMinute(0);
      setPageLoaded(true);
      setInputValue("");
    }

    const interval = setInterval(() => {
      if (startedTyping) {
        setTimer((timer) => timer + 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [startedTyping]);

  /** Every second, the typing metrics are calculated and the car animation is handled */
  useEffect(() => {
    calculateMetrics();
    setAnimPaused(timer > lastKeyPress + 0.5 || timer == 0);
  }, [timer]);

  // If the user has finished typing the quote correctly, then the timer is paused and the car animation is reset */
  useEffect(() => {
    if (inputValue == currentQuote && startedTyping) {
      setStartedTyping(false);
      setAnimPaused(true);
      setLastKeyPress(timer);
      setFinishedRace(true);

      axios.post("/api/save-race", { speed: wordsPerMinute }).then(() => {
        updateProfile();
      });
    }
  }, [inputValue]);

  return (
    <>
      <Navbar></Navbar>
      <div className="main-container">
        <div className="game-container">
          <img
            className={`running-animation ${animPaused ? "paused" : ""} ${
              finishedRace ? "reset" : ""
            }`}
            src={currentSkin ? currentSkin.image : "src/assets/car.png"}
          ></img>
          <div className="time" id="timer">
            Timer: {timer}
          </div>
          {/** This whole section splits up the current quote into a span tag for each character */}
          <div className="text-container" id="quote">
            {currentQuote.split("").map((char, index) => {
              let correct = false;
              let empty = false;
              if (inputValue.length >= index + 1) {
                if (inputValue.substring(index, index + 1) == char) {
                  /**  If the character has been typed correctly by the user then it'll be green (correct class) */
                  correct = true;
                }
              } else {
                /** If it hasn't been typed yet then it will be white (no class) */
                empty = true;
              }

              return (
                <span
                  key={index}
                  className={
                    /**  If it's wrong then it'll be red (incorrect class)/*/
                    correct && !empty ? "correct" : empty ? "" : "incorrect"
                  }
                >
                  {char}
                </span>
              );
            })}
          </div>
          <input
            className="write"
            id="text"
            value={inputValue}
            onChange={(e) => {
              setStartedTyping(true);
              setInputValue(e.target.value);
              setAnimPaused(false);
              setLastKeyPress(timer);
            }}
            autoFocus
            autoComplete="off"
            disabled={finishedRace}
          ></input>
        </div>
        {/* This displays the words per minute */}
        <div className="math-container">
          <div>Words Per Minute: {wordsPerMinute} </div>

          {/* This resets the flag indicating the users typing  */}
          <div
            className="button"
            onClick={() => {
              setStartedTyping(false); // This resets the flag indicating the users typing
              newText(); // loads new text
              setWordsPerMinute(0); // resets the wpm
              setTimer(0); // resets the timer
              setInputValue(""); // clears the current input
              setFinishedRace(false); // resets the flag indicating the typing race is finished
              setAnimPaused(true); // pauses any ongoing animations
            }}
          >
            <i className="fa-solid fa-rotate-right" />
            <div>Reset</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Game;
