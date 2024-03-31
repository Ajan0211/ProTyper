import Navbar from "../../Navbar.jsx";
import AccountNav from "./AccountNav.jsx";
import "./Statistics.css";

import { useContext } from "react";
import { UserContext } from "./userContext";

function Statistics() {
  const { user } = useContext(UserContext);

  const calculateAvgSpeed = () => {
    let total_speed = 0;

    if (user?.races) {
      user.races.forEach((race) => {
        total_speed += race.speed;
      });
    }

    if (total_speed != 0) {
      return total_speed / user.races.length;
    }

    return 0;
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="statistics-page">
        <div className="container-statistics">
          <AccountNav></AccountNav>
          <div className="content-container">
            <div className="races">
              Number of Races: {user?.races ? user.races.length : 0} races
            </div>
            <div className="avg-speed">
              Average speed: {calculateAvgSpeed()} WPM
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Statistics;
