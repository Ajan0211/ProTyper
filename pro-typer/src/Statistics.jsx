/**
 * @author Ajanthapan Agilaruben
 * This is the file is used for the statistics page within the my account page.
 * It holds the average speed of the user and the amount of races they have done after making an account.
 *
 * @date 31/3/2024 - 13:29:50 PM
 *
 * @returns Statistics component
 */

import Navbar from "../../Navbar.jsx";
import AccountNav from "./AccountNav.jsx";
import "./Statistics.css";

import { useContext } from "react";
import { UserContext } from "./userContext.jsx";

function Statistics() {
  const { user } = useContext(UserContext);
  // This is the function that calculates the average speed of the users races
  const calculateAvgSpeed = () => {
    let total_speed = 0;

    if (user?.races) {
      // checks if the user has any races and it is looping through to sum up the speeds of each race
      user.races.forEach((race) => {
        total_speed += race.speed;
      });
    }

    if (total_speed != 0) {
      // This calculates the average speed if the total speed isnt 0
      return total_speed / user.races.length;
    }

    return 0; // returns 0 if there are no races
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="statistics-page">
        <div className="container-statistics">
          <AccountNav></AccountNav>
          <div className="content-container">
            <div className="races">
              {/* displays the number of races */}
              Number of Races: {user?.races ? user.races.length : 0} races
            </div>
            <div className="avg-speed">
              {/* displays the average speed */}
              Average speed: {calculateAvgSpeed()} WPM
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Statistics;
