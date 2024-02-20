import Navbar from "../../Navbar.jsx";
import AccountNav from "./AccountNav.jsx";
import "./Statistics.css";

function Statistics() {
  return (
    <>
      <Navbar></Navbar>
      <div className="statistics-page">
        <div className="container-statistics">
          <AccountNav></AccountNav>
          <div className="content-container">
            <div className="races">Number of Races: </div>
            <div className="avg-speed">Average speed: </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Statistics;
