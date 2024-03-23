import { useContext } from "react";
import Navbar from "../../Navbar.jsx";
import AccountNav from "./AccountNav.jsx";
import "./OwnedItems.css";
import { UserContext } from "./userContext.jsx";
import { ThemeContext } from "./themeContext.jsx";
import { useNavigate } from "react-router-dom";

function Skins() {
  const { user } = useContext(UserContext);
  const { currentBG, setCurrentBG } = useContext(ThemeContext);
  const navigate = useNavigate();
  return (
    <>
      <Navbar></Navbar>
      <div className="ownedItems-page">
        <div className="container-ownedItems">
          <AccountNav></AccountNav>

          <div className="item-section">Themes:</div>
          <div className="note">
            *Click on theme twice to go back to default background*
          </div>
          <div className="owned-items-list">
            {user?.items
              ? user.items
                  .filter((item) => item.type == "theme")
                  .map((item, index) => {
                    return (
                      <div
                        key={`owned-item-theme-${index}`}
                        className={`owned-item ${
                          currentBG == item.image ? "active" : ""
                        }`}
                        onClick={() => {
                          if (currentBG == item.image) {
                            setCurrentBG(null);
                          } else {
                            setCurrentBG(item.image);
                          }
                        }}
                      >
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

export default Skins;
