import "./Home.css";
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar></Navbar>
      <div className="content">
        <div className="button">
          <a onClick={() => navigate("/Game")}>Start Game</a>
        </div>
      </div>
    </>
  );
}

export default Home;
