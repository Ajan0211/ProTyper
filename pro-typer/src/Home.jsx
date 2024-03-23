import "./Home.css";
import Navbar from "../../Navbar";
import { useNavigate } from "react-router-dom";

/**
 * @author Ajanthapan Agilaruben
 * This file contains the Home page to the game so this would allow the user to press the button Start Game
 * and it would direct the user to the game.
 * @date 12/5/2023 - 12:50:30 PM
 *
 * @returns { the navbar component with a short welcome text and a button which directs user to the game.}
 */
function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar></Navbar>

      <div className="content">
        <div className="container-summary">
          <div className="heading">Welcome to ProTyper</div>
          <div className="summary">
            Get ready to unleash your typing skills in the ultimate race against
            the clock – where speed meets precision at ProTyper!
          </div>
          <div className="leaderboard-container">
            <div className="leaderboard-title">Leaderboard</div>
            <div className="duration">
              <div className="time">7 Days</div>
              <div className="time">30 Days</div>
              <div className="time">All Time</div>
            </div>
            <div className="people">
              <div className="rank">1st</div>
              <div className="name">
                <i className="fa-solid fa-user"></i> ajan
              </div>
              <div className="fastest-wpm">30 WPM</div>
            </div>
          </div>
          <div className="button">
            <a onClick={() => navigate("/Game")}>Start Game</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
