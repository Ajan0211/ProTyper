import "./Home.css";
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar></Navbar>

      <div className="content">
        <div className="container">
          <div className="heading">Welcome to ProTyper</div>
          <div className="summary">
            Get ready to unleash your typing skills in the ultimate race against
            the clock – where speed meets precision at ProTyper!
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
