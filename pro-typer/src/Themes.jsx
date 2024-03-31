/**
 * @author Ajanthapan Agilaruben
 * This is the file is used for the themes page in the my account section. It holds the themes which are bought by the user and it allows theme to switch between different themes in the page.
 *
 * @date 31/3/2024 - 13:29:50 PM
 *
 * @returns Themes component
 */
import { useContext } from "react";
import Navbar from "../../Navbar.jsx";
import AccountNav from "./AccountNav.jsx";
import "./OwnedItems.css";
import { UserContext } from "./userContext.jsx";
import { ThemeContext } from "./themeContext.jsx";
import { useNavigate } from "react-router-dom";

function Themes() {
  const { user } = useContext(UserContext);
  const { currentBG, setCurrentBG } = useContext(ThemeContext);
  const navigate = useNavigate();
  return (
    <>
      {/* returns Navbar component */}
      <Navbar></Navbar>
      <div className="ownedItems-page">
        <div className="container-ownedItems">
          {/* Returns the AccountNav component */}
          <AccountNav></AccountNav>

          <div className="item-section">Themes:</div>
          <div className="note">
            *Click on theme twice to go back to default background*
          </div>
          <div className="owned-items-list">
            {user?.items
              ? user.items
                  .filter((item) => item.type == "theme") // this filters through the items so that it only includes the type which are themes
                  .map((item, index) => {
                    return (
                      <div
                        key={`owned-item-theme-${index}`}
                        className={`owned-item ${
                          currentBG == item.image ? "active" : "" // This highlights the active themes
                        }`}
                        onClick={() => {
                          if (currentBG == item.image) {
                            // Sets the current background and it toggles to null if it is already active
                            setCurrentBG(null);
                          } else {
                            setCurrentBG(item.image);
                          }
                        }}
                      >
                        {/* Displays the image of the theme */}
                        <img
                          className="Owned-items-image theme-image"
                          src={item.image}
                          alt=""
                        />
                        {item.name}
                      </div>
                    );
                  })
              : "No items found..."}
          </div>
        </div>
      </div>
    </>
  );
}

export default Themes;
