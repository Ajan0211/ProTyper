/**
 * @author Ajanthapan Agilaruben
 * This is the file is used for the skins page within the my account page.
 * It holds the the skins bought by the user and they can change it on the page and press the button to go to the game.
 *
 * @date 1/4/2024 - 13:29:50 PM
 *
 * @returns Skins component
 */

import { useContext } from "react";
import Navbar from "../../Navbar.jsx";
import AccountNav from "./AccountNav.jsx";
import "./OwnedItems.css";
import { UserContext } from "./userContext.jsx";
import { ThemeContext } from "./themeContext.jsx";
import { useNavigate } from "react-router-dom";

// This is the function that helps display and select the skin.
function Skins() {
  const { user } = useContext(UserContext);
  const { currentSkin, setCurrentSkin, currentBG, setCurrentBG } =
    useContext(ThemeContext);
  const navigate = useNavigate();
  return (
    <>
      <Navbar></Navbar>
      <div className="ownedItems-page">
        <div className="container-ownedItems">
          <AccountNav></AccountNav>
          <div className="item-section">Skins:</div>
          <div className="owned-items-list">
            {/* This maps over the users items and filters it to just get skins */}
            {user?.items
              ? user.items
                  .filter((item) => item.type == "skin")
                  .map((item, index) => {
                    return (
                      <div
                        key={`owned-item-${index}`}
                        className={`owned-item ${
                          currentSkin == item ? "active" : "" // This highlights the currently selected skin
                        }`}
                        onClick={() => {
                          setCurrentSkin(item); // This sets the clicked skin as the current skin
                        }}
                      >
                        <img // This displays the image of the skin
                          className="Owned-items-image"
                          src={item.image}
                          alt=""
                        />
                        {item.name}
                      </div>
                    );
                  })
              : "No items found..."}
          </div>

          <div className="button-container2">
            {/* This navigates the user to the game */}
            <div className="change-button" onClick={() => navigate("/Game")}>
              Head to Game
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skins;
