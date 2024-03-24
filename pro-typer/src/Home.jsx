import "./Home.css";
import Navbar from "../../Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

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
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    axios.post("/api/leaderboard").then((response) => {
      setLeaderboard(response.data.leaderboard);
      console.log(response.data.leaderboard);
    });
  }, []);
  return (
    <>
      <Navbar></Navbar>

      <div className="content">
        <div className="container-summary">
          <div className="home-welcome">
            <div className="heading">Welcome to ProTyper</div>
            <div className="summary">
              Get ready to unleash your typing skills in the ultimate race
              against the clock – where speed meets precision at ProTyper!
            </div>
            <div className="home-welcome-buttons">
              <a href="#leaderboard-container" className="button">
                <span>View Leadboard</span>
              </a>
              <div className="button">
                <a onClick={() => navigate("/Game")}>Start Game</a>
              </div>
            </div>
          </div>
          <div id="leaderboard-container" className="leaderboard-container">
            <div className="leaderboard-title">Leaderboard</div>
            <div className="duration">
              <div className="leaderboard-time">7 Days</div>
              <div className="leaderboard-time">30 Days</div>
              <div className="leaderboard-time">All Time</div>
            </div>
            <div className="people-container">
              {leaderboard.map((person, index) => {
                return (
                  <div className="people">
                    <div className="rank">{index + 1}</div>
                    <div className="name">
                      <i className="fa-solid fa-user"></i> {person.firstname}{" "}
                      {person.lastname}
                    </div>
                    <div className="fastest-wpm">{person.wpm} WPM</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
